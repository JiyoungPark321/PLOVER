import React, { Component } from 'react';
import styles from './Badge.module.css';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class Badge extends Component {

  buildBadgeCompClass = () => {
    let result = "";
    const { ordnum, value } = this.props;
    let classes = ['badge'];

    if (ordnum) classes.push(ordnum);
    if (value) classes.push(value);

    result += cx(...classes);

    return result;
  };

  render() {
    return (
      <>
        <span id={this.props.id} className={this.buildBadgeCompClass() + " " + (this.props.className === undefined ? '' : this.props.className)}>
          {`SSAFY ${this.props.value}기`}
        </span>
      </>
    );
  }
}

export default Badge;