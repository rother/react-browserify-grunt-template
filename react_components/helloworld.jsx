import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return(
      <div className="helloWorld">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default HelloWorld;
