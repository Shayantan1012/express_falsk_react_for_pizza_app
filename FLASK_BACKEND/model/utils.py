import os
import torch
from transformers import AutoImageProcessor, AutoModelForImageClassification
from PIL import Image
import torch


def predict_output():
    
    folder = "Uploads"  # Placeholder for the actual image path
    
    list_dir = os.listdir(folder)
    if not list_dir:
        return "No images found in the directory."
    
    img_path = os.path.join(folder, list_dir[0])  # Get the first image in the directory
    
    
    # Load processor and model
    processor = AutoImageProcessor.from_pretrained("rajistics/finetuned-indian-food", use_fast=True)
    model = AutoModelForImageClassification.from_pretrained("rajistics/finetuned-indian-food")

    image = Image.open(img_path).convert("RGB")  # Replace with the actual image path
    
        
    # Preprocess
    inputs = processor(images=image, return_tensors="pt")

    # Forward pass
    with torch.no_grad():
        outputs = model(**inputs)

    # Get prediction
    logits = outputs.logits
    predicted_class = logits.argmax(-1).item()
    label = model.config.id2label[predicted_class]

    os.remove(img_path)  # Remove the image file (if needed, adjust this logic)


    return {"Predicted class": label ,
            "confidence": round(logits.max().item() , 2)}  # Format confidence to 2 decimal places
    