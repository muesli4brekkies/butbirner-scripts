import { backdoor } from "func.js"
/** @param {NS} ns */
export async function main(ns) {
await 	backdoor(ns)
	ns.writePort(ns.pid,"")
}