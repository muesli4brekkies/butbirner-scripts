/** @param {NS} ns */
export async function main(ns) {
	ns.write("logs/murderChance.txt",ns.singularity.getCrimeChance("homicide"),"w")
	ns.writePort(ns.pid,ns.singularity.getCrimeChance("homicide"))
}