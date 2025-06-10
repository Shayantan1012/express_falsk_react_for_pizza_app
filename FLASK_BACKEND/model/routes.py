from model import model_blueprint
from model.utils import predict_output 
from flask import request
import os

@model_blueprint.route('/')
def index():

    return "Model Blueprint is working!"

SAVE_IMAGE_DIRECTORY = 'Uploads'
os.makedirs(SAVE_IMAGE_DIRECTORY, exist_ok=True)

@model_blueprint.route('/predict', methods=['POST'])
def predict():
    try:
        if 'image' not in request.files:
            return {"error": "No image part in the request"}, 400
        
        img = request.files['image']


        if img.filename == '':
            return {"error": "No image selected for uploading"}, 400
        
        filename= img.filename
        img_path = os.path.join(SAVE_IMAGE_DIRECTORY, filename)
        
        img.save(img_path)
        
        return predict_output()
    except Exception as e:
        return {f'An Unexpected Error Occures : {str(e)}'}, 400    

    
    