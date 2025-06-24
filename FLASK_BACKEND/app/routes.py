from flask import Blueprint, jsonify

from app import client

main = Blueprint("main", __name__)



@main.route("/", methods=["GET"])
def home_page():
    # Convert cursor to list, then jsonify to return a valid response
    db=client['test']
    collection = db['users']
    carts = list(collection.find({},{"_id": 0}))
    return jsonify(carts)
