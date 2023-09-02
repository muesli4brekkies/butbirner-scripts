// PRiSM -Δ<
/** @param {NS} ns */
// Functions
function execjob(ns, script, infovar, hostlist, moneylist) {
	ns.disableLog('ALL')
	ns.enableLog('exec')
	// Calculate threads available 
	let threadsavailable = 0
	let threadsavailablearray = []
	const spareramonhome = 40
	for (let server of hostlist) {
		let threadsvar = (Math.floor((ns.getServerMaxRam(server) - ns.getServerUsedRam(server)) / ns.getScriptRam(`${script}.js`)))
		if (server == "home") threadsvar -= spareramonhome
		if (threadsvar < 0) threadsvar = 0
		threadsavailable += threadsvar
		threadsavailablearray.push(threadsvar)
	}



	let jobsneeded = 0
	const growthvar = 1.111111, // Grow and hack 10%
		hackvar = 0.1,
		securitydelta = ns.getServerSecurityLevel(ns.args[0]) - ns.getServerMinSecurityLevel(ns.args[0]) + 5,
		hacksecjobs = ((ns.hackAnalyzeSecurity(Math.ceil(hackvar / ns.hackAnalyze(ns.args[0])), ns.args[0]) / ns.weakenAnalyze(1))),
		growsecjobs = ((ns.growthAnalyzeSecurity(Math.ceil(ns.growthAnalyze(ns.args[0], growthvar)), ns.args[0]) / ns.weakenAnalyze(1))),
		weakenjobs = Math.ceil((securitydelta / ns.weakenAnalyze(1)) + hacksecjobs + growsecjobs),
		growjobs = Math.ceil(ns.growthAnalyze(ns.args[0], growthvar)),
		hackjobs = Math.ceil(hackvar / ns.hackAnalyze(ns.args[0]));


	(script == "wekn") ? jobsneeded = weakenjobs : (script == "grow") ? jobsneeded = growjobs : jobsneeded = hackjobs

	if (infovar == "getthreads") {
		return [threadsavailable, jobsneeded];
	}

	if (jobsneeded > threadsavailable) {
		jobsneeded = Math.floor(threadsavailable / moneylist.length)
	}


	if (jobsneeded <= 1) {
		jobsneeded = 1
	}
	// Send job
	let hostcounter = 0
	while (jobsneeded > 0 && threadsavailable > 0) {
		if (threadsavailablearray[hostcounter] < 1) {
			hostcounter++
			continue;
		}
		if (jobsneeded >= threadsavailablearray[hostcounter]) {
			ns.exec(script + ".js", hostlist[hostcounter], threadsavailablearray[hostcounter], ns.args[0])
			jobsneeded -= threadsavailablearray[hostcounter]
			threadsavailable -= threadsavailablearray[hostcounter]
			threadsavailablearray[hostcounter] = 0
			hostcounter++
		} else {
			ns.exec(script + ".js", hostlist[hostcounter], jobsneeded, ns.args[0])
			threadsavailablearray[hostcounter] -= jobsneeded
			threadsavailable -= jobsneeded
			jobsneeded = 0
		}
	}
}

/** @param {NS} ns */
export async function main(ns) {
	// Logs?
	ns.disableLog('ALL')
	ns.enableLog('exec')
	//ns.tprint("** ./prsm.js @" + ns.args[0] + " **")
	while (true) {
		let mainlist = JSON.parse(ns.read("logs/mainlist.txt"))
		let moneylist = []
		let nomoneylist = []
		for (let server of mainlist) {
			if (server.substring(0, 7) == "hacknet") continue;
			if (ns.getServerMaxMoney(server)) moneylist.push(server)
			else nomoneylist.push(server)
		}
		// Stick em together with $0 at the top so they get used first
		let hostlist = nomoneylist.concat(moneylist)
		await ns.sleep(100)
		if (ns.args[1]) ns.run("prsm.js", 1, ns.args[0], ns.args[1])
		await sendWave(ns, hostlist, moneylist)

	}
}


/** @param {NS} ns */
async function sendWave(ns, hostlist, moneylist) {
	ns.disableLog('ALL')
	// Get variables that determine which jobs are run
	const securitydelta = (ns.getServerSecurityLevel(ns.args[0]) - (ns.getServerMinSecurityLevel(ns.args[0]) + 5)),
		moneypercent = (ns.getServerMoneyAvailable(ns.args[0]) / ns.getServerMaxMoney(ns.args[0])),
		delaytime = 25,
		hacktime = ns.getHackTime(ns.args[0]),
		weakentime = hacktime * 4,
		growtime = hacktime * 3.2;
	let threadsinfo;
	// Send weaken	
	if (securitydelta > 0) {
		threadsinfo = execjob(ns, "wekn", "getthreads", hostlist, moneylist)
		if (threadsinfo[0] == 0) {
			ns.tprint(`${ns.args[0]} weaken stalled! ${(Math.ceil(threadsinfo[1] * ns.getScriptRam("wekn.js")))}GB needed (${threadsinfo[1]} threads)`)
		} else {
			execjob(ns, "wekn", null, hostlist, moneylist)
		}
		await ns.sleep(weakentime - growtime - (delaytime * 2))
	}

	// Send grow	
	let growcheck = false
	threadsinfo = execjob(ns, "grow", "getthreads", hostlist, moneylist)
	if (threadsinfo[0] == 0) {
		ns.tprint(`${ns.args[0]} grow stalled! ${(Math.ceil(threadsinfo[1] * ns.getScriptRam("grow.js")))}GB needed (${threadsinfo[1]} threads)`)
	} else {
		execjob(ns, "grow", null, hostlist, moneylist)
		growcheck = true
	}
	await ns.sleep(growtime - hacktime - (delaytime))
	// Send hack
	if (growcheck && moneypercent > 0.8) {
		threadsinfo = execjob(ns, "hack", "getthreads", hostlist, moneylist)
		if (threadsinfo[0] == 0) {
			ns.tprint(`${ns.args[0]} hack stalled! ${(Math.ceil(threadsinfo[1] * ns.getScriptRam("hack.js")))}GB needed (${threadsinfo[1]} threads)`)
		} else {
			execjob(ns, "hack", null, hostlist, moneylist)
		}
		await ns.sleep(hacktime)
	}
}