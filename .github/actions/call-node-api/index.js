import * as core from '@actions/core';
import { readFileSync, writeFileSync } from 'fs';

try {
  const apiUrl = core.getInput('api-url', { required: true });

  const response = await fetch(apiUrl);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const data = await response.json();
  const { status, service, timestamp } = data;
  if (!status || !service || !timestamp) {
    throw new Error(`Missing fields in response: ${JSON.stringify(data)}`);
  }

  const markdown = `
- Status: ${status}
- Service: ${service}
- Timestamp: ${timestamp}
`;

  core.info(markdown);

  const readme = readFileSync('README.md', 'utf8');
  const updated = readme.replace(
    /(<!-- API_STATUS_START -->)[\s\S]*(<!-- API_STATUS_END -->)/,
    `$1${markdown}$2`
  );
  writeFileSync('README.md', updated);

} catch (error) {
  core.setFailed(error.message);
}
