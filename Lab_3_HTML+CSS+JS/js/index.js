var $button = document.querySelector('.clicker');
let $fon = document.querySelector('.Fon');

$button.addEventListener("click", function() {

    $fon.style.opacity = "1";
    $fon.style.visibility = "visible";
});

$fon.addEventListener("click", function() {

    $fon.style.opacity = "0";
    $fon.style.visibility = "hidden";
});