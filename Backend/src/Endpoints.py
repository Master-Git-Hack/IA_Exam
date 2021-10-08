from flask import request, jsonify
from src import app
from src.controllers.Orders import Orders
from src.controllers.Stock import Stock

@app.route('/api/manage/stock',methods = ['GET'])
def manage_stock(): 
    stock =  Stock()
    return jsonify({'response':stock.data})

@app.route('/api/manage/SKUs',methods = ['POST'])
def manage_sku(): 
    return jsonify({'response':''})

@app.route('/api/manage/status',methods = ['POST'])
def manage_status(): 
    data = request.get_json()
    order =  Orders()
    return jsonify({'response':order.get_status(data['sku'])})


@app.route('/api/transaction/get/all',methods = ['GET'])
def get_all(): 
    order =  Orders()
    return jsonify({'response':order.get_all()})


@app.route('/api/transaction/get/one',methods = ['POST'])
def get_one(): 
    data = request.get_json()
    order =  Orders()
    return jsonify({'response':order.get_one(data['sku'])})


@app.route('/api/transaction/add',methods = ['POST'])
def add(): 
    data = request.get_json()
    order =  Orders()
    stock =  Stock()
    print(data)
    #stock.update(data['order']['type'],data['order']['quantity'])
    return jsonify({'response':order.add(data)})


@app.route('/api/transaction/update',methods = ['PATCH'])
def update(): 
    data = request.get_json()
    order =  Orders()
    return jsonify({'response':order.update(data['sku'],data['order'])})

@app.route('/api/transaction/update/status',methods = ['PATCH'])
def change_status(): 
    data = request.get_json()
    print(f'\n\n\n {data} \n\n\n')
    order =  Orders()
    return jsonify({'response':order.change_status(data['sku'],data['status'])})

@app.route('/api/transaction/remove',methods = ['DELETE'])
def remove(): 
    sku = request.get_json()
    order =  Orders()
    return jsonify({'response':order.remove(sku)})