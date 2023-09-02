import {ownedAugs} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	ownedAugs(ns)
	ns.writePort(ns.pid,"")

}