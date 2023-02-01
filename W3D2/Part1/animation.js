$(document).ready(function(){
    $("#start").click(function(){
        const width = $("#width").val(); 
        const growthAmount = $("#growthAmount").val();
        const interval = $("#interval").val();
        const noCircle = $("#noCircle");

        for(let i = 0; i < noCircle.val(); i++ ){
            $("#circleList").append($("<div>",{
                "id": "circle" + i,
                "class": "circle",
                "css": {
                    "width": width + "px",
                    "height": width + "px",
                    "border-radius": width + "px"
            }}));
        }

        $("#circleList > div").each(function(idx, e){
            timer = setInterval(circleChangeSize, interval, e, growthAmount);
        })
    });

    $("#circleList > div").click(function(e){
        console.log(e);
        $("#circle0").hide();
        // clearInterval(this.timer);
    })
})

function circleChangeSize(itemJ, growthAmount){
    const newSize = parseInt($(itemJ).width()) + parseInt(growthAmount) + "px";
    $(itemJ).css({
        "width": newSize,
        "height": newSize,
        "borderRadius": newSize
    });
}