/** @param {NS} ns */
export async function main(ns) {
	ns.tprint(ns.peek(ns.getRunningScript("loop/prsm.js").pid))
}
