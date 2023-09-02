import {generateIps} from "ctdo.js"
/** @param {NS} ns */
export async function main(ns) {
	ns.codingcontract.attempt(generateIps(ns.args[0]),ns.args[1],ns.args[2])
}