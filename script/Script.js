const big = document.getElementById("big");
const small = document.getElementById("small");
const defaultSize = document.getElementById("default");


function bigFunc(){
	document.getElementById('about-me').style.fontSize = "20px";
}

function smallFunc(){
	document.getElementById("about-me").style.fontSize = "10px";
}

function defaultFunc() {
	document.getElementById("about-me").style.fontSize = "16px";
}

big.addEventListener('click', bigFunc);

small.addEventListener('click', smallFunc);

defaultSize.addEventListener('click', defaultFunc);

