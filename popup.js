const DEFAULTS = {
  enabled: true, 
  messages: true,
  names: true,
  previews: true, 
  avatars: false, 
  compose: false, 
  hover: true
};

const boxes = document.querySelectorAll("input[data-key]");

chrome.storage.sync.get(DEFAULTS, (settings) => {
  boxes.forEach((box) => {
    box.checked = settings[box.dataset.key];
    box.addEventListener("change", () => {
      chrome.storage.sync.set({ [box.dataset.key]: box.checked });
    });
  });
});
