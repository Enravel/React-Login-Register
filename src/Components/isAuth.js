import React, { Component } from 'react';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

export default class isAuth extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser } = this.context;
    return <>{currentUser ? this.props.children : this.props.message}</>;
  }
}
