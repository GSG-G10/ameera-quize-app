let startBtn = document.getElementById("start-btn");
let input = document.getElementById("name")
let welcomepage = document.getElementById("welcome-page");
let qestionpage = document.getElementById("qestion-page");
// enable the start btn
input.onkeyup = function() {
    if (input.value.length > 0) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
}

// click on start btn go to question page
startBtn.onclick = function() {
    welcomepage.classList.add("hide");
    qestionpage.classList.remove("hide");

}

// disable and enable start btn