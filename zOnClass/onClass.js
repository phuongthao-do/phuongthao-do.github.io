$(() => {
  $.ajax({
    url:"http://localhost: 3000/spa",
    type: "get",
    timeout: 5,
    success: successFunc,
    error: errorFunc,
    compelete: compeleteFunc
  })
})
function successFunc(){}

function errorFunc(){}

function compeleteFunc(){}

function makeCall(){
  let d = {
    number: $('num').val()
  }
}