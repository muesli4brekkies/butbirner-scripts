/** @param {NS} ns */
export async function main(ns) {
	var mainlist = ns.scan(ns.getHostname())
		for (let i = 0; i < mainlist.length; i++) {
			var scanlist = ns.scan(mainlist[i])
			for (let j = 0; j < scanlist.length; j++) {
				for (let k = 0; k < mainlist.length; k++) {
					if (mainlist[k] == scanlist[j]) {
						break;
					}
					if ((mainlist.length - 1) == k) {
						mainlist[mainlist.length] = scanlist[j]
					}
				}
			}
		}
	while (true) {
		let moneylist = []
		let nomoneylist = []
		let ramavailablearray = []
		let ramavailable = 0
		let j = 0
		let k = 0
		for (let i = 0; i < mainlist.length; i++) {
			if (ns.hasRootAccess(mainlist[i]) && ns.getServerRequiredHackingLevel(mainlist[i]) <= ns.getHackingLevel()) {
				if (ns.getServerMaxMoney(mainlist[i])) {
					moneylist[j] = mainlist[i]
					j++
				} else {
					nomoneylist[k] = mainlist[i]
					k++
				}
			}
		}
		let hostlist = nomoneylist.concat(moneylist)
		for (let i = 0; i < hostlist.length; i++) {
			ramavailablearray[i] = Math.floor(ns.getServerMaxRam(hostlist[i]) - ns.getServerUsedRam(hostlist[i]))
			ramavailable += ramavailablearray[i]
		}
		j = 0
		while (ramavailable > ns.getScriptRam("prsm.js")) {
			if (ramavailablearray[j] < ns.getScriptRam("prsm.js")) {
				j++
				continue;
			} else {
				ns.print("Tilting " + ns.args[0] + " using " + hostlist[j] + "!")
				ns.exec("prsm.js",hostlist[j] , 1, ns.args[0], "-tilt")
				break;
			}
		}

		await ns.sleep(5000)
	}

}