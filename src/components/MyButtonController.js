import React, {Component} from 'react';
import MyButton from './MyButton';
import {actionAddNewItem} from '../actions/ButtonActions';
import {store} from '../stores';

export default class MyButtonController extends Component {
    constructor () {
        super();
        this.state = {
            items: []
        }
        this.onClick = this.onClick.bind(this);
        store.subscribe(() => {
            this.setState({
                items: store.getState().items
            });
        });
    }

    onClick () {
        store.dispatch(actionAddNewItem('test123'));
        console.log("From parent");
    }

    render () {
        return <MyButton items={this.state.items}
            onClick={this.onClick}
        />
    }
}