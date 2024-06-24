// servers/home/lib.ts
var CON = {
  NFG: "NeuroFlux Governor",
  TRP: "The Red Pill",
  GANG_NAME: "Slum Snakes",
  AUGS_TO_BUY: [
    "Social Negotiation Assistant (S.N.A)",
    "Nuoptimal Nootropic Injector Implant",
    "ADR-V1 Pheromone Gene",
    "Speech Enhancement",
    "Wired Reflexes",
    "Cranial Signal Processors - Gen I",
    "BitWire",
    "Synaptic Enhancement Implant",
    "Neurotrainer I",
    "Cranial Signal Processors - Gen II",
    "CRTX42-AA Gene Modification",
    "Embedded Netburner Module",
    "Neural-Retention Enhancement",
    "Artificial Synaptic Potentiation",
    "Neurotrainer II",
    "The Black Hand",
    "Embedded Netburner Module Core Implant",
    "Cranial Signal Processors - Gen IV",
    "Neuralstimulator",
    "Enhanced Myelin Sheathing",
    "Neural Accelerator",
    "Cranial Signal Processors - Gen III",
    "DataJack",
    "Embedded Netburner Module Core V2 Upgrade",
    "BitRunners Neurolink",
    "Cranial Signal Processors - Gen V",
    "Artificial Bio-neural Network Implant",
    "CashRoot Starter Kit",
    "Augmented Targeting I",
    "Augmented Targeting II",
    "Speech Processor Implant",
    "Nanofiber Weave",
    "InfoLoad",
    "ADR-V2 Pheromone Gene",
    "ECorp HVMind Implant",
    "QLink",
    "nickofolas Congruity Implant",
    "The Red Pill"
  ],
  ALL_FACTIONS: [
    "Illuminati",
    "Daedalus",
    "The Covenant",
    "ECorp",
    "MegaCorp",
    "Bachman & Associates",
    "Blade Industries",
    "NWO",
    "Clarke Incorporated",
    "OmniTek Incorporated",
    "Four Sigma",
    "KuaiGong International",
    "Fulcrum Secret Technologies",
    "BitRunners",
    "The Black Hand",
    "NiteSec",
    "Aevum",
    "Chongqing",
    "Ishima",
    "New Tokyo",
    "Sector-12",
    "Volhaven",
    "Speakers for the Dead",
    "The Dark Army",
    "The Syndicate",
    "Silhouette",
    "Tetrads",
    "Slum Snakes",
    "Netburners",
    "Tian Di Hui",
    "CyberSec",
    "Bladeburners",
    "Church of the Machine God",
    "Shadows of Anarchy"
  ],
  MEMBER_NAMES: [
    "Tony Harrison",
    "Kathy Rindhoops",
    "Jimmy Lazers",
    "Naboo the Enigma",
    "Helen Back",
    "Tubular Tony",
    "Stabby Clarkson",
    "Carl",
    "Poops Mcghee",
    "Hairy Dan",
    "Will Barrow",
    "Barry Three-Nips",
    "Markkus",
    "Patricia O'Violence",
    "Pat O'Cake",
    "Ray Fridgerator",
    "Sammy the Squid",
    "Slanty Bob (one leg)",
    "Bastard Man",
    "Man-Spider",
    "Non-Bio Bruce",
    "Rockhead Rumple",
    "Joey Tagliatelle",
    "Johnny Segment"
  ],
  LOOP_FUNCTIONS: [
    "stan",
    "runGang",
    "prsm"
    /*"downDog"*/
  ],
  ONESHOT_FUNCTIONS: [
    "darkwebShopping",
    "ownedAugs",
    "availableAugs",
    "hacknetShindigs",
    "pServ",
    "factionJoin",
    "factWork",
    "murderate",
    "d43m0nD357r0y",
    "ramUp",
    "coresUp",
    "buyTOR",
    "backdoor",
    "graft",
    "donate",
    "buyAugs",
    "installAugs",
    "persuade",
    "steves",
    "bburner"
  ],
  UTIL_FUNCTIONS: ["bd", "gvnr", "neofetch"],
  DOGGO_ASCII: [
    `    ___`,
    ` __/_,  \`.  .-"""-.`,
    ` \\_,  | \\-'  /   )\`-')`,
    `  "") \`"\`      ((\`"\``,
    ` ___Y  ,    .'7 /|`,
    `(_,___/...-\` (_/_/         `,
    `                 ___`,
    `      .-"""-.  .\` ,_\\__`,
    ` ('-\`(   \\  '-/ |   ,_/   `,
    `   \`"\`))       \`"\` (""`,
    `      |\\ 4'.    ,  Y___`,
    `      \\_\\_) \`-...\\___,_)`
  ],
  WIN: eval("window"),
  DOC: eval("document")
};
var HOOKS = [
  CON.DOC.getElementById("overview-extra-hook-0"),
  CON.DOC.getElementById("overview-extra-hook-1")
];
function main(n) {
  n.ps().forEach((s) => n.closeTail(s.pid)), sGet(n).forEach((s) => n.killall(s, true)), !n.args.length && (writeLaunchers(n), n.run("util/gvnr.js"));
}
function writeLaunchers(ns2) {
  ["oneshot", "loop", "util"].forEach((dir) => ns2.ls("home", dir).forEach((s) => ns2.rm(s))), ((wrt) => [
    { fn: CON.UTIL_FUNCTIONS, dir: "util" },
    { fn: CON.LOOP_FUNCTIONS, dir: "loop" },
    { fn: CON.ONESHOT_FUNCTIONS, dir: "oneshot" }
  ].forEach((cat) => cat.fn.forEach((fn) => wrt(cat.dir, fn))))(
    (type, func) => ns2.write(
      `${type}/${func}.js`,
      `import { ${func} } from "lib.js"; export const main = async ns => (ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))), await ${func}(ns,ns.args[0]));`,
      "w"
    )
  );
}
async function gvnr(ns2) {
  const refresh_delay = 1;
  const runLoop = async (is_first_start, timer) => (prettyLogs(ns2), await prettyOverview(ns2, timer), timer % 40 == 0 && await scriptLoop(ns2, is_first_start), await util.slp(refresh_delay * 1e3), await runLoop(false, timer + refresh_delay));
  ns2.tail(), ns2.disableLog("ALL"), ns2.tprintf(`${util.ansi.m}** ./gvnr.js **`), ns2.atExit(() => (HOOKS[0].innerText = "", HOOKS[1].innerText = "")), // Clears the overview on exit to prevent stale data)
  await runLoop(true, 0);
}
async function Run(ns2, path, params = [], props = "") {
  ns2.write(
    `run.js`,
    /*
    "export async function main(ns) {",
    "  const [path, props, ...params] = ns.args;",
    '  const func_return = path.split(".").reduce((a, b) => a[b], ns)(...params)',
    '  const return_value = !props ? func_return : props.split(".").reduce((a,b) => a?.[b], func_return)',
    "  ns.atExit(() => ns.writePort(ns.pid, return_value));",
    "}",
    */
    'export let main=n=>(r=>n.atExit(()=>n.writePort(n.pid,r)))(((z,[c,d,...e])=>(f=>d?z(f,d):f)(z(n,c)(...e)))((q,s)=>s.split(".").reduce((a,b)=>a?.[b],q),n.args))',
    "w"
  );
  const run_pid = ns2.run(`run.js`, { ramOverride: 1.6 + ns2.getFunctionRamCost(path) }, path, props, ...params);
  return !run_pid ? (ns2.tprintf(`${util.ansi.r}!! ${path} DID NOT RUN !!`), null) : (await ns2.nextPortWrite(run_pid), ns2.readPort(run_pid));
}
var util = {
  lmaocat: async function(element_id, extra_style, timeout = 1e4) {
    await new Promise((r) => setTimeout(r, 100));
    const PI = Math.PI;
    const element = CON.DOC.getElementById(element_id);
    console.log(element);
    const text = element.innerText;
    const col_offset = 50;
    const rand_theta = () => Math.random() * PI;
    const calc_sin = (i, angle, theta) => ~~(Math.abs(Math.cos((theta + angle) * i)) * (255 - col_offset)) + col_offset;
    const gen_rgb = (i, l) => `color:rgb(${calc_sin(i, 0, l.thetas.r)},${calc_sin(i, 2 * PI / 3, l.thetas.g)},${calc_sin(i, 4 * PI / 3, l.thetas.b)}`;
    const print_map = [...text].map((l) => ({
      letter: l,
      thetas: {
        r: rand_theta(),
        g: rand_theta(),
        b: rand_theta()
      }
    }));
    await loop(print_map, timeout);
    async function loop(print_map2, timeout2, i = 1) {
      try {
        CON.DOC.getElementById(element_id).innerHTML = print_map2.map((l) => `<span style="${extra_style}${gen_rgb(i, l)}">${l.letter}</span>`).join("");
      } catch {
      }
      await new Promise((r) => setTimeout(r, 50));
      if (timeout2 > 0) {
        await loop(print_map2, timeout2 - 50, i + 0.05);
      }
    }
  },
  rgbCol: (r, g, b, fg = true) => `\x1B[${fg ? "3" : "4"}8;2;${r};${g};${b}m`,
  ansi: {
    // red
    r: "\x1B[31m",
    // green
    g: "\x1B[32m",
    // blue
    b: "\x1B[34m",
    // cyan
    c: "\x1B[36m",
    // magenta
    m: "\x1B[35m",
    // yellow
    y: "\x1B[33m",
    // key(black)
    k: "\x1B[30m",
    // white
    w: "\x1B[37m",
    // default
    d: "\x1B[0m",
    // bold
    bl: "\x1B[2m"
  },
  getIndexArray: (n) => [...Array(n).keys()],
  tickString: (t, l = 40, e = true) => t % l ? "#".repeat(t / 4 % (l / 4)) + `|/-\\`[t % 4] : "#--exec--#",
  digiClock: (r = Date.now(), c = (t, d = 60, v = r / t % d | 0) => v <= 9 ? "0" + v : v) => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3),
  ramFormat: (ram) => ram < 1e3 ? ram.toFixed(2) + "GB" : ram < 1e6 ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB",
  slp: async (t) => await new Promise((r) => setTimeout(r, t))
};
function getFreeRam(ns2, host) {
  return ns2.getServerMaxRam(host) - ns2.getServerUsedRam(host);
}
async function is_Busy(ns2) {
  return await Run(ns2, "singularity.getCurrentWork", [""], "type") == "GRAFTING" || await Run(ns2, "bladeburner.inBladeburner") && !!await Run(ns2, "bladeburner.getCurrentAction", [""], "name");
}
function sGet(ns2, m = /* @__PURE__ */ new Set(["home"])) {
  return m.forEach((h) => ns2.scan(h).map((s) => m.add(s))), [...m];
}
function readyFiley(ns2, file) {
  const data = ns2.read(file);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}
function peekyPorty(ns2, script) {
  const data = ns2.peek(ns2.getRunningScript(script)?.pid ?? ns2.pid);
  return data == "NULL PORT DATA" ? "" : data;
}
function getCurrentNode(ns2) {
  const r = ns2.getResetInfo();
  return `${r.currentNode}.${1 + r.ownedSF.get(r.currentNode)}`;
}
async function buyTOR(ns2) {
  await Run(ns2, "singularity.purchaseTor");
}
async function ramUp(ns2) {
  await Run(ns2, "singularity.upgradeHomeRam") && (ns2.tprintf(util.ansi.g + "Upgraded home ram"), true) && ramUp(ns2);
}
async function coresUp(ns2) {
  await Run(ns2, "singularity.upgradeHomeCores") && (ns2.tprintf(util.ansi.g + "Upgraded home cores"), true) && coresUp(ns2);
}
async function factionJoin(n, s = n.singularity) {
  (await Run(n, "singularity.checkFactionInvitations")).forEach(
    (f) => (s.joinFaction(f), n.tprintf(`${util.ansi.m}Joined ${f}`))
  );
}
async function darkwebShopping(ns2) {
  await ["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].reduce(
    async (a, b) => (await a, await Run(ns2, "singularity.purchaseProgram", [`${b}.exe`])),
    Promise.resolve()
  );
}
async function murderate(ns2) {
  !await is_Busy(ns2) && await Run(ns2, "getPlayer", [], "numPeopleKilled") < 30 && (await Run(ns2, "singularity.stopAction"), await Run(ns2, "singularity.commitCrime", ["Homicide", 0]));
}
async function bd(n, t, h = "home", c = (f2 = "connect") => n.singularity[f2], f = (t2, r = []) => t2 == h ? r : f(n.scan(t2)[0], [t2, ...r])) {
  c()(h), f(t).map(c()), n.tprintf(`${util.ansi.y}Backdoor started on ${t}`), await c("installBackdoor")(), c()(h), n.tprintf(`${util.ansi.g}Backdoor complete on ${t}`);
}
function persuade(n, s = "home", p) {
  n.scan(s).forEach(
    (v) => v != p ? persuade(n, v, s) : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach((p2) => {
      try {
        p2(s);
      } catch {
      }
    })
  );
}
async function d43m0nD357r0y(ns2, date = /* @__PURE__ */ new Date(), wd = "w0r1d_d43m0n") {
  (sGet(ns2).includes(wd) && await Run(ns2, "getHackingLevel") > await Run(ns2, "getServerRequiredHackingLevel", [wd]) || ns2.bladeburner.inBladeburner() && !ns2.bladeburner.getNextBlackOp()) && (["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map((f) => ns2.rm(`temp/${f}`)), ns2.write(
    "report/nodeLog.txt",
    `${getCurrentNode(ns2)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
  ), await Run(ns2, "singularity.destroyW0r1dD43m0n", [12, "rset.js"]));
}
function pServ(ns2) {
  (ns2.purchaseServer("#", 8) || sGet(ns2).some((s) => [...Array(21).keys()].some((r) => ns2.upgradePurchasedServer(s, r << 1)))) && pServ(ns2);
}
function prettyLogs(ns2) {
  const percColour = (perc) => `${perc < 33 ? util.ansi.r : perc < 66 ? util.ansi.y : perc < 85 ? util.ansi.c : util.ansi.g}${perc.padStart(6, " ")}%${util.ansi.d}`;
  const secColour = (sec) => `${sec < 5 ? util.ansi.g : util.ansi.y}${("" + sec).padStart(3, " ")}${util.ansi.d}`;
  const main_list = sGet(ns2);
  const access_list = main_list.filter(
    (s) => ns2.hasRootAccess(s) && ns2.getServerRequiredHackingLevel(s) <= ns2.getHackingLevel()
  );
  const funded_list = access_list.filter(ns2.getServerMaxMoney);
  const funded_count = main_list.reduce((a, s) => a + +!!ns2.getServerMaxMoney(s), 0);
  const total_max_ram = access_list.reduce((a, s) => a + ns2.getServerMaxRam(s), 0);
  const total_free_ram = access_list.reduce((a, s) => a + getFreeRam(ns2, s), 0);
  const bought_augs = readyFiley(ns2, "temp/boughtAugs.txt");
  const bought_augs_sans_nfg = bought_augs.reduce((acc, aug) => acc + (aug != CON.NFG), 0);
  const num_nfg = bought_augs.reduce((acc, aug) => acc + (aug == CON.NFG), 0);
  const num_other_augs = readyFiley(ns2, "temp/installedAugs.txt").reduce((acc, aug) => acc + (aug != CON.NFG), 0);
  const aug_info = bought_augs.filter((a) => a != CON.NFG).map((aug) => " \xB7" + aug).concat(num_nfg ? [" \xB7NeuroFlux Governor x" + num_nfg] : null).join("\n");
  const getSecLvl = (server) => Math.ceil(ns2.getServerSecurityLevel(server)).toString().padStart(3, " ");
  const getSecDelta = (server) => secColour(
    Math.ceil(ns2.getServerSecurityLevel(server) - ns2.getServerMinSecurityLevel(server)).toString().padStart(3, " ")
  );
  const getCash = (server) => ns2.formatNumber(ns2.getServerMoneyAvailable(server)).toString().padStart(8, " ");
  const getMaxCash = (server) => ns2.formatNumber(ns2.getServerMaxMoney(server)).toString().padStart(8, " ");
  const getPerc = (server) => percColour((ns2.getServerMoneyAvailable(server) / ns2.getServerMaxMoney(server) * 100).toFixed(2));
  const getExecTime = (server) => util.digiClock(ns2.getWeakenTime(server));
  const getServerName = (server) => server == peekyPorty(ns2, "loop/prsm.js") ? `${server} ${util.ansi.w}---${util.ansi.y}\u0394<` : server;
  const getInfo = (s) => [
    getSecLvl(s),
    getSecDelta(s),
    getCash(s),
    getMaxCash(s),
    getPerc(s),
    getExecTime(s),
    getServerName(s)
  ];
  const format = (line) => ` ${line.join(" | ")}`;
  ns2.resizeTail(800, 1e3), ns2.moveTail(CON.WIN.innerWidth - 1150, 0), ns2.clearLog(), [
    ...[
      ...funded_list.map(getInfo),
      [
        "sec",
        " \u0394 ",
        "  $cur  ",
        "  $max  ",
        "   %   ",
        "  ~ete  ",
        ` Target ~ ${funded_list.length}/${funded_count}`
      ]
    ].map(format),
    "",
    ` home - ${util.ramFormat(getFreeRam(ns2, "home"))}/${util.ramFormat(ns2.getServerMaxRam("home"))}`,
    ` network - ${util.ramFormat(total_free_ram)}/${util.ramFormat(total_max_ram)}`,
    ` threads - ${ns2.formatNumber(Math.floor(total_free_ram / ns2.getScriptRam("weaken.js")))}/${ns2.formatNumber(Math.floor(total_max_ram / ns2.getScriptRam("weaken.js")))} threads`,
    "",
    ` bought augs x ${bought_augs_sans_nfg}, ${num_other_augs}/100 installed, NFG x ${ns2.getResetInfo().ownedAugs.get(CON.NFG)}`,
    `${aug_info}`,
    ` ${readyFiley(ns2, "temp/installAugsReason.txt")}`,
    ""
  ].forEach((l) => ns2.print(l));
}
async function prettyOverview(ns2, timer) {
  const prsm_target = peekyPorty(ns2, "loop/prsm.js");
  const gang_info = peekyPorty(ns2, "loop/runGang.js");
  const hacknet_info = readyFiley(ns2, "temp/hacknet_info.txt");
  const date = Number(/* @__PURE__ */ new Date());
  const last_aug_time = +readyFiley(ns2, "temp/lastAugTime.txt") || date;
  const colourise = (o) => o.lines.map((l) => [`<span style = "color:${o.col}" > ${l[0]} </span>`, `<span style="color:${o.col}">${l[1]}</span>`]);
  const splitNBreak = (a, b) => [[a[0], b[0]].join("</br>"), [a[1], b[1]].join("</br>")];
  [HOOKS[0].innerHTML, HOOKS[1].innerHTML] = [
    {
      lines: [
        [`bitnode:`, `${getCurrentNode(ns2)}`],
        [`pserv:`, `${sGet(ns2).filter((s) => s.startsWith("#")).length}/${ns2.getPurchasedServerLimit()}`],
        [`w_d lvl:`, `${Math.round(3e3 * await Run(ns2, "getBitNodeMultipliers", [], "WorldDaemonDifficulty"))}`],
        [`city:`, `${ns2.getPlayer().city}`],
        [`karma:`, `${ns2.formatNumber(ns2.heart.break())}`]
      ],
      col: "cyan"
    },
    {
      lines: [
        [`target:`, `${prsm_target}`],
        [`$/s:`, `$${ns2.formatNumber(ns2.getScriptIncome("loop/prsm.js", void 0))}`],
        [`$ total:`, `${ns2.formatNumber(ns2.getMoneySources().sinceInstall.hacking)}`],
        [`xp/s:`, `${ns2.formatNumber(ns2.getTotalScriptExpGain())}`],
        [`scripts:`, `${sGet(ns2).reduce((a, b) => a + ns2.ps(b).length, 0)}`]
      ],
      col: "red"
    },
    {
      lines: [
        [`hN Servers:`, `${hacknet_info.num}`],
        [`hashes/Max:`, `${hacknet_info.hashes}`],
        [`hashes/s:`, `${ns2.formatNumber(hacknet_info.prod)}`],
        [`profit:`, `$${ns2.formatNumber(hacknet_info.profit)}`]
      ],
      col: "green"
    },
    {
      lines: [
        [`status:`, `${gang_info?.cycle ?? "~"}`],
        [`members:`, `${gang_info?.size ?? "~"}`],
        [`power:`, `${ns2.formatNumber(gang_info?.power ?? 0, 0)}/${ns2.formatNumber(gang_info?.nextpower ?? 0, 0)}`],
        [`territory:`, `${ns2.formatNumber(gang_info?.territory ?? 0 * 100) ?? "~"}%`],
        [`warfare?:`, `${gang_info?.tw ?? "~"}`],
        [`profit:`, `$${ns2.formatNumber(ns2.getMoneySources().sinceStart.gang ?? 0)}`]
      ],
      col: "magenta"
    },
    {
      lines: [
        [`${util.tickString(timer)}`, `cycle #${Math.floor(timer / 30)}`],
        [`gvnr uptime:`, `${util.digiClock(timer * 1e3)}`],
        [`t+ Augbuy:`, `${!!(date - last_aug_time) ? util.digiClock(date - last_aug_time) : "N/A"}`],
        [`t+ Install:`, `${util.digiClock(date - ns2.getResetInfo().lastAugReset)}`],
        [`t+ Bitnode:`, `${util.digiClock(date - ns2.getResetInfo().lastNodeReset)}`]
      ],
      col: "yellow"
    }
  ].flatMap(colourise).reduce(splitNBreak);
}
async function scriptLoop(ns2, is_first_start) {
  await ["contracts.js", ...CON.ONESHOT_FUNCTIONS.map((s) => `oneshot/${s}.js`)].reduce(
    async (last, script) => (await last, is_first_start && ns2.tprintf(`${util.ansi.y}starting ${script} `), await (async (runpid) => !!runpid ? (await ns2.nextPortWrite(runpid), is_first_start && (await util.slp(70 * Math.random()), ns2.tprintf(`${util.ansi.g}${script} passed init`))) : ns2.tprintf(`${util.ansi.r} !!${script} DID NOT RUN!!`))(ns2.run(script))),
    void 0
  ), CON.LOOP_FUNCTIONS.map((s) => `loop/${s}.js`).forEach((script) => !ns2.isRunning(script) && ns2.run(script)), is_first_start && (ns2.print(`${util.ansi.m} Welcome to gnvr.js!`), ns2.tprintf(`${util.ansi.g}*** Startup Complete *** `), await util.slp(1e3), ns2.run("util/neofetch.js"));
}
async function graft(ns2, g = ns2.grafting) {
  !await is_Busy(ns2) && ns2.singularity.travelToCity("New Tokyo") && [
    "QLink",
    "ECorp HVMind Implant",
    "Xanipher",
    "OmniTek InfoLoad",
    "violet Congruity Implant"
  ].some(
    (aug) => g.graftAugmentation(aug, false)
  );
}
async function factWork(ns2, s = ns2.singularity) {
  const available_augs = readyFiley(ns2, "temp/availableAugs.txt");
  const target_faction = available_augs.reduce(
    (a, b) => b.fact.name != CON.GANG_NAME && b.repdelta > a.repdelta ? b : a,
    { repdelta: 0 }
  ).fact?.name;
  !await is_Busy(ns2) && !!target_faction && (s.stopAction(), ["field", "security", "hacking"].some(
    (job) => s.workForFaction(available_augs.includes(CON.TRP) ? "Daedalus" : target_faction, job, false)
  ));
}
async function donate(ns2, s = ns2.singularity) {
  const availableAugs2 = readyFiley(ns2, "temp/availableAugs.txt");
  const rep_multi = await Run(ns2, "getBitNodeMultipliers", [], "RepToDonateToFaction");
  const nfginfo = readyFiley(ns2, "temp/nfgInfo.txt");
  const donatefaction = "The Black Hand";
  s.getFactionFavor(donatefaction) >= 150 * rep_multi && s.getFactionRep(donatefaction) < nfginfo.rep && s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 1e11)) && ns2.tprintf(
    `${util.ansi.m}Donated $${ns2.formatNumber(Math.max(nfginfo.cost, 1e11))} to ${donatefaction} (grinding NFG)`
  ), // Donate to factions for augs
  availableAugs2.forEach(
    (aug) => aug.fact.name != CON.GANG_NAME && s.getFactionFavor(aug.fact.name) > 150 * rep_multi && aug.repdelta > 0 && s.donateToFaction(aug.fact.name, 1e11) && ns2.tprintf(`${util.ansi.m}Donated $100B to ${aug.fact.name} `)
  );
}
async function installAugs(ns2) {
  const date = Number(/* @__PURE__ */ new Date());
  const timestamp2 = Date().slice(4, 24);
  const augs_array = readyFiley(ns2, "temp/availableAugs.txt").filter((aug) => aug.fact.name != CON.GANG_NAME);
  const bought_augs = readyFiley(ns2, "temp/boughtAugs.txt");
  const time_since_last_aug = date - +(readyFiley(ns2, "temp/lastAugTime.txt") ?? date);
  const lowest_price = augs_array.reduce((a, b) => a.aug != CON.TRP && a?.price < b?.price ? a : b, Infinity)?.price ?? 0;
  const fav_to_donate = 150 * await Run(ns2, "getBitNodeMultipliers", [], "RepToDonateToFaction");
  const timeout_log = `timeout - $${ns2.formatNumber(ns2.getServerMoneyAvailable("home"))} /$${ns2.formatNumber(lowest_price)}, multi x${Math.floor(+readyFiley(ns2, "temp/priceRatio.txt"))} - ${timestamp2}`;
  const favour_log = (aug) => `increased ${aug.fact.name} favour by ${Math.floor(aug.fact.favdelta)} to ${Math.floor(aug.fact.favdelta + aug.fact.fav)} - ${timestamp2}`;
  const checkFavour = () => augs_array.some(
    (aug) => aug.fact.fav < fav_to_donate && (aug.fact.favdelta >= 50 || fav_to_donate < aug.fact.favdelta + aug.fact.fav) && (writeLog(favour_log(aug)), true)
  );
  const checkTimeout = () => time_since_last_aug > 18e5 && lowest_price > ns2.getServerMoneyAvailable("home") && (writeLog(timeout_log), true);
  const writeLog = (log) => ns2.write("temp/installAugsReason.txt", `installAugs #${1 + +readyFiley(ns2, "temp/installCounter.txt")}: ${log}`, "w");
  bought_augs.includes(CON.TRP) && (writeLog("installed The Red Pill"), await Run(ns2, "singularity.softReset", ["rset.js"])), // if have TRP then install asap
  !await is_Busy(ns2) && !!bought_augs.length && (checkTimeout() || checkFavour()) && (ns2.write("temp/installCounter.txt", (1 + +readyFiley(ns2, "temp/installCounter.txt")).toString(), "w"), ns2.write("report/installAugsLog.txt", readyFiley(ns2, "temp/installAugsReason.txt") + "\n", "a"), await Run(ns2, "singularity.installAugmentations", ["rset.js"]));
}
function buyAugs(ns2, s = ns2.singularity) {
  const odd_factions = ["Bladeburners", "Church of the Machine God"];
  const availableAugs2 = readyFiley(ns2, "temp/availableAugs.txt");
  const timeStamp = () => ns2.write("temp/lastAugTime.txt", "" + Date.now(), "w");
  const termPrint = (aug) => ns2.tprintf(
    `${util.ansi.m}Purchased ${util.ansi.c}${aug.aug}${util.ansi.m} from ${aug.fact.name} for $${ns2.formatNumber(aug.price)}`
  );
  const termPrintNFG = (faction) => ns2.tprintf(
    `${util.ansi.m}Purchased ${util.ansi.c}${CON.NFG}${util.ansi.m} from ${faction} for $${ns2.formatNumber(s.getAugmentationPrice(CON.NFG))}`
  );
  ns2.getPlayer().factions.forEach(
    (f) => f != CON.GANG_NAME && s.purchaseAugmentation(f, CON.NFG) && (timeStamp(), termPrintNFG(f))
  ), availableAugs2.forEach(
    (aug) => s.purchaseAugmentation(aug.fact.name, aug.aug) && (timeStamp(), termPrint(aug))
  ), odd_factions.forEach(
    (fac) => s.getAugmentationsFromFaction(fac).forEach((aug) => s.purchaseAugmentation(fac, aug))
  );
}
async function ownedAugs(ns2) {
  const wrt = async (file, data) => await Run(ns2, "write", [file, JSON.stringify(data), "w"]);
  !await Run(ns2, "fileExists", ["temp/installCounter.txt"]) && wrt("temp/installCounter.txt", 0), wrt(
    "temp/boughtAugs.txt",
    (await Run(ns2, "singularity.getOwnedAugmentations", [1])).slice(
      (await Run(ns2, "singularity.getOwnedAugmentations", [0])).length
    )
  ), wrt(
    "temp/priceRatio.txt",
    await Run(ns2, "singularity.getAugmentationPrice", ["Combat Rib I"]) / await Run(ns2, "singularity.getAugmentationBasePrice", ["Combat Rib I"])
  ), wrt("temp/ownedAugs.txt", await Run(ns2, "singularity.getOwnedAugmentations", [1])), wrt("temp/installedAugs.txt", await Run(ns2, "singularity.getOwnedAugmentations", [0])), wrt("temp/nfgInfo.txt", {
    cost: await Run(ns2, "singularity.getAugmentationPrice", [CON.NFG]),
    rep: await Run(ns2, "singularity.getAugmentationRepReq", [CON.NFG])
  });
}
async function availableAugs(ns2, s = ns2.singularity) {
  const owned_augs = readyFiley(ns2, "temp/ownedAugs.txt");
  const forbidden_factions = ["Shadows of Anarchy", "Bladeburners", "Church of the Machine God"];
  const aug_object = ns2.getPlayer().factions.filter((faction) => !forbidden_factions.includes(faction)).flatMap(
    (faction) => s.getAugmentationsFromFaction(faction).filter((aug) => CON.AUGS_TO_BUY.includes(aug) && !owned_augs.includes(aug)).map((augment) => ({
      aug: augment,
      price: s.getAugmentationPrice(augment),
      repreq: s.getAugmentationRepReq(augment),
      repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
      fact: {
        name: faction,
        fav: s.getFactionFavor(faction),
        favdelta: s.getFactionFavorGain(faction)
      }
    }))
  );
  ns2.write("temp/availableAugs.txt", JSON.stringify(aug_object ?? []), "w");
}
async function backdoor(n) {
  ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I", "home"].map(n.getServer).forEach(
    (s) => !s.backdoorInstalled && s.hasAdminRights && n.getHackingLevel() > s.requiredHackingSkill && !n.isRunning("util/bd.js", "home", s.hostname) && n.run("util/bd.js", { threads: 1, ramOverride: 5.8 }, s.hostname)
  );
}
function hacknetShindigs(ns2, h = ns2.hacknet) {
  const node_array = util.getIndexArray(h.numNodes());
  const profits = ns2.getMoneySources().sinceInstall.hacknet + ns2.getMoneySources().sinceInstall.hacknet_expenses;
  const server_obj = sGet(ns2).map((server) => ({
    name: server,
    money: ns2.getServerMaxMoney(server),
    sec: ns2.getServerMinSecurityLevel(server)
  }));
  const moneytargetserver = server_obj.reduce((a, b) => a.money < b.money ? a : b).name;
  const sectargetserver = server_obj.reduce((a, b) => a.sec > b.sec ? a : b).name;
  const info = {
    num: h.numNodes(),
    hashes: `${ns2.formatNumber(h.numHashes())}/${ns2.formatNumber(h.hashCapacity(), 0)}`,
    prod: node_array.reduce((a, n) => a + h.getNodeStats(n).production, 0),
    profit: profits
  };
  const upMoney = () => ns2.getServerMaxMoney(moneytargetserver) < 1e13 && h.spendHashes("Increase Maximum Money", moneytargetserver) && upMoney();
  const downSec = () => ns2.getServerMinSecurityLevel(sectargetserver) > 1 && h.spendHashes("Reduce Minimum Security", sectargetserver) && downSec();
  const nodeBuy = () => h.purchaseNode() + 1 && nodeBuy();
  const upParts = () => ["Level", "Core", "Ram", "Cache"].forEach((part) => node_array.forEach((n) => h[`upgrade${part}`](n) && upParts()));
  profits > -1 && (upMoney(), downSec(), nodeBuy(), upParts()), ns2.write("temp/hacknet_info.txt", JSON.stringify(info), "w");
}
async function steves(ns2) {
  const [s, b, g] = [ns2.sleeve, ns2.bladeburner, ns2.gang];
  const steves2 = util.getIndexArray(8).sort((a, b2) => s.getSleeve(b2).storedCycles - s.getSleeve(a).storedCycles);
  const get_low_skill = (steve) => ["strength", "defense", "dexterity", "agility"].reduce(
    (a, skill) => s.getSleeve(steve).skills[skill] < 25 ? skill : a,
    false
  );
  const try_train = (steve) => ((skill) => skill && (s.travel(steve, "Sector-12"), s.setToGymWorkout(steve, "Powerhouse Gym", skill.toString())))(get_low_skill(steve));
  const try_stabbin = (steve) => !g.inGang() ? s.setToCommitCrime(steve, "Homicide") : false;
  const bb_infil = (steve) => b.inBladeburner() && !steves2.map((steve2) => s.getTask(steve2)).some((task) => task?.type === "INFILTRATE") && s.setToBladeburnerAction(steve, "Infiltrate synthoids");
  const bb_contracts = (steve) => b.inBladeburner() && b.getContractNames().some(
    (contract) => steves2.every((steve2) => s.getTask(steve2)?.actionName !== contract) && b.getActionCountRemaining("Contract", contract) && s.setToBladeburnerAction(steve, "Take on contracts", contract)
  );
  const recover_or_idle = (steve) => s.getSleeve(steve).shock ? s.setToShockRecovery(steve) : s.setToIdle(steve);
  const buy_augs = (steve) => s.getSleevePurchasableAugs(steve).sort((a, b2) => a.cost - b2.cost).forEach((aug) => s.purchaseSleeveAug(steve, aug.name));
  steves2.forEach((steve) => s.setToIdle(steve)), steves2.forEach((steve) => (!s.getSleeve(steve).shock && buy_augs(steve), s.getSleeve(steve).shock > 90 ? recover_or_idle(steve) : try_train(steve) || try_stabbin(steve) || bb_infil(steve) || bb_contracts(steve) || (s.getSleeve(steve).shock ? s.setToShockRecovery(steve) : s.setToIdle(steve))));
}
async function bburner(ns2) {
  const [s, b] = [ns2.singularity, ns2.bladeburner];
  const goTrain = async () => (await Run(ns2, "singularity.stopAction"), await Run(ns2, "singularity.travelToCity", ["Sector-12"]), await Run(ns2, "singularity.gymWorkout", [
    "Powerhouse Gym",
    ["Defense", "Strength", "Dexterity", "Agility"].reduce((a, b2) => {
      const getSkill = (str) => ns2.getPlayer().skills[str.toLowerCase()];
      return getSkill(a) < getSkill(b2) ? a : b2;
    }),
    0
  ]));
  const upSkill = () => b.upgradeSkill(
    b.getSkillNames().reduce((a, c) => b.getSkillUpgradeCost(a) < b.getSkillUpgradeCost(c) ? a : c)
  ) && upSkill();
  const doOp = async (op) => !op ? d43m0nD357r0y(ns2) : (([a, c]) => a + c > 1.8)(b.getActionEstimatedSuccessChance("BlackOps", b.getNextBlackOp().name)) && !await is_Busy(ns2) && (s.stopAction(), b.startAction("BlackOps", b.getNextBlackOp().name));
  b.joinBladeburnerDivision(), !b.inBladeburner() ? await goTrain() : (upSkill(), await doOp(b.getNextBlackOp()?.name));
}
async function stan(ns2, s = ns2.stanek) {
  ns2.disableLog("ALL"), ns2.enableLog("exec"), ns2.run("lsg.js");
  s.acceptGift() || (await ns2.sleep(1e3), await stan(ns2));
  const spare_threads = Math.floor((getFreeRam(ns2, "home") - 50) / ns2.getScriptRam("chrg.js"));
  const target = s.activeFragments().filter((f) => f.id < 100).reduce((a, b) => a.numCharge < b.numCharge ? a : b, { numCharge: NaN, x: NaN, y: NaN });
  !!target && (spare_threads > 0 && !isNaN(target.numCharge) ? ns2.exec("chrg.js", "home", spare_threads, target.x, target.y) : ns2.print("no threads! skipping...")), ns2.writePort(ns2.pid, ""), await util.slp(1e4), await stan(ns2);
}
async function runGang(n, g = n.gang) {
  const tryRecruit = (name = CON.MEMBER_NAMES[Math.floor(Math.random() * CON.MEMBER_NAMES.length)]) => g.getMemberNames().includes(name) ? tryRecruit() : g.recruitMember(name) && n.tprintf(`${util.ansi.r}Recruited ${util.ansi.g}${name}`);
  const setTW = () => g.setTerritoryWarfare(Object.keys(other_gang_info()).every((h) => g.getChanceToWinClash(h) >= 0.5));
  const slp = async (t) => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1));
  const other_gang_info = g.getOtherGangInformation;
  const tick = async (q = () => Object.values(other_gang_info()).reduce((a, b) => a + b.power, 0), l = q()) => (await n.sleep(50), l == q() && await tick());
  const focus = () => g.getMemberNames().length > 9 ? "moneyGain" : "respectGain";
  const assignJob = (task) => (g.getMemberNames().forEach(
    (member) => (g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)), ["agi", "str", "def", "dex"].reduce((a, b) => a + g.getAscensionResult(member)?.[b], 0) > 6 && g.ascendMember(member), g.setMemberTask(
      member,
      task ?? g.getTaskNames().reduce(
        (a, b) => (g.setMemberTask(member, b), ((gain) => gain < a.dat ? a : { name: b, dat: gain })(g.getMemberInformation(member)[focus()]))
      ).name
    ))
  ), printToPort(
    task?.split(" ").map((a) => a[0]).join("") ?? "Jobs"
  ));
  const printToPort = (job) => (n.clearPort(n.pid), n.writePort(n.pid, {
    cycle: job,
    size: g.getMemberNames().length,
    power: g.getGangInformation().power,
    nextpower: Object.values(other_gang_info()).reduce((a, b) => a > b.power ? a : b.power, 0),
    territory: g.getGangInformation().territory * 100,
    tw: g.getGangInformation().territoryWarfareEngaged
  }));
  (g.inGang() || g.createGang(CON.GANG_NAME)) && (tryRecruit(), setTW(), assignJob(void 0), await slp(15e3), assignJob("Train Combat"), await slp(4500), assignJob("Territory Warfare"), await tick(), await runGang(n));
}
async function golfedGang(n, g = n.gang, s = async (t) => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1)), a = (j) => g.getMemberNames().map(
  (m) => (g.getEquipmentNames().map((i) => g.purchaseEquipment(m, i)), ["agi", "str", "def", "dex"].reduce((a2, b) => a2 + g.getAscensionResult(m)?.[b], 0) > 6 && g.ascendMember(m), g.setMemberTask(
    m,
    j ?? g.getTaskNames().reduce(
      (a2, b) => (g.setMemberTask(m, b), (i) => i < a2.g ? a2 : { n: b, g: i })(
        g.getMemberInformation(m)[g.getMemberNames().length > 9 ? "moneyGain" : "respectGain"]
      )
    ).n
  ))
)) {
  (g.inGang() || g.createGang("Slum Snakes")) && (g.recruitMember(Math.random()), g.setTerritoryWarfare(Object.keys(g.getOtherGangInformation()).every((h) => g.getChanceToWinClash(h) > 0.5)), a(void 0), await s(15e3), a("Train Combat"), await s(4500), a("Territory Warfare"), await g.nextUpdate(), await runGang(n));
}
async function prsm(ns2) {
  ns2.disableLog("ALL");
  ns2.enableLog("exec");
  const hack_percentage = 0.01;
  const batch_delay = 20;
  const write_workers = () => ["hack", "grow", "weaken"].forEach(
    (script) => (!ns2.fileExists(script) && ns2.write(
      `${script}.js`,
      `export const main = async ns => await ns.${script}(ns.args[0], { additionalMsec: ns.args[1] })`,
      "w"
    ), sGet(ns2).forEach((server) => ns2.scp(`${script}.js`, server)))
  );
  const getHostRam = (server) => Math.floor(getFreeRam(ns2, server) - (server == "home" ? 100 : 0));
  const modPlayer = (player, threads, target) => Object.fromEntries(
    Object.entries(player).map(
      ([key, entry]) => (key == "exp" && (entry.hacking += ns2.formulas.hacking.hackExp(target, player) * threads), key == "skills" && (entry.hacking = ns2.formulas.skills.calculateSkill(player.exp.hacking, player.mults.hacking)), [key, entry])
    )
  );
  const sendJobs = (b_obj, p_obj) => (b_obj.threads = Math.min(b_obj.available, b_obj.script.jobs), b_obj.available -= b_obj.threads, b_obj.script.jobs -= b_obj.threads, b_obj.threads > 0 && !!ns2.exec(`${b_obj.script.name}.js`, b_obj.host, b_obj.threads, b_obj.target.hostname, b_obj.script.time) ? b_obj.available > 0 && b_obj.script.jobs > 1 ? sendJobs(b_obj, modPlayer(p_obj, b_obj.threads, b_obj.target)) : modPlayer(p_obj, b_obj.threads, b_obj.target) : p_obj);
  async function runLoop(run_p_obj) {
    !ns2.isRunning("share.js") && ns2.run("share.js", Math.floor(0.25 * (getFreeRam(ns2, "home") / ns2.getScriptRam("share.js"))) || 1);
    write_workers();
    const host_list = sGet(ns2).filter((server) => ns2.hasRootAccess(server) && server.substring(0, 7) != "hacknet");
    const getAvailableThreads = (script) => host_list.reduce((a, server) => a + Math.floor(getHostRam(server) / ns2.getScriptRam(`${script.name}.js`)), 0);
    const target = ns2.getServer(
      host_list.reduce((a, b) => {
        const rank = (s) => ns2.getServerMaxMoney(s) / ns2.getServerMinSecurityLevel(s);
        return ns2.getServerRequiredHackingLevel(b) <= ns2.getHackingLevel() / 2 && rank(a) < rank(b) ? b : a;
      })
    );
    const clamp = (n) => n < 1 || n == Infinity ? 1 : n;
    const hack_jobs = 1;
    const grow_jobs = 1 + ns2.growthAnalyze(target.hostname, 1 / (1 - ns2.formulas.hacking.hackPercent(target, run_p_obj) * hack_jobs));
    const sec_jobs = (target.hackDifficulty - target.minDifficulty) / ns2.weakenAnalyze(1);
    const wekn_jobs = sec_jobs + hack_jobs * 0.04 + grow_jobs * 0.08;
    const batch_total = hack_jobs + grow_jobs + wekn_jobs;
    const squish = (script, jobs) => Math.floor(batch_total > getAvailableThreads(script) ? jobs * (getAvailableThreads(script) / batch_total) : jobs);
    const jobs_array = [
      {
        name: "hack",
        jobs: squish("hack", hack_jobs),
        time: ns2.getHackTime(target.hostname) * 3
      },
      {
        name: "grow",
        jobs: squish("grow", grow_jobs),
        time: ns2.getHackTime(target.hostname) * 0.8
      },
      { name: "weaken", jobs: squish("weaken", wekn_jobs), time: 0 }
    ];
    const batch_complete_p_obj = jobs_array.reduce(
      (_, script) => host_list.reduce(
        (_2, host) => (
          // Iterate through hosts and fill each one with jobs until done
          sendJobs(
            {
              available: Math.floor(getHostRam(host) / ns2.getScriptRam(`${script.name}.js`)),
              script,
              host,
              target
            },
            run_p_obj
          )
        ),
        {}
      ),
      {}
    );
    ns2.clearPort(ns2.pid), ns2.writePort(ns2.pid, target.hostname), await util.slp(batch_delay), await runLoop(batch_complete_p_obj);
  }
  await runLoop(await Run(ns2, "getPlayer"));
}
async function neofetch(ns2) {
  const blk = "\u2588";
  const col_arr = [util.ansi.k, util.ansi.r, util.ansi.g, util.ansi.y, util.ansi.b, util.ansi.m, util.ansi.c];
  const dateFormat = (date) => `${Math.floor(date / (60 * 24))} days, ${Math.floor(date / 60 % 24)} hours, ${Math.floor(date % 60)} mins`;
  const pad = ` `.repeat(35);
  const title = `muesli@home`;
  const dashes = util.ansi.w + "-".repeat(11);
  const os = `${util.ansi.g}OS: ${util.ansi.w}Fulcrum Technologies Chapeau Linux x86_64`;
  const host = `${util.ansi.g}Host: ${util.ansi.w}${ns2.getHostname()}`;
  const kernel = `${util.ansi.g}Kernel: ${util.ansi.w}${CON.DOC.title}`;
  const uptime = `${util.ansi.g}Uptime: ${util.ansi.w}${dateFormat(ns2.getPlayer().totalPlaytime / (1e3 * 60))}`;
  const packages = `${util.ansi.g}Packages: ${util.ansi.w}${ns2.ls("home").length} (bitpkg)`;
  const shell = `${util.ansi.g}Shell: ${util.ansi.w}bit-sh 6.9`;
  const resolution = `${util.ansi.g}Resolution: ${util.ansi.w}${CON.WIN.innerWidth} x ${CON.WIN.innerHeight}`;
  const wm = `${util.ansi.g}WM: ${util.ansi.w}BitBurner WM`;
  const terminal = `${util.ansi.g}Terminal: ${util.ansi.w}BiTTY`;
  const cpu = `${util.ansi.g}CPU: ${util.ansi.w}Gen FT-6900x ${ns2.getServer("home").cpuCores} core`;
  const memory = `${util.ansi.g}Memory: ${util.ansi.w}${ns2.getServer("home").ramUsed * 1e3} MiB / ${ns2.getServer("home").maxRam * 1e3} MiB`;
  const ascii = [
    `${pad}${util.ansi.g}neofetch ~`,
    `    ${util.ansi.g}FFFFFFFF\\${util.ansi.r}.......${util.ansi.g}TTTTTTTT\\      ${title}`,
    `    ${util.ansi.g}FF \\_____|${util.ansi.r}:~:~:~${util.ansi.g}\\__TT \\__|     ${dashes}`,
    `    ${util.ansi.g}FF |${util.ansi.r}:=:=:=:=:=:=:=:${util.ansi.g}TT |${util.ansi.r}=\\      ${os}`,
    `   ${util.ansi.r}/${util.ansi.g}FFFFF\\${util.ansi.r}-*-*-*-*-*-*-${util.ansi.g}TT |${util.ansi.r}*-\\     ${host}`,
    `  ${util.ansi.r}/*${util.ansi.g}FF \\__|${util.ansi.r}************${util.ansi.g}TT |${util.ansi.r}***\\    ${kernel}`,
    `  ${util.ansi.r}==${util.ansi.g}FF |${util.ansi.r}====${util.ansi.g}CCCCCC\\${util.ansi.r}====${util.ansi.g}TT |${util.ansi.r}====\\   ${uptime}`,
    `  ${util.ansi.r}##${util.ansi.g}FF |${util.ansi.r}###${util.ansi.g}CCC __CC\\${util.ansi.r}###${util.ansi.g}TT |${util.ansi.r}####||  ${packages}`,
    `  ${util.ansi.r}==${util.ansi.g}\\_\\|${util.ansi.r}===${util.ansi.g}CC /${util.ansi.r}==${util.ansi.g}\\__|${util.ansi.r}==${util.ansi.g}\\_\\|${util.ansi.r}====||  ${shell}`,
    `  ${util.ansi.r}\\********${util.ansi.g}CC |${util.ansi.r}***************/\\|  ${resolution}`,
    `   ${util.ansi.r}\\*-*-*-*${util.ansi.g}CC |${util.ansi.r}-*-*-*-*-*-*-*/ /   ${wm}`,
    `    ${util.ansi.r}\\:=:=:=${util.ansi.g}CC |${util.ansi.r}:=${util.ansi.g}CC\\${util.ansi.r}=:=:=:=:/ /    ${terminal}`,
    `     ${util.ansi.r}\\~:~:~${util.ansi.g}\\CCCCCC  |${util.ansi.r}~:~:~:/ /     ${cpu}`,
    `      ${util.ansi.r}\\_____${util.ansi.g}\\_____\\/${util.ansi.r}______/ /      ${memory}`,
    `       ${util.ansi.r}\\__________________\\/`,
    pad + [...col_arr, util.ansi.d, ""].join(blk.repeat(4)),
    pad + [...col_arr, util.ansi.w, ""].join(blk.repeat(4))
  ];
  await ascii.reduce(async (a, b) => (await a, ns2.tprintf(b), util.slp(Math.random() * 10 * 7)), Promise.resolve());
}
function checkBounds(ns2, t) {
  let returnval = { x: 0, y: 0 }, x = t.x, y = t.y, w = t.width, h = t.height, otherprogs = ns2.ps().map((p) => ns2.getRunningScript(p.pid)?.tailProperties).filter((p) => p);
  otherprogs.forEach(
    (prog) => {
      if (prog.x > x + w)
        returnval.x - 50;
      if (prog.x + prog.width < x)
        returnval.x + 50;
    }
  );
  return returnval;
}
function zoomieCalc(d) {
  return d > 500 ? 1.2 : d > 7e3 ? 0.5 : d > 15e3 ? 0.2 : d > 15e3 ? 0 : 2;
}
function poopCheck(ns2, timestamp2, happiness2) {
  if (timestamp2 + 6e4 < +/* @__PURE__ */ new Date())
    return happiness2;
  return happiness2 - ns2.ps().filter((p) => p.filename === "poop.js").length;
}
async function downDog(ns, prevposx, prevposy) {
  function poop(ns2, x, y, pooppid) {
    ns2.write("poop.js", poopScript, "w"), pooppid = ns2.run("poop.js"), ns2.tail(pooppid), ns2.resizeTail(150, 100, pooppid), ns2.moveTail(x, y, pooppid);
  }
  function step(ns2, zoomievalue, target, bool = 1, randbool = true) {
    let screenratio = win.innerHeight / win.innerWidth, x = tget(ns2).x, y = tget(ns2).y;
    if (target.x > x) {
      x += rn() * zoomievalue * 2 * (10 * zoomievalue);
    } else if (target.x < x) {
      x -= rn() * zoomievalue * 2 * (10 * zoomievalue);
    }
    if (rn() - 0.5 > 0)
      bool = -1;
    if (zoomievalue && randbool) {
      x += 3 * rn() * bool;
      y += 3 * rn() * bool * screenratio;
    }
    let boundsadjust = checkBounds(ns2, tget(ns2));
    x += boundsadjust.x;
    return { dx: x, dy: win.innerHeight - 200 };
  }
  const win = eval("window");
  const doc = eval("document");
  const rn = Math.random;
  const tget = (ns2) => ns2.getRunningScript().tailProperties ?? ns2.exit();
  const names = ["Wickes", "Updog", "Mikasa", "Snuffles", "Boris", "Gnasher", "Doug", "Chester"];
  const bark = (ns2, bark2) => ns2.print(bark2);
  async function portHandle(ns2, barkval, happiness2) {
    if (ns2.peek(ns2.pid) === "NULL PORT DATA")
      return { bark: void 0, happiness: happiness2 };
    ns2.clearPort(ns2.pid);
    barkval = { bark: "*WAGS\nTAIL*", time: 1500 };
    happiness2 += 1e3;
    return { bark: barkval, happiness: happiness2 };
  }
  ns.write("petter.js", dogPetter, "w");
  const remnam = names.filter((name) => !ns.ps().map((prog) => ns.getRunningScript(prog.pid).title).includes(name));
  ns.setTitle(ns.args[0] ?? remnam[Math.round(Math.random() * remnam.length - 1)]);
  ns.getRunningScript("petter.js") ?? ns.run("petter.js");
  ns.disableLog("ALL");
  let pos = { x: void 0, y: void 0 };
  win.addEventListener("mousemove", (event) => {
    pos = { x: event.clientX - 100, y: event.clientY - 50 };
  });
  ns.tail();
  let happiness = 1e4;
  let timestamp = +/* @__PURE__ */ new Date();
  let zzzcount = 0;
  let ticker = 0;
  while (true) {
    ns.clearLog();
    const [x, y] = [tget(ns).x, tget(ns).y - 50];
    let delay = 100;
    let zoomievalue = zoomieCalc(ticker);
    const ascii = pos.x > x ? CON.DOGGO_ASCII[0] : CON.DOGGO_ASCII[1];
    let dvar = step(ns, zoomievalue, pos);
    let porthandlereturn = await portHandle(ns, delay, happiness);
    let barkval = porthandlereturn?.bark;
    happiness = porthandlereturn?.happiness;
    if (rn() * 100 > 100 - 2 * zoomievalue && !!zoomievalue) {
      barkval = { bark: '"BARK"', time: 500 };
      if (pos.x < x + 100 && pos.y < y + 100 && pos.x > x - 100 && pos.y > y - 100)
        barkval = { bark: "*LICKS\nCURSOR*", time: 700 };
      delay += 600;
    }
    happiness = poopCheck(ns, timestamp, happiness);
    if (!zoomievalue) {
      delay += 1e3;
      zzzcount > 3 ? zzzcount = 1 : zzzcount++;
      ns.print("z".repeat(zzzcount));
    } else {
      ns.print(`happiness: ${Math.round(happiness / 1e3)}`);
    }
    if (zoomievalue && rn() * 1e3 < 1)
      poop(ns, x, y + 150, void 0);
    ns.print(barkval === void 0 ? ascii : bark(ns, barkval.bark));
    ns.resizeTail(250, 200);
    ns.moveTail(dvar.dx, dvar.dy);
    barkval == void 0 ? await ns.sleep(delay) : await ns.sleep(barkval.time);
    barkval == void 0 ? ticker += 100 : ticker += barkval.time;
    if (pos.x !== prevposx && pos.y !== prevposy)
      ticker = 0;
    prevposx = pos.x, prevposy = pos.y;
    if (timestamp + 6e4 < +/* @__PURE__ */ new Date())
      timestamp = +/* @__PURE__ */ new Date();
    ns.atExit((pid = ns.pid) => (ns.kill("petter.js"), ns.closeTail(pid)));
  }
}
var poopScript = 'export async function main(ns) {ns.disableLog("ALL");ns.atExit(() => ns.closeTail(ns.pid));ns.printRaw(React.createElement("h2", {}, "\u{1F4A9}"));while(1) {ns.getRunningScript().tailProperties ?? ns.exit(); await ns.sleep(10000)}}';
var dogPetter = `/** @param {NS} ns */
export async function main(ns) {
    const win = eval("window")
    ns.disableLog('ALL')
    let pendingEvent = null;
    const schedulePet = event => {
      pendingEvent = event;
    }
    let pet = () => {
      let x = pendingEvent.clientX;
      let y = pendingEvent.clientY ;
      // TODO: check other servers too
      const processes = ns.ps();
      for (const process of processes) {
        const stuff = ns.getRunningScript(process.pid)?.tailProperties;
        if (!stuff) continue;
        if (process.filename == 'petter.js') continue;  // no self-pets
        if (x < stuff.x || x > stuff.x + stuff.width) {
          continue;
        }
        if (y < stuff.y || y > stuff.y + stuff.height) {
          continue;
        }
        ns.print("petting " + process.filename);
        ns.writePort(process.pid,"");
        break;  // only pet one process at a time
      }
      pendingEvent = null;
    };
    win.addEventListener('mousedown', schedulePet);
    ns.atExit(() => win.removeEventListener('mousedown', schedulePet));
    while (true) {
      await ns.sleep(10);
      if (pendingEvent) {
        pet();
      }
    }
}	`;
export {
  CON as CNST,
  Run,
  availableAugs,
  backdoor,
  bburner,
  bd,
  buyAugs,
  buyTOR,
  coresUp,
  d43m0nD357r0y,
  darkwebShopping,
  donate,
  downDog,
  factWork,
  factionJoin,
  golfedGang,
  graft,
  gvnr,
  hacknetShindigs,
  installAugs,
  is_Busy,
  main,
  murderate,
  neofetch,
  ownedAugs,
  pServ,
  persuade,
  prsm,
  ramUp,
  runGang,
  sGet,
  stan,
  steves,
  util,
  writeLaunchers
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2VydmVycy9ob21lL2xpYi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRmFjdGlvbldvcmtUeXBlLCBHYW5nT3RoZXJJbmZvT2JqZWN0LCBOUywgU2xlZXZlQmxhZGVidXJuZXJUYXNrIH0gZnJvbSBcIk5ldHNjcmlwdERlZmluaXRpb25zXCI7XG5leHBvcnQge1xuICBDT04gYXMgQ05TVCxcbiAgUnVuLFxuICBhdmFpbGFibGVBdWdzLFxuICBiYWNrZG9vcixcbiAgYmJ1cm5lcixcbiAgYmQsXG4gIGJ1eUF1Z3MsXG4gIGJ1eVRPUixcbiAgY29yZXNVcCxcbiAgZDQzbTBuRDM1N3IweSxcbiAgZGFya3dlYlNob3BwaW5nLFxuICBkb25hdGUsXG4gIGRvd25Eb2csXG4gIGZhY3RXb3JrLFxuICBmYWN0aW9uSm9pbixcbiAgZ29sZmVkR2FuZyxcbiAgZ3JhZnQsXG4gIGd2bnIsXG4gIGhhY2tuZXRTaGluZGlncyxcbiAgaW5zdGFsbEF1Z3MsXG4gIGlzX0J1c3ksXG4gIG1haW4sXG4gIG11cmRlcmF0ZSxcbiAgbmVvZmV0Y2gsXG4gIG93bmVkQXVncyxcbiAgcFNlcnYsXG4gIHBlcnN1YWRlLFxuICBwcnNtLFxuICByYW1VcCxcbiAgcnVuR2FuZyxcbiAgc0dldCxcbiAgc3RhbixcbiAgc3RldmVzLFxuICB1dGlsLFxuICB3cml0ZUxhdW5jaGVycyxcbn07XG50eXBlIENvbnN0YW50cyA9IHtcbiAgTkZHOiBzdHJpbmc7XG4gIFRSUDogc3RyaW5nO1xuICBHQU5HX05BTUU6IHN0cmluZztcbiAgQVVHU19UT19CVVk6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBBTExfRkFDVElPTlM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBNRU1CRVJfTkFNRVM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBMT09QX0ZVTkNUSU9OUzogcmVhZG9ubHkgc3RyaW5nW107XG4gIE9ORVNIT1RfRlVOQ1RJT05TOiByZWFkb25seSBzdHJpbmdbXTtcbiAgVVRJTF9GVU5DVElPTlM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBET0M6IERvY3VtZW50O1xuICBXSU46IFdpbmRvdztcblxuICBET0dHT19BU0NJSTogcmVhZG9ubHkgc3RyaW5nW107XG59XG5jb25zdCBDT046IENvbnN0YW50cyA9IHtcbiAgTkZHOiBcIk5ldXJvRmx1eCBHb3Zlcm5vclwiLFxuICBUUlA6IFwiVGhlIFJlZCBQaWxsXCIsXG4gIEdBTkdfTkFNRTogXCJTbHVtIFNuYWtlc1wiLFxuICBBVUdTX1RPX0JVWTogW1xuICAgIFwiU29jaWFsIE5lZ290aWF0aW9uIEFzc2lzdGFudCAoUy5OLkEpXCIsXG4gICAgXCJOdW9wdGltYWwgTm9vdHJvcGljIEluamVjdG9yIEltcGxhbnRcIixcbiAgICBcIkFEUi1WMSBQaGVyb21vbmUgR2VuZVwiLFxuICAgIFwiU3BlZWNoIEVuaGFuY2VtZW50XCIsXG4gICAgXCJXaXJlZCBSZWZsZXhlc1wiLFxuICAgIFwiQ3JhbmlhbCBTaWduYWwgUHJvY2Vzc29ycyAtIEdlbiBJXCIsXG4gICAgXCJCaXRXaXJlXCIsXG4gICAgXCJTeW5hcHRpYyBFbmhhbmNlbWVudCBJbXBsYW50XCIsXG4gICAgXCJOZXVyb3RyYWluZXIgSVwiLFxuICAgIFwiQ3JhbmlhbCBTaWduYWwgUHJvY2Vzc29ycyAtIEdlbiBJSVwiLFxuICAgIFwiQ1JUWDQyLUFBIEdlbmUgTW9kaWZpY2F0aW9uXCIsXG4gICAgXCJFbWJlZGRlZCBOZXRidXJuZXIgTW9kdWxlXCIsXG4gICAgXCJOZXVyYWwtUmV0ZW50aW9uIEVuaGFuY2VtZW50XCIsXG4gICAgXCJBcnRpZmljaWFsIFN5bmFwdGljIFBvdGVudGlhdGlvblwiLFxuICAgIFwiTmV1cm90cmFpbmVyIElJXCIsXG4gICAgXCJUaGUgQmxhY2sgSGFuZFwiLFxuICAgIFwiRW1iZWRkZWQgTmV0YnVybmVyIE1vZHVsZSBDb3JlIEltcGxhbnRcIixcbiAgICBcIkNyYW5pYWwgU2lnbmFsIFByb2Nlc3NvcnMgLSBHZW4gSVZcIixcbiAgICBcIk5ldXJhbHN0aW11bGF0b3JcIixcbiAgICBcIkVuaGFuY2VkIE15ZWxpbiBTaGVhdGhpbmdcIixcbiAgICBcIk5ldXJhbCBBY2NlbGVyYXRvclwiLFxuICAgIFwiQ3JhbmlhbCBTaWduYWwgUHJvY2Vzc29ycyAtIEdlbiBJSUlcIixcbiAgICBcIkRhdGFKYWNrXCIsXG4gICAgXCJFbWJlZGRlZCBOZXRidXJuZXIgTW9kdWxlIENvcmUgVjIgVXBncmFkZVwiLFxuICAgIFwiQml0UnVubmVycyBOZXVyb2xpbmtcIixcbiAgICBcIkNyYW5pYWwgU2lnbmFsIFByb2Nlc3NvcnMgLSBHZW4gVlwiLFxuICAgIFwiQXJ0aWZpY2lhbCBCaW8tbmV1cmFsIE5ldHdvcmsgSW1wbGFudFwiLFxuICAgIFwiQ2FzaFJvb3QgU3RhcnRlciBLaXRcIixcbiAgICBcIkF1Z21lbnRlZCBUYXJnZXRpbmcgSVwiLFxuICAgIFwiQXVnbWVudGVkIFRhcmdldGluZyBJSVwiLFxuICAgIFwiU3BlZWNoIFByb2Nlc3NvciBJbXBsYW50XCIsXG4gICAgXCJOYW5vZmliZXIgV2VhdmVcIixcbiAgICBcIkluZm9Mb2FkXCIsXG4gICAgXCJBRFItVjIgUGhlcm9tb25lIEdlbmVcIixcbiAgICBcIkVDb3JwIEhWTWluZCBJbXBsYW50XCIsXG4gICAgXCJRTGlua1wiLFxuICAgIFwibmlja29mb2xhcyBDb25ncnVpdHkgSW1wbGFudFwiLFxuICAgIFwiVGhlIFJlZCBQaWxsXCIsXG4gIF0sXG4gIEFMTF9GQUNUSU9OUzogW1xuICAgIFwiSWxsdW1pbmF0aVwiLFxuICAgIFwiRGFlZGFsdXNcIixcbiAgICBcIlRoZSBDb3ZlbmFudFwiLFxuICAgIFwiRUNvcnBcIixcbiAgICBcIk1lZ2FDb3JwXCIsXG4gICAgXCJCYWNobWFuICYgQXNzb2NpYXRlc1wiLFxuICAgIFwiQmxhZGUgSW5kdXN0cmllc1wiLFxuICAgIFwiTldPXCIsXG4gICAgXCJDbGFya2UgSW5jb3Jwb3JhdGVkXCIsXG4gICAgXCJPbW5pVGVrIEluY29ycG9yYXRlZFwiLFxuICAgIFwiRm91ciBTaWdtYVwiLFxuICAgIFwiS3VhaUdvbmcgSW50ZXJuYXRpb25hbFwiLFxuICAgIFwiRnVsY3J1bSBTZWNyZXQgVGVjaG5vbG9naWVzXCIsXG4gICAgXCJCaXRSdW5uZXJzXCIsXG4gICAgXCJUaGUgQmxhY2sgSGFuZFwiLFxuICAgIFwiTml0ZVNlY1wiLFxuICAgIFwiQWV2dW1cIixcbiAgICBcIkNob25ncWluZ1wiLFxuICAgIFwiSXNoaW1hXCIsXG4gICAgXCJOZXcgVG9reW9cIixcbiAgICBcIlNlY3Rvci0xMlwiLFxuICAgIFwiVm9saGF2ZW5cIixcbiAgICBcIlNwZWFrZXJzIGZvciB0aGUgRGVhZFwiLFxuICAgIFwiVGhlIERhcmsgQXJteVwiLFxuICAgIFwiVGhlIFN5bmRpY2F0ZVwiLFxuICAgIFwiU2lsaG91ZXR0ZVwiLFxuICAgIFwiVGV0cmFkc1wiLFxuICAgIFwiU2x1bSBTbmFrZXNcIixcbiAgICBcIk5ldGJ1cm5lcnNcIixcbiAgICBcIlRpYW4gRGkgSHVpXCIsXG4gICAgXCJDeWJlclNlY1wiLFxuICAgIFwiQmxhZGVidXJuZXJzXCIsXG4gICAgXCJDaHVyY2ggb2YgdGhlIE1hY2hpbmUgR29kXCIsXG4gICAgXCJTaGFkb3dzIG9mIEFuYXJjaHlcIixcbiAgXSxcbiAgTUVNQkVSX05BTUVTOiBbXG4gICAgXCJUb255IEhhcnJpc29uXCIsXG4gICAgXCJLYXRoeSBSaW5kaG9vcHNcIixcbiAgICBcIkppbW15IExhemVyc1wiLFxuICAgIFwiTmFib28gdGhlIEVuaWdtYVwiLFxuICAgIFwiSGVsZW4gQmFja1wiLFxuICAgIFwiVHVidWxhciBUb255XCIsXG4gICAgXCJTdGFiYnkgQ2xhcmtzb25cIixcbiAgICBcIkNhcmxcIixcbiAgICBcIlBvb3BzIE1jZ2hlZVwiLFxuICAgIFwiSGFpcnkgRGFuXCIsXG4gICAgXCJXaWxsIEJhcnJvd1wiLFxuICAgIFwiQmFycnkgVGhyZWUtTmlwc1wiLFxuICAgIFwiTWFya2t1c1wiLFxuICAgIFwiUGF0cmljaWEgTydWaW9sZW5jZVwiLFxuICAgIFwiUGF0IE8nQ2FrZVwiLFxuICAgIFwiUmF5IEZyaWRnZXJhdG9yXCIsXG4gICAgXCJTYW1teSB0aGUgU3F1aWRcIixcbiAgICBcIlNsYW50eSBCb2IgKG9uZSBsZWcpXCIsXG4gICAgXCJCYXN0YXJkIE1hblwiLFxuICAgIFwiTWFuLVNwaWRlclwiLFxuICAgIFwiTm9uLUJpbyBCcnVjZVwiLFxuICAgIFwiUm9ja2hlYWQgUnVtcGxlXCIsXG4gICAgXCJKb2V5IFRhZ2xpYXRlbGxlXCIsXG4gICAgXCJKb2hubnkgU2VnbWVudFwiLFxuICBdLFxuICBMT09QX0ZVTkNUSU9OUzogW1wic3RhblwiLCBcInJ1bkdhbmdcIiwgXCJwcnNtXCIsIC8qXCJkb3duRG9nXCIqL10sXG4gIE9ORVNIT1RfRlVOQ1RJT05TOiBbXG4gICAgXCJkYXJrd2ViU2hvcHBpbmdcIixcbiAgICBcIm93bmVkQXVnc1wiLFxuICAgIFwiYXZhaWxhYmxlQXVnc1wiLFxuICAgIFwiaGFja25ldFNoaW5kaWdzXCIsXG4gICAgXCJwU2VydlwiLFxuICAgIFwiZmFjdGlvbkpvaW5cIixcbiAgICBcImZhY3RXb3JrXCIsXG4gICAgXCJtdXJkZXJhdGVcIixcbiAgICBcImQ0M20wbkQzNTdyMHlcIixcbiAgICBcInJhbVVwXCIsXG4gICAgXCJjb3Jlc1VwXCIsXG4gICAgXCJidXlUT1JcIixcbiAgICBcImJhY2tkb29yXCIsXG4gICAgXCJncmFmdFwiLFxuICAgIFwiZG9uYXRlXCIsXG4gICAgXCJidXlBdWdzXCIsXG4gICAgXCJpbnN0YWxsQXVnc1wiLFxuICAgIFwicGVyc3VhZGVcIixcbiAgICBcInN0ZXZlc1wiLFxuICAgIFwiYmJ1cm5lclwiLFxuICBdLFxuICBVVElMX0ZVTkNUSU9OUzogW1wiYmRcIiwgXCJndm5yXCIsIFwibmVvZmV0Y2hcIl0sXG4gIERPR0dPX0FTQ0lJXG4gICAgOiBbXG4gICAgICBgICAgIF9fX2AsIGAgX18vXywgIFxcYC4gIC4tXCJcIlwiLS5gLCBgIFxcXFxfLCAgfCBcXFxcLScgIC8gICApXFxgLScpYCwgYCAgXCJcIikgXFxgXCJcXGAgICAgXFwgICgoXFxgXCJcXGBgLCBgIF9fX1kgICwgICAgLic3IC98YCwgYChfLF9fXy8uLi4tXFxgIChfL18vICAgICAgICAgYCxcbiAgICAgIGAgICAgICAgICAgICAgICAgIF9fX2AsIGAgICAgICAuLVwiXCJcIi0uICAuXFxgICxfXFxcXF9fYCwgYCAoJy1cXGAoICAgXFxcXCAgJy0vIHwgICAsXy8gICBgLCBgICAgXFxgXCJcXGApKSAgICAgICBcXGBcIlxcYCAoXCJcImAsIGAgICAgICB8XFxcXCA0Jy4gICAgLCAgWV9fX2AsIGAgICAgICBcXFxcX1xcXFxfKSBcXGAtLi4uXFxcXF9fXyxfKWAsXG4gICAgXSxcbiAgV0lOOiBldmFsKFwid2luZG93XCIpLFxuICBET0M6IGV2YWwoXCJkb2N1bWVudFwiKSxcbn0gYXMgY29uc3Q7XG5jb25zdCBIT09LUyA9IFtcbiAgQ09OLkRPQy5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3LWV4dHJhLWhvb2stMFwiKSxcbiAgQ09OLkRPQy5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3LWV4dHJhLWhvb2stMVwiKSxcbl07XG5cbmZ1bmN0aW9uIG1haW4objogTlMpOiB2b2lkIHtcbiAgKFxuICAgIG4ucHMoKS5mb3JFYWNoKChzKSA9PiBuLmNsb3NlVGFpbChzLnBpZCkpLFxuICAgIHNHZXQobikuZm9yRWFjaCgocykgPT4gbi5raWxsYWxsKHMsIHRydWUpKSxcbiAgICAhbi5hcmdzLmxlbmd0aCAmJiAod3JpdGVMYXVuY2hlcnMobiksIG4ucnVuKFwidXRpbC9ndm5yLmpzXCIpKVxuICApXG59XG5cbmZ1bmN0aW9uIHdyaXRlTGF1bmNoZXJzKG5zOiBOUyk6IHZvaWQge1xuICAoXG4gICAgW1wib25lc2hvdFwiLCBcImxvb3BcIiwgXCJ1dGlsXCJdLmZvckVhY2goKGRpcikgPT4gbnMubHMoXCJob21lXCIsIGRpcikuZm9yRWFjaCgocykgPT4gbnMucm0ocykpKSxcbiAgICAoKHdydCkgPT4gKFxuICAgICAgW1xuICAgICAgICB7IGZuOiBDT04uVVRJTF9GVU5DVElPTlMsIGRpcjogXCJ1dGlsXCIgfSxcbiAgICAgICAgeyBmbjogQ09OLkxPT1BfRlVOQ1RJT05TLCBkaXI6IFwibG9vcFwiIH0sXG4gICAgICAgIHsgZm46IENPTi5PTkVTSE9UX0ZVTkNUSU9OUywgZGlyOiBcIm9uZXNob3RcIiB9XG4gICAgICBdXG4gICAgICAgIC5mb3JFYWNoKChjYXQpID0+IGNhdC5mbi5mb3JFYWNoKGZuID0+IHdydChjYXQuZGlyLCBmbikpKVxuICAgIClcbiAgICApKCh0eXBlOiBzdHJpbmcsIGZ1bmM6IHN0cmluZykgPT5cbiAgICAgIG5zLndyaXRlKFxuICAgICAgICBgJHt0eXBlfS8ke2Z1bmN9LmpzYCxcbiAgICAgICAgYGltcG9ydCB7ICR7ZnVuY30gfSBmcm9tIFwibGliLmpzXCI7IGV4cG9ydCBjb25zdCBtYWluID0gYXN5bmMgbnMgPT4gKG5zLmF0RXhpdCgoKSA9PiAobnMuY2xlYXJQb3J0KG5zLnBpZCksbnMud3JpdGVQb3J0KG5zLnBpZCwgXCJcIikpKSwgYXdhaXQgJHtmdW5jfShucyxucy5hcmdzWzBdKSk7YCxcbiAgICAgICAgXCJ3XCIsXG4gICAgICApLFxuICAgIClcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBndm5yKG5zOiBOUyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCByZWZyZXNoX2RlbGF5ID0gMTtcbiAgY29uc3QgcnVuTG9vcCA9IGFzeW5jIChpc19maXJzdF9zdGFydCwgdGltZXIpID0+IChcbiAgICBwcmV0dHlMb2dzKG5zKSxcbiAgICBhd2FpdCBwcmV0dHlPdmVydmlldyhucywgdGltZXIpLFxuICAgIHRpbWVyICUgNDAgPT0gMCAmJiAoYXdhaXQgc2NyaXB0TG9vcChucywgaXNfZmlyc3Rfc3RhcnQpKSxcbiAgICBhd2FpdCB1dGlsLnNscChyZWZyZXNoX2RlbGF5ICogMWUzKSxcbiAgICBhd2FpdCBydW5Mb29wKGZhbHNlLCB0aW1lciArIHJlZnJlc2hfZGVsYXkpXG4gICk7XG4gIChcbiAgICBucy50YWlsKCksXG4gICAgbnMuZGlzYWJsZUxvZyhcIkFMTFwiKSxcbiAgICBucy50cHJpbnRmKGAke3V0aWwuYW5zaS5tfSoqIC4vZ3Zuci5qcyAqKmApLFxuICAgIG5zLmF0RXhpdCgoKSA9PiAoKEhPT0tTWzBdLmlubmVyVGV4dCA9IFwiXCIpLCAoSE9PS1NbMV0uaW5uZXJUZXh0ID0gXCJcIikpKSwgLy8gQ2xlYXJzIHRoZSBvdmVydmlldyBvbiBleGl0IHRvIHByZXZlbnQgc3RhbGUgZGF0YSlcbiAgICBhd2FpdCBydW5Mb29wKHRydWUsIDApXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gUnVuKFxuICBuczogTlMsXG4gIHBhdGg6IHN0cmluZyxcbiAgcGFyYW1zOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gW10sXG4gIHByb3BzOiBzdHJpbmcgfCBudW1iZXIgPSBcIlwiLFxuKTogUHJvbWlzZTxhbnk+IHwgbnVsbCB7XG4gIG5zLndyaXRlKFxuICAgIGBydW4uanNgLFxuICAgIC8qXG4gICAgXCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihucykge1wiLFxuICAgIFwiICBjb25zdCBbcGF0aCwgcHJvcHMsIC4uLnBhcmFtc10gPSBucy5hcmdzO1wiLFxuICAgICcgIGNvbnN0IGZ1bmNfcmV0dXJuID0gcGF0aC5zcGxpdChcIi5cIikucmVkdWNlKChhLCBiKSA9PiBhW2JdLCBucykoLi4ucGFyYW1zKScsXG4gICAgJyAgY29uc3QgcmV0dXJuX3ZhbHVlID0gIXByb3BzID8gZnVuY19yZXR1cm4gOiBwcm9wcy5zcGxpdChcIi5cIikucmVkdWNlKChhLGIpID0+IGE/LltiXSwgZnVuY19yZXR1cm4pJyxcbiAgICBcIiAgbnMuYXRFeGl0KCgpID0+IG5zLndyaXRlUG9ydChucy5waWQsIHJldHVybl92YWx1ZSkpO1wiLFxuICAgIFwifVwiLFxuICAgICovXG4gICAgJ2V4cG9ydCBsZXQgbWFpbj1uPT4ocj0+bi5hdEV4aXQoKCk9Pm4ud3JpdGVQb3J0KG4ucGlkLHIpKSkoKCh6LFtjLGQsLi4uZV0pPT4oZj0+ZD96KGYsZCk6ZikoeihuLGMpKC4uLmUpKSkoKHEscyk9PnMuc3BsaXQoXCIuXCIpLnJlZHVjZSgoYSxiKT0+YT8uW2JdLHEpLG4uYXJncykpJyxcbiAgICBcIndcIixcbiAgKTtcbiAgY29uc3QgcnVuX3BpZCA9IG5zLnJ1bihgcnVuLmpzYCwgeyByYW1PdmVycmlkZTogMS42ICsgbnMuZ2V0RnVuY3Rpb25SYW1Db3N0KHBhdGgpIH0sIHBhdGgsIHByb3BzLCAuLi5wYXJhbXMpO1xuICByZXR1cm4gIXJ1bl9waWRcbiAgICA/IChucy50cHJpbnRmKGAke3V0aWwuYW5zaS5yfSEhICR7cGF0aH0gRElEIE5PVCBSVU4gISFgKSwgbnVsbClcbiAgICA6IChhd2FpdCBucy5uZXh0UG9ydFdyaXRlKHJ1bl9waWQpLCBucy5yZWFkUG9ydChydW5fcGlkKSk7XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGxtYW9jYXQ6IGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50X2lkOiBzdHJpbmcsIGV4dHJhX3N0eWxlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDFlNCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICAgIGNvbnN0IFBJID0gTWF0aC5QSTtcbiAgICBjb25zdCBlbGVtZW50ID0gQ09OLkRPQy5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC5pbm5lclRleHQ7XG4gICAgY29uc3QgY29sX29mZnNldCA9IDUwO1xuICAgIGNvbnN0IHJhbmRfdGhldGEgPSAoKSA9PiBNYXRoLnJhbmRvbSgpICogUEk7XG4gICAgY29uc3QgY2FsY19zaW4gPSAoaSwgYW5nbGUsIHRoZXRhKSA9PiB+fihNYXRoLmFicyhNYXRoLmNvcygodGhldGEgKyBhbmdsZSkgKiBpKSkgKiAoMjU1IC0gY29sX29mZnNldCkpICsgY29sX29mZnNldDtcbiAgICBjb25zdCBnZW5fcmdiID0gKGksIGwpID0+XG4gICAgICBgY29sb3I6cmdiKCR7Y2FsY19zaW4oaSwgMCwgbC50aGV0YXMucil9LCR7Y2FsY19zaW4oaSwgKDIgKiBQSSkgLyAzLCBsLnRoZXRhcy5nKX0sJHtjYWxjX3NpbihpLCAoNCAqIFBJKSAvIDMsIGwudGhldGFzLmIpfWA7XG4gICAgY29uc3QgcHJpbnRfbWFwID0gWy4uLnRleHRdLm1hcCgobCkgPT4gKHtcbiAgICAgIGxldHRlcjogbCxcbiAgICAgIHRoZXRhczoge1xuICAgICAgICByOiByYW5kX3RoZXRhKCksXG4gICAgICAgIGc6IHJhbmRfdGhldGEoKSxcbiAgICAgICAgYjogcmFuZF90aGV0YSgpLFxuICAgICAgfSxcbiAgICB9KSk7XG4gICAgYXdhaXQgbG9vcChwcmludF9tYXAsIHRpbWVvdXQpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9vcChwcmludF9tYXAsIHRpbWVvdXQ6IG51bWJlciwgaSA9IDEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIENPTi5ET0MuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCkuaW5uZXJIVE1MID0gcHJpbnRfbWFwXG4gICAgICAgICAgLm1hcCgobCkgPT4gYDxzcGFuIHN0eWxlPVwiJHtleHRyYV9zdHlsZX0ke2dlbl9yZ2IoaSwgbCl9XCI+JHtsLmxldHRlcn08L3NwYW4+YClcbiAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgIH0gY2F0Y2ggeyB9XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCA1MCkpO1xuICAgICAgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgICAgIGF3YWl0IGxvb3AocHJpbnRfbWFwLCB0aW1lb3V0IC0gNTAsIGkgKyAwLjA1KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJnYkNvbDogKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGZnOiBib29sZWFuID0gdHJ1ZSkgPT4gYFxceDFCWyR7ZmcgPyBcIjNcIiA6IFwiNFwifTg7Mjske3J9OyR7Z307JHtifW1gLFxuICBhbnNpOiB7XG4gICAgLy8gcmVkXG4gICAgcjogXCJcXHgxQlszMW1cIixcbiAgICAvLyBncmVlblxuICAgIGc6IFwiXFx4MUJbMzJtXCIsXG4gICAgLy8gYmx1ZVxuICAgIGI6IFwiXFx4MUJbMzRtXCIsXG4gICAgLy8gY3lhblxuICAgIGM6IFwiXFx4MUJbMzZtXCIsXG4gICAgLy8gbWFnZW50YVxuICAgIG06IFwiXFx4MUJbMzVtXCIsXG4gICAgLy8geWVsbG93XG4gICAgeTogXCJcXHgxQlszM21cIixcbiAgICAvLyBrZXkoYmxhY2spXG4gICAgazogXCJcXHgxQlszMG1cIixcbiAgICAvLyB3aGl0ZVxuICAgIHc6IFwiXFx4MUJbMzdtXCIsXG4gICAgLy8gZGVmYXVsdFxuICAgIGQ6IFwiXFx4MUJbMG1cIixcbiAgICAvLyBib2xkXG4gICAgYmw6IFwiXFx4MUJbMm1cIixcbiAgfSxcbiAgZ2V0SW5kZXhBcnJheTogKG46IG51bWJlcik6IG51bWJlcltdID0+IFsuLi5BcnJheShuKS5rZXlzKCldLFxuICB0aWNrU3RyaW5nOiAodDogbnVtYmVyLCBsID0gNDAsIGUgPSB0cnVlKTogc3RyaW5nID0+ICh0ICUgbCA/IFwiI1wiLnJlcGVhdCgodCAvIDQpICUgKGwgLyA0KSkgKyBgfC8tXFxcXGBbdCAlIDRdIDogXCIjLS1leGVjLS0jXCIpLFxuICBkaWdpQ2xvY2s6IChyID0gRGF0ZS5ub3coKSwgYyA9ICh0OiBudW1iZXIsIGQgPSA2MCwgdiA9IChyIC8gdCkgJSBkIHwgMCkgPT4gKHYgPD0gOSA/IFwiMFwiICsgdiA6IHYpKTogc3RyaW5nID0+IChyIDwgODY0ZTUgPyBcIlwiIDogYyg4NjRlNSwgMSAvIDApICsgXCItXCIpICsgYygzNmU1LCAyNCkgKyBcIjpcIiArIGMoNmU0KSArIFwiOlwiICsgYygxZTMpLFxuICByYW1Gb3JtYXQ6IChyYW06IG51bWJlcik6IHN0cmluZyA9PiByYW0gPCAxZTMgPyByYW0udG9GaXhlZCgyKSArIFwiR0JcIiA6IHJhbSA8IDFlNiA/IChyYW0gLyAxZTMpLnRvRml4ZWQoMikgKyBcIlRCXCIgOiAocmFtIC8gMWU2KS50b0ZpeGVkKDIpICsgXCJQQlwiLFxuICBzbHA6IGFzeW5jICh0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHQpKSxcbn07XG5cbmZ1bmN0aW9uIGdldEZyZWVSYW0obnM6IE5TLCBob3N0OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gbnMuZ2V0U2VydmVyTWF4UmFtKGhvc3QpIC0gbnMuZ2V0U2VydmVyVXNlZFJhbShob3N0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaXNfQnVzeShuczogTlMpIHtcbiAgcmV0dXJuIChcbiAgICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldEN1cnJlbnRXb3JrXCIsIFtcIlwiXSwgXCJ0eXBlXCIpKSA9PSBcIkdSQUZUSU5HXCIgfHxcbiAgICAoKGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5pbkJsYWRlYnVybmVyXCIpKSAmJiAhIShhd2FpdCBSdW4obnMsIFwiYmxhZGVidXJuZXIuZ2V0Q3VycmVudEFjdGlvblwiLCBbXCJcIl0sIFwibmFtZVwiKSkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNHZXQobnM6IE5TLCBtID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiaG9tZVwiXSkpIHtcbiAgcmV0dXJuIG0uZm9yRWFjaCgoaCkgPT4gbnMuc2NhbihoKS5tYXAoKHMpID0+IG0uYWRkKHMpKSksIFsuLi5tXTtcbn1cblxuZnVuY3Rpb24gcmVhZHlGaWxleShuczogTlMsIGZpbGU6IHN0cmluZykge1xuICBjb25zdCBkYXRhID0gbnMucmVhZChmaWxlKTtcbiAgdHJ5IHsgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7IH1cbiAgY2F0Y2ggeyByZXR1cm4gZGF0YTsgfVxufVxuXG5mdW5jdGlvbiBwZWVreVBvcnR5KG5zOiBOUywgc2NyaXB0OiBzdHJpbmcpIHtcbiAgY29uc3QgZGF0YSA9IG5zLnBlZWsobnMuZ2V0UnVubmluZ1NjcmlwdChzY3JpcHQpPy5waWQgPz8gbnMucGlkKTtcbiAgcmV0dXJuIGRhdGEgPT0gXCJOVUxMIFBPUlQgREFUQVwiID8gXCJcIiA6IGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnROb2RlKG5zOiBOUykge1xuICBjb25zdCByID0gbnMuZ2V0UmVzZXRJbmZvKCk7XG4gIHJldHVybiBgJHtyLmN1cnJlbnROb2RlfS4kezEgKyByLm93bmVkU0YuZ2V0KHIuY3VycmVudE5vZGUpfWA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1eVRPUihuczogTlMpIHtcbiAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnB1cmNoYXNlVG9yXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiByYW1VcChuczogTlMpIHtcbiAgKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS51cGdyYWRlSG9tZVJhbVwiKSkgJiYgKG5zLnRwcmludGYodXRpbC5hbnNpLmcgKyBcIlVwZ3JhZGVkIGhvbWUgcmFtXCIpLCB0cnVlKSAmJiByYW1VcChucyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcmVzVXAobnM6IE5TKSB7XG4gIChhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkudXBncmFkZUhvbWVDb3Jlc1wiKSkgJiZcbiAgICAobnMudHByaW50Zih1dGlsLmFuc2kuZyArIFwiVXBncmFkZWQgaG9tZSBjb3Jlc1wiKSwgdHJ1ZSkgJiZcbiAgICBjb3Jlc1VwKG5zKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmFjdGlvbkpvaW4obiwgcyA9IG4uc2luZ3VsYXJpdHkpIHtcbiAgKGF3YWl0IFJ1bihuLCBcInNpbmd1bGFyaXR5LmNoZWNrRmFjdGlvbkludml0YXRpb25zXCIpKS5mb3JFYWNoKFxuICAgIChmKSA9PiAocy5qb2luRmFjdGlvbihmKSwgbi50cHJpbnRmKGAke3V0aWwuYW5zaS5tfUpvaW5lZCAke2Z9YCkpLFxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkYXJrd2ViU2hvcHBpbmcobnM6IE5TKSB7XG4gIGF3YWl0IFtcIkJydXRlU1NIXCIsIFwiRlRQQ3JhY2tcIiwgXCJyZWxheVNNVFBcIiwgXCJIVFRQV29ybVwiLCBcIlNRTEluamVjdFwiXS5yZWR1Y2UoXG4gICAgYXN5bmMgKGEsIGIpID0+IChhd2FpdCBhLCBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkucHVyY2hhc2VQcm9ncmFtXCIsIFtgJHtifS5leGVgXSkpLFxuICAgIFByb21pc2UucmVzb2x2ZSgpLFxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBtdXJkZXJhdGUobnM6IE5TKSB7XG4gICEoYXdhaXQgaXNfQnVzeShucykpICYmXG4gICAgKGF3YWl0IFJ1bihucywgXCJnZXRQbGF5ZXJcIiwgW10sIFwibnVtUGVvcGxlS2lsbGVkXCIpKSA8IDMwICYmXG4gICAgKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5zdG9wQWN0aW9uXCIpLCBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuY29tbWl0Q3JpbWVcIiwgW1wiSG9taWNpZGVcIiwgMF0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYmQobiwgdCwgaCA9IFwiaG9tZVwiLCBjID0gKGYgPSBcImNvbm5lY3RcIikgPT4gbi5zaW5ndWxhcml0eVtmXSwgZiA9ICh0LCByID0gW10pID0+IHQgPT0gaCA/IHIgOiBmKG4uc2Nhbih0KVswXSwgW3QsIC4uLnJdKSkge1xuICAoXG4gICAgYygpKGgpLFxuICAgIGYodCkubWFwKGMoKSksXG4gICAgbi50cHJpbnRmKGAke3V0aWwuYW5zaS55fUJhY2tkb29yIHN0YXJ0ZWQgb24gJHt0fWApLFxuICAgIGF3YWl0IGMoXCJpbnN0YWxsQmFja2Rvb3JcIikoKSxcbiAgICBjKCkoaCksXG4gICAgbi50cHJpbnRmKGAke3V0aWwuYW5zaS5nfUJhY2tkb29yIGNvbXBsZXRlIG9uICR7dH1gKVxuICApXG59XG5cbmZ1bmN0aW9uIHBlcnN1YWRlKG46IE5TLCBzID0gXCJob21lXCIsIHA6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICBuLnNjYW4ocykuZm9yRWFjaCgodikgPT5cbiAgICB2ICE9IHBcbiAgICAgID8gcGVyc3VhZGUobiwgdiwgcylcbiAgICAgIDogW24uYnJ1dGVzc2gsIG4uZnRwY3JhY2ssIG4ucmVsYXlzbXRwLCBuLnNxbGluamVjdCwgbi5odHRwd29ybSwgbi5udWtlXS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcChzKTtcbiAgICAgICAgfSBjYXRjaCB7IH1cbiAgICAgIH0pLFxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGQ0M20wbkQzNTdyMHkobnM6IE5TLCBkYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCksIHdkID0gXCJ3MHIxZF9kNDNtMG5cIikge1xuICAoKHNHZXQobnMpLmluY2x1ZGVzKHdkKSAmJlxuICAgIChhd2FpdCBSdW4obnMsIFwiZ2V0SGFja2luZ0xldmVsXCIpKSA+IChhd2FpdCBSdW4obnMsIFwiZ2V0U2VydmVyUmVxdWlyZWRIYWNraW5nTGV2ZWxcIiwgW3dkXSkpKSB8fFxuICAgIChucy5ibGFkZWJ1cm5lci5pbkJsYWRlYnVybmVyKCkgJiYgIW5zLmJsYWRlYnVybmVyLmdldE5leHRCbGFja09wKCkpKSAmJlxuICAgIChbXCJpbnN0YWxsQ291bnRlci50eHRcIiwgXCJpbnN0YWxsQXVnc1JlYXNvbi50eHRcIiwgXCJpbnN0YWxsQXVnc0xvZy50eHRcIl0ubWFwKChmKSA9PiBucy5ybShgdGVtcC8ke2Z9YCkpLFxuICAgICAgbnMud3JpdGUoXG4gICAgICAgIFwicmVwb3J0L25vZGVMb2cudHh0XCIsXG4gICAgICAgIGAke2dldEN1cnJlbnROb2RlKG5zKX0gY29tcGxldGVkICAtICR7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gJHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfWAsXG4gICAgICApLFxuICAgICAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmRlc3Ryb3lXMHIxZEQ0M20wblwiLCBbMTIsIFwicnNldC5qc1wiXSkpO1xufVxuXG5mdW5jdGlvbiBwU2VydihuczogTlMpIHtcbiAgKG5zLnB1cmNoYXNlU2VydmVyKFwiI1wiLCA4KSB8fCBzR2V0KG5zKS5zb21lKChzKSA9PiBbLi4uQXJyYXkoMjEpLmtleXMoKV0uc29tZSgocikgPT4gbnMudXBncmFkZVB1cmNoYXNlZFNlcnZlcihzLCByIDw8IDEpKSkpICYmIHBTZXJ2KG5zKVxufVxuXG5mdW5jdGlvbiBwcmV0dHlMb2dzKG5zOiBOUykge1xuICBjb25zdCBwZXJjQ29sb3VyID0gKHBlcmMpID0+XG4gICAgYCR7cGVyYyA8IDMzID8gdXRpbC5hbnNpLnIgOiBwZXJjIDwgNjYgPyB1dGlsLmFuc2kueSA6IHBlcmMgPCA4NSA/IHV0aWwuYW5zaS5jIDogdXRpbC5hbnNpLmd9JHtwZXJjLnBhZFN0YXJ0KDYsIFwiIFwiKX0lJHt1dGlsLmFuc2kuZH1gO1xuICBjb25zdCBzZWNDb2xvdXIgPSAoc2VjKSA9PiBgJHtzZWMgPCA1ID8gdXRpbC5hbnNpLmcgOiB1dGlsLmFuc2kueX0keyhcIlwiICsgc2VjKS5wYWRTdGFydCgzLCBcIiBcIil9JHt1dGlsLmFuc2kuZH1gO1xuICBjb25zdCBtYWluX2xpc3QgPSBzR2V0KG5zKTtcbiAgY29uc3QgYWNjZXNzX2xpc3QgPSBtYWluX2xpc3QuZmlsdGVyKFxuICAgIChzKSA9PiBucy5oYXNSb290QWNjZXNzKHMpICYmIG5zLmdldFNlcnZlclJlcXVpcmVkSGFja2luZ0xldmVsKHMpIDw9IG5zLmdldEhhY2tpbmdMZXZlbCgpLFxuICApO1xuICBjb25zdCBmdW5kZWRfbGlzdCA9IGFjY2Vzc19saXN0LmZpbHRlcihucy5nZXRTZXJ2ZXJNYXhNb25leSk7XG4gIGNvbnN0IGZ1bmRlZF9jb3VudCA9IG1haW5fbGlzdC5yZWR1Y2UoKGEsIHMpID0+IGEgKyArISFucy5nZXRTZXJ2ZXJNYXhNb25leShzKSwgMCk7XG4gIGNvbnN0IHRvdGFsX21heF9yYW0gPSBhY2Nlc3NfbGlzdC5yZWR1Y2UoKGEsIHMpID0+IGEgKyBucy5nZXRTZXJ2ZXJNYXhSYW0ocyksIDApO1xuICBjb25zdCB0b3RhbF9mcmVlX3JhbSA9IGFjY2Vzc19saXN0LnJlZHVjZSgoYSwgcykgPT4gYSArIGdldEZyZWVSYW0obnMsIHMpLCAwKTtcbiAgY29uc3QgYm91Z2h0X2F1Z3MgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYm91Z2h0QXVncy50eHRcIik7XG4gIGNvbnN0IGJvdWdodF9hdWdzX3NhbnNfbmZnID0gYm91Z2h0X2F1Z3MucmVkdWNlKChhY2MsIGF1ZykgPT4gYWNjICsgKGF1ZyAhPSBDT04uTkZHKSwgMCk7XG4gIGNvbnN0IG51bV9uZmcgPSBib3VnaHRfYXVncy5yZWR1Y2UoKGFjYywgYXVnKSA9PiBhY2MgKyAoYXVnID09IENPTi5ORkcpLCAwKTtcbiAgY29uc3QgbnVtX290aGVyX2F1Z3MgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvaW5zdGFsbGVkQXVncy50eHRcIikucmVkdWNlKChhY2MsIGF1ZykgPT4gYWNjICsgKGF1ZyAhPSBDT04uTkZHKSwgMCk7XG4gIGNvbnN0IGF1Z19pbmZvID0gYm91Z2h0X2F1Z3NcbiAgICAuZmlsdGVyKChhKSA9PiBhICE9IENPTi5ORkcpXG4gICAgLm1hcCgoYXVnKSA9PiBcIiBcXHhCN1wiICsgYXVnKVxuICAgIC5jb25jYXQobnVtX25mZyA/IFtcIiBcXHhCN05ldXJvRmx1eCBHb3Zlcm5vciB4XCIgKyBudW1fbmZnXSA6IG51bGwpXG4gICAgLmpvaW4oXCJcXG5cIik7XG4gIGNvbnN0IGdldFNlY0x2bCA9IChzZXJ2ZXIpID0+IE1hdGguY2VpbChucy5nZXRTZXJ2ZXJTZWN1cml0eUxldmVsKHNlcnZlcikpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIgXCIpO1xuICBjb25zdCBnZXRTZWNEZWx0YSA9IChzZXJ2ZXIpID0+XG4gICAgc2VjQ29sb3VyKFxuICAgICAgTWF0aC5jZWlsKG5zLmdldFNlcnZlclNlY3VyaXR5TGV2ZWwoc2VydmVyKSAtIG5zLmdldFNlcnZlck1pblNlY3VyaXR5TGV2ZWwoc2VydmVyKSlcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgLnBhZFN0YXJ0KDMsIFwiIFwiKSxcbiAgICApO1xuICBjb25zdCBnZXRDYXNoID0gKHNlcnZlcikgPT4gbnMuZm9ybWF0TnVtYmVyKG5zLmdldFNlcnZlck1vbmV5QXZhaWxhYmxlKHNlcnZlcikpLnRvU3RyaW5nKCkucGFkU3RhcnQoOCwgXCIgXCIpO1xuICBjb25zdCBnZXRNYXhDYXNoID0gKHNlcnZlcikgPT4gbnMuZm9ybWF0TnVtYmVyKG5zLmdldFNlcnZlck1heE1vbmV5KHNlcnZlcikpLnRvU3RyaW5nKCkucGFkU3RhcnQoOCwgXCIgXCIpO1xuICBjb25zdCBnZXRQZXJjID0gKHNlcnZlcikgPT5cbiAgICBwZXJjQ29sb3VyKCgobnMuZ2V0U2VydmVyTW9uZXlBdmFpbGFibGUoc2VydmVyKSAvIG5zLmdldFNlcnZlck1heE1vbmV5KHNlcnZlcikpICogMTAwKS50b0ZpeGVkKDIpKTtcbiAgY29uc3QgZ2V0RXhlY1RpbWUgPSAoc2VydmVyKSA9PiB1dGlsLmRpZ2lDbG9jayhucy5nZXRXZWFrZW5UaW1lKHNlcnZlcikpO1xuICBjb25zdCBnZXRTZXJ2ZXJOYW1lID0gKHNlcnZlcikgPT5cbiAgICBzZXJ2ZXIgPT0gcGVla3lQb3J0eShucywgXCJsb29wL3Byc20uanNcIikgPyBgJHtzZXJ2ZXJ9ICR7dXRpbC5hbnNpLnd9LS0tJHt1dGlsLmFuc2kueX1cXHUwMzk0PGAgOiBzZXJ2ZXI7XG4gIGNvbnN0IGdldEluZm8gPSAocykgPT4gW1xuICAgIGdldFNlY0x2bChzKSxcbiAgICBnZXRTZWNEZWx0YShzKSxcbiAgICBnZXRDYXNoKHMpLFxuICAgIGdldE1heENhc2gocyksXG4gICAgZ2V0UGVyYyhzKSxcbiAgICBnZXRFeGVjVGltZShzKSxcbiAgICBnZXRTZXJ2ZXJOYW1lKHMpLFxuICBdO1xuICBjb25zdCBmb3JtYXQgPSAobGluZSkgPT4gYCAke2xpbmUuam9pbihcIiB8IFwiKX1gO1xuICBucy5yZXNpemVUYWlsKDgwMCwgMWUzKSxcbiAgICBucy5tb3ZlVGFpbChDT04uV0lOLmlubmVyV2lkdGggLSAxMTUwLCAwKSxcbiAgICBucy5jbGVhckxvZygpLFxuICAgIFtcbiAgICAgIC4uLltcbiAgICAgICAgLi4uZnVuZGVkX2xpc3QubWFwKGdldEluZm8pLFxuICAgICAgICBbXG4gICAgICAgICAgXCJzZWNcIixcbiAgICAgICAgICBcIiBcXHUwMzk0IFwiLFxuICAgICAgICAgIFwiICAkY3VyICBcIixcbiAgICAgICAgICBcIiAgJG1heCAgXCIsXG4gICAgICAgICAgXCIgICAlICAgXCIsXG4gICAgICAgICAgXCIgIH5ldGUgIFwiLFxuICAgICAgICAgIGAgVGFyZ2V0IH4gJHtmdW5kZWRfbGlzdC5sZW5ndGh9LyR7ZnVuZGVkX2NvdW50fWAsXG4gICAgICAgIF0sXG4gICAgICBdLm1hcChmb3JtYXQpLFxuICAgICAgXCJcIixcbiAgICAgIGAgaG9tZSAtICR7dXRpbC5yYW1Gb3JtYXQoZ2V0RnJlZVJhbShucywgXCJob21lXCIpKX0vJHt1dGlsLnJhbUZvcm1hdChucy5nZXRTZXJ2ZXJNYXhSYW0oXCJob21lXCIpKX1gLFxuICAgICAgYCBuZXR3b3JrIC0gJHt1dGlsLnJhbUZvcm1hdCh0b3RhbF9mcmVlX3JhbSl9LyR7dXRpbC5yYW1Gb3JtYXQodG90YWxfbWF4X3JhbSl9YCxcbiAgICAgIGAgdGhyZWFkcyAtICR7bnMuZm9ybWF0TnVtYmVyKE1hdGguZmxvb3IodG90YWxfZnJlZV9yYW0gLyBucy5nZXRTY3JpcHRSYW0oXCJ3ZWFrZW4uanNcIikpKX0vJHtucy5mb3JtYXROdW1iZXIoTWF0aC5mbG9vcih0b3RhbF9tYXhfcmFtIC8gbnMuZ2V0U2NyaXB0UmFtKFwid2Vha2VuLmpzXCIpKSl9IHRocmVhZHNgLFxuICAgICAgXCJcIixcbiAgICAgIGAgYm91Z2h0IGF1Z3MgeCAke2JvdWdodF9hdWdzX3NhbnNfbmZnfSwgJHtudW1fb3RoZXJfYXVnc30vMTAwIGluc3RhbGxlZCwgTkZHIHggJHtucy5nZXRSZXNldEluZm8oKS5vd25lZEF1Z3MuZ2V0KENPTi5ORkcpfWAsXG4gICAgICBgJHthdWdfaW5mb31gLFxuICAgICAgYCAke3JlYWR5RmlsZXkobnMsIFwidGVtcC9pbnN0YWxsQXVnc1JlYXNvbi50eHRcIil9YCxcbiAgICAgIFwiXCIsXG4gICAgXS5mb3JFYWNoKChsKSA9PiBucy5wcmludChsKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZXR0eU92ZXJ2aWV3KG5zOiBOUywgdGltZXIpIHtcbiAgY29uc3QgcHJzbV90YXJnZXQgPSBwZWVreVBvcnR5KG5zLCBcImxvb3AvcHJzbS5qc1wiKTtcbiAgY29uc3QgZ2FuZ19pbmZvID0gcGVla3lQb3J0eShucywgXCJsb29wL3J1bkdhbmcuanNcIik7XG4gIGNvbnN0IGhhY2tuZXRfaW5mbyA9IHJlYWR5RmlsZXkobnMsIFwidGVtcC9oYWNrbmV0X2luZm8udHh0XCIpO1xuICBjb25zdCBkYXRlID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuICBjb25zdCBsYXN0X2F1Z190aW1lID0gK3JlYWR5RmlsZXkobnMsIFwidGVtcC9sYXN0QXVnVGltZS50eHRcIikgfHwgZGF0ZTtcblxuICBjb25zdCBjb2xvdXJpc2UgPSAobykgPT4gby5saW5lcy5tYXAoKGwpID0+IFtgPHNwYW4gc3R5bGUgPSBcImNvbG9yOiR7by5jb2x9XCIgPiAke2xbMF19IDwvc3Bhbj5gLCBgPHNwYW4gc3R5bGU9XCJjb2xvcjoke28uY29sfVwiPiR7bFsxXX08L3NwYW4+YF0pO1xuICBjb25zdCBzcGxpdE5CcmVhayA9IChhLCBiKSA9PiBbW2FbMF0sIGJbMF1dLmpvaW4oXCI8L2JyPlwiKSwgW2FbMV0sIGJbMV1dLmpvaW4oXCI8L2JyPlwiKV07XG5cbiAgW0hPT0tTWzBdLmlubmVySFRNTCwgSE9PS1NbMV0uaW5uZXJIVE1MXSA9IFtcbiAgICB7XG4gICAgICBsaW5lczogW1xuICAgICAgICBbYGJpdG5vZGU6YCwgYCR7Z2V0Q3VycmVudE5vZGUobnMpfWBdLFxuICAgICAgICBbYHBzZXJ2OmAsIGAke3NHZXQobnMpLmZpbHRlcigocykgPT4gcy5zdGFydHNXaXRoKFwiI1wiKSkubGVuZ3RofS8ke25zLmdldFB1cmNoYXNlZFNlcnZlckxpbWl0KCl9YF0sXG4gICAgICAgIFtgd19kIGx2bDpgLCBgJHtNYXRoLnJvdW5kKDNlMyAqIChhd2FpdCBSdW4obnMsIFwiZ2V0Qml0Tm9kZU11bHRpcGxpZXJzXCIsIFtdLCBcIldvcmxkRGFlbW9uRGlmZmljdWx0eVwiKSkpfWBdLFxuICAgICAgICBbYGNpdHk6YCwgYCR7bnMuZ2V0UGxheWVyKCkuY2l0eX1gXSxcbiAgICAgICAgW2BrYXJtYTpgLCBgJHtucy5mb3JtYXROdW1iZXIobnMuaGVhcnQuYnJlYWsoKSl9YF0sXG4gICAgICBdLFxuICAgICAgY29sOiBcImN5YW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbmVzOiBbXG4gICAgICAgIFtgdGFyZ2V0OmAsIGAke3Byc21fdGFyZ2V0fWBdLFxuICAgICAgICBbYCQvczpgLCBgJCR7bnMuZm9ybWF0TnVtYmVyKG5zLmdldFNjcmlwdEluY29tZShcImxvb3AvcHJzbS5qc1wiLCB1bmRlZmluZWQpKX1gXSxcbiAgICAgICAgW2AkIHRvdGFsOmAsIGAke25zLmZvcm1hdE51bWJlcihucy5nZXRNb25leVNvdXJjZXMoKS5zaW5jZUluc3RhbGwuaGFja2luZyl9YF0sXG4gICAgICAgIFtgeHAvczpgLCBgJHtucy5mb3JtYXROdW1iZXIobnMuZ2V0VG90YWxTY3JpcHRFeHBHYWluKCkpfWBdLFxuICAgICAgICBbYHNjcmlwdHM6YCwgYCR7c0dldChucykucmVkdWNlKChhLCBiKSA9PiBhICsgbnMucHMoYikubGVuZ3RoLCAwKX1gXSxcbiAgICAgIF0sXG4gICAgICBjb2w6IFwicmVkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5lczogW1xuICAgICAgICBbYGhOIFNlcnZlcnM6YCwgYCR7aGFja25ldF9pbmZvLm51bX1gXSxcbiAgICAgICAgW2BoYXNoZXMvTWF4OmAsIGAke2hhY2tuZXRfaW5mby5oYXNoZXN9YF0sXG4gICAgICAgIFtgaGFzaGVzL3M6YCwgYCR7bnMuZm9ybWF0TnVtYmVyKGhhY2tuZXRfaW5mby5wcm9kKX1gXSxcbiAgICAgICAgW2Bwcm9maXQ6YCwgYCQke25zLmZvcm1hdE51bWJlcihoYWNrbmV0X2luZm8ucHJvZml0KX1gXSxcbiAgICAgIF0sXG4gICAgICBjb2w6IFwiZ3JlZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbmVzOiBbXG4gICAgICAgIFtgc3RhdHVzOmAsIGAke2dhbmdfaW5mbz8uY3ljbGUgPz8gXCJ+XCJ9YF0sXG4gICAgICAgIFtgbWVtYmVyczpgLCBgJHtnYW5nX2luZm8/LnNpemUgPz8gXCJ+XCJ9YF0sXG4gICAgICAgIFtgcG93ZXI6YCwgYCR7bnMuZm9ybWF0TnVtYmVyKGdhbmdfaW5mbz8ucG93ZXIgPz8gMCwgMCl9LyR7bnMuZm9ybWF0TnVtYmVyKGdhbmdfaW5mbz8ubmV4dHBvd2VyID8/IDAsIDApfWBdLFxuICAgICAgICBbYHRlcnJpdG9yeTpgLCBgJHtucy5mb3JtYXROdW1iZXIoZ2FuZ19pbmZvPy50ZXJyaXRvcnkgPz8gMCAqIDEwMCkgPz8gXCJ+XCJ9JWBdLFxuICAgICAgICBbYHdhcmZhcmU/OmAsIGAke2dhbmdfaW5mbz8udHcgPz8gXCJ+XCJ9YF0sXG4gICAgICAgIFtgcHJvZml0OmAsIGAkJHtucy5mb3JtYXROdW1iZXIobnMuZ2V0TW9uZXlTb3VyY2VzKCkuc2luY2VTdGFydC5nYW5nID8/IDApfWBdLFxuICAgICAgXSxcbiAgICAgIGNvbDogXCJtYWdlbnRhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5lczogW1xuICAgICAgICBbYCR7dXRpbC50aWNrU3RyaW5nKHRpbWVyKX1gLCBgY3ljbGUgIyR7TWF0aC5mbG9vcih0aW1lciAvIDMwKX1gXSxcbiAgICAgICAgW2Bndm5yIHVwdGltZTpgLCBgJHt1dGlsLmRpZ2lDbG9jayh0aW1lciAqIDFlMyl9YF0sXG4gICAgICAgIFtgdCsgQXVnYnV5OmAsIGAkeyEhKGRhdGUgLSBsYXN0X2F1Z190aW1lKSA/IHV0aWwuZGlnaUNsb2NrKGRhdGUgLSBsYXN0X2F1Z190aW1lKSA6IFwiTi9BXCJ9YF0sXG4gICAgICAgIFtgdCsgSW5zdGFsbDpgLCBgJHt1dGlsLmRpZ2lDbG9jayhkYXRlIC0gbnMuZ2V0UmVzZXRJbmZvKCkubGFzdEF1Z1Jlc2V0KX1gXSxcbiAgICAgICAgW2B0KyBCaXRub2RlOmAsIGAke3V0aWwuZGlnaUNsb2NrKGRhdGUgLSBucy5nZXRSZXNldEluZm8oKS5sYXN0Tm9kZVJlc2V0KX1gXSxcbiAgICAgIF0sXG4gICAgICBjb2w6IFwieWVsbG93XCIsXG4gICAgfSxcbiAgXVxuICAgIC5mbGF0TWFwKGNvbG91cmlzZSlcbiAgICAucmVkdWNlKHNwbGl0TkJyZWFrKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBzY3JpcHRMb29wKG5zOiBOUywgaXNfZmlyc3Rfc3RhcnQ6IGJvb2xlYW4pIHtcbiAgKFxuICAgIGF3YWl0IFtcImNvbnRyYWN0cy5qc1wiLCAuLi5DT04uT05FU0hPVF9GVU5DVElPTlMubWFwKChzKSA9PiBgb25lc2hvdC8ke3N9LmpzYCldLnJlZHVjZShcbiAgICAgIGFzeW5jIChsYXN0OiBQcm9taXNlPHZvaWQ+LCBzY3JpcHQ6IHN0cmluZykgPT4gKFxuICAgICAgICBhd2FpdCBsYXN0LFxuICAgICAgICBpc19maXJzdF9zdGFydCAmJiBucy50cHJpbnRmKGAke3V0aWwuYW5zaS55fXN0YXJ0aW5nICR7c2NyaXB0fSBgKSxcbiAgICAgICAgYXdhaXQgKGFzeW5jIChydW5waWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT5cbiAgICAgICAgICAhIXJ1bnBpZFxuICAgICAgICAgICAgPyAoYXdhaXQgbnMubmV4dFBvcnRXcml0ZShydW5waWQpLFxuICAgICAgICAgICAgICBpc19maXJzdF9zdGFydCAmJiAoYXdhaXQgdXRpbC5zbHAoNzAgKiBNYXRoLnJhbmRvbSgpKSwgbnMudHByaW50ZihgJHt1dGlsLmFuc2kuZ30ke3NjcmlwdH0gcGFzc2VkIGluaXRgKSkpXG4gICAgICAgICAgICA6IG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLnJ9ICEhJHtzY3JpcHR9IERJRCBOT1QgUlVOISFgKSkobnMucnVuKHNjcmlwdCkpXG4gICAgICApLFxuICAgICAgdm9pZCBudWxsLFxuICAgICksXG4gICAgQ09OLkxPT1BfRlVOQ1RJT05TLm1hcCgocykgPT4gYGxvb3AvJHtzfS5qc2ApLmZvckVhY2goKHNjcmlwdCkgPT4gIW5zLmlzUnVubmluZyhzY3JpcHQpICYmIG5zLnJ1bihzY3JpcHQpKSxcbiAgICBpc19maXJzdF9zdGFydFxuICAgICYmIChcbiAgICAgIG5zLnByaW50KGAke3V0aWwuYW5zaS5tfSBXZWxjb21lIHRvIGdudnIuanMhYCksXG4gICAgICBucy50cHJpbnRmKGAke3V0aWwuYW5zaS5nfSoqKiBTdGFydHVwIENvbXBsZXRlICoqKiBgKSxcbiAgICAgIGF3YWl0IHV0aWwuc2xwKDFlMyksXG4gICAgICBucy5ydW4oXCJ1dGlsL25lb2ZldGNoLmpzXCIpXG4gICAgKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdyYWZ0KG5zOiBOUywgZyA9IG5zLmdyYWZ0aW5nKSB7XG4gICEoYXdhaXQgaXNfQnVzeShucykpICYmXG4gICAgbnMuc2luZ3VsYXJpdHkudHJhdmVsVG9DaXR5KFwiTmV3IFRva3lvXCIpXG4gICAgJiYgW1xuICAgICAgXCJRTGlua1wiLFxuICAgICAgXCJFQ29ycCBIVk1pbmQgSW1wbGFudFwiLFxuICAgICAgXCJYYW5pcGhlclwiLFxuICAgICAgXCJPbW5pVGVrIEluZm9Mb2FkXCIsXG4gICAgICBcInZpb2xldCBDb25ncnVpdHkgSW1wbGFudFwiXG4gICAgXS5zb21lKFxuICAgICAgKGF1ZykgPT4gZy5ncmFmdEF1Z21lbnRhdGlvbihhdWcsIGZhbHNlKVxuICAgICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZhY3RXb3JrKG5zOiBOUywgcyA9IG5zLnNpbmd1bGFyaXR5KSB7XG4gIGNvbnN0IGF2YWlsYWJsZV9hdWdzID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL2F2YWlsYWJsZUF1Z3MudHh0XCIpO1xuICBjb25zdCB0YXJnZXRfZmFjdGlvbiA9IGF2YWlsYWJsZV9hdWdzLnJlZHVjZShcbiAgICAoYSwgYikgPT4gKGIuZmFjdC5uYW1lICE9IENPTi5HQU5HX05BTUUgJiYgYi5yZXBkZWx0YSA+IGEucmVwZGVsdGEgPyBiIDogYSksXG4gICAgeyByZXBkZWx0YTogMCB9LFxuICApLmZhY3Q/Lm5hbWU7XG4gICEoYXdhaXQgaXNfQnVzeShucykpXG4gICAgJiYgISF0YXJnZXRfZmFjdGlvblxuICAgICYmIChzLnN0b3BBY3Rpb24oKSxcbiAgICAgIFtcImZpZWxkXCIsIFwic2VjdXJpdHlcIiwgXCJoYWNraW5nXCJdLnNvbWUoKGpvYjogRmFjdGlvbldvcmtUeXBlKSA9PlxuICAgICAgICBzLndvcmtGb3JGYWN0aW9uKGF2YWlsYWJsZV9hdWdzLmluY2x1ZGVzKENPTi5UUlApID8gXCJEYWVkYWx1c1wiIDogdGFyZ2V0X2ZhY3Rpb24sIGpvYiwgZmFsc2UpLFxuICAgICAgKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRvbmF0ZShuczogTlMsIHMgPSBucy5zaW5ndWxhcml0eSkge1xuICBjb25zdCBhdmFpbGFibGVBdWdzID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL2F2YWlsYWJsZUF1Z3MudHh0XCIpO1xuICBjb25zdCByZXBfbXVsdGkgPSBhd2FpdCBSdW4obnMsIFwiZ2V0Qml0Tm9kZU11bHRpcGxpZXJzXCIsIFtdLCBcIlJlcFRvRG9uYXRlVG9GYWN0aW9uXCIpO1xuICBjb25zdCBuZmdpbmZvID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL25mZ0luZm8udHh0XCIpO1xuICBjb25zdCBkb25hdGVmYWN0aW9uID0gXCJUaGUgQmxhY2sgSGFuZFwiO1xuICAvLyBEb25hdGUgdG8gVEJIIHRvIGdyaW5kIE5GIEdvdmVybm9yXG4gIHMuZ2V0RmFjdGlvbkZhdm9yKGRvbmF0ZWZhY3Rpb24pID49IDE1MCAqIHJlcF9tdWx0aVxuICAgICYmIHMuZ2V0RmFjdGlvblJlcChkb25hdGVmYWN0aW9uKSA8IG5mZ2luZm8ucmVwXG4gICAgJiYgcy5kb25hdGVUb0ZhY3Rpb24oZG9uYXRlZmFjdGlvbiwgTWF0aC5tYXgobmZnaW5mby5jb3N0LCAxZTExKSlcbiAgICAmJiBucy50cHJpbnRmKFxuICAgICAgYCR7dXRpbC5hbnNpLm19RG9uYXRlZCAkJHtucy5mb3JtYXROdW1iZXIoTWF0aC5tYXgobmZnaW5mby5jb3N0LCAxZTExKSl9IHRvICR7ZG9uYXRlZmFjdGlvbn0gKGdyaW5kaW5nIE5GRylgLFxuICAgICksXG5cbiAgICAvLyBEb25hdGUgdG8gZmFjdGlvbnMgZm9yIGF1Z3NcbiAgICBhdmFpbGFibGVBdWdzLmZvckVhY2goXG4gICAgICAoYXVnKSA9PlxuICAgICAgICBhdWcuZmFjdC5uYW1lICE9IENPTi5HQU5HX05BTUVcbiAgICAgICAgJiYgcy5nZXRGYWN0aW9uRmF2b3IoYXVnLmZhY3QubmFtZSkgPiAxNTAgKiByZXBfbXVsdGlcbiAgICAgICAgJiYgYXVnLnJlcGRlbHRhID4gMFxuICAgICAgICAmJiBzLmRvbmF0ZVRvRmFjdGlvbihhdWcuZmFjdC5uYW1lLCAxZTExKVxuICAgICAgICAmJiBucy50cHJpbnRmKGAke3V0aWwuYW5zaS5tfURvbmF0ZWQgJDEwMEIgdG8gJHthdWcuZmFjdC5uYW1lfSBgKSxcbiAgICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluc3RhbGxBdWdzKG5zOiBOUykge1xuICBjb25zdCBkYXRlID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlKCkuc2xpY2UoNCwgMjQpO1xuICBjb25zdCBhdWdzX2FycmF5ID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL2F2YWlsYWJsZUF1Z3MudHh0XCIpLmZpbHRlcigoYXVnKSA9PiBhdWcuZmFjdC5uYW1lICE9IENPTi5HQU5HX05BTUUpO1xuICBjb25zdCBib3VnaHRfYXVncyA9IHJlYWR5RmlsZXkobnMsIFwidGVtcC9ib3VnaHRBdWdzLnR4dFwiKTtcbiAgY29uc3QgdGltZV9zaW5jZV9sYXN0X2F1ZyA9IGRhdGUgLSArKHJlYWR5RmlsZXkobnMsIFwidGVtcC9sYXN0QXVnVGltZS50eHRcIikgPz8gZGF0ZSk7XG4gIGNvbnN0IGxvd2VzdF9wcmljZSA9IGF1Z3NfYXJyYXkucmVkdWNlKChhLCBiKSA9PiAoYS5hdWcgIT0gQ09OLlRSUCAmJiBhPy5wcmljZSA8IGI/LnByaWNlID8gYSA6IGIpLCBJbmZpbml0eSk/LnByaWNlID8/IDA7XG4gIGNvbnN0IGZhdl90b19kb25hdGUgPSAxNTAgKiAoYXdhaXQgUnVuKG5zLCBcImdldEJpdE5vZGVNdWx0aXBsaWVyc1wiLCBbXSwgXCJSZXBUb0RvbmF0ZVRvRmFjdGlvblwiKSk7XG5cbiAgY29uc3QgdGltZW91dF9sb2cgPVxuICAgIGB0aW1lb3V0IC0gJCR7bnMuZm9ybWF0TnVtYmVyKG5zLmdldFNlcnZlck1vbmV5QXZhaWxhYmxlKFwiaG9tZVwiKSl9IC8kJHtucy5mb3JtYXROdW1iZXIobG93ZXN0X3ByaWNlKX0sIG11bHRpIHgke01hdGguZmxvb3IoK3JlYWR5RmlsZXkobnMsIFwidGVtcC9wcmljZVJhdGlvLnR4dFwiKSl9IC0gJHt0aW1lc3RhbXB9YDtcbiAgY29uc3QgZmF2b3VyX2xvZyA9IChhdWcpID0+XG4gICAgYGluY3JlYXNlZCAke2F1Zy5mYWN0Lm5hbWV9IGZhdm91ciBieSAke01hdGguZmxvb3IoYXVnLmZhY3QuZmF2ZGVsdGEpfSB0byAke01hdGguZmxvb3IoYXVnLmZhY3QuZmF2ZGVsdGEgKyBhdWcuZmFjdC5mYXYpfSAtICR7dGltZXN0YW1wfWA7XG5cbiAgY29uc3QgY2hlY2tGYXZvdXIgPSAoKSA9PlxuICAgIGF1Z3NfYXJyYXkuc29tZShcbiAgICAgIGF1ZyA9PlxuICAgICAgICBhdWcuZmFjdC5mYXYgPCBmYXZfdG9fZG9uYXRlXG4gICAgICAgICYmIChhdWcuZmFjdC5mYXZkZWx0YSA+PSA1MCB8fCBmYXZfdG9fZG9uYXRlIDwgYXVnLmZhY3QuZmF2ZGVsdGEgKyBhdWcuZmFjdC5mYXYpXG4gICAgICAgICYmICh3cml0ZUxvZyhmYXZvdXJfbG9nKGF1ZykpLCB0cnVlKVxuICAgICk7XG5cbiAgY29uc3QgY2hlY2tUaW1lb3V0ID0gKCkgPT5cbiAgICB0aW1lX3NpbmNlX2xhc3RfYXVnID4gMThlNVxuICAgICYmIGxvd2VzdF9wcmljZSA+IG5zLmdldFNlcnZlck1vbmV5QXZhaWxhYmxlKFwiaG9tZVwiKVxuICAgICYmICh3cml0ZUxvZyh0aW1lb3V0X2xvZyksIHRydWUpO1xuXG4gIGNvbnN0IHdyaXRlTG9nID0gKGxvZykgPT4gKFxuICAgIG5zLndyaXRlKFwidGVtcC9pbnN0YWxsQXVnc1JlYXNvbi50eHRcIiwgYGluc3RhbGxBdWdzICMkezEgKyArcmVhZHlGaWxleShucywgXCJ0ZW1wL2luc3RhbGxDb3VudGVyLnR4dFwiKX06ICR7bG9nfWAsIFwid1wiKVxuICApO1xuXG4gIChcbiAgICBib3VnaHRfYXVncy5pbmNsdWRlcyhDT04uVFJQKSAmJiAod3JpdGVMb2coXCJpbnN0YWxsZWQgVGhlIFJlZCBQaWxsXCIpLCBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuc29mdFJlc2V0XCIsIFtcInJzZXQuanNcIl0pKSwgLy8gaWYgaGF2ZSBUUlAgdGhlbiBpbnN0YWxsIGFzYXBcbiAgICAhKGF3YWl0IGlzX0J1c3kobnMpKVxuICAgICYmICEhYm91Z2h0X2F1Z3MubGVuZ3RoXG4gICAgJiYgKGNoZWNrVGltZW91dCgpIHx8IGNoZWNrRmF2b3VyKCkpXG4gICAgJiYgKFxuICAgICAgbnMud3JpdGUoXCJ0ZW1wL2luc3RhbGxDb3VudGVyLnR4dFwiLCAoMSArICtyZWFkeUZpbGV5KG5zLCBcInRlbXAvaW5zdGFsbENvdW50ZXIudHh0XCIpKS50b1N0cmluZygpLCBcIndcIiksXG4gICAgICBucy53cml0ZShcInJlcG9ydC9pbnN0YWxsQXVnc0xvZy50eHRcIiwgcmVhZHlGaWxleShucywgXCJ0ZW1wL2luc3RhbGxBdWdzUmVhc29uLnR4dFwiKSArIFwiXFxuXCIsIFwiYVwiKSxcbiAgICAgIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5pbnN0YWxsQXVnbWVudGF0aW9uc1wiLCBbXCJyc2V0LmpzXCJdKVxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBidXlBdWdzKG5zOiBOUywgcyA9IG5zLnNpbmd1bGFyaXR5KSB7XG4gIGNvbnN0IG9kZF9mYWN0aW9ucyA9IFtcIkJsYWRlYnVybmVyc1wiLCBcIkNodXJjaCBvZiB0aGUgTWFjaGluZSBHb2RcIl07XG4gIGNvbnN0IGF2YWlsYWJsZUF1Z3MgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYXZhaWxhYmxlQXVncy50eHRcIik7XG5cbiAgY29uc3QgdGltZVN0YW1wID0gKCkgPT4gbnMud3JpdGUoXCJ0ZW1wL2xhc3RBdWdUaW1lLnR4dFwiLCBcIlwiICsgRGF0ZS5ub3coKSwgXCJ3XCIpO1xuICBjb25zdCB0ZXJtUHJpbnQgPSAoYXVnKSA9PlxuICAgIG5zLnRwcmludGYoXG4gICAgICBgJHt1dGlsLmFuc2kubX1QdXJjaGFzZWQgJHt1dGlsLmFuc2kuY30ke2F1Zy5hdWd9JHt1dGlsLmFuc2kubX0gZnJvbSAke2F1Zy5mYWN0Lm5hbWV9IGZvciAkJHtucy5mb3JtYXROdW1iZXIoYXVnLnByaWNlKX1gLFxuICAgICk7XG4gIGNvbnN0IHRlcm1QcmludE5GRyA9IChmYWN0aW9uKSA9PlxuICAgIG5zLnRwcmludGYoXG4gICAgICBgJHt1dGlsLmFuc2kubX1QdXJjaGFzZWQgJHt1dGlsLmFuc2kuY30ke0NPTi5ORkd9JHt1dGlsLmFuc2kubX0gZnJvbSAke2ZhY3Rpb259IGZvciAkJHtucy5mb3JtYXROdW1iZXIocy5nZXRBdWdtZW50YXRpb25QcmljZShDT04uTkZHKSl9YCxcbiAgICApO1xuXG4gIChcbiAgICBucy5nZXRQbGF5ZXIoKS5mYWN0aW9uc1xuICAgICAgLmZvckVhY2goKGYpID0+XG4gICAgICAgIGYgIT0gQ09OLkdBTkdfTkFNRVxuICAgICAgICAmJiBzLnB1cmNoYXNlQXVnbWVudGF0aW9uKGYsIENPTi5ORkcpXG4gICAgICAgICYmICh0aW1lU3RhbXAoKSwgdGVybVByaW50TkZHKGYpKSxcbiAgICAgICksXG4gICAgYXZhaWxhYmxlQXVncy5mb3JFYWNoKChhdWcpID0+XG4gICAgICBzLnB1cmNoYXNlQXVnbWVudGF0aW9uKGF1Zy5mYWN0Lm5hbWUsIGF1Zy5hdWcpXG4gICAgICAmJiAodGltZVN0YW1wKCksIHRlcm1QcmludChhdWcpKVxuICAgICksXG4gICAgb2RkX2ZhY3Rpb25zLmZvckVhY2goKGZhYykgPT5cbiAgICAgIHMuZ2V0QXVnbWVudGF0aW9uc0Zyb21GYWN0aW9uKGZhYykuZm9yRWFjaCgoYXVnKSA9PiBzLnB1cmNoYXNlQXVnbWVudGF0aW9uKGZhYywgYXVnKSksXG4gICAgKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIG93bmVkQXVncyhuczogTlMpIHtcbiAgY29uc3Qgd3J0ID0gYXN5bmMgKGZpbGUsIGRhdGEpID0+IGF3YWl0IFJ1bihucywgXCJ3cml0ZVwiLCBbZmlsZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIFwid1wiXSk7XG4gICEoYXdhaXQgUnVuKG5zLCBcImZpbGVFeGlzdHNcIiwgW1widGVtcC9pbnN0YWxsQ291bnRlci50eHRcIl0pKSAmJiB3cnQoXCJ0ZW1wL2luc3RhbGxDb3VudGVyLnR4dFwiLCAwKSxcbiAgICB3cnQoXG4gICAgICBcInRlbXAvYm91Z2h0QXVncy50eHRcIixcbiAgICAgIChhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuZ2V0T3duZWRBdWdtZW50YXRpb25zXCIsIFsxXSkpLnNsaWNlKFxuICAgICAgICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldE93bmVkQXVnbWVudGF0aW9uc1wiLCBbMF0pKS5sZW5ndGgsXG4gICAgICApLFxuICAgICksXG4gICAgd3J0KFxuICAgICAgXCJ0ZW1wL3ByaWNlUmF0aW8udHh0XCIsXG4gICAgICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldEF1Z21lbnRhdGlvblByaWNlXCIsIFtcIkNvbWJhdCBSaWIgSVwiXSkpXG4gICAgICAvIChhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuZ2V0QXVnbWVudGF0aW9uQmFzZVByaWNlXCIsIFtcIkNvbWJhdCBSaWIgSVwiXSkpLFxuICAgICksXG4gICAgd3J0KFwidGVtcC9vd25lZEF1Z3MudHh0XCIsIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRPd25lZEF1Z21lbnRhdGlvbnNcIiwgWzFdKSksXG4gICAgd3J0KFwidGVtcC9pbnN0YWxsZWRBdWdzLnR4dFwiLCBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuZ2V0T3duZWRBdWdtZW50YXRpb25zXCIsIFswXSkpLFxuICAgIHdydChcInRlbXAvbmZnSW5mby50eHRcIiwge1xuICAgICAgY29zdDogYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldEF1Z21lbnRhdGlvblByaWNlXCIsIFtDT04uTkZHXSksXG4gICAgICByZXA6IGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRBdWdtZW50YXRpb25SZXBSZXFcIiwgW0NPTi5ORkddKSxcbiAgICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXZhaWxhYmxlQXVncyhuczogTlMsIHMgPSBucy5zaW5ndWxhcml0eSkge1xuICBjb25zdCBvd25lZF9hdWdzID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL293bmVkQXVncy50eHRcIik7XG4gIGNvbnN0IGZvcmJpZGRlbl9mYWN0aW9ucyA9IFtcIlNoYWRvd3Mgb2YgQW5hcmNoeVwiLCBcIkJsYWRlYnVybmVyc1wiLCBcIkNodXJjaCBvZiB0aGUgTWFjaGluZSBHb2RcIl07XG4gIGNvbnN0IGF1Z19vYmplY3QgPSBuc1xuICAgIC5nZXRQbGF5ZXIoKVxuICAgIC5mYWN0aW9ucy5maWx0ZXIoKGZhY3Rpb24pID0+ICFmb3JiaWRkZW5fZmFjdGlvbnMuaW5jbHVkZXMoZmFjdGlvbikpXG4gICAgLmZsYXRNYXAoKGZhY3Rpb24pID0+XG4gICAgICBzXG4gICAgICAgIC5nZXRBdWdtZW50YXRpb25zRnJvbUZhY3Rpb24oZmFjdGlvbilcbiAgICAgICAgLmZpbHRlcigoYXVnKSA9PiBDT04uQVVHU19UT19CVVkuaW5jbHVkZXMoYXVnKSAmJiAhb3duZWRfYXVncy5pbmNsdWRlcyhhdWcpKVxuICAgICAgICAubWFwKChhdWdtZW50KSA9PiAoe1xuICAgICAgICAgIGF1ZzogYXVnbWVudCxcbiAgICAgICAgICBwcmljZTogcy5nZXRBdWdtZW50YXRpb25QcmljZShhdWdtZW50KSxcbiAgICAgICAgICByZXByZXE6IHMuZ2V0QXVnbWVudGF0aW9uUmVwUmVxKGF1Z21lbnQpLFxuICAgICAgICAgIHJlcGRlbHRhOiBzLmdldEF1Z21lbnRhdGlvblJlcFJlcShhdWdtZW50KSAtIHMuZ2V0RmFjdGlvblJlcChmYWN0aW9uKSxcbiAgICAgICAgICBmYWN0OiB7XG4gICAgICAgICAgICBuYW1lOiBmYWN0aW9uLFxuICAgICAgICAgICAgZmF2OiBzLmdldEZhY3Rpb25GYXZvcihmYWN0aW9uKSxcbiAgICAgICAgICAgIGZhdmRlbHRhOiBzLmdldEZhY3Rpb25GYXZvckdhaW4oZmFjdGlvbiksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpLFxuICAgICk7XG4gIG5zLndyaXRlKFwidGVtcC9hdmFpbGFibGVBdWdzLnR4dFwiLCBKU09OLnN0cmluZ2lmeShhdWdfb2JqZWN0ID8/IFtdKSwgXCJ3XCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBiYWNrZG9vcihuOiBOUykge1xuICBbXCJDU0VDXCIsIFwiYXZtbml0ZS0wMmhcIiwgXCJydW40dGhlaDExMXpcIiwgXCJJLkkuSS5JXCIsIFwiaG9tZVwiXS5tYXAobi5nZXRTZXJ2ZXIpLmZvckVhY2goXG4gICAgKHMpID0+XG4gICAgICAhcy5iYWNrZG9vckluc3RhbGxlZFxuICAgICAgJiYgcy5oYXNBZG1pblJpZ2h0c1xuICAgICAgJiYgbi5nZXRIYWNraW5nTGV2ZWwoKSA+IHMucmVxdWlyZWRIYWNraW5nU2tpbGxcbiAgICAgICYmICFuLmlzUnVubmluZyhcInV0aWwvYmQuanNcIiwgXCJob21lXCIsIHMuaG9zdG5hbWUpXG4gICAgICAmJiBuLnJ1bihcInV0aWwvYmQuanNcIiwgeyB0aHJlYWRzOiAxLCByYW1PdmVycmlkZTogNS44IH0sIHMuaG9zdG5hbWUpLFxuICApO1xufVxuXG5mdW5jdGlvbiBoYWNrbmV0U2hpbmRpZ3MobnM6IE5TLCBoID0gbnMuaGFja25ldCkge1xuICBjb25zdCBub2RlX2FycmF5ID0gdXRpbC5nZXRJbmRleEFycmF5KGgubnVtTm9kZXMoKSk7XG4gIGNvbnN0IHByb2ZpdHMgPSBucy5nZXRNb25leVNvdXJjZXMoKS5zaW5jZUluc3RhbGwuaGFja25ldCArIG5zLmdldE1vbmV5U291cmNlcygpLnNpbmNlSW5zdGFsbC5oYWNrbmV0X2V4cGVuc2VzO1xuICBjb25zdCBzZXJ2ZXJfb2JqID0gc0dldChucykubWFwKChzZXJ2ZXIpID0+ICh7XG4gICAgbmFtZTogc2VydmVyLFxuICAgIG1vbmV5OiBucy5nZXRTZXJ2ZXJNYXhNb25leShzZXJ2ZXIpLFxuICAgIHNlYzogbnMuZ2V0U2VydmVyTWluU2VjdXJpdHlMZXZlbChzZXJ2ZXIpLFxuICB9KSk7XG4gIGNvbnN0IG1vbmV5dGFyZ2V0c2VydmVyID0gc2VydmVyX29iai5yZWR1Y2UoKGEsIGIpID0+IChhLm1vbmV5IDwgYi5tb25leSA/IGEgOiBiKSkubmFtZTtcbiAgY29uc3Qgc2VjdGFyZ2V0c2VydmVyID0gc2VydmVyX29iai5yZWR1Y2UoKGEsIGIpID0+IChhLnNlYyA+IGIuc2VjID8gYSA6IGIpKS5uYW1lO1xuICBjb25zdCBpbmZvID0ge1xuICAgIG51bTogaC5udW1Ob2RlcygpLFxuICAgIGhhc2hlczogYCR7bnMuZm9ybWF0TnVtYmVyKGgubnVtSGFzaGVzKCkpfS8ke25zLmZvcm1hdE51bWJlcihoLmhhc2hDYXBhY2l0eSgpLCAwKX1gLFxuICAgIHByb2Q6IG5vZGVfYXJyYXkucmVkdWNlKChhLCBuKSA9PiBhICsgaC5nZXROb2RlU3RhdHMobikucHJvZHVjdGlvbiwgMCksXG4gICAgcHJvZml0OiBwcm9maXRzLFxuICB9O1xuXG4gIGNvbnN0IHVwTW9uZXkgPSAoKSA9PlxuICAgIG5zLmdldFNlcnZlck1heE1vbmV5KG1vbmV5dGFyZ2V0c2VydmVyKSA8IDFlMTNcbiAgICAmJiBoLnNwZW5kSGFzaGVzKFwiSW5jcmVhc2UgTWF4aW11bSBNb25leVwiLCBtb25leXRhcmdldHNlcnZlcilcbiAgICAmJiB1cE1vbmV5KCk7XG4gIGNvbnN0IGRvd25TZWMgPSAoKSA9PlxuICAgIG5zLmdldFNlcnZlck1pblNlY3VyaXR5TGV2ZWwoc2VjdGFyZ2V0c2VydmVyKSA+IDFcbiAgICAmJiBoLnNwZW5kSGFzaGVzKFwiUmVkdWNlIE1pbmltdW0gU2VjdXJpdHlcIiwgc2VjdGFyZ2V0c2VydmVyKVxuICAgICYmIGRvd25TZWMoKTtcblxuICBjb25zdCBub2RlQnV5ID0gKCkgPT4gaC5wdXJjaGFzZU5vZGUoKSArIDEgJiYgbm9kZUJ1eSgpO1xuICBjb25zdCB1cFBhcnRzID0gKCkgPT5cbiAgICBbXCJMZXZlbFwiLCBcIkNvcmVcIiwgXCJSYW1cIiwgXCJDYWNoZVwiXS5mb3JFYWNoKChwYXJ0KSA9PiBub2RlX2FycmF5LmZvckVhY2goKG4pID0+IGhbYHVwZ3JhZGUke3BhcnR9YF0obikgJiYgdXBQYXJ0cygpKSk7XG5cbiAgKFxuICAgIChcbiAgICAgIHByb2ZpdHMgPiAtMVxuICAgICAgJiYgKFxuICAgICAgICB1cE1vbmV5KCksXG4gICAgICAgIGRvd25TZWMoKSxcbiAgICAgICAgbm9kZUJ1eSgpLFxuICAgICAgICB1cFBhcnRzKClcbiAgICAgIClcbiAgICApLFxuICAgIG5zLndyaXRlKFwidGVtcC9oYWNrbmV0X2luZm8udHh0XCIsIEpTT04uc3RyaW5naWZ5KGluZm8pLCBcIndcIilcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBzdGV2ZXMobnM6IE5TKSB7XG4gIGNvbnN0IFtzLCBiLCBnXSA9IFtucy5zbGVldmUsIG5zLmJsYWRlYnVybmVyLCBucy5nYW5nXTtcbiAgY29uc3Qgc3RldmVzID0gdXRpbC5nZXRJbmRleEFycmF5KDgpLnNvcnQoKGEsIGIpID0+IHMuZ2V0U2xlZXZlKGIpLnN0b3JlZEN5Y2xlcyAtIHMuZ2V0U2xlZXZlKGEpLnN0b3JlZEN5Y2xlcyk7XG4gIGNvbnN0IGdldF9sb3dfc2tpbGwgPSAoc3RldmUpID0+XG4gICAgW1wic3RyZW5ndGhcIiwgXCJkZWZlbnNlXCIsIFwiZGV4dGVyaXR5XCIsIFwiYWdpbGl0eVwiXS5yZWR1Y2UoXG4gICAgICAoYSwgc2tpbGwpID0+IChzLmdldFNsZWV2ZShzdGV2ZSkuc2tpbGxzW3NraWxsXSA8IDI1ID8gc2tpbGwgOiBhKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG4gIGNvbnN0IHRyeV90cmFpbiA9IChzdGV2ZSkgPT4gKHNraWxsID0+IHNraWxsICYmIChzLnRyYXZlbChzdGV2ZSwgXCJTZWN0b3ItMTJcIiksIHMuc2V0VG9HeW1Xb3Jrb3V0KHN0ZXZlLCBcIlBvd2VyaG91c2UgR3ltXCIsIHNraWxsLnRvU3RyaW5nKCkpKSkoZ2V0X2xvd19za2lsbChzdGV2ZSkpO1xuICBjb25zdCB0cnlfc3RhYmJpbiA9IChzdGV2ZSkgPT4gKCFnLmluR2FuZygpID8gcy5zZXRUb0NvbW1pdENyaW1lKHN0ZXZlLCBcIkhvbWljaWRlXCIpIDogZmFsc2UpO1xuICBjb25zdCBiYl9pbmZpbCA9IChzdGV2ZSkgPT4gKFxuICAgIGIuaW5CbGFkZWJ1cm5lcigpXG4gICAgJiYgIXN0ZXZlcy5tYXAoKHN0ZXZlKSA9PiBzLmdldFRhc2soc3RldmUpKS5zb21lKCh0YXNrKSA9PiB0YXNrPy50eXBlID09PSBcIklORklMVFJBVEVcIilcbiAgICAmJiBzLnNldFRvQmxhZGVidXJuZXJBY3Rpb24oc3RldmUsIFwiSW5maWx0cmF0ZSBzeW50aG9pZHNcIilcbiAgKTtcbiAgY29uc3QgYmJfY29udHJhY3RzID0gKHN0ZXZlKSA9PiAoXG4gICAgYi5pbkJsYWRlYnVybmVyKClcbiAgICAmJiBiLmdldENvbnRyYWN0TmFtZXMoKVxuICAgICAgLnNvbWUoKGNvbnRyYWN0KSA9PiBzdGV2ZXMuZXZlcnkoKHN0ZXZlKSA9PiAocy5nZXRUYXNrKHN0ZXZlKSBhcyBTbGVldmVCbGFkZWJ1cm5lclRhc2spPy5hY3Rpb25OYW1lICE9PSBjb250cmFjdClcbiAgICAgICAgJiYgYi5nZXRBY3Rpb25Db3VudFJlbWFpbmluZyhcIkNvbnRyYWN0XCIsIGNvbnRyYWN0KVxuICAgICAgICAmJiBzLnNldFRvQmxhZGVidXJuZXJBY3Rpb24oc3RldmUsIFwiVGFrZSBvbiBjb250cmFjdHNcIiwgY29udHJhY3QpLFxuICAgICAgKVxuICApO1xuICBjb25zdCByZWNvdmVyX29yX2lkbGUgPSAoc3RldmUpID0+IChzLmdldFNsZWV2ZShzdGV2ZSkuc2hvY2sgPyBzLnNldFRvU2hvY2tSZWNvdmVyeShzdGV2ZSkgOiBzLnNldFRvSWRsZShzdGV2ZSkpO1xuICBjb25zdCBidXlfYXVncyA9IChzdGV2ZSkgPT4gKFxuICAgIHMuZ2V0U2xlZXZlUHVyY2hhc2FibGVBdWdzKHN0ZXZlKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuY29zdCAtIGIuY29zdClcbiAgICAgIC5mb3JFYWNoKChhdWcpID0+IHMucHVyY2hhc2VTbGVldmVBdWcoc3RldmUsIGF1Zy5uYW1lKSlcbiAgKTtcbiAgKFxuICAgIHN0ZXZlcy5mb3JFYWNoKChzdGV2ZSkgPT4gcy5zZXRUb0lkbGUoc3RldmUpKSxcbiAgICBzdGV2ZXMuZm9yRWFjaCgoc3RldmUpID0+IChcbiAgICAgICFzLmdldFNsZWV2ZShzdGV2ZSkuc2hvY2sgJiYgYnV5X2F1Z3Moc3RldmUpLFxuICAgICAgcy5nZXRTbGVldmUoc3RldmUpLnNob2NrID4gOTBcbiAgICAgICAgPyByZWNvdmVyX29yX2lkbGUoc3RldmUpXG4gICAgICAgIDogdHJ5X3RyYWluKHN0ZXZlKVxuICAgICAgICB8fCB0cnlfc3RhYmJpbihzdGV2ZSlcbiAgICAgICAgfHwgYmJfaW5maWwoc3RldmUpXG4gICAgICAgIHx8IGJiX2NvbnRyYWN0cyhzdGV2ZSlcbiAgICAgICAgfHwgKHMuZ2V0U2xlZXZlKHN0ZXZlKS5zaG9ja1xuICAgICAgICAgID8gcy5zZXRUb1Nob2NrUmVjb3Zlcnkoc3RldmUpXG4gICAgICAgICAgOiBzLnNldFRvSWRsZShzdGV2ZSkpXG5cbiAgICApKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJidXJuZXIobnM6IE5TKSB7XG4gIGNvbnN0IFtzLCBiXSA9IFtucy5zaW5ndWxhcml0eSwgbnMuYmxhZGVidXJuZXJdXG4gIGNvbnN0IGdvVHJhaW4gPSBhc3luYyAoKSA9PiAoXG4gICAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnN0b3BBY3Rpb25cIiksXG4gICAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnRyYXZlbFRvQ2l0eVwiLCBbXCJTZWN0b3ItMTJcIl0pLFxuICAgIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5neW1Xb3Jrb3V0XCIsIFtcbiAgICAgIFwiUG93ZXJob3VzZSBHeW1cIixcbiAgICAgIFtcIkRlZmVuc2VcIiwgXCJTdHJlbmd0aFwiLCBcIkRleHRlcml0eVwiLCBcIkFnaWxpdHlcIl0ucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFNraWxsID0gKHN0cikgPT4gbnMuZ2V0UGxheWVyKCkuc2tpbGxzW3N0ci50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgcmV0dXJuIGdldFNraWxsKGEpIDwgZ2V0U2tpbGwoYikgPyBhIDogYjtcbiAgICAgIH0pLFxuICAgICAgMCxcbiAgICBdKVxuICApO1xuICBjb25zdCB1cFNraWxsID0gKCkgPT4gKFxuICAgIGIudXBncmFkZVNraWxsKFxuICAgICAgYi5nZXRTa2lsbE5hbWVzKCkucmVkdWNlKChhLCBjKSA9PiAoYi5nZXRTa2lsbFVwZ3JhZGVDb3N0KGEpIDwgYi5nZXRTa2lsbFVwZ3JhZGVDb3N0KGMpID8gYSA6IGMpKSxcbiAgICApICYmIHVwU2tpbGwoKVxuICApO1xuICBjb25zdCBkb09wID0gYXN5bmMgKG9wKSA9PiAoXG4gICAgIW9wXG4gICAgICA/IGQ0M20wbkQzNTdyMHkobnMpXG4gICAgICA6ICgoW2EsIGNdKSA9PiBhICsgYyA+IDEuOCkoYi5nZXRBY3Rpb25Fc3RpbWF0ZWRTdWNjZXNzQ2hhbmNlKFwiQmxhY2tPcHNcIiwgYi5nZXROZXh0QmxhY2tPcCgpLm5hbWUpKVxuICAgICAgJiYgIShhd2FpdCBpc19CdXN5KG5zKSlcbiAgICAgICYmIChzLnN0b3BBY3Rpb24oKSwgYi5zdGFydEFjdGlvbihcIkJsYWNrT3BzXCIsIGIuZ2V0TmV4dEJsYWNrT3AoKS5uYW1lKSlcbiAgKTtcblxuICAoXG4gICAgYi5qb2luQmxhZGVidXJuZXJEaXZpc2lvbigpLFxuICAgICFiLmluQmxhZGVidXJuZXIoKVxuICAgICAgPyBhd2FpdCBnb1RyYWluKClcbiAgICAgIDogKHVwU2tpbGwoKSwgYXdhaXQgZG9PcChiLmdldE5leHRCbGFja09wKCk/Lm5hbWUpKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YW4obnM6IE5TLCBzID0gbnMuc3RhbmVrKSB7XG4gIG5zLmRpc2FibGVMb2coXCJBTExcIiksIG5zLmVuYWJsZUxvZyhcImV4ZWNcIiksIG5zLnJ1bihcImxzZy5qc1wiKTtcbiAgcy5hY2NlcHRHaWZ0KCkgfHwgKGF3YWl0IG5zLnNsZWVwKDFlMyksIGF3YWl0IHN0YW4obnMpKTtcbiAgY29uc3Qgc3BhcmVfdGhyZWFkcyA9IE1hdGguZmxvb3IoKGdldEZyZWVSYW0obnMsIFwiaG9tZVwiKSAtIDUwKSAvIG5zLmdldFNjcmlwdFJhbShcImNocmcuanNcIikpO1xuICBjb25zdCB0YXJnZXQgPSBzXG4gICAgLmFjdGl2ZUZyYWdtZW50cygpXG4gICAgLmZpbHRlcigoZikgPT4gZi5pZCA8IDEwMClcbiAgICAucmVkdWNlKChhLCBiKSA9PiAoYS5udW1DaGFyZ2UgPCBiLm51bUNoYXJnZSA/IGEgOiBiKSwgeyBudW1DaGFyZ2U6IE5hTiwgeDogTmFOLCB5OiBOYU4gfSk7XG4gICEhdGFyZ2V0ICYmXG4gICAgKHNwYXJlX3RocmVhZHMgPiAwICYmICFpc05hTih0YXJnZXQubnVtQ2hhcmdlKVxuICAgICAgPyBucy5leGVjKFwiY2hyZy5qc1wiLCBcImhvbWVcIiwgc3BhcmVfdGhyZWFkcywgdGFyZ2V0LngsIHRhcmdldC55KVxuICAgICAgOiBucy5wcmludChcIm5vIHRocmVhZHMhIHNraXBwaW5nLi4uXCIpKSxcbiAgICBucy53cml0ZVBvcnQobnMucGlkLCBcIlwiKSxcbiAgICBhd2FpdCB1dGlsLnNscCgxZTQpLFxuICAgIGF3YWl0IHN0YW4obnMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5HYW5nKG4sIGcgPSBuLmdhbmcpIHtcbiAgY29uc3QgdHJ5UmVjcnVpdCA9IChuYW1lID0gQ09OLk1FTUJFUl9OQU1FU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDT04uTUVNQkVSX05BTUVTLmxlbmd0aCldKSA9PlxuICAgIGcuZ2V0TWVtYmVyTmFtZXMoKS5pbmNsdWRlcyhuYW1lKVxuICAgICAgPyB0cnlSZWNydWl0KClcbiAgICAgIDogZy5yZWNydWl0TWVtYmVyKG5hbWUpICYmIG4udHByaW50ZihgJHt1dGlsLmFuc2kucn1SZWNydWl0ZWQgJHt1dGlsLmFuc2kuZ30ke25hbWV9YCk7XG4gIGNvbnN0IHNldFRXID0gKCkgPT5cbiAgICBnLnNldFRlcnJpdG9yeVdhcmZhcmUoT2JqZWN0LmtleXMob3RoZXJfZ2FuZ19pbmZvKCkpLmV2ZXJ5KChoKSA9PiBnLmdldENoYW5jZVRvV2luQ2xhc2goaCkgPj0gMC41KSk7XG4gIGNvbnN0IHNscCA9IGFzeW5jICh0KSA9PiBhd2FpdCBuLnNsZWVwKHQgLyAoZy5nZXRCb251c1RpbWUoKSA+IDVlMyA/IDI1IDogMSkpO1xuICBjb25zdCBvdGhlcl9nYW5nX2luZm8gPSBnLmdldE90aGVyR2FuZ0luZm9ybWF0aW9uO1xuICBjb25zdCB0aWNrID0gYXN5bmMgKFxuICAgIHEgPSAoKSA9PiBPYmplY3QudmFsdWVzKG90aGVyX2dhbmdfaW5mbygpKS5yZWR1Y2UoKGE6IG51bWJlciwgYjogR2FuZ090aGVySW5mb09iamVjdCkgPT4gYSArIGIucG93ZXIsIDApLFxuICAgIGwgPSBxKCksXG4gICkgPT4gKGF3YWl0IG4uc2xlZXAoNTApLCBsID09IHEoKSAmJiAoYXdhaXQgdGljaygpKSk7XG4gIGNvbnN0IGZvY3VzID0gKCkgPT4gKGcuZ2V0TWVtYmVyTmFtZXMoKS5sZW5ndGggPiA5ID8gXCJtb25leUdhaW5cIiA6IFwicmVzcGVjdEdhaW5cIik7XG4gIGNvbnN0IGFzc2lnbkpvYiA9ICh0YXNrKSA9PiAoXG4gICAgZy5nZXRNZW1iZXJOYW1lcygpLmZvckVhY2goXG4gICAgICAobWVtYmVyKSA9PiAoXG4gICAgICAgIGcuZ2V0RXF1aXBtZW50TmFtZXMoKS5mb3JFYWNoKChpdGVtKSA9PiBnLnB1cmNoYXNlRXF1aXBtZW50KG1lbWJlciwgaXRlbSkpLFxuICAgICAgICBbXCJhZ2lcIiwgXCJzdHJcIiwgXCJkZWZcIiwgXCJkZXhcIl0ucmVkdWNlKChhLCBiKSA9PiBhICsgZy5nZXRBc2NlbnNpb25SZXN1bHQobWVtYmVyKT8uW2JdLCAwKSA+IDYgJiYgZy5hc2NlbmRNZW1iZXIobWVtYmVyKSxcbiAgICAgICAgZy5zZXRNZW1iZXJUYXNrKFxuICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICB0YXNrID8/IGcuZ2V0VGFza05hbWVzKCkucmVkdWNlKFxuICAgICAgICAgICAgKGEsIGIpID0+IChcbiAgICAgICAgICAgICAgZy5zZXRNZW1iZXJUYXNrKG1lbWJlciwgYiksXG4gICAgICAgICAgICAgICgoZ2FpbikgPT4gKGdhaW4gPCBhLmRhdCA/IGEgOiB7IG5hbWU6IGIsIGRhdDogZ2FpbiB9KSkoZy5nZXRNZW1iZXJJbmZvcm1hdGlvbihtZW1iZXIpW2ZvY3VzKCldKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLm5hbWUsXG4gICAgICAgIClcbiAgICAgICksXG4gICAgKSxcbiAgICBwcmludFRvUG9ydChcbiAgICAgIHRhc2s/LnNwbGl0KFwiIFwiKVxuICAgICAgICAubWFwKChhKSA9PiBhWzBdKVxuICAgICAgICAuam9pbihcIlwiKSA/PyBcIkpvYnNcIixcbiAgICApXG4gICk7XG4gIGNvbnN0IHByaW50VG9Qb3J0ID0gKGpvYikgPT4gKFxuICAgIG4uY2xlYXJQb3J0KG4ucGlkKSxcbiAgICBuLndyaXRlUG9ydChuLnBpZCwge1xuICAgICAgY3ljbGU6IGpvYixcbiAgICAgIHNpemU6IGcuZ2V0TWVtYmVyTmFtZXMoKS5sZW5ndGgsXG4gICAgICBwb3dlcjogZy5nZXRHYW5nSW5mb3JtYXRpb24oKS5wb3dlcixcbiAgICAgIG5leHRwb3dlcjogT2JqZWN0LnZhbHVlcyhvdGhlcl9nYW5nX2luZm8oKSkucmVkdWNlKChhOiBudW1iZXIsIGI6IEdhbmdPdGhlckluZm9PYmplY3QpID0+IChhID4gYi5wb3dlciA/IGEgOiBiLnBvd2VyKSwgMCksXG4gICAgICB0ZXJyaXRvcnk6IGcuZ2V0R2FuZ0luZm9ybWF0aW9uKCkudGVycml0b3J5ICogMTAwLFxuICAgICAgdHc6IGcuZ2V0R2FuZ0luZm9ybWF0aW9uKCkudGVycml0b3J5V2FyZmFyZUVuZ2FnZWQsXG4gICAgfSlcbiAgKTtcblxuICAoXG4gICAgKGcuaW5HYW5nKCkgfHwgZy5jcmVhdGVHYW5nKENPTi5HQU5HX05BTUUpKVxuICAgICYmIChcbiAgICAgIHRyeVJlY3J1aXQoKSxcbiAgICAgIHNldFRXKCksXG4gICAgICBhc3NpZ25Kb2IodW5kZWZpbmVkKSxcbiAgICAgIGF3YWl0IHNscCgxNWUzKSxcbiAgICAgIGFzc2lnbkpvYihcIlRyYWluIENvbWJhdFwiKSxcbiAgICAgIGF3YWl0IHNscCg0NTAwKSxcbiAgICAgIGFzc2lnbkpvYihcIlRlcnJpdG9yeSBXYXJmYXJlXCIpLFxuICAgICAgYXdhaXQgdGljaygpLFxuICAgICAgYXdhaXQgcnVuR2FuZyhuKVxuICAgIClcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnb2xmZWRHYW5nKFxuICBuLFxuICBnID0gbi5nYW5nLFxuICBzID0gYXN5bmMgKHQpID0+IGF3YWl0IG4uc2xlZXAodCAvIChnLmdldEJvbnVzVGltZSgpID4gNWUzID8gMjUgOiAxKSksXG4gIGEgPSAoaikgPT5cbiAgICBnXG4gICAgICAuZ2V0TWVtYmVyTmFtZXMoKVxuICAgICAgLm1hcChcbiAgICAgICAgKG0pID0+IChcbiAgICAgICAgICBnLmdldEVxdWlwbWVudE5hbWVzKCkubWFwKChpKSA9PiBnLnB1cmNoYXNlRXF1aXBtZW50KG0sIGkpKSxcbiAgICAgICAgICBbXCJhZ2lcIiwgXCJzdHJcIiwgXCJkZWZcIiwgXCJkZXhcIl0ucmVkdWNlKChhLCBiKSA9PiBhICsgZy5nZXRBc2NlbnNpb25SZXN1bHQobSk/LltiXSwgMCkgPiA2ICYmIGcuYXNjZW5kTWVtYmVyKG0pLFxuICAgICAgICAgIGcuc2V0TWVtYmVyVGFzayhcbiAgICAgICAgICAgIG0sXG4gICAgICAgICAgICBqID8/IGcuZ2V0VGFza05hbWVzKCkucmVkdWNlKChhLCBiKSA9PlxuICAgICAgICAgICAgICAoZy5zZXRNZW1iZXJUYXNrKG0sIGIpLCAoaSkgPT4gKGkgPCBhLmcgPyBhIDogeyBuOiBiLCBnOiBpIH0pKShcbiAgICAgICAgICAgICAgICBnLmdldE1lbWJlckluZm9ybWF0aW9uKG0pW2cuZ2V0TWVtYmVyTmFtZXMoKS5sZW5ndGggPiA5ID8gXCJtb25leUdhaW5cIiA6IFwicmVzcGVjdEdhaW5cIl0sXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLm4sXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgKSxcbikge1xuXG4gIChcbiAgICAoZy5pbkdhbmcoKSB8fCBnLmNyZWF0ZUdhbmcoXCJTbHVtIFNuYWtlc1wiKSlcbiAgICAmJiAoXG4gICAgICBnLnJlY3J1aXRNZW1iZXIoTWF0aC5yYW5kb20oKSksXG4gICAgICBnLnNldFRlcnJpdG9yeVdhcmZhcmUoT2JqZWN0LmtleXMoZy5nZXRPdGhlckdhbmdJbmZvcm1hdGlvbigpKS5ldmVyeSgoaCkgPT4gZy5nZXRDaGFuY2VUb1dpbkNsYXNoKGgpID4gMC41KSksXG4gICAgICBhKHVuZGVmaW5lZCksXG4gICAgICBhd2FpdCBzKDE1ZTMpLFxuICAgICAgYShcIlRyYWluIENvbWJhdFwiKSxcbiAgICAgIGF3YWl0IHMoNDUwMCksXG4gICAgICBhKFwiVGVycml0b3J5IFdhcmZhcmVcIiksXG4gICAgICBhd2FpdCBnLm5leHRVcGRhdGUoKSxcbiAgICAgIGF3YWl0IHJ1bkdhbmcobilcbiAgICApXG4gIClcbn1cblxudHlwZSBQbGF5ZXJFeHAgPSB7XG4gIGhhY2tpbmc6IG51bWJlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJzbShuczogTlMpIHtcbiAgbnMuZGlzYWJsZUxvZyhcIkFMTFwiKTtcbiAgbnMuZW5hYmxlTG9nKFwiZXhlY1wiKTtcbiAgY29uc3QgaGFja19wZXJjZW50YWdlID0gMC4wMTtcbiAgY29uc3QgYmF0Y2hfZGVsYXkgPSAyMDtcbiAgY29uc3Qgd3JpdGVfd29ya2VycyA9ICgpID0+XG4gICAgW1wiaGFja1wiLCBcImdyb3dcIiwgXCJ3ZWFrZW5cIl0uZm9yRWFjaChcbiAgICAgIChzY3JpcHQpID0+IChcbiAgICAgICAgIW5zLmZpbGVFeGlzdHMoc2NyaXB0KSAmJlxuICAgICAgICBucy53cml0ZShcbiAgICAgICAgICBgJHtzY3JpcHR9LmpzYCxcbiAgICAgICAgICBgZXhwb3J0IGNvbnN0IG1haW4gPSBhc3luYyBucyA9PiBhd2FpdCBucy4ke3NjcmlwdH0obnMuYXJnc1swXSwgeyBhZGRpdGlvbmFsTXNlYzogbnMuYXJnc1sxXSB9KWAsXG4gICAgICAgICAgXCJ3XCIsXG4gICAgICAgICksXG4gICAgICAgIHNHZXQobnMpLmZvckVhY2goKHNlcnZlcikgPT4gbnMuc2NwKGAke3NjcmlwdH0uanNgLCBzZXJ2ZXIpKVxuICAgICAgKSxcbiAgICApO1xuICBjb25zdCBnZXRIb3N0UmFtID0gKHNlcnZlcikgPT4gTWF0aC5mbG9vcihnZXRGcmVlUmFtKG5zLCBzZXJ2ZXIpIC0gKHNlcnZlciA9PSBcImhvbWVcIiA/IDEwMCA6IDApKTtcbiAgY29uc3QgbW9kUGxheWVyID0gKHBsYXllciwgdGhyZWFkcywgdGFyZ2V0KSA9PlxuICAgIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIE9iamVjdC5lbnRyaWVzKHBsYXllcikubWFwKFxuICAgICAgICAoW2tleSwgZW50cnldOiBbc3RyaW5nLCBQbGF5ZXJFeHBdKSA9PiAoXG4gICAgICAgICAga2V5ID09IFwiZXhwXCIgJiYgKGVudHJ5LmhhY2tpbmcgKz0gbnMuZm9ybXVsYXMuaGFja2luZy5oYWNrRXhwKHRhcmdldCwgcGxheWVyKSAqIHRocmVhZHMpLFxuICAgICAgICAgIGtleSA9PSBcInNraWxsc1wiICYmXG4gICAgICAgICAgKGVudHJ5LmhhY2tpbmcgPSBucy5mb3JtdWxhcy5za2lsbHMuY2FsY3VsYXRlU2tpbGwocGxheWVyLmV4cC5oYWNraW5nLCBwbGF5ZXIubXVsdHMuaGFja2luZykpLFxuICAgICAgICAgIFtrZXksIGVudHJ5XVxuICAgICAgICApLFxuICAgICAgKSxcbiAgICApO1xuICBjb25zdCBzZW5kSm9icyA9IChiX29iaiwgcF9vYmopID0+IChcbiAgICAoYl9vYmoudGhyZWFkcyA9IE1hdGgubWluKGJfb2JqLmF2YWlsYWJsZSwgYl9vYmouc2NyaXB0LmpvYnMpKSxcbiAgICAoYl9vYmouYXZhaWxhYmxlIC09IGJfb2JqLnRocmVhZHMpLFxuICAgIChiX29iai5zY3JpcHQuam9icyAtPSBiX29iai50aHJlYWRzKSxcbiAgICBiX29iai50aHJlYWRzID4gMCAmJlxuICAgICAgISFucy5leGVjKGAke2Jfb2JqLnNjcmlwdC5uYW1lfS5qc2AsIGJfb2JqLmhvc3QsIGJfb2JqLnRocmVhZHMsIGJfb2JqLnRhcmdldC5ob3N0bmFtZSwgYl9vYmouc2NyaXB0LnRpbWUpXG4gICAgICA/IGJfb2JqLmF2YWlsYWJsZSA+IDAgJiYgYl9vYmouc2NyaXB0LmpvYnMgPiAxXG4gICAgICAgID8gc2VuZEpvYnMoYl9vYmosIG1vZFBsYXllcihwX29iaiwgYl9vYmoudGhyZWFkcywgYl9vYmoudGFyZ2V0KSlcbiAgICAgICAgOiBtb2RQbGF5ZXIocF9vYmosIGJfb2JqLnRocmVhZHMsIGJfb2JqLnRhcmdldClcbiAgICAgIDogcF9vYmpcbiAgKTtcblxuICBhc3luYyBmdW5jdGlvbiBydW5Mb29wKHJ1bl9wX29iaikge1xuICAgICFucy5pc1J1bm5pbmcoXCJzaGFyZS5qc1wiKSAmJlxuICAgICAgbnMucnVuKFwic2hhcmUuanNcIiwgTWF0aC5mbG9vcigwLjI1ICogKGdldEZyZWVSYW0obnMsIFwiaG9tZVwiKSAvIG5zLmdldFNjcmlwdFJhbShcInNoYXJlLmpzXCIpKSkgfHwgMSk7XG4gICAgd3JpdGVfd29ya2VycygpO1xuICAgIGNvbnN0IGhvc3RfbGlzdCA9IHNHZXQobnMpLmZpbHRlcigoc2VydmVyKSA9PiBucy5oYXNSb290QWNjZXNzKHNlcnZlcikgJiYgc2VydmVyLnN1YnN0cmluZygwLCA3KSAhPSBcImhhY2tuZXRcIik7XG4gICAgY29uc3QgZ2V0QXZhaWxhYmxlVGhyZWFkcyA9IChzY3JpcHQpID0+XG4gICAgICBob3N0X2xpc3QucmVkdWNlKChhLCBzZXJ2ZXIpID0+IGEgKyBNYXRoLmZsb29yKGdldEhvc3RSYW0oc2VydmVyKSAvIG5zLmdldFNjcmlwdFJhbShgJHtzY3JpcHQubmFtZX0uanNgKSksIDApO1xuICAgIGNvbnN0IHRhcmdldCA9IG5zLmdldFNlcnZlcihcbiAgICAgIGhvc3RfbGlzdC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgcmFuayA9IChzKSA9PiBucy5nZXRTZXJ2ZXJNYXhNb25leShzKSAvIG5zLmdldFNlcnZlck1pblNlY3VyaXR5TGV2ZWwocyk7XG4gICAgICAgIHJldHVybiBucy5nZXRTZXJ2ZXJSZXF1aXJlZEhhY2tpbmdMZXZlbChiKSA8PSBucy5nZXRIYWNraW5nTGV2ZWwoKSAvIDIgJiYgcmFuayhhKSA8IHJhbmsoYikgPyBiIDogYTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgY29uc3QgY2xhbXAgPSAobikgPT4gKG4gPCAxIHx8IG4gPT0gSW5maW5pdHkgPyAxIDogbik7XG4gICAgY29uc3QgaGFja19qb2JzID0gMTtcbiAgICBjb25zdCBncm93X2pvYnMgPVxuICAgICAgMSArIG5zLmdyb3d0aEFuYWx5emUodGFyZ2V0Lmhvc3RuYW1lLCAxIC8gKDEgLSBucy5mb3JtdWxhcy5oYWNraW5nLmhhY2tQZXJjZW50KHRhcmdldCwgcnVuX3Bfb2JqKSAqIGhhY2tfam9icykpO1xuICAgIGNvbnN0IHNlY19qb2JzID0gKHRhcmdldC5oYWNrRGlmZmljdWx0eSAtIHRhcmdldC5taW5EaWZmaWN1bHR5KSAvIG5zLndlYWtlbkFuYWx5emUoMSk7XG4gICAgY29uc3Qgd2Vrbl9qb2JzID0gc2VjX2pvYnMgKyBoYWNrX2pvYnMgKiAwLjA0ICsgZ3Jvd19qb2JzICogMC4wODtcbiAgICBjb25zdCBiYXRjaF90b3RhbCA9IGhhY2tfam9icyArIGdyb3dfam9icyArIHdla25fam9icztcbiAgICBjb25zdCBzcXVpc2ggPSAoc2NyaXB0LCBqb2JzKSA9PlxuICAgICAgTWF0aC5mbG9vcihiYXRjaF90b3RhbCA+IGdldEF2YWlsYWJsZVRocmVhZHMoc2NyaXB0KSA/IGpvYnMgKiAoZ2V0QXZhaWxhYmxlVGhyZWFkcyhzY3JpcHQpIC8gYmF0Y2hfdG90YWwpIDogam9icyk7XG4gICAgY29uc3Qgam9ic19hcnJheSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJoYWNrXCIsXG4gICAgICAgIGpvYnM6IHNxdWlzaChcImhhY2tcIiwgaGFja19qb2JzKSxcbiAgICAgICAgdGltZTogbnMuZ2V0SGFja1RpbWUodGFyZ2V0Lmhvc3RuYW1lKSAqIDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImdyb3dcIixcbiAgICAgICAgam9iczogc3F1aXNoKFwiZ3Jvd1wiLCBncm93X2pvYnMpLFxuICAgICAgICB0aW1lOiBucy5nZXRIYWNrVGltZSh0YXJnZXQuaG9zdG5hbWUpICogMC44LFxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogXCJ3ZWFrZW5cIiwgam9iczogc3F1aXNoKFwid2Vha2VuXCIsIHdla25fam9icyksIHRpbWU6IDAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGJhdGNoX2NvbXBsZXRlX3Bfb2JqID0gam9ic19hcnJheS5yZWR1Y2UoXG4gICAgICAoXywgc2NyaXB0KSA9PlxuICAgICAgICBob3N0X2xpc3QucmVkdWNlKFxuICAgICAgICAgIChfMiwgaG9zdCkgPT5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBob3N0cyBhbmQgZmlsbCBlYWNoIG9uZSB3aXRoIGpvYnMgdW50aWwgZG9uZVxuICAgICAgICAgICAgc2VuZEpvYnMoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGU6IE1hdGguZmxvb3IoZ2V0SG9zdFJhbShob3N0KSAvIG5zLmdldFNjcmlwdFJhbShgJHtzY3JpcHQubmFtZX0uanNgKSksXG4gICAgICAgICAgICAgICAgc2NyaXB0LFxuICAgICAgICAgICAgICAgIGhvc3QsXG4gICAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBydW5fcF9vYmosXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHt9LFxuICAgICAgICApLFxuICAgICAge30sXG4gICAgKTtcbiAgICBucy5jbGVhclBvcnQobnMucGlkKSxcbiAgICAgIG5zLndyaXRlUG9ydChucy5waWQsIHRhcmdldC5ob3N0bmFtZSksXG4gICAgICBhd2FpdCB1dGlsLnNscChiYXRjaF9kZWxheSksXG4gICAgICBhd2FpdCBydW5Mb29wKGJhdGNoX2NvbXBsZXRlX3Bfb2JqKTtcbiAgfVxuICBhd2FpdCBydW5Mb29wKGF3YWl0IFJ1bihucywgXCJnZXRQbGF5ZXJcIikpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBuZW9mZXRjaChuczogTlMpIHtcbiAgY29uc3QgYmxrID0gXCJcXHUyNTg4XCI7XG4gIGNvbnN0IGNvbF9hcnIgPSBbdXRpbC5hbnNpLmssIHV0aWwuYW5zaS5yLCB1dGlsLmFuc2kuZywgdXRpbC5hbnNpLnksIHV0aWwuYW5zaS5iLCB1dGlsLmFuc2kubSwgdXRpbC5hbnNpLmNdO1xuICBjb25zdCBkYXRlRm9ybWF0ID0gKGRhdGUpID0+XG4gICAgYCR7TWF0aC5mbG9vcihkYXRlIC8gKDYwICogMjQpKX0gZGF5cywgJHtNYXRoLmZsb29yKChkYXRlIC8gNjApICUgMjQpfSBob3VycywgJHtNYXRoLmZsb29yKGRhdGUgJSA2MCl9IG1pbnNgO1xuICBjb25zdCBwYWQgPSBgIGAucmVwZWF0KDM1KTtcbiAgY29uc3QgdGl0bGUgPSBgbXVlc2xpQGhvbWVgO1xuICBjb25zdCBkYXNoZXMgPSB1dGlsLmFuc2kudyArIFwiLVwiLnJlcGVhdCgxMSk7XG4gIGNvbnN0IG9zID0gYCR7dXRpbC5hbnNpLmd9T1M6ICR7dXRpbC5hbnNpLnd9RnVsY3J1bSBUZWNobm9sb2dpZXMgQ2hhcGVhdSBMaW51eCB4ODZfNjRgO1xuICBjb25zdCBob3N0ID0gYCR7dXRpbC5hbnNpLmd9SG9zdDogJHt1dGlsLmFuc2kud30ke25zLmdldEhvc3RuYW1lKCl9YDtcbiAgY29uc3Qga2VybmVsID0gYCR7dXRpbC5hbnNpLmd9S2VybmVsOiAke3V0aWwuYW5zaS53fSR7Q09OLkRPQy50aXRsZX1gO1xuICBjb25zdCB1cHRpbWUgPSBgJHt1dGlsLmFuc2kuZ31VcHRpbWU6ICR7dXRpbC5hbnNpLnd9JHtkYXRlRm9ybWF0KG5zLmdldFBsYXllcigpLnRvdGFsUGxheXRpbWUgLyAoMWUzICogNjApKX1gO1xuICBjb25zdCBwYWNrYWdlcyA9IGAke3V0aWwuYW5zaS5nfVBhY2thZ2VzOiAke3V0aWwuYW5zaS53fSR7bnMubHMoXCJob21lXCIpLmxlbmd0aH0gKGJpdHBrZylgO1xuICBjb25zdCBzaGVsbCA9IGAke3V0aWwuYW5zaS5nfVNoZWxsOiAke3V0aWwuYW5zaS53fWJpdC1zaCA2LjlgO1xuICBjb25zdCByZXNvbHV0aW9uID0gYCR7dXRpbC5hbnNpLmd9UmVzb2x1dGlvbjogJHt1dGlsLmFuc2kud30ke0NPTi5XSU4uaW5uZXJXaWR0aH0geCAke0NPTi5XSU4uaW5uZXJIZWlnaHR9YDtcbiAgY29uc3Qgd20gPSBgJHt1dGlsLmFuc2kuZ31XTTogJHt1dGlsLmFuc2kud31CaXRCdXJuZXIgV01gO1xuICBjb25zdCB0ZXJtaW5hbCA9IGAke3V0aWwuYW5zaS5nfVRlcm1pbmFsOiAke3V0aWwuYW5zaS53fUJpVFRZYDtcbiAgY29uc3QgY3B1ID0gYCR7dXRpbC5hbnNpLmd9Q1BVOiAke3V0aWwuYW5zaS53fUdlbiBGVC02OTAweCAke25zLmdldFNlcnZlcihcImhvbWVcIikuY3B1Q29yZXN9IGNvcmVgO1xuICBjb25zdCBtZW1vcnkgPSBgJHt1dGlsLmFuc2kuZ31NZW1vcnk6ICR7dXRpbC5hbnNpLnd9JHtucy5nZXRTZXJ2ZXIoXCJob21lXCIpLnJhbVVzZWQgKiAxZTN9IE1pQiAvICR7bnMuZ2V0U2VydmVyKFwiaG9tZVwiKS5tYXhSYW0gKiAxZTN9IE1pQmA7XG4gIGNvbnN0IGFzY2lpID0gW1xuICAgIGAke3BhZH0ke3V0aWwuYW5zaS5nfW5lb2ZldGNoIH5gLFxuICAgIGAgICAgJHt1dGlsLmFuc2kuZ31GRkZGRkZGRlxcXFwke3V0aWwuYW5zaS5yfS4uLi4uLi4ke3V0aWwuYW5zaS5nfVRUVFRUVFRUXFxcXCAgICAgICR7dGl0bGV9YCxcbiAgICBgICAgICR7dXRpbC5hbnNpLmd9RkYgXFxcXF9fX19ffCR7dXRpbC5hbnNpLnJ9On46fjp+JHt1dGlsLmFuc2kuZ31cXFxcX19UVCBcXFxcX198ICAgICAke2Rhc2hlc31gLFxuICAgIGAgICAgJHt1dGlsLmFuc2kuZ31GRiB8JHt1dGlsLmFuc2kucn06PTo9Oj06PTo9Oj06PToke3V0aWwuYW5zaS5nfVRUIHwke3V0aWwuYW5zaS5yfT1cXFxcICAgICAgJHtvc31gLFxuICAgIGAgICAke3V0aWwuYW5zaS5yfS8ke3V0aWwuYW5zaS5nfUZGRkZGXFxcXCR7dXRpbC5hbnNpLnJ9LSotKi0qLSotKi0qLSR7dXRpbC5hbnNpLmd9VFQgfCR7dXRpbC5hbnNpLnJ9Ki1cXFxcICAgICAke2hvc3R9YCxcbiAgICBgICAke3V0aWwuYW5zaS5yfS8qJHt1dGlsLmFuc2kuZ31GRiBcXFxcX198JHt1dGlsLmFuc2kucn0qKioqKioqKioqKioke3V0aWwuYW5zaS5nfVRUIHwke3V0aWwuYW5zaS5yfSoqKlxcXFwgICAgJHtrZXJuZWx9YCxcbiAgICBgICAke3V0aWwuYW5zaS5yfT09JHt1dGlsLmFuc2kuZ31GRiB8JHt1dGlsLmFuc2kucn09PT09JHt1dGlsLmFuc2kuZ31DQ0NDQ0NcXFxcJHt1dGlsLmFuc2kucn09PT09JHt1dGlsLmFuc2kuZ31UVCB8JHt1dGlsLmFuc2kucn09PT09XFxcXCAgICR7dXB0aW1lfWAsXG4gICAgYCAgJHt1dGlsLmFuc2kucn0jIyR7dXRpbC5hbnNpLmd9RkYgfCR7dXRpbC5hbnNpLnJ9IyMjJHt1dGlsLmFuc2kuZ31DQ0MgX19DQ1xcXFwke3V0aWwuYW5zaS5yfSMjIyR7dXRpbC5hbnNpLmd9VFQgfCR7dXRpbC5hbnNpLnJ9IyMjI3x8ICAke3BhY2thZ2VzfWAsXG4gICAgYCAgJHt1dGlsLmFuc2kucn09PSR7dXRpbC5hbnNpLmd9XFxcXF9cXFxcfCR7dXRpbC5hbnNpLnJ9PT09JHt1dGlsLmFuc2kuZ31DQyAvJHt1dGlsLmFuc2kucn09PSR7dXRpbC5hbnNpLmd9XFxcXF9ffCR7dXRpbC5hbnNpLnJ9PT0ke3V0aWwuYW5zaS5nfVxcXFxfXFxcXHwke3V0aWwuYW5zaS5yfT09PT18fCAgJHtzaGVsbH1gLFxuICAgIGAgICR7dXRpbC5hbnNpLnJ9XFxcXCoqKioqKioqJHt1dGlsLmFuc2kuZ31DQyB8JHt1dGlsLmFuc2kucn0qKioqKioqKioqKioqKiovXFxcXHwgICR7cmVzb2x1dGlvbn1gLFxuICAgIGAgICAke3V0aWwuYW5zaS5yfVxcXFwqLSotKi0qJHt1dGlsLmFuc2kuZ31DQyB8JHt1dGlsLmFuc2kucn0tKi0qLSotKi0qLSotKi8gLyAgICR7d219YCxcbiAgICBgICAgICR7dXRpbC5hbnNpLnJ9XFxcXDo9Oj06PSR7dXRpbC5hbnNpLmd9Q0MgfCR7dXRpbC5hbnNpLnJ9Oj0ke3V0aWwuYW5zaS5nfUNDXFxcXCR7dXRpbC5hbnNpLnJ9PTo9Oj06PTovIC8gICAgJHt0ZXJtaW5hbH1gLFxuICAgIGAgICAgICR7dXRpbC5hbnNpLnJ9XFxcXH46fjp+JHt1dGlsLmFuc2kuZ31cXFxcQ0NDQ0NDICB8JHt1dGlsLmFuc2kucn1+On46fjovIC8gICAgICR7Y3B1fWAsXG4gICAgYCAgICAgICR7dXRpbC5hbnNpLnJ9XFxcXF9fX19fJHt1dGlsLmFuc2kuZ31cXFxcX19fX19cXFxcLyR7dXRpbC5hbnNpLnJ9X19fX19fLyAvICAgICAgJHttZW1vcnl9YCxcbiAgICBgICAgICAgICR7dXRpbC5hbnNpLnJ9XFxcXF9fX19fX19fX19fX19fX19fX1xcXFwvYCxcbiAgICBwYWQgKyBbLi4uY29sX2FyciwgdXRpbC5hbnNpLmQsIFwiXCJdLmpvaW4oYmxrLnJlcGVhdCg0KSksXG4gICAgcGFkICsgWy4uLmNvbF9hcnIsIHV0aWwuYW5zaS53LCBcIlwiXS5qb2luKGJsay5yZXBlYXQoNCkpLFxuICBdO1xuICBhd2FpdCBhc2NpaS5yZWR1Y2UoYXN5bmMgKGEsIGIpID0+IChhd2FpdCBhLCBucy50cHJpbnRmKGIpLCB1dGlsLnNscChNYXRoLnJhbmRvbSgpICogMTAgKiA3KSksIFByb21pc2UucmVzb2x2ZSgpKTtcbn1cblxuXG5cbi8qKiBAcGFyYW0ge05TfSBucyAqL1xuZnVuY3Rpb24gY2hlY2tCb3VuZHMobnMsIHQpIHtcbiAgbGV0IHJldHVybnZhbCA9IHsgeDogMCwgeTogMCB9LFxuICAgIHggPSB0LngsXG4gICAgeSA9IHQueSxcbiAgICB3ID0gdC53aWR0aCxcbiAgICBoID0gdC5oZWlnaHQsXG4gICAgb3RoZXJwcm9ncyA9IG5zLnBzKCkubWFwKHAgPT4gbnMuZ2V0UnVubmluZ1NjcmlwdChwLnBpZCk/LnRhaWxQcm9wZXJ0aWVzKS5maWx0ZXIocCA9PiBwKTtcbiAgb3RoZXJwcm9ncy5mb3JFYWNoKHByb2cgPT4ge1xuICAgIGlmIChwcm9nLnggPiB4ICsgdykgcmV0dXJudmFsLnggLSA1MDtcbiAgICBpZiAocHJvZy54ICsgcHJvZy53aWR0aCA8IHgpIHJldHVybnZhbC54ICsgNTA7XG4gIH1cbiAgKTtcbiAgcmV0dXJuIHJldHVybnZhbDtcbn1cblxuXG5mdW5jdGlvbiB6b29taWVDYWxjKGQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBkID4gNTAwXG4gICAgPyAxLjJcbiAgICA6IGQgPiA3MDAwXG4gICAgICA/IDAuNVxuICAgICAgOiBkID4gMTUwMDBcbiAgICAgICAgPyAwLjJcbiAgICAgICAgOiBkID4gMTUwMDBcbiAgICAgICAgICA/IDAgLy8gR28gdG8gc2xlZXBcbiAgICAgICAgICA6IDI7IC8vIEV4Y2l0ZWQgbW9kZSFcbn1cblxuZnVuY3Rpb24gcG9vcENoZWNrKG5zLCB0aW1lc3RhbXAsIGhhcHBpbmVzcykge1xuICBpZiAodGltZXN0YW1wICsgNjAwMDAgPCArKG5ldyBEYXRlKCkpKSByZXR1cm4gaGFwcGluZXNzO1xuICByZXR1cm4gaGFwcGluZXNzIC0gbnMucHMoKS5maWx0ZXIocCA9PiBwLmZpbGVuYW1lID09PSBcInBvb3AuanNcIikubGVuZ3RoXG59XG5cblxuXG5cblxuYXN5bmMgZnVuY3Rpb24gZG93bkRvZyhuczogTlMsIHByZXZwb3N4OiBudW1iZXIsIHByZXZwb3N5OiBudW1iZXIpIHtcbiAgZnVuY3Rpb24gcG9vcChuczogTlMsIHg6IG51bWJlciwgeTogbnVtYmVyLCBwb29wcGlkOiBudW1iZXIpIHtcbiAgICAoXG4gICAgICBucy53cml0ZShcInBvb3AuanNcIiwgcG9vcFNjcmlwdCwgXCJ3XCIpLFxuICAgICAgcG9vcHBpZCA9IG5zLnJ1bihcInBvb3AuanNcIiksXG4gICAgICBucy50YWlsKHBvb3BwaWQpLFxuICAgICAgbnMucmVzaXplVGFpbCgxNTAsIDEwMCwgcG9vcHBpZCksXG4gICAgICBucy5tb3ZlVGFpbCh4LCB5LCBwb29wcGlkKVxuICAgIClcbiAgfVxuICBmdW5jdGlvbiBzdGVwKG5zLCB6b29taWV2YWx1ZSwgdGFyZ2V0LCBib29sID0gMSwgcmFuZGJvb2wgPSB0cnVlKSB7XG4gICAgbGV0IHNjcmVlbnJhdGlvID0gd2luLmlubmVySGVpZ2h0IC8gd2luLmlubmVyV2lkdGgsXG4gICAgICB4ID0gdGdldChucykueCxcbiAgICAgIHkgPSB0Z2V0KG5zKS55O1xuICAgIGlmICh0YXJnZXQueCA+IHgpIHsgeCArPSAocm4oKSAqIHpvb21pZXZhbHVlKSAqIDIgKiAoMTAgKiB6b29taWV2YWx1ZSk7IH1cbiAgICBlbHNlIGlmICh0YXJnZXQueCA8IHgpIHsgeCAtPSAocm4oKSAqIHpvb21pZXZhbHVlKSAqIDIgKiAoMTAgKiB6b29taWV2YWx1ZSkgfVxuICAgIGlmIChybigpIC0gMC41ID4gMCkgYm9vbCA9IC0xXG4gICAgaWYgKHpvb21pZXZhbHVlICYmIHJhbmRib29sKSB7XG4gICAgICB4ICs9IDMgKiBybigpICogYm9vbDtcbiAgICAgIHkgKz0gMyAqIHJuKCkgKiBib29sICogc2NyZWVucmF0aW87XG4gICAgfVxuICAgIGxldCBib3VuZHNhZGp1c3QgPSBjaGVja0JvdW5kcyhucywgdGdldChucykpXG4gICAgeCArPSBib3VuZHNhZGp1c3QueDtcbiAgICByZXR1cm4geyBkeDogeCwgZHk6IHdpbi5pbm5lckhlaWdodCAtIDIwMCB9O1xuICB9XG5cbiAgY29uc3Qgd2luID0gZXZhbChcIndpbmRvd1wiKVxuICBjb25zdCBkb2MgPSBldmFsKFwiZG9jdW1lbnRcIilcbiAgY29uc3Qgcm4gPSBNYXRoLnJhbmRvbVxuICBjb25zdCB0Z2V0ID0gKG5zKSA9PiBucy5nZXRSdW5uaW5nU2NyaXB0KCkudGFpbFByb3BlcnRpZXMgPz8gbnMuZXhpdCgpXG4gIGNvbnN0IG5hbWVzID0gW1wiV2lja2VzXCIsIFwiVXBkb2dcIiwgXCJNaWthc2FcIiwgXCJTbnVmZmxlc1wiLCBcIkJvcmlzXCIsIFwiR25hc2hlclwiLCBcIkRvdWdcIiwgXCJDaGVzdGVyXCJdXG4gIGNvbnN0IGJhcmsgPSAobnMsIGJhcmspID0+IG5zLnByaW50KGJhcmspO1xuICBhc3luYyBmdW5jdGlvbiBwb3J0SGFuZGxlKG5zLCBiYXJrdmFsLCBoYXBwaW5lc3MpIHtcbiAgICBpZiAobnMucGVlayhucy5waWQpID09PSBcIk5VTEwgUE9SVCBEQVRBXCIpIHJldHVybiB7IGJhcms6IHVuZGVmaW5lZCwgaGFwcGluZXNzOiBoYXBwaW5lc3MgfTtcbiAgICBucy5jbGVhclBvcnQobnMucGlkKVxuICAgIGJhcmt2YWwgPSB7IGJhcms6IFwiKldBR1NcXG5UQUlMKlwiLCB0aW1lOiAxNTAwIH1cbiAgICBoYXBwaW5lc3MgKz0gMTAwMDtcbiAgICByZXR1cm4geyBiYXJrOiBiYXJrdmFsLCBoYXBwaW5lc3M6IGhhcHBpbmVzcyB9O1xuICB9XG4gIG5zLndyaXRlKFwicGV0dGVyLmpzXCIsIGRvZ1BldHRlciwgXCJ3XCIpO1xuICBjb25zdCByZW1uYW0gPSBuYW1lcy5maWx0ZXIobmFtZSA9PiAhbnMucHMoKS5tYXAocHJvZyA9PiBucy5nZXRSdW5uaW5nU2NyaXB0KHByb2cucGlkKS50aXRsZSkuaW5jbHVkZXMobmFtZSkpXG4gIG5zLnNldFRpdGxlKG5zLmFyZ3NbMF0gPz8gcmVtbmFtW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJlbW5hbS5sZW5ndGggLSAxKV0pXG4gIG5zLmdldFJ1bm5pbmdTY3JpcHQoXCJwZXR0ZXIuanNcIikgPz8gbnMucnVuKFwicGV0dGVyLmpzXCIpXG4gIG5zLmRpc2FibGVMb2coJ0FMTCcpXG4gIGxldCBwb3MgPSB7IHg6IHVuZGVmaW5lZCwgeTogdW5kZWZpbmVkIH1cbiAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgIHBvcyA9IHsgeDogZXZlbnQuY2xpZW50WCAtIDEwMCwgeTogZXZlbnQuY2xpZW50WSAtIDUwIH07XG4gIH0pO1xuICBucy50YWlsKClcblxuICBsZXQgaGFwcGluZXNzID0gMTAwMDA7XG4gIGxldCB0aW1lc3RhbXAgPSArKG5ldyBEYXRlKCkpO1xuICBsZXQgenp6Y291bnQgPSAwO1xuICBsZXQgdGlja2VyID0gMDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBucy5jbGVhckxvZygpO1xuICAgIGNvbnN0IFt4LCB5XSA9IFt0Z2V0KG5zKS54LCB0Z2V0KG5zKS55IC0gNTBdIC8vIGNlbnRyZSBvbiB0aGUgYm94XG4gICAgbGV0IGRlbGF5ID0gMTAwXG4gICAgbGV0IHpvb21pZXZhbHVlID0gem9vbWllQ2FsYyh0aWNrZXIpO1xuICAgIGNvbnN0IGFzY2lpID0gcG9zLnggPiB4ID8gQ09OLkRPR0dPX0FTQ0lJWzBdIDogQ09OLkRPR0dPX0FTQ0lJWzFdO1xuICAgIGxldCBkdmFyID0gc3RlcChucywgem9vbWlldmFsdWUsIHBvcyk7XG4gICAgbGV0IHBvcnRoYW5kbGVyZXR1cm4gPSBhd2FpdCBwb3J0SGFuZGxlKG5zLCBkZWxheSwgaGFwcGluZXNzKVxuICAgIGxldCBiYXJrdmFsID0gcG9ydGhhbmRsZXJldHVybj8uYmFyaztcbiAgICBoYXBwaW5lc3MgPSBwb3J0aGFuZGxlcmV0dXJuPy5oYXBwaW5lc3M7XG4gICAgaWYgKHJuKCkgKiAxMDAgPiAoMTAwIC0gKDIgKiB6b29taWV2YWx1ZSkpICYmICEhem9vbWlldmFsdWUpIHtcbiAgICAgIGJhcmt2YWwgPSB7IGJhcms6ICdcIkJBUktcIicsIHRpbWU6IDUwMCB9O1xuICAgICAgaWYgKHBvcy54IDwgeCArIDEwMCAmJiBwb3MueSA8IHkgKyAxMDAgJiYgcG9zLnggPiB4IC0gMTAwICYmIHBvcy55ID4geSAtIDEwMCkgYmFya3ZhbCA9IHsgYmFyazogXCIqTElDS1NcXG5DVVJTT1IqXCIsIHRpbWU6IDcwMCB9O1xuICAgICAgZGVsYXkgKz0gNjAwXG4gICAgfVxuICAgIGhhcHBpbmVzcyA9IHBvb3BDaGVjayhucywgdGltZXN0YW1wLCBoYXBwaW5lc3MpXG4gICAgaWYgKCF6b29taWV2YWx1ZSkge1xuICAgICAgZGVsYXkgKz0gMTAwMFxuICAgICAgenp6Y291bnQgPiAzID8genp6Y291bnQgPSAxIDogenp6Y291bnQrKztcbiAgICAgIG5zLnByaW50KFwielwiLnJlcGVhdCh6enpjb3VudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG5zLnByaW50KGBoYXBwaW5lc3M6ICR7TWF0aC5yb3VuZChoYXBwaW5lc3MgLyAxMDAwKX1gKVxuICAgIH1cbiAgICBpZiAoem9vbWlldmFsdWUgJiYgcm4oKSAqIDEwMDAgPCAxKSBwb29wKG5zLCB4LCB5ICsgMTUwLCB1bmRlZmluZWQpO1xuICAgIG5zLnByaW50KGJhcmt2YWwgPT09IHVuZGVmaW5lZCA/IGFzY2lpIDogYmFyayhucywgYmFya3ZhbC5iYXJrKSk7XG4gICAgbnMucmVzaXplVGFpbCgyNTAsIDIwMClcbiAgICBucy5tb3ZlVGFpbChkdmFyLmR4LCBkdmFyLmR5KTtcbiAgICBiYXJrdmFsID09IHVuZGVmaW5lZCA/IGF3YWl0IG5zLnNsZWVwKGRlbGF5KSA6IGF3YWl0IG5zLnNsZWVwKGJhcmt2YWwudGltZSlcbiAgICBiYXJrdmFsID09IHVuZGVmaW5lZCA/IHRpY2tlciArPSAxMDAgOiB0aWNrZXIgKz0gYmFya3ZhbC50aW1lXG4gICAgaWYgKHBvcy54ICE9PSBwcmV2cG9zeCAmJiBwb3MueSAhPT0gcHJldnBvc3kpIHRpY2tlciA9IDA7XG4gICAgcHJldnBvc3ggPSBwb3MueCwgcHJldnBvc3kgPSBwb3MueTtcbiAgICBpZiAodGltZXN0YW1wICsgNjAwMDAgPCArKG5ldyBEYXRlKCkpKSB0aW1lc3RhbXAgPSArKG5ldyBEYXRlKCkpXG4gICAgbnMuYXRFeGl0KChwaWQgPSBucy5waWQpID0+IChucy5raWxsKFwicGV0dGVyLmpzXCIpLCBucy5jbG9zZVRhaWwocGlkKSkpO1xuICB9XG59XG5cbmNvbnN0IHBvb3BTY3JpcHQgPSAnZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4obnMpIHtucy5kaXNhYmxlTG9nKFwiQUxMXCIpO25zLmF0RXhpdCgoKSA9PiBucy5jbG9zZVRhaWwobnMucGlkKSk7bnMucHJpbnRSYXcoUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHt9LCBcIlx1RDgzRFx1RENBOVwiKSk7d2hpbGUoMSkge25zLmdldFJ1bm5pbmdTY3JpcHQoKS50YWlsUHJvcGVydGllcyA/PyBucy5leGl0KCk7IGF3YWl0IG5zLnNsZWVwKDEwMDAwKX19JztcblxuLy8gY3JlZGl0IHlpY2hpemhuZ1xuY29uc3QgZG9nUGV0dGVyID0gYC8qKiBAcGFyYW0ge05TfSBucyAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4obnMpIHtcbiAgICBjb25zdCB3aW4gPSBldmFsKFwid2luZG93XCIpXG4gICAgbnMuZGlzYWJsZUxvZygnQUxMJylcbiAgICBsZXQgcGVuZGluZ0V2ZW50ID0gbnVsbDtcbiAgICBjb25zdCBzY2hlZHVsZVBldCA9IGV2ZW50ID0+IHtcbiAgICAgIHBlbmRpbmdFdmVudCA9IGV2ZW50O1xuICAgIH1cbiAgICBsZXQgcGV0ID0gKCkgPT4ge1xuICAgICAgbGV0IHggPSBwZW5kaW5nRXZlbnQuY2xpZW50WDtcbiAgICAgIGxldCB5ID0gcGVuZGluZ0V2ZW50LmNsaWVudFkgO1xuICAgICAgLy8gVE9ETzogY2hlY2sgb3RoZXIgc2VydmVycyB0b29cbiAgICAgIGNvbnN0IHByb2Nlc3NlcyA9IG5zLnBzKCk7XG4gICAgICBmb3IgKGNvbnN0IHByb2Nlc3Mgb2YgcHJvY2Vzc2VzKSB7XG4gICAgICAgIGNvbnN0IHN0dWZmID0gbnMuZ2V0UnVubmluZ1NjcmlwdChwcm9jZXNzLnBpZCk/LnRhaWxQcm9wZXJ0aWVzO1xuICAgICAgICBpZiAoIXN0dWZmKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZmlsZW5hbWUgPT0gJ3BldHRlci5qcycpIGNvbnRpbnVlOyAgLy8gbm8gc2VsZi1wZXRzXG4gICAgICAgIGlmICh4IDwgc3R1ZmYueCB8fCB4ID4gc3R1ZmYueCArIHN0dWZmLndpZHRoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHkgPCBzdHVmZi55IHx8IHkgPiBzdHVmZi55ICsgc3R1ZmYuaGVpZ2h0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbnMucHJpbnQoXCJwZXR0aW5nIFwiICsgcHJvY2Vzcy5maWxlbmFtZSk7XG4gICAgICAgIG5zLndyaXRlUG9ydChwcm9jZXNzLnBpZCxcIlwiKTtcbiAgICAgICAgYnJlYWs7ICAvLyBvbmx5IHBldCBvbmUgcHJvY2VzcyBhdCBhIHRpbWVcbiAgICAgIH1cbiAgICAgIHBlbmRpbmdFdmVudCA9IG51bGw7XG4gICAgfTtcbiAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2NoZWR1bGVQZXQpO1xuICAgIG5zLmF0RXhpdCgoKSA9PiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2NoZWR1bGVQZXQpKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgYXdhaXQgbnMuc2xlZXAoMTApO1xuICAgICAgaWYgKHBlbmRpbmdFdmVudCkge1xuICAgICAgICBwZXQoKTtcbiAgICAgIH1cbiAgICB9XG59XHRgIl0sCiAgIm1hcHBpbmdzIjogIjtBQXFEQSxJQUFNLE1BQWlCO0FBQUEsRUFDckIsS0FBSztBQUFBLEVBQ0wsS0FBSztBQUFBLEVBQ0wsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUEsSUFBQztBQUFBLElBQVE7QUFBQSxJQUFXO0FBQUE7QUFBQSxFQUFxQjtBQUFBLEVBQ3pELG1CQUFtQjtBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGdCQUFnQixDQUFDLE1BQU0sUUFBUSxVQUFVO0FBQUEsRUFDekMsYUFDSTtBQUFBLElBQ0E7QUFBQSxJQUFXO0FBQUEsSUFBd0I7QUFBQSxJQUE2QjtBQUFBLElBQTZCO0FBQUEsSUFBc0I7QUFBQSxJQUNuSDtBQUFBLElBQXdCO0FBQUEsSUFBNkI7QUFBQSxJQUFnQztBQUFBLElBQThCO0FBQUEsSUFBNEI7QUFBQSxFQUNqSjtBQUFBLEVBQ0YsS0FBSyxLQUFLLFFBQVE7QUFBQSxFQUNsQixLQUFLLEtBQUssVUFBVTtBQUN0QjtBQUNBLElBQU0sUUFBUTtBQUFBLEVBQ1osSUFBSSxJQUFJLGVBQWUsdUJBQXVCO0FBQUEsRUFDOUMsSUFBSSxJQUFJLGVBQWUsdUJBQXVCO0FBQ2hEO0FBRUEsU0FBUyxLQUFLLEdBQWE7QUFDekIsRUFDRSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FDeEMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQ3pDLENBQUMsRUFBRSxLQUFLLFdBQVcsZUFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLGNBQWM7QUFFOUQ7QUFFQSxTQUFTLGVBQWVBLEtBQWM7QUFDcEMsRUFDRSxDQUFDLFdBQVcsUUFBUSxNQUFNLEVBQUUsUUFBUSxDQUFDLFFBQVFBLElBQUcsR0FBRyxRQUFRLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTUEsSUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQ3ZGLENBQUMsUUFDQTtBQUFBLElBQ0UsRUFBRSxJQUFJLElBQUksZ0JBQWdCLEtBQUssT0FBTztBQUFBLElBQ3RDLEVBQUUsSUFBSSxJQUFJLGdCQUFnQixLQUFLLE9BQU87QUFBQSxJQUN0QyxFQUFFLElBQUksSUFBSSxtQkFBbUIsS0FBSyxVQUFVO0FBQUEsRUFDOUMsRUFDRyxRQUFRLENBQUMsUUFBUSxJQUFJLEdBQUcsUUFBUSxRQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFFMUQsQ0FBQyxNQUFjLFNBQ2ZBLElBQUc7QUFBQSxNQUNELEdBQUcsSUFBSSxJQUFJLElBQUk7QUFBQSxNQUNmLFlBQVksSUFBSSw4SEFBOEgsSUFBSTtBQUFBLE1BQ2xKO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFFSjtBQUVBLGVBQWUsS0FBS0EsS0FBdUI7QUFDekMsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxVQUFVLE9BQU8sZ0JBQWdCLFdBQ3JDLFdBQVdBLEdBQUUsR0FDYixNQUFNLGVBQWVBLEtBQUksS0FBSyxHQUM5QixRQUFRLE1BQU0sS0FBTSxNQUFNLFdBQVdBLEtBQUksY0FBYyxHQUN2RCxNQUFNLEtBQUssSUFBSSxnQkFBZ0IsR0FBRyxHQUNsQyxNQUFNLFFBQVEsT0FBTyxRQUFRLGFBQWE7QUFFNUMsRUFDRUEsSUFBRyxLQUFLLEdBQ1JBLElBQUcsV0FBVyxLQUFLLEdBQ25CQSxJQUFHLFFBQVEsR0FBRyxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsR0FDMUNBLElBQUcsT0FBTyxPQUFRLE1BQU0sQ0FBQyxFQUFFLFlBQVksSUFBTSxNQUFNLENBQUMsRUFBRSxZQUFZLEdBQUk7QUFBQSxFQUN0RSxNQUFNLFFBQVEsTUFBTSxDQUFDO0FBRXpCO0FBRUEsZUFBZSxJQUNiQSxLQUNBLE1BQ0EsU0FBOEIsQ0FBQyxHQUMvQixRQUF5QixJQUNKO0FBQ3JCLEVBQUFBLElBQUc7QUFBQSxJQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBU0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNBLFFBQU0sVUFBVUEsSUFBRyxJQUFJLFVBQVUsRUFBRSxhQUFhLE1BQU1BLElBQUcsbUJBQW1CLElBQUksRUFBRSxHQUFHLE1BQU0sT0FBTyxHQUFHLE1BQU07QUFDM0csU0FBTyxDQUFDLFdBQ0hBLElBQUcsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDLE1BQU0sSUFBSSxpQkFBaUIsR0FBRyxTQUN2RCxNQUFNQSxJQUFHLGNBQWMsT0FBTyxHQUFHQSxJQUFHLFNBQVMsT0FBTztBQUMzRDtBQUVBLElBQU0sT0FBTztBQUFBLEVBQ1gsU0FBUyxlQUFnQixZQUFvQixhQUFxQixVQUFrQixLQUFLO0FBQ3ZGLFVBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQzNDLFVBQU0sS0FBSyxLQUFLO0FBQ2hCLFVBQU0sVUFBVSxJQUFJLElBQUksZUFBZSxVQUFVO0FBQ2pELFlBQVEsSUFBSSxPQUFPO0FBQ25CLFVBQU0sT0FBTyxRQUFRO0FBQ3JCLFVBQU0sYUFBYTtBQUNuQixVQUFNLGFBQWEsTUFBTSxLQUFLLE9BQU8sSUFBSTtBQUN6QyxVQUFNLFdBQVcsQ0FBQyxHQUFHLE9BQU8sVUFBVSxDQUFDLEVBQUUsS0FBSyxJQUFJLEtBQUssS0FBSyxRQUFRLFNBQVMsQ0FBQyxDQUFDLEtBQUssTUFBTSxlQUFlO0FBQ3pHLFVBQU0sVUFBVSxDQUFDLEdBQUcsTUFDbEIsYUFBYSxTQUFTLEdBQUcsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksU0FBUyxHQUFJLElBQUksS0FBTSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxTQUFTLEdBQUksSUFBSSxLQUFNLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzSCxVQUFNLFlBQVksQ0FBQyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztBQUFBLE1BQ3RDLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLEdBQUcsV0FBVztBQUFBLFFBQ2QsR0FBRyxXQUFXO0FBQUEsUUFDZCxHQUFHLFdBQVc7QUFBQSxNQUNoQjtBQUFBLElBQ0YsRUFBRTtBQUNGLFVBQU0sS0FBSyxXQUFXLE9BQU87QUFFN0IsbUJBQWUsS0FBS0MsWUFBV0MsVUFBaUIsSUFBSSxHQUFHO0FBQ3JELFVBQUk7QUFDRixZQUFJLElBQUksZUFBZSxVQUFVLEVBQUUsWUFBWUQsV0FDNUMsSUFBSSxDQUFDLE1BQU0sZ0JBQWdCLFdBQVcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLFNBQVMsRUFDNUUsS0FBSyxFQUFFO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFBRTtBQUNWLFlBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQzFDLFVBQUlDLFdBQVUsR0FBRztBQUNmLGNBQU0sS0FBS0QsWUFBV0MsV0FBVSxJQUFJLElBQUksSUFBSTtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVEsQ0FBQyxHQUFXLEdBQVcsR0FBVyxLQUFjLFNBQVMsUUFBUSxLQUFLLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ3pHLE1BQU07QUFBQTtBQUFBLElBRUosR0FBRztBQUFBO0FBQUEsSUFFSCxHQUFHO0FBQUE7QUFBQSxJQUVILEdBQUc7QUFBQTtBQUFBLElBRUgsR0FBRztBQUFBO0FBQUEsSUFFSCxHQUFHO0FBQUE7QUFBQSxJQUVILEdBQUc7QUFBQTtBQUFBLElBRUgsR0FBRztBQUFBO0FBQUEsSUFFSCxHQUFHO0FBQUE7QUFBQSxJQUVILEdBQUc7QUFBQTtBQUFBLElBRUgsSUFBSTtBQUFBLEVBQ047QUFBQSxFQUNBLGVBQWUsQ0FBQyxNQUF3QixDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUEsRUFDM0QsWUFBWSxDQUFDLEdBQVcsSUFBSSxJQUFJLElBQUksU0FBa0IsSUFBSSxJQUFJLElBQUksT0FBUSxJQUFJLEtBQU0sSUFBSSxFQUFFLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSTtBQUFBLEVBQy9HLFdBQVcsQ0FBQyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFXLElBQUksSUFBSSxJQUFLLElBQUksSUFBSyxJQUFJLE1BQU8sS0FBSyxJQUFJLE1BQU0sSUFBSSxPQUFnQixJQUFJLFFBQVEsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLEdBQUc7QUFBQSxFQUNsTSxXQUFXLENBQUMsUUFBd0IsTUFBTSxNQUFNLElBQUksUUFBUSxDQUFDLElBQUksT0FBTyxNQUFNLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJLFFBQVEsTUFBTSxLQUFLLFFBQVEsQ0FBQyxJQUFJO0FBQUEsRUFDN0ksS0FBSyxPQUFPLE1BQTZCLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3BGO0FBRUEsU0FBUyxXQUFXRixLQUFRLE1BQXNCO0FBQ2hELFNBQU9BLElBQUcsZ0JBQWdCLElBQUksSUFBSUEsSUFBRyxpQkFBaUIsSUFBSTtBQUM1RDtBQUVBLGVBQWUsUUFBUUEsS0FBUTtBQUM3QixTQUNHLE1BQU0sSUFBSUEsS0FBSSw4QkFBOEIsQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFNLGNBQzdELE1BQU0sSUFBSUEsS0FBSSwyQkFBMkIsS0FBTSxDQUFDLENBQUUsTUFBTSxJQUFJQSxLQUFJLGdDQUFnQyxDQUFDLEVBQUUsR0FBRyxNQUFNO0FBRWxIO0FBRUEsU0FBUyxLQUFLQSxLQUFRLElBQW9CLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztBQUMzRCxTQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU1BLElBQUcsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDakU7QUFFQSxTQUFTLFdBQVdBLEtBQVEsTUFBYztBQUN4QyxRQUFNLE9BQU9BLElBQUcsS0FBSyxJQUFJO0FBQ3pCLE1BQUk7QUFBRSxXQUFPLEtBQUssTUFBTSxJQUFJO0FBQUEsRUFBRyxRQUN6QjtBQUFFLFdBQU87QUFBQSxFQUFNO0FBQ3ZCO0FBRUEsU0FBUyxXQUFXQSxLQUFRLFFBQWdCO0FBQzFDLFFBQU0sT0FBT0EsSUFBRyxLQUFLQSxJQUFHLGlCQUFpQixNQUFNLEdBQUcsT0FBT0EsSUFBRyxHQUFHO0FBQy9ELFNBQU8sUUFBUSxtQkFBbUIsS0FBSztBQUN6QztBQUVBLFNBQVMsZUFBZUEsS0FBUTtBQUM5QixRQUFNLElBQUlBLElBQUcsYUFBYTtBQUMxQixTQUFPLEdBQUcsRUFBRSxXQUFXLElBQUksSUFBSSxFQUFFLFFBQVEsSUFBSSxFQUFFLFdBQVcsQ0FBQztBQUM3RDtBQUVBLGVBQWUsT0FBT0EsS0FBUTtBQUM1QixRQUFNLElBQUlBLEtBQUkseUJBQXlCO0FBQ3pDO0FBRUEsZUFBZSxNQUFNQSxLQUFRO0FBQzNCLEVBQUMsTUFBTSxJQUFJQSxLQUFJLDRCQUE0QixNQUFPQSxJQUFHLFFBQVEsS0FBSyxLQUFLLElBQUksbUJBQW1CLEdBQUcsU0FBUyxNQUFNQSxHQUFFO0FBQ3BIO0FBRUEsZUFBZSxRQUFRQSxLQUFRO0FBQzdCLEVBQUMsTUFBTSxJQUFJQSxLQUFJLDhCQUE4QixNQUMxQ0EsSUFBRyxRQUFRLEtBQUssS0FBSyxJQUFJLHFCQUFxQixHQUFHLFNBQ2xELFFBQVFBLEdBQUU7QUFDZDtBQUVBLGVBQWUsWUFBWSxHQUFHLElBQUksRUFBRSxhQUFhO0FBQy9DLEdBQUMsTUFBTSxJQUFJLEdBQUcscUNBQXFDLEdBQUc7QUFBQSxJQUNwRCxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFFBQVEsR0FBRyxLQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUFBLEVBQ2pFO0FBQ0Y7QUFFQSxlQUFlLGdCQUFnQkEsS0FBUTtBQUNyQyxRQUFNLENBQUMsWUFBWSxZQUFZLGFBQWEsWUFBWSxXQUFXLEVBQUU7QUFBQSxJQUNuRSxPQUFPLEdBQUcsT0FBTyxNQUFNLEdBQUcsTUFBTSxJQUFJQSxLQUFJLCtCQUErQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFBQSxJQUNuRixRQUFRLFFBQVE7QUFBQSxFQUNsQjtBQUNGO0FBRUEsZUFBZSxVQUFVQSxLQUFRO0FBQy9CLEdBQUUsTUFBTSxRQUFRQSxHQUFFLEtBQ2YsTUFBTSxJQUFJQSxLQUFJLGFBQWEsQ0FBQyxHQUFHLGlCQUFpQixJQUFLLE9BQ3JELE1BQU0sSUFBSUEsS0FBSSx3QkFBd0IsR0FBRyxNQUFNLElBQUlBLEtBQUksMkJBQTJCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEc7QUFFQSxlQUFlLEdBQUcsR0FBRyxHQUFHLElBQUksUUFBUSxJQUFJLENBQUNHLEtBQUksY0FBYyxFQUFFLFlBQVlBLEVBQUMsR0FBRyxJQUFJLENBQUNDLElBQUcsSUFBSSxDQUFDLE1BQU1BLE1BQUssSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLQSxFQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUNBLElBQUcsR0FBRyxDQUFDLENBQUMsR0FBRztBQUN2SSxFQUNFLEVBQUUsRUFBRSxDQUFDLEdBQ0wsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FDWixFQUFFLFFBQVEsR0FBRyxLQUFLLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEdBQ2xELE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUMzQixFQUFFLEVBQUUsQ0FBQyxHQUNMLEVBQUUsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7QUFFdkQ7QUFFQSxTQUFTLFNBQVMsR0FBTyxJQUFJLFFBQVEsR0FBNkI7QUFDaEUsSUFBRSxLQUFLLENBQUMsRUFBRTtBQUFBLElBQVEsQ0FBQyxNQUNqQixLQUFLLElBQ0QsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUNoQixDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDQyxPQUFNO0FBQ3RGLFVBQUk7QUFDRixRQUFBQSxHQUFFLENBQUM7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUFFO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDTDtBQUNGO0FBRUEsZUFBZSxjQUFjTCxLQUFRLE9BQXVCLG9CQUFJLEtBQUssR0FBRyxLQUFLLGdCQUFnQjtBQUMzRixHQUFFLEtBQUtBLEdBQUUsRUFBRSxTQUFTLEVBQUUsS0FDbkIsTUFBTSxJQUFJQSxLQUFJLGlCQUFpQixJQUFNLE1BQU0sSUFBSUEsS0FBSSxpQ0FBaUMsQ0FBQyxFQUFFLENBQUMsS0FDeEZBLElBQUcsWUFBWSxjQUFjLEtBQUssQ0FBQ0EsSUFBRyxZQUFZLGVBQWUsT0FDakUsQ0FBQyxzQkFBc0IseUJBQXlCLG9CQUFvQixFQUFFLElBQUksQ0FBQyxNQUFNQSxJQUFHLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUNsR0EsSUFBRztBQUFBLElBQ0Q7QUFBQSxJQUNBLEdBQUcsZUFBZUEsR0FBRSxDQUFDLGlCQUFpQixLQUFLLG1CQUFtQixDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQztBQUFBLEVBQzlGLEdBQ0EsTUFBTSxJQUFJQSxLQUFJLGtDQUFrQyxDQUFDLElBQUksU0FBUyxDQUFDO0FBQ3JFO0FBRUEsU0FBUyxNQUFNQSxLQUFRO0FBQ3JCLEdBQUNBLElBQUcsZUFBZSxLQUFLLENBQUMsS0FBSyxLQUFLQSxHQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNQSxJQUFHLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxNQUFNQSxHQUFFO0FBQzFJO0FBRUEsU0FBUyxXQUFXQSxLQUFRO0FBQzFCLFFBQU0sYUFBYSxDQUFDLFNBQ2xCLEdBQUcsT0FBTyxLQUFLLEtBQUssS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztBQUNySSxRQUFNLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUM3RyxRQUFNLFlBQVksS0FBS0EsR0FBRTtBQUN6QixRQUFNLGNBQWMsVUFBVTtBQUFBLElBQzVCLENBQUMsTUFBTUEsSUFBRyxjQUFjLENBQUMsS0FBS0EsSUFBRyw4QkFBOEIsQ0FBQyxLQUFLQSxJQUFHLGdCQUFnQjtBQUFBLEVBQzFGO0FBQ0EsUUFBTSxjQUFjLFlBQVksT0FBT0EsSUFBRyxpQkFBaUI7QUFDM0QsUUFBTSxlQUFlLFVBQVUsT0FBTyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDQSxJQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztBQUNqRixRQUFNLGdCQUFnQixZQUFZLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSUEsSUFBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7QUFDL0UsUUFBTSxpQkFBaUIsWUFBWSxPQUFPLENBQUMsR0FBRyxNQUFNLElBQUksV0FBV0EsS0FBSSxDQUFDLEdBQUcsQ0FBQztBQUM1RSxRQUFNLGNBQWMsV0FBV0EsS0FBSSxxQkFBcUI7QUFDeEQsUUFBTSx1QkFBdUIsWUFBWSxPQUFPLENBQUMsS0FBSyxRQUFRLE9BQU8sT0FBTyxJQUFJLE1BQU0sQ0FBQztBQUN2RixRQUFNLFVBQVUsWUFBWSxPQUFPLENBQUMsS0FBSyxRQUFRLE9BQU8sT0FBTyxJQUFJLE1BQU0sQ0FBQztBQUMxRSxRQUFNLGlCQUFpQixXQUFXQSxLQUFJLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxLQUFLLFFBQVEsT0FBTyxPQUFPLElBQUksTUFBTSxDQUFDO0FBQzlHLFFBQU0sV0FBVyxZQUNkLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxHQUFHLEVBQzFCLElBQUksQ0FBQyxRQUFRLFVBQVUsR0FBRyxFQUMxQixPQUFPLFVBQVUsQ0FBQyw4QkFBOEIsT0FBTyxJQUFJLElBQUksRUFDL0QsS0FBSyxJQUFJO0FBQ1osUUFBTSxZQUFZLENBQUMsV0FBVyxLQUFLLEtBQUtBLElBQUcsdUJBQXVCLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNyRyxRQUFNLGNBQWMsQ0FBQyxXQUNuQjtBQUFBLElBQ0UsS0FBSyxLQUFLQSxJQUFHLHVCQUF1QixNQUFNLElBQUlBLElBQUcsMEJBQTBCLE1BQU0sQ0FBQyxFQUMvRSxTQUFTLEVBQ1QsU0FBUyxHQUFHLEdBQUc7QUFBQSxFQUNwQjtBQUNGLFFBQU0sVUFBVSxDQUFDLFdBQVdBLElBQUcsYUFBYUEsSUFBRyx3QkFBd0IsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQzFHLFFBQU0sYUFBYSxDQUFDLFdBQVdBLElBQUcsYUFBYUEsSUFBRyxrQkFBa0IsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3ZHLFFBQU0sVUFBVSxDQUFDLFdBQ2YsWUFBYUEsSUFBRyx3QkFBd0IsTUFBTSxJQUFJQSxJQUFHLGtCQUFrQixNQUFNLElBQUssS0FBSyxRQUFRLENBQUMsQ0FBQztBQUNuRyxRQUFNLGNBQWMsQ0FBQyxXQUFXLEtBQUssVUFBVUEsSUFBRyxjQUFjLE1BQU0sQ0FBQztBQUN2RSxRQUFNLGdCQUFnQixDQUFDLFdBQ3JCLFVBQVUsV0FBV0EsS0FBSSxjQUFjLElBQUksR0FBRyxNQUFNLElBQUksS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxZQUFZO0FBQ2xHLFFBQU0sVUFBVSxDQUFDLE1BQU07QUFBQSxJQUNyQixVQUFVLENBQUM7QUFBQSxJQUNYLFlBQVksQ0FBQztBQUFBLElBQ2IsUUFBUSxDQUFDO0FBQUEsSUFDVCxXQUFXLENBQUM7QUFBQSxJQUNaLFFBQVEsQ0FBQztBQUFBLElBQ1QsWUFBWSxDQUFDO0FBQUEsSUFDYixjQUFjLENBQUM7QUFBQSxFQUNqQjtBQUNBLFFBQU0sU0FBUyxDQUFDLFNBQVMsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBQzdDLEVBQUFBLElBQUcsV0FBVyxLQUFLLEdBQUcsR0FDcEJBLElBQUcsU0FBUyxJQUFJLElBQUksYUFBYSxNQUFNLENBQUMsR0FDeENBLElBQUcsU0FBUyxHQUNaO0FBQUEsSUFDRSxHQUFHO0FBQUEsTUFDRCxHQUFHLFlBQVksSUFBSSxPQUFPO0FBQUEsTUFDMUI7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBLGFBQWEsWUFBWSxNQUFNLElBQUksWUFBWTtBQUFBLE1BQ2pEO0FBQUEsSUFDRixFQUFFLElBQUksTUFBTTtBQUFBLElBQ1o7QUFBQSxJQUNBLFdBQVcsS0FBSyxVQUFVLFdBQVdBLEtBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVVBLElBQUcsZ0JBQWdCLE1BQU0sQ0FBQyxDQUFDO0FBQUEsSUFDL0YsY0FBYyxLQUFLLFVBQVUsY0FBYyxDQUFDLElBQUksS0FBSyxVQUFVLGFBQWEsQ0FBQztBQUFBLElBQzdFLGNBQWNBLElBQUcsYUFBYSxLQUFLLE1BQU0saUJBQWlCQSxJQUFHLGFBQWEsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJQSxJQUFHLGFBQWEsS0FBSyxNQUFNLGdCQUFnQkEsSUFBRyxhQUFhLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUNySztBQUFBLElBQ0Esa0JBQWtCLG9CQUFvQixLQUFLLGNBQWMseUJBQXlCQSxJQUFHLGFBQWEsRUFBRSxVQUFVLElBQUksSUFBSSxHQUFHLENBQUM7QUFBQSxJQUMxSCxHQUFHLFFBQVE7QUFBQSxJQUNYLElBQUksV0FBV0EsS0FBSSw0QkFBNEIsQ0FBQztBQUFBLElBQ2hEO0FBQUEsRUFDRixFQUFFLFFBQVEsQ0FBQyxNQUFNQSxJQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDO0FBRUEsZUFBZSxlQUFlQSxLQUFRLE9BQU87QUFDM0MsUUFBTSxjQUFjLFdBQVdBLEtBQUksY0FBYztBQUNqRCxRQUFNLFlBQVksV0FBV0EsS0FBSSxpQkFBaUI7QUFDbEQsUUFBTSxlQUFlLFdBQVdBLEtBQUksdUJBQXVCO0FBQzNELFFBQU0sT0FBTyxPQUFPLG9CQUFJLEtBQUssQ0FBQztBQUM5QixRQUFNLGdCQUFnQixDQUFDLFdBQVdBLEtBQUksc0JBQXNCLEtBQUs7QUFFakUsUUFBTSxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsWUFBWSxzQkFBc0IsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQy9JLFFBQU0sY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUM7QUFFckYsR0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLE1BQU0sQ0FBQyxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQ3pDO0FBQUEsTUFDRSxPQUFPO0FBQUEsUUFDTCxDQUFDLFlBQVksR0FBRyxlQUFlQSxHQUFFLENBQUMsRUFBRTtBQUFBLFFBQ3BDLENBQUMsVUFBVSxHQUFHLEtBQUtBLEdBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxDQUFDLEVBQUUsTUFBTSxJQUFJQSxJQUFHLHdCQUF3QixDQUFDLEVBQUU7QUFBQSxRQUNoRyxDQUFDLFlBQVksR0FBRyxLQUFLLE1BQU0sTUFBTyxNQUFNLElBQUlBLEtBQUkseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBRSxDQUFDLEVBQUU7QUFBQSxRQUN6RyxDQUFDLFNBQVMsR0FBR0EsSUFBRyxVQUFVLEVBQUUsSUFBSSxFQUFFO0FBQUEsUUFDbEMsQ0FBQyxVQUFVLEdBQUdBLElBQUcsYUFBYUEsSUFBRyxNQUFNLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFBQSxNQUNuRDtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsTUFDRSxPQUFPO0FBQUEsUUFDTCxDQUFDLFdBQVcsR0FBRyxXQUFXLEVBQUU7QUFBQSxRQUM1QixDQUFDLFFBQVEsSUFBSUEsSUFBRyxhQUFhQSxJQUFHLGdCQUFnQixnQkFBZ0IsTUFBUyxDQUFDLENBQUMsRUFBRTtBQUFBLFFBQzdFLENBQUMsWUFBWSxHQUFHQSxJQUFHLGFBQWFBLElBQUcsZ0JBQWdCLEVBQUUsYUFBYSxPQUFPLENBQUMsRUFBRTtBQUFBLFFBQzVFLENBQUMsU0FBUyxHQUFHQSxJQUFHLGFBQWFBLElBQUcsc0JBQXNCLENBQUMsQ0FBQyxFQUFFO0FBQUEsUUFDMUQsQ0FBQyxZQUFZLEdBQUcsS0FBS0EsR0FBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSUEsSUFBRyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQUEsTUFDckU7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTztBQUFBLFFBQ0wsQ0FBQyxlQUFlLEdBQUcsYUFBYSxHQUFHLEVBQUU7QUFBQSxRQUNyQyxDQUFDLGVBQWUsR0FBRyxhQUFhLE1BQU0sRUFBRTtBQUFBLFFBQ3hDLENBQUMsYUFBYSxHQUFHQSxJQUFHLGFBQWEsYUFBYSxJQUFJLENBQUMsRUFBRTtBQUFBLFFBQ3JELENBQUMsV0FBVyxJQUFJQSxJQUFHLGFBQWEsYUFBYSxNQUFNLENBQUMsRUFBRTtBQUFBLE1BQ3hEO0FBQUEsTUFDQSxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQSxNQUNFLE9BQU87QUFBQSxRQUNMLENBQUMsV0FBVyxHQUFHLFdBQVcsU0FBUyxHQUFHLEVBQUU7QUFBQSxRQUN4QyxDQUFDLFlBQVksR0FBRyxXQUFXLFFBQVEsR0FBRyxFQUFFO0FBQUEsUUFDeEMsQ0FBQyxVQUFVLEdBQUdBLElBQUcsYUFBYSxXQUFXLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSUEsSUFBRyxhQUFhLFdBQVcsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQUEsUUFDMUcsQ0FBQyxjQUFjLEdBQUdBLElBQUcsYUFBYSxXQUFXLGFBQWEsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHO0FBQUEsUUFDNUUsQ0FBQyxhQUFhLEdBQUcsV0FBVyxNQUFNLEdBQUcsRUFBRTtBQUFBLFFBQ3ZDLENBQUMsV0FBVyxJQUFJQSxJQUFHLGFBQWFBLElBQUcsZ0JBQWdCLEVBQUUsV0FBVyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQUEsTUFDOUU7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLE1BQ0UsT0FBTztBQUFBLFFBQ0wsQ0FBQyxHQUFHLEtBQUssV0FBVyxLQUFLLENBQUMsSUFBSSxVQUFVLEtBQUssTUFBTSxRQUFRLEVBQUUsQ0FBQyxFQUFFO0FBQUEsUUFDaEUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLFVBQVUsUUFBUSxHQUFHLENBQUMsRUFBRTtBQUFBLFFBQ2pELENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxPQUFPLGlCQUFpQixLQUFLLFVBQVUsT0FBTyxhQUFhLElBQUksS0FBSyxFQUFFO0FBQUEsUUFDM0YsQ0FBQyxlQUFlLEdBQUcsS0FBSyxVQUFVLE9BQU9BLElBQUcsYUFBYSxFQUFFLFlBQVksQ0FBQyxFQUFFO0FBQUEsUUFDMUUsQ0FBQyxlQUFlLEdBQUcsS0FBSyxVQUFVLE9BQU9BLElBQUcsYUFBYSxFQUFFLGFBQWEsQ0FBQyxFQUFFO0FBQUEsTUFDN0U7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRixFQUNHLFFBQVEsU0FBUyxFQUNqQixPQUFPLFdBQVc7QUFDdkI7QUFHQSxlQUFlLFdBQVdBLEtBQVEsZ0JBQXlCO0FBQ3pELEVBQ0UsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksa0JBQWtCLElBQUksQ0FBQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUFBLElBQzdFLE9BQU8sTUFBcUIsWUFDMUIsTUFBTSxNQUNOLGtCQUFrQkEsSUFBRyxRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUMsWUFBWSxNQUFNLEdBQUcsR0FDaEUsT0FBTyxPQUFPLFdBQ1osQ0FBQyxDQUFDLFVBQ0csTUFBTUEsSUFBRyxjQUFjLE1BQU0sR0FDOUIsbUJBQW1CLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsR0FBR0EsSUFBRyxRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxNQUFNLGNBQWMsTUFDdkdBLElBQUcsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDLE1BQU0sTUFBTSxnQkFBZ0IsR0FBR0EsSUFBRyxJQUFJLE1BQU0sQ0FBQztBQUFBLElBRTlFO0FBQUEsRUFDRixHQUNBLElBQUksZUFBZSxJQUFJLENBQUMsTUFBTSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUNBLElBQUcsVUFBVSxNQUFNLEtBQUtBLElBQUcsSUFBSSxNQUFNLENBQUMsR0FDekcsbUJBRUVBLElBQUcsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLHNCQUFzQixHQUM3Q0EsSUFBRyxRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUMsMkJBQTJCLEdBQ3BELE1BQU0sS0FBSyxJQUFJLEdBQUcsR0FDbEJBLElBQUcsSUFBSSxrQkFBa0I7QUFHL0I7QUFFQSxlQUFlLE1BQU1BLEtBQVEsSUFBSUEsSUFBRyxVQUFVO0FBQzVDLEdBQUUsTUFBTSxRQUFRQSxHQUFFLEtBQ2hCQSxJQUFHLFlBQVksYUFBYSxXQUFXLEtBQ3BDO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGLEVBQUU7QUFBQSxJQUNBLENBQUMsUUFBUSxFQUFFLGtCQUFrQixLQUFLLEtBQUs7QUFBQSxFQUN6QztBQUNKO0FBRUEsZUFBZSxTQUFTQSxLQUFRLElBQUlBLElBQUcsYUFBYTtBQUNsRCxRQUFNLGlCQUFpQixXQUFXQSxLQUFJLHdCQUF3QjtBQUM5RCxRQUFNLGlCQUFpQixlQUFlO0FBQUEsSUFDcEMsQ0FBQyxHQUFHLE1BQU8sRUFBRSxLQUFLLFFBQVEsSUFBSSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsSUFBSTtBQUFBLElBQ3pFLEVBQUUsVUFBVSxFQUFFO0FBQUEsRUFDaEIsRUFBRSxNQUFNO0FBQ1IsR0FBRSxNQUFNLFFBQVFBLEdBQUUsS0FDYixDQUFDLENBQUMsbUJBQ0QsRUFBRSxXQUFXLEdBQ2YsQ0FBQyxTQUFTLFlBQVksU0FBUyxFQUFFO0FBQUEsSUFBSyxDQUFDLFFBQ3JDLEVBQUUsZUFBZSxlQUFlLFNBQVMsSUFBSSxHQUFHLElBQUksYUFBYSxnQkFBZ0IsS0FBSyxLQUFLO0FBQUEsRUFDN0Y7QUFDTjtBQUVBLGVBQWUsT0FBT0EsS0FBUSxJQUFJQSxJQUFHLGFBQWE7QUFDaEQsUUFBTU0saUJBQWdCLFdBQVdOLEtBQUksd0JBQXdCO0FBQzdELFFBQU0sWUFBWSxNQUFNLElBQUlBLEtBQUkseUJBQXlCLENBQUMsR0FBRyxzQkFBc0I7QUFDbkYsUUFBTSxVQUFVLFdBQVdBLEtBQUksa0JBQWtCO0FBQ2pELFFBQU0sZ0JBQWdCO0FBRXRCLElBQUUsZ0JBQWdCLGFBQWEsS0FBSyxNQUFNLGFBQ3JDLEVBQUUsY0FBYyxhQUFhLElBQUksUUFBUSxPQUN6QyxFQUFFLGdCQUFnQixlQUFlLEtBQUssSUFBSSxRQUFRLE1BQU0sSUFBSSxDQUFDLEtBQzdEQSxJQUFHO0FBQUEsSUFDSixHQUFHLEtBQUssS0FBSyxDQUFDLFlBQVlBLElBQUcsYUFBYSxLQUFLLElBQUksUUFBUSxNQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sYUFBYTtBQUFBLEVBQzdGO0FBQUEsRUFHQU0sZUFBYztBQUFBLElBQ1osQ0FBQyxRQUNDLElBQUksS0FBSyxRQUFRLElBQUksYUFDbEIsRUFBRSxnQkFBZ0IsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLGFBQ3pDLElBQUksV0FBVyxLQUNmLEVBQUUsZ0JBQWdCLElBQUksS0FBSyxNQUFNLElBQUksS0FDckNOLElBQUcsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDLG9CQUFvQixJQUFJLEtBQUssSUFBSSxHQUFHO0FBQUEsRUFDcEU7QUFDSjtBQUVBLGVBQWUsWUFBWUEsS0FBUTtBQUNqQyxRQUFNLE9BQU8sT0FBTyxvQkFBSSxLQUFLLENBQUM7QUFDOUIsUUFBTU8sYUFBWSxLQUFLLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFDcEMsUUFBTSxhQUFhLFdBQVdQLEtBQUksd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFFBQVEsSUFBSSxLQUFLLFFBQVEsSUFBSSxTQUFTO0FBQzFHLFFBQU0sY0FBYyxXQUFXQSxLQUFJLHFCQUFxQjtBQUN4RCxRQUFNLHNCQUFzQixPQUFPLEVBQUUsV0FBV0EsS0FBSSxzQkFBc0IsS0FBSztBQUMvRSxRQUFNLGVBQWUsV0FBVyxPQUFPLENBQUMsR0FBRyxNQUFPLEVBQUUsT0FBTyxJQUFJLE9BQU8sR0FBRyxRQUFRLEdBQUcsUUFBUSxJQUFJLEdBQUksUUFBUSxHQUFHLFNBQVM7QUFDeEgsUUFBTSxnQkFBZ0IsTUFBTyxNQUFNLElBQUlBLEtBQUkseUJBQXlCLENBQUMsR0FBRyxzQkFBc0I7QUFFOUYsUUFBTSxjQUNKLGNBQWNBLElBQUcsYUFBYUEsSUFBRyx3QkFBd0IsTUFBTSxDQUFDLENBQUMsTUFBTUEsSUFBRyxhQUFhLFlBQVksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLFdBQVdBLEtBQUkscUJBQXFCLENBQUMsQ0FBQyxNQUFNTyxVQUFTO0FBQ25MLFFBQU0sYUFBYSxDQUFDLFFBQ2xCLGFBQWEsSUFBSSxLQUFLLElBQUksY0FBYyxLQUFLLE1BQU0sSUFBSSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLEtBQUssV0FBVyxJQUFJLEtBQUssR0FBRyxDQUFDLE1BQU1BLFVBQVM7QUFFekksUUFBTSxjQUFjLE1BQ2xCLFdBQVc7QUFBQSxJQUNULFNBQ0UsSUFBSSxLQUFLLE1BQU0sa0JBQ1gsSUFBSSxLQUFLLFlBQVksTUFBTSxnQkFBZ0IsSUFBSSxLQUFLLFdBQVcsSUFBSSxLQUFLLFNBQ3hFLFNBQVMsV0FBVyxHQUFHLENBQUMsR0FBRztBQUFBLEVBQ25DO0FBRUYsUUFBTSxlQUFlLE1BQ25CLHNCQUFzQixRQUNuQixlQUFlUCxJQUFHLHdCQUF3QixNQUFNLE1BQy9DLFNBQVMsV0FBVyxHQUFHO0FBRTdCLFFBQU0sV0FBVyxDQUFDLFFBQ2hCQSxJQUFHLE1BQU0sOEJBQThCLGdCQUFnQixJQUFJLENBQUMsV0FBV0EsS0FBSSx5QkFBeUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHO0FBR3RILEVBQ0UsWUFBWSxTQUFTLElBQUksR0FBRyxNQUFNLFNBQVMsd0JBQXdCLEdBQUcsTUFBTSxJQUFJQSxLQUFJLHlCQUF5QixDQUFDLFNBQVMsQ0FBQztBQUFBLEVBQ3hILENBQUUsTUFBTSxRQUFRQSxHQUFFLEtBQ2YsQ0FBQyxDQUFDLFlBQVksV0FDYixhQUFhLEtBQUssWUFBWSxPQUVoQ0EsSUFBRyxNQUFNLDRCQUE0QixJQUFJLENBQUMsV0FBV0EsS0FBSSx5QkFBeUIsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUNwR0EsSUFBRyxNQUFNLDZCQUE2QixXQUFXQSxLQUFJLDRCQUE0QixJQUFJLE1BQU0sR0FBRyxHQUM5RixNQUFNLElBQUlBLEtBQUksb0NBQW9DLENBQUMsU0FBUyxDQUFDO0FBR25FO0FBRUEsU0FBUyxRQUFRQSxLQUFRLElBQUlBLElBQUcsYUFBYTtBQUMzQyxRQUFNLGVBQWUsQ0FBQyxnQkFBZ0IsMkJBQTJCO0FBQ2pFLFFBQU1NLGlCQUFnQixXQUFXTixLQUFJLHdCQUF3QjtBQUU3RCxRQUFNLFlBQVksTUFBTUEsSUFBRyxNQUFNLHdCQUF3QixLQUFLLEtBQUssSUFBSSxHQUFHLEdBQUc7QUFDN0UsUUFBTSxZQUFZLENBQUMsUUFDakJBLElBQUc7QUFBQSxJQUNELEdBQUcsS0FBSyxLQUFLLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksU0FBU0EsSUFBRyxhQUFhLElBQUksS0FBSyxDQUFDO0FBQUEsRUFDekg7QUFDRixRQUFNLGVBQWUsQ0FBQyxZQUNwQkEsSUFBRztBQUFBLElBQ0QsR0FBRyxLQUFLLEtBQUssQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUMsU0FBUyxPQUFPLFNBQVNBLElBQUcsYUFBYSxFQUFFLHFCQUFxQixJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDekk7QUFFRixFQUNFQSxJQUFHLFVBQVUsRUFBRSxTQUNaO0FBQUEsSUFBUSxDQUFDLE1BQ1IsS0FBSyxJQUFJLGFBQ04sRUFBRSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsTUFDaEMsVUFBVSxHQUFHLGFBQWEsQ0FBQztBQUFBLEVBQ2pDLEdBQ0ZNLGVBQWM7QUFBQSxJQUFRLENBQUMsUUFDckIsRUFBRSxxQkFBcUIsSUFBSSxLQUFLLE1BQU0sSUFBSSxHQUFHLE1BQ3pDLFVBQVUsR0FBRyxVQUFVLEdBQUc7QUFBQSxFQUNoQyxHQUNBLGFBQWE7QUFBQSxJQUFRLENBQUMsUUFDcEIsRUFBRSw0QkFBNEIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUscUJBQXFCLEtBQUssR0FBRyxDQUFDO0FBQUEsRUFDdEY7QUFFSjtBQUVBLGVBQWUsVUFBVU4sS0FBUTtBQUMvQixRQUFNLE1BQU0sT0FBTyxNQUFNLFNBQVMsTUFBTSxJQUFJQSxLQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQzFGLEdBQUUsTUFBTSxJQUFJQSxLQUFJLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFNLElBQUksMkJBQTJCLENBQUMsR0FDN0Y7QUFBQSxJQUNFO0FBQUEsS0FDQyxNQUFNLElBQUlBLEtBQUkscUNBQXFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7QUFBQSxPQUN2RCxNQUFNLElBQUlBLEtBQUkscUNBQXFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7QUFBQSxJQUM1RDtBQUFBLEVBQ0YsR0FDQTtBQUFBLElBQ0U7QUFBQSxJQUNDLE1BQU0sSUFBSUEsS0FBSSxvQ0FBb0MsQ0FBQyxjQUFjLENBQUMsSUFDaEUsTUFBTSxJQUFJQSxLQUFJLHdDQUF3QyxDQUFDLGNBQWMsQ0FBQztBQUFBLEVBQzNFLEdBQ0EsSUFBSSxzQkFBc0IsTUFBTSxJQUFJQSxLQUFJLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQ2pGLElBQUksMEJBQTBCLE1BQU0sSUFBSUEsS0FBSSxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUNyRixJQUFJLG9CQUFvQjtBQUFBLElBQ3RCLE1BQU0sTUFBTSxJQUFJQSxLQUFJLG9DQUFvQyxDQUFDLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDakUsS0FBSyxNQUFNLElBQUlBLEtBQUkscUNBQXFDLENBQUMsSUFBSSxHQUFHLENBQUM7QUFBQSxFQUNuRSxDQUFDO0FBQ0w7QUFFQSxlQUFlLGNBQWNBLEtBQVEsSUFBSUEsSUFBRyxhQUFhO0FBQ3ZELFFBQU0sYUFBYSxXQUFXQSxLQUFJLG9CQUFvQjtBQUN0RCxRQUFNLHFCQUFxQixDQUFDLHNCQUFzQixnQkFBZ0IsMkJBQTJCO0FBQzdGLFFBQU0sYUFBYUEsSUFDaEIsVUFBVSxFQUNWLFNBQVMsT0FBTyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsU0FBUyxPQUFPLENBQUMsRUFDbEU7QUFBQSxJQUFRLENBQUMsWUFDUixFQUNHLDRCQUE0QixPQUFPLEVBQ25DLE9BQU8sQ0FBQyxRQUFRLElBQUksWUFBWSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsU0FBUyxHQUFHLENBQUMsRUFDMUUsSUFBSSxDQUFDLGFBQWE7QUFBQSxNQUNqQixLQUFLO0FBQUEsTUFDTCxPQUFPLEVBQUUscUJBQXFCLE9BQU87QUFBQSxNQUNyQyxRQUFRLEVBQUUsc0JBQXNCLE9BQU87QUFBQSxNQUN2QyxVQUFVLEVBQUUsc0JBQXNCLE9BQU8sSUFBSSxFQUFFLGNBQWMsT0FBTztBQUFBLE1BQ3BFLE1BQU07QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLEtBQUssRUFBRSxnQkFBZ0IsT0FBTztBQUFBLFFBQzlCLFVBQVUsRUFBRSxvQkFBb0IsT0FBTztBQUFBLE1BQ3pDO0FBQUEsSUFDRixFQUFFO0FBQUEsRUFDTjtBQUNGLEVBQUFBLElBQUcsTUFBTSwwQkFBMEIsS0FBSyxVQUFVLGNBQWMsQ0FBQyxDQUFDLEdBQUcsR0FBRztBQUMxRTtBQUVBLGVBQWUsU0FBUyxHQUFPO0FBQzdCLEdBQUMsUUFBUSxlQUFlLGdCQUFnQixXQUFXLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQUEsSUFDMUUsQ0FBQyxNQUNDLENBQUMsRUFBRSxxQkFDQSxFQUFFLGtCQUNGLEVBQUUsZ0JBQWdCLElBQUksRUFBRSx3QkFDeEIsQ0FBQyxFQUFFLFVBQVUsY0FBYyxRQUFRLEVBQUUsUUFBUSxLQUM3QyxFQUFFLElBQUksY0FBYyxFQUFFLFNBQVMsR0FBRyxhQUFhLElBQUksR0FBRyxFQUFFLFFBQVE7QUFBQSxFQUN2RTtBQUNGO0FBRUEsU0FBUyxnQkFBZ0JBLEtBQVEsSUFBSUEsSUFBRyxTQUFTO0FBQy9DLFFBQU0sYUFBYSxLQUFLLGNBQWMsRUFBRSxTQUFTLENBQUM7QUFDbEQsUUFBTSxVQUFVQSxJQUFHLGdCQUFnQixFQUFFLGFBQWEsVUFBVUEsSUFBRyxnQkFBZ0IsRUFBRSxhQUFhO0FBQzlGLFFBQU0sYUFBYSxLQUFLQSxHQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVk7QUFBQSxJQUMzQyxNQUFNO0FBQUEsSUFDTixPQUFPQSxJQUFHLGtCQUFrQixNQUFNO0FBQUEsSUFDbEMsS0FBS0EsSUFBRywwQkFBMEIsTUFBTTtBQUFBLEVBQzFDLEVBQUU7QUFDRixRQUFNLG9CQUFvQixXQUFXLE9BQU8sQ0FBQyxHQUFHLE1BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUUsRUFBRTtBQUNuRixRQUFNLGtCQUFrQixXQUFXLE9BQU8sQ0FBQyxHQUFHLE1BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFJLENBQUUsRUFBRTtBQUM3RSxRQUFNLE9BQU87QUFBQSxJQUNYLEtBQUssRUFBRSxTQUFTO0FBQUEsSUFDaEIsUUFBUSxHQUFHQSxJQUFHLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJQSxJQUFHLGFBQWEsRUFBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFDakYsTUFBTSxXQUFXLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLGFBQWEsQ0FBQyxFQUFFLFlBQVksQ0FBQztBQUFBLElBQ3JFLFFBQVE7QUFBQSxFQUNWO0FBRUEsUUFBTSxVQUFVLE1BQ2RBLElBQUcsa0JBQWtCLGlCQUFpQixJQUFJLFFBQ3ZDLEVBQUUsWUFBWSwwQkFBMEIsaUJBQWlCLEtBQ3pELFFBQVE7QUFDYixRQUFNLFVBQVUsTUFDZEEsSUFBRywwQkFBMEIsZUFBZSxJQUFJLEtBQzdDLEVBQUUsWUFBWSwyQkFBMkIsZUFBZSxLQUN4RCxRQUFRO0FBRWIsUUFBTSxVQUFVLE1BQU0sRUFBRSxhQUFhLElBQUksS0FBSyxRQUFRO0FBQ3RELFFBQU0sVUFBVSxNQUNkLENBQUMsU0FBUyxRQUFRLE9BQU8sT0FBTyxFQUFFLFFBQVEsQ0FBQyxTQUFTLFdBQVcsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQztBQUVwSCxFQUVJLFVBQVUsT0FFUixRQUFRLEdBQ1IsUUFBUSxHQUNSLFFBQVEsR0FDUixRQUFRLElBR1pBLElBQUcsTUFBTSx5QkFBeUIsS0FBSyxVQUFVLElBQUksR0FBRyxHQUFHO0FBRS9EO0FBRUEsZUFBZSxPQUFPQSxLQUFRO0FBQzVCLFFBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUNBLElBQUcsUUFBUUEsSUFBRyxhQUFhQSxJQUFHLElBQUk7QUFDckQsUUFBTVEsVUFBUyxLQUFLLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHQyxPQUFNLEVBQUUsVUFBVUEsRUFBQyxFQUFFLGVBQWUsRUFBRSxVQUFVLENBQUMsRUFBRSxZQUFZO0FBQzdHLFFBQU0sZ0JBQWdCLENBQUMsVUFDckIsQ0FBQyxZQUFZLFdBQVcsYUFBYSxTQUFTLEVBQUU7QUFBQSxJQUM5QyxDQUFDLEdBQUcsVUFBVyxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU8sS0FBSyxJQUFJLEtBQUssUUFBUTtBQUFBLElBQy9EO0FBQUEsRUFDRjtBQUNGLFFBQU0sWUFBWSxDQUFDLFdBQVcsV0FBUyxVQUFVLEVBQUUsT0FBTyxPQUFPLFdBQVcsR0FBRyxFQUFFLGdCQUFnQixPQUFPLGtCQUFrQixNQUFNLFNBQVMsQ0FBQyxJQUFJLGNBQWMsS0FBSyxDQUFDO0FBQ2xLLFFBQU0sY0FBYyxDQUFDLFVBQVcsQ0FBQyxFQUFFLE9BQU8sSUFBSSxFQUFFLGlCQUFpQixPQUFPLFVBQVUsSUFBSTtBQUN0RixRQUFNLFdBQVcsQ0FBQyxVQUNoQixFQUFFLGNBQWMsS0FDYixDQUFDRCxRQUFPLElBQUksQ0FBQ0UsV0FBVSxFQUFFLFFBQVFBLE1BQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxTQUFTLE1BQU0sU0FBUyxZQUFZLEtBQ25GLEVBQUUsdUJBQXVCLE9BQU8sc0JBQXNCO0FBRTNELFFBQU0sZUFBZSxDQUFDLFVBQ3BCLEVBQUUsY0FBYyxLQUNiLEVBQUUsaUJBQWlCLEVBQ25CO0FBQUEsSUFBSyxDQUFDLGFBQWFGLFFBQU8sTUFBTSxDQUFDRSxXQUFXLEVBQUUsUUFBUUEsTUFBSyxHQUE2QixlQUFlLFFBQVEsS0FDM0csRUFBRSx3QkFBd0IsWUFBWSxRQUFRLEtBQzlDLEVBQUUsdUJBQXVCLE9BQU8scUJBQXFCLFFBQVE7QUFBQSxFQUNsRTtBQUVKLFFBQU0sa0JBQWtCLENBQUMsVUFBVyxFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsS0FBSyxJQUFJLEVBQUUsVUFBVSxLQUFLO0FBQzlHLFFBQU0sV0FBVyxDQUFDLFVBQ2hCLEVBQUUseUJBQXlCLEtBQUssRUFDN0IsS0FBSyxDQUFDLEdBQUdELE9BQU0sRUFBRSxPQUFPQSxHQUFFLElBQUksRUFDOUIsUUFBUSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsT0FBTyxJQUFJLElBQUksQ0FBQztBQUUxRCxFQUNFRCxRQUFPLFFBQVEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxLQUFLLENBQUMsR0FDNUNBLFFBQU8sUUFBUSxDQUFDLFdBQ2QsQ0FBQyxFQUFFLFVBQVUsS0FBSyxFQUFFLFNBQVMsU0FBUyxLQUFLLEdBQzNDLEVBQUUsVUFBVSxLQUFLLEVBQUUsUUFBUSxLQUN2QixnQkFBZ0IsS0FBSyxJQUNyQixVQUFVLEtBQUssS0FDZCxZQUFZLEtBQUssS0FDakIsU0FBUyxLQUFLLEtBQ2QsYUFBYSxLQUFLLE1BQ2pCLEVBQUUsVUFBVSxLQUFLLEVBQUUsUUFDbkIsRUFBRSxtQkFBbUIsS0FBSyxJQUMxQixFQUFFLFVBQVUsS0FBSyxHQUV4QjtBQUVMO0FBRUEsZUFBZSxRQUFRUixLQUFRO0FBQzdCLFFBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDQSxJQUFHLGFBQWFBLElBQUcsV0FBVztBQUM5QyxRQUFNLFVBQVUsYUFDZCxNQUFNLElBQUlBLEtBQUksd0JBQXdCLEdBQ3RDLE1BQU0sSUFBSUEsS0FBSSw0QkFBNEIsQ0FBQyxXQUFXLENBQUMsR0FDdkQsTUFBTSxJQUFJQSxLQUFJLDBCQUEwQjtBQUFBLElBQ3RDO0FBQUEsSUFDQSxDQUFDLFdBQVcsWUFBWSxhQUFhLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBR1MsT0FBTTtBQUMvRCxZQUFNLFdBQVcsQ0FBQyxRQUFRVCxJQUFHLFVBQVUsRUFBRSxPQUFPLElBQUksWUFBWSxDQUFDO0FBQ2pFLGFBQU8sU0FBUyxDQUFDLElBQUksU0FBU1MsRUFBQyxJQUFJLElBQUlBO0FBQUEsSUFDekMsQ0FBQztBQUFBLElBQ0Q7QUFBQSxFQUNGLENBQUM7QUFFSCxRQUFNLFVBQVUsTUFDZCxFQUFFO0FBQUEsSUFDQSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFPLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLElBQUksSUFBSSxDQUFFO0FBQUEsRUFDbEcsS0FBSyxRQUFRO0FBRWYsUUFBTSxPQUFPLE9BQU8sT0FDbEIsQ0FBQyxLQUNHLGNBQWNULEdBQUUsS0FDZixDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxnQ0FBZ0MsWUFBWSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FDL0YsQ0FBRSxNQUFNLFFBQVFBLEdBQUUsTUFDakIsRUFBRSxXQUFXLEdBQUcsRUFBRSxZQUFZLFlBQVksRUFBRSxlQUFlLEVBQUUsSUFBSTtBQUd6RSxFQUNFLEVBQUUsd0JBQXdCLEdBQzFCLENBQUMsRUFBRSxjQUFjLElBQ2IsTUFBTSxRQUFRLEtBQ2IsUUFBUSxHQUFHLE1BQU0sS0FBSyxFQUFFLGVBQWUsR0FBRyxJQUFJO0FBRXZEO0FBRUEsZUFBZSxLQUFLQSxLQUFRLElBQUlBLElBQUcsUUFBUTtBQUN6QyxFQUFBQSxJQUFHLFdBQVcsS0FBSyxHQUFHQSxJQUFHLFVBQVUsTUFBTSxHQUFHQSxJQUFHLElBQUksUUFBUTtBQUMzRCxJQUFFLFdBQVcsTUFBTSxNQUFNQSxJQUFHLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBS0EsR0FBRTtBQUNyRCxRQUFNLGdCQUFnQixLQUFLLE9BQU8sV0FBV0EsS0FBSSxNQUFNLElBQUksTUFBTUEsSUFBRyxhQUFhLFNBQVMsQ0FBQztBQUMzRixRQUFNLFNBQVMsRUFDWixnQkFBZ0IsRUFDaEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEdBQUcsRUFDeEIsT0FBTyxDQUFDLEdBQUcsTUFBTyxFQUFFLFlBQVksRUFBRSxZQUFZLElBQUksR0FBSSxFQUFFLFdBQVcsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDM0YsR0FBQyxDQUFDLFdBQ0MsZ0JBQWdCLEtBQUssQ0FBQyxNQUFNLE9BQU8sU0FBUyxJQUN6Q0EsSUFBRyxLQUFLLFdBQVcsUUFBUSxlQUFlLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFDNURBLElBQUcsTUFBTSx5QkFBeUIsSUFDdENBLElBQUcsVUFBVUEsSUFBRyxLQUFLLEVBQUUsR0FDdkIsTUFBTSxLQUFLLElBQUksR0FBRyxHQUNsQixNQUFNLEtBQUtBLEdBQUU7QUFDakI7QUFFQSxlQUFlLFFBQVEsR0FBRyxJQUFJLEVBQUUsTUFBTTtBQUNwQyxRQUFNLGFBQWEsQ0FBQyxPQUFPLElBQUksYUFBYSxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSSxhQUFhLE1BQU0sQ0FBQyxNQUM3RixFQUFFLGVBQWUsRUFBRSxTQUFTLElBQUksSUFDNUIsV0FBVyxJQUNYLEVBQUUsY0FBYyxJQUFJLEtBQUssRUFBRSxRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRTtBQUN4RixRQUFNLFFBQVEsTUFDWixFQUFFLG9CQUFvQixPQUFPLEtBQUssZ0JBQWdCLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDO0FBQ3BHLFFBQU0sTUFBTSxPQUFPLE1BQU0sTUFBTSxFQUFFLE1BQU0sS0FBSyxFQUFFLGFBQWEsSUFBSSxNQUFNLEtBQUssRUFBRTtBQUM1RSxRQUFNLGtCQUFrQixFQUFFO0FBQzFCLFFBQU0sT0FBTyxPQUNYLElBQUksTUFBTSxPQUFPLE9BQU8sZ0JBQWdCLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBVyxNQUEyQixJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQ3ZHLElBQUksRUFBRSxPQUNGLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLEVBQUUsS0FBTSxNQUFNLEtBQUs7QUFDakQsUUFBTSxRQUFRLE1BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxJQUFJLGNBQWM7QUFDbkUsUUFBTSxZQUFZLENBQUMsVUFDakIsRUFBRSxlQUFlLEVBQUU7QUFBQSxJQUNqQixDQUFDLFlBQ0MsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLGtCQUFrQixRQUFRLElBQUksQ0FBQyxHQUN6RSxDQUFDLE9BQU8sT0FBTyxPQUFPLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxtQkFBbUIsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLGFBQWEsTUFBTSxHQUNwSCxFQUFFO0FBQUEsTUFDQTtBQUFBLE1BQ0EsUUFBUSxFQUFFLGFBQWEsRUFBRTtBQUFBLFFBQ3ZCLENBQUMsR0FBRyxPQUNGLEVBQUUsY0FBYyxRQUFRLENBQUMsSUFDeEIsQ0FBQyxTQUFVLE9BQU8sRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLEdBQUcsS0FBSyxLQUFLLEdBQUksRUFBRSxxQkFBcUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQUEsTUFFbkcsRUFBRTtBQUFBLElBQ0o7QUFBQSxFQUVKLEdBQ0E7QUFBQSxJQUNFLE1BQU0sTUFBTSxHQUFHLEVBQ1osSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFDZixLQUFLLEVBQUUsS0FBSztBQUFBLEVBQ2pCO0FBRUYsUUFBTSxjQUFjLENBQUMsU0FDbkIsRUFBRSxVQUFVLEVBQUUsR0FBRyxHQUNqQixFQUFFLFVBQVUsRUFBRSxLQUFLO0FBQUEsSUFDakIsT0FBTztBQUFBLElBQ1AsTUFBTSxFQUFFLGVBQWUsRUFBRTtBQUFBLElBQ3pCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRTtBQUFBLElBQzlCLFdBQVcsT0FBTyxPQUFPLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQVcsTUFBNEIsSUFBSSxFQUFFLFFBQVEsSUFBSSxFQUFFLE9BQVEsQ0FBQztBQUFBLElBQ3hILFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxZQUFZO0FBQUEsSUFDOUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFO0FBQUEsRUFDN0IsQ0FBQztBQUdILEdBQ0csRUFBRSxPQUFPLEtBQUssRUFBRSxXQUFXLElBQUksU0FBUyxPQUV2QyxXQUFXLEdBQ1gsTUFBTSxHQUNOLFVBQVUsTUFBUyxHQUNuQixNQUFNLElBQUksSUFBSSxHQUNkLFVBQVUsY0FBYyxHQUN4QixNQUFNLElBQUksSUFBSSxHQUNkLFVBQVUsbUJBQW1CLEdBQzdCLE1BQU0sS0FBSyxHQUNYLE1BQU0sUUFBUSxDQUFDO0FBR3JCO0FBRUEsZUFBZSxXQUNiLEdBQ0EsSUFBSSxFQUFFLE1BQ04sSUFBSSxPQUFPLE1BQU0sTUFBTSxFQUFFLE1BQU0sS0FBSyxFQUFFLGFBQWEsSUFBSSxNQUFNLEtBQUssRUFBRSxHQUNwRSxJQUFJLENBQUMsTUFDSCxFQUNHLGVBQWUsRUFDZjtBQUFBLEVBQ0MsQ0FBQyxPQUNDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsR0FDMUQsQ0FBQyxPQUFPLE9BQU8sT0FBTyxLQUFLLEVBQUUsT0FBTyxDQUFDVyxJQUFHLE1BQU1BLEtBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLGFBQWEsQ0FBQyxHQUMxRyxFQUFFO0FBQUEsSUFDQTtBQUFBLElBQ0EsS0FBSyxFQUFFLGFBQWEsRUFBRTtBQUFBLE1BQU8sQ0FBQ0EsSUFBRyxPQUM5QixFQUFFLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFPLElBQUlBLEdBQUUsSUFBSUEsS0FBSSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxRQUN6RCxFQUFFLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsU0FBUyxJQUFJLGNBQWMsYUFBYTtBQUFBLE1BQ3ZGO0FBQUEsSUFDRixFQUFFO0FBQUEsRUFDSjtBQUVKLEdBQ0o7QUFFQSxHQUNHLEVBQUUsT0FBTyxLQUFLLEVBQUUsV0FBVyxhQUFhLE9BRXZDLEVBQUUsY0FBYyxLQUFLLE9BQU8sQ0FBQyxHQUM3QixFQUFFLG9CQUFvQixPQUFPLEtBQUssRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxHQUFHLENBQUMsR0FDM0csRUFBRSxNQUFTLEdBQ1gsTUFBTSxFQUFFLElBQUksR0FDWixFQUFFLGNBQWMsR0FDaEIsTUFBTSxFQUFFLElBQUksR0FDWixFQUFFLG1CQUFtQixHQUNyQixNQUFNLEVBQUUsV0FBVyxHQUNuQixNQUFNLFFBQVEsQ0FBQztBQUdyQjtBQU1BLGVBQWUsS0FBS1gsS0FBUTtBQUMxQixFQUFBQSxJQUFHLFdBQVcsS0FBSztBQUNuQixFQUFBQSxJQUFHLFVBQVUsTUFBTTtBQUNuQixRQUFNLGtCQUFrQjtBQUN4QixRQUFNLGNBQWM7QUFDcEIsUUFBTSxnQkFBZ0IsTUFDcEIsQ0FBQyxRQUFRLFFBQVEsUUFBUSxFQUFFO0FBQUEsSUFDekIsQ0FBQyxZQUNDLENBQUNBLElBQUcsV0FBVyxNQUFNLEtBQ3JCQSxJQUFHO0FBQUEsTUFDRCxHQUFHLE1BQU07QUFBQSxNQUNULDRDQUE0QyxNQUFNO0FBQUEsTUFDbEQ7QUFBQSxJQUNGLEdBQ0EsS0FBS0EsR0FBRSxFQUFFLFFBQVEsQ0FBQyxXQUFXQSxJQUFHLElBQUksR0FBRyxNQUFNLE9BQU8sTUFBTSxDQUFDO0FBQUEsRUFFL0Q7QUFDRixRQUFNLGFBQWEsQ0FBQyxXQUFXLEtBQUssTUFBTSxXQUFXQSxLQUFJLE1BQU0sS0FBSyxVQUFVLFNBQVMsTUFBTSxFQUFFO0FBQy9GLFFBQU0sWUFBWSxDQUFDLFFBQVEsU0FBUyxXQUNsQyxPQUFPO0FBQUEsSUFDTCxPQUFPLFFBQVEsTUFBTSxFQUFFO0FBQUEsTUFDckIsQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUNWLE9BQU8sVUFBVSxNQUFNLFdBQVdBLElBQUcsU0FBUyxRQUFRLFFBQVEsUUFBUSxNQUFNLElBQUksVUFDaEYsT0FBTyxhQUNOLE1BQU0sVUFBVUEsSUFBRyxTQUFTLE9BQU8sZUFBZSxPQUFPLElBQUksU0FBUyxPQUFPLE1BQU0sT0FBTyxJQUMzRixDQUFDLEtBQUssS0FBSztBQUFBLElBRWY7QUFBQSxFQUNGO0FBQ0YsUUFBTSxXQUFXLENBQUMsT0FBTyxXQUN0QixNQUFNLFVBQVUsS0FBSyxJQUFJLE1BQU0sV0FBVyxNQUFNLE9BQU8sSUFBSSxHQUMzRCxNQUFNLGFBQWEsTUFBTSxTQUN6QixNQUFNLE9BQU8sUUFBUSxNQUFNLFNBQzVCLE1BQU0sVUFBVSxLQUNkLENBQUMsQ0FBQ0EsSUFBRyxLQUFLLEdBQUcsTUFBTSxPQUFPLElBQUksT0FBTyxNQUFNLE1BQU0sTUFBTSxTQUFTLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxJQUFJLElBQ3RHLE1BQU0sWUFBWSxLQUFLLE1BQU0sT0FBTyxPQUFPLElBQ3pDLFNBQVMsT0FBTyxVQUFVLE9BQU8sTUFBTSxTQUFTLE1BQU0sTUFBTSxDQUFDLElBQzdELFVBQVUsT0FBTyxNQUFNLFNBQVMsTUFBTSxNQUFNLElBQzlDO0FBR04saUJBQWUsUUFBUSxXQUFXO0FBQ2hDLEtBQUNBLElBQUcsVUFBVSxVQUFVLEtBQ3RCQSxJQUFHLElBQUksWUFBWSxLQUFLLE1BQU0sUUFBUSxXQUFXQSxLQUFJLE1BQU0sSUFBSUEsSUFBRyxhQUFhLFVBQVUsRUFBRSxLQUFLLENBQUM7QUFDbkcsa0JBQWM7QUFDZCxVQUFNLFlBQVksS0FBS0EsR0FBRSxFQUFFLE9BQU8sQ0FBQyxXQUFXQSxJQUFHLGNBQWMsTUFBTSxLQUFLLE9BQU8sVUFBVSxHQUFHLENBQUMsS0FBSyxTQUFTO0FBQzdHLFVBQU0sc0JBQXNCLENBQUMsV0FDM0IsVUFBVSxPQUFPLENBQUMsR0FBRyxXQUFXLElBQUksS0FBSyxNQUFNLFdBQVcsTUFBTSxJQUFJQSxJQUFHLGFBQWEsR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUM5RyxVQUFNLFNBQVNBLElBQUc7QUFBQSxNQUNoQixVQUFVLE9BQU8sQ0FBQyxHQUFHLE1BQU07QUFDekIsY0FBTSxPQUFPLENBQUMsTUFBTUEsSUFBRyxrQkFBa0IsQ0FBQyxJQUFJQSxJQUFHLDBCQUEwQixDQUFDO0FBQzVFLGVBQU9BLElBQUcsOEJBQThCLENBQUMsS0FBS0EsSUFBRyxnQkFBZ0IsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUk7QUFBQSxNQUNwRyxDQUFDO0FBQUEsSUFDSDtBQUNBLFVBQU0sUUFBUSxDQUFDLE1BQU8sSUFBSSxLQUFLLEtBQUssV0FBVyxJQUFJO0FBQ25ELFVBQU0sWUFBWTtBQUNsQixVQUFNLFlBQ0osSUFBSUEsSUFBRyxjQUFjLE9BQU8sVUFBVSxLQUFLLElBQUlBLElBQUcsU0FBUyxRQUFRLFlBQVksUUFBUSxTQUFTLElBQUksVUFBVTtBQUNoSCxVQUFNLFlBQVksT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUJBLElBQUcsY0FBYyxDQUFDO0FBQ3BGLFVBQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZO0FBQzVELFVBQU0sY0FBYyxZQUFZLFlBQVk7QUFDNUMsVUFBTSxTQUFTLENBQUMsUUFBUSxTQUN0QixLQUFLLE1BQU0sY0FBYyxvQkFBb0IsTUFBTSxJQUFJLFFBQVEsb0JBQW9CLE1BQU0sSUFBSSxlQUFlLElBQUk7QUFDbEgsVUFBTSxhQUFhO0FBQUEsTUFDakI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU0sT0FBTyxRQUFRLFNBQVM7QUFBQSxRQUM5QixNQUFNQSxJQUFHLFlBQVksT0FBTyxRQUFRLElBQUk7QUFBQSxNQUMxQztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU0sT0FBTyxRQUFRLFNBQVM7QUFBQSxRQUM5QixNQUFNQSxJQUFHLFlBQVksT0FBTyxRQUFRLElBQUk7QUFBQSxNQUMxQztBQUFBLE1BQ0EsRUFBRSxNQUFNLFVBQVUsTUFBTSxPQUFPLFVBQVUsU0FBUyxHQUFHLE1BQU0sRUFBRTtBQUFBLElBQy9EO0FBQ0EsVUFBTSx1QkFBdUIsV0FBVztBQUFBLE1BQ3RDLENBQUMsR0FBRyxXQUNGLFVBQVU7QUFBQSxRQUNSLENBQUMsSUFBSTtBQUFBO0FBQUEsVUFFSDtBQUFBLFlBQ0U7QUFBQSxjQUNFLFdBQVcsS0FBSyxNQUFNLFdBQVcsSUFBSSxJQUFJQSxJQUFHLGFBQWEsR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDO0FBQUEsY0FDN0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFDQSxJQUFBQSxJQUFHLFVBQVVBLElBQUcsR0FBRyxHQUNqQkEsSUFBRyxVQUFVQSxJQUFHLEtBQUssT0FBTyxRQUFRLEdBQ3BDLE1BQU0sS0FBSyxJQUFJLFdBQVcsR0FDMUIsTUFBTSxRQUFRLG9CQUFvQjtBQUFBLEVBQ3RDO0FBQ0EsUUFBTSxRQUFRLE1BQU0sSUFBSUEsS0FBSSxXQUFXLENBQUM7QUFDMUM7QUFFQSxlQUFlLFNBQVNBLEtBQVE7QUFDOUIsUUFBTSxNQUFNO0FBQ1osUUFBTSxVQUFVLENBQUMsS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDMUcsUUFBTSxhQUFhLENBQUMsU0FDbEIsR0FBRyxLQUFLLE1BQU0sUUFBUSxLQUFLLEdBQUcsQ0FBQyxVQUFVLEtBQUssTUFBTyxPQUFPLEtBQU0sRUFBRSxDQUFDLFdBQVcsS0FBSyxNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ3ZHLFFBQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtBQUN6QixRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLEVBQUU7QUFDMUMsUUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQztBQUMzQyxRQUFNLE9BQU8sR0FBRyxLQUFLLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEdBQUdBLElBQUcsWUFBWSxDQUFDO0FBQ2xFLFFBQU0sU0FBUyxHQUFHLEtBQUssS0FBSyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksS0FBSztBQUNuRSxRQUFNLFNBQVMsR0FBRyxLQUFLLEtBQUssQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLEdBQUcsV0FBV0EsSUFBRyxVQUFVLEVBQUUsaUJBQWlCLE1BQU0sR0FBRyxDQUFDO0FBQzNHLFFBQU0sV0FBVyxHQUFHLEtBQUssS0FBSyxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsR0FBR0EsSUFBRyxHQUFHLE1BQU0sRUFBRSxNQUFNO0FBQzlFLFFBQU0sUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUM7QUFDakQsUUFBTSxhQUFhLEdBQUcsS0FBSyxLQUFLLENBQUMsZUFBZSxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxVQUFVLE1BQU0sSUFBSSxJQUFJLFdBQVc7QUFDekcsUUFBTSxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQztBQUMzQyxRQUFNLFdBQVcsR0FBRyxLQUFLLEtBQUssQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDO0FBQ3ZELFFBQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsZ0JBQWdCQSxJQUFHLFVBQVUsTUFBTSxFQUFFLFFBQVE7QUFDMUYsUUFBTSxTQUFTLEdBQUcsS0FBSyxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxHQUFHQSxJQUFHLFVBQVUsTUFBTSxFQUFFLFVBQVUsR0FBRyxVQUFVQSxJQUFHLFVBQVUsTUFBTSxFQUFFLFNBQVMsR0FBRztBQUNuSSxRQUFNLFFBQVE7QUFBQSxJQUNaLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUEsSUFDcEIsT0FBTyxLQUFLLEtBQUssQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsbUJBQW1CLEtBQUs7QUFBQSxJQUN2RixPQUFPLEtBQUssS0FBSyxDQUFDLGNBQWMsS0FBSyxLQUFLLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxvQkFBb0IsTUFBTTtBQUFBLElBQ3pGLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFBQSxJQUNqRyxNQUFNLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxZQUFZLElBQUk7QUFBQSxJQUNsSCxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxlQUFlLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsWUFBWSxNQUFNO0FBQUEsSUFDcEgsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxZQUFZLE1BQU07QUFBQSxJQUNoSixLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLFdBQVcsUUFBUTtBQUFBLElBQ2pKLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLFdBQVcsS0FBSztBQUFBLElBQzlLLEtBQUssS0FBSyxLQUFLLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLHdCQUF3QixVQUFVO0FBQUEsSUFDNUYsTUFBTSxLQUFLLEtBQUssQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsdUJBQXVCLEVBQUU7QUFBQSxJQUNuRixPQUFPLEtBQUssS0FBSyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsa0JBQWtCLFFBQVE7QUFBQSxJQUN0SCxRQUFRLEtBQUssS0FBSyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsY0FBYyxLQUFLLEtBQUssQ0FBQyxpQkFBaUIsR0FBRztBQUFBLElBQ3JGLFNBQVMsS0FBSyxLQUFLLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLGtCQUFrQixNQUFNO0FBQUEsSUFDekYsVUFBVSxLQUFLLEtBQUssQ0FBQztBQUFBLElBQ3JCLE1BQU0sQ0FBQyxHQUFHLFNBQVMsS0FBSyxLQUFLLEdBQUcsRUFBRSxFQUFFLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQztBQUFBLElBQ3RELE1BQU0sQ0FBQyxHQUFHLFNBQVMsS0FBSyxLQUFLLEdBQUcsRUFBRSxFQUFFLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQztBQUFBLEVBQ3hEO0FBQ0EsUUFBTSxNQUFNLE9BQU8sT0FBTyxHQUFHLE9BQU8sTUFBTSxHQUFHQSxJQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxRQUFRLFFBQVEsQ0FBQztBQUNsSDtBQUtBLFNBQVMsWUFBWUEsS0FBSSxHQUFHO0FBQzFCLE1BQUksWUFBWSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FDM0IsSUFBSSxFQUFFLEdBQ04sSUFBSSxFQUFFLEdBQ04sSUFBSSxFQUFFLE9BQ04sSUFBSSxFQUFFLFFBQ04sYUFBYUEsSUFBRyxHQUFHLEVBQUUsSUFBSSxPQUFLQSxJQUFHLGlCQUFpQixFQUFFLEdBQUcsR0FBRyxjQUFjLEVBQUUsT0FBTyxPQUFLLENBQUM7QUFDekYsYUFBVztBQUFBLElBQVEsVUFBUTtBQUN6QixVQUFJLEtBQUssSUFBSSxJQUFJO0FBQUcsa0JBQVUsSUFBSTtBQUNsQyxVQUFJLEtBQUssSUFBSSxLQUFLLFFBQVE7QUFBRyxrQkFBVSxJQUFJO0FBQUEsSUFDN0M7QUFBQSxFQUNBO0FBQ0EsU0FBTztBQUNUO0FBR0EsU0FBUyxXQUFXLEdBQW1CO0FBQ3JDLFNBQU8sSUFBSSxNQUNQLE1BQ0EsSUFBSSxNQUNGLE1BQ0EsSUFBSSxPQUNGLE1BQ0EsSUFBSSxPQUNGLElBQ0E7QUFDWjtBQUVBLFNBQVMsVUFBVUEsS0FBSU8sWUFBV0ssWUFBVztBQUMzQyxNQUFJTCxhQUFZLE1BQVEsQ0FBRSxvQkFBSSxLQUFLO0FBQUksV0FBT0s7QUFDOUMsU0FBT0EsYUFBWVosSUFBRyxHQUFHLEVBQUUsT0FBTyxPQUFLLEVBQUUsYUFBYSxTQUFTLEVBQUU7QUFDbkU7QUFNQSxlQUFlLFFBQVEsSUFBUSxVQUFrQixVQUFrQjtBQUNqRSxXQUFTLEtBQUtBLEtBQVEsR0FBVyxHQUFXLFNBQWlCO0FBQzNELElBQ0VBLElBQUcsTUFBTSxXQUFXLFlBQVksR0FBRyxHQUNuQyxVQUFVQSxJQUFHLElBQUksU0FBUyxHQUMxQkEsSUFBRyxLQUFLLE9BQU8sR0FDZkEsSUFBRyxXQUFXLEtBQUssS0FBSyxPQUFPLEdBQy9CQSxJQUFHLFNBQVMsR0FBRyxHQUFHLE9BQU87QUFBQSxFQUU3QjtBQUNBLFdBQVMsS0FBS0EsS0FBSSxhQUFhLFFBQVEsT0FBTyxHQUFHLFdBQVcsTUFBTTtBQUNoRSxRQUFJLGNBQWMsSUFBSSxjQUFjLElBQUksWUFDdEMsSUFBSSxLQUFLQSxHQUFFLEVBQUUsR0FDYixJQUFJLEtBQUtBLEdBQUUsRUFBRTtBQUNmLFFBQUksT0FBTyxJQUFJLEdBQUc7QUFBRSxXQUFNLEdBQUcsSUFBSSxjQUFlLEtBQUssS0FBSztBQUFBLElBQWMsV0FDL0QsT0FBTyxJQUFJLEdBQUc7QUFBRSxXQUFNLEdBQUcsSUFBSSxjQUFlLEtBQUssS0FBSztBQUFBLElBQWE7QUFDNUUsUUFBSSxHQUFHLElBQUksTUFBTTtBQUFHLGFBQU87QUFDM0IsUUFBSSxlQUFlLFVBQVU7QUFDM0IsV0FBSyxJQUFJLEdBQUcsSUFBSTtBQUNoQixXQUFLLElBQUksR0FBRyxJQUFJLE9BQU87QUFBQSxJQUN6QjtBQUNBLFFBQUksZUFBZSxZQUFZQSxLQUFJLEtBQUtBLEdBQUUsQ0FBQztBQUMzQyxTQUFLLGFBQWE7QUFDbEIsV0FBTyxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksY0FBYyxJQUFJO0FBQUEsRUFDNUM7QUFFQSxRQUFNLE1BQU0sS0FBSyxRQUFRO0FBQ3pCLFFBQU0sTUFBTSxLQUFLLFVBQVU7QUFDM0IsUUFBTSxLQUFLLEtBQUs7QUFDaEIsUUFBTSxPQUFPLENBQUNBLFFBQU9BLElBQUcsaUJBQWlCLEVBQUUsa0JBQWtCQSxJQUFHLEtBQUs7QUFDckUsUUFBTSxRQUFRLENBQUMsVUFBVSxTQUFTLFVBQVUsWUFBWSxTQUFTLFdBQVcsUUFBUSxTQUFTO0FBQzdGLFFBQU0sT0FBTyxDQUFDQSxLQUFJYSxVQUFTYixJQUFHLE1BQU1hLEtBQUk7QUFDeEMsaUJBQWUsV0FBV2IsS0FBSSxTQUFTWSxZQUFXO0FBQ2hELFFBQUlaLElBQUcsS0FBS0EsSUFBRyxHQUFHLE1BQU07QUFBa0IsYUFBTyxFQUFFLE1BQU0sUUFBVyxXQUFXWSxXQUFVO0FBQ3pGLElBQUFaLElBQUcsVUFBVUEsSUFBRyxHQUFHO0FBQ25CLGNBQVUsRUFBRSxNQUFNLGdCQUFnQixNQUFNLEtBQUs7QUFDN0MsSUFBQVksY0FBYTtBQUNiLFdBQU8sRUFBRSxNQUFNLFNBQVMsV0FBV0EsV0FBVTtBQUFBLEVBQy9DO0FBQ0EsS0FBRyxNQUFNLGFBQWEsV0FBVyxHQUFHO0FBQ3BDLFFBQU0sU0FBUyxNQUFNLE9BQU8sVUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksVUFBUSxHQUFHLGlCQUFpQixLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxJQUFJLENBQUM7QUFDNUcsS0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssT0FBTyxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQy9FLEtBQUcsaUJBQWlCLFdBQVcsS0FBSyxHQUFHLElBQUksV0FBVztBQUN0RCxLQUFHLFdBQVcsS0FBSztBQUNuQixNQUFJLE1BQU0sRUFBRSxHQUFHLFFBQVcsR0FBRyxPQUFVO0FBQ3ZDLE1BQUksaUJBQWlCLGFBQWEsQ0FBQyxVQUFVO0FBQzNDLFVBQU0sRUFBRSxHQUFHLE1BQU0sVUFBVSxLQUFLLEdBQUcsTUFBTSxVQUFVLEdBQUc7QUFBQSxFQUN4RCxDQUFDO0FBQ0QsS0FBRyxLQUFLO0FBRVIsTUFBSSxZQUFZO0FBQ2hCLE1BQUksWUFBWSxDQUFFLG9CQUFJLEtBQUs7QUFDM0IsTUFBSSxXQUFXO0FBQ2YsTUFBSSxTQUFTO0FBQ2IsU0FBTyxNQUFNO0FBQ1gsT0FBRyxTQUFTO0FBQ1osVUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUU7QUFDM0MsUUFBSSxRQUFRO0FBQ1osUUFBSSxjQUFjLFdBQVcsTUFBTTtBQUNuQyxVQUFNLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQztBQUNoRSxRQUFJLE9BQU8sS0FBSyxJQUFJLGFBQWEsR0FBRztBQUNwQyxRQUFJLG1CQUFtQixNQUFNLFdBQVcsSUFBSSxPQUFPLFNBQVM7QUFDNUQsUUFBSSxVQUFVLGtCQUFrQjtBQUNoQyxnQkFBWSxrQkFBa0I7QUFDOUIsUUFBSSxHQUFHLElBQUksTUFBTyxNQUFPLElBQUksZUFBaUIsQ0FBQyxDQUFDLGFBQWE7QUFDM0QsZ0JBQVUsRUFBRSxNQUFNLFVBQVUsTUFBTSxJQUFJO0FBQ3RDLFVBQUksSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUk7QUFBSyxrQkFBVSxFQUFFLE1BQU0sbUJBQW1CLE1BQU0sSUFBSTtBQUM3SCxlQUFTO0FBQUEsSUFDWDtBQUNBLGdCQUFZLFVBQVUsSUFBSSxXQUFXLFNBQVM7QUFDOUMsUUFBSSxDQUFDLGFBQWE7QUFDaEIsZUFBUztBQUNULGlCQUFXLElBQUksV0FBVyxJQUFJO0FBQzlCLFNBQUcsTUFBTSxJQUFJLE9BQU8sUUFBUSxDQUFDO0FBQUEsSUFDL0IsT0FBTztBQUNMLFNBQUcsTUFBTSxjQUFjLEtBQUssTUFBTSxZQUFZLEdBQUksQ0FBQyxFQUFFO0FBQUEsSUFDdkQ7QUFDQSxRQUFJLGVBQWUsR0FBRyxJQUFJLE1BQU87QUFBRyxXQUFLLElBQUksR0FBRyxJQUFJLEtBQUssTUFBUztBQUNsRSxPQUFHLE1BQU0sWUFBWSxTQUFZLFFBQVEsS0FBSyxJQUFJLFFBQVEsSUFBSSxDQUFDO0FBQy9ELE9BQUcsV0FBVyxLQUFLLEdBQUc7QUFDdEIsT0FBRyxTQUFTLEtBQUssSUFBSSxLQUFLLEVBQUU7QUFDNUIsZUFBVyxTQUFZLE1BQU0sR0FBRyxNQUFNLEtBQUssSUFBSSxNQUFNLEdBQUcsTUFBTSxRQUFRLElBQUk7QUFDMUUsZUFBVyxTQUFZLFVBQVUsTUFBTSxVQUFVLFFBQVE7QUFDekQsUUFBSSxJQUFJLE1BQU0sWUFBWSxJQUFJLE1BQU07QUFBVSxlQUFTO0FBQ3ZELGVBQVcsSUFBSSxHQUFHLFdBQVcsSUFBSTtBQUNqQyxRQUFJLFlBQVksTUFBUSxDQUFFLG9CQUFJLEtBQUs7QUFBSSxrQkFBWSxDQUFFLG9CQUFJLEtBQUs7QUFDOUQsT0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVMsR0FBRyxLQUFLLFdBQVcsR0FBRyxHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQUEsRUFDdkU7QUFDRjtBQUVBLElBQU0sYUFBYTtBQUduQixJQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFsibnMiLCAicHJpbnRfbWFwIiwgInRpbWVvdXQiLCAiZiIsICJ0IiwgInAiLCAiYXZhaWxhYmxlQXVncyIsICJ0aW1lc3RhbXAiLCAic3RldmVzIiwgImIiLCAic3RldmUiLCAiYSIsICJoYXBwaW5lc3MiLCAiYmFyayJdCn0K
