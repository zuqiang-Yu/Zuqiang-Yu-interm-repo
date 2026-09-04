
VIP_DISCOUNT_RATE = 0.8
HALF_DISCOUNT_RATE = 0.5
COUPON_FLAT_DISCOUNT = 10

SHIPPING_TIERS = [
    (1000, 0),
    (500,  10),
    (100,  20),
    (0,    30),
]


def validate_user(user_id: str):
    if not user_id:
        raise ValueError("User ID cannot be empty.")

def validate_items(items: list[dict]):
    if not items:
        raise ValueError("Order must contain at least one item.")
    invalid = [
        item["name"]
        for item in items
        if item["qty"] <= 0 or item["price"] < 0
    ]
    if invalid:
        raise ValueError(f"Invalid items: {invalid}")


def calculate_item_total(item: dict, coupon: str, is_vip: bool) -> float:
    base = item["price"] * item["qty"]
    if is_vip:
        return base * VIP_DISCOUNT_RATE
    if coupon == "SAVE10":
        return max(base - COUPON_FLAT_DISCOUNT, 0)
    if coupon == "HALF":
        return base * HALF_DISCOUNT_RATE
    return base

def calculate_subtotal(items: list[dict], coupon: str, is_vip: bool) -> float:
    return sum(calculate_item_total(item, coupon, is_vip) for item in items)

def calculate_shipping(subtotal: float) -> int:
    for threshold, cost in SHIPPING_TIERS:
        if subtotal > threshold:
            return cost
    return 30

def send_order_email(user_id: str, total: float, shipping: int):
    print(f"Sending email to user {user_id}")
    print(f"Order total: ${total}")
    print(f"Shipping cost: ${shipping}")


def process_order(user_id: str, items: list[dict], coupon: str, is_vip: bool, notify: bool) -> dict:
    """
    Process a customer order and return the order summary.

    Args:
        user_id (str): The customer's ID.
        items (list[dict]): Each item has 'name', 'price', and 'qty'.
        coupon (str): Optional coupon code ('SAVE10' or 'HALF').
        is_vip (bool): Whether the customer gets VIP discount.
        notify (bool): Whether to send a confirmation email.

    Returns:
        dict: Contains 'total', 'shipping', and 'item_count'.

    Raises:
        ValueError: If user_id is empty or items are invalid.
    """
    validate_user(user_id)
    validate_items(items)

    subtotal = calculate_subtotal(items, coupon, is_vip)
    shipping = calculate_shipping(subtotal)
    total    = round(subtotal + shipping, 2)

    if notify:
        send_order_email(user_id, total, shipping)

    return {
        "total":      total,
        "shipping":   shipping,
        "item_count": len(items),
    }