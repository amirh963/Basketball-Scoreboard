let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let resetBtn = document.getElementById("reset-btn");

let homeScore = 0;
let guestScore = 0;

function addHome(points){
    homeScore += points;
    homeScoreEl.textContent = homeScore
}

function addGuest(points){
    guestScore += points;
    guestScoreEl.textContent = guestScore
}


function resetScores(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}