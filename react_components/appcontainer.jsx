var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var HelloWorld = require('./helloworld.jsx');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="appContainer">
        <HelloWorld text="Hello, World!" />
        <ReactBootstrap.Button bsStyle='primary' bsSize='large'>Test Button</ReactBootstrap.Button>
      </div>
    )
  }
});
