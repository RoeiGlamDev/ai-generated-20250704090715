// pages/_error.js
import ErrorBoundary from '../components/ErrorBoundary';
import * as Sentry from '@sentry/nextjs';

const CustomErrorPage = () => {
  return (
    <ErrorBoundary>
      <h1>Custom Error Page</h1>
      <p>An error occurred.</p>
    </ErrorBoundary>
  );
};

export default CustomErrorPage;