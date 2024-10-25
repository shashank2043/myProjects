const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");  // Corrected ID here
const increaseBtn = document.getElementById("IncreaseBtn");  // Case-sensitive correction
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {  // Add this function to decrease
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {  // Add this function to reset
    count = 0;
    countLabel.textContent = count;
}
