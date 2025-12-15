# DevOps Assignment

A Node.js API with GitHub Actions automation that updates this README with API status.

## Run Locally

```bash
docker compose up --build -d
curl http://localhost:3000/status
```

Can change the port in the docker-compose.yaml file

## Workflow

1. Trigger manually via `workflow_dispatch`
2. Starts Node.js API in background
3. Custom action calls (GET) `/status` endpoint
4. README.md updated with response
5. Changes committed back to repo

## API Status

<!-- API_STATUS_START -->
<!-- API_STATUS_END -->
