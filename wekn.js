/** @param {NS} ns */
export async function main(ns) {
await ns.weaken(ns.args[0])
//ns.tprint(`WEAKEN ${ns.args[0]}`)
}