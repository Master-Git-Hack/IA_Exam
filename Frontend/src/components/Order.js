/** @format */

import React, { Component } from 'react';
import { Container, Col, Row, Card, Badge, Button } from 'react-bootstrap';
class Order extends Component {
    constructor(props) {
        super();
        this.state = {
            action_status: 'Pending',
            delivered: false,
        };
    }
    componentDidMount() {
        this.actionStatus();
    }
    actionStatus = () => {
        switch (this.props.status) {
            case 'Pending':
                this.setState({
                    action_status: 'In Progress',
                });
                break;
            case 'In Process':
                this.setState({
                    action_status: 'Complete',
                });

                break;
            case 'Completed':
                this.setState({
                    action_status: 'Deliver',
                });
                break;
            case 'Delivered':
                this.setState({
                    delivered: true,
                });
                break;
            case 'Canceled':
                this.setState({
                    delivered: true,
                });
                break;
            default:
                break;
        }
    };
    handleStatus = async () => {
        let status = 'In Process';
        const { sku } = this.props;
        switch (this.props.status) {
            case 'Pending':
                status = 'In Process';
                break;
            case 'In Process':
                status = 'Completed';
                break;
            case 'Completed':
                status = 'Delivered';
                break;
            case 'Delivered':
                status = 'Delivered';
                break;
            case 'Canceled':
                status = 'Canceled';
                break;
            default:
                status = 'Pending';
                break;
        }
        const { action_status } = this.state;
        await fetch('http://localhost:8080/api/transaction/update/status', {
            method: 'PATCH',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sku,
                status,
            }),
        })
            .then((response) => response.json())
            .then((data) => window.location.reload());
    };
    cancel_order = async () => {
        const { sku } = this.props;
        await fetch('http://localhost:8080/api/transaction/update/status', {
            method: 'PATCH',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sku,
                status: 'Canceled',
            }),
        })
            .then((response) => response.json())
            .then((data) => window.location.reload());
    };
    render() {
        const { sku, order, status } = this.props;
        const { delivered, action_status } = this.state;

        return (
            <Container className='tp-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>
                        <Row>
                            <Col>Order #000{sku}</Col>
                            <Col>
                                <Badge bg='secondary'>{status}</Badge>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <h1>Products</h1>
                            <Row>
                                <Col>
                                    {order.map((ordr) => {
                                        return <Row>{`${ordr.type} - ${ordr.quantity}\n`}</Row>;
                                    })}
                                </Col>
                                <Col>
                                    {!delivered ? (
                                        <Button variant='success' onClick={this.handleStatus}>
                                            {action_status}
                                        </Button>
                                    ) : null}
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col></Col>
                            <Col>
                                {!delivered ? (
                                    <Button variant='danger' onClick={this.cancel_order}>
                                        Cancel
                                    </Button>
                                ) : null}
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Container>
        );
    }
}
export default Order;
