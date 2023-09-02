import {augsArrays} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	let data = augsArrays(ns)
	ns.writePort(ns.pid,data)

}