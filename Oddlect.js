var tSeconds = 0;
var seconds = 4000;
var eleft = 37;
var eright = 39;
var right = false;
var left = false;
var score = 0;
var startTime;
var diminish = 0.95;
var startSeconds = 4000;
var zSeconds;
var test;
var difficulty = 10;
var isDifficult = false;

document.onkeydown = function(e) {
    e = e || window.event;
	if(e.keyCode == eleft){
		if(score >= 50 && isDifficult == false){
			difficulty *= 10;
			isDifficult = true;
		}
		if(left == true){
			pickRandom();
			updateScore();
			/*timerBar();*/
			if(seconds > 1000){
				updateSeconds();
			}
			else if(seconds < 1000 && seconds > 0){
				seconds = zSeconds;
			}
		}
		else{
			lost();			
		}
	}
	if(e.keyCode == eright){
		if(score >= 50 && isDifficult == false){
			difficulty *= 10;
			isDifficult = true;
		}
		if(right == true){
			pickRandom();
			updateScore();
			/*timerBar();*/
			if(seconds > 1000){
				updateSeconds();
			}
			else if(seconds < 1000 && seconds > 0){
				seconds = zSeconds;
			}
		}
		else{
			lost();
		}
	}
};

function start(){
	pickRandom();
	timer();
	document.getElementById("timer").innerHTML = "Time: " + seconds;
	document.getElementById("btnStart").disabled = true;
	timerBar();
}

function updateScore(){
	score++;
	document.getElementById("score").innerHTML = "Score: " + score;
}

function updateSeconds(){
	seconds = startSeconds * diminish;
	zSeconds = startSeconds * diminish;
	//seconds = seconds.toFixed(2);
	diminish = diminish * 0.99;
	//document.getElementById("timer").innerHTML = "Time: " + seconds;
}

function lost(){
	clearInterval(startTime);
	alert("You Lost with a score of " + score);
	document.getElementById("hidden").style.display = "inline";
	document.getElementById("btnStart").disabled = true;
	document.getElementById("numL").innerHTML = "Click Try Again";
	document.getElementById("numR").innerHTML = "";
}

function timer(){
	startTime = setInterval(timeUpdate, 10);
}

function timeUpdate(){
	//tSeconds++;
	seconds = seconds - 10;
	test = (seconds/1000) % 60;
	test = test.toFixed(2);
	document.getElementById("timer").innerHTML = "Time: " + test;
	if(test <= 0){
			document.getElementById("timer").innerHTML = "Time: 0";
			lost();
		}
	//document.getElementById("timer").innerHTML = "Time: " + tSeconds;
	/*if(tSeconds == 100){
		seconds--;
		tSeconds = 0;
		seconds = seconds.toFixed(2);
		document.getElementById("timer").innerHTML = "Time: " + seconds;
		if(seconds <= 0){
			document.getElementById("timer").innerHTML = "Time: 0";
			lost();
		}
	}*/
}

/*
function timerBar(){
	var elem = document.getElementById("bar");   
	var width = 1;
	var id = setInterval(frame, 10);
	function frame() {
		if (width >= seconds / 60) {
		clearInterval(id);
		alert("Something probably went wrong");
		} else {
			width++; 
			elem.style.width = width + '%'; 
		}
	}
}*/

function updateRight(){
	document.getElementById("numR").innerHTML = pickRandom();
}

function updateLeft(){
	document.getElementById("numL").innerHTML = pickRandom();
}

function pickRandom(){
	var i = 0;
	
	i = num = Math.floor((Math.random() * 2) + 1);
	if(i == 1){
		document.getElementById("numR").innerHTML = randomEvenNumber();
		document.getElementById("numL").innerHTML = randomOddNumber();
		right = false;
		left = true;
	}
	else{
		document.getElementById("numR").innerHTML = randomOddNumber();
		document.getElementById("numL").innerHTML = randomEvenNumber();
		right = true;
		left = false;
		/*document.getElementById("numR").innerHTML = randomEvenNumber();
		document.getElementById("numL").innerHTML = randomOddNumber();
		right = false;
		left = true;*/
	}
}

function randomOddNumber(){
	var num = 0;
	num = Math.floor((Math.random() * difficulty) + 1);
	if(num % 2 == 1){
	return num;
	}
	else
		return num - 1;
}

function randomEvenNumber(){
	var num = 0;
	num = Math.floor((Math.random() * difficulty) + 1);
	if(num % 2 == 0){
	return num;
	}
	else
		return num + 1;
}