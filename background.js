browser.pageAction.onClicked.addListener((tab, data) => {
    browser.tabs.sendMessage(
        tab.id,
        {}
    ).then(response => {}).catch(error => {
        console.error(`Error: ${error}`)
    })
});