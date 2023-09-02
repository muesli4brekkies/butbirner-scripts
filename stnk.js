/** @param {NS} ns */
export async function main(ns) {
		ns.stock.purchaseWseAccount()
		if (!ns.stock.hasWSEAccount()) {ns.exit()}
		ns.stock.purchaseTixApi()
		ns.stock.purchase4SMarketData()
		ns.stock.purchase4SMarketDataTixApi()


		}
