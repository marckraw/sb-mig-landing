const baseUrl = process.argv[2] ?? "http://localhost:3000";

const checks = [
  {
    path: "/llms.txt",
    includes: ["# sb-mig", "/llms-full.txt", "/docs/quickstart.md"],
    contentType: "text/plain",
  },
  {
    path: "/llms-full.txt",
    includes: ["# sb-mig full documentation", "Safe content migration"],
    contentType: "text/markdown",
  },
  {
    path: "/docs.md",
    includes: ["# Start Here", "Storyblok teams"],
    contentType: "text/markdown",
  },
  {
    path: "/docs/quickstart.md",
    includes: ["# Quickstart", "npm install --global sb-mig"],
    contentType: "text/markdown",
  },
  {
    path: "/docs/reference/migrate.md",
    includes: ["# migrate", "--publicationMode"],
    contentType: "text/markdown",
  },
  {
    path: "/robots.txt",
    includes: ["Sitemap:"],
    contentType: "text/plain",
  },
  {
    path: "/sitemap.xml",
    includes: ["/llms.txt", "/docs/quickstart.md"],
    contentType: "application/xml",
  },
];

let failures = 0;

for (const check of checks) {
  const url = new URL(check.path, baseUrl);
  const response = await fetch(url);
  const body = await response.text();
  const contentType = response.headers.get("content-type") ?? "";

  if (!response.ok) {
    failures += 1;
    console.error(`${check.path}: expected 2xx, received ${response.status}`);
    continue;
  }

  if (!contentType.includes(check.contentType)) {
    failures += 1;
    console.error(
      `${check.path}: expected content-type containing ${check.contentType}, received ${contentType}`,
    );
  }

  if (body.includes("<!DOCTYPE html>")) {
    failures += 1;
    console.error(`${check.path}: returned an HTML document shell`);
  }

  for (const expected of check.includes) {
    if (!body.includes(expected)) {
      failures += 1;
      console.error(`${check.path}: missing expected text ${expected}`);
    }
  }

  console.log(`${check.path}: ok`);
}

if (failures > 0) {
  process.exitCode = 1;
}
