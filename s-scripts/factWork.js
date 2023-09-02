import {factWork} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
await	factWork(ns,ns.args[0],ns.args[1])
	ns.writePort(ns.pid,"")
}