import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import HelloWorld from './helloworld.jsx';

class AppContainer extends React.Component {
  render() {
    return(
      <div className="appContainer">
        <HelloWorld text="Hello, World ES6!" />
        <ReactBootstrap.Button bsStyle='primary' bsSize='large'>Test Button</ReactBootstrap.Button>
      </div>
    );
  }
}

export default AppContainer;
