/** @param {NS} ns */
export async function main(ns, g = ns.grafting) {
		const writeLog = (aug) => { ns.write("logs/workReport.txt", `grafting ${aug}`, "w" )},
		graftingaugs = ["QLink","ECorp HVMind Implant","Xanipher", "OmniTek InfoLoad", "nickofolas Congruity Implant"];
		if (ns.singularity.getCurrentWork()){
	if (ns.singularity.getCurrentWork().type !== "GRAFTING") {
		if (ns.getPlayer().entropy < 50) {
			if (ns.singularity.travelToCity("New Tokyo")) {
				for (const aug of graftingaugs) { if (g.graftAugmentation(aug)) { writeLog(aug); break; } }
			}
		}
		}
		}
	ns.writePort(ns.pid, "")
}