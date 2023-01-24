window.onload = function(){
    newProductForm = document.getElementById("newProduct");

    window.addEventListener("submit", formSubmited);
}

function formSubmited(event){
    event.preventDefault();

    document.getElementById("result").innerText = "Submit successfully!"
    document.getElementById("submitStr").innerHTML = 
    "productNumber: " + newProductForm.elements["productNumber"].value 
    + "<br>name: " + newProductForm.elements["nameP"].value 
    + "<br>Unit Price: " + newProductForm.elements["unitPrice"].value 
    + "<br>Quantity in stock: " + newProductForm.elements["quantity"].value 
    + "<br>Supplier: " + newProductForm.elements["supplier"].value
    + "<br>Date supplier: " + newProductForm.elements["date"].value;
}