window.onload = function(){
    
    registerForm = document.getElementById("register");
    var submitBtn = document.getElementById("submitBtn");
    
    // registerForm.submit = submitClicked;
    // submitBtn.onclick = submitClicked;

    registerForm.addEventListener("submit", submitClicked)
  
}

function submitClicked(event){

    //Preventing page refresh
    event.preventDefault();

    console.log("Email: " + registerForm.elements["email"].value);
    console.log("Password: " + registerForm.elements["password"].value);
    console.log("checkMeOut: " + registerForm.elements["checkMeOut"].checked);

    document.getElementById("result").innerText = "Submit successfully!"
    document.getElementById("submitStr").innerHTML = 
    "Website url: " + registerForm.elements["url"].value 
    + "<br>Email: " + registerForm.elements["email"].value 
    + "<br>Password: " + registerForm.elements["password"].value + "<br>"
    +"CheckMeOut: " + registerForm.elements["checkMeOut"].checked;


}

