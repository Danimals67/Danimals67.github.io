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
var zSeconds = 4000;
var test;
var difficulty = 10;
var isDifficult = false;
var hasStarted = false;
var width = 100;
var subWidth;
var id;

function clickR(){
	if(hasStarted == true){
		if(score >= 50 && isDifficult == false){
			difficulty *= 10;
			isDifficult = true;
		}
		if(right == true){
			pickRandom();
			updateScore();
			width = 100;
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
	if(hasStarted == false){
		start();
		hasStarted = true;
	}
}

function clickL(){
	if(hasStarted == true){
	if(score >= 50 && isDifficult == false){
			difficulty *= 10;
			isDifficult = true;
		}
		if(left == true){
			pickRandom();
			updateScore();
			width = 100;
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
		if(hasStarted == false){
		start();
		hasStarted = true;
	}
}

function newNumbers(){
	
}

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
			width = 100;
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
			width = 100;
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
	document.getElementById("timer").innerHTML = "Time:" + seconds;
	document.getElementById("btnStart").disabled = true;
	timerBar();
	subWidth = 0.25;
}

function updateScore(){
	score++;
	document.getElementById("score").innerHTML = "Score: " + score;
}

function updateSeconds(){
	seconds = startSeconds * diminish;
	zSeconds = startSeconds * diminish;
	//seconds = seconds.toFixed(2);
	diminish = diminish * 0.95;
	subWidth = test / ((test * 4) * diminish);
	//document.getElementById("timer").innerHTML = "Time: " + seconds;
}

function lost(){
	clearInterval(startTime);
	clearInterval(id);
	alert("You Lost with a score of " + score);
	document.getElementById("hidden").style.display = "inline";
	document.getElementById("btnStart").disabled = true;
	document.getElementById("numR").innerHTML = "Try Again";
	document.getElementById("numR").setAttribute("onclick", "javascript: location.reload();");
	document.getElementById("numL").innerHTML = "";
}

function timer(){
	startTime = setInterval(timeUpdate, 10);
}

function timeUpdate(){
	//tSeconds++;
	seconds = seconds - 10;
	test = (seconds/1000) % 60;
	test = test.toFixed(2);
	document.getElementById("timer").innerHTML = "Time:" + test;
	if(test <= 0){
			document.getElementById("timer").innerHTML = "Time:0";
			var pBar = document.getElementById("bar");
			pBar.style.width = 0 + "%";
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


function timerBar(){
	var elem = document.getElementById("bar");   
	id = setInterval(frame, 10);
	function frame(){
		if(test != 0){
		if(width <= 0){
			//clearInteveral(id);
			width = 0;
		}
		else{
			width -= subWidth;
			elem.style.width = width + '%'; 
		}
	}
	}
	
}

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
		//CHEATER CODE
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