/** @param {NS} ns */
export async function main(ns, s = ns.sleeve, sleeves = [0, 1, 2, 3, 4, 5]) {
	const skillstr = ["strength", "defense", "dexterity", "agility"];

	sleeves.forEach((sleeve) => {
		const gs = s.getSleeve(sleeve)
		if (gs.shock == 0) s.getSleevePurchasableAugs(sleeve).forEach(aug => s.purchaseSleeveAug(sleeve, aug.name))
		s.setToIdle(sleeve)
		if (gs.shock > 75) s.setToShockRecovery(sleeve)
		if (!s.getTask(sleeve)) {
			// train if weak
			for (let skill of skillstr) {
				if (gs.skills[skill] < 20) {
					s.setToGymWorkout(sleeve, "Iron Gym", skill);
					break;
				}
			}
		}
		// murder people if we're not at the gym
		if (!s.getTask(sleeve)) { s.setToCommitCrime(sleeve, "Homicide") }
	})



	ns.writePort(ns.pid, "")
}