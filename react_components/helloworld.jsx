/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="helloWorld">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
});
