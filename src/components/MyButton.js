import React, {Component} from 'react';

export default class MyButton extends Component {
    constructor (props) {
        super(props);
        this.props = props;
    }

    render () {
        let innerItems = this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>
        })

        return <div>
            <button onClick={this.props.onClick}>Add New Item</button>
            <ul>{innerItems}</ul>
        </div>
    }
}