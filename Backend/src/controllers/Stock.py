class Stock():
    data = {
    0:{'type':'burger','quantity':50},
    1:{'type':'soda','quantity':50},
    2:{'type':'fries','quantity':50}
    }

    @staticmethod
    def verify(self, element):
        if element in self.data.keys():
            if data[element] > 0:
                return False
            else: return True
        else: return False

    def get_one(self,element):
        if element in self.data.keys():
            return self.data[element]
        else: return False

    def get_all(self):
        return self.data 

    def add(self,element,quantity):
        if Stock.verify(element):
            self.data[element] += quantity
            return True
        else:
            self.data[element] = quantity
    
    def update(self, element, quantity):
        if Stock.verify(element):
            self.data[f'{element}'] -= int(quantity)
            return True
        else: return False

    def remove(self, element):
        if Stock.verify(element):
            self.data.pop(element)
            return True
        else: return False
