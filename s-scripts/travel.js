import { goToAirport } from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	goToAirport(ns)
	ns.writePort(ns.pid,"")
}