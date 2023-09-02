/** @param {NS} ns */
export async function main(ns) {
	let mainlist = ["home"]
	for (let host of mainlist) {
		let scanlist = ns.scan(host)
		for (let server of scanlist) {
			if (!mainlist.includes(server)) mainlist.push(server)
		}
	}

 if (mainlist.includes("w0r1d_d43m0n")) ns.run("s-scripts/d43m0nD357r0y.js")

 ns.writePort(ns.pid,"")
}