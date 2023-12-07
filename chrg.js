/** @param {NS} ns */
export async function main(ns,s = ns.stanek) {
	await s.chargeFragment(ns.args[0],ns.args[1]), ns.atExit(()=>ns.writePort(ns.pid,""))
}