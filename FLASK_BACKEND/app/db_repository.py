from app import client , DB_NAME , USER_COLLECTION, PRODUCT_COLLECTION, CART_COLLECTION, ORDER_COLLECTION



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
    