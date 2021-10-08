class Orders():
    #data will be composed by the following structure:
    #{sku:{'order'[{'type':'element', 'quantity': N}], 'status':'status' } }
    data = {}

    @staticmethod
    def verify_sku(self, sku):
        if len(self.data) > 0:
            if int(sku) in self.data.keys():
                return True
            else:
                return False
        else: return False

    @staticmethod
    def find_sku_index(self, sku):
        if int(sku) in self.data.keys():
            return list(self.data.keys()).index(int(sku))
        else: 
            return -1

    def get_one(self, sku):
        idx = Orders.find_sku_index(self,sku)
        if idx != -1:
            return self.data[idx]
        else:
            return False
    
    def get_all(self):
        return self.data

    def add(self, data):
        if not Orders.verify_sku(self, data['sku']):
            idx = len(self.data) + 1
            self.data[idx] = {
                "orders":data['order'],
                "status":data['status']
            }
            return True
        else:
            return False

    def update(self, sku, order):
        idx = Orders.find_sku_index(self,sku)
        if idx != -1:
            self.data[idx] = order
            return True
        else:
            return False

    def get_status(self, sku):
        idx = Orders.find_sku_index(self,sku)
        if idx != -1:
            return self.data[idx]['status']
        else:
            return False

    def change_status(self, sku, status):
        self.data[int(sku)]['status'] = status
        return True


    def delete(self, sku):
        if Orders.verify_sku(self,sku):
            self.data.pop(sku)
            return True
        else:
            return False
