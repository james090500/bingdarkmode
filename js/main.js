window.onload = function() {
   // Check all elements
   this.loopElements();
}

function loopElements() {
    var tags = document.getElementsByTagName("*");
    for(tag of tags) {
        this.changeColour(tag);
    }
}

function changeColour(element) {
    const compStyles = window.getComputedStyle(element);
    let fontColor = compStyles.getPropertyValue('color')

    //Split rgb in to values
    let rgb = fontColor.replace(/[^\d,]/g, '').split(',');
    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];

    //If colour is blackish
    if(red <= 100 && green <= 100 && blue <= 100) {
        red = Math.abs(red - 255);
        green = Math.abs(green - 255);
        blue = Math.abs(blue - 255);

        //Set the colour
        element.style.color = element.style.color = `rgb(${red},${green}, ${blue})`
    }
}