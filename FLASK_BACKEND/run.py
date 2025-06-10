from flask import Flask
from app import app
from model import model_blueprint


app.register_blueprint(model_blueprint, url_prefix='/model')



if __name__ == '__main__':
    app.run(host='localhost', port=5030, debug=True)