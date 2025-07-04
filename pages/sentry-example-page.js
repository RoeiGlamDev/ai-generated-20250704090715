// pages/sentry-example-page.js
import * as Sentry from '@sentry/nextjs';

const SentryExamplePage = () => {
  const handleThrowError = () => {
    throw new Error('Example error');
  };

  const handleCaptureException = () => {
    Sentry.captureException(new Error('Example exception'));
  };

  const handleCaptureMessage = () => {
    Sentry.captureMessage('Example message');
  };

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button onClick={handleThrowError}>Throw Error</button>
      <button onClick={handleCaptureException}>Capture Exception</button>
      <button onClick={handleCaptureMessage}>Capture Message</button>
    </div>
  );
};

export default SentryExamplePage;