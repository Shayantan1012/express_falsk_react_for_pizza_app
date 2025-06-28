class PromptManager():
    def __init__(self, user_prompt):
        self.user_prompt = user_prompt
        
    def intentPrompt(self) -> str:
        system_prompt = '''
        You are a smart voice assistant for an e-commerce app. Your task is to:
        
        1. **Identify the intent** behind a user's message.
        2. **Extract product information** if relevant.

        ### Supported Intents:
        - log_in: user wants to log in (e.g., "Sign in", "Let me log in")
        - new_user: user wants to create an account (e.g., "I need an account")
        - send_menu: user wants to see categories or main menu (e.g., "Show me the menu")
        - home_page: user wants to go to homepage or restart (e.g., "Take me back", "Go to home")
        - add_cart: user wants to buy or add products (e.g., "Add this", "I want to buy", "Get me this", "Put in cart")
        - remove_from_cart: user wants to remove items (e.g., "Remove this", "Delete from cart")
        - search_in_product: user wants to browse or find items (e.g., "Show me running shoes")
        - product_query: user wants product info (e.g., "Does this have size 9?", "Is this waterproof?")
        - price_intent: user asks about price (e.g., "How much is this?", "What's the price?")
        - payment: user wants to pay or checkout (e.g., "Proceed to checkout", "Pay now")
        - other_queries: anything else (e.g., "What’s your return policy?")

        ### Rules:
        - If no product is mentioned, return an empty list.
        - If intent is add_cart or remove_from_cart, extract each product and quantity (default 1 if not mentioned).
        - If intent is search_in_product, product_query, or price_intent, extract product names (quantity = null).
        - For all other intents, product list is empty.

        ### Format:
        {{
        "intent": "<intent_label>",
        "products": [
            {{"product": "<product_name>", "quantity": <quantity>}},
            ...
        ]
        }}

        ### Examples:

        User: "I want to buy 2 blue shoes"  
        Output:
        {{
        "intent": "add_cart",
        "products": [
            {{"product": "blue shoes", "quantity": 2}}
        ]
        }}

        User: "Sign me in"  
        Output:
        {{
        "intent": "log_in",
        "products": []
        }}

        User: "Delete the red jacket"  
        Output:
        {{
        "intent": "remove_from_cart",
        "products": [
            {{"product": "red jacket", "quantity": 1}}
        ]
        }}

        User: "How much does this bag cost?"  
        Output:
        {{
        "intent": "price_intent",
        "products": [
            {{"product": "bag", "quantity": null}}
        ]
        }}

        User: "Is this phone waterproof?"  
        Output:
        {{
        "intent": "product_query",
        "products": [
            {{"product": "phone", "quantity": null}}
        ]
        }}

        User: "Go back to homepage"  
        Output:
        {{
        "intent": "home_page",
        "products": []
        }}

        ### Now analyze the following user message:

        User: "{user_prompt}"

        Output:
        '''
        return system_prompt.format(user_prompt=self.user_prompt)





class PredefinedResponseManager():
    def __init__(self):
        pass

    def product_not_found(self):
        product_quantity_prompts = [
            "Please tell me the product name and the quantity you'd like to add to your cart.",
            "What product do you want to add? Please also mention how many units you need.",
            "Sure! Could you please provide the product name and how many you want?",
            "I can help you with that. Tell me the product and the quantity you'd like to order.",
            "Let me know what you want to buy and how many items you need.",
            "Please enter or say the product name followed by the quantity.",
            "Which product are you looking for, and how many units do you want?",
            "To proceed, I need the product name and quantity. For example, 'two ball pens'.",
            "Alright! Just give me the name of the product and how many you want.",
            "Before I add it to your cart, please mention both the item and the quantity."
        ]

        return product_quantity_prompts


    def product_added_cart(self):
        product_added_responses = [
            "The product has been successfully added to your cart.",
            "Got it! I've added the item to your cart.",
            "Item successfully added to your cart.",
            "Your product is now in the cart.",
            "Done! The product has been added.",
            "Successfully added the item to your cart.",
            "The item you requested is now in your cart.",
            "Product added. Let me know if you need anything else.",
            "It’s in your cart! You can continue shopping.",
            "Added to cart successfully. What would you like to do next?"
]


        return product_added_responses


    def product_not_available(self):
        product_not_available_responses = [
            "Sorry, we don't have enough stock for that product.",
            "Unfortunately, we can't fulfill that request due to insufficient stock.",
            "We apologize, but we don't have enough of that product available.",
            "Regrettably, we can't add that item to your cart because of low stock.",
            "I'm sorry, but we can't process that order due to stock limitations.",
            "Unfortunately, we can't add that product to your cart as we don't have enough in stock.",
        ]
        
        return product_not_available_responses
    
    def product_added_to_cart_query(self):
        product_added_to_cart_query = [
            "Do you want to add the items to your cart?",
            "Would you like to proceed with adding these items to your cart?",
            "Shall I add these products to your cart?",
            "Do you want me to add these items to your shopping cart?",
            "Should I go ahead and add these products to your cart?",
            "Would you like to confirm adding these items to your cart?",
            "Do you want to proceed with adding these products to your cart?",
        ]
        return product_added_to_cart_query
    
    
    def login_query(self):
        
        LOGIN_RESPONSES = [
            "I’m redirecting you to the login page. Please log in here.",
            "Sure! Please log in to continue.",
            "Taking you to the login screen now.",
            "Redirecting... Kindly enter your login credentials.",
            "Let’s get you signed in. Please use the login page.",
            "You need to log in first. Sending you to the login page.",
            "Just a second, I’m opening the login page for you.",
            "Hold on! Redirecting you to your login portal.",
            "Please log in to access your account.",
            "Accessing login page. Kindly log in to proceed."
        ]

        return LOGIN_RESPONSES
    
     
    def new_user(self):
        
        NEW_USER_RESPONSES = [
            "Okay! I’m redirecting you to the new user registration page.",
            "Sure, let’s create your account. Taking you to the sign-up page now.",
            "Let’s get you started. Redirecting to the new user setup page.",
            "No problem! I’m sending you to the registration screen.",
            "Creating a new account? I’m taking you there now.",
            "Alright, heading over to the new user form. Please fill it in.",
            "I’ll help you register. Redirecting you to the new user page.",
            "Got it! You’ll be on the sign-up page in just a second.",
            "Starting fresh? I’m opening the new user registration now.",
            "Welcome! Let’s create your account. Redirecting..."
        ]
        return NEW_USER_RESPONSES            

    
    def show_menu(self):
        SEND_MENU_RESPONSES = [
            "I’m showing you the menus I have right now.",
            "Here’s what’s on the menu. Take a look!",
            "These are the categories available. Feel free to explore.",
            "Here’s the main menu with everything I can help you with.",
            "I’ve pulled up the menu for you — just pick a category.",
            "Check out these sections — it’s everything I’ve got!",
            "These are the options available. What would you like to explore?",
            "Take a look at the menu — you’ll find everything here.",
            "Here’s what I have in store for you.",
            "Showing you all available menus now."
]
        return SEND_MENU_RESPONSES        
    
            
    def show_home_page(self):
        
        HOME_PAGE_RESPONSES = [
            "I'm showing you the home page now.",
            "Taking you back to the home page.",
            "Here's the home page for you.",
            "Redirecting you to the home screen.",
            "Opening the home page right away.",
            "Showing you the main page now.",
            "Bringing up the home page.",
            "Here's your home page.",
            "Going back to the home page.",
            "Let me take you to the home screen."
        ]
        return HOME_PAGE_RESPONSES
    
    
        
            
    def payment_page(self):
        PAYMENT_RESPONSES = [
    "I'm redirecting you to the payment page.",
    "Taking you to checkout to complete your payment.",
    "Here's the payment page. Please proceed when ready.",
    "Opening the payment gateway for you.",
    "Let's get your payment processed. Redirecting now.",
    "Proceeding to payment. You can review your order here.",
    "Redirecting to the checkout page.",
    "You're all set to pay. Showing the payment options now.",
    "Ready to pay? I'm taking you to the payment screen.",
    "Opening payment section for you."
]
        return PAYMENT_RESPONSES
