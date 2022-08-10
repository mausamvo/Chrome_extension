chrome.tabs.onUpdated.addListener((tabId, tab) => {                 //listen for an update to the tab
  if (tab.url && tab.url.includes("youtube.com/watch")) {           //check if the page is youtube.com
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    //send the new video id
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"), //get the value of "v"
    });
  }
});
