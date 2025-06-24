import random
from VoiceAssistance.utils import PredefinedResponseManager
from app.db_repository import find_products
class IntentService:
    def __init__(self, intent_repository):
        self.intent_repository = intent_repository
        self.predefined_response_manager = PredefinedResponseManager()
    
    def order_service(self):
        try:
            print("IntentRepository:", self.intent_repository)    
            if (len(self.intent_repository['products'])==0):
                return random.choice(self.predefined_response_manager.product_not_found())
            
            products = find_products()
            
            if (len(products) == 0):
                return "Sorry, no products are available at the moment."
            
            available_products =[]
            not_available_products = []
            for product in self.intent_repository['products']:
                product_name = product['product']
                product_quantity = product['quantity']
                for p in products:
                    if p['productName'] == product_name:
                        if p['quantity'] >= product_quantity:
                            available_products.append({"product":p['productName'], "quantity": product_quantity})
                        else:
                            not_available_products.append(p['productName'])
            
            if(len(available_products) == 0):
                return random.choice(self.predefined_response_manager.product_not_available())
            if(len(not_available_products) > 0):
                return f"Sorry {', '.join(not_available_products)} are not available in the requested quantity."
                  
                #//////////////////////////////////////////////////////////////////////
                
                
                
                
                
                #//////////////////////////////////////////////////////////////////////         
            return random.choice(self.predefined_response_manager.product_added_cart())    
        
        except Exception as e:
            return f"An error occurred in order_service: {str(e)}"