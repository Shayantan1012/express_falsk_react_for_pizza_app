import random
from VoiceAssistance.utils import PredefinedResponseManager
class IntentService:
    def __init__(self, intent_repository):
        self.intent_repository = intent_repository
        self.predefined_response_manager = PredefinedResponseManager()
    
    def order_service(self):
        try:
            print("IntentRepository:", self.intent_repository)    
            if (len(self.intent_repository['products'])==0):
                return random.choice(self.predefined_response_manager.product_not_found())
            
            
            return random.choice(self.predefined_response_manager.product_added_cart())    
        
        except Exception as e:
            return f"An error occurred in order_service: {str(e)}"