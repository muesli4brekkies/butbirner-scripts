import {murderate} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	murderate(ns)
	ns.writePort(ns.pid,"")
}