var timer = null;
var countdownNumber = 5;

var changeState = function(state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 5;
	document.getElementById('countdown').innerHTML = countdownNumber;

// countdown
	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber -1;
			document.getElementById('countdown').innerHTML = countdownNumber;

			if (countdownNumber > 1 && countdownNumber <= 4) {
				// yay for happiness
				document.getElementById("yay").className = "yay show";
			} else {
				document.getElementById("yay").className = "yay";
			}

			if (countdownNumber <= 0) {
				changeState(3);
			}
		}, 1000);
	} else if (state == 3) {

// success
		var success = setTimeout(function()
			{
				var randomNumber = Math.round(Math.random()*10);
				console.log("randomNumber:", randomNumber);

				if (randomNumber > 4) {
					changeState(4);
				} else {
					changeState(5);
				}
			}, 2000);
	}
};