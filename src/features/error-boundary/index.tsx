import { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = { children: React.ReactNode } & object;
type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Oops! That was our fault!. Please <Link to='/'>Click here</Link> to
          back to the home page or wait five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
