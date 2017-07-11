var tamanho = 8;
var linhas = 8;
var tabuleiro = '';
var odd = true;

for (var i = 0; i < tamanho; i++) {
	for (var j = 0; j < linhas; j++) {
		if (j % 2 === 0) {
			if (odd) {
				tabuleiro += '#';	
			} else {
				tabuleiro += ' ';
			}
		} else {
			if (odd) {
				tabuleiro += ' ';	
			} else {
				tabuleiro += '#';
			}
		}
	}
	tabuleiro += '\n';
	odd = !odd;
}
console.log(tabuleiro);





