// FUNCtions

export const win = "window"
export const doc = "document"
export const test = "ns.getServer"
export const c = {// Pretty Colours!
	r: "\x1b[31m",
	g: "\x1b[32m",
	b: "\x1b[34m",
	c: "\x1b[36m",
	m: "\x1b[35m",
	y: "\x1b[33m",
	k: "\x1b[30m",
	w: "\x1b[37m",
	d: "\x1b[0m",//default color
} 

/** @param {NS} ns */

export async function d43m0nD357r0y(ns, s = ns.singularity) {
	if (ns.getServerRequiredHackingLevel("w0r1d_d43m0n") < ns.getHackingLevel()) {
		const runpid = ns.run("s-scripts/cleanUp.js")
		await ns.getPortHandle(runpid).nextWrite()
		s.destroyW0r1dD43m0n(12, "rset.js")
	}
}
const minSkill = (ns, p = ns.getPlayer().skills) => Math.min(p["strength"], p["defense"], p["dexterity"], p["agility"]);

/** @param {NS} ns */
export function factWork(ns, s = ns.singularity) {
	const augsarrays = JSON.parse(ns.read("logs/augsarrays.txt"))

	// Find smallest delta to work for and identify faction
	const murderchance = ns.read("logs/murderChance.txt")
	const ownedaugs = ns.read("logs/ownedAugs.txt")
	if (murderchance > 0.50) { // Only resume murdering once we can do it reliably
		if (ns.heart.break() > -54000 && ns.getPlayer().numPeopleKilled < 30) {
			return;
		}
	}

	let targetaugmentation
	let targetfaction
	let minaugrep = Infinity
	for (let aug of augsarrays) {
		if (aug.faction == "Slum Snakes" && ns.gang.inGang()) continue;
		if (minaugrep > aug.repdelta && aug.repdelta != null && aug.repdelta > 0) {
			minaugrep = aug.repdelta
			targetaugmentation = aug.aug
			targetfaction = aug.faction
		}
	}
	if (ns.gang.inGang() && !augsarrays) {
		targetaugmentation = "NeuroFlux Governor"
		targetfaction = "Sector-12"
	}


	if (!targetaugmentation) { // If no augs to work towards work for corps instead
		ns.run("s-scripts/corpWork.js")
		return;
	}
	let focusbool = true
	focusbool = false
	if (ownedaugs.includes("Neuroreceptor Management Implant")) focusbool = false

	// If augs are available to work towards
	if (targetaugmentation) {

		// Exceptions for augs shared across factions to avoid wasting working time
		if (targetaugmentation == "Cranial Signal Processors - Gen IV" || targetaugmentation == "Embedded Netburner Module Core Implant") {
			targetfaction = "BitRunners"
		}
		if (targetaugmentation == "DataJack") {
			targetfaction = "The Black Hand"
		}
		// Work for target faction
		if (targetfaction) {

			if (ns.singularity.getCurrentWork()) {
				if (ns.singularity.getCurrentWork().type === "GRAFTING") return;
			}
			s.stopAction();
			["field", "security", "hacking"].forEach(job => {
				if (s.workForFaction(targetfaction, job, focusbool)) {
					ns.write("logs/workReport.txt", `${job} work @ ${targetfaction} for ${targetaugmentation} ${ns.formatNumber(s.getFactionRep(targetfaction))}/${ns.formatNumber(s.getAugmentationRepReq(targetaugmentation))}, \$${ns.formatNumber(s.getAugmentationPrice(targetaugmentation))}`, "w")
				}
			})
		}
	}
}



/** @param {NS} ns */
export function donate(ns, s = ns.singularity) {
	const augsarrays = JSON.parse(ns.read("logs/augsarrays.txt")),
		boughtaugs = JSON.parse(ns.read("logs/boughtAugs.txt")),
		nfginfo = JSON.parse(ns.read("logs/nfgInfo.txt")),
		minskill = minSkill(ns),
		donatefaction = "The Black Hand";
	let cashtospend
	nfginfo[0] > 100e9 ? cashtospend = nfginfo[0] : cashtospend = 100e9
	if (minskill > 1200 && ns.gang.inGang() && ns.getServerMoneyAvailable("home") > 150e9) {
		// Donate to the TBH to grind NF Governor
		if (s.getFactionFavor(donatefaction) >= 150 * ns.getBitNodeMultipliers().RepToDonateToFaction) {
			if (s.getFactionRep(donatefaction) < nfginfo[1] && ns.getServerMoneyAvailable("home") > cashtospend) {
				s.donateToFaction(donatefaction, cashtospend)
				ns.tprint(`${c.m}Donated to ${donatefaction} (grinding NFG)`)
			}
		}
	}

	// Check if we can and need to donate to any factions
	augsarrays.forEach(aug => {
		if (s.getFactionFavor(aug.faction) > 150 * ns.getBitNodeMultipliers().RepToDonateToFaction) {
			if (aug.repdelta > 0 && aug.faction != "Slum Snakes") { // If we actually need the rep
				if (ns.getServerMoneyAvailable("home") > 100e9) {
					s.donateToFaction(aug.faction, 100e9) // Donate
					ns.tprint(`${c.m}Donated \$100B to ${aug.faction}`)
				}
			}
		}
	})
}

/** @param {NS} ns */
export function augInstallBool(ns, s = ns.singularity) {
	if (!ns.fileExists("logs/installCounter.txt")) ns.write("logs/installCounter.txt", 0, "w")
	let augsarrays = JSON.parse(ns.read("logs/augsarrays.txt"))
	let lowestprice = Infinity

	let nicedate = `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`
	for (let aug of augsarrays) {
		// Find cheapest aug
		if (aug.price < lowestprice && aug.price != 0) {
			lowestprice = aug.price
		}
	}
	// If we can't afford cheapest aug after 30 min (1800,000 millisec), install augs
	let date = Number(new Date())
	let timesincelastaug = (date - ns.read("logs/lastAugTime.txt"))
	if (timesincelastaug == date) {
		timesincelastaug = 0
	}
	if (timesincelastaug > 1800000 && lowestprice > ns.getServerMoneyAvailable("home")) {
		let multi = ns.read("logs/priceRatio.txt")
		ns.write("logs/augInstallReason.txt", "augInstall #" + (+(ns.read("logs/installCounter.txt")) + 1) + ": timeout - $" + ns.formatNumber(ns.getServerMoneyAvailable("home")) + "/$" + ns.formatNumber(lowestprice) + ", multi x" + Math.floor(multi) + " - " + nicedate, "w")
		return true;
	}


	// Install aug to increase faction favour
	for (let aug of augsarrays) {
		if (ns.gang.inGang() && aug.faction == "Slum Snakes") continue;
		// If we can increase a faction's favour by >= 50, or over 150, install augs	
		if (s.getFactionFavor(aug.faction) < 150 * ns.getBitNodeMultipliers().RepToDonateToFaction) {
			if (s.getFactionFavorGain(aug.faction) >= 50 || s.getFactionFavorGain(aug.faction) + s.getFactionFavor(aug.faction) > 150) {
				ns.write("logs/augInstallReason.txt", "augInstall #" + (+(ns.read("logs/installCounter.txt")) + 1) + ": increased " + aug.faction + " favour by " + Math.floor(s.getFactionFavorGain(aug.faction)) + " to " + Math.floor(s.getFactionFavorGain(aug.faction) + s.getFactionFavor(aug.faction)) + " - " + nicedate, "w")
				return true;
			}
		}
	}
	return false;
}

/** @param {NS} ns */
export async function augInstall(ns, s = ns.singularity) {
	if (ns.singularity.getCurrentWork()) {
		if (ns.singularity.getCurrentWork().type === "GRAFTING") return;
	}
	if (!JSON.parse(ns.read("logs/boughtAugs.txt")).length) return;
	if (!augInstallBool(ns)) return;
	ns.write("logs/installCounter.txt", +(ns.read("logs/installCounter.txt")) + 1, "w")
	const keepfiles = ["logs/augInstallReason.txt", "logs/augInstallLog.txt", "logs/installCounter.txt", "g-scripts/memberlist.txt"]
	ns.ls("home", ".txt").forEach(file => keepfiles.includes(file) || ns.rm(file))
	ns.write("logs/augInstallLog.txt", ns.read("logs/augInstallReason.txt") + "\n", "a")
	s.installAugmentations("rset.js")

}



/** @param {NS} ns */

export function augBuy(ns, s = ns.singularity) {
	const timeStamp = () => ns.write("logs/lastAugTime.txt", Number(new Date()), "w"),
		termPrint = (aug) => ns.tprint(`${c.m}Purchased ${c.c}${aug.aug}${c.m} from ${aug.faction} for \$${ns.formatNumber(aug.price)}`),
		termPrintNFG = (faction) => ns.tprint(`${c.m}Purchased ${c.c}NeuroFlux Governor${c.m} from ${faction} for \$${ns.formatNumber(s.getAugmentationPrice("NeuroFlux Governor"))}`),
		augsarrays = JSON.parse(ns.read("logs/augsarrays.txt"));

	// Buy NFG
	ns.getPlayer().factions.forEach(faction => (faction == "Slum Snakes") || (s.purchaseAugmentation(faction, "NeuroFlux Governor")) && (timeStamp(), termPrintNFG(faction)))
	// Buy Augs
	augsarrays.forEach(aug => (s.purchaseAugmentation(aug.faction, aug.aug)) && (timeStamp(), termPrint(aug)))
}

export function grindStats(ns, fact = "The Black Hand", s = ns.singularity) { s.stopAction(); s.workForFaction(fact, "field", 0); ns.write("logs/workReport.txt", "Grinding stats", "w"); ns.exit() }
/** @param {NS} ns */
export function corpWork(ns, s = ns.singularity) {
	if (ns.singularity.getCurrentWork()) {
		if (ns.singularity.getCurrentWork().type === "GRAFTING") return;
	}
	const corps = {
		ck: "Clarke Incorporated",
		ba: "Bachman & Associates",
		bi: "Blade Industries",
		ki: "KuaiGong International",
		oi: "OmniTek Incorporated",
		nw: "NWO",
		mc: "MegaCorp",
		ft: "Fulcrum Technologies",
		ec: "ECorp"
	},
		minskill = minSkill(ns),
		ownedaugs = JSON.parse(ns.read("logs/ownedAugs.txt")),
		grindChar = () => { s.travelToCity("Volhaven"); s.stopAction(); s.universityCourse("ZB Institute of Technology", "leadership", 0); ns.exit() },
		work = (corp) => { s.stopAction(); s.workForCompany(corp, false); ns.write("logs/workReport.txt", `Working at ${corp}`, "w") },
		needs = (aug) => !ownedaugs.includes(aug),
		apply = () => Object.values(corps).forEach(corp => (corp == "Fulcrum Technologies") ? s.applyToCompany(corp, "IT") : s.applyToCompany(corp, "security")),
		augSwitch = () => {
			(needs("Neuronal Densification") || needs("nextSENS Gene Modification")) ? work(corps.ck) :
				(needs("SmartJaw")) ? work(corps.ba) :
					(needs("Neotra")) ? work(corps.bi) :
						(needs("Photosynthetic Cells")) ? work(corps.ki) :
							(needs("OmniTek InfoLoad")) ? work(corps.oi) :
								(needs("Xanipher") || needs("Hydroflame Left Arm")) ? work(corps.nw) :
									(needs("CordiARC Fusion Reactor")) ? work(corps.mc) :
										(needs("PC Direct-Neural Interface NeuroNet Injector")) ? work(corps.ft) :
											(needs("ECorp HVMind Implant")) ? work(corps.ec) : grindStats(ns)
		};
	// If needed grind stats (sub 1200)
	// else if charisma too low for security job, go to uni
	// else apply for jobs and work
	(minskill < 1200) ? grindStats(ns) : (ns.getPlayer().skills.charisma < 250) ? grindChar() :
		apply();
	augSwitch();
}

export function ownedAugs(ns, s = ns.singularity) {
	let ownedaugs = s.getOwnedAugmentations(1)
	let boughtaugs = s.getOwnedAugmentations(1)
	let installedaugs = s.getOwnedAugmentations(0)
	boughtaugs = boughtaugs.splice(installedaugs.length)
	ns.write("logs/boughtAugs.txt", JSON.stringify(boughtaugs), "w")
	ns.write("logs/ownedAugs.txt", JSON.stringify(ownedaugs), "w")
	ns.write("logs/installedAugs.txt", JSON.stringify(installedaugs), "w")
}

export function augsArrays(ns, s = ns.singularity) {
	let ratio = s.getAugmentationPrice("Combat Rib I") / s.getAugmentationBasePrice("Combat Rib I")
	ns.write("logs/priceRatio.txt", ratio, "w")
	let nfginfo = [s.getAugmentationPrice("NeuroFlux Governor"), s.getAugmentationRepReq("NeuroFlux Governor")]
	ns.write("logs/nfgInfo.txt", JSON.stringify(nfginfo), "w")

	// Make list of augs	
	const ownedaugs = JSON.parse(ns.read("logs/ownedAugs.txt"));
	let augsarrays = [];
	ns.getPlayer().factions.forEach(faction => s.getAugmentationsFromFaction(faction).forEach(augment => (ownedaugs.includes(augment) || faction == "Shadows of Anarchy") || augsarrays.push({
		aug: augment,
		price: s.getAugmentationPrice(augment),
		repreq: s.getAugmentationRepReq(augment),
		repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
		faction: faction,
		factrep: s.getFactionRep(faction)
	})));
	let minprice = Infinity
	for (let aug of augsarrays) {
		if (aug.price < minprice && aug.price != 0) {
			minprice = aug.price
		}
	}
	ns.write("logs/augsarrays.txt", JSON.stringify(augsarrays), "w")
	return (" price multi x" + ns.formatNumber(ratio) + ", cheapest $" + ns.formatNumber(minprice) + ", NFG $" + ns.formatNumber(s.getAugmentationPrice("NeuroFlux Governor")) + "-" + ns.formatNumber(Math.round(s.getAugmentationRepReq("NeuroFlux Governor"))) + "\n");
}



/** @param {NS} ns */
// Murder
export async function murderate(ns, s = ns.singularity) {
	if (ns.singularity.getCurrentWork()) {
		if (ns.singularity.getCurrentWork().type === "GRAFTING") return;
	}
	if (ns.heart.break() < -54000 && ns.getPlayer().numPeopleKilled > 30) return;
	let minskill = minSkill(ns)
	let chance = (ns.read("logs/murderChance.txt"))

	let motive = ""
	if (minskill < 30) motive = ` til ${minskill}/30 skills`
	else if (ns.getPlayer().numPeopleKilled < 30) motive = ` til ${ns.getPlayer().numPeopleKilled}/30 kills`

	ns.write("logs/workReport.txt", `Murdering! ${motive}, ${+(chance * 100).toFixed(2)}% chance ${Math.floor(ns.heart.break())}/-54000 karma`, "w")
	s.stopAction()
	s.commitCrime("Homicide", 0)
	return;
}

/** @param {NS} ns */
// Backdoor
export async function backdoor(ns, s = ns.singularity) {
	for (const server of ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I",]) {
		if (ns.getServer(server).backdoorInstalled || !ns.hasRootAccess(server) || ns.getHackingLevel() < ns.getServerRequiredHackingLevel(server)) continue;
		ns.tprint(`${c.y}Backdoor started on ${server}`);
		s.connect("home");
		const runpid = ns.run("bd.js", 1, server);
		await ns.getPortHandle(runpid).nextWrite();
		ns.tprint(`${c.g}Backdoor complete on ${server}`);
	}
}

/** @param {NS} ns */
// Travel to other cities if we have the unique augs
export function goToAirport(ns, s = ns.singularity) {
	if (ns.singularity.getCurrentWork()) {
		if (ns.singularity.getCurrentWork().type === "GRAFTING") return;
	}
	const cities = ["New Tokyo", "Sector-12", "Ishima", "Volhaven", "Chongqing", "Chongqing", "Aevum", "Sector-12", "Chongqing", "New Tokyo"],
		ownedaugs = JSON.parse(ns.read("logs/ownedAugs.txt"))
	let boolindex = 0;
	[
		"NutriGen Implant", // New Tokyo
		"INFRARET Enhancement", // Ishima
		"CashRoot Starter Kit", // Sector-12
		"DermaForce Particle Barrier", // Volhaven
		"Neuregen Gene Modification", // Chongqing
		"Neuroreceptor Management Implant", // Tian-di
		"PCMatrix", // Aevum
		"BrachiBlades", // Sector-12
		"Graphene Bionic Arms Upgrade" /* Chongqing*/].forEach(aug => { if (ownedaugs.includes(aug)) boolindex++ });
	s.travelToCity(cities[boolindex])
}




/** @param {NS} ns */
// Maintenance - Buy and upgrade host servers, start prsm.js instances

export function runMaintenance(ns) {
	// Buy host servers if don't have any
	let startram = 8
	while (ns.purchaseServer(ns.getPurchasedServers().length, startram)) ns.tprint(`${c.c}Purchased host server ${ns.getPurchasedServers().length}`);
	// Upgrade server ram 
	ns.getPurchasedServers().forEach(server => {
		while (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerUpgradeCost(server, ns.getServerMaxRam(server) * 2)) (ns.upgradePurchasedServer(server, ns.getServerMaxRam(server) * 2))
	});




	let mainlist = JSON.parse(ns.read("logs/mainlist.txt"))
	let moneylist = []
	let nomoneylist = ["home"]
	mainlist.forEach(server => ["hack.js", "grow.js", "wekn.js", "prsm.js", "logs/mainlist.txt"].forEach(file => ns.scp(file, server)));
	for (let server of mainlist) {
		if (ns.hasRootAccess(server) && ns.getServerRequiredHackingLevel(server) <= ns.getHackingLevel()) {
			if (ns.getServerMaxMoney(server)) moneylist.push(server)
			else nomoneylist.push(server)
		}
	}
	let hostlist = nomoneylist.concat(moneylist)
	let prsmrunarray = []
	let psargsarray = []
	// Start prsm for server if it isn't running already
	for (let server of hostlist) {
		let psinfo = ns.ps(server)
		for (let prog of psinfo) {
			if (prog.args[0] && prog.filename == "prsm.js") psargsarray.push(prog.args[0])
		}
	}
	for (let server of moneylist) {
		prsmrunarray.push(!psargsarray.includes(server))
	}

	for (let host of hostlist) {
		let hostram = ns.getServerMaxRam(host) - ns.getServerUsedRam(host)
		let spareramonhome = 40
		if (host == "home") hostram -= spareramonhome
		for (let i = 0; i < moneylist.length; i++) {
			if (hostram < ns.getScriptRam("prsm.js")) break;
			if (prsmrunarray[i] && ns.getServerRequiredHackingLevel(moneylist[i]) <= Math.round(ns.getHackingLevel() / 2)) { // Only start prsm on servers 50% of hack level
				let check = ns.exec("prsm.js", host, { threads: 1, ramOverride: 9.65 }, moneylist[i])
				//let check = ns.exec("prsm.js", host, {threads:1,ramOverride:9.65}, moneylist[i], "tilt")
				hostram -= ns.getScriptRam("prsm.js")
				prsmrunarray[i] = false
				if (check) ns.tprintf(`maintenance - ${c.c}Started prsm.js on ${host} targeting ${moneylist[i]}`)
				else ns.tprint(`maintenance - ${c.r}${moneylist[i]} prsm choked!`)
			}
		}

	}


}

/** @param {NS} ns */
export function hacknetShindigs(ns, h = ns.hacknet) {
	let prodpersec = 0
	const hashnum = ns.formatNumber(h.numHashes())
	const hashcap = ns.formatNumber(h.hashCapacity(), 0)
	for (let i = 0; i < h.numNodes(); i++) prodpersec += h.getNodeStats(i).production
	const returnval = [h.numNodes(), `${hashnum}/${hashcap}`, prodpersec]
	const profits = ns.getMoneySources().sinceInstall.hacknet + ns.getMoneySources().sinceInstall.hacknet_expenses


	const mainlist = JSON.parse(ns.read("logs/mainlist.txt"))
	const moneyobj = mainlist.map(server => { return { name: server, money: ns.getServerMaxMoney(server), sec: ns.getServerMinSecurityLevel(server) } })
	let max = 0
	let moneytargetserver
	let sectargetserver


	// Get money if in deficit or megacorp not rooted
	if (!ns.hasRootAccess("megacorp") || profits < 0) while (h.numHashes() > 4) h.spendHashes("Sell for Money")

	// Spend hashes decreasing security
	moneyobj.forEach((server) => { if (server.sec > max && server.sec > 1) (max = server.sec, sectargetserver = server.name) });
	while (ns.getServerMinSecurityLevel(sectargetserver) > 1 && h.spendHashes("Reduce Minimum Security", sectargetserver));

	max = 0
	// Spend hashes increasing money	
	moneyobj.forEach((server) => { if (server.money > max && server.money < 10e12) (max = server.money, moneytargetserver = server.name) });
	while (ns.getServerMaxMoney(moneytargetserver) < 10e12 && h.spendHashes("Increase Maximum Money", moneytargetserver));

	// Only spend on upgrades when in profit
	if (profits < 100e6) return returnval;


	while (ns.hacknet.getPurchaseNodeCost() < ns.getServerMoneyAvailable("home")) {
		ns.hacknet.purchaseNode()
	}

	let parts = ["Level", "Core", "Ram", "Cache"]
	for (let part of parts) {
		for (let i = ns.hacknet.numNodes() - 1; i > -1; i--) {
			while (ns.hacknet[`upgrade${part}`](i)) {
			}
		}
	}
	return returnval;
}

export function ramFormat(ram) {
	if (ram < 1000) {
		return ram.toFixed(2) + "GB";
	} else if (ram < 1000000) {
		return (ram / 1000).toFixed(2) + "TB";
	} else if (ram < 1000000000) {
		return (ram / 1000000).toFixed(2) + "PB";
	}
}


export function numFormat(cash) {
	let negsym = ""
	cash = parseFloat(cash)
	if (cash == 0) return "0";
	if (cash < 0) {
		cash *= -1
		negsym = "-"
	}
	if (cash < 1e3) return (negsym + cash.toFixed(2));
	else if (cash < 1e6) return (negsym + (cash / 1e3).toFixed(2)) + "k";
	else if (cash < 1e9) return (negsym + (cash / 1e6).toFixed(2)) + "M";
	else if (cash < 1e12) return (negsym + (cash / 1e9).toFixed(2)) + "B";
	else if (cash < 1e15) return (negsym + (cash / 1e12).toFixed(2)) + "T";
	else if (cash < 1e18) return (negsym + (cash / 1e15).toFixed(2)) + "q";

}

export function timeStamper(inputtime) {
	let date = (new Date()).toString()
	let hours = date.substring(16, 18)
	let minutes = date.substring(19, 21)
	let seconds = date.substring(22, 24)
	let dateraw = 1000 * ((parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds))
	dateraw += inputtime
	return dateraw
}

export function timeFormatColon(rawtime) {
	return `${(Math.floor(rawtime / 3600000)).toString().padStart(2, "0")}:${Math.floor((rawtime / 60000) % 60).toString().padStart(2, "0")}:${Math.floor((rawtime / 1000) % 60).toString().padStart(2, "0")}`
}
