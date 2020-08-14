(function (window) {
	var byeSpeaker = new Object();
	var SpeakBye = "Good Bye";
	byeSpeaker.speak = function speak(name) {
		console.log(SpeakBye + " " + name);
	};
	window.byeSpeaker = byeSpeaker;
})(window);