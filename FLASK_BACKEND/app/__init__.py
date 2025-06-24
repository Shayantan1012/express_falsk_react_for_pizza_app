MONGODB_URI = "mongodb://localhost:27017/myDatabase"


from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["MONGO_URI"] = MONGODB_URI

mongo = PyMongo(app)

from app import routes

