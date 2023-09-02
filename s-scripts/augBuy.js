import {augBuy} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	augBuy(ns)
	ns.writePort(ns.pid,"")
}