from app import client , DB_NAME , USER_COLLECTION, PRODUCT_COLLECTION, CART_COLLECTION, ORDER_COLLECTION
from flask import session
from bson import ObjectId


def find_products():
    available_products = []
    try:
        db = client[DB_NAME]
        collection = db[PRODUCT_COLLECTION]
        products = collection.find({})
        for product in products:
            available_products.append(product)
        return available_products
    except Exception as e:
        print(f"An error occurred while fetching products: {str(e)}")
        return available_products
    
    
    
def add_to_cart(product):
    try:
        db = client[DB_NAME]
        collection = db[CART_COLLECTION]

        user_id = session.get('user_info',None)
        user_obj_id = ObjectId(user_id)
        print(user_id)

        existing_cart = collection.find_one({"user": user_obj_id})
        print("This is product in cart:", existing_cart)

        if existing_cart:
            for item in product:
                product_id = ObjectId(item['id'])
                quantity = item['quantity']

                result = collection.update_one(
                    {
                        "user": user_obj_id,
                        "items.product": product_id
                    },
                    {
                        "$inc": {
                            "items.$.quantity": quantity
                        }
                    }
                )

                if result.modified_count == 0:
                    # Product not in cart, push new item
                    collection.update_one(
                        {"user": user_obj_id},
                        {
                            "$push": {
                                "items": {
                                    "product": product_id,
                                    "quantity": quantity
                                }
                            }
                        },
                        upsert=True
                    )

        else:
            # No existing cart — create a new one
            items = [
                {
                    "product": ObjectId(item['id']),
                    "quantity": item['quantity']
                } for item in product
            ]
            collection.insert_one({
                "user": user_obj_id,
                "items": items
            })

        return {
            "message": "Products added to cart successfully.",
            "status": True
        }

    except Exception as e:
        print(f"An error occurred while adding to cart: {str(e)}")
        return {
            "message": "An error occurred while adding to cart in database.",
            "status": False
        }
        
        
        
def remove_from_cart(user_products):
    try:
        db = client[DB_NAME]
        collection = db[CART_COLLECTION]
        user_id = session.get('user_info', None)

        if not user_id:
            return {
                "message": "User not found in session.",
                "status": False
            }

        user_obj_id = ObjectId(user_id)
        existing_cart = collection.find_one({"user": user_obj_id})
        print("This is the existing cart:", existing_cart)

        if not existing_cart:
            return {
                "message": "No cart found for user.",
                "status": False
            }

        # ✅ Remove all items if user_products is None or empty
        if not user_products:
            collection.update_one(
                {"user": user_obj_id},
                {"$set": {"items": []}}
            )
            return {
                "message": "All items removed from cart successfully.",
                "status": True
            }

        all_products = find_products()  # List of all products

        for user_item in user_products:
            user_name = user_item['product'].strip().lower().replace(" ", "")
            user_qty = user_item['quantity']
            product_id = None

            # Match product by name
            for p in all_products:
                db_name = p['productName'].strip().lower().replace(" ", "")
                if db_name == user_name:
                    product_id = ObjectId(p['_id'])
                    break

            if not product_id:
                continue  # Skip if not found

            # Remove or update item in cart
            cart_item = next((x for x in existing_cart['items'] if x['product'] == product_id), None)
            if cart_item:
                if cart_item['quantity'] > user_qty:
                    collection.update_one(
                        {
                            "user": user_obj_id,
                            "items.product": product_id
                        },
                        {
                            "$inc": {
                                "items.$.quantity": -user_qty
                            }
                        }
                    )
                else:
                    collection.update_one(
                        {"user": user_obj_id},
                        {
                            "$pull": {
                                "items": {"product": product_id}
                            }
                        }
                    )

        return {
            "message": "Selected products removed from cart successfully.",
            "status": True
        }

    except Exception as e:
        print(f"An error occurred while removing from cart: {str(e)}")
        return {
            "message": "An error occurred while removing from cart in database.",
            "status": False
        }
