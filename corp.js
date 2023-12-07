class Corp {
	cities
	names
	constructor(ns) {
		this.ns = ns;
		this.c = ns.corporation;
		this.cities = [];
		this.divnames = {
			agridivname: "plont corp",
			chemdivname: "chem corp",
			tobdivname: "cough corp",
			watdivname: "wet corp",
		};
		this.divtypes = {
			agri: "Agriculture",
			chem: "Chemical",
			tob: "Tobacco",
			wat: "Spring Water",
		}
		this.jobs = ["Operations", "Engineer", "Business", "Management", "Research & Development", "Intern"];
		this.boostStock = ["Hardware", "Robots", "AI Cores", "Real Estate"];
		this.lvlUps = ["Smart Factories", "Smart Storage", "FocusWires", "Neural Accelerators", "Speech Processor Implants", "Nuoptimal Nootropic Injector Implants", "Wilson Analytics", "Project Insight", "ABC SalesBots", "DreamSense"];
		this.unlocks = ["Smart Supply", "Exports"];
		this.cities = ["Aevum", "Chongqing", "New Tokyo", "Ishima", "Volhaven", "Sector-12"];
		this.mats = ["Water", "Food", "Plants", "Chemicals", "Drugs", "Ore", "Metal"];
	}
}
const cities = ["Sector-12", "Aevum", "Chongqing", "New Tokyo", "Ishima", "Volhaven"];
const corpname = "corp corp", agridivname = "plont corp", chemdivname = "chem corp", tobdivname = "cough corp", watdivname = "wet corp";
/** @param {NS} ns */
function buyStuff(ns, c = ns.corporation) {
	const upgradenames = c.getConstants().upgradeNames;
	const upgradecosts = upgradenames.map(upgrade => c.getUpgradeLevelCost(upgrade));
	const mincostindex = upgradecosts.indexOf(Math.min(...upgradecosts));
	let limiter = 0
	while (c.getCorporation().funds / 4 > c.getUpgradeLevelCost(upgradenames[mincostindex])) {
		c.levelUpgrade(upgradenames[mincostindex]); // Level upgrades from cheapest first
		limiter++
		if (limiter > 8) break;
	}
	c.getCorporation().divisions.reverse().forEach(div => {
		while (c.getHireAdVertCost(div) < c.getCorporation().funds)
			c.hireAdVert(div);
	}); // Buy AdVert
}

async function newCycle(ns, c = ns.corporation) {
	while (c.getCorporation().state !== "START") await ns.asleep(1000);
	return;
}

/** @param {NS} ns */
async function divMaintenance(ns, c = ns.corporation, divname) {
	ns.tprint(divname)
	if (c.getDivision(divname).researchPoints > 70000 && !c.hasResearched("Market-TA.II")) {
		c.research(divname, "Market-TA.I");
		c.research(divname, "Market-TA.II");
	}
	let producstonlystr = "Base"
	if (divname == tobdivname) producstonlystr = "ProductsOnly"
	if (c.hasResearched(divname, "Market-TA.II")) {
		c.getConstants()[`researchNames${producstonlystr}`].forEach(upgrade =>
			(c.getDivision(divname).researchPoints > c.getResearchCost(divname, upgrade) && !c.hasResearched(divname, upgrade)) && c.research(divname, upgrade)
		)
	}
	for (let city of cities) {
		c.getOfficeSizeUpgradeCost(divname, city, 20) < c.getCorporation().funds && c.upgradeOfficeSize(divname, city, 20)
		while (c.getOffice(divname, city).size > c.getOffice(divname, city).numEmployees) {
			c.hireEmployee(divname, city); // Employ dudes
		}
		c.getOffice(divname, city).avgEnergy < 100 && c.buyTea(divname, city); // Tea
		c.getOffice(divname, city).avgMorale < 100 && c.throwParty(divname, city, 1e6); // Parties
		c.getUpgradeWarehouseCost(divname, city) < c.getCorporation().funds && c.upgradeWarehouse(divname, dity); // warehouse

		let size = c.getOffice(divname, city).size;
		const getJobs = (s) => Math.ceil(size * s);
		let assignment = { ops: 0.25, eng: 0.25,  mgm: 0.25, rsc: 0.20	,	bus: 0.05 };
		if (divname === tobdivname && city === "Sector-12") assignment = { ops: (0.06), eng: (0.3), bus: (0.08), mgm: (0.56), rsc: 0 };
		if (divname === tobdivname && city !== "Sector-12") assignment = { ops: (0.1), eng: (0.1), bus: (0.1), mgm: (0.2), rsc: 0.5 };
		const assign = c.setAutoJobAssignment;
		const tasks = {
			rsc: "Research & Development",
			ops: "Operations",
			eng: "Engineer",
			bus: "Business",
			mgm: "Management",
		};
		c.getConstants().employeePositions.forEach(job => assign(divname, city, job, 0))
		await newCycle(ns);
		let remaining = c.getOffice(divname,city).size
		for (let key of Object.keys(assignment)) {
			let jobs = getJobs(assignment[key])
			if (jobs > remaining) jobs = remaining
			assign(divname, city, tasks[key], jobs);
			remaining = remaining - jobs
		}
	}
}


/** @param {NS} ns */
async function divSetup(ns, c = ns.corporation, divname, industry) {
	divname == agridivname ? industry = "Agriculture" : divname == chemdivname ? industry = "Chemical" : industry = "Tobacco";
	c.getCorporation().divisions.includes(divname) || c.expandIndustry(industry, divname); // Make agri div
	cities.forEach(city => {
		c.purchaseWarehouse(divname, city)
		c.getDivision(divname).cities.includes(city) || c.expandCity(divname, city); // Expand into each city
		while (c.getOffice(divname, city).size > c.getOffice(divname, city).numEmployees) {
			c.hireEmployee(divname, city); // Employ dudes
		}
		c.setAutoJobAssignment(divname, city, "Operations", 1)
		c.setAutoJobAssignment(divname, city, "Engineer", 1)
		c.setAutoJobAssignment(divname, city, "Business", 1)
		c.setSmartSupply(divname, city, 1); // Set Smart Supply
		if (divname == chemdivname) {
			c.exportMaterial(divname, city, agridivname, city, "Chemicals", "(IPROD+IINV/10)*(-1)") // Export chems to plonts
			c.sellMaterial(divname, city, "Chemicals", "MAX", "MP") // Sell the rest
			c.exportMaterial(agridivname, city, divname, city, "Plants", "(IPROD+IINV/10)*(-1)") // Export plonts to chems
		} else if (divname == agridivname) {
			c.sellMaterial(divname, city, "Plants", "MAX", "MP"); // Sell plants and food at MAX/MP for now
			c.sellMaterial(divname, city, "Food", "MAX", "MP");
		}
	});
	// Initial warehouse upgrades
	c.levelUpgrade("Smart Storage")
	c.levelUpgrade("Smart Storage")
	c.levelUpgrade("Smart Storage")
	if (divname == tobdivname) c.makeProduct(tobdivname, "Sector-12", "Death Sticks", 1e9, 1e9)
	cities.forEach(city => {
		c.upgradeWarehouse(divname, city, 4); // Upgrade warehouses 3 times 
	});

	c.hireAdVert(divname)
	c.hireAdVert(divname)

	// Buy boost materials
	while (c.getCorporation().state !== "START")
		await ns.asleep(500);
	cities.forEach(city => {
		c.buyMaterial(divname, city, "Real Estate", 7438.8);
		c.buyMaterial(divname, city, "AI Cores", 108);
		c.buyMaterial(divname, city, "Hardware", 102.1);
	});
	// Set purchases back to 0 	
	while (c.getCorporation().state !== "PRODUCTION")
		await ns.asleep(500);
	cities.forEach(city => {
		c.buyMaterial(divname, city, "Real Estate", 0);
		c.buyMaterial(divname, city, "AI Cores", 0);
		c.buyMaterial(divname, city, "Hardware", 0);
	});
	return;
}

/** @param {NS} ns */
export async function main(ns, c = ns.corporation) {
	//ns.disableLog('ALL');
	// Handy one-line functions
	const upgradeToLevel = (level, upgradename) => { while (level < c.getUpgradeLevel(upgradename)) c.levelUpgrade(upgradename); };
	// Constants
	(c.hasCorporation()) || c.createCorporation(corpname); // Make corp	
	(c.hasCorporation()) || ns.exit(); // exit if no corp made
	// Initial unlocks
	try {
		c.purchaseUnlock("Smart Supply");
	} catch { }
	// Agri division initial setup
	c.getCorporation().divisions.includes(agridivname) || await divSetup(ns, c = ns.corporation, agridivname);
	while (c.getInvestmentOffer().funds < 100e9) {
		ns.clearPort(ns.pid);
		ns.writePort(ns.pid, `agri done - Awaiting offer \$${ns.formatNumber(c.getInvestmentOffer().funds)}/\$250b`);
		awaitdivMaintenance(ns, c, agridivname);
		await ns.sleep(20000);
	}
	(c.getInvestmentOffer().round == 1) && c.acceptInvestmentOffer();
	(c.getInvestmentOffer().round == 2) && c.acceptInvestmentOffer();
	try {
		c.purchaseUnlock("Export");
	} catch { }
	c.getCorporation().divisions.includes(chemdivname) || await divSetup(ns, c = ns.corporation, chemdivname);
	while (c.getInvestmentOffer().funds < 300e9) {
		ns.clearPort(ns.pid)
		ns.writePort(ns.pid, `chem done - Awaiting offer \$${ns.formatNumber(c.getInvestmentOffer().funds)}/\$750b`)
		await divMaintenance(ns, c, agridivname)
		await divMaintenance(ns, c, chemdivname)
		await ns.sleep(30000)
	}
	(c.getInvestmentOffer().round == 3) && c.acceptInvestmentOffer()

	c.getCorporation().divisions.includes(tobdivname) || await divSetup(ns, c = ns.corporation, tobdivname);

	while (true) {
		c.getInvestmentOffer().round == 5 ? c.goPublic(c.getCorporation().numShares - 1) : (c.getInvestmentOffer().funds > 750e9) && c.acceptInvestmentOffer();

		await divMaintenance(ns, c, tobdivname);
		await divMaintenance(ns, c, agridivname);
		await divMaintenance(ns, c, chemdivname);
		buyStuff(ns);

		await newCycle(ns)
		// Discontinue prods when maxed
		const prodnames = ["Death Sticks", "Death Snuff", "Death Vapes", "Death Cigars"];
		let currprods = c.getDivision(tobdivname).products;
		if (c.getDivision(tobdivname).products.length == c.getDivision(tobdivname).maxProducts) {
			const prodmultis = c.getDivision(tobdivname).products.map(product => c.getProduct(tobdivname, "Sector-12", product).rating);
		  if (c.getDivision(tobdivname).products.length === c.getDivision(tobdivname).maxProducts && !prodmultis.includes(0)) { // Don't kill products if we are still developing
				const minmulti = Math.min(...prodmultis);
				const minmultiindex = prodmultis.indexOf(minmulti);
				c.discontinueProduct(tobdivname, currprods[minmultiindex]);
			}
		}
		currprods = c.getDivision(tobdivname).products;
		// Make prods up to max
		if (c.getDivision(tobdivname).products.length < c.getDivision(tobdivname).maxProducts) {
			const availablenames = prodnames.filter(name => !currprods.includes(name));
			if (availablenames.length && c.getCorporation().funds > 0) {
				c.makeProduct(tobdivname, "Sector-12", availablenames[0], c.getCorporation().funds / 3, c.getCorporation().funds / 3);
			}
		}
		cities.forEach(city => currprods.forEach(prod => c.sellProduct(tobdivname, city, prod, "MAX", "MP")));
		c.hasResearched(tobdivname, "Market-TA.II") && currprods.forEach(prod => c.setProductMarketTA2(tobdivname, prod, true));
		ns.clearPort(ns.pid)
		let publicinfo = `        Round - ${ns.formatNumber(c.getInvestmentOffer().round)}, ` +
			`Offer - \$${ns.formatNumber(c.getInvestmentOffer().funds)}, `;
		if (c.getCorporation().public) publicinfo = `        Public - Share price \$${c.getCorporation().sharePrice}`
		ns.writePort(ns.pid, `Funds - \$${ns.formatNumber(c.getCorporation().funds)}, ` + publicinfo);
		while (c.getCorporation().state !== "SALE")
			await ns.asleep(1000);
	}

}
