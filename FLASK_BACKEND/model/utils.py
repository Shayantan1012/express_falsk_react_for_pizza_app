import cv2
import os

def predict_output():
    folder = "Uploads"  # Placeholder for the actual image path
    
    list_dir = os.listdir(folder)
    if not list_dir:
        return "No images found in the directory."
    
    img_path = os.path.join(folder, list_dir[0])  # Get the first image in the directory
    
    
    # ////////////////////
    img = cv2.imread(img_path)
    cv2.imshow("Show Image:",img)
    cv2.waitKey(5000)
    cv2.destroyAllWindows()
    # ////////////////////
    
    os.remove(img_path)  # Remove the image file (if needed, adjust this logic)


    return "Image processed and removed successfully."
    