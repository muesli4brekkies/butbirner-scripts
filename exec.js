/** @param {NS} ns */
export async function main(ns) {
	switch (ns.args[0]) {
		case "weaken":
			await ns.weaken(ns.args[1])
			break;
		case "grow":
			await ns.grow(ns.args[1])
			break;
		case "hack":
			await ns.hack(ns.args[1])
			break;

	}
}
