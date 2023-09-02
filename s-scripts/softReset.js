/** @param {NS} ns */
export async function main(ns) {
	ns.run("s-scripts/cleanUp.js")
	await ns.sleep(1000)
ns.singularity.softReset("rset.js")
}