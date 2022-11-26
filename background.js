chrome.action.onClicked.addListener(async function(tab) {
  chrome.scripting.executeScript({
    files: ['copy-random-uuid.js'],
    target: {tabId: tab.id}
  });
});
