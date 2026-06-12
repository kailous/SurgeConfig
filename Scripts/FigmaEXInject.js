const FIGMA_EX_SCRIPT_URL = "https://kailous.github.io/SurgeConfig/Assets/FigmaEX/app.js";
const INJECT_MARKER = "data-rainforest-figmaex";

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

  if (body.includes("</head>")) {
    return body.replace("</head>", `${scriptTag}</head>`);
  }

  if (body.includes("<body")) {
    return body.replace(/<body([^>]*)>/i, `<body$1>${scriptTag}`);
  }

  return `${scriptTag}${body}`;
}

const headers = $response.headers || {};
let body = $response.body || "";

removeHeader(headers, "content-security-policy");
removeHeader(headers, "content-security-policy-report-only");
removeHeader(headers, "content-length");

body = injectScript(body);

$done({ headers, body });
