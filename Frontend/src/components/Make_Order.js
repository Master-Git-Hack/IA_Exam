/** @format */

import React, { Component } from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';

class Make_Order extends Component {
    constructor(props) {
        super();
        this.state = {
            elements: {},
            order: [],
            type: 'burger',
            quantity: 1,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/manage/stock', {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => this.setState({ elements: data.response }));
    }
    AddOrder = () => {
        const { type, quantity, order } = this.state;
        this.setState({ order: [...order, { type, quantity }] });
    };
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    make_order = async () => {
        const { order } = this.state;
        await fetch('http://localhost:8080/api/transaction/add', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sku: this.props.sku,
                order,
                status: 'Pending',
            }),
        })
            .then((response) => response.json())
            .then((data) =>
                alert(
                    data.response
                        ? `Pedido #000${this.props.sku} se ha realizado de forma exitosa!`
                        : `Algo salio mal con el pedido #000${this.props.sku}, favor de intentar mas tarde`
                )
            );
        window.location.reload();
    };

    render() {
        const { elements, order } = this.state;
        return (
            <Row className='g-2'>
                <Row>
                    <Col>
                        <select name='type' onChange={this.handleChange}>
                            {Object.keys(elements).map((i) => {
                                return <option>{elements[i].type}</option>;
                            })}
                        </select>
                    </Col>
                    <Col md>
                        <input
                            name='quantity'
                            onChange={this.handleChange}
                            type='number'
                            min={1}
                            max={50}
                            placeholder='n >= 1, n <= 50'
                        />
                    </Col>
                    <Col md>
                        <Button variant='primary' onClick={this.AddOrder}>
                            Agregar
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <ListGroup>
                        {order.map((elmnt) => {
                            return (
                                <ListGroup.Item>
                                    {elmnt.type} - {elmnt.quantity}
                                </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </Row>
                <Row>
                    <Col md>
                        <Button variant='success' onClick={this.make_order}>
                            Hacer Pedido
                        </Button>
                    </Col>
                </Row>
            </Row>
        );
    }
}
export default Make_Order;
