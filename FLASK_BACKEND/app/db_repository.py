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


def remove_from_cart(products):
    try:
        db = client[DB_NAME]
        collection = db[CART_COLLECTION]
        user_id = '6773cc029ac602eedcaf918f'

        existing_cart = collection.find_one({"user": ObjectId(user_id)})
        if existing_cart:
            for item in products:
                product_id = ObjectId(item['id'])
                quantity = item['quantity']

                # Reduce quantity or remove item if quantity is 0 or less
                cart_item = next((x for x in existing_cart['items'] if x['product'] == product_id), None)
                if cart_item:
                    if cart_item['quantity'] > quantity:
                        # Decrease the quantity
                        collection.update_one(
                            {
                                "user": ObjectId(user_id),
                                "items.product": product_id
                            },
                            {
                                "$inc": {
                                    "items.$.quantity": -quantity
                                }
                            }
                        )
                    else:
                        # Remove the item completely
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
