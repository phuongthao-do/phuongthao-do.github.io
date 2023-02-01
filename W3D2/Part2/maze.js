$(document).ready(function(){
    $("#maze").mousemove(function(e){
        e.stopPropagation();
        console.log(e.target.className);
        if(e.target.className == "boundary") {         
            $("#status")
                .html("NO!!Try it again!")
                .css("color", "red");
        }
        else {
            $("#end").mousemove(function(){
                $("#status")
                .html("Amazing, GOOD JOB!!")
                .css("color", "green");
            });

        }
    });
})