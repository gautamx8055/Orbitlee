# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# Orbitlee

## Runway Lab (internal)

`/lab/generate` is an internal, unlinked page for generating images/video with the
[Runway Dev API](https://docs.dev.runwayml.com) via the official `@runwayml/sdk`. It posts to
`src/pages/api/runway/generate.ts`, the only route in this project rendered on-demand
(`export const prerender = false`) — everything else still builds fully static.

Setup: copy `.env.example` to `.env` and set `RUNWAYML_API_SECRET` from the
[Developer Portal](https://dev.runwayml.com).

**Deployment note:** because one route is on-demand, `npm run build` now emits both
`dist/client` (static assets) and `dist/server/entry.mjs` (a Node server, via `@astrojs/node`
in standalone mode). Serving only `dist/client` as static files — the old deploy path — will
404 on `/api/runway/generate` and break `/lab/generate`'s "Generate" button. Run
`node ./dist/server/entry.mjs` (it serves the static assets too) or otherwise carry the request
through to that adapter, whichever fits the current host.
