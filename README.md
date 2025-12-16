# DevOps Assignment

A Node.js API + custom GitHub Action that auto-updates this README with API status.

## What It Does

- **API**: Express server with `GET /status` returning JSON (status, service name, timestamp)
- **Custom Action**: Calls API, generates markdown, updates README between marker comments
- **Workflow**: Orchestrates the above and commits changes back to repo

## Local Testing

```bash
docker compose up --build -d
curl http://localhost:3000/status
docker compose down
```

## Trigger Workflow

GitHub → Actions → "Call API" → Run workflow

Or via CLI:

```bash
gh workflow run call-api.yaml
```

## API Status

<!-- API_STATUS_START -->
- Status: ok
- Service: itamar-devops-assignment
- Timestamp: 2025-12-16T10:27:39.143Z
<!-- API_STATUS_END -->
