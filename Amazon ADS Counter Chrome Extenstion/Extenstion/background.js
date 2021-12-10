var counter = 0
chrome.commands.onCommand.addListener((command) => {
    // console.log(`Command "${command}" triggered`);
    if(command === "counter-incrementer"){
        counter += 1
        chrome.browserAction.setBadgeText({text: counter.toString()})
    }
    if(command === "counter-decrementer"){
        if(counter > 0){
            counter -= 1
        }
        chrome.browserAction.setBadgeText({text: counter.toString()})
    }
    if(command === "reset-counter"){
        counter = 0
        chrome.browserAction.setBadgeText({text: counter.toString()})
    }
});