// Your code here
var rect = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});


function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
    if (left < 360) {
        rect.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})