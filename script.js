function myF(){
    document.getElementById("nameDiv").className = "classDiv";
}
// myF();

window.onload = function(){
   var tag = document.getElementById("nameDiv");
//    console.log(tag.innerHTML);
//    console.log(tag.innerText);
   console.log(tag.offsetTop);
//    tag.className = "esp";
   tag.style.nameDiv = parseInt("30px") + 50 + "px";
   document.getElementById("myBtn").onclick = changeColor;
//    document.getElementById("myBtn").onclick = changeColor;
   
}
timer = null;
function changeColor(){
    if(timer === null){

        timer = setInterval(showHTML, 3000);
    }else{
        clearInterval(timer);
        timer = null;
    }
}

function showMsg(){
    alert("My pop");
}
function showHTML(x){
    document.getElementById("div2").innerText += "Now, I'm here";
}