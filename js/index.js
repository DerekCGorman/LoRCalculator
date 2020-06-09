// Variables
var commonCards;
var rareCards;
var epicCards;
var champCards;
var coinsTotal;
var inputs = document.querySelectorAll("input");
var totalText = document.getElementById("totalText");
var cashText = document.getElementById("cashTotal");

// Grabs the inputs and their values sends it to calculateTotal
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        commonCards = document.getElementById("commonAmt").value;
        rareCards = document.getElementById("rareAmt").value;
        epicCards = document.getElementById("epicAmt").value;
        champCards = document.getElementById("champAmt").value;
        calculateTotal(commonCards, rareCards, epicCards, champCards);
    });
});

// Calculates and sets the text
function calculateTotal(commonCards, rareCards, epicCards, champCards){
    coinsTotal = (commonCards * 10) + (rareCards * 30) + (epicCards * 120) + (champCards * 300);
    totalText.innerHTML = "Coins Needed: " + coinsTotal;
}