import React, { Component } from "react";
import styles from "./Select.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);



class Select extends Component {

    buildSelectClass = () => {
        let result = "";
        const { width, height } = this.props;
        let classes = ['select']

        if (width) classes.push(width);
        if (height) classes.push(height);

        result += cx(...classes);

        return result;
    };

    render() {
        return (
            <select className={this.buildSelectClass() + " " + (this.props.className === undefined ? '' : this.props.className)}
                style={this.props.style}>
                {this.props.children}
            </select>
        )
    }
}

export default Select;