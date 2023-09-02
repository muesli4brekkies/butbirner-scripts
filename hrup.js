/** @param {NS} ns */
export async function main(ns) {

if (ns.getServerMoneyAvailable("home") > ns.singularity.getUpgradeHomeRamCost()){
	ns.singularity.upgradeHomeRam()
}


}	