chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: replace,
    });
  });
});

function replace() {
  const textarea = document.querySelector("div#sourceEditArea textarea");

  if (textarea) {
    textarea.value = textarea.value
      // remove only one newline
      .replace(/(?<!\n)\n(?!\n)/g, " ")
      // remove '-' for word continue
      .replace(/(\S)-\s|\s-(\S)/g, "$1$2");
  }
}
