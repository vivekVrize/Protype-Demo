# E-Procurement Prototype (Angular)

Single-page frontend for the e-procurement prototype, built with Angular 21 and Angular Material. The application code lives in `Frontend/`.

## Prerequisites
- Node.js ^20.19.0, ^22.12.0, or ^24.0.0 (required by Angular 21)
- npm 11+ (installed alongside the supported Node versions)
- No global Angular CLI needed; npm scripts use the local CLI.

## Quick start
1) `cd Frontend`
2) `npm install`
3) `npm start`
   - Serves at http://localhost:4200/ with live reload.
   - If the port is busy: `npm start -- --port 4300`

## Useful scripts
- `npm run build` — production-ready build to `dist/`.
- `npm run test` — run unit tests (Vitest via Angular CLI).
- `npm run watch` — incremental build for development.

## Project layout
- `Frontend/src/app` — application features and shared UI.
- `Frontend/src/assets` — static assets.
- `Frontend/src/environments` — environment configs (none customized yet).

## Troubleshooting
- Verify Node version: `node -v` (must match prerequisites).
- Dependency issues: `rm -rf node_modules package-lock.json && npm install`.
