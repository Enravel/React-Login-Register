import React, { Component } from 'react';

// ROUTER
import { Redirect } from '@reach/router';

// COMPONENTS
import NotAuth from '../Components/NotAuth';

// CONTEXT
import { LocalStorageContext } from '../contexts/localStorage.context';

export default class IsAuth extends Component {
  static contextType = LocalStorageContext;
  render() {
    const { currentUser, shouldRedirect } = this.context;
    const { children, message, reverseRender, redirectTo } = this.props;
    return (
      <>
        {reverseRender ? (
          currentUser ? (
            <NotAuth message={message} />
          ) : (
            children
          )
        ) : currentUser ? (
          children
        ) : (
          <NotAuth message={message} />
        )}

        {shouldRedirect &&
          (currentUser && currentUser.admin ? (
            <Redirect nothrow to="admin" />
          ) : (
            <Redirect noThrow to={`/${redirectTo}`} />
          ))}
      </>
    );
  }
}
