window.onload = function() {
    // Check all elements
    this.loopElements();
}

const targetNode = document.getElementsByTagName("body")[0];
const config = { attributes: true, childList: true, subtree: true };
// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList" && mutation.target.localName != "body") {
            for(node of mutation.addedNodes) {
                this.changeFontColour(node)
                this.changeBackgroundColour(node)
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);


function loopElements() {
    var tags = document.getElementsByTagName("*");
    for(tag of tags) {
        this.changeFontColour(tag)
        this.changeBackgroundColour(tag);
    }
}

function changeFontColour(element) {
    const compStyles = window.getComputedStyle(element);
    let fontColor = compStyles.getPropertyValue('color')

    //Split rgb in to values
    let color = tinycolor(fontColor);
    if(color.isDark()) {
        element.style.color = color.brighten(60);
    }
}

function changeBackgroundColour(element) {
    const compStyles = window.getComputedStyle(element);
    let backgroundColor = compStyles.getPropertyValue('background')

    //Split rgb in to values
    let color = tinycolor(backgroundColor);
    if(color.isLight()) {
        element.style.background = color.darken(80);
    }
}