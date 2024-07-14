// servers/home/lib.ts
Array.prototype.forEachAsync = async function(fn) {
  await this.reduce(async (last, curr) => (await last, fn(curr)), void 0);
};
Array.prototype.mapAsync = async function(fn) {
  return await this.reduce(async (ret, cur, i) => await (async (newArr) => (newArr[i] = await fn(cur), newArr))(await ret), (async () => Array.from({ length: this.length }))());
};
Array.prototype.someAsync = async function(func) {
  return await this.reduce(async (ret, cur) => await ret || await func(cur), (async () => false)());
};
Array.prototype.everyAsync = async function(func) {
  return await this.reduce(async (ret, cur) => await ret && await func(cur), (async () => false)());
};
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
    "bburner",
    "contracts"
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
async function main(n) {
  n.ps().forEach((s) => n.closeTail(s.pid)), sGet(n).forEach((s) => n.killall(s, true)), !n.args.length && (writeLaunchers(n), n.run("util/gvnr.js"));
}
function writeLaunchers(ns2) {
  ["oneshot", "loop", "util"].forEach((dir) => ns2.ls("home", dir).forEach((s) => ns2.rm(s))), [
    [CON.UTIL_FUNCTIONS, "util"],
    [CON.LOOP_FUNCTIONS, "loop"],
    [CON.ONESHOT_FUNCTIONS, "oneshot"]
  ].forEach(
    ([fns, dir]) => fns.forEach(
      (fn) => ns2.write(
        `${dir}/${fn}.js`,
        `import { ${fn} } from "lib.js"; export const main = async ns => (ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))), await ${fn}(ns,ns.args[0]));`,
        "w"
      )
    )
  );
}
async function gvnr(ns2, is_first_start = true, timer = 0) {
  is_first_start && (ns2.atExit(() => (HOOKS[0].innerText = "", HOOKS[1].innerText = "", ns2.closeTail())), ns2.tail(), ns2.disableLog("ALL"), ns2.tprintf(`${util.ansi.m}** ./gvnr.js **`)), await [
    timer % 40 ? async (_) => void 0 : scriptLoop.bind(null, ns2, is_first_start),
    prettyLogs.bind(null, ns2),
    prettyOverview.bind(null, ns2, timer),
    util.slp.bind(null, 1e3),
    gvnr.bind(null, ns2, false, timer + 1)
  ].forEachAsync(async (fn) => await fn());
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
  tickString: (t, l = 40) => t % l ? "#".repeat(t / 4 % (l / 4)) + `|/-\\`[t % 4] : "#--exec--#",
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
async function getCurrentNode(ns2) {
  const r = await Run(ns2, "getResetInfo");
  return `${r.currentNode}.${1 + r.ownedSF.get(r.currentNode)}`;
}
function buyTOR(ns2) {
  Run(ns2, "singularity.purchaseTor");
}
async function ramUp(ns2) {
  await Run(ns2, "singularity.upgradeHomeRam") && (ns2.tprintf(util.ansi.g + "Upgraded home ram"), true) && ramUp(ns2);
}
async function coresUp(ns2) {
  await Run(ns2, "singularity.upgradeHomeCores") && (ns2.tprintf(util.ansi.g + "Upgraded home cores"), true) && coresUp(ns2);
}
async function factionJoin(n, s = n.singularity) {
  await (await Run(n, "singularity.checkFactionInvitations")).forEachAsync(async (f) => (await Run(n, "singularity.joinFaction", [f]), n.tprintf(`${util.ansi.m}Joined ${f}`)));
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
    `${await getCurrentNode(ns2)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
  ), await Run(ns2, "singularity.destroyW0r1dD43m0n", [12, "rset.js"]));
}
function pServ(ns2) {
  (ns2.purchaseServer("#", 8) || sGet(ns2).some((s) => [...Array(21).keys()].some((r) => ns2.upgradePurchasedServer(s, r << 1)))) && pServ(ns2);
}
async function prettyLogs(ns2) {
  const access_list = sGet(ns2).filter(
    (s) => ns2.hasRootAccess(s) && ns2.getServerRequiredHackingLevel(s) <= ns2.getHackingLevel()
  );
  const [funded_list, total_max_ram, total_free_ram] = access_list.reduce(
    ([funded, max_ram, free_ram], b) => [
      [...funded, ns2.getServerMaxMoney(b) ? b : null],
      max_ram + ns2.getServerMaxRam(b),
      free_ram + getFreeRam(ns2, b)
    ],
    [[], 0, 0]
  );
  const [num_nfg, not_nfg, augs_sans_nfg] = readyFiley(ns2, "temp/boughtAugs.txt").reduce(([y_nfg, n_nfg, sans_nfg], aug) => aug == CON.NFG ? [y_nfg + 1, n_nfg, sans_nfg] : [y_nfg, n_nfg + 1, [...sans_nfg, aug]], [0, 0, []]);
  const bought_aug_info = augs_sans_nfg.map((aug) => " \xB7" + aug).join("\n") + (num_nfg ? "\n \xB7 NeuroFlux Governor x" + num_nfg : "");
  const num_other_augs = readyFiley(ns2, "temp/installedAugs.txt").reduce((acc, aug) => acc + (aug != CON.NFG), 0);
  const percColour = (perc) => `${perc < 33 ? util.ansi.r : perc < 66 ? util.ansi.y : perc < 85 ? util.ansi.c : util.ansi.g}${perc.padStart(6, " ")}%${util.ansi.d}`;
  const secColour = (sec) => `${sec < 5 ? util.ansi.g : util.ansi.y}${("" + sec).padStart(3, " ")}${util.ansi.d}`;
  const getInfo = (server) => [
    Math.ceil(ns2.getServerSecurityLevel(server)).toString().padStart(3, " "),
    secColour(
      Math.ceil(ns2.getServerSecurityLevel(server) - ns2.getServerMinSecurityLevel(server)).toString().padStart(3, " ")
    ),
    ns2.formatNumber(ns2.getServerMoneyAvailable(server)).toString().padStart(8, " "),
    ns2.formatNumber(ns2.getServerMaxMoney(server)).toString().padStart(8, " "),
    percColour((ns2.getServerMoneyAvailable(server) / ns2.getServerMaxMoney(server) * 100).toFixed(2)),
    util.digiClock(ns2.getWeakenTime(server)),
    server == peekyPorty(ns2, "loop/prsm.js") ? `${server} ${util.ansi.w}---${util.ansi.y}\u0394<` : server
  ];
  ns2.resizeTail(800, 1e3), ns2.moveTail(CON.WIN.innerWidth - 1150, 0), ns2.clearLog(), [
    ...[
      ...funded_list.filter(Boolean).map(getInfo),
      [
        "sec",
        " \u0394 ",
        "  $cur  ",
        "  $max  ",
        "   %   ",
        "  ~ete  ",
        ` Target ~ ${funded_list.filter(Boolean).length}/${sGet(ns2).filter(ns2.getServerMaxMoney).length}`
      ]
    ].map((line) => ` ${line.join(" | ")}`),
    "",
    ` home - ${util.ramFormat(getFreeRam(ns2, "home"))}/${util.ramFormat(ns2.getServerMaxRam("home"))}`,
    ` network - ${util.ramFormat(total_free_ram)}/${util.ramFormat(total_max_ram)}`,
    ` threads - ${ns2.formatNumber(Math.floor(total_free_ram / ns2.getScriptRam("weaken.js")))}/${ns2.formatNumber(Math.floor(total_max_ram / ns2.getScriptRam("weaken.js")))} threads`,
    "",
    ` bought augs x ${not_nfg}, ${num_other_augs}/100 installed, NFG x ${(await Run(ns2, "getResetInfo", [], "ownedAugs")).get(CON.NFG)}`,
    `${bought_aug_info}`,
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
        [`bitnode:`, `${await getCurrentNode(ns2)}`],
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
        [`$total:`, `$${ns2.formatNumber(await Run(ns2, "getMoneySources", [], "sinceInstall.hacking"))}`],
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
        [`profit:`, `$${ns2.formatNumber(await Run(ns2, "getMoneySources", [], "sinceStart.gang") ?? 0)}`]
      ],
      col: "magenta"
    },
    {
      lines: [
        [`${util.tickString(timer)}`, `cycle #${Math.floor(timer / 30)}`],
        [`gvnr uptime:`, `${util.digiClock(timer * 1e3)}`],
        [`t+ Augbuy:`, `${!!(date - last_aug_time) ? util.digiClock(date - last_aug_time) : "N/A"}`],
        [`t+ Install:`, `${util.digiClock(date - await Run(ns2, "getResetInfo", [], "lastAugReset"))}`],
        [`t+ Bitnode:`, `${util.digiClock(date - await Run(ns2, "getResetInfo", [], "lastNodeReset"))}`]
      ],
      col: "yellow"
    }
  ].flatMap(colourise).reduce(splitNBreak);
}
async function scriptLoop(ns2, is_first_start) {
  await CON.ONESHOT_FUNCTIONS.map((s) => `oneshot/${s}.js`).forEachAsync(
    async (script) => (is_first_start && ns2.tprintf(`${util.ansi.y}starting ${script} `), await (async (runpid) => !!runpid ? (await ns2.nextPortWrite(runpid), is_first_start && (await util.slp(70 * Math.random()), ns2.tprintf(`${util.ansi.g}${script} passed init`))) : ns2.tprintf(`${util.ansi.r} !!${script} DID NOT RUN!!`))(ns2.run(script)))
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
  ns2.ps().filter((s2) => s2.filename);
  const availableAugs2 = readyFiley(ns2, "temp/availableAugs.txt");
  const rep_multi = await Run(ns2, "getBitNodeMultipliers", [], "RepToDonateToFaction");
  const nfginfo = readyFiley(ns2, "temp/nfgInfo.txt");
  const donatefaction = "The Black Hand";
  // Donate to TBH to grind NF Governor
  s.getFactionFavor(donatefaction) >= 150 * rep_multi && s.getFactionRep(donatefaction) < nfginfo.rep && s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 1e11)) && ns2.tprintf(
    `${util.ansi.m}Donated $${ns2.formatNumber(Math.max(nfginfo.cost, 1e11))} to ${donatefaction} (grinding NFG)`
  ), // Donate to factions for augs
  availableAugs2.forEach((aug) => aug.fact.name != CON.GANG_NAME && s.getFactionFavor(aug.fact.name) > 150 * rep_multi && aug.repdelta > 0 && s.donateToFaction(aug.fact.name, 1e11) && ns2.tprintf(`${util.ansi.m}Donated $100B to ${aug.fact.name} `));
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
  const aug_object = ns2.getPlayer().factions.filter((faction) => !forbidden_factions.includes(faction)).flatMap((faction) => s.getAugmentationsFromFaction(faction).filter((aug) => CON.AUGS_TO_BUY.includes(aug) && !owned_augs.includes(aug)).map((augment) => ({
    aug: augment,
    price: s.getAugmentationPrice(augment),
    repreq: s.getAugmentationRepReq(augment),
    repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
    fact: {
      name: faction,
      fav: s.getFactionFavor(faction),
      favdelta: s.getFactionFavorGain(faction)
    }
  })));
  ns2.write("temp/availableAugs.txt", JSON.stringify(aug_object ?? []), "w");
}
async function backdoor(n) {
  ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I"].map(n.getServer).forEach(
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
  const [s, b] = [ns2.sleeve, ns2.bladeburner];
  const steves2 = util.getIndexArray(8).sort((a, b2) => s.getSleeve(b2).storedCycles - s.getSleeve(a).storedCycles);
  const get_low_skill = (steve) => ["strength", "defense", "dexterity", "agility"].reduce(
    (a, skill) => steve.skills[skill] < 25 ? skill : a,
    false
  );
  const try_train = async (steve) => await (async (skill) => skill && (await Run(ns2, "sleeve.travel", [steve, "Sector-12"]), await Run(ns2, "sleeve.setToGymWorkout", [steve, "Powerhouse Gym", skill.toString()])))(get_low_skill(await Run(ns2, "sleeve.getSleeve", [steve])));
  const try_stabbin = async (steve) => !(await Run(ns2, "gang.inGang") ? await Run(ns2, "sleeve.setToCommitCrime", [steve, "Homicide"]) : false);
  const bb_infil = async (steve) => await !steves2.everyAsync(async (steve2) => (await Run(ns2, "sleeve.getTask", [steve2])).some((task) => task?.type === "INFILTRATE")) && await Run(ns2, "sleeve.setToBladeburnerAction", [steve, "Infiltrate synthoids"]);
  const bb_contracts = async (steve) => (await Run(ns2, "bladeburner.getContractNames")).someAsync(
    async (contract) => await steves2.everyAsync(async (steve2) => (await Run(ns2, "sleeve.getTask", [steve2]))?.actionName !== contract) && await Run(ns2, "bladeburner.getActionCountRemaining", ["Contract", contract]) && await Run(ns2, "sleeve.setToBladeburnerAction", [steve, "Take on contracts", contract])
  );
  const buy_augs = async (steve) => !(await Run(ns2, "sleeve.getSleeve", [steve])).shock ? (await Run(ns2, "sleeve.getSleevePurchasableAugs", [steve])).sort((a, b2) => a.cost - b2.cost).forEachAsync(async (aug) => await Run(ns2, "sleeve.purchaseSleeveAug", [steve, aug.name])) : false;
  await steves2.forEachAsync(async (steve) => await Run(ns2, "sleeve.setToIdle", [steve])), await steves2.forEachAsync(async (steve) => (!(await Run(ns2, "sleeve.getSleeve", [steve])).shock && await buy_augs(steve), (await Run(ns2, "sleeve.getSleeve", [steve])).shock > 90 ? await Run(ns2, "sleeve.setToShockRecovery", [steve]) : await try_train(steve) || await try_stabbin(steve) || await Run(ns2, "bladeburner.inBladeburner") && (await bb_infil(steve) || await bb_contracts(steve)) || ((await Run(ns2, "sleeve.getSleeve", [steve])).shock ? await Run(ns2, "sleeve.setToShockRecovery", [steve]) : await Run(ns2, "sleeve.setToIdle", [steve]))));
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
  const upSkill = async () => await Run(ns2, "bladeburner.upgradeSkill", [b.getSkillNames().reduce((a, c) => ((f) => f(a) < f(c) ? a : c)(b.getSkillUpgradeCost))]) && upSkill();
  const doOp = async (op) => !op ? d43m0nD357r0y(ns2) : await (([a, c]) => a + c > 1.8)(await Run(ns2, "bladeburner.getActionEstimatedSuccessChance", ["BlackOps", (await Run(ns2, "bladeburner.getNextBlackOp")).name])) && !await is_Busy(ns2) && (await Run(ns2, "singularity.stopAction"), await Run(ns2, "bladeburner.startAction", ["BlackOps", (await Run(ns2, "bladeburner.getNextBlackOp")).name]));
  await Run(ns2, "bladeburner.joinBladeburnerDivision"), !await Run(ns2, "bladeburner.inBladeburner") ? await goTrain() : (await upSkill(), await doOp(b.getNextBlackOp()?.name));
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
  const tick = async (l = null) => await (async (q) => (l = q(), await n.sleep(50), l == q() && await tick()))(() => Object.values(other_gang_info()).reduce((a, b) => a + b.power, 0));
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
async function golfedGang(n, g = n.gang, s = async (t2) => await n.sleep(t2 / (g.getBonusTime() > 5e3 ? 25 : 1)), t = async (l) => (l = q()[1], await n.sleep(9), l == q()[1] && await t(l)), q = () => Object.entries(g.getOtherGangInformation()).reduce((a2, [b, c]) => [g.getChanceToWinClash(b) > 0.5 && a2[0], a2[1] + c.power], [false, 0]), a = (j) => g.getMemberNames().map(
  (m) => (g.getEquipmentNames().map((i) => g.purchaseEquipment(m, i)), ["agi", "str", "def", "dex"].reduce((a2, b) => a2 + g.getAscensionResult(m)?.[b], 0) > 6 && g.ascendMember(m), g.setMemberTask(
    m,
    j ?? g.getTaskNames().reduce(
      (a2, b) => (g.setMemberTask(m, b), (i) => i < a2.g ? a2 : { n: b, g: i })(
        g.getMemberInformation(m)[g.getMemberNames().length > 9 ? "moneyGain" : "respectGain"]
      )
    ).n
  ))
)) {
  (g.inGang() || g.createGang("Slum Snakes")) && (g.recruitMember(Math.random()), g.setTerritoryWarfare(q()[0]), a(void 0), await s(15e3), a("Train Combat"), await s(4500), a("Territory Warfare"), await t(1), await golfedGang(n));
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
  await ascii.forEachAsync(async (l) => (ns2.tprintf(l), await util.slp(Math.random() * 10 * 7)));
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
var solvers = {
  "Find Largest Prime Factor": function(number, divisor = 2) {
    return 0;
  },
  "Subarray with Maximum Sum": function(array) {
    const size = array.length;
    const maxint = Math.pow(2, 53);
    let max_so_far = -maxint - 1;
    let max_ending_here = 0;
    for (let i = 0; i < size; i++) {
      max_ending_here = max_ending_here + array[i];
      if (max_so_far < max_ending_here) {
        max_so_far = max_ending_here;
      }
      if (max_ending_here < 0) {
        max_ending_here = 0;
      }
    }
    return max_so_far;
  },
  "Total Ways to Sum": function(number) {
    let waysToFormNumber = new Array(number + 1).fill(0);
    waysToFormNumber[0] = 1;
    for (let currentInteger = 1; currentInteger <= number; currentInteger++) {
      for (let selectedInteger = currentInteger; selectedInteger <= number; selectedInteger++) {
        waysToFormNumber[selectedInteger] += waysToFormNumber[selectedInteger - currentInteger];
      }
    }
    return waysToFormNumber[number] - 1;
  },
  "Total Ways to Sum II": function(array) {
    const target = array[0];
    const set_of_nums = array[1];
    let targ_array = new Array(target + 1).fill(0);
    targ_array[0] = 1;
    for (let i = 0; i < set_of_nums.length; i++) {
      for (let j = set_of_nums[i]; j <= target; j++) {
        targ_array[j] += targ_array[j - set_of_nums[i]];
      }
    }
    return targ_array[target];
  },
  "Spiralize Matrix": function(matrix) {
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startColumn = 0;
    let endColumn = matrix[0].length - 1;
    let newArray = [];
    while (startRow <= endRow && startColumn <= endColumn) {
      for (let i = startColumn; i <= endColumn; i++) {
        newArray.push(matrix[startColumn][i]);
        if (matrix.length * matrix[0].length == newArray.length) {
          return newArray;
        }
      }
      startRow++;
      for (let i = startRow; i <= endRow; i++) {
        newArray.push(matrix[i][endColumn]);
        if (matrix.length * matrix[0].length == newArray.length) {
          return newArray;
        }
      }
      endColumn--;
      for (let i = endColumn; i >= startColumn; i--) {
        newArray.push(matrix[endRow][i]);
        if (matrix.length * matrix[0].length == newArray.length) {
          return newArray;
        }
      }
      endRow--;
      for (let i = endRow; i >= startRow; i--) {
        newArray.push(matrix[i][startColumn]);
        if (matrix.length * matrix[0].length == newArray.length) {
          return newArray;
        }
      }
      startColumn++;
    }
    return newArray;
  },
  "Array Jumping Game": function(array) {
    let farthestPosition = 0;
    for (let i = 0; i < array.length; i++) {
      if (i > farthestPosition) {
        return 0;
      }
      farthestPosition = Math.max(farthestPosition, i + array[i]);
      if (farthestPosition >= array.length - 1) {
        return 1;
      }
    }
    return 0;
  },
  "Array Jumping Game II": function(array) {
    const n = array.length;
    if (n <= 1) {
      return 0;
    }
    let currentLevelEnd = 0;
    let farthestJump = 0;
    let jumps = 0;
    for (let i = 0; i < n - 1; i++) {
      farthestJump = Math.max(farthestJump, i + array[i]);
      if (i === currentLevelEnd) {
        jumps++;
        currentLevelEnd = farthestJump;
        if (currentLevelEnd >= n - 1) {
          return jumps;
        }
      }
    }
    return 0;
  },
  "Merge Overlapping Intervals": function(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let mergedIntervals = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
      let currentInterval = intervals[i];
      let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
      if (currentInterval[0] <= lastMergedInterval[1]) {
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
        mergedIntervals.push(currentInterval);
      }
    }
    return mergedIntervals;
  },
  "Generate IP Addresses": function(str) {
    return [1, 2, 3].map((i, _, a) => a.map((j) => a.map((k) => a.map((l) => [0, i, i + j, i + j + k, i + j + k + l])))).flat(3).map((q) => q[4] != str.length ? [] : q.reduce((a, b, i) => ((z) => z == "0" || +z[0] && z < 256 ? [...a, z] : a)(str.slice(b, q[i + 1])), [])).reduce((a, b) => b.length > 3 ? [...a, b.join(".")] : a, []);
  },
  "Algorithmic Stock Trader I": function(stockPrices) {
    if (!stockPrices || stockPrices.length < 2) {
      return 0;
    }
    let minPrice = stockPrices[0];
    let maxProfit = 0;
    for (let i = 1; i < stockPrices.length; i++) {
      let potentialProfit = stockPrices[i] - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, stockPrices[i]);
    }
    return maxProfit;
  },
  "Algorithmic Stock Trader II": function(stockPrices) {
    let maxProfit = 0;
    for (let i = 0; i < stockPrices.length - 1; i++) {
      if (stockPrices[i] < stockPrices[i + 1]) {
        maxProfit += stockPrices[i + 1] - stockPrices[i];
      }
    }
    return maxProfit;
  },
  "Algorithmic Stock Trader III": function(stockPrices) {
    let n = stockPrices.length;
    if (n < 2) {
      return 0;
    }
    let profitOneTransaction = new Array(n).fill(0);
    let profitTwoTransactions = new Array(n).fill(0);
    let minPrice = stockPrices[0];
    for (let i = 1; i < n; i++) {
      minPrice = Math.min(minPrice, stockPrices[i]);
      profitOneTransaction[i] = Math.max(profitOneTransaction[i - 1], stockPrices[i] - minPrice);
    }
    let maxPrice = stockPrices[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      maxPrice = Math.max(maxPrice, stockPrices[i]);
      profitTwoTransactions[i] = Math.max(profitTwoTransactions[i + 1], maxPrice - stockPrices[i]);
    }
    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
      maxProfit = Math.max(maxProfit, profitOneTransaction[i] + profitTwoTransactions[i]);
    }
    return [maxProfit, profitOneTransaction, profitTwoTransactions];
  },
  "Algorithmic Stock Trader IV": function(array) {
    let k = array[0];
    let prices = array[1];
    let n = prices.length;
    if (n === 0 || k === 0)
      return 0;
    if (k >= Math.floor(n / 2)) {
      let maxProfit = 0;
      for (let i = 1; i < n; i++) {
        if (prices[i] > prices[i - 1]) {
          maxProfit += prices[i] - prices[i - 1];
        }
      }
      return maxProfit;
    }
    let dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0));
    for (let i = 1; i <= k; i++) {
      let maxDiff = -prices[0];
      for (let j = 1; j < n; j++) {
        dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
        maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
      }
    }
    return dp[k][n - 1];
  },
  "Minimum Path Sum in a Triangle": function(triangle) {
    let n = triangle.length;
    for (let row = n - 2; row >= 0; row--) {
      for (let col = 0; col <= row; col++) {
        triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
      }
    }
    return triangle[0][0];
  },
  "Unique Paths in a Grid I": function(array) {
    let rows = array[0];
    let columns = array[1];
    let dp = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
    dp[0][0] = 1;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i > 0) {
          dp[i][j] += dp[i - 1][j];
        }
        if (j > 0) {
          dp[i][j] += dp[i][j - 1];
        }
      }
    }
    return dp[rows - 1][columns - 1];
  },
  "Unique Paths in a Grid II": function(grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let dp = new Array(rows).fill(0).map(() => new Array(columns).fill(0));
    dp[0][0] = grid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (grid[i][j] === 0) {
          if (i > 0) {
            dp[i][j] += dp[i - 1][j];
          }
          if (j > 0) {
            dp[i][j] += dp[i][j - 1];
          }
        }
      }
    }
    return dp[rows - 1][columns - 1];
  },
  "Shortest Path in a Grid": function(grid) {
    let numRows = grid.length;
    let numCols = grid[0].length;
    let visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
    let directions = ["U", "D", "L", "R"];
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let queue = [{ x: 0, y: 0, path: "" }];
    visited[0][0] = true;
    while (queue.length > 0) {
      let { x, y, path } = queue.shift();
      if (x === numRows - 1 && y === numCols - 1) {
        return path;
      }
      for (let i = 0; i < 4; i++) {
        let newX = x + dx[i];
        let newY = y + dy[i];
        if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols && grid[newX][newY] === 0 && !visited[newX][newY]) {
          visited[newX][newY] = true;
          queue.push({ x: newX, y: newY, path: path + directions[i] });
        }
      }
    }
    return "";
  },
  "Sanitize Parentheses in Expression": function(string) {
    function isValid(str) {
      let count = 0;
      for (let char of str) {
        if (char === "(") {
          count++;
        } else if (char === ")") {
          count--;
          if (count < 0)
            return false;
        }
      }
      return count === 0;
    }
    let result = [];
    let queue = [string];
    let found = false;
    while (queue.length > 0) {
      let levelSize = queue.length;
      let visited = /* @__PURE__ */ new Set();
      for (let i = 0; i < levelSize; i++) {
        let currentStr = queue.shift();
        if (isValid(currentStr)) {
          result.push(currentStr);
          found = true;
        }
        if (!found) {
          for (let j = 0; j < currentStr.length; j++) {
            if (currentStr[j] === "(" || currentStr[j] === ")") {
              let newStr = currentStr.slice(0, j) + currentStr.slice(j + 1);
              if (!visited.has(newStr)) {
                visited.add(newStr);
                queue.push(newStr);
              }
            }
          }
        }
      }
      if (found)
        break;
    }
    return result;
  },
  "Find All Valid Math Expressions": function(array) {
    function evaluateExpression(expr) {
      let stack = [];
      let num = 0;
      let operator = "+";
      for (let i = 0; i < expr.length; i++) {
        let char = expr[i];
        if (!isNaN(parseInt(char))) {
          num = num * 10 + parseInt(char);
        }
        if (isNaN(parseInt(char)) || i === expr.length - 1) {
          if (operator === "+") {
            stack.push(num);
          } else if (operator === "-") {
            stack.push(-num);
          } else if (operator === "*") {
            let prevNum = stack.pop();
            stack.push(prevNum * num);
          }
          num = 0;
          operator = char;
        }
      }
      return stack.reduce((acc, val) => acc + val, 0);
    }
    function generateExpressions(currExpr, index) {
      if (index === digits.length) {
        if (evaluateExpression(currExpr) === target) {
          result.push(currExpr);
        }
        return;
      }
      let digit = digits[index];
      generateExpressions(currExpr + "+" + digit, index + 1);
      generateExpressions(currExpr + "-" + digit, index + 1);
      generateExpressions(currExpr + "*" + digit, index + 1);
      if (currExpr.length > 0 && currExpr[currExpr.length - 1] !== "0") {
        generateExpressions(currExpr + digit, index + 1);
      }
    }
    let digits = array[0];
    let target = array[1];
    let result = [];
    generateExpressions(digits[0], 1);
    return result;
  },
  "HammingCodes: Integer to Encoded Binary": function(integer) {
    let bigint = BigInt(integer);
    let reverse = 0n;
    let ibc = 0n;
    for (; bigint !== 0n; ++ibc) {
      reverse <<= 1n;
      reverse |= bigint & 1n;
      bigint >>= 1n;
    }
    let parity = 0n;
    let op = 0n;
    let tbc = 3n;
    for (let i = 0n; i !== ibc; ++tbc) {
      if (tbc & tbc - 1n) {
        let bit = reverse >> i & 1n;
        ++i;
        op ^= bit;
        if (bit) {
          parity ^= tbc;
        }
      }
    }
    let enc = 0n;
    for (let i = 1n; i !== tbc; ++i) {
      enc <<= 1n;
      if (i & i - 1n) {
        enc |= reverse & 1n;
        reverse >>= 1n;
      } else {
        let pbit = parity & 1n;
        op ^= pbit;
        enc |= pbit;
        parity >>= 1n;
      }
    }
    enc |= op << tbc - 1n;
    enc |= 1n << tbc;
    return enc.toString(2).slice(1);
  },
  "HammingCodes: Encoded Binary to Integer": function(data) {
    let powersoftwo = new Array(Math.ceil(Math.log2(data))).fill(0).map((_, i) => 2 ** i);
    let badbits = [];
    for (let i of powersoftwo.filter((x) => x < data.length)) {
      let checksum = new Array(data.length).fill(0).map((_, i2) => i2).filter((x) => x > i && i & x).map((x) => parseInt(data.substring(x, x + 1))).reduce((a, b) => a ^ b);
      if (parseInt(data.substring(i, i + 1)) != checksum) {
        badbits.push(i);
      }
    }
    if (badbits.length == 0) {
      let checksum = data.substring(1).split("").map((x) => parseInt(x)).reduce((a, b) => a ^ b);
      if (checksum == parseInt(data.substring(0, 1))) {
        let number = data.split("").map((x) => parseInt(x));
        for (let i of powersoftwo.filter((x) => x < data.length).reverse()) {
          number.splice(i, 1);
        }
        number.splice(0, 1);
        return number.reduce((a, b) => a * 2 + b);
      }
    }
    let badindex = badbits.reduce((a, b) => a | b, 0);
    return solvers["HammingCodes: Encoded Binary to Integer"](data.substring(0, badindex).concat(data.substring(badindex, badindex + 1) == "0" ? "1" : "0").concat(data.substring(badindex + 1)));
  },
  "Proper 2-Coloring of a Graph": function(array) {
    let numVertices = array[0];
    let edges = array[1];
    let graph = new Array(numVertices).fill(null).map(() => []);
    for (let [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
    let colors = new Array(numVertices).fill(-1);
    function isValidColor(vertex, color) {
      for (let neighbor of graph[vertex]) {
        if (colors[neighbor] === color) {
          return false;
        }
      }
      return true;
    }
    function colorGraphUtil(vertex) {
      for (let color = 0; color <= 1; color++) {
        if (isValidColor(vertex, color)) {
          colors[vertex] = color;
          for (let neighbor of graph[vertex]) {
            if (colors[neighbor] === -1) {
              colorGraphUtil(neighbor);
            }
          }
          return true;
        }
      }
      return false;
    }
    for (let vertex = 0; vertex < numVertices; vertex++) {
      if (colors[vertex] === -1 && !colorGraphUtil(vertex)) {
        return [];
      }
    }
    return colors;
  },
  "Compression I: RLE Compression": function(inputString) {
    function getCountString(count2) {
      if (count2 <= 9) {
        return count2.toString();
      } else {
        return "9" + currentChar + getCountString(count2 - 9);
      }
    }
    if (!inputString) {
      return "";
    }
    let encodedString = "";
    let currentChar = inputString[0];
    let count = 1;
    for (let i = 1; i < inputString.length; i++) {
      if (inputString[i] === currentChar) {
        count++;
      } else {
        encodedString += getCountString(count) + currentChar;
        currentChar = inputString[i];
        count = 1;
      }
      if (i === inputString.length - 1) {
        encodedString += getCountString(count) + currentChar;
      }
    }
    return encodedString;
  },
  "Compression II: LZ Decompression": function(compressedString) {
    let plain = "";
    for (let i = 0; i < compressedString.length; ) {
      let literal_length = compressedString.charCodeAt(i) - 48;
      if (literal_length < 0 || literal_length > 9 || i + 1 + literal_length > compressedString.length) {
        return null;
      }
      plain += compressedString.substring(i + 1, i + 1 + literal_length);
      i += 1 + literal_length;
      if (i >= compressedString.length) {
        break;
      }
      let backref_length = compressedString.charCodeAt(i) - 48;
      if (backref_length < 0 || backref_length > 9) {
        return null;
      } else if (backref_length === 0) {
        ++i;
      } else {
        if (i + 1 >= compressedString.length) {
          return null;
        }
        let backref_offset = compressedString.charCodeAt(i + 1) - 48;
        if (backref_length > 0 && (backref_offset < 1 || backref_offset > 9) || backref_offset > plain.length) {
          return null;
        }
        for (let j = 0; j < backref_length; ++j) {
          plain += plain[plain.length - backref_offset];
        }
        i += 2;
      }
    }
    return plain;
  },
  "Compression III: LZ Compression": function(plain) {
    let cur_state = Array.from(Array(10), () => Array(10).fill(null));
    let new_state = Array.from(Array(10), () => Array(10));
    function set(state, i, j, str) {
      const current = state[i][j];
      if (current == null || str.length < current.length) {
        state[i][j] = str;
      } else if (str.length === current.length && Math.random() < 0.5) {
        state[i][j] = str;
      }
    }
    cur_state[0][1] = "";
    for (let i = 1; i < plain.length; ++i) {
      for (const row of new_state) {
        row.fill(null);
      }
      const c = plain[i];
      for (let length = 1; length <= 9; ++length) {
        const string = cur_state[0][length];
        if (string == null) {
          continue;
        }
        if (length < 9) {
          set(new_state, 0, length + 1, string);
        } else {
          set(new_state, 0, 1, string + "9" + plain.substring(i - 9, i) + "0");
        }
        for (let offset = 1; offset <= Math.min(9, i); ++offset) {
          if (plain[i - offset] === c) {
            set(new_state, offset, 1, string + String(length) + plain.substring(i - length, i));
          }
        }
      }
      for (let offset = 1; offset <= 9; ++offset) {
        for (let length = 1; length <= 9; ++length) {
          const string = cur_state[offset][length];
          if (string == null) {
            continue;
          }
          if (plain[i - offset] === c) {
            if (length < 9) {
              set(new_state, offset, length + 1, string);
            } else {
              set(new_state, offset, 1, string + "9" + String(offset) + "0");
            }
          }
          set(new_state, 0, 1, string + String(length) + String(offset));
          for (let new_offset = 1; new_offset <= Math.min(9, i); ++new_offset) {
            if (plain[i - new_offset] === c) {
              set(new_state, new_offset, 1, string + String(length) + String(offset) + "0");
            }
          }
        }
      }
      const tmp_state = new_state;
      new_state = cur_state;
      cur_state = tmp_state;
    }
    let result = null;
    for (let len = 1; len <= 9; ++len) {
      let string = cur_state[0][len];
      if (string == null) {
        continue;
      }
      string += String(len) + plain.substring(plain.length - len, plain.length);
      if (result == null || string.length < result.length) {
        result = string;
      } else if (string.length == result.length && Math.random() < 0.5) {
        result = string;
      }
    }
    for (let offset = 1; offset <= 9; ++offset) {
      for (let len = 1; len <= 9; ++len) {
        let string = cur_state[offset][len];
        if (string == null) {
          continue;
        }
        string += String(len) + "" + String(offset);
        if (result == null || string.length < result.length) {
          result = string;
        } else if (string.length == result.length && Math.random() < 0.5) {
          result = string;
        }
      }
    }
    return result ?? "";
  },
  "Encryption I: Caesar Cipher": function([text, i]) {
    return String.fromCharCode(...[...text].map((c) => c > " " ? ((o) => o + (o > 65 ? 0 : 26))(c.charCodeAt() - i) : 32));
  },
  "Encryption II: Vigen\xE8re Cipher": function([plaintext, keyword]) {
    plaintext = plaintext.replace(/\s/g, "").toUpperCase();
    keyword = keyword.repeat(Math.ceil(plaintext.length / keyword.length)).substr(0, plaintext.length);
    let vigenereSquare = Array.from({ length: 26 }, (_, i) => {
      return Array.from({ length: 26 }, (_2, j) => String.fromCharCode((i + j) % 26 + 65));
    });
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let row = plaintext.charCodeAt(i) - 65;
      let col = keyword.charCodeAt(i) - 65;
      ciphertext += vigenereSquare[row][col];
    }
    return ciphertext;
  }
};
function contracts(ns2) {
  sGet(ns2).flatMap((host) => ns2.ls(host, ".cct").map((cct) => [host, cct, ns2.codingcontract.getContractType(cct, host)])).forEach(([host, cct, type]) => ((result) => result ? ns2.tprintf(`${util.ansi.g}Completed ${type} ~ ${cct} on ${host} ~ ${result}`) : ns2.tprintf(`${util.ansi.r}Failed ${type} ~ ${cct} on ${host}`))(
    ns2.codingcontract.attempt(solvers[ns2.codingcontract.getContractType(cct, host)](ns2.codingcontract.getData(cct, host)), cct, host)
  ));
}
export {
  CON as CNST,
  Run,
  availableAugs,
  backdoor,
  bburner,
  bd,
  buyAugs,
  buyTOR,
  contracts,
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
  contracts as solveAllContracts,
  stan,
  steves,
  util,
  writeLaunchers
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2VydmVycy9ob21lL2xpYi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRmFjdGlvbldvcmtUeXBlLCBHYW5nT3RoZXJJbmZvT2JqZWN0LCBOUywgU2xlZXZlQmxhZGVidXJuZXJUYXNrIH0gZnJvbSBcIk5ldHNjcmlwdERlZmluaXRpb25zXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEFycmF5PFQ+IHtcbiAgICBmb3JFYWNoQXN5bmMoZm46ICh2OiBUKSA9PiBQcm9taXNlPHZvaWQ+KTogUHJvbWlzZTx2b2lkPjtcbiAgICBtYXBBc3luYzxFPihmbjogKHY6IFQpID0+IFByb21pc2U8RVtdPik6IFByb21pc2U8RVtdPjtcbiAgICBzb21lQXN5bmMoZm46ICh2OiBUKSA9PiBQcm9taXNlPGJvb2xlYW4+KTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBldmVyeUFzeW5jKGZuOiAodjogVCkgPT4gUHJvbWlzZTxib29sZWFuPik6IFByb21pc2U8Ym9vbGVhbj47XG4gIH1cbn1cblxuQXJyYXkucHJvdG90eXBlLmZvckVhY2hBc3luYyA9IGFzeW5jIGZ1bmN0aW9uIDxUPihmbjogKHY6IFQpID0+IFByb21pc2U8dm9pZD4pOiBQcm9taXNlPHZvaWQ+IHsgYXdhaXQgdGhpcy5yZWR1Y2UoYXN5bmMgKGxhc3Q6IFByb21pc2U8dm9pZD4sIGN1cnIpID0+IChhd2FpdCBsYXN0LCBmbihjdXJyKSksIHZvaWQgbnVsbCkgfVxuXG5BcnJheS5wcm90b3R5cGUubWFwQXN5bmMgPSBhc3luYyBmdW5jdGlvbiA8RT4oZm46ICh2OiBFKSA9PiBQcm9taXNlPEU+KTogUHJvbWlzZTxFW10+IHtcbiAgcmV0dXJuIGF3YWl0IHRoaXMucmVkdWNlKGFzeW5jIChyZXQsIGN1ciwgaSkgPT4gYXdhaXQgKChhc3luYyBuZXdBcnIgPT4gKG5ld0FycltpXSA9IGF3YWl0IGZuKGN1ciksIG5ld0FycikpKGF3YWl0IHJldCkpLCAoYXN5bmMgKCkgPT4gQXJyYXkuZnJvbTxFPih7IGxlbmd0aDogdGhpcy5sZW5ndGggfSkpKCkpXG59XG5cbkFycmF5LnByb3RvdHlwZS5zb21lQXN5bmMgPSBhc3luYyBmdW5jdGlvbiA8VD4oZnVuYzogKHY6IFQpID0+IFByb21pc2U8Ym9vbGVhbj4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIGF3YWl0IHRoaXMucmVkdWNlKGFzeW5jIChyZXQsIGN1cikgPT4gKGF3YWl0IHJldCkgfHwgYXdhaXQgZnVuYyhjdXIpLCAoYXN5bmMgKCkgPT4gZmFsc2UpKCkpXG59XG5cbkFycmF5LnByb3RvdHlwZS5ldmVyeUFzeW5jID0gYXN5bmMgZnVuY3Rpb24gPFQ+KGZ1bmM6ICh2OiBUKSA9PiBQcm9taXNlPGJvb2xlYW4+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBhd2FpdCB0aGlzLnJlZHVjZShhc3luYyAocmV0LCBjdXIpID0+IChhd2FpdCByZXQpICYmIGF3YWl0IGZ1bmMoY3VyKSwgKGFzeW5jICgpID0+IGZhbHNlKSgpKVxufVxuXG5leHBvcnQge1xuICBjb250cmFjdHMgYXMgc29sdmVBbGxDb250cmFjdHMsXG4gIENPTiBhcyBDTlNULFxuICBSdW4sXG4gIGF2YWlsYWJsZUF1Z3MsXG4gIGJhY2tkb29yLFxuICBiYnVybmVyLFxuICBiZCxcbiAgYnV5QXVncyxcbiAgYnV5VE9SLFxuICBjb250cmFjdHMsXG4gIGNvcmVzVXAsXG4gIGQ0M20wbkQzNTdyMHksXG4gIGRhcmt3ZWJTaG9wcGluZyxcbiAgZG9uYXRlLFxuICBkb3duRG9nLFxuICBmYWN0V29yayxcbiAgZmFjdGlvbkpvaW4sXG4gIGdvbGZlZEdhbmcsXG4gIGdyYWZ0LFxuICBndm5yLFxuICBoYWNrbmV0U2hpbmRpZ3MsXG4gIGluc3RhbGxBdWdzLFxuICBpc19CdXN5LFxuICBtYWluLFxuICBtdXJkZXJhdGUsXG4gIG5lb2ZldGNoLFxuICBvd25lZEF1Z3MsXG4gIHBTZXJ2LFxuICBwZXJzdWFkZSxcbiAgcHJzbSxcbiAgcmFtVXAsXG4gIHJ1bkdhbmcsXG4gIHNHZXQsXG4gIHN0YW4sXG4gIHN0ZXZlcyxcbiAgdXRpbCxcbiAgd3JpdGVMYXVuY2hlcnMsXG59O1xudHlwZSBDb25zdGFudHMgPSB7XG4gIE5GRzogc3RyaW5nO1xuICBUUlA6IHN0cmluZztcbiAgR0FOR19OQU1FOiBzdHJpbmc7XG4gIEFVR1NfVE9fQlVZOiByZWFkb25seSBzdHJpbmdbXTtcbiAgQUxMX0ZBQ1RJT05TOiByZWFkb25seSBzdHJpbmdbXTtcbiAgTUVNQkVSX05BTUVTOiByZWFkb25seSBzdHJpbmdbXTtcbiAgTE9PUF9GVU5DVElPTlM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBPTkVTSE9UX0ZVTkNUSU9OUzogcmVhZG9ubHkgc3RyaW5nW107XG4gIFVUSUxfRlVOQ1RJT05TOiByZWFkb25seSBzdHJpbmdbXTtcbiAgRE9DOiBEb2N1bWVudDtcbiAgV0lOOiBXaW5kb3c7XG5cbiAgRE9HR09fQVNDSUk6IHJlYWRvbmx5IHN0cmluZ1tdO1xufVxuY29uc3QgQ09OOiBDb25zdGFudHMgPSB7XG4gIE5GRzogXCJOZXVyb0ZsdXggR292ZXJub3JcIixcbiAgVFJQOiBcIlRoZSBSZWQgUGlsbFwiLFxuICBHQU5HX05BTUU6IFwiU2x1bSBTbmFrZXNcIixcbiAgQVVHU19UT19CVVk6IFtcbiAgICBcIlNvY2lhbCBOZWdvdGlhdGlvbiBBc3Npc3RhbnQgKFMuTi5BKVwiLFxuICAgIFwiTnVvcHRpbWFsIE5vb3Ryb3BpYyBJbmplY3RvciBJbXBsYW50XCIsXG4gICAgXCJBRFItVjEgUGhlcm9tb25lIEdlbmVcIixcbiAgICBcIlNwZWVjaCBFbmhhbmNlbWVudFwiLFxuICAgIFwiV2lyZWQgUmVmbGV4ZXNcIixcbiAgICBcIkNyYW5pYWwgU2lnbmFsIFByb2Nlc3NvcnMgLSBHZW4gSVwiLFxuICAgIFwiQml0V2lyZVwiLFxuICAgIFwiU3luYXB0aWMgRW5oYW5jZW1lbnQgSW1wbGFudFwiLFxuICAgIFwiTmV1cm90cmFpbmVyIElcIixcbiAgICBcIkNyYW5pYWwgU2lnbmFsIFByb2Nlc3NvcnMgLSBHZW4gSUlcIixcbiAgICBcIkNSVFg0Mi1BQSBHZW5lIE1vZGlmaWNhdGlvblwiLFxuICAgIFwiRW1iZWRkZWQgTmV0YnVybmVyIE1vZHVsZVwiLFxuICAgIFwiTmV1cmFsLVJldGVudGlvbiBFbmhhbmNlbWVudFwiLFxuICAgIFwiQXJ0aWZpY2lhbCBTeW5hcHRpYyBQb3RlbnRpYXRpb25cIixcbiAgICBcIk5ldXJvdHJhaW5lciBJSVwiLFxuICAgIFwiVGhlIEJsYWNrIEhhbmRcIixcbiAgICBcIkVtYmVkZGVkIE5ldGJ1cm5lciBNb2R1bGUgQ29yZSBJbXBsYW50XCIsXG4gICAgXCJDcmFuaWFsIFNpZ25hbCBQcm9jZXNzb3JzIC0gR2VuIElWXCIsXG4gICAgXCJOZXVyYWxzdGltdWxhdG9yXCIsXG4gICAgXCJFbmhhbmNlZCBNeWVsaW4gU2hlYXRoaW5nXCIsXG4gICAgXCJOZXVyYWwgQWNjZWxlcmF0b3JcIixcbiAgICBcIkNyYW5pYWwgU2lnbmFsIFByb2Nlc3NvcnMgLSBHZW4gSUlJXCIsXG4gICAgXCJEYXRhSmFja1wiLFxuICAgIFwiRW1iZWRkZWQgTmV0YnVybmVyIE1vZHVsZSBDb3JlIFYyIFVwZ3JhZGVcIixcbiAgICBcIkJpdFJ1bm5lcnMgTmV1cm9saW5rXCIsXG4gICAgXCJDcmFuaWFsIFNpZ25hbCBQcm9jZXNzb3JzIC0gR2VuIFZcIixcbiAgICBcIkFydGlmaWNpYWwgQmlvLW5ldXJhbCBOZXR3b3JrIEltcGxhbnRcIixcbiAgICBcIkNhc2hSb290IFN0YXJ0ZXIgS2l0XCIsXG4gICAgXCJBdWdtZW50ZWQgVGFyZ2V0aW5nIElcIixcbiAgICBcIkF1Z21lbnRlZCBUYXJnZXRpbmcgSUlcIixcbiAgICBcIlNwZWVjaCBQcm9jZXNzb3IgSW1wbGFudFwiLFxuICAgIFwiTmFub2ZpYmVyIFdlYXZlXCIsXG4gICAgXCJJbmZvTG9hZFwiLFxuICAgIFwiQURSLVYyIFBoZXJvbW9uZSBHZW5lXCIsXG4gICAgXCJFQ29ycCBIVk1pbmQgSW1wbGFudFwiLFxuICAgIFwiUUxpbmtcIixcbiAgICBcIm5pY2tvZm9sYXMgQ29uZ3J1aXR5IEltcGxhbnRcIixcbiAgICBcIlRoZSBSZWQgUGlsbFwiLFxuICBdLFxuICBBTExfRkFDVElPTlM6IFtcbiAgICBcIklsbHVtaW5hdGlcIixcbiAgICBcIkRhZWRhbHVzXCIsXG4gICAgXCJUaGUgQ292ZW5hbnRcIixcbiAgICBcIkVDb3JwXCIsXG4gICAgXCJNZWdhQ29ycFwiLFxuICAgIFwiQmFjaG1hbiAmIEFzc29jaWF0ZXNcIixcbiAgICBcIkJsYWRlIEluZHVzdHJpZXNcIixcbiAgICBcIk5XT1wiLFxuICAgIFwiQ2xhcmtlIEluY29ycG9yYXRlZFwiLFxuICAgIFwiT21uaVRlayBJbmNvcnBvcmF0ZWRcIixcbiAgICBcIkZvdXIgU2lnbWFcIixcbiAgICBcIkt1YWlHb25nIEludGVybmF0aW9uYWxcIixcbiAgICBcIkZ1bGNydW0gU2VjcmV0IFRlY2hub2xvZ2llc1wiLFxuICAgIFwiQml0UnVubmVyc1wiLFxuICAgIFwiVGhlIEJsYWNrIEhhbmRcIixcbiAgICBcIk5pdGVTZWNcIixcbiAgICBcIkFldnVtXCIsXG4gICAgXCJDaG9uZ3FpbmdcIixcbiAgICBcIklzaGltYVwiLFxuICAgIFwiTmV3IFRva3lvXCIsXG4gICAgXCJTZWN0b3ItMTJcIixcbiAgICBcIlZvbGhhdmVuXCIsXG4gICAgXCJTcGVha2VycyBmb3IgdGhlIERlYWRcIixcbiAgICBcIlRoZSBEYXJrIEFybXlcIixcbiAgICBcIlRoZSBTeW5kaWNhdGVcIixcbiAgICBcIlNpbGhvdWV0dGVcIixcbiAgICBcIlRldHJhZHNcIixcbiAgICBcIlNsdW0gU25ha2VzXCIsXG4gICAgXCJOZXRidXJuZXJzXCIsXG4gICAgXCJUaWFuIERpIEh1aVwiLFxuICAgIFwiQ3liZXJTZWNcIixcbiAgICBcIkJsYWRlYnVybmVyc1wiLFxuICAgIFwiQ2h1cmNoIG9mIHRoZSBNYWNoaW5lIEdvZFwiLFxuICAgIFwiU2hhZG93cyBvZiBBbmFyY2h5XCIsXG4gIF0sXG4gIE1FTUJFUl9OQU1FUzogW1xuICAgIFwiVG9ueSBIYXJyaXNvblwiLFxuICAgIFwiS2F0aHkgUmluZGhvb3BzXCIsXG4gICAgXCJKaW1teSBMYXplcnNcIixcbiAgICBcIk5hYm9vIHRoZSBFbmlnbWFcIixcbiAgICBcIkhlbGVuIEJhY2tcIixcbiAgICBcIlR1YnVsYXIgVG9ueVwiLFxuICAgIFwiU3RhYmJ5IENsYXJrc29uXCIsXG4gICAgXCJDYXJsXCIsXG4gICAgXCJQb29wcyBNY2doZWVcIixcbiAgICBcIkhhaXJ5IERhblwiLFxuICAgIFwiV2lsbCBCYXJyb3dcIixcbiAgICBcIkJhcnJ5IFRocmVlLU5pcHNcIixcbiAgICBcIk1hcmtrdXNcIixcbiAgICBcIlBhdHJpY2lhIE8nVmlvbGVuY2VcIixcbiAgICBcIlBhdCBPJ0Nha2VcIixcbiAgICBcIlJheSBGcmlkZ2VyYXRvclwiLFxuICAgIFwiU2FtbXkgdGhlIFNxdWlkXCIsXG4gICAgXCJTbGFudHkgQm9iIChvbmUgbGVnKVwiLFxuICAgIFwiQmFzdGFyZCBNYW5cIixcbiAgICBcIk1hbi1TcGlkZXJcIixcbiAgICBcIk5vbi1CaW8gQnJ1Y2VcIixcbiAgICBcIlJvY2toZWFkIFJ1bXBsZVwiLFxuICAgIFwiSm9leSBUYWdsaWF0ZWxsZVwiLFxuICAgIFwiSm9obm55IFNlZ21lbnRcIixcbiAgXSxcbiAgTE9PUF9GVU5DVElPTlM6IFtcInN0YW5cIiwgXCJydW5HYW5nXCIsIFwicHJzbVwiLCAvKlwiZG93bkRvZ1wiKi9dLFxuICBPTkVTSE9UX0ZVTkNUSU9OUzogW1xuICAgIFwiZGFya3dlYlNob3BwaW5nXCIsXG4gICAgXCJvd25lZEF1Z3NcIixcbiAgICBcImF2YWlsYWJsZUF1Z3NcIixcbiAgICBcImhhY2tuZXRTaGluZGlnc1wiLFxuICAgIFwicFNlcnZcIixcbiAgICBcImZhY3Rpb25Kb2luXCIsXG4gICAgXCJmYWN0V29ya1wiLFxuICAgIFwibXVyZGVyYXRlXCIsXG4gICAgXCJkNDNtMG5EMzU3cjB5XCIsXG4gICAgXCJyYW1VcFwiLFxuICAgIFwiY29yZXNVcFwiLFxuICAgIFwiYnV5VE9SXCIsXG4gICAgXCJiYWNrZG9vclwiLFxuICAgIFwiZ3JhZnRcIixcbiAgICBcImRvbmF0ZVwiLFxuICAgIFwiYnV5QXVnc1wiLFxuICAgIFwiaW5zdGFsbEF1Z3NcIixcbiAgICBcInBlcnN1YWRlXCIsXG4gICAgXCJzdGV2ZXNcIixcbiAgICBcImJidXJuZXJcIixcbiAgICBcImNvbnRyYWN0c1wiLFxuICBdLFxuICBVVElMX0ZVTkNUSU9OUzogW1wiYmRcIiwgXCJndm5yXCIsIFwibmVvZmV0Y2hcIl0sXG4gIERPR0dPX0FTQ0lJXG4gICAgOiBbXG4gICAgICBgICAgIF9fX2AsIGAgX18vXywgIFxcYC4gIC4tXCJcIlwiLS5gLCBgIFxcXFxfLCAgfCBcXFxcLScgIC8gICApXFxgLScpYCwgYCAgXCJcIikgXFxgXCJcXGAgICAgXFwgICgoXFxgXCJcXGBgLCBgIF9fX1kgICwgICAgLic3IC98YCwgYChfLF9fXy8uLi4tXFxgIChfL18vICAgICAgICAgYCxcbiAgICAgIGAgICAgICAgICAgICAgICAgIF9fX2AsIGAgICAgICAuLVwiXCJcIi0uICAuXFxgICxfXFxcXF9fYCwgYCAoJy1cXGAoICAgXFxcXCAgJy0vIHwgICAsXy8gICBgLCBgICAgXFxgXCJcXGApKSAgICAgICBcXGBcIlxcYCAoXCJcImAsIGAgICAgICB8XFxcXCA0Jy4gICAgLCAgWV9fX2AsIGAgICAgICBcXFxcX1xcXFxfKSBcXGAtLi4uXFxcXF9fXyxfKWAsXG4gICAgXSxcbiAgV0lOOiBldmFsKFwid2luZG93XCIpLFxuICBET0M6IGV2YWwoXCJkb2N1bWVudFwiKSxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IEhPT0tTID0gW1xuICBDT04uRE9DLmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXctZXh0cmEtaG9vay0wXCIpLFxuICBDT04uRE9DLmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXctZXh0cmEtaG9vay0xXCIpLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gbWFpbihuOiBOUykge1xuICAoXG4gICAgbi5wcygpLmZvckVhY2goKHMpID0+IG4uY2xvc2VUYWlsKHMucGlkKSksXG4gICAgc0dldChuKS5mb3JFYWNoKChzKSA9PiBuLmtpbGxhbGwocywgdHJ1ZSkpLFxuICAgICFuLmFyZ3MubGVuZ3RoICYmICh3cml0ZUxhdW5jaGVycyhuKSwgbi5ydW4oXCJ1dGlsL2d2bnIuanNcIikpXG4gIClcbn1cblxuZnVuY3Rpb24gd3JpdGVMYXVuY2hlcnMobnM6IE5TKTogdm9pZCB7XG4gIChcbiAgICBbXCJvbmVzaG90XCIsIFwibG9vcFwiLCBcInV0aWxcIl0uZm9yRWFjaCgoZGlyKSA9PiBucy5scyhcImhvbWVcIiwgZGlyKS5mb3JFYWNoKChzKSA9PiBucy5ybShzKSkpLFxuICAgIFtcbiAgICAgIFtDT04uVVRJTF9GVU5DVElPTlMsIFwidXRpbFwiXSxcbiAgICAgIFtDT04uTE9PUF9GVU5DVElPTlMsIFwibG9vcFwiXSxcbiAgICAgIFtDT04uT05FU0hPVF9GVU5DVElPTlMsIFwib25lc2hvdFwiXVxuICAgIF1cbiAgICAgIC5mb3JFYWNoKChbZm5zLCBkaXJdOiBbc3RyaW5nW10sIHN0cmluZ10pID0+IGZucy5mb3JFYWNoKGZuID0+XG4gICAgICAgIG5zLndyaXRlKFxuICAgICAgICAgIGAke2Rpcn0vJHtmbn0uanNgLFxuICAgICAgICAgIGBpbXBvcnQgeyAke2ZufSB9IGZyb20gXCJsaWIuanNcIjsgZXhwb3J0IGNvbnN0IG1haW4gPSBhc3luYyBucyA9PiAobnMuYXRFeGl0KCgpID0+IChucy5jbGVhclBvcnQobnMucGlkKSxucy53cml0ZVBvcnQobnMucGlkLCBcIlwiKSkpLCBhd2FpdCAke2ZufShucyxucy5hcmdzWzBdKSk7YCxcbiAgICAgICAgICBcIndcIixcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGd2bnIobnM6IE5TLCBpc19maXJzdF9zdGFydCA9IHRydWUsIHRpbWVyID0gMCk6IFByb21pc2U8dm9pZD4ge1xuICAoXG4gICAgaXNfZmlyc3Rfc3RhcnRcbiAgICAmJiAoXG4gICAgICBucy5hdEV4aXQoKCkgPT4gKEhPT0tTWzBdLmlubmVyVGV4dCA9IFwiXCIsIEhPT0tTWzFdLmlubmVyVGV4dCA9IFwiXCIsIG5zLmNsb3NlVGFpbCgpKSksXG4gICAgICBucy50YWlsKCksXG4gICAgICBucy5kaXNhYmxlTG9nKFwiQUxMXCIpLFxuICAgICAgbnMudHByaW50ZihgJHt1dGlsLmFuc2kubX0qKiAuL2d2bnIuanMgKipgKVxuICAgICksXG4gICAgYXdhaXQgW1xuICAgICAgdGltZXIgJSA0MCA/IGFzeW5jIF8gPT4gdm9pZCBfIDogc2NyaXB0TG9vcC5iaW5kKG51bGwsIG5zLCBpc19maXJzdF9zdGFydCksXG4gICAgICBwcmV0dHlMb2dzLmJpbmQobnVsbCwgbnMpLFxuICAgICAgcHJldHR5T3ZlcnZpZXcuYmluZChudWxsLCBucywgdGltZXIpLFxuICAgICAgdXRpbC5zbHAuYmluZChudWxsLCAxZTMpLFxuICAgICAgZ3Zuci5iaW5kKG51bGwsIG5zLCBmYWxzZSwgdGltZXIgKyAxKSxcbiAgICBdLmZvckVhY2hBc3luYyhhc3luYyBmbiA9PiBhd2FpdCBmbigpKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIFJ1bihcbiAgbnM6IE5TLFxuICBwYXRoOiBzdHJpbmcsXG4gIHBhcmFtczogKHN0cmluZyB8IG51bWJlcilbXSA9IFtdLFxuICBwcm9wczogc3RyaW5nIHwgbnVtYmVyID0gXCJcIixcbik6IFByb21pc2U8YW55PiB8IG51bGwge1xuICBucy53cml0ZShcbiAgICBgcnVuLmpzYCxcbiAgICAvKlxuICAgIFwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4obnMpIHtcIixcbiAgICBcIiAgY29uc3QgW3BhdGgsIHByb3BzLCAuLi5wYXJhbXNdID0gbnMuYXJncztcIixcbiAgICAnICBjb25zdCBmdW5jX3JldHVybiA9IHBhdGguc3BsaXQoXCIuXCIpLnJlZHVjZSgoYSwgYikgPT4gYVtiXSwgbnMpKC4uLnBhcmFtcyknLFxuICAgICcgIGNvbnN0IHJldHVybl92YWx1ZSA9ICFwcm9wcyA/IGZ1bmNfcmV0dXJuIDogcHJvcHMuc3BsaXQoXCIuXCIpLnJlZHVjZSgoYSxiKSA9PiBhPy5bYl0sIGZ1bmNfcmV0dXJuKScsXG4gICAgXCIgIG5zLmF0RXhpdCgoKSA9PiBucy53cml0ZVBvcnQobnMucGlkLCByZXR1cm5fdmFsdWUpKTtcIixcbiAgICBcIn1cIixcbiAgICAqL1xuICAgICdleHBvcnQgbGV0IG1haW49bj0+KHI9Pm4uYXRFeGl0KCgpPT5uLndyaXRlUG9ydChuLnBpZCxyKSkpKCgoeixbYyxkLC4uLmVdKT0+KGY9PmQ/eihmLGQpOmYpKHoobixjKSguLi5lKSkpKChxLHMpPT5zLnNwbGl0KFwiLlwiKS5yZWR1Y2UoKGEsYik9PmE/LltiXSxxKSxuLmFyZ3MpKScsXG4gICAgXCJ3XCIsXG4gICk7XG4gIGNvbnN0IHJ1bl9waWQgPSBucy5ydW4oYHJ1bi5qc2AsIHsgcmFtT3ZlcnJpZGU6IDEuNiArIG5zLmdldEZ1bmN0aW9uUmFtQ29zdChwYXRoKSB9LCBwYXRoLCBwcm9wcywgLi4ucGFyYW1zKTtcbiAgcmV0dXJuICFydW5fcGlkXG4gICAgPyAobnMudHByaW50ZihgJHt1dGlsLmFuc2kucn0hISAke3BhdGh9IERJRCBOT1QgUlVOICEhYCksIG51bGwpXG4gICAgOiAoYXdhaXQgbnMubmV4dFBvcnRXcml0ZShydW5fcGlkKSwgbnMucmVhZFBvcnQocnVuX3BpZCkpO1xufVxuXG5jb25zdCB1dGlsID0ge1xuICBsbWFvY2F0OiBhc3luYyBmdW5jdGlvbiAoZWxlbWVudF9pZDogc3RyaW5nLCBleHRyYV9zdHlsZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAxZTQpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCAxMDApKTtcbiAgICBjb25zdCBQSSA9IE1hdGguUEk7XG4gICAgY29uc3QgZWxlbWVudCA9IENPTi5ET0MuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudF9pZCk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICAgIGNvbnN0IGNvbF9vZmZzZXQgPSA1MDtcbiAgICBjb25zdCByYW5kX3RoZXRhID0gKCkgPT4gTWF0aC5yYW5kb20oKSAqIFBJO1xuICAgIGNvbnN0IGNhbGNfc2luID0gKGksIGFuZ2xlLCB0aGV0YSkgPT4gfn4oTWF0aC5hYnMoTWF0aC5jb3MoKHRoZXRhICsgYW5nbGUpICogaSkpICogKDI1NSAtIGNvbF9vZmZzZXQpKSArIGNvbF9vZmZzZXQ7XG4gICAgY29uc3QgZ2VuX3JnYiA9IChpLCBsKSA9PlxuICAgICAgYGNvbG9yOnJnYigke2NhbGNfc2luKGksIDAsIGwudGhldGFzLnIpfSwke2NhbGNfc2luKGksICgyICogUEkpIC8gMywgbC50aGV0YXMuZyl9LCR7Y2FsY19zaW4oaSwgKDQgKiBQSSkgLyAzLCBsLnRoZXRhcy5iKX1gO1xuICAgIGNvbnN0IHByaW50X21hcCA9IFsuLi50ZXh0XS5tYXAoKGwpID0+ICh7XG4gICAgICBsZXR0ZXI6IGwsXG4gICAgICB0aGV0YXM6IHtcbiAgICAgICAgcjogcmFuZF90aGV0YSgpLFxuICAgICAgICBnOiByYW5kX3RoZXRhKCksXG4gICAgICAgIGI6IHJhbmRfdGhldGEoKSxcbiAgICAgIH0sXG4gICAgfSkpO1xuICAgIGF3YWl0IGxvb3AocHJpbnRfbWFwLCB0aW1lb3V0KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvb3AocHJpbnRfbWFwLCB0aW1lb3V0OiBudW1iZXIsIGkgPSAxKSB7XG4gICAgICB0cnkge1xuICAgICAgICBDT04uRE9DLmdldEVsZW1lbnRCeUlkKGVsZW1lbnRfaWQpLmlubmVySFRNTCA9IHByaW50X21hcFxuICAgICAgICAgIC5tYXAoKGwpID0+IGA8c3BhbiBzdHlsZT1cIiR7ZXh0cmFfc3R5bGV9JHtnZW5fcmdiKGksIGwpfVwiPiR7bC5sZXR0ZXJ9PC9zcGFuPmApXG4gICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgICB9IGNhdGNoIHsgfVxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgNTApKTtcbiAgICAgIGlmICh0aW1lb3V0ID4gMCkge1xuICAgICAgICBhd2FpdCBsb29wKHByaW50X21hcCwgdGltZW91dCAtIDUwLCBpICsgMC4wNSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZ2JDb2w6IChyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBmZzogYm9vbGVhbiA9IHRydWUpID0+IGBcXHgxQlske2ZnID8gXCIzXCIgOiBcIjRcIn04OzI7JHtyfTske2d9OyR7Yn1tYCxcbiAgYW5zaToge1xuICAgIC8vIHJlZFxuICAgIHI6IFwiXFx4MUJbMzFtXCIsXG4gICAgLy8gZ3JlZW5cbiAgICBnOiBcIlxceDFCWzMybVwiLFxuICAgIC8vIGJsdWVcbiAgICBiOiBcIlxceDFCWzM0bVwiLFxuICAgIC8vIGN5YW5cbiAgICBjOiBcIlxceDFCWzM2bVwiLFxuICAgIC8vIG1hZ2VudGFcbiAgICBtOiBcIlxceDFCWzM1bVwiLFxuICAgIC8vIHllbGxvd1xuICAgIHk6IFwiXFx4MUJbMzNtXCIsXG4gICAgLy8ga2V5KGJsYWNrKVxuICAgIGs6IFwiXFx4MUJbMzBtXCIsXG4gICAgLy8gd2hpdGVcbiAgICB3OiBcIlxceDFCWzM3bVwiLFxuICAgIC8vIGRlZmF1bHRcbiAgICBkOiBcIlxceDFCWzBtXCIsXG4gICAgLy8gYm9sZFxuICAgIGJsOiBcIlxceDFCWzJtXCIsXG4gIH0sXG4gIGdldEluZGV4QXJyYXk6IChuOiBudW1iZXIpOiBudW1iZXJbXSA9PiBbLi4uQXJyYXkobikua2V5cygpXSxcbiAgdGlja1N0cmluZzogKHQ6IG51bWJlciwgbCA9IDQwKTogc3RyaW5nID0+ICh0ICUgbCA/IFwiI1wiLnJlcGVhdCgodCAvIDQpICUgKGwgLyA0KSkgKyBgfC8tXFxcXGBbdCAlIDRdIDogXCIjLS1leGVjLS0jXCIpLFxuICBkaWdpQ2xvY2s6IChyID0gRGF0ZS5ub3coKSwgYyA9ICh0OiBudW1iZXIsIGQgPSA2MCwgdiA9IChyIC8gdCkgJSBkIHwgMCkgPT4gKHYgPD0gOSA/IFwiMFwiICsgdiA6IHYpKTogc3RyaW5nID0+IChyIDwgODY0ZTUgPyBcIlwiIDogYyg4NjRlNSwgMSAvIDApICsgXCItXCIpICsgYygzNmU1LCAyNCkgKyBcIjpcIiArIGMoNmU0KSArIFwiOlwiICsgYygxZTMpLFxuICByYW1Gb3JtYXQ6IChyYW06IG51bWJlcik6IHN0cmluZyA9PiByYW0gPCAxZTMgPyByYW0udG9GaXhlZCgyKSArIFwiR0JcIiA6IHJhbSA8IDFlNiA/IChyYW0gLyAxZTMpLnRvRml4ZWQoMikgKyBcIlRCXCIgOiAocmFtIC8gMWU2KS50b0ZpeGVkKDIpICsgXCJQQlwiLFxuICBzbHA6IGFzeW5jICh0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHQpKSxcbn07XG5cbmZ1bmN0aW9uIGdldEZyZWVSYW0obnM6IE5TLCBob3N0OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gbnMuZ2V0U2VydmVyTWF4UmFtKGhvc3QpIC0gbnMuZ2V0U2VydmVyVXNlZFJhbShob3N0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaXNfQnVzeShuczogTlMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIChcbiAgICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldEN1cnJlbnRXb3JrXCIsIFtcIlwiXSwgXCJ0eXBlXCIpKSA9PSBcIkdSQUZUSU5HXCIgfHxcbiAgICAoKGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5pbkJsYWRlYnVybmVyXCIpKSAmJiAhIShhd2FpdCBSdW4obnMsIFwiYmxhZGVidXJuZXIuZ2V0Q3VycmVudEFjdGlvblwiLCBbXCJcIl0sIFwibmFtZVwiKSkpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNHZXQobnM6IE5TLCBtID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiaG9tZVwiXSkpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBtLmZvckVhY2goKGgpID0+IG5zLnNjYW4oaCkubWFwKChzKSA9PiBtLmFkZChzKSkpLCBbLi4ubV07XG59XG5cbmZ1bmN0aW9uIHJlYWR5RmlsZXkobnM6IE5TLCBmaWxlOiBzdHJpbmcpLyogVE9ETyB0eXBlIGFsbCB0aGlzIHN0dWZmICovIHtcbiAgY29uc3QgZGF0YSA9IG5zLnJlYWQoZmlsZSk7XG4gIHRyeSB7IHJldHVybiBKU09OLnBhcnNlKGRhdGEpOyB9XG4gIGNhdGNoIHsgcmV0dXJuIGRhdGE7IH1cbn1cblxuZnVuY3Rpb24gcGVla3lQb3J0eShuczogTlMsIHNjcmlwdDogc3RyaW5nKSB7XG4gIGNvbnN0IGRhdGEgPSBucy5wZWVrKG5zLmdldFJ1bm5pbmdTY3JpcHQoc2NyaXB0KT8ucGlkID8/IG5zLnBpZCk7XG4gIHJldHVybiBkYXRhID09IFwiTlVMTCBQT1JUIERBVEFcIiA/IFwiXCIgOiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50Tm9kZShuczogTlMpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCByID0gYXdhaXQgUnVuKG5zLCBcImdldFJlc2V0SW5mb1wiKTtcbiAgcmV0dXJuIGAke3IuY3VycmVudE5vZGV9LiR7MSArIHIub3duZWRTRi5nZXQoci5jdXJyZW50Tm9kZSl9YDtcbn1cblxuZnVuY3Rpb24gYnV5VE9SKG5zOiBOUyk6IHZvaWQge1xuICBSdW4obnMsIFwic2luZ3VsYXJpdHkucHVyY2hhc2VUb3JcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJhbVVwKG5zOiBOUyk6IFByb21pc2U8dm9pZD4ge1xuICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnVwZ3JhZGVIb21lUmFtXCIpKSAmJiAobnMudHByaW50Zih1dGlsLmFuc2kuZyArIFwiVXBncmFkZWQgaG9tZSByYW1cIiksIHRydWUpICYmIHJhbVVwKG5zKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29yZXNVcChuczogTlMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS51cGdyYWRlSG9tZUNvcmVzXCIpKSAmJlxuICAgIChucy50cHJpbnRmKHV0aWwuYW5zaS5nICsgXCJVcGdyYWRlZCBob21lIGNvcmVzXCIpLCB0cnVlKSAmJlxuICAgIGNvcmVzVXAobnMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmYWN0aW9uSm9pbihuOiBOUywgcyA9IG4uc2luZ3VsYXJpdHkpIHtcbiAgYXdhaXQgKGF3YWl0IFJ1bihuLCBcInNpbmd1bGFyaXR5LmNoZWNrRmFjdGlvbkludml0YXRpb25zXCIpKS5mb3JFYWNoQXN5bmMoYXN5bmMgKGYpID0+IChhd2FpdCBSdW4obiwgXCJzaW5ndWxhcml0eS5qb2luRmFjdGlvblwiLCBbZl0pLCBuLnRwcmludGYoYCR7dXRpbC5hbnNpLm19Sm9pbmVkICR7Zn1gKSkpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRhcmt3ZWJTaG9wcGluZyhuczogTlMpIHtcbiAgYXdhaXQgW1wiQnJ1dGVTU0hcIiwgXCJGVFBDcmFja1wiLCBcInJlbGF5U01UUFwiLCBcIkhUVFBXb3JtXCIsIFwiU1FMSW5qZWN0XCJdLnJlZHVjZShcbiAgICBhc3luYyAoYSwgYikgPT4gKGF3YWl0IGEsIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5wdXJjaGFzZVByb2dyYW1cIiwgW2Ake2J9LmV4ZWBdKSksXG4gICAgUHJvbWlzZS5yZXNvbHZlKCksXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG11cmRlcmF0ZShuczogTlMpIHtcbiAgIShhd2FpdCBpc19CdXN5KG5zKSkgJiZcbiAgICAoYXdhaXQgUnVuKG5zLCBcImdldFBsYXllclwiLCBbXSwgXCJudW1QZW9wbGVLaWxsZWRcIikpIDwgMzAgJiZcbiAgICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnN0b3BBY3Rpb25cIiksIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5jb21taXRDcmltZVwiLCBbXCJIb21pY2lkZVwiLCAwXSkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBiZChuLCB0LCBoID0gXCJob21lXCIsIGMgPSAoZiA9IFwiY29ubmVjdFwiKSA9PiBuLnNpbmd1bGFyaXR5W2ZdLCBmID0gKHQsIHIgPSBbXSkgPT4gdCA9PSBoID8gciA6IGYobi5zY2FuKHQpWzBdLCBbdCwgLi4ucl0pKSB7XG4gIChcbiAgICBjKCkoaCksXG4gICAgZih0KS5tYXAoYygpKSxcbiAgICBuLnRwcmludGYoYCR7dXRpbC5hbnNpLnl9QmFja2Rvb3Igc3RhcnRlZCBvbiAke3R9YCksXG4gICAgYXdhaXQgYyhcImluc3RhbGxCYWNrZG9vclwiKSgpLFxuICAgIGMoKShoKSxcbiAgICBuLnRwcmludGYoYCR7dXRpbC5hbnNpLmd9QmFja2Rvb3IgY29tcGxldGUgb24gJHt0fWApXG4gIClcbn1cblxuZnVuY3Rpb24gcGVyc3VhZGUobjogTlMsIHMgPSBcImhvbWVcIiwgcDogc3RyaW5nIHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gIG4uc2NhbihzKS5mb3JFYWNoKCh2KSA9PlxuICAgIHYgIT0gcFxuICAgICAgPyBwZXJzdWFkZShuLCB2LCBzKVxuICAgICAgOiBbbi5icnV0ZXNzaCwgbi5mdHBjcmFjaywgbi5yZWxheXNtdHAsIG4uc3FsaW5qZWN0LCBuLmh0dHB3b3JtLCBuLm51a2VdLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBwKHMpO1xuICAgICAgICB9IGNhdGNoIHsgfVxuICAgICAgfSksXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZDQzbTBuRDM1N3IweShuczogTlMsIGRhdGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSwgd2QgPSBcIncwcjFkX2Q0M20wblwiKSB7XG4gICgoc0dldChucykuaW5jbHVkZXMod2QpICYmXG4gICAgKGF3YWl0IFJ1bihucywgXCJnZXRIYWNraW5nTGV2ZWxcIikpID4gKGF3YWl0IFJ1bihucywgXCJnZXRTZXJ2ZXJSZXF1aXJlZEhhY2tpbmdMZXZlbFwiLCBbd2RdKSkpIHx8XG4gICAgKG5zLmJsYWRlYnVybmVyLmluQmxhZGVidXJuZXIoKSAmJiAhbnMuYmxhZGVidXJuZXIuZ2V0TmV4dEJsYWNrT3AoKSkpICYmXG4gICAgKFtcImluc3RhbGxDb3VudGVyLnR4dFwiLCBcImluc3RhbGxBdWdzUmVhc29uLnR4dFwiLCBcImluc3RhbGxBdWdzTG9nLnR4dFwiXS5tYXAoKGYpID0+IG5zLnJtKGB0ZW1wLyR7Zn1gKSksXG4gICAgICBucy53cml0ZShcbiAgICAgICAgXCJyZXBvcnQvbm9kZUxvZy50eHRcIixcbiAgICAgICAgYCR7YXdhaXQgZ2V0Q3VycmVudE5vZGUobnMpfSBjb21wbGV0ZWQgIC0gJHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfSAke2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCl9YCxcbiAgICAgICksXG4gICAgICBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuZGVzdHJveVcwcjFkRDQzbTBuXCIsIFsxMiwgXCJyc2V0LmpzXCJdKSk7XG59XG5cbmZ1bmN0aW9uIHBTZXJ2KG5zOiBOUykge1xuICAobnMucHVyY2hhc2VTZXJ2ZXIoXCIjXCIsIDgpIHx8IHNHZXQobnMpLnNvbWUoKHMpID0+IFsuLi5BcnJheSgyMSkua2V5cygpXS5zb21lKChyKSA9PiBucy51cGdyYWRlUHVyY2hhc2VkU2VydmVyKHMsIHIgPDwgMSkpKSkgJiYgcFNlcnYobnMpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZXR0eUxvZ3MobnM6IE5TKSB7XG4gIGNvbnN0IGFjY2Vzc19saXN0ID0gc0dldChucykuZmlsdGVyKFxuICAgIChzKSA9PiBucy5oYXNSb290QWNjZXNzKHMpICYmIG5zLmdldFNlcnZlclJlcXVpcmVkSGFja2luZ0xldmVsKHMpIDw9IG5zLmdldEhhY2tpbmdMZXZlbCgpLFxuICApO1xuICBjb25zdCBbZnVuZGVkX2xpc3QsIHRvdGFsX21heF9yYW0sIHRvdGFsX2ZyZWVfcmFtXSA9IGFjY2Vzc19saXN0XG4gICAgLnJlZHVjZSgoW2Z1bmRlZCwgbWF4X3JhbSwgZnJlZV9yYW1dLCBiKSA9PiBbXG4gICAgICBbLi4uZnVuZGVkLCBucy5nZXRTZXJ2ZXJNYXhNb25leShiKSA/IGIgOiBudWxsXSxcbiAgICAgIG1heF9yYW0gKyBucy5nZXRTZXJ2ZXJNYXhSYW0oYiksXG4gICAgICBmcmVlX3JhbSArIGdldEZyZWVSYW0obnMsIGIpXSxcbiAgICAgIFtbXSwgMCwgMF0pO1xuICBjb25zdCBbbnVtX25mZywgbm90X25mZywgYXVnc19zYW5zX25mZ10gPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYm91Z2h0QXVncy50eHRcIilcbiAgICAucmVkdWNlKChbeV9uZmcsIG5fbmZnLCBzYW5zX25mZ10sIGF1ZykgPT4gYXVnID09IENPTi5ORkcgPyBbeV9uZmcgKyAxLCBuX25mZywgc2Fuc19uZmddIDogW3lfbmZnLCBuX25mZyArIDEsIFsuLi5zYW5zX25mZywgYXVnXV0sIFswLCAwLCBbXV0pO1xuICBjb25zdCBib3VnaHRfYXVnX2luZm8gPSBhdWdzX3NhbnNfbmZnLm1hcCgoYXVnKSA9PiBcIiBcXHhCN1wiICsgYXVnKS5qb2luKFwiXFxuXCIpICsgKG51bV9uZmcgPyBcIlxcbiBcXHhCNyBOZXVyb0ZsdXggR292ZXJub3IgeFwiICsgbnVtX25mZyA6IFwiXCIpO1xuICBjb25zdCBudW1fb3RoZXJfYXVncyA9IHJlYWR5RmlsZXkobnMsIFwidGVtcC9pbnN0YWxsZWRBdWdzLnR4dFwiKS5yZWR1Y2UoKGFjYywgYXVnKSA9PiBhY2MgKyAoYXVnICE9IENPTi5ORkcpLCAwKTtcblxuICBjb25zdCBwZXJjQ29sb3VyID0gKHBlcmMpID0+XG4gICAgYCR7cGVyYyA8IDMzID8gdXRpbC5hbnNpLnIgOiBwZXJjIDwgNjYgPyB1dGlsLmFuc2kueSA6IHBlcmMgPCA4NSA/IHV0aWwuYW5zaS5jIDogdXRpbC5hbnNpLmd9JHtwZXJjLnBhZFN0YXJ0KDYsIFwiIFwiKX0lJHt1dGlsLmFuc2kuZH1gO1xuICBjb25zdCBzZWNDb2xvdXIgPSAoc2VjKSA9PiBgJHtzZWMgPCA1ID8gdXRpbC5hbnNpLmcgOiB1dGlsLmFuc2kueX0keyhcIlwiICsgc2VjKS5wYWRTdGFydCgzLCBcIiBcIil9JHt1dGlsLmFuc2kuZH1gO1xuICBjb25zdCBnZXRJbmZvID0gKHNlcnZlcikgPT4gW1xuICAgIE1hdGguY2VpbChucy5nZXRTZXJ2ZXJTZWN1cml0eUxldmVsKHNlcnZlcikpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIgXCIpLFxuICAgIHNlY0NvbG91cihcbiAgICAgIE1hdGguY2VpbChucy5nZXRTZXJ2ZXJTZWN1cml0eUxldmVsKHNlcnZlcikgLSBucy5nZXRTZXJ2ZXJNaW5TZWN1cml0eUxldmVsKHNlcnZlcikpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIC5wYWRTdGFydCgzLCBcIiBcIilcbiAgICApLFxuICAgIG5zLmZvcm1hdE51bWJlcihucy5nZXRTZXJ2ZXJNb25leUF2YWlsYWJsZShzZXJ2ZXIpKS50b1N0cmluZygpLnBhZFN0YXJ0KDgsIFwiIFwiKSxcbiAgICBucy5mb3JtYXROdW1iZXIobnMuZ2V0U2VydmVyTWF4TW9uZXkoc2VydmVyKSkudG9TdHJpbmcoKS5wYWRTdGFydCg4LCBcIiBcIiksXG4gICAgcGVyY0NvbG91cigoKG5zLmdldFNlcnZlck1vbmV5QXZhaWxhYmxlKHNlcnZlcikgLyBucy5nZXRTZXJ2ZXJNYXhNb25leShzZXJ2ZXIpKSAqIDEwMCkudG9GaXhlZCgyKSksXG4gICAgdXRpbC5kaWdpQ2xvY2sobnMuZ2V0V2Vha2VuVGltZShzZXJ2ZXIpKSxcbiAgICBzZXJ2ZXIgPT0gcGVla3lQb3J0eShucywgXCJsb29wL3Byc20uanNcIikgPyBgJHtzZXJ2ZXJ9ICR7dXRpbC5hbnNpLnd9LS0tJHt1dGlsLmFuc2kueX1cXHUwMzk0PGAgOiBzZXJ2ZXIsXG4gIF07XG5cbiAgKFxuICAgIG5zLnJlc2l6ZVRhaWwoODAwLCAxZTMpLFxuICAgIG5zLm1vdmVUYWlsKENPTi5XSU4uaW5uZXJXaWR0aCAtIDExNTAsIDApLFxuICAgIG5zLmNsZWFyTG9nKCksXG4gICAgW1xuICAgICAgLi4uW1xuICAgICAgICAuLi5mdW5kZWRfbGlzdC5maWx0ZXIoQm9vbGVhbikubWFwKGdldEluZm8pLFxuICAgICAgICBbXG4gICAgICAgICAgXCJzZWNcIixcbiAgICAgICAgICBcIiBcXHUwMzk0IFwiLFxuICAgICAgICAgIFwiICAkY3VyICBcIixcbiAgICAgICAgICBcIiAgJG1heCAgXCIsXG4gICAgICAgICAgXCIgICAlICAgXCIsXG4gICAgICAgICAgXCIgIH5ldGUgIFwiLFxuICAgICAgICAgIGAgVGFyZ2V0IH4gJHtmdW5kZWRfbGlzdC5maWx0ZXIoQm9vbGVhbikubGVuZ3RofS8ke3NHZXQobnMpLmZpbHRlcihucy5nZXRTZXJ2ZXJNYXhNb25leSkubGVuZ3RofWAsXG4gICAgICAgIF0sXG4gICAgICBdLm1hcCgoKGxpbmUpID0+IGAgJHtsaW5lLmpvaW4oXCIgfCBcIil9YCkpLFxuICAgICAgXCJcIixcbiAgICAgIGAgaG9tZSAtICR7dXRpbC5yYW1Gb3JtYXQoZ2V0RnJlZVJhbShucywgXCJob21lXCIpKX0vJHt1dGlsLnJhbUZvcm1hdChucy5nZXRTZXJ2ZXJNYXhSYW0oXCJob21lXCIpKX1gLFxuICAgICAgYCBuZXR3b3JrIC0gJHt1dGlsLnJhbUZvcm1hdCh0b3RhbF9mcmVlX3JhbSl9LyR7dXRpbC5yYW1Gb3JtYXQodG90YWxfbWF4X3JhbSl9YCxcbiAgICAgIGAgdGhyZWFkcyAtICR7bnMuZm9ybWF0TnVtYmVyKE1hdGguZmxvb3IodG90YWxfZnJlZV9yYW0gLyBucy5nZXRTY3JpcHRSYW0oXCJ3ZWFrZW4uanNcIikpKX0vJHtucy5mb3JtYXROdW1iZXIoTWF0aC5mbG9vcih0b3RhbF9tYXhfcmFtIC8gbnMuZ2V0U2NyaXB0UmFtKFwid2Vha2VuLmpzXCIpKSl9IHRocmVhZHNgLFxuICAgICAgXCJcIixcbiAgICAgIGAgYm91Z2h0IGF1Z3MgeCAke25vdF9uZmd9LCAke251bV9vdGhlcl9hdWdzfS8xMDAgaW5zdGFsbGVkLCBORkcgeCAkeyhhd2FpdCBSdW4obnMsIFwiZ2V0UmVzZXRJbmZvXCIsIFtdLCBcIm93bmVkQXVnc1wiKSkuZ2V0KENPTi5ORkcpfWAsXG4gICAgICBgJHtib3VnaHRfYXVnX2luZm99YCxcbiAgICAgIGAgJHtyZWFkeUZpbGV5KG5zLCBcInRlbXAvaW5zdGFsbEF1Z3NSZWFzb24udHh0XCIpfWAsXG4gICAgICBcIlwiLFxuICAgIF0uZm9yRWFjaCgobCkgPT4gbnMucHJpbnQobCkpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJldHR5T3ZlcnZpZXcobnM6IE5TLCB0aW1lcikge1xuICBjb25zdCBwcnNtX3RhcmdldCA9IHBlZWt5UG9ydHkobnMsIFwibG9vcC9wcnNtLmpzXCIpO1xuICBjb25zdCBnYW5nX2luZm8gPSBwZWVreVBvcnR5KG5zLCBcImxvb3AvcnVuR2FuZy5qc1wiKTtcbiAgY29uc3QgaGFja25ldF9pbmZvID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL2hhY2tuZXRfaW5mby50eHRcIik7XG4gIGNvbnN0IGRhdGUgPSBOdW1iZXIobmV3IERhdGUoKSk7XG4gIGNvbnN0IGxhc3RfYXVnX3RpbWUgPSArcmVhZHlGaWxleShucywgXCJ0ZW1wL2xhc3RBdWdUaW1lLnR4dFwiKSB8fCBkYXRlO1xuXG4gIGNvbnN0IGNvbG91cmlzZSA9IChvKSA9PiBvLmxpbmVzLm1hcCgobCkgPT4gW2A8c3BhbiBzdHlsZSA9IFwiY29sb3I6JHtvLmNvbH1cIiA+ICR7bFswXX0gPC9zcGFuPmAsIGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7by5jb2x9XCI+JHtsWzFdfTwvc3Bhbj5gXSk7XG4gIGNvbnN0IHNwbGl0TkJyZWFrID0gKGEsIGIpID0+IFtbYVswXSwgYlswXV0uam9pbihcIjwvYnI+XCIpLCBbYVsxXSwgYlsxXV0uam9pbihcIjwvYnI+XCIpXTtcblxuICAoXG4gICAgW0hPT0tTWzBdLmlubmVySFRNTCwgSE9PS1NbMV0uaW5uZXJIVE1MXSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGluZXM6IFtcbiAgICAgICAgICBbYGJpdG5vZGU6YCwgYCR7YXdhaXQgZ2V0Q3VycmVudE5vZGUobnMpfWBdLFxuICAgICAgICAgIFtgcHNlcnY6YCwgYCR7c0dldChucykuZmlsdGVyKChzKSA9PiBzLnN0YXJ0c1dpdGgoXCIjXCIpKS5sZW5ndGh9LyR7bnMuZ2V0UHVyY2hhc2VkU2VydmVyTGltaXQoKX1gXSxcbiAgICAgICAgICBbYHdfZCBsdmw6YCwgYCR7TWF0aC5yb3VuZCgzZTMgKiAoYXdhaXQgUnVuKG5zLCBcImdldEJpdE5vZGVNdWx0aXBsaWVyc1wiLCBbXSwgXCJXb3JsZERhZW1vbkRpZmZpY3VsdHlcIikpKX1gXSxcbiAgICAgICAgICBbYGNpdHk6YCwgYCR7bnMuZ2V0UGxheWVyKCkuY2l0eX1gXSxcbiAgICAgICAgICBbYGthcm1hOmAsIGAke25zLmZvcm1hdE51bWJlcihucy5oZWFydC5icmVhaygpKX1gXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29sOiBcImN5YW5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxpbmVzOiBbXG4gICAgICAgICAgW2B0YXJnZXQ6YCwgYCR7cHJzbV90YXJnZXR9YF0sXG4gICAgICAgICAgW2AkL3M6YCwgYCQke25zLmZvcm1hdE51bWJlcihucy5nZXRTY3JpcHRJbmNvbWUoXCJsb29wL3Byc20uanNcIiwgdW5kZWZpbmVkKSl9YF0sXG4gICAgICAgICAgW2AkdG90YWw6YCwgYCQke25zLmZvcm1hdE51bWJlcihhd2FpdCBSdW4obnMsIFwiZ2V0TW9uZXlTb3VyY2VzXCIsIFtdLCBcInNpbmNlSW5zdGFsbC5oYWNraW5nXCIpKX1gXSxcbiAgICAgICAgICBbYHhwL3M6YCwgYCR7bnMuZm9ybWF0TnVtYmVyKG5zLmdldFRvdGFsU2NyaXB0RXhwR2FpbigpKX1gXSxcbiAgICAgICAgICBbYHNjcmlwdHM6YCwgYCR7c0dldChucykucmVkdWNlKChhLCBiKSA9PiBhICsgbnMucHMoYikubGVuZ3RoLCAwKX1gXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29sOiBcInJlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGluZXM6IFtcbiAgICAgICAgICBbYGhOIFNlcnZlcnM6YCwgYCR7aGFja25ldF9pbmZvLm51bX1gXSxcbiAgICAgICAgICBbYGhhc2hlcy9NYXg6YCwgYCR7aGFja25ldF9pbmZvLmhhc2hlc31gXSxcbiAgICAgICAgICBbYGhhc2hlcy9zOmAsIGAke25zLmZvcm1hdE51bWJlcihoYWNrbmV0X2luZm8ucHJvZCl9YF0sXG4gICAgICAgICAgW2Bwcm9maXQ6YCwgYCQke25zLmZvcm1hdE51bWJlcihoYWNrbmV0X2luZm8ucHJvZml0KX1gXSxcbiAgICAgICAgXSxcbiAgICAgICAgY29sOiBcImdyZWVuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5lczogW1xuICAgICAgICAgIFtgc3RhdHVzOmAsIGAke2dhbmdfaW5mbz8uY3ljbGUgPz8gXCJ+XCJ9YF0sXG4gICAgICAgICAgW2BtZW1iZXJzOmAsIGAke2dhbmdfaW5mbz8uc2l6ZSA/PyBcIn5cIn1gXSxcbiAgICAgICAgICBbYHBvd2VyOmAsIGAke25zLmZvcm1hdE51bWJlcihnYW5nX2luZm8/LnBvd2VyID8/IDAsIDApfS8ke25zLmZvcm1hdE51bWJlcihnYW5nX2luZm8/Lm5leHRwb3dlciA/PyAwLCAwKX1gXSxcbiAgICAgICAgICBbYHRlcnJpdG9yeTpgLCBgJHtucy5mb3JtYXROdW1iZXIoZ2FuZ19pbmZvPy50ZXJyaXRvcnkgPz8gMCAqIDEwMCkgPz8gXCJ+XCJ9JWBdLFxuICAgICAgICAgIFtgd2FyZmFyZT86YCwgYCR7Z2FuZ19pbmZvPy50dyA/PyBcIn5cIn1gXSxcbiAgICAgICAgICBbYHByb2ZpdDpgLCBgJCR7bnMuZm9ybWF0TnVtYmVyKChhd2FpdCBSdW4obnMsIFwiZ2V0TW9uZXlTb3VyY2VzXCIsIFtdLCBcInNpbmNlU3RhcnQuZ2FuZ1wiKSkgPz8gMCl9YF0sXG4gICAgICAgIF0sXG4gICAgICAgIGNvbDogXCJtYWdlbnRhXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsaW5lczogW1xuICAgICAgICAgIFtgJHt1dGlsLnRpY2tTdHJpbmcodGltZXIpfWAsIGBjeWNsZSAjJHtNYXRoLmZsb29yKHRpbWVyIC8gMzApfWBdLFxuICAgICAgICAgIFtgZ3ZuciB1cHRpbWU6YCwgYCR7dXRpbC5kaWdpQ2xvY2sodGltZXIgKiAxZTMpfWBdLFxuICAgICAgICAgIFtgdCsgQXVnYnV5OmAsIGAkeyEhKGRhdGUgLSBsYXN0X2F1Z190aW1lKSA/IHV0aWwuZGlnaUNsb2NrKGRhdGUgLSBsYXN0X2F1Z190aW1lKSA6IFwiTi9BXCJ9YF0sXG4gICAgICAgICAgW2B0KyBJbnN0YWxsOmAsIGAke3V0aWwuZGlnaUNsb2NrKGRhdGUgLSBhd2FpdCBSdW4obnMsIFwiZ2V0UmVzZXRJbmZvXCIsIFtdLCBcImxhc3RBdWdSZXNldFwiKSl9YF0sXG4gICAgICAgICAgW2B0KyBCaXRub2RlOmAsIGAke3V0aWwuZGlnaUNsb2NrKGRhdGUgLSBhd2FpdCBSdW4obnMsIFwiZ2V0UmVzZXRJbmZvXCIsIFtdLCBcImxhc3ROb2RlUmVzZXRcIikpfWBdLFxuICAgICAgICBdLFxuICAgICAgICBjb2w6IFwieWVsbG93XCIsXG4gICAgICB9LFxuICAgIF1cbiAgICAgIC5mbGF0TWFwKGNvbG91cmlzZSlcbiAgICAgIC5yZWR1Y2Uoc3BsaXROQnJlYWspXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2NyaXB0TG9vcChuczogTlMsIGlzX2ZpcnN0X3N0YXJ0OiBib29sZWFuKSB7XG4gIChcbiAgICBhd2FpdCBDT04uT05FU0hPVF9GVU5DVElPTlMubWFwKChzKSA9PiBgb25lc2hvdC8ke3N9LmpzYCkuZm9yRWFjaEFzeW5jKFxuICAgICAgYXN5bmMgKHNjcmlwdDogc3RyaW5nKSA9PiAoXG4gICAgICAgIGlzX2ZpcnN0X3N0YXJ0ICYmIG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLnl9c3RhcnRpbmcgJHtzY3JpcHR9IGApLFxuICAgICAgICBhd2FpdCAoYXN5bmMgKHJ1bnBpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PlxuICAgICAgICAgICEhcnVucGlkXG4gICAgICAgICAgICA/IChhd2FpdCBucy5uZXh0UG9ydFdyaXRlKHJ1bnBpZCksXG4gICAgICAgICAgICAgIGlzX2ZpcnN0X3N0YXJ0ICYmIChhd2FpdCB1dGlsLnNscCg3MCAqIE1hdGgucmFuZG9tKCkpLCBucy50cHJpbnRmKGAke3V0aWwuYW5zaS5nfSR7c2NyaXB0fSBwYXNzZWQgaW5pdGApKSlcbiAgICAgICAgICAgIDogbnMudHByaW50ZihgJHt1dGlsLmFuc2kucn0gISEke3NjcmlwdH0gRElEIE5PVCBSVU4hIWApKShucy5ydW4oc2NyaXB0KSlcbiAgICAgICksXG4gICAgKSxcbiAgICBDT04uTE9PUF9GVU5DVElPTlMubWFwKChzKSA9PiBgbG9vcC8ke3N9LmpzYCkuZm9yRWFjaCgoc2NyaXB0KSA9PiAhbnMuaXNSdW5uaW5nKHNjcmlwdCkgJiYgbnMucnVuKHNjcmlwdCkpLFxuICAgIGlzX2ZpcnN0X3N0YXJ0XG4gICAgJiYgKFxuICAgICAgbnMucHJpbnQoYCR7dXRpbC5hbnNpLm19IFdlbGNvbWUgdG8gZ252ci5qcyFgKSxcbiAgICAgIG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLmd9KioqIFN0YXJ0dXAgQ29tcGxldGUgKioqIGApLFxuICAgICAgYXdhaXQgdXRpbC5zbHAoMWUzKSxcbiAgICAgIG5zLnJ1bihcInV0aWwvbmVvZmV0Y2guanNcIilcbiAgICApXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ3JhZnQobnM6IE5TLCBnID0gbnMuZ3JhZnRpbmcpIHtcbiAgIShhd2FpdCBpc19CdXN5KG5zKSkgJiZcbiAgICBucy5zaW5ndWxhcml0eS50cmF2ZWxUb0NpdHkoXCJOZXcgVG9reW9cIilcbiAgICAmJiBbXG4gICAgICBcIlFMaW5rXCIsXG4gICAgICBcIkVDb3JwIEhWTWluZCBJbXBsYW50XCIsXG4gICAgICBcIlhhbmlwaGVyXCIsXG4gICAgICBcIk9tbmlUZWsgSW5mb0xvYWRcIixcbiAgICAgIFwidmlvbGV0IENvbmdydWl0eSBJbXBsYW50XCJcbiAgICBdLnNvbWUoXG4gICAgICAoYXVnKSA9PiBnLmdyYWZ0QXVnbWVudGF0aW9uKGF1ZywgZmFsc2UpXG4gICAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmFjdFdvcmsobnM6IE5TLCBzID0gbnMuc2luZ3VsYXJpdHkpIHtcbiAgY29uc3QgYXZhaWxhYmxlX2F1Z3MgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYXZhaWxhYmxlQXVncy50eHRcIik7XG4gIGNvbnN0IHRhcmdldF9mYWN0aW9uID0gYXZhaWxhYmxlX2F1Z3MucmVkdWNlKFxuICAgIChhLCBiKSA9PiAoYi5mYWN0Lm5hbWUgIT0gQ09OLkdBTkdfTkFNRSAmJiBiLnJlcGRlbHRhID4gYS5yZXBkZWx0YSA/IGIgOiBhKSxcbiAgICB7IHJlcGRlbHRhOiAwIH0sXG4gICkuZmFjdD8ubmFtZTtcbiAgKFxuICAgICEoYXdhaXQgaXNfQnVzeShucykpXG4gICAgJiYgISF0YXJnZXRfZmFjdGlvblxuICAgICYmIChzLnN0b3BBY3Rpb24oKSxcbiAgICAgIFtcImZpZWxkXCIsIFwic2VjdXJpdHlcIiwgXCJoYWNraW5nXCJdLnNvbWUoKGpvYjogRmFjdGlvbldvcmtUeXBlKSA9PlxuICAgICAgICBzLndvcmtGb3JGYWN0aW9uKGF2YWlsYWJsZV9hdWdzLmluY2x1ZGVzKENPTi5UUlApID8gXCJEYWVkYWx1c1wiIDogdGFyZ2V0X2ZhY3Rpb24sIGpvYiwgZmFsc2UpLFxuICAgICAgKSlcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb25hdGUobnM6IE5TLCBzID0gbnMuc2luZ3VsYXJpdHkpIHtcbiAgbnMucHMoKS5maWx0ZXIocyA9PiBzLmZpbGVuYW1lKVxuICBjb25zdCBhdmFpbGFibGVBdWdzID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL2F2YWlsYWJsZUF1Z3MudHh0XCIpO1xuICBjb25zdCByZXBfbXVsdGkgPSBhd2FpdCBSdW4obnMsIFwiZ2V0Qml0Tm9kZU11bHRpcGxpZXJzXCIsIFtdLCBcIlJlcFRvRG9uYXRlVG9GYWN0aW9uXCIpO1xuICBjb25zdCBuZmdpbmZvID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL25mZ0luZm8udHh0XCIpO1xuICBjb25zdCBkb25hdGVmYWN0aW9uID0gXCJUaGUgQmxhY2sgSGFuZFwiO1xuICAoXG4gICAgLy8gRG9uYXRlIHRvIFRCSCB0byBncmluZCBORiBHb3Zlcm5vclxuICAgIHMuZ2V0RmFjdGlvbkZhdm9yKGRvbmF0ZWZhY3Rpb24pID49IDE1MCAqIHJlcF9tdWx0aVxuICAgICYmIHMuZ2V0RmFjdGlvblJlcChkb25hdGVmYWN0aW9uKSA8IG5mZ2luZm8ucmVwXG4gICAgJiYgcy5kb25hdGVUb0ZhY3Rpb24oZG9uYXRlZmFjdGlvbiwgTWF0aC5tYXgobmZnaW5mby5jb3N0LCAxZTExKSlcbiAgICAmJiBucy50cHJpbnRmKFxuICAgICAgYCR7dXRpbC5hbnNpLm19RG9uYXRlZCAkJHtucy5mb3JtYXROdW1iZXIoTWF0aC5tYXgobmZnaW5mby5jb3N0LCAxZTExKSl9IHRvICR7ZG9uYXRlZmFjdGlvbn0gKGdyaW5kaW5nIE5GRylgLFxuICAgICksXG5cbiAgICAvLyBEb25hdGUgdG8gZmFjdGlvbnMgZm9yIGF1Z3NcbiAgICBhdmFpbGFibGVBdWdzLmZvckVhY2goKGF1ZykgPT4gKFxuICAgICAgYXVnLmZhY3QubmFtZSAhPSBDT04uR0FOR19OQU1FXG4gICAgICAmJiBzLmdldEZhY3Rpb25GYXZvcihhdWcuZmFjdC5uYW1lKSA+IDE1MCAqIHJlcF9tdWx0aVxuICAgICAgJiYgYXVnLnJlcGRlbHRhID4gMFxuICAgICAgJiYgcy5kb25hdGVUb0ZhY3Rpb24oYXVnLmZhY3QubmFtZSwgMWUxMSlcbiAgICAgICYmIG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLm19RG9uYXRlZCAkMTAwQiB0byAke2F1Zy5mYWN0Lm5hbWV9IGApXG4gICAgKSlcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbnN0YWxsQXVncyhuczogTlMpIHtcbiAgY29uc3QgZGF0ZSA9IE51bWJlcihuZXcgRGF0ZSgpKTtcbiAgY29uc3QgdGltZXN0YW1wID0gRGF0ZSgpLnNsaWNlKDQsIDI0KTtcbiAgY29uc3QgYXVnc19hcnJheSA9IHJlYWR5RmlsZXkobnMsIFwidGVtcC9hdmFpbGFibGVBdWdzLnR4dFwiKS5maWx0ZXIoKGF1ZykgPT4gYXVnLmZhY3QubmFtZSAhPSBDT04uR0FOR19OQU1FKTtcbiAgY29uc3QgYm91Z2h0X2F1Z3MgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYm91Z2h0QXVncy50eHRcIik7XG4gIGNvbnN0IHRpbWVfc2luY2VfbGFzdF9hdWcgPSBkYXRlIC0gKyhyZWFkeUZpbGV5KG5zLCBcInRlbXAvbGFzdEF1Z1RpbWUudHh0XCIpID8/IGRhdGUpO1xuICBjb25zdCBsb3dlc3RfcHJpY2UgPSBhdWdzX2FycmF5LnJlZHVjZSgoYSwgYikgPT4gKGEuYXVnICE9IENPTi5UUlAgJiYgYT8ucHJpY2UgPCBiPy5wcmljZSA/IGEgOiBiKSwgSW5maW5pdHkpPy5wcmljZSA/PyAwO1xuICBjb25zdCBmYXZfdG9fZG9uYXRlID0gMTUwICogKGF3YWl0IFJ1bihucywgXCJnZXRCaXROb2RlTXVsdGlwbGllcnNcIiwgW10sIFwiUmVwVG9Eb25hdGVUb0ZhY3Rpb25cIikpO1xuXG4gIGNvbnN0IHRpbWVvdXRfbG9nID1cbiAgICBgdGltZW91dCAtICQke25zLmZvcm1hdE51bWJlcihucy5nZXRTZXJ2ZXJNb25leUF2YWlsYWJsZShcImhvbWVcIikpfSAvJCR7bnMuZm9ybWF0TnVtYmVyKGxvd2VzdF9wcmljZSl9LCBtdWx0aSB4JHtNYXRoLmZsb29yKCtyZWFkeUZpbGV5KG5zLCBcInRlbXAvcHJpY2VSYXRpby50eHRcIikpfSAtICR7dGltZXN0YW1wfWA7XG4gIGNvbnN0IGZhdm91cl9sb2cgPSAoYXVnKSA9PlxuICAgIGBpbmNyZWFzZWQgJHthdWcuZmFjdC5uYW1lfSBmYXZvdXIgYnkgJHtNYXRoLmZsb29yKGF1Zy5mYWN0LmZhdmRlbHRhKX0gdG8gJHtNYXRoLmZsb29yKGF1Zy5mYWN0LmZhdmRlbHRhICsgYXVnLmZhY3QuZmF2KX0gLSAke3RpbWVzdGFtcH1gO1xuXG4gIGNvbnN0IGNoZWNrRmF2b3VyID0gKCkgPT5cbiAgICBhdWdzX2FycmF5LnNvbWUoXG4gICAgICBhdWcgPT5cbiAgICAgICAgYXVnLmZhY3QuZmF2IDwgZmF2X3RvX2RvbmF0ZVxuICAgICAgICAmJiAoYXVnLmZhY3QuZmF2ZGVsdGEgPj0gNTAgfHwgZmF2X3RvX2RvbmF0ZSA8IGF1Zy5mYWN0LmZhdmRlbHRhICsgYXVnLmZhY3QuZmF2KVxuICAgICAgICAmJiAod3JpdGVMb2coZmF2b3VyX2xvZyhhdWcpKSwgdHJ1ZSlcbiAgICApO1xuXG4gIGNvbnN0IGNoZWNrVGltZW91dCA9ICgpID0+XG4gICAgdGltZV9zaW5jZV9sYXN0X2F1ZyA+IDE4ZTVcbiAgICAmJiBsb3dlc3RfcHJpY2UgPiBucy5nZXRTZXJ2ZXJNb25leUF2YWlsYWJsZShcImhvbWVcIilcbiAgICAmJiAod3JpdGVMb2codGltZW91dF9sb2cpLCB0cnVlKTtcblxuICBjb25zdCB3cml0ZUxvZyA9IChsb2cpID0+IChcbiAgICBucy53cml0ZShcInRlbXAvaW5zdGFsbEF1Z3NSZWFzb24udHh0XCIsIGBpbnN0YWxsQXVncyAjJHsxICsgK3JlYWR5RmlsZXkobnMsIFwidGVtcC9pbnN0YWxsQ291bnRlci50eHRcIil9OiAke2xvZ31gLCBcIndcIilcbiAgKTtcblxuICAoXG4gICAgYm91Z2h0X2F1Z3MuaW5jbHVkZXMoQ09OLlRSUCkgJiYgKHdyaXRlTG9nKFwiaW5zdGFsbGVkIFRoZSBSZWQgUGlsbFwiKSwgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnNvZnRSZXNldFwiLCBbXCJyc2V0LmpzXCJdKSksIC8vIGlmIGhhdmUgVFJQIHRoZW4gaW5zdGFsbCBhc2FwXG4gICAgIShhd2FpdCBpc19CdXN5KG5zKSlcbiAgICAmJiAhIWJvdWdodF9hdWdzLmxlbmd0aFxuICAgICYmIChjaGVja1RpbWVvdXQoKSB8fCBjaGVja0Zhdm91cigpKVxuICAgICYmIChcbiAgICAgIG5zLndyaXRlKFwidGVtcC9pbnN0YWxsQ291bnRlci50eHRcIiwgKDEgKyArcmVhZHlGaWxleShucywgXCJ0ZW1wL2luc3RhbGxDb3VudGVyLnR4dFwiKSkudG9TdHJpbmcoKSwgXCJ3XCIpLFxuICAgICAgbnMud3JpdGUoXCJyZXBvcnQvaW5zdGFsbEF1Z3NMb2cudHh0XCIsIHJlYWR5RmlsZXkobnMsIFwidGVtcC9pbnN0YWxsQXVnc1JlYXNvbi50eHRcIikgKyBcIlxcblwiLCBcImFcIiksXG4gICAgICBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuaW5zdGFsbEF1Z21lbnRhdGlvbnNcIiwgW1wicnNldC5qc1wiXSlcbiAgICApXG4gIClcbn1cblxuZnVuY3Rpb24gYnV5QXVncyhuczogTlMsIHMgPSBucy5zaW5ndWxhcml0eSkge1xuICBjb25zdCBvZGRfZmFjdGlvbnMgPSBbXCJCbGFkZWJ1cm5lcnNcIiwgXCJDaHVyY2ggb2YgdGhlIE1hY2hpbmUgR29kXCJdO1xuICBjb25zdCBhdmFpbGFibGVBdWdzID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL2F2YWlsYWJsZUF1Z3MudHh0XCIpO1xuXG4gIGNvbnN0IHRpbWVTdGFtcCA9ICgpID0+IG5zLndyaXRlKFwidGVtcC9sYXN0QXVnVGltZS50eHRcIiwgXCJcIiArIERhdGUubm93KCksIFwid1wiKTtcbiAgY29uc3QgdGVybVByaW50ID0gKGF1ZykgPT5cbiAgICBucy50cHJpbnRmKFxuICAgICAgYCR7dXRpbC5hbnNpLm19UHVyY2hhc2VkICR7dXRpbC5hbnNpLmN9JHthdWcuYXVnfSR7dXRpbC5hbnNpLm19IGZyb20gJHthdWcuZmFjdC5uYW1lfSBmb3IgJCR7bnMuZm9ybWF0TnVtYmVyKGF1Zy5wcmljZSl9YCxcbiAgICApO1xuICBjb25zdCB0ZXJtUHJpbnRORkcgPSAoZmFjdGlvbikgPT5cbiAgICBucy50cHJpbnRmKFxuICAgICAgYCR7dXRpbC5hbnNpLm19UHVyY2hhc2VkICR7dXRpbC5hbnNpLmN9JHtDT04uTkZHfSR7dXRpbC5hbnNpLm19IGZyb20gJHtmYWN0aW9ufSBmb3IgJCR7bnMuZm9ybWF0TnVtYmVyKHMuZ2V0QXVnbWVudGF0aW9uUHJpY2UoQ09OLk5GRykpfWAsXG4gICAgKTtcblxuICAoXG4gICAgbnMuZ2V0UGxheWVyKCkuZmFjdGlvbnNcbiAgICAgIC5mb3JFYWNoKChmKSA9PlxuICAgICAgICBmICE9IENPTi5HQU5HX05BTUVcbiAgICAgICAgJiYgcy5wdXJjaGFzZUF1Z21lbnRhdGlvbihmLCBDT04uTkZHKVxuICAgICAgICAmJiAodGltZVN0YW1wKCksIHRlcm1QcmludE5GRyhmKSksXG4gICAgICApLFxuICAgIGF2YWlsYWJsZUF1Z3MuZm9yRWFjaCgoYXVnKSA9PlxuICAgICAgcy5wdXJjaGFzZUF1Z21lbnRhdGlvbihhdWcuZmFjdC5uYW1lLCBhdWcuYXVnKVxuICAgICAgJiYgKHRpbWVTdGFtcCgpLCB0ZXJtUHJpbnQoYXVnKSlcbiAgICApLFxuICAgIG9kZF9mYWN0aW9ucy5mb3JFYWNoKChmYWMpID0+XG4gICAgICBzLmdldEF1Z21lbnRhdGlvbnNGcm9tRmFjdGlvbihmYWMpLmZvckVhY2goKGF1ZykgPT4gcy5wdXJjaGFzZUF1Z21lbnRhdGlvbihmYWMsIGF1ZykpLFxuICAgIClcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBvd25lZEF1Z3MobnM6IE5TKSB7XG4gIGNvbnN0IHdydCA9IGFzeW5jIChmaWxlLCBkYXRhKSA9PiBhd2FpdCBSdW4obnMsIFwid3JpdGVcIiwgW2ZpbGUsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBcIndcIl0pO1xuICAhKGF3YWl0IFJ1bihucywgXCJmaWxlRXhpc3RzXCIsIFtcInRlbXAvaW5zdGFsbENvdW50ZXIudHh0XCJdKSkgJiYgd3J0KFwidGVtcC9pbnN0YWxsQ291bnRlci50eHRcIiwgMCksXG4gICAgd3J0KFxuICAgICAgXCJ0ZW1wL2JvdWdodEF1Z3MudHh0XCIsXG4gICAgICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldE93bmVkQXVnbWVudGF0aW9uc1wiLCBbMV0pKS5zbGljZShcbiAgICAgICAgKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRPd25lZEF1Z21lbnRhdGlvbnNcIiwgWzBdKSkubGVuZ3RoLFxuICAgICAgKSxcbiAgICApLFxuICAgIHdydChcbiAgICAgIFwidGVtcC9wcmljZVJhdGlvLnR4dFwiLFxuICAgICAgKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRBdWdtZW50YXRpb25QcmljZVwiLCBbXCJDb21iYXQgUmliIElcIl0pKVxuICAgICAgLyAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldEF1Z21lbnRhdGlvbkJhc2VQcmljZVwiLCBbXCJDb21iYXQgUmliIElcIl0pKSxcbiAgICApLFxuICAgIHdydChcInRlbXAvb3duZWRBdWdzLnR4dFwiLCBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuZ2V0T3duZWRBdWdtZW50YXRpb25zXCIsIFsxXSkpLFxuICAgIHdydChcInRlbXAvaW5zdGFsbGVkQXVncy50eHRcIiwgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldE93bmVkQXVnbWVudGF0aW9uc1wiLCBbMF0pKSxcbiAgICB3cnQoXCJ0ZW1wL25mZ0luZm8udHh0XCIsIHtcbiAgICAgIGNvc3Q6IGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRBdWdtZW50YXRpb25QcmljZVwiLCBbQ09OLk5GR10pLFxuICAgICAgcmVwOiBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuZ2V0QXVnbWVudGF0aW9uUmVwUmVxXCIsIFtDT04uTkZHXSksXG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGF2YWlsYWJsZUF1Z3MobnM6IE5TLCBzID0gbnMuc2luZ3VsYXJpdHkpIHtcbiAgY29uc3Qgb3duZWRfYXVncyA9IHJlYWR5RmlsZXkobnMsIFwidGVtcC9vd25lZEF1Z3MudHh0XCIpO1xuICBjb25zdCBmb3JiaWRkZW5fZmFjdGlvbnMgPSBbXCJTaGFkb3dzIG9mIEFuYXJjaHlcIiwgXCJCbGFkZWJ1cm5lcnNcIiwgXCJDaHVyY2ggb2YgdGhlIE1hY2hpbmUgR29kXCJdO1xuICBjb25zdCBhdWdfb2JqZWN0ID0gbnMuZ2V0UGxheWVyKCkuZmFjdGlvbnNcbiAgICAuZmlsdGVyKChmYWN0aW9uKSA9PiAhZm9yYmlkZGVuX2ZhY3Rpb25zLmluY2x1ZGVzKGZhY3Rpb24pKVxuICAgIC5mbGF0TWFwKChmYWN0aW9uKSA9PiAoXG4gICAgICBzLmdldEF1Z21lbnRhdGlvbnNGcm9tRmFjdGlvbihmYWN0aW9uKVxuICAgICAgICAuZmlsdGVyKChhdWcpID0+IENPTi5BVUdTX1RPX0JVWS5pbmNsdWRlcyhhdWcpICYmICFvd25lZF9hdWdzLmluY2x1ZGVzKGF1ZykpXG4gICAgICAgIC5tYXAoKGF1Z21lbnQpID0+IChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdWc6IGF1Z21lbnQsXG4gICAgICAgICAgICBwcmljZTogcy5nZXRBdWdtZW50YXRpb25QcmljZShhdWdtZW50KSxcbiAgICAgICAgICAgIHJlcHJlcTogcy5nZXRBdWdtZW50YXRpb25SZXBSZXEoYXVnbWVudCksXG4gICAgICAgICAgICByZXBkZWx0YTogcy5nZXRBdWdtZW50YXRpb25SZXBSZXEoYXVnbWVudCkgLSBzLmdldEZhY3Rpb25SZXAoZmFjdGlvbiksXG4gICAgICAgICAgICBmYWN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IGZhY3Rpb24sXG4gICAgICAgICAgICAgIGZhdjogcy5nZXRGYWN0aW9uRmF2b3IoZmFjdGlvbiksXG4gICAgICAgICAgICAgIGZhdmRlbHRhOiBzLmdldEZhY3Rpb25GYXZvckdhaW4oZmFjdGlvbiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKSlcbiAgICApKTtcbiAgbnMud3JpdGUoXCJ0ZW1wL2F2YWlsYWJsZUF1Z3MudHh0XCIsIEpTT04uc3RyaW5naWZ5KGF1Z19vYmplY3QgPz8gW10pLCBcIndcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJhY2tkb29yKG46IE5TKSB7XG4gIFtcIkNTRUNcIiwgXCJhdm1uaXRlLTAyaFwiLCBcInJ1bjR0aGVoMTExelwiLCBcIkkuSS5JLklcIl0ubWFwKG4uZ2V0U2VydmVyKS5mb3JFYWNoKFxuICAgIChzKSA9PlxuICAgICAgIXMuYmFja2Rvb3JJbnN0YWxsZWRcbiAgICAgICYmIHMuaGFzQWRtaW5SaWdodHNcbiAgICAgICYmIG4uZ2V0SGFja2luZ0xldmVsKCkgPiBzLnJlcXVpcmVkSGFja2luZ1NraWxsXG4gICAgICAmJiAhbi5pc1J1bm5pbmcoXCJ1dGlsL2JkLmpzXCIsIFwiaG9tZVwiLCBzLmhvc3RuYW1lKVxuICAgICAgJiYgbi5ydW4oXCJ1dGlsL2JkLmpzXCIsIHsgdGhyZWFkczogMSwgcmFtT3ZlcnJpZGU6IDUuOCB9LCBzLmhvc3RuYW1lKSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gaGFja25ldFNoaW5kaWdzKG5zOiBOUywgaCA9IG5zLmhhY2tuZXQpIHtcbiAgY29uc3Qgbm9kZV9hcnJheSA9IHV0aWwuZ2V0SW5kZXhBcnJheShoLm51bU5vZGVzKCkpO1xuICBjb25zdCBwcm9maXRzID0gbnMuZ2V0TW9uZXlTb3VyY2VzKCkuc2luY2VJbnN0YWxsLmhhY2tuZXQgKyBucy5nZXRNb25leVNvdXJjZXMoKS5zaW5jZUluc3RhbGwuaGFja25ldF9leHBlbnNlcztcbiAgY29uc3Qgc2VydmVyX29iaiA9IHNHZXQobnMpLm1hcCgoc2VydmVyKSA9PiAoe1xuICAgIG5hbWU6IHNlcnZlcixcbiAgICBtb25leTogbnMuZ2V0U2VydmVyTWF4TW9uZXkoc2VydmVyKSxcbiAgICBzZWM6IG5zLmdldFNlcnZlck1pblNlY3VyaXR5TGV2ZWwoc2VydmVyKSxcbiAgfSkpO1xuICBjb25zdCBtb25leXRhcmdldHNlcnZlciA9IHNlcnZlcl9vYmoucmVkdWNlKChhLCBiKSA9PiAoYS5tb25leSA8IGIubW9uZXkgPyBhIDogYikpLm5hbWU7XG4gIGNvbnN0IHNlY3RhcmdldHNlcnZlciA9IHNlcnZlcl9vYmoucmVkdWNlKChhLCBiKSA9PiAoYS5zZWMgPiBiLnNlYyA/IGEgOiBiKSkubmFtZTtcbiAgY29uc3QgaW5mbyA9IHtcbiAgICBudW06IGgubnVtTm9kZXMoKSxcbiAgICBoYXNoZXM6IGAke25zLmZvcm1hdE51bWJlcihoLm51bUhhc2hlcygpKX0vJHtucy5mb3JtYXROdW1iZXIoaC5oYXNoQ2FwYWNpdHkoKSwgMCl9YCxcbiAgICBwcm9kOiBub2RlX2FycmF5LnJlZHVjZSgoYSwgbikgPT4gYSArIGguZ2V0Tm9kZVN0YXRzKG4pLnByb2R1Y3Rpb24sIDApLFxuICAgIHByb2ZpdDogcHJvZml0cyxcbiAgfTtcblxuICBjb25zdCB1cE1vbmV5ID0gKCkgPT5cbiAgICBucy5nZXRTZXJ2ZXJNYXhNb25leShtb25leXRhcmdldHNlcnZlcikgPCAxZTEzXG4gICAgJiYgaC5zcGVuZEhhc2hlcyhcIkluY3JlYXNlIE1heGltdW0gTW9uZXlcIiwgbW9uZXl0YXJnZXRzZXJ2ZXIpXG4gICAgJiYgdXBNb25leSgpO1xuICBjb25zdCBkb3duU2VjID0gKCkgPT5cbiAgICBucy5nZXRTZXJ2ZXJNaW5TZWN1cml0eUxldmVsKHNlY3RhcmdldHNlcnZlcikgPiAxXG4gICAgJiYgaC5zcGVuZEhhc2hlcyhcIlJlZHVjZSBNaW5pbXVtIFNlY3VyaXR5XCIsIHNlY3RhcmdldHNlcnZlcilcbiAgICAmJiBkb3duU2VjKCk7XG5cbiAgY29uc3Qgbm9kZUJ1eSA9ICgpID0+IGgucHVyY2hhc2VOb2RlKCkgKyAxICYmIG5vZGVCdXkoKTtcbiAgY29uc3QgdXBQYXJ0cyA9ICgpID0+XG4gICAgW1wiTGV2ZWxcIiwgXCJDb3JlXCIsIFwiUmFtXCIsIFwiQ2FjaGVcIl0uZm9yRWFjaCgocGFydCkgPT4gbm9kZV9hcnJheS5mb3JFYWNoKChuKSA9PiBoW2B1cGdyYWRlJHtwYXJ0fWBdKG4pICYmIHVwUGFydHMoKSkpO1xuXG4gIChcbiAgICAoXG4gICAgICBwcm9maXRzID4gLTFcbiAgICAgICYmIChcbiAgICAgICAgdXBNb25leSgpLFxuICAgICAgICBkb3duU2VjKCksXG4gICAgICAgIG5vZGVCdXkoKSxcbiAgICAgICAgdXBQYXJ0cygpXG4gICAgICApXG4gICAgKSxcbiAgICBucy53cml0ZShcInRlbXAvaGFja25ldF9pbmZvLnR4dFwiLCBKU09OLnN0cmluZ2lmeShpbmZvKSwgXCJ3XCIpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RldmVzKG5zOiBOUykge1xuICBjb25zdCBbcywgYl0gPSBbbnMuc2xlZXZlLCBucy5ibGFkZWJ1cm5lcl07XG4gIGNvbnN0IHN0ZXZlcyA9IHV0aWwuZ2V0SW5kZXhBcnJheSg4KS5zb3J0KChhLCBiKSA9PiBzLmdldFNsZWV2ZShiKS5zdG9yZWRDeWNsZXMgLSBzLmdldFNsZWV2ZShhKS5zdG9yZWRDeWNsZXMpO1xuXG4gIGNvbnN0IGdldF9sb3dfc2tpbGwgPSBzdGV2ZSA9PlxuICAgIFtcInN0cmVuZ3RoXCIsIFwiZGVmZW5zZVwiLCBcImRleHRlcml0eVwiLCBcImFnaWxpdHlcIl0ucmVkdWNlKFxuICAgICAgKGEsIHNraWxsKSA9PiAoc3RldmUuc2tpbGxzW3NraWxsXSA8IDI1ID8gc2tpbGwgOiBhKSxcbiAgICAgIGZhbHNlLFxuICAgICk7XG5cbiAgY29uc3QgdHJ5X3RyYWluID0gYXN5bmMgc3RldmUgPT4gKFxuICAgIGF3YWl0IChhc3luYyBza2lsbCA9PiBza2lsbCAmJiAoYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS50cmF2ZWxcIiwgW3N0ZXZlLCBcIlNlY3Rvci0xMlwiXSksIGF3YWl0IFJ1bihucywgXCJzbGVldmUuc2V0VG9HeW1Xb3Jrb3V0XCIsIFtzdGV2ZSwgXCJQb3dlcmhvdXNlIEd5bVwiLCBza2lsbC50b1N0cmluZygpXSkpKShnZXRfbG93X3NraWxsKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0U2xlZXZlXCIsIFtzdGV2ZV0pKSlcbiAgKTtcblxuICBjb25zdCB0cnlfc3RhYmJpbiA9IGFzeW5jIChzdGV2ZSkgPT4gIShhd2FpdCBSdW4obnMsIFwiZ2FuZy5pbkdhbmdcIikgPyBhd2FpdCBSdW4obnMsIFwic2xlZXZlLnNldFRvQ29tbWl0Q3JpbWVcIiwgW3N0ZXZlLCBcIkhvbWljaWRlXCJdKSA6IGZhbHNlKTtcblxuICBjb25zdCBiYl9pbmZpbCA9IGFzeW5jIHN0ZXZlID0+IChcbiAgICBhd2FpdCAhc3RldmVzLmV2ZXJ5QXN5bmMoYXN5bmMgc3RldmUgPT4gKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0VGFza1wiLCBbc3RldmVdKSkuc29tZSgodGFzaykgPT4gdGFzaz8udHlwZSA9PT0gXCJJTkZJTFRSQVRFXCIpKVxuICAgICYmIGF3YWl0IFJ1bihucywgXCJzbGVldmUuc2V0VG9CbGFkZWJ1cm5lckFjdGlvblwiLCBbc3RldmUsIFwiSW5maWx0cmF0ZSBzeW50aG9pZHNcIl0pXG4gICk7XG5cbiAgY29uc3QgYmJfY29udHJhY3RzID0gYXN5bmMgc3RldmUgPT4gKFxuICAgIChhd2FpdCBSdW4obnMsIFwiYmxhZGVidXJuZXIuZ2V0Q29udHJhY3ROYW1lc1wiKSlcbiAgICAgIC5zb21lQXN5bmMoYXN5bmMgY29udHJhY3QgPT4gYXdhaXQgc3RldmVzLmV2ZXJ5QXN5bmMoYXN5bmMgc3RldmUgPT4gKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0VGFza1wiLCBbc3RldmVdKSBhcyBTbGVldmVCbGFkZWJ1cm5lclRhc2spPy5hY3Rpb25OYW1lICE9PSBjb250cmFjdClcbiAgICAgICAgJiYgYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmdldEFjdGlvbkNvdW50UmVtYWluaW5nXCIsIFtcIkNvbnRyYWN0XCIsIGNvbnRyYWN0XSlcbiAgICAgICAgJiYgYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS5zZXRUb0JsYWRlYnVybmVyQWN0aW9uXCIsIFtzdGV2ZSwgXCJUYWtlIG9uIGNvbnRyYWN0c1wiLCBjb250cmFjdF0pLFxuICAgICAgKVxuICApO1xuXG4gIGNvbnN0IGJ1eV9hdWdzID0gYXN5bmMgc3RldmUgPT4gKFxuICAgICEoYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS5nZXRTbGVldmVcIiwgW3N0ZXZlXSkpLnNob2NrID9cbiAgICAgIChhd2FpdCBSdW4obnMsIFwic2xlZXZlLmdldFNsZWV2ZVB1cmNoYXNhYmxlQXVnc1wiLCBbc3RldmVdKSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuY29zdCAtIGIuY29zdClcbiAgICAgICAgLmZvckVhY2hBc3luYyhhc3luYyAoYXVnKSA9PiBhd2FpdCBSdW4obnMsIFwic2xlZXZlLnB1cmNoYXNlU2xlZXZlQXVnXCIsIFtzdGV2ZSwgYXVnLm5hbWVdKSlcbiAgICAgIDogZmFsc2VcbiAgKTtcblxuICAoXG4gICAgYXdhaXQgc3RldmVzLmZvckVhY2hBc3luYyhhc3luYyAoc3RldmUpID0+IGF3YWl0IFJ1bihucywgXCJzbGVldmUuc2V0VG9JZGxlXCIsIFtzdGV2ZV0pKSxcbiAgICBhd2FpdCBzdGV2ZXMuZm9yRWFjaEFzeW5jKGFzeW5jIChzdGV2ZSkgPT4gKFxuICAgICAgIShhd2FpdCBSdW4obnMsIFwic2xlZXZlLmdldFNsZWV2ZVwiLCBbc3RldmVdKSkuc2hvY2sgJiYgYXdhaXQgYnV5X2F1Z3Moc3RldmUpLFxuICAgICAgKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0U2xlZXZlXCIsIFtzdGV2ZV0pKS5zaG9jayA+IDkwXG4gICAgICAgID8gYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS5zZXRUb1Nob2NrUmVjb3ZlcnlcIiwgW3N0ZXZlXSlcbiAgICAgICAgOiBhd2FpdCB0cnlfdHJhaW4oc3RldmUpXG4gICAgICAgIHx8IGF3YWl0IHRyeV9zdGFiYmluKHN0ZXZlKVxuICAgICAgICB8fCAoYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmluQmxhZGVidXJuZXJcIikgJiYgKGF3YWl0IGJiX2luZmlsKHN0ZXZlKSB8fCBhd2FpdCBiYl9jb250cmFjdHMoc3RldmUpKSlcbiAgICAgICAgfHwgKChhd2FpdCBSdW4obnMsIFwic2xlZXZlLmdldFNsZWV2ZVwiLCBbc3RldmVdKSkuc2hvY2tcbiAgICAgICAgICA/IGF3YWl0IFJ1bihucywgXCJzbGVldmUuc2V0VG9TaG9ja1JlY292ZXJ5XCIsIFtzdGV2ZV0pXG4gICAgICAgICAgOiBhd2FpdCBSdW4obnMsIFwic2xlZXZlLnNldFRvSWRsZVwiLCBbc3RldmVdKSlcbiAgICApKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGJidXJuZXIobnM6IE5TKSB7XG4gIGNvbnN0IFtzLCBiXSA9IFtucy5zaW5ndWxhcml0eSwgbnMuYmxhZGVidXJuZXJdXG4gIGNvbnN0IGdvVHJhaW4gPSBhc3luYyAoKSA9PiAoXG4gICAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnN0b3BBY3Rpb25cIiksXG4gICAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnRyYXZlbFRvQ2l0eVwiLCBbXCJTZWN0b3ItMTJcIl0pLFxuICAgIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5neW1Xb3Jrb3V0XCIsIFtcbiAgICAgIFwiUG93ZXJob3VzZSBHeW1cIixcbiAgICAgIFtcIkRlZmVuc2VcIiwgXCJTdHJlbmd0aFwiLCBcIkRleHRlcml0eVwiLCBcIkFnaWxpdHlcIl0ucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFNraWxsID0gKHN0cikgPT4gbnMuZ2V0UGxheWVyKCkuc2tpbGxzW3N0ci50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgcmV0dXJuIGdldFNraWxsKGEpIDwgZ2V0U2tpbGwoYikgPyBhIDogYjtcbiAgICAgIH0pLFxuICAgICAgMCxcbiAgICBdKVxuICApO1xuICBjb25zdCB1cFNraWxsID0gYXN5bmMgKCkgPT4gKFxuICAgIGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci51cGdyYWRlU2tpbGxcIiwgW2IuZ2V0U2tpbGxOYW1lcygpLnJlZHVjZSgoYSwgYykgPT4gKGYgPT4gZihhKSA8IGYoYykgPyBhIDogYykoYi5nZXRTa2lsbFVwZ3JhZGVDb3N0KSldKSAmJiB1cFNraWxsKClcbiAgKTtcbiAgY29uc3QgZG9PcCA9IGFzeW5jIChvcCkgPT4gKFxuICAgICFvcFxuICAgICAgPyBkNDNtMG5EMzU3cjB5KG5zKVxuICAgICAgOiBhd2FpdCAoKFthLCBjXSkgPT4gYSArIGMgPiAxLjgpKGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5nZXRBY3Rpb25Fc3RpbWF0ZWRTdWNjZXNzQ2hhbmNlXCIsIFtcIkJsYWNrT3BzXCIsIChhd2FpdCBSdW4obnMsIFwiYmxhZGVidXJuZXIuZ2V0TmV4dEJsYWNrT3BcIikpLm5hbWVdKSlcbiAgICAgICYmICEoYXdhaXQgaXNfQnVzeShucykpXG4gICAgICAmJiAoXG4gICAgICAgIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5zdG9wQWN0aW9uXCIpLFxuICAgICAgICBhd2FpdCBSdW4obnMsIFwiYmxhZGVidXJuZXIuc3RhcnRBY3Rpb25cIiwgW1wiQmxhY2tPcHNcIiwgKGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5nZXROZXh0QmxhY2tPcFwiKSkubmFtZV0pXG4gICAgICApXG4gICk7XG5cbiAgKFxuICAgIGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5qb2luQmxhZGVidXJuZXJEaXZpc2lvblwiKSxcbiAgICAhKGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5pbkJsYWRlYnVybmVyXCIpKVxuICAgICAgPyBhd2FpdCBnb1RyYWluKClcbiAgICAgIDogKGF3YWl0IHVwU2tpbGwoKSwgYXdhaXQgZG9PcChiLmdldE5leHRCbGFja09wKCk/Lm5hbWUpKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YW4obnM6IE5TLCBzID0gbnMuc3RhbmVrKSB7XG4gIG5zLmRpc2FibGVMb2coXCJBTExcIiksIG5zLmVuYWJsZUxvZyhcImV4ZWNcIiksIG5zLnJ1bihcImxzZy5qc1wiKTtcbiAgcy5hY2NlcHRHaWZ0KCkgfHwgKGF3YWl0IG5zLnNsZWVwKDFlMyksIGF3YWl0IHN0YW4obnMpKTtcbiAgY29uc3Qgc3BhcmVfdGhyZWFkcyA9IE1hdGguZmxvb3IoKGdldEZyZWVSYW0obnMsIFwiaG9tZVwiKSAtIDUwKSAvIG5zLmdldFNjcmlwdFJhbShcImNocmcuanNcIikpO1xuICBjb25zdCB0YXJnZXQgPSBzXG4gICAgLmFjdGl2ZUZyYWdtZW50cygpXG4gICAgLmZpbHRlcigoZikgPT4gZi5pZCA8IDEwMClcbiAgICAucmVkdWNlKChhLCBiKSA9PiAoYS5udW1DaGFyZ2UgPCBiLm51bUNoYXJnZSA/IGEgOiBiKSwgeyBudW1DaGFyZ2U6IE5hTiwgeDogTmFOLCB5OiBOYU4gfSk7XG4gIChcbiAgICAhIXRhcmdldCAmJlxuICAgIChzcGFyZV90aHJlYWRzID4gMCAmJiAhaXNOYU4odGFyZ2V0Lm51bUNoYXJnZSlcbiAgICAgID8gbnMuZXhlYyhcImNocmcuanNcIiwgXCJob21lXCIsIHNwYXJlX3RocmVhZHMsIHRhcmdldC54LCB0YXJnZXQueSlcbiAgICAgIDogbnMucHJpbnQoXCJubyB0aHJlYWRzISBza2lwcGluZy4uLlwiKSksXG4gICAgbnMud3JpdGVQb3J0KG5zLnBpZCwgXCJcIiksXG4gICAgYXdhaXQgdXRpbC5zbHAoMWU0KSxcbiAgICBhd2FpdCBzdGFuKG5zKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkdhbmcobiwgZyA9IG4uZ2FuZykge1xuICBjb25zdCB0cnlSZWNydWl0ID0gKG5hbWUgPSBDT04uTUVNQkVSX05BTUVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENPTi5NRU1CRVJfTkFNRVMubGVuZ3RoKV0pID0+IChcbiAgICBnLmdldE1lbWJlck5hbWVzKCkuaW5jbHVkZXMobmFtZSlcbiAgICAgID8gdHJ5UmVjcnVpdCgpXG4gICAgICA6IGcucmVjcnVpdE1lbWJlcihuYW1lKSAmJiBuLnRwcmludGYoYCR7dXRpbC5hbnNpLnJ9UmVjcnVpdGVkICR7dXRpbC5hbnNpLmd9JHtuYW1lfWApXG4gICk7XG5cbiAgY29uc3Qgc2V0VFcgPSAoKSA9PlxuICAgIGcuc2V0VGVycml0b3J5V2FyZmFyZShPYmplY3Qua2V5cyhvdGhlcl9nYW5nX2luZm8oKSkuZXZlcnkoKGgpID0+IGcuZ2V0Q2hhbmNlVG9XaW5DbGFzaChoKSA+PSAwLjUpKTtcblxuICBjb25zdCBzbHAgPSBhc3luYyAodCkgPT4gYXdhaXQgbi5zbGVlcCh0IC8gKGcuZ2V0Qm9udXNUaW1lKCkgPiA1ZTMgPyAyNSA6IDEpKTtcblxuICBjb25zdCBvdGhlcl9nYW5nX2luZm8gPSBnLmdldE90aGVyR2FuZ0luZm9ybWF0aW9uO1xuXG4gIGNvbnN0IHRpY2sgPSBhc3luYyAobCA9IG51bGwpID0+IChcbiAgICBhd2FpdCAoYXN5bmMgcSA9PiAobCA9IHEoKSwgYXdhaXQgbi5zbGVlcCg1MCksIGwgPT0gcSgpICYmIChhd2FpdCB0aWNrKCkpKSkoKCkgPT4gT2JqZWN0LnZhbHVlcyhvdGhlcl9nYW5nX2luZm8oKSkucmVkdWNlKChhOiBudW1iZXIsIGI6IEdhbmdPdGhlckluZm9PYmplY3QpID0+IGEgKyBiLnBvd2VyLCAwKSlcbiAgKTtcblxuICBjb25zdCBmb2N1cyA9ICgpID0+IChnLmdldE1lbWJlck5hbWVzKCkubGVuZ3RoID4gOSA/IFwibW9uZXlHYWluXCIgOiBcInJlc3BlY3RHYWluXCIpO1xuXG4gIGNvbnN0IGFzc2lnbkpvYiA9ICh0YXNrKSA9PiAoXG4gICAgZy5nZXRNZW1iZXJOYW1lcygpLmZvckVhY2goXG4gICAgICAobWVtYmVyKSA9PiAoXG4gICAgICAgIGcuZ2V0RXF1aXBtZW50TmFtZXMoKS5mb3JFYWNoKChpdGVtKSA9PiBnLnB1cmNoYXNlRXF1aXBtZW50KG1lbWJlciwgaXRlbSkpLFxuICAgICAgICBbXCJhZ2lcIiwgXCJzdHJcIiwgXCJkZWZcIiwgXCJkZXhcIl0ucmVkdWNlKChhLCBiKSA9PiBhICsgZy5nZXRBc2NlbnNpb25SZXN1bHQobWVtYmVyKT8uW2JdLCAwKSA+IDYgJiYgZy5hc2NlbmRNZW1iZXIobWVtYmVyKSxcbiAgICAgICAgZy5zZXRNZW1iZXJUYXNrKFxuICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICB0YXNrID8/IGcuZ2V0VGFza05hbWVzKCkucmVkdWNlKFxuICAgICAgICAgICAgKGEsIGIpID0+IChcbiAgICAgICAgICAgICAgZy5zZXRNZW1iZXJUYXNrKG1lbWJlciwgYiksXG4gICAgICAgICAgICAgICgoZ2FpbikgPT4gKGdhaW4gPCBhLmRhdCA/IGEgOiB7IG5hbWU6IGIsIGRhdDogZ2FpbiB9KSkoZy5nZXRNZW1iZXJJbmZvcm1hdGlvbihtZW1iZXIpW2ZvY3VzKCldKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApLm5hbWUsXG4gICAgICAgIClcbiAgICAgICksXG4gICAgKSxcbiAgICBwcmludFRvUG9ydChcbiAgICAgIHRhc2s/LnNwbGl0KFwiIFwiKVxuICAgICAgICAubWFwKChhKSA9PiBhWzBdKVxuICAgICAgICAuam9pbihcIlwiKSA/PyBcIkpvYnNcIixcbiAgICApXG4gICk7XG4gIGNvbnN0IHByaW50VG9Qb3J0ID0gKGpvYikgPT4gKFxuICAgIG4uY2xlYXJQb3J0KG4ucGlkKSxcbiAgICBuLndyaXRlUG9ydChuLnBpZCwge1xuICAgICAgY3ljbGU6IGpvYixcbiAgICAgIHNpemU6IGcuZ2V0TWVtYmVyTmFtZXMoKS5sZW5ndGgsXG4gICAgICBwb3dlcjogZy5nZXRHYW5nSW5mb3JtYXRpb24oKS5wb3dlcixcbiAgICAgIG5leHRwb3dlcjogT2JqZWN0LnZhbHVlcyhvdGhlcl9nYW5nX2luZm8oKSkucmVkdWNlKChhOiBudW1iZXIsIGI6IEdhbmdPdGhlckluZm9PYmplY3QpID0+IChhID4gYi5wb3dlciA/IGEgOiBiLnBvd2VyKSwgMCksXG4gICAgICB0ZXJyaXRvcnk6IGcuZ2V0R2FuZ0luZm9ybWF0aW9uKCkudGVycml0b3J5ICogMTAwLFxuICAgICAgdHc6IGcuZ2V0R2FuZ0luZm9ybWF0aW9uKCkudGVycml0b3J5V2FyZmFyZUVuZ2FnZWQsXG4gICAgfSlcbiAgKTtcblxuICAoXG4gICAgKGcuaW5HYW5nKCkgfHwgZy5jcmVhdGVHYW5nKENPTi5HQU5HX05BTUUpKVxuICAgICYmIChcbiAgICAgIHRyeVJlY3J1aXQoKSxcbiAgICAgIHNldFRXKCksXG4gICAgICBhc3NpZ25Kb2IodW5kZWZpbmVkKSxcbiAgICAgIGF3YWl0IHNscCgxNWUzKSxcbiAgICAgIGFzc2lnbkpvYihcIlRyYWluIENvbWJhdFwiKSxcbiAgICAgIGF3YWl0IHNscCg0NTAwKSxcbiAgICAgIGFzc2lnbkpvYihcIlRlcnJpdG9yeSBXYXJmYXJlXCIpLFxuICAgICAgYXdhaXQgdGljaygpLFxuICAgICAgYXdhaXQgcnVuR2FuZyhuKVxuICAgIClcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnb2xmZWRHYW5nKFxuICBuLFxuICBnID0gbi5nYW5nLFxuICBzID0gYXN5bmMgKHQpID0+IGF3YWl0IG4uc2xlZXAodCAvIChnLmdldEJvbnVzVGltZSgpID4gNWUzID8gMjUgOiAxKSksXG4gIHQgPSBhc3luYyAobCkgPT4gKGwgPSBxKClbMV0sIGF3YWl0IG4uc2xlZXAoOSksIGwgPT0gcSgpWzFdICYmIGF3YWl0IHQobCkpLFxuICBxID0gKCkgPT4gT2JqZWN0LmVudHJpZXMoZy5nZXRPdGhlckdhbmdJbmZvcm1hdGlvbigpKS5yZWR1Y2UoKGE6IFtib29sZWFuLCBudW1iZXJdLCBbYiwgY106IFtzdHJpbmcsIEdhbmdPdGhlckluZm9PYmplY3RdKTogW2Jvb2xlYW4sIG51bWJlcl0gPT4gW2cuZ2V0Q2hhbmNlVG9XaW5DbGFzaChiKSA+IDAuNSAmJiBhWzBdLCBhWzFdICsgYy5wb3dlcl0sIFtmYWxzZSwgMF0pLFxuICBhID0gKGopID0+XG4gICAgZ1xuICAgICAgLmdldE1lbWJlck5hbWVzKClcbiAgICAgIC5tYXAoXG4gICAgICAgIChtKSA9PiAoXG4gICAgICAgICAgZy5nZXRFcXVpcG1lbnROYW1lcygpLm1hcCgoaSkgPT4gZy5wdXJjaGFzZUVxdWlwbWVudChtLCBpKSksXG4gICAgICAgICAgW1wiYWdpXCIsIFwic3RyXCIsIFwiZGVmXCIsIFwiZGV4XCJdLnJlZHVjZSgoYSwgYikgPT4gYSArIGcuZ2V0QXNjZW5zaW9uUmVzdWx0KG0pPy5bYl0sIDApID4gNiAmJiBnLmFzY2VuZE1lbWJlcihtKSxcbiAgICAgICAgICBnLnNldE1lbWJlclRhc2soXG4gICAgICAgICAgICBtLFxuICAgICAgICAgICAgaiA/PyBnLmdldFRhc2tOYW1lcygpLnJlZHVjZSgoYSwgYikgPT5cbiAgICAgICAgICAgICAgKGcuc2V0TWVtYmVyVGFzayhtLCBiKSwgKGkpID0+IChpIDwgYS5nID8gYSA6IHsgbjogYiwgZzogaSB9KSkoXG4gICAgICAgICAgICAgICAgZy5nZXRNZW1iZXJJbmZvcm1hdGlvbihtKVtnLmdldE1lbWJlck5hbWVzKCkubGVuZ3RoID4gOSA/IFwibW9uZXlHYWluXCIgOiBcInJlc3BlY3RHYWluXCJdLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKS5uLFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICksXG4pIHtcbiAgKFxuICAgIChnLmluR2FuZygpIHx8IGcuY3JlYXRlR2FuZyhcIlNsdW0gU25ha2VzXCIpKVxuICAgICYmIChcbiAgICAgIGcucmVjcnVpdE1lbWJlcihNYXRoLnJhbmRvbSgpKSxcbiAgICAgIGcuc2V0VGVycml0b3J5V2FyZmFyZShxKClbMF0pLFxuICAgICAgYSh1bmRlZmluZWQpLFxuICAgICAgYXdhaXQgcygxNWUzKSxcbiAgICAgIGEoXCJUcmFpbiBDb21iYXRcIiksXG4gICAgICBhd2FpdCBzKDQ1MDApLFxuICAgICAgYShcIlRlcnJpdG9yeSBXYXJmYXJlXCIpLFxuICAgICAgYXdhaXQgdCgxKSxcbiAgICAgIGF3YWl0IGdvbGZlZEdhbmcobilcbiAgICApXG4gIClcbn1cblxudHlwZSBQbGF5ZXJFeHAgPSB7XG4gIGhhY2tpbmc6IG51bWJlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJzbShuczogTlMpIHtcbiAgbnMuZGlzYWJsZUxvZyhcIkFMTFwiKTtcbiAgbnMuZW5hYmxlTG9nKFwiZXhlY1wiKTtcbiAgY29uc3QgaGFja19wZXJjZW50YWdlID0gMC4wMTtcbiAgY29uc3QgYmF0Y2hfZGVsYXkgPSAyMDtcbiAgY29uc3Qgd3JpdGVfd29ya2VycyA9ICgpID0+XG4gICAgW1wiaGFja1wiLCBcImdyb3dcIiwgXCJ3ZWFrZW5cIl0uZm9yRWFjaChcbiAgICAgIChzY3JpcHQpID0+IChcbiAgICAgICAgIW5zLmZpbGVFeGlzdHMoc2NyaXB0KSAmJlxuICAgICAgICBucy53cml0ZShcbiAgICAgICAgICBgJHtzY3JpcHR9LmpzYCxcbiAgICAgICAgICBgZXhwb3J0IGNvbnN0IG1haW4gPSBhc3luYyBucyA9PiBhd2FpdCBucy4ke3NjcmlwdH0obnMuYXJnc1swXSwgeyBhZGRpdGlvbmFsTXNlYzogbnMuYXJnc1sxXSB9KWAsXG4gICAgICAgICAgXCJ3XCIsXG4gICAgICAgICksXG4gICAgICAgIHNHZXQobnMpLmZvckVhY2goKHNlcnZlcikgPT4gbnMuc2NwKGAke3NjcmlwdH0uanNgLCBzZXJ2ZXIpKVxuICAgICAgKSxcbiAgICApO1xuICBjb25zdCBnZXRIb3N0UmFtID0gKHNlcnZlcikgPT4gTWF0aC5mbG9vcihnZXRGcmVlUmFtKG5zLCBzZXJ2ZXIpIC0gKHNlcnZlciA9PSBcImhvbWVcIiA/IDEwMCA6IDApKTtcbiAgY29uc3QgbW9kUGxheWVyID0gKHBsYXllciwgdGhyZWFkcywgdGFyZ2V0KSA9PlxuICAgIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIE9iamVjdC5lbnRyaWVzKHBsYXllcikubWFwKFxuICAgICAgICAoW2tleSwgZW50cnldOiBbc3RyaW5nLCBQbGF5ZXJFeHBdKSA9PiAoXG4gICAgICAgICAga2V5ID09IFwiZXhwXCIgJiYgKGVudHJ5LmhhY2tpbmcgKz0gbnMuZm9ybXVsYXMuaGFja2luZy5oYWNrRXhwKHRhcmdldCwgcGxheWVyKSAqIHRocmVhZHMpLFxuICAgICAgICAgIGtleSA9PSBcInNraWxsc1wiICYmXG4gICAgICAgICAgKGVudHJ5LmhhY2tpbmcgPSBucy5mb3JtdWxhcy5za2lsbHMuY2FsY3VsYXRlU2tpbGwocGxheWVyLmV4cC5oYWNraW5nLCBwbGF5ZXIubXVsdHMuaGFja2luZykpLFxuICAgICAgICAgIFtrZXksIGVudHJ5XVxuICAgICAgICApLFxuICAgICAgKSxcbiAgICApO1xuICBjb25zdCBzZW5kSm9icyA9IChiX29iaiwgcF9vYmopID0+IChcbiAgICAoYl9vYmoudGhyZWFkcyA9IE1hdGgubWluKGJfb2JqLmF2YWlsYWJsZSwgYl9vYmouc2NyaXB0LmpvYnMpKSxcbiAgICAoYl9vYmouYXZhaWxhYmxlIC09IGJfb2JqLnRocmVhZHMpLFxuICAgIChiX29iai5zY3JpcHQuam9icyAtPSBiX29iai50aHJlYWRzKSxcbiAgICBiX29iai50aHJlYWRzID4gMCAmJlxuICAgICAgISFucy5leGVjKGAke2Jfb2JqLnNjcmlwdC5uYW1lfS5qc2AsIGJfb2JqLmhvc3QsIGJfb2JqLnRocmVhZHMsIGJfb2JqLnRhcmdldC5ob3N0bmFtZSwgYl9vYmouc2NyaXB0LnRpbWUpXG4gICAgICA/IGJfb2JqLmF2YWlsYWJsZSA+IDAgJiYgYl9vYmouc2NyaXB0LmpvYnMgPiAxXG4gICAgICAgID8gc2VuZEpvYnMoYl9vYmosIG1vZFBsYXllcihwX29iaiwgYl9vYmoudGhyZWFkcywgYl9vYmoudGFyZ2V0KSlcbiAgICAgICAgOiBtb2RQbGF5ZXIocF9vYmosIGJfb2JqLnRocmVhZHMsIGJfb2JqLnRhcmdldClcbiAgICAgIDogcF9vYmpcbiAgKTtcblxuICBhc3luYyBmdW5jdGlvbiBydW5Mb29wKHJ1bl9wX29iaikge1xuXG4gICAgIW5zLmlzUnVubmluZyhcInNoYXJlLmpzXCIpICYmXG4gICAgICBucy5ydW4oXCJzaGFyZS5qc1wiLCBNYXRoLmZsb29yKDAuMjUgKiAoZ2V0RnJlZVJhbShucywgXCJob21lXCIpIC8gbnMuZ2V0U2NyaXB0UmFtKFwic2hhcmUuanNcIikpKSB8fCAxKTtcbiAgICB3cml0ZV93b3JrZXJzKCk7XG4gICAgY29uc3QgaG9zdF9saXN0ID0gc0dldChucykuZmlsdGVyKChzZXJ2ZXIpID0+IG5zLmhhc1Jvb3RBY2Nlc3Moc2VydmVyKSAmJiBzZXJ2ZXIuc3Vic3RyaW5nKDAsIDcpICE9IFwiaGFja25ldFwiKTtcbiAgICBjb25zdCBnZXRBdmFpbGFibGVUaHJlYWRzID0gKHNjcmlwdCkgPT5cbiAgICAgIGhvc3RfbGlzdC5yZWR1Y2UoKGEsIHNlcnZlcikgPT4gYSArIE1hdGguZmxvb3IoZ2V0SG9zdFJhbShzZXJ2ZXIpIC8gbnMuZ2V0U2NyaXB0UmFtKGAke3NjcmlwdC5uYW1lfS5qc2ApKSwgMCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gbnMuZ2V0U2VydmVyKFxuICAgICAgaG9zdF9saXN0LnJlZHVjZSgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCByYW5rID0gKHMpID0+IG5zLmdldFNlcnZlck1heE1vbmV5KHMpIC8gbnMuZ2V0U2VydmVyTWluU2VjdXJpdHlMZXZlbChzKTtcbiAgICAgICAgcmV0dXJuIG5zLmdldFNlcnZlclJlcXVpcmVkSGFja2luZ0xldmVsKGIpIDw9IG5zLmdldEhhY2tpbmdMZXZlbCgpIC8gMiAmJiByYW5rKGEpIDwgcmFuayhiKSA/IGIgOiBhO1xuICAgICAgfSksXG4gICAgKSE7XG4gICAgY29uc3QgY2xhbXAgPSAobikgPT4gKG4gPCAxIHx8IG4gPT0gSW5maW5pdHkgPyAxIDogbik7XG4gICAgY29uc3QgaGFja19qb2JzID0gMTtcbiAgICBjb25zdCBncm93X2pvYnMgPVxuICAgICAgMSArIG5zLmdyb3d0aEFuYWx5emUodGFyZ2V0Lmhvc3RuYW1lLCAxIC8gKDEgLSBucy5mb3JtdWxhcy5oYWNraW5nLmhhY2tQZXJjZW50KHRhcmdldCwgcnVuX3Bfb2JqKSAqIGhhY2tfam9icykpO1xuICAgIGNvbnN0IHNlY19qb2JzID0gKHRhcmdldC5oYWNrRGlmZmljdWx0eSAtIHRhcmdldC5taW5EaWZmaWN1bHR5KSAvIG5zLndlYWtlbkFuYWx5emUoMSk7XG4gICAgY29uc3Qgd2Vrbl9qb2JzID0gc2VjX2pvYnMgKyBoYWNrX2pvYnMgKiAwLjA0ICsgZ3Jvd19qb2JzICogMC4wODtcbiAgICBjb25zdCBiYXRjaF90b3RhbCA9IGhhY2tfam9icyArIGdyb3dfam9icyArIHdla25fam9icztcbiAgICBjb25zdCBzcXVpc2ggPSAoc2NyaXB0LCBqb2JzKSA9PlxuICAgICAgTWF0aC5mbG9vcihiYXRjaF90b3RhbCA+IGdldEF2YWlsYWJsZVRocmVhZHMoc2NyaXB0KSA/IGpvYnMgKiAoZ2V0QXZhaWxhYmxlVGhyZWFkcyhzY3JpcHQpIC8gYmF0Y2hfdG90YWwpIDogam9icyk7XG4gICAgY29uc3Qgam9ic19hcnJheSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJoYWNrXCIsXG4gICAgICAgIGpvYnM6IHNxdWlzaChcImhhY2tcIiwgaGFja19qb2JzKSxcbiAgICAgICAgdGltZTogbnMuZ2V0SGFja1RpbWUodGFyZ2V0Lmhvc3RuYW1lKSAqIDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImdyb3dcIixcbiAgICAgICAgam9iczogc3F1aXNoKFwiZ3Jvd1wiLCBncm93X2pvYnMpLFxuICAgICAgICB0aW1lOiBucy5nZXRIYWNrVGltZSh0YXJnZXQuaG9zdG5hbWUpICogMC44LFxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogXCJ3ZWFrZW5cIiwgam9iczogc3F1aXNoKFwid2Vha2VuXCIsIHdla25fam9icyksIHRpbWU6IDAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGJhdGNoX2NvbXBsZXRlX3Bfb2JqID0gam9ic19hcnJheS5yZWR1Y2UoXG4gICAgICAoXywgc2NyaXB0KSA9PlxuICAgICAgICBob3N0X2xpc3QucmVkdWNlKFxuICAgICAgICAgIChfMiwgaG9zdCkgPT5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBob3N0cyBhbmQgZmlsbCBlYWNoIG9uZSB3aXRoIGpvYnMgdW50aWwgZG9uZVxuICAgICAgICAgICAgc2VuZEpvYnMoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGU6IE1hdGguZmxvb3IoZ2V0SG9zdFJhbShob3N0KSAvIG5zLmdldFNjcmlwdFJhbShgJHtzY3JpcHQubmFtZX0uanNgKSksXG4gICAgICAgICAgICAgICAgc2NyaXB0LFxuICAgICAgICAgICAgICAgIGhvc3QsXG4gICAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBydW5fcF9vYmosXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHt9LFxuICAgICAgICApLFxuICAgICAge30sXG4gICAgKTtcbiAgICBucy5jbGVhclBvcnQobnMucGlkKSxcbiAgICAgIG5zLndyaXRlUG9ydChucy5waWQsIHRhcmdldC5ob3N0bmFtZSksXG4gICAgICBhd2FpdCB1dGlsLnNscChiYXRjaF9kZWxheSksXG4gICAgICBhd2FpdCBydW5Mb29wKGJhdGNoX2NvbXBsZXRlX3Bfb2JqKTtcbiAgfVxuICBhd2FpdCBydW5Mb29wKGF3YWl0IFJ1bihucywgXCJnZXRQbGF5ZXJcIikpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBuZW9mZXRjaChuczogTlMpIHtcbiAgY29uc3QgYmxrID0gXCJcXHUyNTg4XCI7XG4gIGNvbnN0IGNvbF9hcnIgPSBbdXRpbC5hbnNpLmssIHV0aWwuYW5zaS5yLCB1dGlsLmFuc2kuZywgdXRpbC5hbnNpLnksIHV0aWwuYW5zaS5iLCB1dGlsLmFuc2kubSwgdXRpbC5hbnNpLmNdO1xuICBjb25zdCBkYXRlRm9ybWF0ID0gKGRhdGUpID0+XG4gICAgYCR7TWF0aC5mbG9vcihkYXRlIC8gKDYwICogMjQpKX0gZGF5cywgJHtNYXRoLmZsb29yKChkYXRlIC8gNjApICUgMjQpfSBob3VycywgJHtNYXRoLmZsb29yKGRhdGUgJSA2MCl9IG1pbnNgO1xuICBjb25zdCBwYWQgPSBgIGAucmVwZWF0KDM1KTtcbiAgY29uc3QgdGl0bGUgPSBgbXVlc2xpQGhvbWVgO1xuICBjb25zdCBkYXNoZXMgPSB1dGlsLmFuc2kudyArIFwiLVwiLnJlcGVhdCgxMSk7XG4gIGNvbnN0IG9zID0gYCR7dXRpbC5hbnNpLmd9T1M6ICR7dXRpbC5hbnNpLnd9RnVsY3J1bSBUZWNobm9sb2dpZXMgQ2hhcGVhdSBMaW51eCB4ODZfNjRgO1xuICBjb25zdCBob3N0ID0gYCR7dXRpbC5hbnNpLmd9SG9zdDogJHt1dGlsLmFuc2kud30ke25zLmdldEhvc3RuYW1lKCl9YDtcbiAgY29uc3Qga2VybmVsID0gYCR7dXRpbC5hbnNpLmd9S2VybmVsOiAke3V0aWwuYW5zaS53fSR7Q09OLkRPQy50aXRsZX1gO1xuICBjb25zdCB1cHRpbWUgPSBgJHt1dGlsLmFuc2kuZ31VcHRpbWU6ICR7dXRpbC5hbnNpLnd9JHtkYXRlRm9ybWF0KG5zLmdldFBsYXllcigpLnRvdGFsUGxheXRpbWUgLyAoMWUzICogNjApKX1gO1xuICBjb25zdCBwYWNrYWdlcyA9IGAke3V0aWwuYW5zaS5nfVBhY2thZ2VzOiAke3V0aWwuYW5zaS53fSR7bnMubHMoXCJob21lXCIpLmxlbmd0aH0gKGJpdHBrZylgO1xuICBjb25zdCBzaGVsbCA9IGAke3V0aWwuYW5zaS5nfVNoZWxsOiAke3V0aWwuYW5zaS53fWJpdC1zaCA2LjlgO1xuICBjb25zdCByZXNvbHV0aW9uID0gYCR7dXRpbC5hbnNpLmd9UmVzb2x1dGlvbjogJHt1dGlsLmFuc2kud30ke0NPTi5XSU4uaW5uZXJXaWR0aH0geCAke0NPTi5XSU4uaW5uZXJIZWlnaHR9YDtcbiAgY29uc3Qgd20gPSBgJHt1dGlsLmFuc2kuZ31XTTogJHt1dGlsLmFuc2kud31CaXRCdXJuZXIgV01gO1xuICBjb25zdCB0ZXJtaW5hbCA9IGAke3V0aWwuYW5zaS5nfVRlcm1pbmFsOiAke3V0aWwuYW5zaS53fUJpVFRZYDtcbiAgY29uc3QgY3B1ID0gYCR7dXRpbC5hbnNpLmd9Q1BVOiAke3V0aWwuYW5zaS53fUdlbiBGVC02OTAweCAke25zLmdldFNlcnZlcihcImhvbWVcIikuY3B1Q29yZXN9IGNvcmVgO1xuICBjb25zdCBtZW1vcnkgPSBgJHt1dGlsLmFuc2kuZ31NZW1vcnk6ICR7dXRpbC5hbnNpLnd9JHtucy5nZXRTZXJ2ZXIoXCJob21lXCIpLnJhbVVzZWQgKiAxZTN9IE1pQiAvICR7bnMuZ2V0U2VydmVyKFwiaG9tZVwiKS5tYXhSYW0gKiAxZTN9IE1pQmA7XG4gIGNvbnN0IGFzY2lpID0gW1xuICAgIGAke3BhZH0ke3V0aWwuYW5zaS5nfW5lb2ZldGNoIH5gLFxuICAgIGAgICAgJHt1dGlsLmFuc2kuZ31GRkZGRkZGRlxcXFwke3V0aWwuYW5zaS5yfS4uLi4uLi4ke3V0aWwuYW5zaS5nfVRUVFRUVFRUXFxcXCAgICAgICR7dGl0bGV9YCxcbiAgICBgICAgICR7dXRpbC5hbnNpLmd9RkYgXFxcXF9fX19ffCR7dXRpbC5hbnNpLnJ9On46fjp+JHt1dGlsLmFuc2kuZ31cXFxcX19UVCBcXFxcX198ICAgICAke2Rhc2hlc31gLFxuICAgIGAgICAgJHt1dGlsLmFuc2kuZ31GRiB8JHt1dGlsLmFuc2kucn06PTo9Oj06PTo9Oj06PToke3V0aWwuYW5zaS5nfVRUIHwke3V0aWwuYW5zaS5yfT1cXFxcICAgICAgJHtvc31gLFxuICAgIGAgICAke3V0aWwuYW5zaS5yfS8ke3V0aWwuYW5zaS5nfUZGRkZGXFxcXCR7dXRpbC5hbnNpLnJ9LSotKi0qLSotKi0qLSR7dXRpbC5hbnNpLmd9VFQgfCR7dXRpbC5hbnNpLnJ9Ki1cXFxcICAgICAke2hvc3R9YCxcbiAgICBgICAke3V0aWwuYW5zaS5yfS8qJHt1dGlsLmFuc2kuZ31GRiBcXFxcX198JHt1dGlsLmFuc2kucn0qKioqKioqKioqKioke3V0aWwuYW5zaS5nfVRUIHwke3V0aWwuYW5zaS5yfSoqKlxcXFwgICAgJHtrZXJuZWx9YCxcbiAgICBgICAke3V0aWwuYW5zaS5yfT09JHt1dGlsLmFuc2kuZ31GRiB8JHt1dGlsLmFuc2kucn09PT09JHt1dGlsLmFuc2kuZ31DQ0NDQ0NcXFxcJHt1dGlsLmFuc2kucn09PT09JHt1dGlsLmFuc2kuZ31UVCB8JHt1dGlsLmFuc2kucn09PT09XFxcXCAgICR7dXB0aW1lfWAsXG4gICAgYCAgJHt1dGlsLmFuc2kucn0jIyR7dXRpbC5hbnNpLmd9RkYgfCR7dXRpbC5hbnNpLnJ9IyMjJHt1dGlsLmFuc2kuZ31DQ0MgX19DQ1xcXFwke3V0aWwuYW5zaS5yfSMjIyR7dXRpbC5hbnNpLmd9VFQgfCR7dXRpbC5hbnNpLnJ9IyMjI3x8ICAke3BhY2thZ2VzfWAsXG4gICAgYCAgJHt1dGlsLmFuc2kucn09PSR7dXRpbC5hbnNpLmd9XFxcXF9cXFxcfCR7dXRpbC5hbnNpLnJ9PT09JHt1dGlsLmFuc2kuZ31DQyAvJHt1dGlsLmFuc2kucn09PSR7dXRpbC5hbnNpLmd9XFxcXF9ffCR7dXRpbC5hbnNpLnJ9PT0ke3V0aWwuYW5zaS5nfVxcXFxfXFxcXHwke3V0aWwuYW5zaS5yfT09PT18fCAgJHtzaGVsbH1gLFxuICAgIGAgICR7dXRpbC5hbnNpLnJ9XFxcXCoqKioqKioqJHt1dGlsLmFuc2kuZ31DQyB8JHt1dGlsLmFuc2kucn0qKioqKioqKioqKioqKiovXFxcXHwgICR7cmVzb2x1dGlvbn1gLFxuICAgIGAgICAke3V0aWwuYW5zaS5yfVxcXFwqLSotKi0qJHt1dGlsLmFuc2kuZ31DQyB8JHt1dGlsLmFuc2kucn0tKi0qLSotKi0qLSotKi8gLyAgICR7d219YCxcbiAgICBgICAgICR7dXRpbC5hbnNpLnJ9XFxcXDo9Oj06PSR7dXRpbC5hbnNpLmd9Q0MgfCR7dXRpbC5hbnNpLnJ9Oj0ke3V0aWwuYW5zaS5nfUNDXFxcXCR7dXRpbC5hbnNpLnJ9PTo9Oj06PTovIC8gICAgJHt0ZXJtaW5hbH1gLFxuICAgIGAgICAgICR7dXRpbC5hbnNpLnJ9XFxcXH46fjp+JHt1dGlsLmFuc2kuZ31cXFxcQ0NDQ0NDICB8JHt1dGlsLmFuc2kucn1+On46fjovIC8gICAgICR7Y3B1fWAsXG4gICAgYCAgICAgICR7dXRpbC5hbnNpLnJ9XFxcXF9fX19fJHt1dGlsLmFuc2kuZ31cXFxcX19fX19cXFxcLyR7dXRpbC5hbnNpLnJ9X19fX19fLyAvICAgICAgJHttZW1vcnl9YCxcbiAgICBgICAgICAgICR7dXRpbC5hbnNpLnJ9XFxcXF9fX19fX19fX19fX19fX19fX1xcXFwvYCxcbiAgICBwYWQgKyBbLi4uY29sX2FyciwgdXRpbC5hbnNpLmQsIFwiXCJdLmpvaW4oYmxrLnJlcGVhdCg0KSksXG4gICAgcGFkICsgWy4uLmNvbF9hcnIsIHV0aWwuYW5zaS53LCBcIlwiXS5qb2luKGJsay5yZXBlYXQoNCkpLFxuICBdO1xuXG4gIChcbiAgICBhd2FpdCBhc2NpaS5mb3JFYWNoQXN5bmMoYXN5bmMgbCA9PiAobnMudHByaW50ZihsKSwgYXdhaXQgdXRpbC5zbHAoTWF0aC5yYW5kb20oKSAqIDEwICogNykpKVxuICApXG59XG5cblxuXG4vKiogQHBhcmFtIHtOU30gbnMgKi9cbmZ1bmN0aW9uIGNoZWNrQm91bmRzKG5zLCB0KSB7XG4gIGxldCByZXR1cm52YWwgPSB7IHg6IDAsIHk6IDAgfSxcbiAgICB4ID0gdC54LFxuICAgIHkgPSB0LnksXG4gICAgdyA9IHQud2lkdGgsXG4gICAgaCA9IHQuaGVpZ2h0LFxuICAgIG90aGVycHJvZ3MgPSBucy5wcygpLm1hcChwID0+IG5zLmdldFJ1bm5pbmdTY3JpcHQocC5waWQpPy50YWlsUHJvcGVydGllcykuZmlsdGVyKHAgPT4gcCk7XG4gIG90aGVycHJvZ3MuZm9yRWFjaChwcm9nID0+IHtcbiAgICBpZiAocHJvZy54ID4geCArIHcpIHJldHVybnZhbC54IC0gNTA7XG4gICAgaWYgKHByb2cueCArIHByb2cud2lkdGggPCB4KSByZXR1cm52YWwueCArIDUwO1xuICB9XG4gICk7XG4gIHJldHVybiByZXR1cm52YWw7XG59XG5cblxuZnVuY3Rpb24gem9vbWllQ2FsYyhkOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gZCA+IDUwMFxuICAgID8gMS4yXG4gICAgOiBkID4gNzAwMFxuICAgICAgPyAwLjVcbiAgICAgIDogZCA+IDE1MDAwXG4gICAgICAgID8gMC4yXG4gICAgICAgIDogZCA+IDE1MDAwXG4gICAgICAgICAgPyAwIC8vIEdvIHRvIHNsZWVwXG4gICAgICAgICAgOiAyOyAvLyBFeGNpdGVkIG1vZGUhXG59XG5cbmZ1bmN0aW9uIHBvb3BDaGVjayhucywgdGltZXN0YW1wLCBoYXBwaW5lc3MpIHtcbiAgaWYgKHRpbWVzdGFtcCArIDYwMDAwIDwgKyhuZXcgRGF0ZSgpKSkgcmV0dXJuIGhhcHBpbmVzcztcbiAgcmV0dXJuIGhhcHBpbmVzcyAtIG5zLnBzKCkuZmlsdGVyKHAgPT4gcC5maWxlbmFtZSA9PT0gXCJwb29wLmpzXCIpLmxlbmd0aFxufVxuXG5cblxuXG5cbmFzeW5jIGZ1bmN0aW9uIGRvd25Eb2cobnM6IE5TLCBwcmV2cG9zeDogbnVtYmVyLCBwcmV2cG9zeTogbnVtYmVyKSB7XG4gIGZ1bmN0aW9uIHBvb3AobnM6IE5TLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcG9vcHBpZDogbnVtYmVyKSB7XG4gICAgKFxuICAgICAgbnMud3JpdGUoXCJwb29wLmpzXCIsIHBvb3BTY3JpcHQsIFwid1wiKSxcbiAgICAgIHBvb3BwaWQgPSBucy5ydW4oXCJwb29wLmpzXCIpLFxuICAgICAgbnMudGFpbChwb29wcGlkKSxcbiAgICAgIG5zLnJlc2l6ZVRhaWwoMTUwLCAxMDAsIHBvb3BwaWQpLFxuICAgICAgbnMubW92ZVRhaWwoeCwgeSwgcG9vcHBpZClcbiAgICApXG4gIH1cbiAgZnVuY3Rpb24gc3RlcChucywgem9vbWlldmFsdWUsIHRhcmdldCwgYm9vbCA9IDEsIHJhbmRib29sID0gdHJ1ZSkge1xuICAgIGxldCBzY3JlZW5yYXRpbyA9IHdpbi5pbm5lckhlaWdodCAvIHdpbi5pbm5lcldpZHRoLFxuICAgICAgeCA9IHRnZXQobnMpLngsXG4gICAgICB5ID0gdGdldChucykueTtcbiAgICBpZiAodGFyZ2V0LnggPiB4KSB7IHggKz0gKHJuKCkgKiB6b29taWV2YWx1ZSkgKiAyICogKDEwICogem9vbWlldmFsdWUpOyB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LnggPCB4KSB7IHggLT0gKHJuKCkgKiB6b29taWV2YWx1ZSkgKiAyICogKDEwICogem9vbWlldmFsdWUpIH1cbiAgICBpZiAocm4oKSAtIDAuNSA+IDApIGJvb2wgPSAtMVxuICAgIGlmICh6b29taWV2YWx1ZSAmJiByYW5kYm9vbCkge1xuICAgICAgeCArPSAzICogcm4oKSAqIGJvb2w7XG4gICAgICB5ICs9IDMgKiBybigpICogYm9vbCAqIHNjcmVlbnJhdGlvO1xuICAgIH1cbiAgICBsZXQgYm91bmRzYWRqdXN0ID0gY2hlY2tCb3VuZHMobnMsIHRnZXQobnMpKVxuICAgIHggKz0gYm91bmRzYWRqdXN0Lng7XG4gICAgcmV0dXJuIHsgZHg6IHgsIGR5OiB3aW4uaW5uZXJIZWlnaHQgLSAyMDAgfTtcbiAgfVxuXG4gIGNvbnN0IHdpbiA9IGV2YWwoXCJ3aW5kb3dcIilcbiAgY29uc3QgZG9jID0gZXZhbChcImRvY3VtZW50XCIpXG4gIGNvbnN0IHJuID0gTWF0aC5yYW5kb21cbiAgY29uc3QgdGdldCA9IChucykgPT4gbnMuZ2V0UnVubmluZ1NjcmlwdCgpLnRhaWxQcm9wZXJ0aWVzID8/IG5zLmV4aXQoKVxuICBjb25zdCBuYW1lcyA9IFtcIldpY2tlc1wiLCBcIlVwZG9nXCIsIFwiTWlrYXNhXCIsIFwiU251ZmZsZXNcIiwgXCJCb3Jpc1wiLCBcIkduYXNoZXJcIiwgXCJEb3VnXCIsIFwiQ2hlc3RlclwiXVxuICBjb25zdCBiYXJrID0gKG5zLCBiYXJrKSA9PiBucy5wcmludChiYXJrKTtcbiAgYXN5bmMgZnVuY3Rpb24gcG9ydEhhbmRsZShucywgYmFya3ZhbCwgaGFwcGluZXNzKSB7XG4gICAgaWYgKG5zLnBlZWsobnMucGlkKSA9PT0gXCJOVUxMIFBPUlQgREFUQVwiKSByZXR1cm4geyBiYXJrOiB1bmRlZmluZWQsIGhhcHBpbmVzczogaGFwcGluZXNzIH07XG4gICAgbnMuY2xlYXJQb3J0KG5zLnBpZClcbiAgICBiYXJrdmFsID0geyBiYXJrOiBcIipXQUdTXFxuVEFJTCpcIiwgdGltZTogMTUwMCB9XG4gICAgaGFwcGluZXNzICs9IDEwMDA7XG4gICAgcmV0dXJuIHsgYmFyazogYmFya3ZhbCwgaGFwcGluZXNzOiBoYXBwaW5lc3MgfTtcbiAgfVxuICBucy53cml0ZShcInBldHRlci5qc1wiLCBkb2dQZXR0ZXIsIFwid1wiKTtcbiAgY29uc3QgcmVtbmFtID0gbmFtZXMuZmlsdGVyKG5hbWUgPT4gIW5zLnBzKCkubWFwKHByb2cgPT4gbnMuZ2V0UnVubmluZ1NjcmlwdChwcm9nLnBpZCkudGl0bGUpLmluY2x1ZGVzKG5hbWUpKVxuICBucy5zZXRUaXRsZShucy5hcmdzWzBdID8/IHJlbW5hbVtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByZW1uYW0ubGVuZ3RoIC0gMSldKVxuICBucy5nZXRSdW5uaW5nU2NyaXB0KFwicGV0dGVyLmpzXCIpID8/IG5zLnJ1bihcInBldHRlci5qc1wiKVxuICBucy5kaXNhYmxlTG9nKCdBTEwnKVxuICBsZXQgcG9zID0geyB4OiB1bmRlZmluZWQsIHk6IHVuZGVmaW5lZCB9XG4gIHdpbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICBwb3MgPSB7IHg6IGV2ZW50LmNsaWVudFggLSAxMDAsIHk6IGV2ZW50LmNsaWVudFkgLSA1MCB9O1xuICB9KTtcbiAgbnMudGFpbCgpXG5cbiAgbGV0IGhhcHBpbmVzcyA9IDEwMDAwO1xuICBsZXQgdGltZXN0YW1wID0gKyhuZXcgRGF0ZSgpKTtcbiAgbGV0IHp6emNvdW50ID0gMDtcbiAgbGV0IHRpY2tlciA9IDA7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgbnMuY2xlYXJMb2coKTtcbiAgICBjb25zdCBbeCwgeV0gPSBbdGdldChucykueCwgdGdldChucykueSAtIDUwXSAvLyBjZW50cmUgb24gdGhlIGJveFxuICAgIGxldCBkZWxheSA9IDEwMFxuICAgIGxldCB6b29taWV2YWx1ZSA9IHpvb21pZUNhbGModGlja2VyKTtcbiAgICBjb25zdCBhc2NpaSA9IHBvcy54ID4geCA/IENPTi5ET0dHT19BU0NJSVswXSA6IENPTi5ET0dHT19BU0NJSVsxXTtcbiAgICBsZXQgZHZhciA9IHN0ZXAobnMsIHpvb21pZXZhbHVlLCBwb3MpO1xuICAgIGxldCBwb3J0aGFuZGxlcmV0dXJuID0gYXdhaXQgcG9ydEhhbmRsZShucywgZGVsYXksIGhhcHBpbmVzcylcbiAgICBsZXQgYmFya3ZhbCA9IHBvcnRoYW5kbGVyZXR1cm4/LmJhcms7XG4gICAgaGFwcGluZXNzID0gcG9ydGhhbmRsZXJldHVybj8uaGFwcGluZXNzO1xuICAgIGlmIChybigpICogMTAwID4gKDEwMCAtICgyICogem9vbWlldmFsdWUpKSAmJiAhIXpvb21pZXZhbHVlKSB7XG4gICAgICBiYXJrdmFsID0geyBiYXJrOiAnXCJCQVJLXCInLCB0aW1lOiA1MDAgfTtcbiAgICAgIGlmIChwb3MueCA8IHggKyAxMDAgJiYgcG9zLnkgPCB5ICsgMTAwICYmIHBvcy54ID4geCAtIDEwMCAmJiBwb3MueSA+IHkgLSAxMDApIGJhcmt2YWwgPSB7IGJhcms6IFwiKkxJQ0tTXFxuQ1VSU09SKlwiLCB0aW1lOiA3MDAgfTtcbiAgICAgIGRlbGF5ICs9IDYwMFxuICAgIH1cbiAgICBoYXBwaW5lc3MgPSBwb29wQ2hlY2sobnMsIHRpbWVzdGFtcCwgaGFwcGluZXNzKVxuICAgIGlmICghem9vbWlldmFsdWUpIHtcbiAgICAgIGRlbGF5ICs9IDEwMDBcbiAgICAgIHp6emNvdW50ID4gMyA/IHp6emNvdW50ID0gMSA6IHp6emNvdW50Kys7XG4gICAgICBucy5wcmludChcInpcIi5yZXBlYXQoenp6Y291bnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBucy5wcmludChgaGFwcGluZXNzOiAke01hdGgucm91bmQoaGFwcGluZXNzIC8gMTAwMCl9YClcbiAgICB9XG4gICAgaWYgKHpvb21pZXZhbHVlICYmIHJuKCkgKiAxMDAwIDwgMSkgcG9vcChucywgeCwgeSArIDE1MCwgdW5kZWZpbmVkKTtcbiAgICBucy5wcmludChiYXJrdmFsID09PSB1bmRlZmluZWQgPyBhc2NpaSA6IGJhcmsobnMsIGJhcmt2YWwuYmFyaykpO1xuICAgIG5zLnJlc2l6ZVRhaWwoMjUwLCAyMDApXG4gICAgbnMubW92ZVRhaWwoZHZhci5keCwgZHZhci5keSk7XG4gICAgYmFya3ZhbCA9PSB1bmRlZmluZWQgPyBhd2FpdCBucy5zbGVlcChkZWxheSkgOiBhd2FpdCBucy5zbGVlcChiYXJrdmFsLnRpbWUpXG4gICAgYmFya3ZhbCA9PSB1bmRlZmluZWQgPyB0aWNrZXIgKz0gMTAwIDogdGlja2VyICs9IGJhcmt2YWwudGltZVxuICAgIGlmIChwb3MueCAhPT0gcHJldnBvc3ggJiYgcG9zLnkgIT09IHByZXZwb3N5KSB0aWNrZXIgPSAwO1xuICAgIHByZXZwb3N4ID0gcG9zLngsIHByZXZwb3N5ID0gcG9zLnk7XG4gICAgaWYgKHRpbWVzdGFtcCArIDYwMDAwIDwgKyhuZXcgRGF0ZSgpKSkgdGltZXN0YW1wID0gKyhuZXcgRGF0ZSgpKVxuICAgIG5zLmF0RXhpdCgocGlkID0gbnMucGlkKSA9PiAobnMua2lsbChcInBldHRlci5qc1wiKSwgbnMuY2xvc2VUYWlsKHBpZCkpKTtcbiAgfVxufVxuXG5jb25zdCBwb29wU2NyaXB0ID0gJ2V4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zKSB7bnMuZGlzYWJsZUxvZyhcIkFMTFwiKTtucy5hdEV4aXQoKCkgPT4gbnMuY2xvc2VUYWlsKG5zLnBpZCkpO25zLnByaW50UmF3KFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7fSwgXCJcdUQ4M0RcdURDQTlcIikpO3doaWxlKDEpIHtucy5nZXRSdW5uaW5nU2NyaXB0KCkudGFpbFByb3BlcnRpZXMgPz8gbnMuZXhpdCgpOyBhd2FpdCBucy5zbGVlcCgxMDAwMCl9fSc7XG5cbi8vIGNyZWRpdCB5aWNoaXpobmdcbmNvbnN0IGRvZ1BldHRlciA9IGAvKiogQHBhcmFtIHtOU30gbnMgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zKSB7XG4gICAgY29uc3Qgd2luID0gZXZhbChcIndpbmRvd1wiKVxuICAgIG5zLmRpc2FibGVMb2coJ0FMTCcpXG4gICAgbGV0IHBlbmRpbmdFdmVudCA9IG51bGw7XG4gICAgY29uc3Qgc2NoZWR1bGVQZXQgPSBldmVudCA9PiB7XG4gICAgICBwZW5kaW5nRXZlbnQgPSBldmVudDtcbiAgICB9XG4gICAgbGV0IHBldCA9ICgpID0+IHtcbiAgICAgIGxldCB4ID0gcGVuZGluZ0V2ZW50LmNsaWVudFg7XG4gICAgICBsZXQgeSA9IHBlbmRpbmdFdmVudC5jbGllbnRZIDtcbiAgICAgIC8vIFRPRE86IGNoZWNrIG90aGVyIHNlcnZlcnMgdG9vXG4gICAgICBjb25zdCBwcm9jZXNzZXMgPSBucy5wcygpO1xuICAgICAgZm9yIChjb25zdCBwcm9jZXNzIG9mIHByb2Nlc3Nlcykge1xuICAgICAgICBjb25zdCBzdHVmZiA9IG5zLmdldFJ1bm5pbmdTY3JpcHQocHJvY2Vzcy5waWQpPy50YWlsUHJvcGVydGllcztcbiAgICAgICAgaWYgKCFzdHVmZikgY29udGludWU7XG4gICAgICAgIGlmIChwcm9jZXNzLmZpbGVuYW1lID09ICdwZXR0ZXIuanMnKSBjb250aW51ZTsgIC8vIG5vIHNlbGYtcGV0c1xuICAgICAgICBpZiAoeCA8IHN0dWZmLnggfHwgeCA+IHN0dWZmLnggKyBzdHVmZi53aWR0aCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5IDwgc3R1ZmYueSB8fCB5ID4gc3R1ZmYueSArIHN0dWZmLmhlaWdodCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG5zLnByaW50KFwicGV0dGluZyBcIiArIHByb2Nlc3MuZmlsZW5hbWUpO1xuICAgICAgICBucy53cml0ZVBvcnQocHJvY2Vzcy5waWQsXCJcIik7XG4gICAgICAgIGJyZWFrOyAgLy8gb25seSBwZXQgb25lIHByb2Nlc3MgYXQgYSB0aW1lXG4gICAgICB9XG4gICAgICBwZW5kaW5nRXZlbnQgPSBudWxsO1xuICAgIH07XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNjaGVkdWxlUGV0KTtcbiAgICBucy5hdEV4aXQoKCkgPT4gd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNjaGVkdWxlUGV0KSk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGF3YWl0IG5zLnNsZWVwKDEwKTtcbiAgICAgIGlmIChwZW5kaW5nRXZlbnQpIHtcbiAgICAgICAgcGV0KCk7XG4gICAgICB9XG4gICAgfVxufVx0YFxuXG5cbi8vIENvZGluZyBDb250cmFjdHNcblxuLy8gRm9yIG1vc3Qgb2YgdGhlc2UsIGNyZWRpdCBCcmFuZG9uIC0gaHR0cHM6Ly9kaXNjb3JkLmNvbS9jaGFubmVscy80MTUyMDc1MDgzMDM1NDQzMjEvOTI0ODU0NTgxNDcxNjMzNDE5LzExMzQ0NTQ1NDg1NzcxNDQ5MDNcblxuY29uc3Qgc29sdmVycyA9IHtcbiAgXCJGaW5kIExhcmdlc3QgUHJpbWUgRmFjdG9yXCI6IGZ1bmN0aW9uIChudW1iZXIsIGRpdmlzb3IgPSAyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgXCJTdWJhcnJheSB3aXRoIE1heGltdW0gU3VtXCI6IGZ1bmN0aW9uIChhcnJheSkge1xuICAgIGNvbnN0IHNpemUgPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgbWF4aW50ID0gTWF0aC5wb3coMiwgNTMpO1xuICAgIGxldCBtYXhfc29fZmFyID0gLW1heGludCAtIDE7XG4gICAgbGV0IG1heF9lbmRpbmdfaGVyZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIG1heF9lbmRpbmdfaGVyZSA9IG1heF9lbmRpbmdfaGVyZSArIGFycmF5W2ldO1xuICAgICAgaWYgKG1heF9zb19mYXIgPCBtYXhfZW5kaW5nX2hlcmUpIHtcbiAgICAgICAgbWF4X3NvX2ZhciA9IG1heF9lbmRpbmdfaGVyZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhfZW5kaW5nX2hlcmUgPCAwKSB7XG4gICAgICAgIG1heF9lbmRpbmdfaGVyZSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXhfc29fZmFyO1xuICB9LFxuXG4gIFwiVG90YWwgV2F5cyB0byBTdW1cIjogZnVuY3Rpb24gKG51bWJlcikge1xuICAgIGxldCB3YXlzVG9Gb3JtTnVtYmVyID0gbmV3IEFycmF5KG51bWJlciArIDEpLmZpbGwoMCk7XG4gICAgd2F5c1RvRm9ybU51bWJlclswXSA9IDE7XG4gICAgZm9yIChsZXQgY3VycmVudEludGVnZXIgPSAxOyBjdXJyZW50SW50ZWdlciA8PSBudW1iZXI7IGN1cnJlbnRJbnRlZ2VyKyspIHtcbiAgICAgIGZvciAobGV0IHNlbGVjdGVkSW50ZWdlciA9IGN1cnJlbnRJbnRlZ2VyOyBzZWxlY3RlZEludGVnZXIgPD0gbnVtYmVyOyBzZWxlY3RlZEludGVnZXIrKykge1xuICAgICAgICB3YXlzVG9Gb3JtTnVtYmVyW3NlbGVjdGVkSW50ZWdlcl0gKz0gd2F5c1RvRm9ybU51bWJlcltzZWxlY3RlZEludGVnZXIgLSBjdXJyZW50SW50ZWdlcl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3YXlzVG9Gb3JtTnVtYmVyW251bWJlcl0gLSAxO1xuICB9LFxuXG4gIFwiVG90YWwgV2F5cyB0byBTdW0gSUlcIjogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gYXJyYXlbMF07XG4gICAgY29uc3Qgc2V0X29mX251bXMgPSBhcnJheVsxXTtcbiAgICBsZXQgdGFyZ19hcnJheSA9IG5ldyBBcnJheSh0YXJnZXQgKyAxKS5maWxsKDApO1xuICAgIHRhcmdfYXJyYXlbMF0gPSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0X29mX251bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBzZXRfb2ZfbnVtc1tpXTsgaiA8PSB0YXJnZXQ7IGorKykge1xuICAgICAgICB0YXJnX2FycmF5W2pdICs9IHRhcmdfYXJyYXlbaiAtIHNldF9vZl9udW1zW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdfYXJyYXlbdGFyZ2V0XTtcbiAgfSxcblxuICBcIlNwaXJhbGl6ZSBNYXRyaXhcIjogZnVuY3Rpb24gKG1hdHJpeCkge1xuICAgIGxldCBzdGFydFJvdyA9IDA7XG4gICAgbGV0IGVuZFJvdyA9IG1hdHJpeC5sZW5ndGggLSAxO1xuICAgIGxldCBzdGFydENvbHVtbiA9IDA7XG4gICAgbGV0IGVuZENvbHVtbiA9IG1hdHJpeFswXS5sZW5ndGggLSAxO1xuICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgIHdoaWxlIChzdGFydFJvdyA8PSBlbmRSb3cgJiYgc3RhcnRDb2x1bW4gPD0gZW5kQ29sdW1uKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRDb2x1bW47IGkgPD0gZW5kQ29sdW1uOyBpKyspIHtcbiAgICAgICAgbmV3QXJyYXkucHVzaChtYXRyaXhbc3RhcnRDb2x1bW5dW2ldKTtcbiAgICAgICAgaWYgKG1hdHJpeC5sZW5ndGggKiBtYXRyaXhbMF0ubGVuZ3RoID09IG5ld0FycmF5Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhcnRSb3crKztcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICBuZXdBcnJheS5wdXNoKG1hdHJpeFtpXVtlbmRDb2x1bW5dKTtcbiAgICAgICAgaWYgKG1hdHJpeC5sZW5ndGggKiBtYXRyaXhbMF0ubGVuZ3RoID09IG5ld0FycmF5Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZW5kQ29sdW1uLS07XG4gICAgICBmb3IgKGxldCBpID0gZW5kQ29sdW1uOyBpID49IHN0YXJ0Q29sdW1uOyBpLS0pIHtcbiAgICAgICAgbmV3QXJyYXkucHVzaChtYXRyaXhbZW5kUm93XVtpXSk7XG4gICAgICAgIGlmIChtYXRyaXgubGVuZ3RoICogbWF0cml4WzBdLmxlbmd0aCA9PSBuZXdBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVuZFJvdy0tO1xuICAgICAgZm9yIChsZXQgaSA9IGVuZFJvdzsgaSA+PSBzdGFydFJvdzsgaS0tKSB7XG4gICAgICAgIG5ld0FycmF5LnB1c2gobWF0cml4W2ldW3N0YXJ0Q29sdW1uXSk7XG4gICAgICAgIGlmIChtYXRyaXgubGVuZ3RoICogbWF0cml4WzBdLmxlbmd0aCA9PSBuZXdBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXJ0Q29sdW1uKys7XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnJheTtcbiAgfSxcblxuICBcIkFycmF5IEp1bXBpbmcgR2FtZVwiOiBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICBsZXQgZmFydGhlc3RQb3NpdGlvbiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPiBmYXJ0aGVzdFBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgZmFydGhlc3RQb3NpdGlvbiA9IE1hdGgubWF4KGZhcnRoZXN0UG9zaXRpb24sIGkgKyBhcnJheVtpXSk7XG4gICAgICBpZiAoZmFydGhlc3RQb3NpdGlvbiA+PSBhcnJheS5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICBcIkFycmF5IEp1bXBpbmcgR2FtZSBJSVwiOiBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICBjb25zdCBuID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChuIDw9IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBsZXQgY3VycmVudExldmVsRW5kID0gMDtcbiAgICBsZXQgZmFydGhlc3RKdW1wID0gMDtcbiAgICBsZXQganVtcHMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgZmFydGhlc3RKdW1wID0gTWF0aC5tYXgoZmFydGhlc3RKdW1wLCBpICsgYXJyYXlbaV0pO1xuICAgICAgaWYgKGkgPT09IGN1cnJlbnRMZXZlbEVuZCkge1xuICAgICAgICBqdW1wcysrO1xuICAgICAgICBjdXJyZW50TGV2ZWxFbmQgPSBmYXJ0aGVzdEp1bXA7XG4gICAgICAgIGlmIChjdXJyZW50TGV2ZWxFbmQgPj0gbiAtIDEpIHtcbiAgICAgICAgICByZXR1cm4ganVtcHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgXCJNZXJnZSBPdmVybGFwcGluZyBJbnRlcnZhbHNcIjogZnVuY3Rpb24gKGludGVydmFscykge1xuICAgIGlmIChpbnRlcnZhbHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiBpbnRlcnZhbHM7XG4gICAgfVxuICAgIGludGVydmFscy5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG4gICAgbGV0IG1lcmdlZEludGVydmFscyA9IFtpbnRlcnZhbHNbMF1dO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW50ZXJ2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudEludGVydmFsID0gaW50ZXJ2YWxzW2ldO1xuICAgICAgbGV0IGxhc3RNZXJnZWRJbnRlcnZhbCA9IG1lcmdlZEludGVydmFsc1ttZXJnZWRJbnRlcnZhbHMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoY3VycmVudEludGVydmFsWzBdIDw9IGxhc3RNZXJnZWRJbnRlcnZhbFsxXSkge1xuICAgICAgICBsYXN0TWVyZ2VkSW50ZXJ2YWxbMV0gPSBNYXRoLm1heChsYXN0TWVyZ2VkSW50ZXJ2YWxbMV0sIGN1cnJlbnRJbnRlcnZhbFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRJbnRlcnZhbHMucHVzaChjdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkSW50ZXJ2YWxzO1xuICB9LFxuXG4gIFwiR2VuZXJhdGUgSVAgQWRkcmVzc2VzXCI6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gWzEsIDIsIDNdLm1hcCgoaSwgXywgYSkgPT4gYS5tYXAoaiA9PiBhLm1hcChrID0+IGEubWFwKGwgPT4gWzAsIGksIGkgKyBqLCBpICsgaiArIGssIGkgKyBqICsgayArIGxdKSkpKS5mbGF0KDMpLm1hcChxID0+IHFbNF0gIT0gc3RyLmxlbmd0aCA/IFtdIDogcS5yZWR1Y2UoKGEsIGIsIGkpID0+ICh6ID0+IHogPT0gXCIwXCIgfHwgK3pbMF0gJiYgeiA8IDI1NiA/IFsuLi5hLCB6XSA6IGEpKHN0ci5zbGljZShiLCBxW2kgKyAxXSkpLCBbXSkpLnJlZHVjZSgoYSwgYikgPT4gYi5sZW5ndGggPiAzID8gWy4uLmEsIGIuam9pbihcIi5cIildIDogYSwgW10pO1xuICB9LFxuXG4gIFwiQWxnb3JpdGhtaWMgU3RvY2sgVHJhZGVyIElcIjogZnVuY3Rpb24gKHN0b2NrUHJpY2VzKSB7XG4gICAgaWYgKCFzdG9ja1ByaWNlcyB8fCBzdG9ja1ByaWNlcy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IG1pblByaWNlID0gc3RvY2tQcmljZXNbMF07XG4gICAgbGV0IG1heFByb2ZpdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdG9ja1ByaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBvdGVudGlhbFByb2ZpdCA9IHN0b2NrUHJpY2VzW2ldIC0gbWluUHJpY2U7XG4gICAgICBtYXhQcm9maXQgPSBNYXRoLm1heChtYXhQcm9maXQsIHBvdGVudGlhbFByb2ZpdCk7XG4gICAgICBtaW5QcmljZSA9IE1hdGgubWluKG1pblByaWNlLCBzdG9ja1ByaWNlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBtYXhQcm9maXQ7XG4gIH0sXG5cblxuICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJSVwiOiBmdW5jdGlvbiAoc3RvY2tQcmljZXMpIHtcbiAgICBsZXQgbWF4UHJvZml0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b2NrUHJpY2VzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKHN0b2NrUHJpY2VzW2ldIDwgc3RvY2tQcmljZXNbaSArIDFdKSB7XG4gICAgICAgIG1heFByb2ZpdCArPSBzdG9ja1ByaWNlc1tpICsgMV0gLSBzdG9ja1ByaWNlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heFByb2ZpdDtcbiAgfSxcblxuICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJSUlcIjogZnVuY3Rpb24gKHN0b2NrUHJpY2VzKSB7XG4gICAgbGV0IG4gPSBzdG9ja1ByaWNlcy5sZW5ndGg7XG4gICAgaWYgKG4gPCAyKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IHByb2ZpdE9uZVRyYW5zYWN0aW9uID0gbmV3IEFycmF5KG4pLmZpbGwoMCk7XG4gICAgbGV0IHByb2ZpdFR3b1RyYW5zYWN0aW9ucyA9IG5ldyBBcnJheShuKS5maWxsKDApO1xuICAgIGxldCBtaW5QcmljZSA9IHN0b2NrUHJpY2VzWzBdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICBtaW5QcmljZSA9IE1hdGgubWluKG1pblByaWNlLCBzdG9ja1ByaWNlc1tpXSk7XG4gICAgICBwcm9maXRPbmVUcmFuc2FjdGlvbltpXSA9IE1hdGgubWF4KHByb2ZpdE9uZVRyYW5zYWN0aW9uW2kgLSAxXSwgc3RvY2tQcmljZXNbaV0gLSBtaW5QcmljZSk7XG4gICAgfVxuICAgIGxldCBtYXhQcmljZSA9IHN0b2NrUHJpY2VzW24gLSAxXTtcbiAgICBmb3IgKGxldCBpID0gbiAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBtYXhQcmljZSA9IE1hdGgubWF4KG1heFByaWNlLCBzdG9ja1ByaWNlc1tpXSk7XG4gICAgICBwcm9maXRUd29UcmFuc2FjdGlvbnNbaV0gPSBNYXRoLm1heChwcm9maXRUd29UcmFuc2FjdGlvbnNbaSArIDFdLCBtYXhQcmljZSAtIHN0b2NrUHJpY2VzW2ldKTtcbiAgICB9XG4gICAgbGV0IG1heFByb2ZpdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIG1heFByb2ZpdCA9IE1hdGgubWF4KG1heFByb2ZpdCwgcHJvZml0T25lVHJhbnNhY3Rpb25baV0gKyBwcm9maXRUd29UcmFuc2FjdGlvbnNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gW21heFByb2ZpdCwgcHJvZml0T25lVHJhbnNhY3Rpb24sIHByb2ZpdFR3b1RyYW5zYWN0aW9uc107XG4gIH0sXG5cbiAgXCJBbGdvcml0aG1pYyBTdG9jayBUcmFkZXIgSVZcIjogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgbGV0IGsgPSBhcnJheVswXTtcbiAgICBsZXQgcHJpY2VzID0gYXJyYXlbMV07XG4gICAgbGV0IG4gPSBwcmljZXMubGVuZ3RoO1xuICAgIGlmIChuID09PSAwIHx8IGsgPT09IDApXG4gICAgICByZXR1cm4gMDtcbiAgICBpZiAoayA+PSBNYXRoLmZsb29yKG4gLyAyKSkge1xuICAgICAgbGV0IG1heFByb2ZpdCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAocHJpY2VzW2ldID4gcHJpY2VzW2kgLSAxXSkge1xuICAgICAgICAgIG1heFByb2ZpdCArPSBwcmljZXNbaV0gLSBwcmljZXNbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF4UHJvZml0O1xuICAgIH1cbiAgICBsZXQgZHAgPSBuZXcgQXJyYXkoayArIDEpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShuKS5maWxsKDApKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBrOyBpKyspIHtcbiAgICAgIGxldCBtYXhEaWZmID0gLXByaWNlc1swXTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIGRwW2ldW2pdID0gTWF0aC5tYXgoZHBbaV1baiAtIDFdLCBwcmljZXNbal0gKyBtYXhEaWZmKTtcbiAgICAgICAgbWF4RGlmZiA9IE1hdGgubWF4KG1heERpZmYsIGRwW2kgLSAxXVtqXSAtIHByaWNlc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkcFtrXVtuIC0gMV07XG4gIH0sXG5cbiAgXCJNaW5pbXVtIFBhdGggU3VtIGluIGEgVHJpYW5nbGVcIjogZnVuY3Rpb24gKHRyaWFuZ2xlKSB7XG4gICAgbGV0IG4gPSB0cmlhbmdsZS5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93ID0gbiAtIDI7IHJvdyA+PSAwOyByb3ctLSkge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IHJvdzsgY29sKyspIHtcbiAgICAgICAgdHJpYW5nbGVbcm93XVtjb2xdICs9IE1hdGgubWluKHRyaWFuZ2xlW3JvdyArIDFdW2NvbF0sIHRyaWFuZ2xlW3JvdyArIDFdW2NvbCArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyaWFuZ2xlWzBdWzBdO1xuICB9LFxuXG4gIFwiVW5pcXVlIFBhdGhzIGluIGEgR3JpZCBJXCI6IGZ1bmN0aW9uIChhcnJheSkge1xuICAgIGxldCByb3dzID0gYXJyYXlbMF07XG4gICAgbGV0IGNvbHVtbnMgPSBhcnJheVsxXTtcbiAgICBsZXQgZHAgPSBuZXcgQXJyYXkocm93cykuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KGNvbHVtbnMpLmZpbGwoMCkpO1xuICAgIGRwWzBdWzBdID0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgZHBbaV1bal0gKz0gZHBbaSAtIDFdW2pdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqID4gMCkge1xuICAgICAgICAgIGRwW2ldW2pdICs9IGRwW2ldW2ogLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHBbcm93cyAtIDFdW2NvbHVtbnMgLSAxXTtcbiAgfSxcblxuICBcIlVuaXF1ZSBQYXRocyBpbiBhIEdyaWQgSUlcIjogZnVuY3Rpb24gKGdyaWQpIHtcbiAgICBsZXQgcm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGxldCBjb2x1bW5zID0gZ3JpZFswXS5sZW5ndGg7XG4gICAgbGV0IGRwID0gbmV3IEFycmF5KHJvd3MpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShjb2x1bW5zKS5maWxsKDApKTtcbiAgICBkcFswXVswXSA9IGdyaWRbMF1bMF0gPT09IDAgPyAxIDogMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKGdyaWRbaV1bal0gPT09IDApIHtcbiAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGRwW2ldW2pdICs9IGRwW2kgLSAxXVtqXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICBkcFtpXVtqXSArPSBkcFtpXVtqIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkcFtyb3dzIC0gMV1bY29sdW1ucyAtIDFdO1xuICB9LFxuXG4gIFwiU2hvcnRlc3QgUGF0aCBpbiBhIEdyaWRcIjogZnVuY3Rpb24gKGdyaWQpIHtcbiAgICBsZXQgbnVtUm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGxldCBudW1Db2xzID0gZ3JpZFswXS5sZW5ndGg7XG4gICAgbGV0IHZpc2l0ZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Sb3dzIH0sICgpID0+IEFycmF5KG51bUNvbHMpLmZpbGwoZmFsc2UpKTtcbiAgICBsZXQgZGlyZWN0aW9ucyA9IFtcIlVcIiwgXCJEXCIsIFwiTFwiLCBcIlJcIl07XG4gICAgbGV0IGR4ID0gWy0xLCAxLCAwLCAwXTtcbiAgICBsZXQgZHkgPSBbMCwgMCwgLTEsIDFdO1xuICAgIGxldCBxdWV1ZSA9IFt7IHg6IDAsIHk6IDAsIHBhdGg6IFwiXCIgfV07XG4gICAgdmlzaXRlZFswXVswXSA9IHRydWU7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB7IHgsIHksIHBhdGggfSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAoeCA9PT0gbnVtUm93cyAtIDEgJiYgeSA9PT0gbnVtQ29scyAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgbmV3WCA9IHggKyBkeFtpXTtcbiAgICAgICAgbGV0IG5ld1kgPSB5ICsgZHlbaV07XG4gICAgICAgIGlmIChuZXdYID49IDAgJiYgbmV3WCA8IG51bVJvd3MgJiYgbmV3WSA+PSAwICYmIG5ld1kgPCBudW1Db2xzICYmIGdyaWRbbmV3WF1bbmV3WV0gPT09IDAgJiYgIXZpc2l0ZWRbbmV3WF1bbmV3WV0pIHtcbiAgICAgICAgICB2aXNpdGVkW25ld1hdW25ld1ldID0gdHJ1ZTtcbiAgICAgICAgICBxdWV1ZS5wdXNoKHsgeDogbmV3WCwgeTogbmV3WSwgcGF0aDogcGF0aCArIGRpcmVjdGlvbnNbaV0gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH0sXG5cbiAgXCJTYW5pdGl6ZSBQYXJlbnRoZXNlcyBpbiBFeHByZXNzaW9uXCI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBpc1ZhbGlkKHN0cikge1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGZvciAobGV0IGNoYXIgb2Ygc3RyKSB7XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCIpXCIpIHtcbiAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgIGlmIChjb3VudCA8IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3VudCA9PT0gMDtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBxdWV1ZSA9IFtzdHJpbmddO1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGV2ZWxTaXplID0gcXVldWUubGVuZ3RoO1xuICAgICAgbGV0IHZpc2l0ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbFNpemU7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudFN0ciA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChpc1ZhbGlkKGN1cnJlbnRTdHIpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudFN0cik7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RyW2pdID09PSBcIihcIiB8fCBjdXJyZW50U3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICBsZXQgbmV3U3RyID0gY3VycmVudFN0ci5zbGljZSgwLCBqKSArIGN1cnJlbnRTdHIuc2xpY2UoaiArIDEpO1xuICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKG5ld1N0cikpIHtcbiAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChuZXdTdHIpO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobmV3U3RyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBcIkZpbmQgQWxsIFZhbGlkIE1hdGggRXhwcmVzc2lvbnNcIjogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgZnVuY3Rpb24gZXZhbHVhdGVFeHByZXNzaW9uKGV4cHIpIHtcbiAgICAgIGxldCBzdGFjayA9IFtdO1xuICAgICAgbGV0IG51bSA9IDA7XG4gICAgICBsZXQgb3BlcmF0b3IgPSBcIitcIjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hhciA9IGV4cHJbaV07XG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2hhcikpKSB7XG4gICAgICAgICAgbnVtID0gbnVtICogMTAgKyBwYXJzZUludChjaGFyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQoY2hhcikpIHx8IGkgPT09IGV4cHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobnVtKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSBcIi1cIikge1xuICAgICAgICAgICAgc3RhY2sucHVzaCgtbnVtKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSBcIipcIikge1xuICAgICAgICAgICAgbGV0IHByZXZOdW0gPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocHJldk51bSAqIG51bSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bSA9IDA7XG4gICAgICAgICAgb3BlcmF0b3IgPSBjaGFyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhY2sucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVFeHByZXNzaW9ucyhjdXJyRXhwciwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gZGlnaXRzLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZhbHVhdGVFeHByZXNzaW9uKGN1cnJFeHByKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VyckV4cHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBkaWdpdCA9IGRpZ2l0c1tpbmRleF07XG4gICAgICBnZW5lcmF0ZUV4cHJlc3Npb25zKGN1cnJFeHByICsgXCIrXCIgKyBkaWdpdCwgaW5kZXggKyAxKTtcbiAgICAgIGdlbmVyYXRlRXhwcmVzc2lvbnMoY3VyckV4cHIgKyBcIi1cIiArIGRpZ2l0LCBpbmRleCArIDEpO1xuICAgICAgZ2VuZXJhdGVFeHByZXNzaW9ucyhjdXJyRXhwciArIFwiKlwiICsgZGlnaXQsIGluZGV4ICsgMSk7XG4gICAgICBpZiAoY3VyckV4cHIubGVuZ3RoID4gMCAmJiBjdXJyRXhwcltjdXJyRXhwci5sZW5ndGggLSAxXSAhPT0gXCIwXCIpIHtcbiAgICAgICAgZ2VuZXJhdGVFeHByZXNzaW9ucyhjdXJyRXhwciArIGRpZ2l0LCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGlnaXRzID0gYXJyYXlbMF07XG4gICAgbGV0IHRhcmdldCA9IGFycmF5WzFdO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBnZW5lcmF0ZUV4cHJlc3Npb25zKGRpZ2l0c1swXSwgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBcIkhhbW1pbmdDb2RlczogSW50ZWdlciB0byBFbmNvZGVkIEJpbmFyeVwiOiBmdW5jdGlvbiAoaW50ZWdlcikge1xuICAgIGxldCBiaWdpbnQgPSBCaWdJbnQoaW50ZWdlcik7XG4gICAgbGV0IHJldmVyc2UgPSAwbjtcbiAgICBsZXQgaWJjID0gMG47XG4gICAgZm9yICg7IGJpZ2ludCAhPT0gMG47ICsraWJjKSB7XG4gICAgICByZXZlcnNlIDw8PSAxbjtcbiAgICAgIHJldmVyc2UgfD0gYmlnaW50ICYgMW47XG4gICAgICBiaWdpbnQgPj49IDFuO1xuICAgIH1cbiAgICBsZXQgcGFyaXR5ID0gMG47XG4gICAgbGV0IG9wID0gMG47XG4gICAgbGV0IHRiYyA9IDNuO1xuICAgIGZvciAobGV0IGkgPSAwbjsgaSAhPT0gaWJjOyArK3RiYykge1xuICAgICAgaWYgKHRiYyAmIHRiYyAtIDFuKSB7XG4gICAgICAgIGxldCBiaXQgPSByZXZlcnNlID4+IGkgJiAxbjtcbiAgICAgICAgKytpO1xuICAgICAgICBvcCBePSBiaXQ7XG4gICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICBwYXJpdHkgXj0gdGJjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBlbmMgPSAwbjtcbiAgICBmb3IgKGxldCBpID0gMW47IGkgIT09IHRiYzsgKytpKSB7XG4gICAgICBlbmMgPDw9IDFuO1xuICAgICAgaWYgKGkgJiBpIC0gMW4pIHtcbiAgICAgICAgZW5jIHw9IHJldmVyc2UgJiAxbjtcbiAgICAgICAgcmV2ZXJzZSA+Pj0gMW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGJpdCA9IHBhcml0eSAmIDFuO1xuICAgICAgICBvcCBePSBwYml0O1xuICAgICAgICBlbmMgfD0gcGJpdDtcbiAgICAgICAgcGFyaXR5ID4+PSAxbjtcbiAgICAgIH1cbiAgICB9XG4gICAgZW5jIHw9IG9wIDw8IHRiYyAtIDFuO1xuICAgIGVuYyB8PSAxbiA8PCB0YmM7XG4gICAgcmV0dXJuIGVuYy50b1N0cmluZygyKS5zbGljZSgxKTtcbiAgfSxcblxuICBcIkhhbW1pbmdDb2RlczogRW5jb2RlZCBCaW5hcnkgdG8gSW50ZWdlclwiOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBwb3dlcnNvZnR3byA9IG5ldyBBcnJheShNYXRoLmNlaWwoTWF0aC5sb2cyKGRhdGEpKSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IDIgKiogaSk7XG4gICAgbGV0IGJhZGJpdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpIG9mIHBvd2Vyc29mdHdvLmZpbHRlcigoeCkgPT4geCA8IGRhdGEubGVuZ3RoKSkge1xuICAgICAgbGV0IGNoZWNrc3VtID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKDApLm1hcCgoXywgaTIpID0+IGkyKS5maWx0ZXIoKHgpID0+IHggPiBpICYmIGkgJiB4KS5tYXAoKHgpID0+IHBhcnNlSW50KGRhdGEuc3Vic3RyaW5nKHgsIHggKyAxKSkpLnJlZHVjZSgoYSwgYikgPT4gYSBeIGIpO1xuICAgICAgaWYgKHBhcnNlSW50KGRhdGEuc3Vic3RyaW5nKGksIGkgKyAxKSkgIT0gY2hlY2tzdW0pIHtcbiAgICAgICAgYmFkYml0cy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYmFkYml0cy5sZW5ndGggPT0gMCkge1xuICAgICAgbGV0IGNoZWNrc3VtID0gZGF0YS5zdWJzdHJpbmcoMSkuc3BsaXQoXCJcIikubWFwKCh4KSA9PiBwYXJzZUludCh4KSkucmVkdWNlKChhLCBiKSA9PiBhIF4gYik7XG4gICAgICBpZiAoY2hlY2tzdW0gPT0gcGFyc2VJbnQoZGF0YS5zdWJzdHJpbmcoMCwgMSkpKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBkYXRhLnNwbGl0KFwiXCIpLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCkpO1xuICAgICAgICBmb3IgKGxldCBpIG9mIHBvd2Vyc29mdHdvLmZpbHRlcigoeCkgPT4geCA8IGRhdGEubGVuZ3RoKS5yZXZlcnNlKCkpIHtcbiAgICAgICAgICBudW1iZXIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlci5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiBudW1iZXIucmVkdWNlKChhLCBiKSA9PiBhICogMiArIGIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYmFkaW5kZXggPSBiYWRiaXRzLnJlZHVjZSgoYSwgYikgPT4gYSB8IGIsIDApO1xuICAgIHJldHVybiBzb2x2ZXJzW1wiSGFtbWluZ0NvZGVzOiBFbmNvZGVkIEJpbmFyeSB0byBJbnRlZ2VyXCJdKGRhdGEuc3Vic3RyaW5nKDAsIGJhZGluZGV4KS5jb25jYXQoZGF0YS5zdWJzdHJpbmcoYmFkaW5kZXgsIGJhZGluZGV4ICsgMSkgPT0gXCIwXCIgPyBcIjFcIiA6IFwiMFwiKS5jb25jYXQoZGF0YS5zdWJzdHJpbmcoYmFkaW5kZXggKyAxKSkpO1xuICB9LFxuXG4gIFwiUHJvcGVyIDItQ29sb3Jpbmcgb2YgYSBHcmFwaFwiOiBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICBsZXQgbnVtVmVydGljZXMgPSBhcnJheVswXTtcbiAgICBsZXQgZWRnZXMgPSBhcnJheVsxXTtcbiAgICBsZXQgZ3JhcGggPSBuZXcgQXJyYXkobnVtVmVydGljZXMpLmZpbGwobnVsbCkubWFwKCgpID0+IFtdKTtcbiAgICBmb3IgKGxldCBbdSwgdl0gb2YgZWRnZXMpIHtcbiAgICAgIGdyYXBoW3VdLnB1c2godik7XG4gICAgICBncmFwaFt2XS5wdXNoKHUpO1xuICAgIH1cbiAgICBsZXQgY29sb3JzID0gbmV3IEFycmF5KG51bVZlcnRpY2VzKS5maWxsKC0xKTtcbiAgICBmdW5jdGlvbiBpc1ZhbGlkQ29sb3IodmVydGV4LCBjb2xvcikge1xuICAgICAgZm9yIChsZXQgbmVpZ2hib3Igb2YgZ3JhcGhbdmVydGV4XSkge1xuICAgICAgICBpZiAoY29sb3JzW25laWdoYm9yXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb2xvckdyYXBoVXRpbCh2ZXJ0ZXgpIHtcbiAgICAgIGZvciAobGV0IGNvbG9yID0gMDsgY29sb3IgPD0gMTsgY29sb3IrKykge1xuICAgICAgICBpZiAoaXNWYWxpZENvbG9yKHZlcnRleCwgY29sb3IpKSB7XG4gICAgICAgICAgY29sb3JzW3ZlcnRleF0gPSBjb2xvcjtcbiAgICAgICAgICBmb3IgKGxldCBuZWlnaGJvciBvZiBncmFwaFt2ZXJ0ZXhdKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JzW25laWdoYm9yXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29sb3JHcmFwaFV0aWwobmVpZ2hib3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCB2ZXJ0ZXggPSAwOyB2ZXJ0ZXggPCBudW1WZXJ0aWNlczsgdmVydGV4KyspIHtcbiAgICAgIGlmIChjb2xvcnNbdmVydGV4XSA9PT0gLTEgJiYgIWNvbG9yR3JhcGhVdGlsKHZlcnRleCkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sb3JzO1xuICB9LFxuXG4gIFwiQ29tcHJlc3Npb24gSTogUkxFIENvbXByZXNzaW9uXCI6IGZ1bmN0aW9uIChpbnB1dFN0cmluZykge1xuICAgIGZ1bmN0aW9uIGdldENvdW50U3RyaW5nKGNvdW50Mikge1xuICAgICAgaWYgKGNvdW50MiA8PSA5KSB7XG4gICAgICAgIHJldHVybiBjb3VudDIudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjlcIiArIGN1cnJlbnRDaGFyICsgZ2V0Q291bnRTdHJpbmcoY291bnQyIC0gOSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaW5wdXRTdHJpbmcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBsZXQgZW5jb2RlZFN0cmluZyA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbnRDaGFyID0gaW5wdXRTdHJpbmdbMF07XG4gICAgbGV0IGNvdW50ID0gMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGlucHV0U3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRTdHJpbmdbaV0gPT09IGN1cnJlbnRDaGFyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmNvZGVkU3RyaW5nICs9IGdldENvdW50U3RyaW5nKGNvdW50KSArIGN1cnJlbnRDaGFyO1xuICAgICAgICBjdXJyZW50Q2hhciA9IGlucHV0U3RyaW5nW2ldO1xuICAgICAgICBjb3VudCA9IDE7XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gaW5wdXRTdHJpbmcubGVuZ3RoIC0gMSkge1xuICAgICAgICBlbmNvZGVkU3RyaW5nICs9IGdldENvdW50U3RyaW5nKGNvdW50KSArIGN1cnJlbnRDaGFyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlZFN0cmluZztcbiAgfSxcblxuICBcIkNvbXByZXNzaW9uIElJOiBMWiBEZWNvbXByZXNzaW9uXCI6IGZ1bmN0aW9uIChjb21wcmVzc2VkU3RyaW5nKSB7XG4gICAgbGV0IHBsYWluID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXByZXNzZWRTdHJpbmcubGVuZ3RoOykge1xuICAgICAgbGV0IGxpdGVyYWxfbGVuZ3RoID0gY29tcHJlc3NlZFN0cmluZy5jaGFyQ29kZUF0KGkpIC0gNDg7XG4gICAgICBpZiAobGl0ZXJhbF9sZW5ndGggPCAwIHx8IGxpdGVyYWxfbGVuZ3RoID4gOSB8fCBpICsgMSArIGxpdGVyYWxfbGVuZ3RoID4gY29tcHJlc3NlZFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBwbGFpbiArPSBjb21wcmVzc2VkU3RyaW5nLnN1YnN0cmluZyhpICsgMSwgaSArIDEgKyBsaXRlcmFsX2xlbmd0aCk7XG4gICAgICBpICs9IDEgKyBsaXRlcmFsX2xlbmd0aDtcbiAgICAgIGlmIChpID49IGNvbXByZXNzZWRTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGV0IGJhY2tyZWZfbGVuZ3RoID0gY29tcHJlc3NlZFN0cmluZy5jaGFyQ29kZUF0KGkpIC0gNDg7XG4gICAgICBpZiAoYmFja3JlZl9sZW5ndGggPCAwIHx8IGJhY2tyZWZfbGVuZ3RoID4gOSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoYmFja3JlZl9sZW5ndGggPT09IDApIHtcbiAgICAgICAgKytpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGkgKyAxID49IGNvbXByZXNzZWRTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJhY2tyZWZfb2Zmc2V0ID0gY29tcHJlc3NlZFN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSAtIDQ4O1xuICAgICAgICBpZiAoYmFja3JlZl9sZW5ndGggPiAwICYmIChiYWNrcmVmX29mZnNldCA8IDEgfHwgYmFja3JlZl9vZmZzZXQgPiA5KSB8fCBiYWNrcmVmX29mZnNldCA+IHBsYWluLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmFja3JlZl9sZW5ndGg7ICsraikge1xuICAgICAgICAgIHBsYWluICs9IHBsYWluW3BsYWluLmxlbmd0aCAtIGJhY2tyZWZfb2Zmc2V0XTtcbiAgICAgICAgfVxuICAgICAgICBpICs9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwbGFpbjtcbiAgfSxcblxuICBcIkNvbXByZXNzaW9uIElJSTogTFogQ29tcHJlc3Npb25cIjogZnVuY3Rpb24gKHBsYWluKSB7XG4gICAgbGV0IGN1cl9zdGF0ZSA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgbGV0IG5ld19zdGF0ZSA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBBcnJheSgxMCkpO1xuICAgIGZ1bmN0aW9uIHNldChzdGF0ZSwgaSwgaiwgc3RyKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVbaV1bal07XG4gICAgICBpZiAoY3VycmVudCA9PSBudWxsIHx8IHN0ci5sZW5ndGggPCBjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICBzdGF0ZVtpXVtqXSA9IHN0cjtcbiAgICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA9PT0gY3VycmVudC5sZW5ndGggJiYgTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICBzdGF0ZVtpXVtqXSA9IHN0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VyX3N0YXRlWzBdWzFdID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYWluLmxlbmd0aDsgKytpKSB7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiBuZXdfc3RhdGUpIHtcbiAgICAgICAgcm93LmZpbGwobnVsbCk7XG4gICAgICB9XG4gICAgICBjb25zdCBjID0gcGxhaW5baV07XG4gICAgICBmb3IgKGxldCBsZW5ndGggPSAxOyBsZW5ndGggPD0gOTsgKytsZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gY3VyX3N0YXRlWzBdW2xlbmd0aF07XG4gICAgICAgIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW5ndGggPCA5KSB7XG4gICAgICAgICAgc2V0KG5ld19zdGF0ZSwgMCwgbGVuZ3RoICsgMSwgc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXQobmV3X3N0YXRlLCAwLCAxLCBzdHJpbmcgKyBcIjlcIiArIHBsYWluLnN1YnN0cmluZyhpIC0gOSwgaSkgKyBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMTsgb2Zmc2V0IDw9IE1hdGgubWluKDksIGkpOyArK29mZnNldCkge1xuICAgICAgICAgIGlmIChwbGFpbltpIC0gb2Zmc2V0XSA9PT0gYykge1xuICAgICAgICAgICAgc2V0KG5ld19zdGF0ZSwgb2Zmc2V0LCAxLCBzdHJpbmcgKyBTdHJpbmcobGVuZ3RoKSArIHBsYWluLnN1YnN0cmluZyhpIC0gbGVuZ3RoLCBpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBvZmZzZXQgPSAxOyBvZmZzZXQgPD0gOTsgKytvZmZzZXQpIHtcbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gMTsgbGVuZ3RoIDw9IDk7ICsrbGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gY3VyX3N0YXRlW29mZnNldF1bbGVuZ3RoXTtcbiAgICAgICAgICBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGxhaW5baSAtIG9mZnNldF0gPT09IGMpIHtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPCA5KSB7XG4gICAgICAgICAgICAgIHNldChuZXdfc3RhdGUsIG9mZnNldCwgbGVuZ3RoICsgMSwgc3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldChuZXdfc3RhdGUsIG9mZnNldCwgMSwgc3RyaW5nICsgXCI5XCIgKyBTdHJpbmcob2Zmc2V0KSArIFwiMFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0KG5ld19zdGF0ZSwgMCwgMSwgc3RyaW5nICsgU3RyaW5nKGxlbmd0aCkgKyBTdHJpbmcob2Zmc2V0KSk7XG4gICAgICAgICAgZm9yIChsZXQgbmV3X29mZnNldCA9IDE7IG5ld19vZmZzZXQgPD0gTWF0aC5taW4oOSwgaSk7ICsrbmV3X29mZnNldCkge1xuICAgICAgICAgICAgaWYgKHBsYWluW2kgLSBuZXdfb2Zmc2V0XSA9PT0gYykge1xuICAgICAgICAgICAgICBzZXQobmV3X3N0YXRlLCBuZXdfb2Zmc2V0LCAxLCBzdHJpbmcgKyBTdHJpbmcobGVuZ3RoKSArIFN0cmluZyhvZmZzZXQpICsgXCIwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgdG1wX3N0YXRlID0gbmV3X3N0YXRlO1xuICAgICAgbmV3X3N0YXRlID0gY3VyX3N0YXRlO1xuICAgICAgY3VyX3N0YXRlID0gdG1wX3N0YXRlO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBmb3IgKGxldCBsZW4gPSAxOyBsZW4gPD0gOTsgKytsZW4pIHtcbiAgICAgIGxldCBzdHJpbmcgPSBjdXJfc3RhdGVbMF1bbGVuXTtcbiAgICAgIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHN0cmluZyArPSBTdHJpbmcobGVuKSArIHBsYWluLnN1YnN0cmluZyhwbGFpbi5sZW5ndGggLSBsZW4sIHBsYWluLmxlbmd0aCk7XG4gICAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgc3RyaW5nLmxlbmd0aCA8IHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gc3RyaW5nO1xuICAgICAgfSBlbHNlIGlmIChzdHJpbmcubGVuZ3RoID09IHJlc3VsdC5sZW5ndGggJiYgTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICByZXN1bHQgPSBzdHJpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IG9mZnNldCA9IDE7IG9mZnNldCA8PSA5OyArK29mZnNldCkge1xuICAgICAgZm9yIChsZXQgbGVuID0gMTsgbGVuIDw9IDk7ICsrbGVuKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBjdXJfc3RhdGVbb2Zmc2V0XVtsZW5dO1xuICAgICAgICBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nKGxlbikgKyBcIlwiICsgU3RyaW5nKG9mZnNldCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCBzdHJpbmcubGVuZ3RoIDwgcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdCA9IHN0cmluZztcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpbmcubGVuZ3RoID09IHJlc3VsdC5sZW5ndGggJiYgTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICAgIHJlc3VsdCA9IHN0cmluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ID8/IFwiXCI7XG4gIH0sXG5cbiAgXCJFbmNyeXB0aW9uIEk6IENhZXNhciBDaXBoZXJcIjogZnVuY3Rpb24gKFt0ZXh0LCBpXSkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLlsuLi50ZXh0XS5tYXAoYyA9PiBjID4gXCIgXCIgPyAobyA9PiBvICsgKG8gPiA2NSA/IDAgOiAyNikpKGMuY2hhckNvZGVBdCgpIC0gaSkgOiAzMikpXG4gIH0sXG5cbiAgXCJFbmNyeXB0aW9uIElJOiBWaWdlblxceEU4cmUgQ2lwaGVyXCI6IGZ1bmN0aW9uIChbcGxhaW50ZXh0LCBrZXl3b3JkXSkge1xuICAgIHBsYWludGV4dCA9IHBsYWludGV4dC5yZXBsYWNlKC9cXHMvZywgXCJcIikudG9VcHBlckNhc2UoKTtcbiAgICBrZXl3b3JkID0ga2V5d29yZC5yZXBlYXQoTWF0aC5jZWlsKHBsYWludGV4dC5sZW5ndGggLyBrZXl3b3JkLmxlbmd0aCkpLnN1YnN0cigwLCBwbGFpbnRleHQubGVuZ3RoKTtcbiAgICBsZXQgdmlnZW5lcmVTcXVhcmUgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyNiB9LCAoXywgaSkgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IDI2IH0sIChfMiwgaikgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSgoaSArIGopICUgMjYgKyA2NSkpO1xuICAgIH0pO1xuICAgIGxldCBjaXBoZXJ0ZXh0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWludGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IHBsYWludGV4dC5jaGFyQ29kZUF0KGkpIC0gNjU7XG4gICAgICBsZXQgY29sID0ga2V5d29yZC5jaGFyQ29kZUF0KGkpIC0gNjU7XG4gICAgICBjaXBoZXJ0ZXh0ICs9IHZpZ2VuZXJlU3F1YXJlW3Jvd11bY29sXTtcbiAgICB9XG4gICAgcmV0dXJuIGNpcGhlcnRleHQ7XG4gIH1cbn1cblxuLy8gc2VydmVycy9ob21lL2NvbnRyYWN0cy5qc1xuZnVuY3Rpb24gY29udHJhY3RzKG5zOiBOUykge1xuICBzR2V0KG5zKS5mbGF0TWFwKGhvc3QgPT4gbnMubHMoaG9zdCwgXCIuY2N0XCIpLm1hcChjY3QgPT4gKFtob3N0LCBjY3QsIG5zLmNvZGluZ2NvbnRyYWN0LmdldENvbnRyYWN0VHlwZShjY3QsIGhvc3QpXSkpKS5mb3JFYWNoKChbaG9zdCwgY2N0LCB0eXBlXSkgPT4gKFxuICAgIChyZXN1bHQgPT4gcmVzdWx0XG4gICAgICA/IG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLmd9Q29tcGxldGVkICR7dHlwZX0gfiAke2NjdH0gb24gJHtob3N0fSB+ICR7cmVzdWx0fWApXG4gICAgICA6IG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLnJ9RmFpbGVkICR7dHlwZX0gfiAke2NjdH0gb24gJHtob3N0fWApXG4gICAgKShucy5jb2Rpbmdjb250cmFjdC5hdHRlbXB0KHNvbHZlcnNbbnMuY29kaW5nY29udHJhY3QuZ2V0Q29udHJhY3RUeXBlKGNjdCwgaG9zdCldKG5zLmNvZGluZ2NvbnRyYWN0LmdldERhdGEoY2N0LCBob3N0KSksIGNjdCwgaG9zdClcbiAgICApKSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFXQSxNQUFNLFVBQVUsZUFBZSxlQUFtQixJQUE0QztBQUFFLFFBQU0sS0FBSyxPQUFPLE9BQU8sTUFBcUIsVUFBVSxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksTUFBUztBQUFFO0FBRTFMLE1BQU0sVUFBVSxXQUFXLGVBQW1CLElBQXdDO0FBQ3BGLFNBQU8sTUFBTSxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFRLE9BQU0sWUFBVyxPQUFPLENBQUMsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLFNBQVMsTUFBTSxHQUFHLElBQUssWUFBWSxNQUFNLEtBQVEsRUFBRSxRQUFRLEtBQUssT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNsTDtBQUVBLE1BQU0sVUFBVSxZQUFZLGVBQW1CLE1BQW9EO0FBQ2pHLFNBQU8sTUFBTSxLQUFLLE9BQU8sT0FBTyxLQUFLLFFBQVMsTUFBTSxPQUFRLE1BQU0sS0FBSyxHQUFHLElBQUksWUFBWSxPQUFPLENBQUM7QUFDcEc7QUFFQSxNQUFNLFVBQVUsYUFBYSxlQUFtQixNQUFvRDtBQUNsRyxTQUFPLE1BQU0sS0FBSyxPQUFPLE9BQU8sS0FBSyxRQUFTLE1BQU0sT0FBUSxNQUFNLEtBQUssR0FBRyxJQUFJLFlBQVksT0FBTyxDQUFDO0FBQ3BHO0FBd0RBLElBQU0sTUFBaUI7QUFBQSxFQUNyQixLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxhQUFhO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxnQkFBZ0I7QUFBQSxJQUFDO0FBQUEsSUFBUTtBQUFBLElBQVc7QUFBQTtBQUFBLEVBQXFCO0FBQUEsRUFDekQsbUJBQW1CO0FBQUEsSUFDakI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFB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QUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFBQSxFQUNuSDtBQUFBLEVBRUEscUNBQXFDLFNBQVUsQ0FBQyxXQUFXLE9BQU8sR0FBRztBQUNuRSxnQkFBWSxVQUFVLFFBQVEsT0FBTyxFQUFFLEVBQUUsWUFBWTtBQUNyRCxjQUFVLFFBQVEsT0FBTyxLQUFLLEtBQUssVUFBVSxTQUFTLFFBQVEsTUFBTSxDQUFDLEVBQUUsT0FBTyxHQUFHLFVBQVUsTUFBTTtBQUNqRyxRQUFJLGlCQUFpQixNQUFNLEtBQUssRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUN4RCxhQUFPLE1BQU0sS0FBSyxFQUFFLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxNQUFNLE9BQU8sY0FBYyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUM7QUFBQSxJQUNyRixDQUFDO0FBQ0QsUUFBSSxhQUFhO0FBQ2pCLGFBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDekMsVUFBSSxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQUk7QUFDcEMsVUFBSSxNQUFNLFFBQVEsV0FBVyxDQUFDLElBQUk7QUFDbEMsb0JBQWMsZUFBZSxHQUFHLEVBQUUsR0FBRztBQUFBLElBQ3ZDO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUdBLFNBQVMsVUFBVWIsS0FBUTtBQUN6QixPQUFLQSxHQUFFLEVBQUUsUUFBUSxVQUFRQSxJQUFHLEdBQUcsTUFBTSxNQUFNLEVBQUUsSUFBSSxTQUFRLENBQUMsTUFBTSxLQUFLQSxJQUFHLGVBQWUsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLE9BQzVJLFlBQVUsU0FDUEEsSUFBRyxRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUMsYUFBYSxJQUFJLE1BQU0sR0FBRyxPQUFPLElBQUksTUFBTSxNQUFNLEVBQUUsSUFDNUVBLElBQUcsUUFBUSxHQUFHLEtBQUssS0FBSyxDQUFDLFVBQVUsSUFBSSxNQUFNLEdBQUcsT0FBTyxJQUFJLEVBQUU7QUFBQSxJQUMvREEsSUFBRyxlQUFlLFFBQVEsUUFBUUEsSUFBRyxlQUFlLGdCQUFnQixLQUFLLElBQUksQ0FBQyxFQUFFQSxJQUFHLGVBQWUsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSTtBQUFBLEVBQ2xJLENBQUU7QUFDTjsiLAogICJuYW1lcyI6IFsibnMiLCAicHJpbnRfbWFwIiwgInRpbWVvdXQiLCAiZiIsICJ0IiwgInAiLCAicyIsICJhdmFpbGFibGVBdWdzIiwgInRpbWVzdGFtcCIsICJzdGV2ZXMiLCAiYiIsICJzdGV2ZSIsICJhIiwgImhhcHBpbmVzcyIsICJiYXJrIl0KfQo=
