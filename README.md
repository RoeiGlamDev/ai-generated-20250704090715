# CodeForge Next.js Dashboard

This is a modern CodeForge Next.js dashboard with user authentication, admin panel, and luxury design.

## Setup

1. Clone the repository: `git clone https://github.com/your-repo/codeforge-nextjs.git`
2. Install dependencies: `npm install`
3. Create a `.env.local` file and add your Sentry DSN: `SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0`
4. Start the development server: `npm run dev`

## Usage

1. Open the dashboard: `http://localhost:3000`
2. Test the Sentry example page: `http://localhost:3000/sentry-example-page`

## Sentry Configuration

* Organization: `codeforge-ai`
* Project: `javascript-nextjs`
* Include error boundaries for React components
* Add manual error capture examples
* Include performance monitoring
* Add test page at `/sentry-example-page` with multiple error testing options
* Ensure compatibility with Firebase, Supabase, and Netlify