import {recruit} from "g-scripts/gangfunc.js"
/** @param {NS} ns */
export async function main(ns,g=ns.gang) {
	await recruit(g,ns)	
	ns.writePort(ns.pid,"")

}