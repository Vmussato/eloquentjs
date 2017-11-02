function countBs(word) {
	
	var bees = 0;

	for (var i = word.length - 1; i >= 0; i--) {
		if (word[i] === "B") {
			bees++;
		}
	}
	return bees;
}

console.log(countBs("This Boat is Beautiful"));