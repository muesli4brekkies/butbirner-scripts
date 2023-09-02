/** @param {NS} ns */
export async function main(ns) {
	let data = [ns.args[0],ns.args[1]]
ns.tprint(totalwaystosumII(data,ns))
}
export function totalwaystosumII(data, ns) {
    let answer = [1].concat((new Array(data[0])).fill(0));
    for (let i of data[1]) {
        for (let j = i ; j <= data[0] ; j++) {
            answer[j] += answer[j-i];
        }
    }
    return answer[data[0]];
}