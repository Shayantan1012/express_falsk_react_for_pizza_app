# MONGO_URL = "mongodb+srv://shayantanbiswas137:0viUsU9ZINsriSNG@cluster0.7exkr6j.mongodb.net/"
MONGO_URL = "mongodb+srv://shayantanbiswas137:0viUsU9ZINsriSNG@cluster0.7exkr6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DB_NAME = "test"
USER_COLLECTION = "users"
PRODUCT_COLLECTION = "products"
CART_COLLECTION = "carts"
ORDER_COLLECTION = "orders"




from flask import Flask

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

client = MongoClient(MONGO_URL, server_api=ServerApi('1'))

def create_app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = MONGO_URL
    from app.routes import main  # import blueprint after mongo is ready
    app.register_blueprint(main)
    return app
