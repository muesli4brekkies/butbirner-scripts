/** @param {NS} ns */
export async function main(ns) {
	let lslist = ns.ls("home", ".txt")
	for (let file of lslist) {
		if (file == "augInstallReason.txt") {
			continue;
		}
		if (file == "augInstallLog.txt") {
			continue;
		}
		if (file == "installCounter.txt") {
			continue;
		}
		if (file == "g-scripts/memberlist.txt"){
			continue;
	}
		ns.tprint(file)
		ns.rm(file)
	}
	let date = new Date().toUTCString()
	ns.write("installCounter.txt", Number(ns.read("installCounter.txt")) + 1, "w")
	ns.write("augInstallReason.txt",`augInstall #${ns.read("installCounter.txt")}: Manual - ${date}`,"w")
	ns.write("augInstallLog.txt", ns.read("augInstallReason.txt") + "\n", "a")
	ns.singularity.installAugmentations("rset.js")
}