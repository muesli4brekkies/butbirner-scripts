import { writeLaunchers } from "func.js"
/** @param {NS} ns */
export async function main(ns) {
	writeLaunchers(ns), ns.atExit(() => (ns.writePort(ns.pid, ""), ns.exit()));
}