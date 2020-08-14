(function (window) {
	var heySpeaker = new Object();
	var speakHey = "Hey";
	heySpeaker.speak = function(name) {
		console.log(speakHey + " " + name);
	};
	window.heySpeaker = heySpeaker;
})(window);