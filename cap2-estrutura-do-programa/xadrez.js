var tamanho = 8;
var tabuleiro = '';
var j = 1;
for (var i = 1; i < 100; i++) {
	if (i % 2 === 0 ) {
		tabuleiro += '#';
	} else {
		tabuleiro += ' ';
	}
	if(i % tamanho === 0) {
		tabuleiro += '\n';
		i+=j;
		j++;
	}
}
console.log(tabuleiro);





