function setupCharts(){
  days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
	const d = new Date();
	let day = d.getDay();// this will return a number Sunday starting at 0 to 6
  var cols = document.querySelectorAll(".graph-bar");

	
  cols[day - 1].classList.add('active');


}

document.addEventListener("DOMContentLoaded", function() {
    setupCharts();
});



let finData = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
];

for (var i = 0; i < document.querySelectorAll(".tooltip-text").length; i++) {
  document.querySelectorAll(".tooltip-text")[i].innerHTML = "$" + finData[i].amount;
}


total = 0;
for (i = 0; i < finData.length; i++) {
  total += finData[i].amount;
}


// var percentTotal = (finData[i].amount / total) * 100;

for (var i = 0; i < document.querySelectorAll(".graph-bar").length; i++) {
  document.querySelectorAll(".graph-bar")[i].style.height = Math.round(finData[i].amount ) * 2 + "px";
  document.querySelectorAll(".tooltip-text")[i].style.bottom = "calc(" + (Math.round(finData[i].amount ) * 2) + "px + 8px";
}
