function isEven(value) {
	if (value > 0) {
		if (value - 2 === 0) {
			return true;
		} else if (value - 2 === 1) {
			return false;
		} else {
			return isEven(value - 2);
		}
	} else { 
		if (value + 2 === 0) {
			return true;
		} else if (value + 2 === 1) {
			return false;
		} else {
			return isEven(value + 2);
		}
	}
	
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-50));
console.log(isEven(-75));
