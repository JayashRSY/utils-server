// Set HIDE_UI flag to true to hide UI (white screen), or false to unhide / show UI normally
const HIDE_UI = true;

if (HIDE_UI) {
  document.head.appendChild(Object.assign(document.createElement("style"), {
    textContent: "* { display: none !important; } html, body { display: block !important; background: #ffffff !important; }"
  }));
}
a
