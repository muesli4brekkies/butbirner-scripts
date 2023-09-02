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
	let lsvar
	let contracttot = 0
	for (let i = 0; i < mainlist.length; i++) {
		lsvar = ns.ls(mainlist[i], ".cct")
		if (lsvar != 0) {
			for (let j = 0; j < lsvar.length; j++) {
				let contracttype = ns.codingcontract.getContractType(lsvar[j], mainlist[i])
				let contractname = lsvar[j]
				let contracthost = mainlist[i]
				contracttot++
				let pidno = ns.run("ecct.js", 1, contracttype, contractname, contracthost)
				if (!pidno) {

	ns.writePort(ns.pid,"")
return;
				} 
				let portinfo = ns.getPortHandle(pidno)
				await portinfo.nextWrite()
				if (ns.args[0] == "-v") {
					ns.tprint(contracttype + " @ " + contracthost)
				}
			}
		}
	}
	ns.write("logs/contractTot.txt", contracttot, "w")
	ns.writePort(ns.pid,"")

}