const FIGMA_EX_SCRIPT_URL = "https://kailous.github.io/SurgeConfig/Assets/FigmaEX/app.js";
const INJECT_MARKER = "data-rainforest-figmaex";

function getHeader(headers, name) {
  const target = name.toLowerCase();
  for (const key of Object.keys(headers || {})) {
    if (key.toLowerCase() === target) {
      return headers[key];
    }
  }
  return "";
}

function removeHeader(headers, name) {
  const target = name.toLowerCase();
  for (const key of Object.keys(headers || {})) {
    if (key.toLowerCase() === target) {
      delete headers[key];
    }
  }
}

function injectScript(body) {
  if (!body || body.includes(INJECT_MARKER)) {
    return body;
  }

  const scriptTag = `<script ${INJECT_MARKER}="true" src="${FIGMA_EX_SCRIPT_URL}" defer></script>`;

  if (/<\/head>/i.test(body)) {
    return body.replace(/<\/head>/i, `${scriptTag}</head>`);
  }

  if (/<body/i.test(body)) {
    return body.replace(/<body([^>]*)>/i, `<body$1>${scriptTag}`);
  }

  return body;
}

const headers = $response.headers || {};
let body = $response.body || "";
const contentType = getHeader(headers, "content-type").toLowerCase();
const isHtml = contentType.includes("text/html") || /^\s*<!doctype html/i.test(body) || /^\s*<html/i.test(body);

if (isHtml) {
  removeHeader(headers, "content-security-policy");
  removeHeader(headers, "content-security-policy-report-only");
  removeHeader(headers, "content-length");

  body = injectScript(body);

  $done({ headers, body });
} else {
  $done({});
}
