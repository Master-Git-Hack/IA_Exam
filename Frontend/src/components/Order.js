/** @format */

import React, { Component } from 'react';
class Order extends Component {
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
}
export default Order;
