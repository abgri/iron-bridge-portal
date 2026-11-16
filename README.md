# Iron Bridge Operations

An internal demo for Iron Bridge Property Solutions. The portal includes an opportunity dashboard, a stage-based pipeline, relationship and operating network views, and a preferred provider directory.

## Run locally

Serve the static files with Python 3 and open [http://127.0.0.1:8000](http://127.0.0.1:8000) in a browser.

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

The demo uses illustrative records from `dist/data.js`. Opportunity and provider edits are stored in the current browser. Financial figures appear when manually entered. The portal has no server-side data store.
