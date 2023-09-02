// STATus

import { c,ramFormat, numFormat, timeFormatColon, timeStamper } from './func.js'

/** @param {NS} ns */
export async function main(ns) {

		const currentnode = ns.getResetInfo().currentNode,
		getcash = ns.getServerMoneyAvailable,
		getmax = ns.getServerMaxMoney,
		getsec = ns.getServerSecurityLevel,
		getsecmin = ns.getServerMinSecurityLevel;
	let
		time = 0,
		hacknetinfo = [],
		augsinfo = [],
		startstamp = new Date().getTime(),
		firststart = true,
		tickcounter = 0;

	ns.tprint(`${c.r}** ./gvnr.js **`)
	ns.disableLog('ALL')
	while (true) {
		if (time % 3600 == 0 && !firststart) ns.singularity.exportGame()


		if (!ns.isRunning("corp.js")) ns.run("corp.js")
		let tickstring = ""
		for (let i = 0; i < time % 30; i++) tickstring += "#"
		tickstring = tickstring.padEnd(29, "-")
		const cycledelay = 1
		const rundelay = 50
		// Run things every n sec
		const scriptstorun = [
			"s-scripts/serverGet.js",
			//"gang.js",
			"cuff.js",
			"s-scripts/graft.js",
			"s-scripts/ownedAugs.js",
			"s-scripts/augsArrays.js",
			"s-scripts/hacknetShindigs.js",
			"solveallcontracts.js",
			"s-scripts/ramUp.js",
			"s-scripts/augBuy.js",
			"s-scripts/coresUp.js",
			"s-scripts/buyTOR.js",
			"s-scripts/travel.js",
			"s-scripts/backdoor.js",
			"s-scripts/factionJoin.js",
			"s-scripts/factWork.js",
			"s-scripts/murderChance.js",
			"s-scripts/murderate.js",
			"s-scripts/donate.js",
			"s-scripts/darkwebShopping.js",
			"s-scripts/augInstall.js",
			"s-scripts/ddtrigger.js",
			"s-scripts/maintenance.js",
		]


		// start progs
		const n = 30
		if (time % n == 0 && !ns.args[0]) {
			tickcounter++
			if (firststart) ns.print(`${c.r} *** LOADING ***`)
			ns.run("persuade.js")

			for (const script of scriptstorun) {
				if (firststart) {

					ns.tprint(`${c.y}starting ${script}`);
					await ns.sleep(rundelay * Math.random() * 5)
				}
				let runpid = ns.run(script)
				if (!runpid) {
					ns.tprint(`${c.r}not enough ram for ${script}`)
					continue;
				}
				await ns.getPortHandle(runpid).nextWrite()
				if (firststart) ns.tprint(`${c.g}${script} passed init`); await (ns.sleep(rundelay)) // This sleep is just so it looks cool when it prints :)
				if (script == "s-scripts/serverGet.js") ns.write("logs/mainlist.txt", JSON.stringify(ns.readPort(runpid).split(",")), "w")
				if (script == "s-scripts/hacknetShindigs.js") hacknetinfo = JSON.parse(ns.readPort(runpid))
				if (script == "s-scripts/augsArrays.js") augsinfo = ns.readPort(runpid)
			}
			ns.clearLog()
			if (firststart) (ns.print(`${c.m}Welcome to gnvr.js`))
		}
		(time % n == 0) || ns.clearLog()

		const mainlist = JSON.parse(ns.read("logs/mainlist.txt"))
		let
			moneylist = [],
			nomoneylist = [],
			fundedcount = 0;
		for (const server of mainlist) {
			if (getmax(server)) fundedcount++;
			if (ns.hasRootAccess(server) && ns.getServerRequiredHackingLevel(server) <= ns.getHackingLevel()) (getmax(server)) ? moneylist.push(server) : nomoneylist.push(server)
		}
		const hostlist = nomoneylist.concat(moneylist)
		let totalmaxram = 0
		let totalusedram = 0
		for (const server of hostlist) {
			totalmaxram += ns.getServerMaxRam(server)
			totalusedram += ns.getServerMaxRam(server) - ns.getServerUsedRam(server)
		}
		let reportlist = []
		const percColour = (perc) => { (perc < 33) ? perc = `${c.r}${perc}` : (perc < 66) ? perc = `${c.y}${perc}` : (perc < 85) ? perc = `${c.c}${perc}` : perc = `${c.g}${perc}`; return perc.padStart(11, " "); }
		let sec = (sec) => { (sec < 0) ? sec = `${c.g}${sec}` : (sec < 66) ? sec = `${c.y}${sec}` : sec = `${c.r}${sec}`; return sec.padStart(8, " ") }
		for (const server of moneylist) {
			reportlist.push({
				name: server,
				maxmoney: ns.formatNumber(getmax(server)).toString().padStart(8, " "),
				availmoney: ns.formatNumber(getcash(server)).toString().padStart(8, " "),
				percmoney: percColour((getcash(server) / getmax(server) * 100).toFixed(2)) + "%" + c.d,
				seclvl: Math.ceil(getsec(server)).toString().padStart(3, " "),
				secdelta: sec(Math.floor(getsec(server) - (getsecmin(server) + 5))) + c.d
			})
		}

		let timeout = 1800000
		timeout /= 1000 * 60 * 60
		if (currentnode == 9) timeout *= 1
		let date = Number(new Date())
		let lastaugtime = Number(ns.read("logs/lastAugTime.txt"))
		if (!lastaugtime) lastaugtime = date
		// Report	
		if (firststart) {ns.tprint(`${c.g}*** Startup Complete ***`); await ns.sleep(1000)}
		let spacer = " | "
		for (const server of reportlist) {
			ns.print(" " +
				server.seclvl + spacer +
				server.secdelta + spacer +
				server.availmoney + spacer +
				server.maxmoney + spacer +
				server.percmoney + spacer +
				timeFormatColon(ns.getWeakenTime(server.name)) + spacer +
				server.name);
			if (firststart) await ns.sleep(rundelay)
		}


		ns.print(" Sec |  Δ  | $Current |   $Max   |    %    |   ~ete   |  Target ~ " + moneylist.length + "/" + fundedcount)
		ns.print("")
		ns.print(` (> \$${ns.formatNumber(getcash("home"))} <) ~ ${ns.getPlayer().city} ~ ${ns.getPurchasedServers().length}/${ns.getPurchasedServerLimit()} pserv`)
		ns.print("")
		ns.print(` ram ~ home - ${ns.formatNumber(ns.getServerMaxRam("home") - ns.getServerUsedRam("home"))}/${ns.formatNumber(ns.getServerMaxRam("home"))}, network - ${ns.formatNumber(totalusedram)}/${ramFormat(totalmaxram)}, ${ns.formatNumber(Math.floor(totalusedram / ns.getScriptRam("wekn.js")))}/${ns.formatNumber(Math.floor(totalmaxram / ns.getScriptRam("wekn.js")))} threads`)

		ns.print("")
		ns.print(" " + ns.read("logs/workReport.txt"))


		ns.print(augsinfo)
		let boughtaugs = JSON.parse(ns.read("logs/boughtAugs.txt"))
		let boughtaugsminusnfg = 0
		boughtaugs.forEach(aug => aug == "NeuroFlux Governor" || boughtaugsminusnfg++)
		let installedaugs = JSON.parse(ns.read("logs/installedAugs.txt"))
		let otheraugs = 0
		for (const aug of installedaugs) if (aug != "NeuroFlux Governor") otheraugs++
		ns.print(" bought augs x" + boughtaugsminusnfg + ", " + otheraugs + "/100 installed, nfg lvl ")
		let nfgcount = 0
		for (const aug of boughtaugs) (aug == "NeuroFlux Governor") ? nfgcount++ : ns.print(" " + aug)
		if (nfgcount) ns.print(` NeuroFlux Governor x${nfgcount}`)
		ns.print(" " + ns.read("logs/augInstallReason.txt"))
		ns.print("")
		ns.print(" " + hacknetinfo[0] + " nodes, " +
			"$" + ns.formatNumber(-ns.getMoneySources().sinceInstall.hacknet_expenses) + " cost, " +
			"$" + ns.formatNumber(ns.getMoneySources().sinceInstall["hack" + "net"]) + " prod, " +
			"$" + ns.formatNumber(ns.getMoneySources().sinceInstall["hack" + "net"] + ns.getMoneySources().sinceInstall.hacknet_expenses) + " profit, " +
			hacknetinfo[1] + " hash (" +
			numFormat(hacknetinfo[2]) + "/s)")

		let karma = ns.heart.break()
		ns.print(" gang profit $" + ns.formatNumber(ns.getMoneySources().sinceStart.gang) + ", " + numFormat(karma) + " karma, " + ns.getPlayer().numPeopleKilled + " kills")
		ns.print("")
		ns.print(" T+ augBuy " + timeFormatColon(date - lastaugtime) + "/" + timeout +
			"hr, augInstall - " + timeFormatColon(date - ns.getResetInfo().lastAugReset) +
			", bitnode - " + timeFormatColon(date - ns.getResetInfo().lastNodeReset))

		ns.print(` gvnr.js ~ ${tickcounter} ticks in ${timeFormatColon(date - startstamp)} since ${Math.floor(startstamp / (1000 * 60 * 60)) % 24}:${Math.floor(startstamp / (1000 * 60)) % 60}:${Math.floor(startstamp / 1000) % 60}`)
		ns.print(` ${c.g}[${tickstring}]`)

		if (firststart) ns.run("neofetch.js");
		time += cycledelay;
		ns.writePort(ns.pid, "")
		firststart = false
		await ns.sleep(cycledelay * 1000)
	}
}