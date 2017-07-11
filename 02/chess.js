var columns = 8;
var lines = 8;
var board = '';
var odd = true;

for (var i = 0; i < columns; i++) {
	for (var j = 0; j < lines; j++) {
		if (j % 2 === 0) {
			if (odd) {
				board += '#';	
			} else {
				board += ' ';
			}
		} else {
			if (odd) {
				board += ' ';	
			} else {
				board += '#';
			}
		}
	}
	board += '\n';
	odd = !odd;
}
console.log(board);





