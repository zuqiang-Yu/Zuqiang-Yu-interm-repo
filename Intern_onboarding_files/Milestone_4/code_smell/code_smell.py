
# Magic Numbers & Strings
if seconds > 86400:
    pass
# ---
SECONDS_IN_A_DAY = 86400
if seconds > SECONDS_IN_A_DAY:
    expire_session()

# Long Functions
def process_order(order):
    # verify order
    # calculate prize
    # confirm order
    pass
# ---
def process_order(order):
    validate_order(order)
    update_inventory(order)
    send_confirmation(order)

# Duplicate Code
def get_admin_discount(price):
    return price * 0.9

def get_member_discount(price):
    return price * 0.9
# ---
def apply_discount(price, rate=0.9):
    return price * rate

# Large Classes
class App:
    def create_user(self):
        pass
    def process_payment(self):
        pass
    def send_email(self):
        pass
    def generate_report(self):
        pass

# ---
class UserService:
    pass
class PaymentService:
    pass
class EmailService:
    pass

# Deeply Nested Conditionals
def process(user):
    if user:
        if user.is_active:
            if user.has_permission:
                if user.balance > 0:
                    pass
# ---
def process(user):
    if not user: return
    if not user.is_active: return
    if not user.has_permission: return
    if user.balance <= 0: return
    pass

# Commented-Out Code
def calculate_total(price):
    # old_total = price * 1.1
    # return old_total
    return price * 1.2
# ---

def calculate_total(price):
    return price * 1.2

# Inconsistent Naming
def calc(x, yy, temp2):
    return x * yy + temp2

# ---
def calculate_total(price, quantity, tax):
    return price * quantity + tax