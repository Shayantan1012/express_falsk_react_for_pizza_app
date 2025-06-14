from flask import Flask
from app import app
from model import model_blueprint
from flask_cors import CORS


app.register_blueprint(model_blueprint, url_prefix='/model')



if __name__ == '__main__':
    CORS(app, origins=["http://localhost:5173"], supports_credentials=True)
    app.run(host='localhost', port=5030, debug=True)