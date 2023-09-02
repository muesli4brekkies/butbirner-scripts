import {joinedFactions} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	joinedFactions(ns)
	ns.writePort(ns.pid,"")

}