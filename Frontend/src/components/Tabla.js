/** @format */

import React, { Component } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Order from './Order';

class Tabla extends Component {
    constructor(props) {
        super();
        this.state = {
            pending: [],
            in_process: [],
            completed: [],
            delivered: [],
            canceled: [],
        };
    }
    componentDidMount() {
        this.check_orders();
    }
    check_orders = async () => {
        await fetch('http://localhost:8080/api/transaction/get/all', {
            method: 'GET',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                Object.keys(data.response).map((sku) => {
                    const { pending, in_process, completed, delivered, canceled } = this.state;
                    switch (data.response[sku].status) {
                        case 'Pending':
                            this.setState({
                                pending: [
                                    ...pending,
                                    { sku, status: data.response[sku].status, orders: data.response[sku].orders },
                                ],
                            });
                            break;
                        case 'In Process':
                            this.setState({
                                in_process: [
                                    ...in_process,
                                    { sku, status: data.response[sku].status, orders: data.response[sku].orders },
                                ],
                            });
                            break;
                        case 'Completed':
                            this.setState({
                                completed: [
                                    ...completed,
                                    { sku, status: data.response[sku].status, orders: data.response[sku].orders },
                                ],
                            });
                            break;
                        case 'Delivered':
                            this.setState({
                                delivered: [
                                    ...delivered,
                                    { sku, status: data.response[sku].status, orders: data.response[sku].orders },
                                ],
                            });
                            break;
                        case 'Canceled':
                            this.setState({
                                canceled: [
                                    ...canceled,
                                    { sku, status: data.response[sku].status, orders: data.response[sku].orders },
                                ],
                            });
                            break;
                        default:
                            break;
                    }
                });
            });
    };
    ren;
    render() {
        const { pending, in_process, completed, delivered, canceled } = this.state;
        console.log(pending, in_process, completed, delivered, canceled);
        return (
            <Container fluid>
                <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example' className='mb-3'>
                    <Tab eventKey='pending' title='Pending'>
                        {pending.map((element, idx) => {
                            return <Order id={idx} sku={element.sku} order={element.orders} status={element.status} />;
                        })}
                    </Tab>
                    <Tab eventKey='in_process' title='In Process'>
                        {in_process.map((element, idx) => {
                            return <Order id={idx} sku={element.sku} order={element.orders} status={element.status} />;
                        })}
                    </Tab>
                    <Tab eventKey='completed' title='Completed'>
                        {completed.map((element, idx) => {
                            return <Order id={idx} sku={element.sku} order={element.orders} status={element.status} />;
                        })}
                    </Tab>
                    <Tab eventKey='delivered' title='Delivered'>
                        {delivered.map((element, idx) => {
                            return <Order id={idx} sku={element.sku} order={element.orders} status={element.status} />;
                        })}
                    </Tab>
                    <Tab eventKey='canceled' title='Canceled'>
                        {canceled.map((element, idx) => {
                            return <Order id={idx} sku={element.sku} order={element.orders} status={element.status} />;
                        })}
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
export default Tabla;
