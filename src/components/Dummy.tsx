import React, { Component } from 'react';
import { withNavigationContext } from './DummyNav';

export const Dummy = withNavigationContext(
  class extends React.Component<any> {
    handleGoBtn() {
      this.props.ping();
    }
    render() {
      return (
        <div>
          <button
            className='bg-blue-300 p-4'
            onClick={() => this.props.nav.goBack()}
          >
            {/* <button className='bg-blue-300 p-4' onClick={() => this.props.ping()}> */}
            Go
          </button>
          Dummy
        </div>
      );
    }
  }
);

export default Dummy;
