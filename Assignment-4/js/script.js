(function(){
	var names = ["jhanvi" , "yash" ,"joey" ,"rachel","pheobe","chandler","ross"];
	for (var i in names) {
		var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			byeSpeaker.speak(names[i]);
		} else {
			heySpeaker.speak(names[i]);
		}
	}
})();
