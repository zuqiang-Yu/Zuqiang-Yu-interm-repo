
# Magic Numbers & Strings
if seconds > 86400:
    pass

# Long Functions
def process_order(order):
    # verify order
    # calculate prize
    # confirm order
    pass

# Duplicate Code
def get_admin_discount(price):
    return price * 0.9

def get_member_discount(price):
    return price * 0.9

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

# Deeply Nested Conditionals
def process(user):
    if user:
        if user.is_active:
            if user.has_permission:
                if user.balance > 0:
                    pass

# Commented-Out Code
def calculate_total(price):
    # old_total = price * 1.1
    # return old_total
    return price * 1.2

# Inconsistent Naming
def calc(x, yy, temp2):
    return x * yy + temp2