import React, {Component} from 'react';
import MyButton from './MyButton';
import ADD_NEW_ITEM from '../actions/ButtonActions';
console.log(ADD_NEW_ITEM);

export default class MyButtonController extends Component {
    constructor () {
        super();
        this.state = {
            items: ['test1', 'test2']
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        console.log("From parent");
    }

    render () {
        return <MyButton items={this.state.items}
            onClick={this.onClick}
        />
    }
}