window.onload = function(){
    startBtn = document.getElementById("start");
    stopBtn = document.getElementById("stop");
    templateTxt = document.getElementById("template");

    startBtn.onclick = startClicked;
    stopBtn.onclick = stopClicked;

    rabbitBtn = document.getElementById("rabbit");
    rabbitBtn.onclick = rabbitClicked;

    startBtn2 = document.getElementById("start2");
    stopBtn2 = document.getElementById("stop2");
    templateTxt2 = document.getElementById("template2");
    precisionTxt2 = document.getElementById("precision2");

    startBtn2.onclick = startClicked2;
    stopBtn2.onclick = stopClicked2;


}
function rabbitClicked(){
    let rabbit = new Rabbit("Whilte rabbit");
    alert("Class Inheritance: " + rabbit.name);
}

function startClicked(){
    clock = new Clock(templateTxt.value);
    clock.start();
}

function stopClicked(){
    clock.stop();
}

function startClicked2(){
    console.log(precisionTxt2.value)
    clock2 = new ExtendedClock(templateTxt.value,precisionTxt2.value);
    clock2.start();
}

function stopClicked2(){
    clock2.stop();
}

