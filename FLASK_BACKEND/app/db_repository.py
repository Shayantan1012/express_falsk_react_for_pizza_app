from app import client , DB_NAME , USER_COLLECTION, PRODUCT_COLLECTION, CART_COLLECTION, ORDER_COLLECTION
from flask import session


def find_products():
    available_products = []
    try:
        db = client[DB_NAME]
        collection = db[PRODUCT_COLLECTION]
        products = collection.find({}, {"_id": 0,})
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
        user_id = session.get('user_id')
        
        # Check if the user already has a cart
        existing_cart = collection.find_one({"_id": user_id})
        print("This is the cart:",existing_cart)
        if existing_cart:
            # Update the existing cart
            for item in product:
                collection.updateOne(
                    {"$push": {"items": product['_id']}}
                )
    
    except Exception as e:
        print(f"An error occurred while adding to cart: {str(e)}")
        return False        
                