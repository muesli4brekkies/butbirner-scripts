/**
 * @param {string} text - The to-be-compressed string.
 * @returns {string} - The compressed string.
 */
function compression_iii_lz_compression(text) {
	const bst_fw = Array(text.length);
	const len_fw = Array(text.length).fill(Infinity);

	const bst_bw = Array(text.length);
	const off_bw = Array(text.length);
	const len_bw = Array(text.length).fill(Infinity);

	// set up initial forward
	for (let i = 0; i !== Math.min(9, text.length); ++i) {
		bst_fw[i] = i + 1;
		len_fw[i] = i + 2;
	}

	for (let i = 1; i !== text.length; ++i) {
		// handle 0 length lookback
		if (len_fw[i-1] + 1 < len_bw[i-1]) {
			bst_bw[i-1] = 0;
			len_bw[i-1] = len_fw[i-1] + 1;
		}
		// handle 0 length forward
		if (len_bw[i-1] + 1 < len_fw[i-1]) {
			bst_fw[i-1] = 0;
			len_fw[i-1] = len_bw[i-1] + 1;
		}
		// handle nonzero lookbacks
		for (let length = 1; length !== Math.min(9, text.length - i) + 1; ++length) {
			const slice = text.slice(i, i + length);
			for (let offset = 1; offset !== Math.min(9, i) + 1; ++offset) {
				const offset_slice = text.slice(i - offset, i + length - offset);
				if (slice === offset_slice && len_fw[i-1] + 2 < len_bw[i-1+length]) {
					bst_bw[i-1+length] = length;
					len_bw[i-1+length] = len_fw[i-1] + 2;
					off_bw[i-1+length] = offset;
				}
			}
		}
		// handle nonzero forward
		for (let j = 0; j !== Math.min(9, text.length - i); ++j) {
			if (len_bw[i-1] + j + 2 < len_fw[i+j]) {
				bst_fw[i+j] = j + 1;
				len_fw[i+j] = len_bw[i-1] + j + 2;
			}
		}
	}

	// reconstruct compressed
	let i = text.length - 1;
	let forward = len_fw[i] < len_bw[i];
	let compressed = "";
	while (i !== -1) {
		if (forward) {
			compressed = `${bst_fw[i]}${text.slice(i+1-bst_fw[i], i+1)}` + compressed;
			i -= bst_fw[i];
		} else {
			compressed = `${bst_bw[i]}${bst_bw[i] === 0 ? "" : off_bw[i]}` + compressed;
			i -= bst_bw[i];
		}
		forward = !forward;
	}

	return compressed;
}


function vignereify(data) {
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let solution = ""
	for (let i = 0; i < data[0].length; i++) {
		solution += alphabet[(alphabet.indexOf(data[0][i]) + alphabet.indexOf(data[1][i % data[1].length])) % 26]
	}
	return solution;
}

function factor(num) {
	for (let div = 2; div <= Math.sqrt(num); div++) {
		if (num % div != 0) {
			continue;
		}
		num = num / div;
		div = 2;
	}
	return num;
}
function generateIps(num) {
	num = num.toString();

	const length = num.length;

	const ips = [];

	for (let i = 1; i < length - 2; i++) {
		for (let j = i + 1; j < length - 1; j++) {
			for (let k = j + 1; k < length; k++) {
				const ip = [
					num.slice(0, i),
					num.slice(i, j),
					num.slice(j, k),
					num.slice(k, num.length)
				];
				let isValid = true;

				ip.forEach(seg => {
					isValid = isValid && isValidIpSegment(seg);
				});

				if (isValid) ips.push(ip.join("."));

			}

		}
	}

	return ips;

}

function isValidIpSegment(segment) {
	if (segment[0] == "0" && segment != "0") return false;
	segment = Number(segment);
	if (segment < 0 || segment > 255) return false;
	return true;
}

function solveTriangleSum(arrayData, ns) {
	let triangle = arrayData;
	let nextArray;
	let previousArray = triangle[0];

	for (let i = 1; i < triangle.length; i++) {
		nextArray = [];
		for (let j = 0; j < triangle[i].length; j++) {
			if (j == 0) {
				nextArray.push(previousArray[j] + triangle[i][j]);
			} else if (j == triangle[i].length - 1) {
				nextArray.push(previousArray[j - 1] + triangle[i][j]);
			} else {
				nextArray.push(Math.min(previousArray[j], previousArray[j - 1]) + triangle[i][j]);
			}

		}

		previousArray = nextArray;
	}

	return Math.min.apply(null, nextArray);
}
function mergeOverlap(intervals) {
	intervals.sort(([minA], [minB]) => minA - minB);
	for (let i = 0; i < intervals.length; i++) {
		for (let j = i + 1; j < intervals.length; j++) {
			const [min, max] = intervals[i];
			const [laterMin, laterMax] = intervals[j];
			if (laterMin <= max) {
				const newMax = laterMax > max ? laterMax : max;
				const newInterval = [min, newMax];
				intervals[i] = newInterval;
				intervals.splice(j, 1);
				j = i;
			}
		}
	}
	return intervals;
}

function uniqueGridI(data) {

	const rightMoves = data[0] - 1;
	const downMoves = data[1] - 1;

	return Math.round(factorialDivision(rightMoves + downMoves, rightMoves) / (factorial(downMoves)));
}
function factorial(n) {
	return factorialDivision(n, 1);
}

function factorialDivision(n, d) {
	if (n == 0 || n == 1 || n == d)
		return 1;
	return factorialDivision(n - 1, d) * n;
}
function uniqueGridII(grid, ignoreFirst = false, ignoreLast = false) {
	const rightMoves = grid[0].length - 1;
	const downMoves = grid.length - 1;

	let totalPossiblePaths = Math.round(factorialDivision(rightMoves + downMoves, rightMoves) / (factorial(downMoves)));

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {

			if (grid[i][j] == 1 && (!ignoreFirst || (i != 0 || j != 0)) && (!ignoreLast || (i != grid.length - 1 || j != grid[i].length - 1))) {
				const newArray = [];
				for (let k = i; k < grid.length; k++) {
					newArray.push(grid[k].slice(j, grid[i].length));
				}

				let removedPaths = uniqueGridII(newArray, true, ignoreLast);
				removedPaths *= uniqueGridI([i + 1, j + 1]);

				totalPossiblePaths -= removedPaths;
			}
		}

	}

	return totalPossiblePaths;
}

function caesarCipher(data) {
	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	let inputarg = data[0]
	let offset = data[1]
	let outputstring = ""
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
				outputstring = outputstring + alphabet[targetindex]
			}
		}
	}
	return (outputstring)
}

function unSpiralise(arr, accum = []) {
	if (arr.length === 0 || arr[0].length === 0) {
		return accum;
	}
	accum = accum.concat(arr.shift());
	if (arr.length === 0 || arr[0].length === 0) {
		return accum;
	}
	accum = accum.concat(column(arr, arr[0].length - 1));
	if (arr.length === 0 || arr[0].length === 0) {
		return accum;
	}
	accum = accum.concat(arr.pop().reverse());
	if (arr.length === 0 || arr[0].length === 0) {
		return accum;
	}
	accum = accum.concat(column(arr, 0).reverse());
	if (arr.length === 0 || arr[0].length === 0) {
		return accum;
	}
	return unSpiralise(arr, accum);
}
function column(arr, index) {
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		const elm = arr[i].splice(index, 1)[0];
		if (elm) {
			res.push(elm);
		}
	}
	return res;
}

/** @param {NS} ns */
export async function main(ns) {

			let data = ns.codingcontract.getData(ns.args[1],ns.args[2])
	switch (ns.args[0]) {
		case "Encryption I: Caesar Cipher":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.codingcontract.attempt(caesarCipher(data), ns.args[1], ns.args[2])
			break;

		case "Spiralize Matrix":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.codingcontract.attempt(unSpiralise(data), ns.args[1], ns.args[2])
			break;

		case "Unique Paths in a Grid I":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.codingcontract.attempt(uniqueGridI(data), ns.args[1], ns.args[2])
			break;

		case "Unique Paths in a Grid II":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.codingcontract.attempt(uniqueGridII(data), ns.args[1], ns.args[2])
			break;

		case "Merge Overlapping Intervals":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.codingcontract.attempt(mergeOverlap(data), ns.args[1], ns.args[2])
			break;

		case "Minimum Path Sum in a Triangle":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.codingcontract.attempt(solveTriangleSum(data), ns.args[1], ns.args[2])
			break;

		case "Generate IP Addresses":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.codingcontract.attempt(generateIps(data), ns.args[1], ns.args[2])
			break;

		case "Find Largest Prime Factor":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.print(ns.codingcontract.attempt(factor(data), ns.args[1], ns.args[2]))
			break;
		
		case "Encryption II: Vigenère Cipher":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.print(ns.codingcontract.attempt(vignereify(data), ns.args[1], ns.args[2]))
			break;

		case "Compression III: LZ Compression":
			ns.tprint("Attempting " + ns.args[0] + " on " + ns.args[2])
			ns.print(ns.codingcontract.attempt(compression_iii_lz_compression(data), ns.args[1], ns.args[2]))
	}
	ns.writePort(ns.pid,"")
}
