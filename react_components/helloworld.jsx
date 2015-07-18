import React from 'react';

class HelloWorld {
  render() {
    return(
      <div className="helloWorld">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default HelloWorld = React.createClass(HelloWorld.prototype);
