/** @format */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Tabla from './components/Tabla';
import Make_Order from './components/Make_Order';

class App extends Component {
    constructor() {
        super();
        this.state = {
            next_sku: 0,
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
                this.setState({ next_sku: Object.keys(data.response).length + 1 });
            });
    };
    render() {
        const { next_sku, orders } = this.state;
        console.log(orders);
        return (
            <Container className='tp-3'>
                <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example' className='mb-3'>
                    <Tab eventKey='make_order' title='Make Order'>
                        <Make_Order sku={next_sku} />
                    </Tab>
                    <Tab eventKey='check_orders' title='Check Orders'>
                        <Tabla />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
export default App;
