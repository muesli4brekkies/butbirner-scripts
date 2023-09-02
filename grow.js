/** @param {NS} ns */
export async function main(ns) {
await ns.grow(ns.args[0])
//ns.tprint(`GROW ${ns.args[0]}`)
}