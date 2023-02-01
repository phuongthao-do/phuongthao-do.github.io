$(document).ready(function(){
$( "#gran2" ).click(function(e) {
  // console.log(e.target);
  console.log( "Handler for .mousedown() called." );
});

// $("child2").on("click", function(){
//   $(this).hide();
// });

$("#gran1").click(function(e){
  console.log("#gran1");
  e.stopImmediatePropagation();

})
$("#gran1").click(function(e){
  console.log("#gran1")

})

$("#child1").click(function(e){
  // console.log("child1 - Parent of #gran1");
  console.log($("#child1").nextAll().html());
})

$("#child2").click(function(e){
  e.preventDefault();
  console.log("#child2");
  $("#child3").addClass("red-text");
  $("#gran1").css("fontSize", "20pt");
  $("div").css("top", function(idx, old) {
    return parseInt(old) + 100 + "px";
   });

   $("#lItems").hide();
})


$("li").each((idx, e) => {
  eJ = $(e);(
  console.log(eJ.html()));
})



});

// $(function(){
//   $("container").on('click', printSth);
// });

// printSth = (e) => { console.log("JOJO");}


