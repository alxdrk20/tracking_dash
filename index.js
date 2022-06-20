let playCard = document.getElementById("play-card");
let workCard = document.getElementById("work-card");
let studyCard = document.getElementById("study-card"); 
let socialCard = document.getElementById("social-card");
let selfCareCard = document.getElementById("self-care-card");
let exerciseCard = document.getElementById("exercise-card");

let daily = document.getElementById("щоденно");
let weekly = document.getElementById("щотижня");
let monthly = document.getElementById("щомісячно");

let arr = [playCard, workCard, studyCard, socialCard, selfCareCard, exerciseCard];

let timeframe = 'щоденно';
updateDash(timeframe); 

daily.addEventListener("click", function() {
    updateDash(this.innerText.toLowerCase());
    this.classList.add('text-active'); 
    weekly.classList.remove('text-active'); 
    monthly.classList.remove('text-active'); 
},false);
weekly.addEventListener("click", function() {
    updateDash(this.innerText.toLowerCase());
    daily.classList.remove('text-active'); 
    this.classList.add('text-active'); 
    monthly.classList.remove('text-active'); 
},false);
monthly.addEventListener("click", function() {
    updateDash(this.innerText.toLowerCase());
    daily.classList.remove('text-active'); 
    weekly.classList.remove('text-active'); 
    this.classList.add('text-active'); 
}, false);


function updateDash(timeframe) {
    fetch("data.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        
        for (let i = 0; i < arr.length; i++) {
            arr[i].querySelector('.title').innerHTML = data[i].title; 
            arr[i].querySelector('.current').innerHTML = data[i].timeframes[timeframe].current + 'год.';
            arr[i].querySelector('.previous').innerHTML = `Тиждень тому - ${data[i].timeframes[timeframe].previous}год.`;
        }
    })
    .catch(error => console.log(error))
}





