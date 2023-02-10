$(function(){
    fetch('./js/contactinfo.txt')
    .then(res => res.text())
    .then(res => {
        $("#body").append(`<pre>${res}</pre>`)
    });
});