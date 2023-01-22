// var preTextAreaStr = "";
var currentAnimation = "Blank";
var currentFontSize = "12pt";
const linkBreak = "=====\n";
const speedDefault = 250;

window.onload = function() {
textArea = document.getElementById("text-area");
startBtn = document.getElementById("start");
stopBtn = document.getElementById("stop");
animationDrb = document.getElementById("animation");
fontsizeDrb = document.getElementById("fontsize");
turboChb = document.getElementById("turbo");

startBtn.onclick = startClicked;
stopBtn.onclick = stopClicked;
animationDrb.onchange = animationChanged;
fontsizeDrb.onchange = fontsizeChanged;
turboChb.onchange = turboChecked;
}

var timer = null;
function turboChecked(){
    if(turboChb.checked)
        currentSpeed = 50;
    else
        currentSpeed = speedDefault;
    //clear time interval and set the speed again
    if (timer != null){
        clearInterval(timer);
    }
    timer = setInterval(frameChange, currentSpeed);
    console.log(currentSpeed);
}

function fontsizeChanged(){
    currentFontSize = fontsizeDrb.value;
    textArea.style.fontSize = currentFontSize;
}

function animationChanged(){
    currentAnimation = animationDrb.value;
    item = 0;
}

function startClicked() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    animationDrb.disabled = true;
    preTextAreaStr = textArea.value;
    turboChecked();
    
}

function stopClicked(){
    startBtn.disabled = false;
    stopBtn.disabled = true;
    animationDrb.disabled = false;
    textArea.value = preTextAreaStr;
    clearInterval(timer);
}

var item = 0;
function frameChange(){
    var returnFrame = "";
    let frameList = ANIMATIONS[currentAnimation].split(linkBreak);
    if(item >= frameList.length)
    {
        item = 0;
    }
    returnFrame = frameList[item];
    item += 1;
    textArea.value = returnFrame;
    
}