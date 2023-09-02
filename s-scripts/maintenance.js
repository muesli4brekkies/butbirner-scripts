import {runMaintenance} from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	ns.disableLog('ALL')
	ns.enableLog('upgradePurchasedServer')
	runMaintenance(ns)
	ns.writePort(ns.pid,"")

}