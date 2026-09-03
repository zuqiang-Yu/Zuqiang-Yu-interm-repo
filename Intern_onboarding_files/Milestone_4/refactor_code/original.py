def process(uid, t, items, c):
    if uid != None:
        if len(items) > 0:
            if t == "member":
                d = 0.1
            elif t == "vip":
                d = 0.2
            elif t == "staff":
                d = 0.3
            else:
                d = 0
            total = 0
            for i in items:
                total = total + i["price"] * i["qty"]
            total2 = total - (total * d)
            if c == "SAVE10":
                total2 = total2 - 10
            if total2 < 0:
                total2 = 0
            return total2
        else:
            return None
    else:
        return None