import { timeFormatColon } from "func.js"
const cities = ["Aevum", "Chongqing", "New Tokyo", "Ishima", "Volhaven"]
async function agriDivSetup(ns, c = ns.corporation) {

	c.expandIndustry("Agriculture", agridivname) // Make agri div

	cities.forEach(city => {
		c.getDivision(agridivname).cities.includes(city) || c.expandCity(agridivname, city);// Expand into each city
		while (c.getOffice().size < c.getOffice().numEmployees) c.hireEmployee(agridivname, city); // Employ dudes
		c.setSmartSupply(agridivname, city, 1); // Set Smart Supply
		c.sellMaterial(agridivname, city, "Plants", "MAX", "MP"); // Sell plants and food at MAX/MP for now
		c.sellMaterial(agridivname, city, "Food", "MAX", "MP");
	});

	// Initial warehouse upgrades
	upgradeToLevel(3, "Smart Warehouses"); // Buy 3 levels of Smart Warehouses

	cities.forEach(city => {
		c.upgradeWarehouse(agridivname, city, corpname, 3); // Upgrade warehouses 3 times 
	});

	// Buy boost materials
	while (c.getCorporation().state !== "START") await ns.asleep(500)
	cities.forEach(city => {
		c.buyMaterial(agridivname, city, "Real Estate", 7438.8)
		c.buyMaterial(agridivname, city, "AI Cores", 108)
		c.buyMaterial(agridivname, city, "Hardware", 102.1)
	})
	// Set purchases back to 0 	
	while (c.getCorporation().state !== "PRODUCTION") await ns.asleep(500)
	cities.forEach(city => {
		c.buyMaterial(agridivname, city, "Real Estate", 0)
		c.buyMaterial(agridivname, city, "AI Cores", 0)
		c.buyMaterial(agridivname, city, "Hardware", 0)
	})


}




/** @param {NS} ns */
export async function main(ns, c = ns.corporation) {
	ns.disableLog('ALL')

	// Handy one-line functions
	const upgradeToLevel = (level, upgradename) => { c.levelUpgrade(upgradename); level >= c.getUpgradeLevel(upgradename) || upgradeToLevel(level, upgradename) },

		// Constants
		corpname = "corp corp",
		agridivname = "plont corp",
		chemdivname = "chem corp",
		tobdivname = "cough corp",
		watdivname = "wet corp";



	(c.hasCorporation()) || c.createCorporation(corpname);	// Make corp	
	(c.hasCorporation()) || exitPortWrite(); // exit if no corp made

	// Initial unlocks
	c.hasUnlock("Smart Supply") || c.purchaseUnlock("Smart Supply");

	// Agri division initial setup
	if (!c.getCorporation().divisions.includes(agridivname)) {
		await agriDivSetup(ns)
	}


	while (true) {
		while (c.getCorporation().state !== "START") await ns.asleep(1000)
		const upgradenames = c.getConstants().upgradeNames
		const upgradecosts = upgradenames.map(upgrade => c.getUpgradeLevelCost(upgrade))
		const mincostindex = upgradecosts.indexOf(Math.min(...upgradecosts))
		while (c.getCorporation().funds > c.getUpgradeLevelCost(upgradenames[mincostindex])) {
			c.levelUpgrade(upgradenames[mincostindex]) // Level upgrades from cheapest first
		}

		c.getCorporation().divisions.reverse().forEach(div => { while (c.getHireAdVertCost(div) < c.getCorporation().funds) c.hireAdVert(div) }) // Buy AdVert


		// Discontinue prods when maxed
		const prodnames = ["Death Sticks", "Death Snuff", "Death Vapes", "Death Cigars"]
		let currprods = c.getDivision(tobdivname).products
		if (c.getDivision(tobdivname).products.length == c.getDivision(tobdivname).maxProducts) {
			const prodmultis = c.getDivision(tobdivname).products.map(product => c.getProduct(tobdivname, "Sector-12", product).rating)
			if (!prodmultis.includes(0)) { // Don't kill products if we are still developing
				prodnames.forEach(name => { if (c.getDivision(tobdivname).products.includes(name)) prodnames.pop() })
				const minmulti = Math.min(...prodmultis)
				const minmultiindex = prodmultis.indexOf(minmulti)
				c.discontinueProduct(tobdivname, currprods[minmultiindex])
			}
		}
		currprods = c.getDivision(tobdivname).products
		// Make prods up to max
		if (c.getDivision(tobdivname).products.length < c.getDivision(tobdivname).maxProducts) {
			const availablenames = prodnames.filter(name => !currprods.includes(name))
			if (availablenames.length) {
			c.makeProduct(tobdivname, "Sector-12", availablenames[availablenames.length - 1], c.getCorporation().funds / 3, c.getCorporation().funds / 3)
			}
		}
		cities.forEach(city => currprods.forEach(prod => c.sellProduct(tobdivname,city,prod,"MAX","MP")))
		currprods.forEach(prod => c.setProductMarketTA2(tobdivname,prod,true))


		ns.clearLog()
		ns.printf(`Funds - \$${ns.formatNumber(c.getCorporation().funds)}`)
		ns.printf(`Revn - \$${ns.formatNumber(c.getCorporation().revenue)}`)
		ns.printf(`Expn - \$${ns.formatNumber(c.getCorporation().expenses)}`)
		ns.printf(`Share CD - ${timeFormatColon(c.getCorporation().shareSaleCooldown / 1000)}`)
		while (c.getCorporation().state !== "SALE") await ns.asleep(1000)
	}
}