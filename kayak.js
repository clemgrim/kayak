module.exports = kayak;

function kayak(phrase) {
	var output = '';
	
	for (var i = phrase.length - 1 ; i >= 0 ; i--) {
		output += phrase[i].toLowerCase();
	}
	
	return output;
}