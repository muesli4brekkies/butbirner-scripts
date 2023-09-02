import {corpWork} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	corpWork(ns,ns.singularity)
	ns.writePort(ns.pid,"")
}