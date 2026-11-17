const DEFAULTS = {
  enabled: true,
  messages: true,
  names: false,
  previews: true,
  avatars: false,
  compose: false,
  hover: true
};

const CLASS_MAP = {
  enabled: "wb-on",
  messages: "wb-messages",
  names: "wb-names",
  previews: "wb-previews",
  avatars: "wb-avatars",
  compose: "wb-compose",
  hover: "wb-hover"
};

function apply(settings) {
  const root = document.documentElement;
  for (const [key, cls] of Object.entries(CLASS_MAP)) {
    root.classList.toggle(cls, settings[key] ?? false);
  }
  console.log("[WhatsApp Blur] applied:", root.className);
}

function load(cb) {
  chrome.storage.sync.get(DEFAULTS, cb);
}

console.log("[WhatsApp Blur] content script loaded");
load(apply);

chrome.storage.onChanged.addListener(() => load(apply));
