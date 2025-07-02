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
        # user_id = session.get('user_id')
        user_id = '6773cc029ac602eedcaf918f'
        
        # Check if the user already has a cart
        existing_cart = collection.find_one({"user": ObjectId(user_id)})
        if existing_cart:
            # Update the existing cart

            for item in product:
                product_id = ObjectId(item['id'])
                quantity = item['quantity']

                # Check if the product already exists in the user's cart
                result = collection.update_one(
                    {
                        "user": user_id,
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
                        {"user": user_id},
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
        user_id = '6773cc029ac602eedcaf918f'

        existing_cart = collection.find_one({"user": ObjectId(user_id)})
        all_products = find_products()  # DB product list (with ID, name, etc.)

        if existing_cart:
            for user_item in user_products:
                user_name = user_item['product'].strip().lower().replace(" ", "")
                user_qty = user_item['quantity']
                product_id = None

                # Match by cleaned product name
                for p in all_products:
                    db_name = p['productName'].strip().lower().replace(" ", "")
                    if db_name == user_name:
                        product_id = ObjectId(p['_id'])
                        break

                if not product_id:
                    continue  # Skip unmatched products

                # Check if product exists in cart
                cart_item = next((x for x in existing_cart['items'] if x['product'] == product_id), None)
                if cart_item:
                    if cart_item['quantity'] > user_qty:
                        # Reduce quantity
                        collection.update_one(
                            {
                                "user": ObjectId(user_id),
                                "items.product": product_id
                            },
                            {
                                "$inc": {
                                    "items.$.quantity": -user_qty
                                }
                            }
                        )
                    else:
                        # Remove the product from cart
                        collection.update_one(
                            {"user": ObjectId(user_id)},
                            {
                                "$pull": {
                                    "items": {"product": product_id}
                                }
                            }
                        )

        return {
            "message": "Products removed from cart successfully.",
            "status": True
        }

    except Exception as e:
        print(f"An error occurred while removing from cart: {str(e)}")
        return {
            "message": "An error occurred while removing from cart in database.",
            "status": False
        }
