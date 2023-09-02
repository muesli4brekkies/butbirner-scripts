import {augInstall} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	augInstall(ns)
	ns.writePort(ns.pid,"")
}