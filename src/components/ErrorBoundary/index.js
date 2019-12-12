import React from "react";
import { logError } from "../../utils/logError";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logError(error);
  }

  render() {
    if (this.state.hasError) {
      return <p>Fallback Component</p>;
    }
    return this.props.children;
  }
}
