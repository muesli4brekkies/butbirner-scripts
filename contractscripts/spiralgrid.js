/** @param {NS} ns */
export async function main(ns) {
	let arr =     [
        [ 3,37,42,14,40,32,49,42,44,14,39,19, 6,19,14],
        [20,48,20,26, 5,11,13,45, 8,47,41,39, 8, 7,17],
        [30,29,36,50,13,27,48,31,21,23,50,49,46,29,39],
        [31,37,11,42,37,37,14, 4,41,32,41, 3, 7,43,20],
        [46, 2, 6,13, 1, 1,17,31,22,16,45,40,48, 6, 9],
        [11,10, 1,22,24,15,19,19,32,29, 7,14,29,42,27],
        [36,24,19,45,33,47,18,40,38,14,19, 8,21,48,40],
        [14,20,37,21,35,47,13,43,30,49, 6,34,38,31,43],
        [23,50, 4,43,26,23,45,32,33,21,35, 6,10, 6,14],
        [12,19,24,45,13,23,16,47, 7,33,23,12,25, 1,25],
        [ 1,43,48,16,37,31,33, 3,11,33,33,35,16,45,29],
        [40,35,46,14,35,23,23,38,42,11,39,46,33,18,20],
    ]


	ns.tprint(spiral(arr))
}
// Spiralize Matrix

export function spiral(arr, accum = []) {
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
	return spiral(arr, accum);
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
