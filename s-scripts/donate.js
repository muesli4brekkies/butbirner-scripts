import {donate} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	donate(ns)
	ns.writePort(ns.pid,"")
}