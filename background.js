chrome.pageAction.onClicked.addListener((tab, data) => {
    chrome.tabs.sendMessage(
        tab.id,
        {}
    ).then(response => {}).catch(error => {
        console.error(`Error: ${error}`)
    })
});
