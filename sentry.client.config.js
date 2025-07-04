// sentry.client.config.js
module.exports = {
  // Sentry client configuration
  dsn: process.env.SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for finer control
  tracesSampleRate: 1.0,
  // ...
  // Add performance monitoring
  performance: {
    // ...
  },
};