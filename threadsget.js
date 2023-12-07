/** @param {NS} ns */
export async function main(ns) {
    let mainlist = ["home"];
    for (let host of mainlist) {
        let scanlist = ns.scan(host);
        for (let server of scanlist) {
            if (server.substring(0, 7) == "hacknet")
                continue;
            if (ns.getHackingLevel() < ns.getServerRequiredHackingLevel(server))
                continue;
            if (!ns.getServerMaxMoney(server))
                continue;
            ns.tprint(server);
            if (!mainlist.includes(server))
                mainlist.push(server);
        }
    }
    mainlist.shift();
    for (let server of mainlist) {
        let growthvar = 1 / (ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server));
        let hackvar = 0.01;
        let securitydelta = ns.getServerSecurityLevel(server) - ns.getServerMinSecurityLevel(server) + 5;
        let hacksecjobs = ((ns.hackAnalyzeSecurity(Math.ceil(hackvar / ns.hackAnalyzeThreads(server,hackvar)), server) / ns.weakenAnalyze(1)));
        let growsecjobs = ((ns.growthAnalyzeSecurity(Math.ceil(ns.growthAnalyze(server, growthvar)), server) / ns.weakenAnalyze(1)));
        let weakenjobs = Math.ceil((securitydelta / ns.weakenAnalyze(1)) + hacksecjobs + growsecjobs);
        let hackjobs = Math.ceil(hackvar / ns.hackAnalyze(server));
			let growjobs = Math.ceil(ns.growthAnalyze(server, growthvar));
			//let growjobs = Math.ceil(ns.growthAnalyze(server, growthvar));
        let total = weakenjobs + growjobs + hackjobs;
        growjobs = growjobs.toString().padEnd(10);
        weakenjobs = weakenjobs.toString().padEnd(10);
        hackjobs = hackjobs.toString().padEnd(10);
        total = total.toString().padEnd(10);
        ns.tprint(`${server.padStart(20)} - weaken:${weakenjobs} grow:${growjobs} hack:${hackjobs} total:${total}`);
    }
}
