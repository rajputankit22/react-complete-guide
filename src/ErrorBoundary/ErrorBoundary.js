import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };

  componentDidCatch = (error, info) => {
    this.state({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrorng!</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
