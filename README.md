# knkv-ical-filter-proxy

This is a simple project made with express in order to filter certain events from the knkv ical calendar so your calendar isn't getting spammed with events you do not care about.

# Build & Run

## Run locally

### Install dependencies
```bash
npm i
```

### Run the application
```bash
npm start
```

Or run the application on a different port:
```bash
PORT=3000 npm start
```

## Docker

### Create Docker image
```bash
docker build -t knkv-ical-filter-proxy .
```

### Run the application
```bash
docker run -p 8080:8080 -d knkv-ical-filter-proxy
```

Or run on a different port inside the container (for whatever reason)
```bash
docker run -p 3000:3000 -e PORT=3000 -d knkv-ical-filter-proxy
```
