// STATus
import {
	c,
	ramFormat,
	t,
	tickString,
	sGet,
} from './func.js'

/** @param {NS} ns */
export async function main(ns) {
	const peekyPorty = (script, data = ns.peek(ns.getRunningScript(script)?.pid ?? ns.pid)) => JSON.parse(data == "NULL PORT DATA" ? "[]" : data),
		percColour = perc => (perc < 33 ? `${c.r}${perc}` : perc < 66 ? `${c.y}${perc}` : perc < 85 ? `${c.c}${perc}` : `${c.g}${perc}`).padStart(11, " "),
		secColour = sec => (sec < 0 ? `${c.g}${sec}` : sec < 66 ? `${c.y}${sec}` : `${c.r}${sec}`).padStart(8, " "),
		getCash = ns.getServerMoneyAvailable,
		getMaxMoney = ns.getServerMaxMoney,
		getSecLvl = ns.getServerSecurityLevel,
		getSecMin = ns.getServerMinSecurityLevel,
		fmtNum = ns.formatNumber,
		refresh_delay = 1,
		cycle_delay = 30,
		NFG = "NeuroFlux Governor";
	let
		timer = 0,
		is_first_start = true,
		cycle_counter = 0;
	ns.tail();
	ns.disableLog('ALL')
	ns.tprintf(`${c.m}** ./gvnr.js **`)
	ns.print(`${c.r} *** LOADING ***`)
	while (true) {
		ns.moveTail(eval("window").innerWidth - 1300, 0)
		ns.resizeTail(850, 1000);
		// Run things every n sec
		if (timer % cycle_delay == 0 && !ns.args[0]) {
			for (const script of [
				"writeLaunchers.js",
				
				...ns.ls("home", "oneshot"),
				...ns.ls("home", "async"),
				"solveallcontracts.js",
			]) {
				if (is_first_start) { ns.tprintf(`${c.y}starting ${script}`) }
				let runpid = ns.run(script)
				if (runpid) {
					await ns.getPortHandle(runpid).nextWrite();
					if (is_first_start) { ns.tprintf(`${c.g}${script} passed init`) };
				} else { ns.tprintf(`${c.r}not enough ram for ${script}`) };
			}
		}
		[...ns.ls("home","loop/")].forEach(script => !ns.isRunning(script) && (ns.run(script), ns.tprintf(`${c.y}starting ${script}`)));
		const prsm_info = peekyPorty("loop/prsm.js"), gang_info = peekyPorty("loop/runGang.js"), hacknet_info = JSON.parse(ns.read("logs/hacknet_info.txt"));
		if (is_first_start) { ns.print(`${c.m}Welcome to gnvr.js`), ns.tprintf(`${c.g}*** Startup Complete ***`), await ns.sleep(1000), ns.run("neofetch.js") };

		// Tail print
		const mainlist = sGet(ns),
			access_list = mainlist.filter(s => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel()),
			funded_list = access_list.filter(s => getMaxMoney(s)),
			funded_count = mainlist.reduce((a, s) => a + !!getMaxMoney(s), 0),
			total_max_ram = access_list.reduce((a, s) => a + ns.getServerMaxRam(s), 0),
			total_free_ram = total_max_ram - access_list.reduce((a, s) => a + ns.getServerUsedRam(s), 0),
			spacer = " | ",
			date = Number(new Date()),
			lastaugtime = Number(ns.read("logs/lastAugTime.txt")) || date,
			boughtaugs = JSON.parse(ns.read("logs/boughtAugs.txt")),
			boughtaugsminusnfg = boughtaugs.reduce((acc, aug) => acc + (aug != NFG), 0),
			nfgcount = boughtaugs.reduce((acc, aug) => acc + (aug == NFG), 0),
			otheraugs = JSON.parse(ns.read("logs/installedAugs.txt")).reduce((acc, aug) => acc + (aug != NFG), 0),
			aug_info = boughtaugs.filter(a => a != NFG).map(aug => ` ·${aug}`).concat(nfgcount ? [(` ·NeuroFlux Governor x${nfgcount}\n`)] : null).join("\n");
		ns.clearLog()
		funded_list.map(server => ({
			name: server,
			maxmoney: ns.formatNumber(getMaxMoney(server)).toString().padStart(8, " "),
			availmoney: ns.formatNumber(getCash(server)).toString().padStart(8, " "),
			percmoney: percColour((getCash(server) / getMaxMoney(server) * 100).toFixed(2)) + "%" + c.d,
			seclvl: Math.ceil(getSecLvl(server)).toString().padStart(3, " "),
			secdelta: secColour(Math.floor(getSecLvl(server) - (getSecMin(server) + 3))) + c.d,
			weaktime: t(ns.getWeakenTime(server)),
		})
		).forEach(server =>
			ns.print(`${spacer}${server.seclvl}${spacer}${server.secdelta}${spacer}${server.availmoney}${spacer}${server.maxmoney}${spacer}${server.percmoney}${spacer}${server.weaktime}${spacer}${server.name}${server.name == prsm_info.hostname ? ` ${c.w}---${c.y}Δ< ` : ""}`)
		);
		ns.print(...[
			`${spacer}sec${spacer} Δ ${spacer}  \$cur  ${spacer}  \$max  ${spacer}   %   ${spacer}  ~ete  ${spacer} Target ~ ${funded_list.length}/${funded_count}\n\n`,
			` home - ${ramFormat(ns.getServerMaxRam("home") - ns.getServerUsedRam("home"))}/${ramFormat(ns.getServerMaxRam("home"))}, network - ${ramFormat(total_free_ram)}/${ramFormat(total_max_ram)}, ${fmtNum(Math.floor(total_free_ram / ns.getScriptRam("wekn.js")))}/${fmtNum(Math.floor(total_max_ram / ns.getScriptRam("wekn.js")))} threads\n`,
			` bought augs x ${boughtaugsminusnfg}, ${otheraugs}/100 installed\n`,
			`${aug_info}`,
			` ${ns.read("logs/augInstallReason.txt")}\n\n`,
		]);

		// Overview stuff
		const p = ns.getPlayer(),
			doc = eval("document"),
			hook0 = doc.getElementById('overview-extra-hook-0'),
			hook1 = doc.getElementById('overview-extra-hook-1'),
			leftbar = "<>".repeat(9),
			rightbar = leftbar;
		hook0.innerText = [
			`bitnode:`,
			`pserv:`,
			`w_d lvl:`,
			`city:`,
			`karma:`,
			leftbar,
			`prsm Target:`,
			`prsm Income:`,
			`prsm XP:`,
			leftbar,
			`hN Servers:`,
			`hashes/Max:`,
			`hashes/s:`,
			`profit:`,
			leftbar,
			`status:`,
			`members:`,
			`power:`,
			`territory:`,
			`warfare?:`,
			`profit:`,
			`${leftbar}`,
			`${tickString(timer)}`,
			`gvnr uptime:`,
			`t+ Augbuy:`,
			`t+ Install:`,
			`t+ Bitnode:`,
		].join("\n")

		hook1.innerText = [
			`${`${ns.getResetInfo().currentNode}.${++ns.singularity.getOwnedSourceFiles().filter(sf => sf.n == ns.getResetInfo().currentNode)[0].lvl}`}`,
			`${ns.getPurchasedServers().length}/${ns.getPurchasedServerLimit()}`,
			`${3000 * ns.getBitNodeMultipliers().WorldDaemonDifficulty}`,
			`${p.city}`,
			`${fmtNum(ns.heart.break())}`,
			rightbar,
			`${prsm_info.hostname}`,
			`\$${fmtNum(ns.getTotalScriptIncome()[0])}`,
			`${fmtNum(ns.getTotalScriptExpGain())}`,
			rightbar,
			`${hacknet_info.num}`,
			`${hacknet_info.hashes}`,
			`${fmtNum(hacknet_info.prod)}`,
			`\$${fmtNum(hacknet_info.profit)}`,
			rightbar,
			`${gang_info?.cycle ?? "~"}`,
			`${gang_info?.memnum ?? "~"}`,
			`${fmtNum(gang_info?.power ?? 0, 2)}/${fmtNum(gang_info?.nextpower ?? 0, 2)}`,
			`${fmtNum(gang_info?.territory ?? 0 * 100) ?? "~"}%`,
			`${gang_info?.tw ?? "~"}`,
			`\$${fmtNum(ns.getMoneySources().sinceStart.gang ?? 0)}`,
			`${rightbar}`,
			`cycle #${Math.floor(cycle_counter++ / cycle_delay)}`,
			`${t(timer * 1000)}`,
			`${!!(date - lastaugtime) ? t(date - lastaugtime) : "N/A"}`,
			`${t(date - ns.getResetInfo().lastAugReset)}`,
			`${t(date - ns.getResetInfo().lastNodeReset)}`,
		].join("\n")


		ns.atExit(() => { hook0.innerText = ""; hook1.innerText = "" }) // Clears the overview on exit to prevent stale data
		is_first_start = false
		timer += refresh_delay;
		await ns.sleep(refresh_delay * 1000)
	}
}