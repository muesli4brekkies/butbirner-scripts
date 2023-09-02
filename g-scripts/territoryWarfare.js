import {territoryWarfare} from "g-scripts/gangfunc.js"
/** @param {NS} ns */
export async function main(ns,g=ns.gang) {
	territoryWarfare(g)	
	ns.writePort(ns.pid,"")
}