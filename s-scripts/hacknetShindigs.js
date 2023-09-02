import {hacknetShindigs} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	let data = hacknetShindigs(ns)
	ns.writePort(ns.pid,JSON.stringify(data))

}