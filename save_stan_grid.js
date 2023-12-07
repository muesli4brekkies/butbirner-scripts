/** @param {NS} ns */
export const main = (ns, s = ns.stanek,height = [...Array(s.giftHeight).keys()],width = [...Array(s.giftWidth).keys()],) => ns.write("frags.js", JSON.stringify(width.flatMap(x => height.map(y => s.getFragment(x, y))).filter(x => x)), "w")
	 