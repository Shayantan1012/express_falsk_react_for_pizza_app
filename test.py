import re
from word2number import w2n

def word_to_digit(word):
    try:
        return str(w2n.word_to_num(word))
    except:
        return word

def extract_orders(text):
    text = text.lower()

    # Find all patterns like "<item> <number> in quantity"
    pattern = r'([a-zA-Z]+)\s+(\w+)\s+in\s+quantity'
    matches = re.findall(pattern, text)

    orders = []
    for item, qty in matches:
        qty = word_to_digit(qty)
        item = item.rstrip('s')  # normalize to singular
        if qty.isdigit():
            orders.append({
                "item": item,
                "quantity": int(qty)
            })

    return orders

# 🔽 Test Input
user_input = "I want pizza 5 in quantity and burgers two in quantity"
orders = extract_orders(user_input)

print(orders)
