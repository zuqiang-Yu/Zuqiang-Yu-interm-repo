def handle(uid, items, c, send_email, vip):
    result = {}
    if uid != None and uid != "":
        if items != None and len(items) > 0:
            total = 0
            invalid = []
            for i in items:
                if i["qty"] <= 0:
                    invalid.append(i["name"])
                if i["price"] < 0:
                    invalid.append(i["name"])
            if len(invalid) > 0:
                return {"error": "invalid items: " + str(invalid)}
            for i in items:
                if vip == True:
                    x = i["price"] * i["qty"] * 0.8
                elif c == "SAVE10":
                    x = i["price"] * i["qty"] - 10
                elif c == "HALF":
                    x = i["price"] * i["qty"] * 0.5
                else:
                    x = i["price"] * i["qty"]
                total = total + x
            if total < 0:
                total = 0
            if total > 1000:
                ship = 0
            elif total > 500:
                ship = 10
            elif total > 100:
                ship = 20
            else:
                ship = 30
            total = total + ship
            result["total"] = round(total, 2)
            result["shipping"] = ship
            result["item_count"] = len(items)
            if send_email == True:
                # send email
                print(f"sending email to user {uid}")
                print(f"your order total is {total}")
                print(f"shipping cost: {ship}")
            return result
        else:
            return {"error": "no items"}
    else:
        return {"error": "invalid user"}