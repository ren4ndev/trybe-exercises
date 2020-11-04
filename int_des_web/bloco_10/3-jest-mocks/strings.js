const cxAlta = (string) => {
	return string.toUpperCase();
}

const primeiraLetra = (string) => {
	return string[0];
}

const junta = (primeiraStr, segundaStr) => {	
	return primeiraStr + segundaStr;
}

module.exports = { cxAlta, primeiraLetra, junta };