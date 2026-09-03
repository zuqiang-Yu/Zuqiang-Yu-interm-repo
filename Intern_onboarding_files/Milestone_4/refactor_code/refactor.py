DISCOUNT_RATES = {
    "member": 0.1,
    "vip": 0.2,
    "staff": 0.3,
}
COUPON_DISCOUNTS = {
    "SAVE10": 10,
}

def calculate_order_total(user_id: str, user_type: str, items: list[dict], coupon: str) -> float:
    """
    Calculate the final order total after discounts and coupon.

    Args:
        user_id (str): The user's ID.
        user_type (str): One of 'member', 'vip', 'staff', or other.
        items (list[dict]): Each item has 'price' and 'qty'.
        coupon (str): Optional coupon code.

    Returns:
        float: Final total, minimum 0.
    """
    if not user_id:
        raise ValueError("user_id cannot be empty.")
    if not items:
        raise ValueError("Order must contain at least one item.")

    subtotal = sum(item["price"] * item["qty"] for item in items)
    discount_rate = DISCOUNT_RATES.get(user_type, 0)
    total = subtotal * (1 - discount_rate)
    total -= COUPON_DISCOUNTS.get(coupon, 0)

    return max(total, 0)