import random
from VoiceAssistance.utils import PredefinedResponseManager
from app.db_repository import find_products , add_to_cart
from VoiceAssistance.llm_engine import llm_output
from flask import session 

class IntentService:
    def __init__(self, intent_repository):
        self.intent_repository = intent_repository
        self.predefined_response_manager = PredefinedResponseManager()
    
    def order_service(self):
        try:
            if 'active_intent' not in session:
                if (len(self.intent_repository['products'])==0):
                    return random.choice(self.predefined_response_manager.product_not_found())
                products = find_products()
                
                if (len(products) == 0):
                    return "Sorry, no products are available at the moment."
                
                
                available_products =[]
                not_available_products = []
                for product in self.intent_repository['products']:
                    product_name = product['product'].lower()
                    product_quantity = product['quantity']
                    for p in products:
                        if p['productName'].lower() == product_name:
                            if p['quantity'] >= product_quantity:
                                available_products.append({"product":p['productName'], "quantity": product_quantity ,"id": str(p['_id'])})
                        else:
                            not_available_products.append(p['productName'])
                        break    
                  
                
                if(len(available_products) == 0):
                    return random.choice(self.predefined_response_manager.product_not_available())
                if(len(not_available_products) > 0):
                    return f"Sorry {', '.join(not_available_products)} are not available in the requested quantity."
                    
                session['active_intent']= {'intent': 'add_cart', 'products': available_products } 
                                 
                return random.choice(self.predefined_response_manager.product_added_to_cart_query())
                    
            else:
                product=session['active_intent']
                
                print("This is the session:",session['active_intent'])
                                
                if(len(self.intent_repository['products'])!=0):
                                        
                    products = find_products()
                    
                    if (len(products) == 0):
                        return "Sorry, no products are available at the moment."
                    
                    
                    available_products =[]
                    not_available_products = []
                    for product in self.intent_repository['products']:
                        product_name = product['product'].lower()
                        product_quantity = product['quantity']
                        for p in products:
                            if p['productName'].lower() == product_name:
                                if p['quantity'] >= product_quantity:
                                    available_products.append({"product":p['productName'], "quantity": product_quantity ,"id": str(p['_id'])})
                            else:
                                not_available_products.append(p['productName'])
                            break    

                    if(len(available_products) == 0):
                        return random.choice(self.predefined_response_manager.product_not_available())
                    if(len(not_available_products) > 0):
                        return f"Sorry {', '.join(not_available_products)} are not available in the requested quantity."

                
                    available_products = product['products'] + available_products
                    session['active_intent'] = {'intent': 'add_cart', 'products': available_products}
                    return random.choice(self.predefined_response_manager.product_added_to_cart_query())

                else :
                    
                    print("This is the session:",session['active_intent'])
                    
                    user_cart = add_to_cart(session['active_intent']['products'])
                    
                    if(not user_cart):
                        return "Failed to add products to the cart. Please try again later."
                    
                    if(user_cart['status'] == True):
                        user_cart = user_cart['message']
                    else:
                        user_cart = "Failed to add products to the cart. Please try again later."    
                     
                    session.pop('active_intent', None)
                
                    return random.choice(self.predefined_response_manager.product_added_cart())   
                
                

        except Exception as e:
            return f"An error occurred in order_service: {str(e)}"
        
    
    def login_service(self):
        try:
            predefined_response_manager= PredefinedResponseManager()
            response = predefined_response_manager.login_query()
            return random.choice(response)  
        except Exception as e:

            return   f"An error occurred in login_service: {str(e)}"
        
        

    def new_user_service(self):
        try:
            predefined_response_manager= PredefinedResponseManager()
            
            response = predefined_response_manager.new_user()
            
            return random.choice(response)  
        
        except Exception as e:

            return   f"An error occurred in login_service: {str(e)}"    
        
        
    
    def send_menu_service(self):
        try:
            predefined_response_manager= PredefinedResponseManager()
            
            response =predefined_response_manager.show_menu()
            
            return random.choice(response)  
        
        except Exception as e:

            return   f"An error occurred in login_service: {str(e)}"        
        
        
       
    def home_page_service(self):
        try:
            predefined_response_manager= PredefinedResponseManager()
            
            response = predefined_response_manager.show_home_page()
            
            return random.choice(response)  
        
        except Exception as e:

            return   f"An error occurred in login_service: {str(e)}"            
        
        
               
    def payment_service(self):
        try:
            predefined_response_manager= PredefinedResponseManager()
            
            response = predefined_response_manager.payment_page()
            
            return random.choice(response)  
        
        except Exception as e:

            return   f"An error occurred in login_service: {str(e)}"         
        
               
    def other_service(self):
        try:
            
            prompt = 'This is a website for food app and this is a "other_query" query. Please answer the query in a friendly manner.'
            
            response = llm_output(system_prompt=prompt)
            
            return response  
        
        except Exception as e:

            return   f"An error occurred in login_service: {str(e)}"                   