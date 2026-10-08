# Shkolo Project

A Next.js post-sharing prototype with Google sign-in, user records, and MongoDB-backed posts.

## Current status

Learning prototype. The implemented post and account flows are narrower than a complete school-management platform.

## Features and implementation

- Next.js App Router pages for posts, post creation, profile, and settings.
- NextAuth Google provider and MongoDB user persistence.
- Route handlers for listing, retrieving, and creating posts.
- Reusable UI components, themes, and TypeScript types.

## Technology

Next.js 14, React 18, TypeScript, NextAuth, MongoDB/Mongoose, Tailwind CSS, and Radix UI.

## Repository map

| Path | Purpose |
| --- | --- |
| [src/app](<src/app>) | Pages and API route handlers |
| [src/app/api/posts](<src/app/api/posts>) | Post endpoints |
| [src/app/api/auth](<src/app/api/auth>) | NextAuth configuration |
| [src/lib/db.ts](<src/lib/db.ts>) | Database connection |
| [package.json](<package.json>) | Runtime dependencies and scripts |

## Local setup

```bash
git clone https://github.com/frontend-alex/shkolo-project.git
cd shkolo-project
npm install
```

Before starting the app, supply a MongoDB database and your own Google OAuth application credentials in .env.local:

```dotenv
MONGODB_LOCAL_URL=mongodb://127.0.0.1:27017/shkolo_local
GOOGLE_ID=replace-with-your-client-id
GOOGLE_CLINET_SECRET=replace-with-your-client-secret
```

GOOGLE_CLINET_SECRET is intentionally spelled as the current code reads it. Review the auth route and configure the provider's callback for your local host. The development server normally listens at http://localhost:3000. Use a Node.js runtime compatible with the checked-in Next.js 14 dependencies. Configure NextAuth's deployment URL and secret for any hosted environment.


Start the development server after configuration:

```bash
npm run dev
```

## Verification

The manifest provides the following checks:

```bash
npm run lint
npm run build
```

These commands were checked against the manifest; builds, browser flows, and external services were not executed for this documentation update.

## Limitations and next steps

- Review server-side authorization on post operations before exposing the app publicly.
- A working Google sign-in flow requires a correctly registered OAuth client; UI rendering alone does not verify it.
- No project-specific automated test script is declared.
- Provider and database credentials belong in your own local configuration, not committed files.

## Code review starting points

- [src/app/api/posts/create/route.ts](<src/app/api/posts/create/route.ts>)
- [src/app/api/auth/[...nextauth]/route.ts](<src/app/api/auth/[...nextauth]/route.ts>)
- [src/app/posts/page.tsx](<src/app/posts/page.tsx>)
