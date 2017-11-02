function countChar(word, char) {
	
	var chars = 0;

	for (var i = word.length - 1; i >= 0; i--) {
		if (word[i] === char) {
			chars++;
		}
	}
	return chars;
}

console.log(countChar("This Boat is Beautiful", "i"));