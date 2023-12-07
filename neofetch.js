import { win, doc, c } from "func.js";
/** @param {NS} ns */
const distroAscii = (ns,wind = eval(win),docu = eval(doc)) => {
	const dateFormat = (date) => `${Math.floor(date / (60 * 24))} days, ${Math.floor(date / ((60)) % 24)} hours, ${Math.floor(date % 60)} mins`, r = c.r, g = c.g, b = c.b, cy = c.c, m = c.m, y = c.y, k = c.k, w = c.w, d = c.d, pad = ``.padEnd(35, ` `), title = `muesli@home`, dashes = `${w}-----------`, os = `OS: ${w}Fulcrum Technologies Chapeau Linux x86_64`, host = `Host: ${w}${ns.getHostname()}`, kernel = `Kernel: ${w}${docu.title}`, uptime = `Uptime: ${w}${dateFormat(ns.getPlayer().totalPlaytime / (1000 * 60))}`, packages = `Packages: ${w}${ns.ls("home").length} (bitpkg)`, shell = `Shell: ${w}bit-sh 6.9`, resolution = `Resolution: ${w}${wind.innerWidth} x ${wind.innerHeight}`, // Costs a lot of ram
		wm = `WM: ${w}BitBurner WM`, terminal = `Terminal: ${w}BiTTY`, cpu = `CPU: ${w}Gen FT-6900x ${ns.getServer("home").cpuCores} core`, memory = `Memory: ${w}${ns.getServer("home").ramUsed * 1000} MiB / ${ns.getServer("home").maxRam * 1000} MiB`;
	return [`${pad}${g}neofetch ~`,
	`    ${g}FFFFFFFF\\${r}.......${g}TTTTTTTT\\      ${g}${title}`,
	`    ${g}FF \\_____|${r}:~:~:~${g}\\__TT \\__|     ${g}${dashes}`,
	`    ${g}FF |${r}:=:=:=:=:=:=:=:${g}TT |${r}=\\      ${g}${os}`,
	`   ${r}/${g}FFFFF\\${r}-*-*-*-*-*-*-${g}TT |${r}*-\\     ${g}${host}`,
	`  ${r}/*${g}FF \\__|${r}************${g}TT |${r}***\\    ${g}${kernel}`,
	`  ${r}==${g}FF |${r}====${g}CCCCCC\\${r}====${g}TT |${r}====\\   ${g}${uptime}`,
	`  ${r}##${g}FF |${r}###${g}CCC __CC\\${r}###${g}TT |${r}####||  ${g}${packages}`,
	`  ${r}==${g}\\_\\|${r}===${g}CC /${r}==${g}\\__|${r}==${g}\\_\\|${r}====||  ${g}${shell}`,
	`  ${r}\\********${g}CC |${r}***************/\\|  ${g}${resolution}`,
	`   ${r}\\*-*-*-*${g}CC |${r}-*-*-*-*-*-*-*/ /   ${g}${wm}`,
	`    ${r}\\:=:=:=${g}CC |${r}:=${g}CC\\${r}=:=:=:=:/ /    ${g}${terminal}`,
	`     ${r}\\~:~:~${g}\\CCCCCC  |${r}~:~:~:/ /     ${g}${cpu}`,
	`      ${r}\\_____${g}\\_____\\/${r}______/ /      ${g}${memory}`,
	`       ${r}\\__________________\\/`,
	`${pad}${k}████${r}████${g}████${y}████${b}████${m}████${cy}████${d}████`,
	`${pad}${k}████${r}████${g}████${y}████${b}████${m}████${cy}████${w}████`,
	];
};
export async function main(ns) {
	for (const line of distroAscii(ns)) {
		ns.tprintf(line);
		await ns.sleep(Math.random() * 20);
	}
	ns.writePort(ns.pid, "");
}