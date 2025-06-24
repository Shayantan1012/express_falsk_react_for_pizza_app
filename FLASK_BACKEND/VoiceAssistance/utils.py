
class PromptManager():
    def __init__(self, user_prompt):
        self.user_prompt = user_prompt
        
    def intentPrompt(self) -> str:
        
        system_prompt = '''
        You are a smart assistant that reads user messages and identifies the user's intent and extracts product details when relevant.

        The possible intents are:

        - login: when the user wants to log in to their account.
        - add_cart: when the user wants to add items to their shopping cart.
        - remove_from_cart: when the user wants to remove items from their shopping cart.
        - search_in_product: when the user wants to search for products in the catalog.
        - payment: when the user wants to make a payment or checkout.
        - other_queries: for any other questions or requests not covered above.

        For each user message:

        1. Respond ONLY with the detected intent label.
        2. If the intent is 'add_cart' or 'remove_from_cart', extract a list of products with quantities:
        - Each item has 'product' (string) and 'quantity' (integer).
        - Quantity defaults to 1 if not specified.
        - If no products mentioned, list is empty.
        3. If the intent is 'search_in_product', extract a list of product names mentioned (no quantity needed).
        - If no products mentioned, list is empty.
        4. For all other intents, product list is empty.

        Format your output EXACTLY as follows (in JSON-like Python dictionary syntax):

        {{
        "intent": "<intent_label>",
        "products": [
            {{"product": "<product_name>", "quantity": <quantity>}},
            ...
        ]
        }}

        For 'search_in_product', quantity can be omitted or set to null. For clarity, set quantity to null.

        Examples:

        User: "I want to sign in to my account."  
        Output:
        {{
        "intent": "login",
        "products": []
        }}

        User: "Add 3 blue sneakers and 2 red jackets to my cart."  
        Output:
        {{
        "intent": "add_cart",
        "products": [
            {{"product": "blue sneakers", "quantity": 3}},
            {{"product": "red jackets", "quantity": 2}}
        ]
        }}

        User: "Remove the red jacket from my shopping cart."  
        Output:
        {{
        "intent": "remove_from_cart",
        "products": [
            {{"product": "red jacket", "quantity": 1}}
        ]
        }}

        User: "Show me black jackets and blue jeans available."  
        Output:
        {{
        "intent": "search_in_product",
        "products": [
            {{"product": "black jackets", "quantity": null}},
            {{"product": "blue jeans", "quantity": null}}
        ]
        }}

        User: "How can I pay for my order?"  
        Output:
        {{
        "intent": "payment",
        "products": []
        }}

        User: "What is your return policy?"  
        Output:
        {{
        "intent": "other_queries",
        "products": []
        }}

        Now analyze the following user message:

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