$(document).ready(function(){
    $("#maze").mousemove(function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.className == "boundary") console.log(false);
        else console.log(true);
    });
})