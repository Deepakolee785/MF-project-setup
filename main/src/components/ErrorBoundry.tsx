import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  // @ts-ignore
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  // @ts-ignore
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }
  render() {
    // @ts-ignore
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // @ts-ignore
      return this.props?.fallback && <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
