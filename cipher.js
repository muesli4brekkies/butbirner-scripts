export function cipher(word, code = [420]) { //word to be encrypted and array of secret codes for encryption
	if (!word || code.length < 1) return null;

	function process(w, c) {
		const encrypted = []; //storage for encryption
		for (let i = 0; i < w.length; i++) { //iterate word letter by letter
			encrypted.push(w.charCodeAt(i) ^ c); //convert letter to char number and xor bit shift by code
		}
		return String.fromCharCode(...encrypted) //return converted char numbers back to string
	}
	let result = word; //result will be modified based on number of codes given in code array
	for (let i = 0; i < code.length; i++) {
		result = process(result, code[i]);
	}
	return result;
}


/** @param {NS} ns */
export async function main(ns) {
	if (ns.args.length != 1 && ns.args.length != 2) { //need to provide script with 1 to 2 args or receive help message
		ns.tprintRaw(React.createElement("span", { style: { color: "red" } }, 'Usage: run cipher.js "word to be ciphered" "[array of codes?]"'));
		ns.exit();
	}

	let code = typeof ns.args[1] === "string" ? JSON.parse(ns.args[1]) :
		ns.args[1] ?? [304, 39, 57, 88, 20, 81, 66, 44, 101, 79]; //needs an array of 1 or more codes
	ns.tprintRaw([React.createElement("span", { style: { color: "white" } }, "Encrypted: "),
	React.createElement("span", { style: { color: "lightblue" } }, cipher(ns.args[0], code))]); //print encrypted code
}	