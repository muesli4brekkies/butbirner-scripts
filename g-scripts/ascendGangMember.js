import {ascendGangMember} from "g-scripts/gangfunc.js"
/** @param {NS} ns */
export async function main(ns,g=ns.gang) {
	ascendGangMember(g,ns.args[0])	
	ns.writePort(ns.pid,"")
}