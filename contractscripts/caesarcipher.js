/** @param {NS} ns */
export async function main(ns) {
	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	let inputarg = ns.args[0]
	let offset = ns.args[1]
	let outputstring = ""
	let outputvar = ""
	for (let i = 0; i < inputarg.length; i++) {
		let char = (inputarg.substring(i, i + 1))
		if (char == " ") {
			outputstring = outputstring + " "
			continue;
		}
		for (let j = 0; j < alphabet.length; j++) {
			if (char == alphabet[j]) {
				let targetindex = (j - offset)
				if (targetindex < 0) {
					targetindex = 26 + targetindex
				}
				ns.tprint(targetindex)
				outputstring = outputstring + alphabet[targetindex]
			}
		}
	}
				ns.tprint(outputstring)
}