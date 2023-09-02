import {ramFormat} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	let lsvar = ns.ls("home",".js")
	let scriptlist = []
	let ramlist = []
	for (let script of lsvar) {
		scriptlist.push(ramFormat(ns.getScriptRam(script)) + " - " + script)
	}
	for (let script of scriptlist) {
		ns.tprint(script)
	}
}