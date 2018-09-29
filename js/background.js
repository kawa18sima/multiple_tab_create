chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.local.set({m_tab: []}, function() {});
});
