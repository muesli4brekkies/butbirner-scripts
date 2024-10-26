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
  return await this.reduce(async (ret, cur) => await ret && await func(cur), (async () => true)());
};
var CON = {
  CYCLE_RATE: 40,
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
    [`    ___`, ` __/_,  \`.  .-"""-.`, ` \\_,  | \\-'  /   )\`-')`, `  "") \`"\`      ((\`"\``, ` ___Y  ,    .'7 /|`, `(_,___/...-\` (_/_/         `],
    [`                 ___`, `      .-"""-.  .\` ,_\\__`, ` ('-\`(   \\  '-/ |   ,_/   `, `   \`"\`))       \`"\` (""`, `      |\\ 4'.    ,  Y___`, `      \\_\\_) \`-...\\___,_)`]
  ],
  WIN: eval("window"),
  DOC: eval("document")
};
var HOOKS = [
  CON.DOC.getElementById("overview-extra-hook-0"),
  CON.DOC.getElementById("overview-extra-hook-1")
];
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
    bl: "\x1B[1m"
  },
  getIndexArray: (n) => [...Array(n).keys()],
  tickString: (t, l = 40) => t % l ? "#".repeat(t / 4 % (l / 4)) + `|/-\\`[t % 4] : "#--exec--#",
  digiClock: (r = Date.now(), c = (t, d = 60, v = r / t % d | 0) => v <= 9 ? "0" + v : v) => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3),
  ramFormat: (ram) => ram < 1e3 ? ram.toFixed(2) + "GB" : ram < 1e6 ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB",
  cashFormat: (ns2, cash) => "$" + ns2.formatNumber(cash),
  slp: (t) => async () => await new Promise((r) => setTimeout(r, t))
};
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
  is_first_start && (ns2.atExit(() => (HOOKS[0].innerText = "", HOOKS[1].innerText = "", ns2.closeTail())), ns2.ui.clearTerminal(), ns2.tail(), ns2.disableLog("ALL"), ns2.tprintf(`${util.ansi.m}** ./gvnr.js **`)), await [
    prettyLogs(ns2),
    prettyOverview(ns2)(timer),
    timer % CON.CYCLE_RATE ? async (_) => void 0 : scriptLoop(ns2)(is_first_start),
    util.slp(1e3),
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
  await ["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].forEachAsync(async (p) => await Run(ns2, "singularity.purchaseProgram", [`${p}.exe`]));
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
  (sGet(ns2).includes(wd) && await Run(ns2, "getHackingLevel") > await Run(ns2, "getServerRequiredHackingLevel", [wd]) || ns2.bladeburner.inBladeburner() && !ns2.bladeburner.getNextBlackOp()) && (["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map((f) => ns2.rm(`temp/${f}`)), ns2.write("report/nodeLog.txt", `${await getCurrentNode(ns2)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`), await Run(ns2, "singularity.destroyW0r1dD43m0n", [12, "rset.js"]));
}
function pServ(ns2) {
  (ns2.purchaseServer("#", 8) || [...Array(21).keys()].some(
    (r) => sGet(ns2).some(
      (s) => ns2.upgradePurchasedServer(s, 2 << r)
    )
  )) && pServ(ns2);
}
function prettyLogs(ns2) {
  return async () => {
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
      server == peekyPorty(ns2, "loop/prsm.js").target ? `${server} ${util.ansi.w}---${util.ansi.y}\u0394<` : server
    ];
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
    const [num_nfg, not_nfg, augs_sans_nfg] = (await Run(ns2, "singularity.getOwnedAugmentations", [1])).slice((await Run(ns2, "singularity.getOwnedAugmentations", [0])).length).reduce(([y_nfg, n_nfg, sans_nfg], aug) => aug == CON.NFG ? [y_nfg + 1, n_nfg, sans_nfg] : [y_nfg, n_nfg + 1, [...sans_nfg, aug]], [0, 0, []]);
    const bought_aug_info = augs_sans_nfg.map((aug) => " \xB7" + aug).join("\n") + (num_nfg ? "\n \xB7 NeuroFlux Governor x" + num_nfg : "");
    const num_other_augs = (await Run(ns2, "singularity.getOwnedAugmentations", [0])).reduce((acc, aug) => acc + (aug != CON.NFG), 0);
    ns2.moveTail(CON.WIN.innerWidth - 1150, 0), ns2.resizeTail(800, 1e3), ns2.clearLog(), [
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
  };
}
function prettyOverview(ns2) {
  return (timer) => async () => {
    const date = Number(/* @__PURE__ */ new Date());
    const gang_info = peekyPorty(ns2, "loop/runGang.js");
    const prsm_info = peekyPorty(ns2, "loop/prsm.js");
    const hacknet_info = readyFiley(ns2, "temp/hacknet_info.txt");
    const last_aug_time = +readyFiley(ns2, "temp/lastAugTime.txt") || date;
    const colourise = ([l_str, r_str], { data, col }) => (([l_lines, r_lines]) => [
      [l_str, ...l_lines],
      [r_str, ...r_lines]
    ].map((r) => r.join("</br>")))(data.reduce(([l_acc, r_acc], [l, r]) => [
      [...l_acc, `<span style = "color:${col}" > ${l} </span>`],
      [...r_acc, `<span style = "color:${col}" > ${r} </span>`]
    ], [[], []]));
    [HOOKS[0].innerHTML, HOOKS[1].innerHTML] = [
      {
        data: [
          [`bitnode:`, `${await getCurrentNode(ns2)}`],
          [`pserv:`, `${sGet(ns2).filter((s) => s.startsWith("#")).length}/${ns2.getPurchasedServerLimit()}`],
          [`w_d lvl:`, `${Math.round(3e3 * await Run(ns2, "getBitNodeMultipliers", [], "WorldDaemonDifficulty"))}`],
          [`city:`, `${ns2.getPlayer().city}`],
          [`karma:`, `${ns2.formatNumber(ns2.heart.break())}`]
        ],
        col: "cyan"
      },
      {
        data: [
          [`target:`, `${prsm_info.target}`],
          [`state:`, `${prsm_info.state}`],
          [`$/s:`, `${util.cashFormat(ns2, ns2.getScriptIncome("loop/prsm.js", void 0))}`],
          [`$total:`, `${util.cashFormat(ns2, await Run(ns2, "getMoneySources", [], "sinceInstall.hacking"))}`],
          [`xp/s:`, `${ns2.formatNumber(ns2.getTotalScriptExpGain())}`],
          [`scripts:`, `${sGet(ns2).reduce((a, b) => a + ns2.ps(b).length, 0)}`]
        ],
        col: "red"
      },
      {
        data: [
          [`hN Servers:`, `${hacknet_info.num}`],
          [`hashes/Max:`, `${hacknet_info.hashes}`],
          [`hashes/s:`, `${ns2.formatNumber(hacknet_info.prod)}`],
          [`profit:`, `${util.cashFormat(ns2, hacknet_info.profit)}`]
        ],
        col: "green"
      },
      {
        data: [
          [`status:`, `${gang_info?.cycle ?? "~"}`],
          [`members:`, `${gang_info?.size ?? "~"}`],
          [`power:`, `${ns2.formatNumber(gang_info?.power ?? 0, 0)}/${ns2.formatNumber(gang_info?.nextpower ?? 0, 0)}`],
          [`territory:`, `${ns2.formatNumber(gang_info?.territory ?? 0 * 100) ?? "~"}%`],
          [`warfare?:`, `${gang_info?.tw ?? "~"}`],
          [`profit:`, `${util.cashFormat(ns2, await Run(ns2, "getMoneySources", [], "sinceStart.gang") ?? 0)}`]
        ],
        col: "magenta"
      },
      {
        data: [
          [`${util.tickString(timer)}`, `cycle #${Math.floor(timer / CON.CYCLE_RATE)}`],
          [`gvnr uptime:`, `${util.digiClock(timer * 1e3)}`],
          [`t+ Augbuy:`, `${!!(date - last_aug_time) ? util.digiClock(date - last_aug_time) : "N/A"}`],
          [`t+ Install:`, `${util.digiClock(date - await Run(ns2, "getResetInfo", [], "lastAugReset"))}`],
          [`t+ Bitnode:`, `${util.digiClock(date - await Run(ns2, "getResetInfo", [], "lastNodeReset"))}`]
        ],
        col: "yellow"
      }
    ].reduce(colourise, ["", ""]);
  };
}
function scriptLoop(ns2) {
  return (is_first_start) => async () => {
    await CON.ONESHOT_FUNCTIONS.map((s) => `oneshot/${s}.js`).forEachAsync(
      async (script) => (is_first_start && ns2.tprintf(`${util.ansi.y}starting ${script} `), await (async (runpid) => !!runpid ? (await ns2.nextPortWrite(runpid), is_first_start && (await util.slp(70 * Math.random())(), ns2.tprintf(`${util.ansi.g}${script} passed init`))) : ns2.tprintf(`${util.ansi.r} ${script} did not run`))(ns2.run(script)))
    ), CON.LOOP_FUNCTIONS.map((s) => `loop/${s}.js`).forEach((script) => !ns2.isRunning(script) && ns2.run(script)), is_first_start && (ns2.print(`${util.ansi.m} Welcome to gnvr.js!`), ns2.tprintf(`${util.ansi.g}*** Startup Complete *** `), await util.slp(1e3)(), ns2.run("util/neofetch.js"));
  };
}
async function graft(ns2, g = ns2.grafting) {
  !await is_Busy(ns2) && ns2.singularity.travelToCity("New Tokyo") && [
    "QLink",
    "ECorp HVMind Implant",
    "Xanipher",
    "OmniTek InfoLoad",
    "violet Congruity Implant"
  ].some((aug) => g.graftAugmentation(aug, false));
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
  const nfginfo = {
    cost: await Run(ns2, "singularity.getAugmentationPrice", [CON.NFG]),
    rep: await Run(ns2, "singularity.getAugmentationRepReq", [CON.NFG])
  };
  const donatefaction = "The Black Hand";
  s.getFactionFavor(donatefaction) >= 150 * rep_multi && s.getFactionRep(donatefaction) < nfginfo.rep && s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 1e11)) && ns2.tprintf(
    `${util.ansi.m}Donated ${util.cashFormat(ns2, Math.max(nfginfo.cost, 1e11))} to ${donatefaction} (grinding NFG)`
  ), availableAugs2.forEach((aug) => aug.fact.name != CON.GANG_NAME && s.getFactionFavor(aug.fact.name) > 150 * rep_multi && aug.repdelta > 0 && s.donateToFaction(aug.fact.name, 1e11) && ns2.tprintf(`${util.ansi.m}Donated $100B to ${aug.fact.name} `));
}
async function installAugs(ns2) {
  const date = Number(/* @__PURE__ */ new Date());
  const augs_array = readyFiley(ns2, "temp/availableAugs.txt").filter((aug) => aug.fact.name != CON.GANG_NAME);
  const bought_augs = (await Run(ns2, "singularity.getOwnedAugmentations", [1])).slice((await Run(ns2, "singularity.getOwnedAugmentations", [0])).length);
  const time_since_last_aug = date - +(readyFiley(ns2, "temp/lastAugTime.txt") ?? date);
  const lowest_price = augs_array.reduce((a, b) => a.aug != CON.TRP && a < b.price ? a : b.price, Infinity)?.price ?? 0;
  const fav_to_donate = 150 * await Run(ns2, "getBitNodeMultipliers", [], "RepToDonateToFaction");
  const price_ratio = Math.floor(await Run(ns2, "singularity.getAugmentationPrice", ["Combat Rib I"]) / await Run(ns2, "singularity.getAugmentationBasePrice", ["Combat Rib I"]));
  const timeout_log = `timeout - ${[ns2.getServerMoneyAvailable("home"), lowest_price].map(util.cashFormat.bind(null, ns2)).join("/")}, multi x${price_ratio}`;
  const favour_log = (fact) => `increased ${fact.name} favour by ${Math.floor(fact.favdelta)} to ${Math.floor(fact.favdelta + fact.fav)}`;
  const checkFavour = () => augs_array.some(
    (aug) => aug.fact.fav < fav_to_donate && (aug.fact.favdelta >= 50 || fav_to_donate < aug.fact.favdelta + aug.fact.fav) && (writeLog(favour_log(aug.fact)), true)
  );
  const checkTimeout = () => time_since_last_aug > 18e5 && lowest_price > ns2.getServerMoneyAvailable("home") && (writeLog(timeout_log), true);
  const writeLog = (log) => ns2.write("temp/installAugsReason.txt", `installAugs #${1 + +readyFiley(ns2, "temp/installCounter.txt")}: ${log} - ${Date().slice(4, 24)}`, "w");
  !await Run(ns2, "fileExists", ["temp/installCounter.txt"]) && ns2.write("temp/installCounter.txt", "0", "w"), bought_augs.includes(CON.TRP) && (writeLog("installed The Red Pill"), await Run(ns2, "singularity.softReset", ["rset.js"])), // if have TRP then install asap
  !await is_Busy(ns2) && !!bought_augs.length && (checkTimeout() || checkFavour()) && (ns2.write("temp/installCounter.txt", (1 + +readyFiley(ns2, "temp/installCounter.txt")).toString(), "w"), ns2.write("report/installAugsLog.txt", readyFiley(ns2, "temp/installAugsReason.txt") + "\n", "a"), await Run(ns2, "singularity.installAugmentations", ["rset.js"]));
}
function buyAugs(ns2, s = ns2.singularity) {
  const odd_factions = ["Bladeburners", "Church of the Machine God"];
  const availableAugs2 = readyFiley(ns2, "temp/availableAugs.txt");
  const timeStamp = () => ns2.write("temp/lastAugTime.txt", "" + Date.now(), "w");
  const termPrint = (aug, faction, price) => ns2.tprintf(
    `${util.ansi.m}Purchased ${util.ansi.c}${aug}${util.ansi.m} from ${faction} for ${util.cashFormat(ns2, price)}`
  );
  ns2.getPlayer().factions.forEach(
    (fact) => fact != CON.GANG_NAME && s.purchaseAugmentation(fact, CON.NFG) && (timeStamp(), termPrint(CON.NFG, fact, ns2.singularity.getAugmentationPrice(CON.NFG)))
  ), availableAugs2.forEach(
    (aug) => s.purchaseAugmentation(aug.fact.name, aug.aug) && (timeStamp(), termPrint(aug.aug, aug.fact.name, aug.price))
  ), odd_factions.forEach(
    (fac) => s.getAugmentationsFromFaction(fac).forEach((aug) => s.purchaseAugmentation(fac, aug))
  );
}
async function availableAugs(ns2, s = ns2.singularity) {
  const owned_augs = await Run(ns2, "singularity.getOwnedAugmentations", [1]);
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
  const steves2 = (await util.getIndexArray(8).mapAsync(async (s) => [s, await Run(ns2, "sleeve.getSleeve", [s], "storedCycles")])).sort((a, b) => b[1] - a[1]).map((r) => r[0]);
  const get_low_skill = (steve) => ["strength", "defense", "dexterity", "agility"].reduce(
    (a, skill) => steve.skills[skill] < 25 ? skill : a,
    false
  );
  const try_train = async (steve) => await (async (skill) => skill && (await Run(ns2, "sleeve.travel", [steve, "Sector-12"]), await Run(ns2, "sleeve.setToGymWorkout", [steve, "Powerhouse Gym", skill.toString()])))(get_low_skill(await Run(ns2, "sleeve.getSleeve", [steve])));
  const try_stabbin = async (steve) => !(await Run(ns2, "gang.inGang") ? await Run(ns2, "sleeve.setToCommitCrime", [steve, "Homicide"]) : false);
  const bb_infil = async (steve) => !await steves2.someAsync(async (steve2) => await Run(ns2, "sleeve.getTask", [steve2], "type") == "INFILTRATE") && await Run(ns2, "sleeve.setToBladeburnerAction", [steve, "Infiltrate synthoids"]);
  const bb_contracts = async (steve) => (await Run(ns2, "bladeburner.getContractNames")).someAsync(
    async (contract) => await steves2.everyAsync(async (steve2) => await Run(ns2, "sleeve.getTask", [steve2], "actionName") !== contract) && await Run(ns2, "bladeburner.getActionCountRemaining", ["Contract", contract]) && await Run(ns2, "sleeve.setToBladeburnerAction", [steve, "Take on contracts", contract])
  );
  const buy_augs = async (steve) => !(await Run(ns2, "sleeve.getSleeve", [steve])).shock ? (await Run(ns2, "sleeve.getSleevePurchasableAugs", [steve])).sort((a, b) => a.cost - b.cost).forEachAsync(async (aug) => await Run(ns2, "sleeve.purchaseSleeveAug", [steve, aug.name])) : false;
  await steves2.forEachAsync(async (steve) => await Run(ns2, "sleeve.setToIdle", [steve])), await steves2.forEachAsync(async (steve) => await buy_augs(steve) || ((await Run(ns2, "sleeve.getSleeve", [steve])).shock > 90 ? await Run(ns2, "sleeve.setToShockRecovery", [steve]) : await try_train(steve) || await try_stabbin(steve) || await Run(ns2, "bladeburner.inBladeburner") && (await bb_infil(steve) || await bb_contracts(steve)) || ((await Run(ns2, "sleeve.getSleeve", [steve])).shock ? await Run(ns2, "sleeve.setToShockRecovery", [steve]) : await Run(ns2, "sleeve.setToIdle", [steve]))));
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
  !!target && (spare_threads > 0 && !isNaN(target.numCharge) ? ns2.exec("chrg.js", "home", spare_threads, target.x, target.y) : ns2.print("no threads! skipping...")), ns2.writePort(ns2.pid, ""), await util.slp(1e4)(), await stan(ns2);
}
async function runGang(n, g = n.gang) {
  const tryRecruit = (name = CON.MEMBER_NAMES[Math.floor(Math.random() * CON.MEMBER_NAMES.length)]) => g.getMemberNames().includes(name) ? tryRecruit() : g.recruitMember(name) && n.tprintf(`${util.ansi.r}Recruited ${util.ansi.g}${name}`);
  const setTW = () => g.setTerritoryWarfare(Object.keys(other_gang_info()).every((h) => g.getChanceToWinClash(h) >= 0.5));
  const slp = async (t) => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1));
  const other_gang_info = g.getOtherGangInformation;
  const tick = async (l = null) => await (async (q) => (l = q(), await n.sleep(50), l == q() && await tick()))(() => Object.values(other_gang_info()).reduce((a, b) => a + b.power, 0));
  const focus = () => g.getMemberNames().length > 9 ? "moneyGain" : "respectGain";
  const assignJob = (task) => (g.getMemberNames().forEach(
    (member) => (g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)), g.setMemberTask(
      member,
      task ?? g.getTaskNames().reduce(
        (a, b) => (g.setMemberTask(member, b), ((gain) => gain < a.gain ? a : { b, gain })(g.getMemberInformation(member)[focus()]))
      ).b
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
      (a2, b) => (g.setMemberTask(m, b), (i) => i < a2.i ? a2 : { b, i })(
        g.getMemberInformation(m)[g.getMemberNames().length > 9 ? "moneyGain" : "respectGain"]
      )
    ).n
  ))
)) {
  (g.inGang() || g.createGang("Slum Snakes")) && (g.recruitMember(Math.random()), g.setTerritoryWarfare(q()[0]), a(void 0), await s(15e3), a("Train Combat"), await s(4500), a("Territory Warfare"), await t(1), await golfedGang(n));
}
async function prsm(ns2, isPrepped = false) {
  function checkPrepped(target2) {
    return target2.moneyMax * 0.9 < target2.moneyAvailable && target2.minDifficulty + 3 > target2.hackDifficulty;
  }
  function writeWorkers() {
    ["hack", "grow", "weaken"].forEach(
      (script) => (!ns2.fileExists(script) && ns2.write(
        `${script}.js`,
        `export const main = async ns => (ns.atExit(() => ns.writePort(ns.pid, "")), await ns.${script}(ns.args[0], { additionalMsec: ns.args[1] }))`,
        "w"
      ), sGet(ns2).forEach((server) => ns2.scp(`${script}.js`, server)))
    );
  }
  function batch(ns3, target2, host_list2) {
    const questionable = Object.entries(
      (([nhack2, ngrow2]) => [nhack2, ngrow2, Math.ceil(nhack2 * 0.04), Math.ceil(nhack2 * 0.08)])(((nhack2) => [nhack2, Math.ceil(ns3.growthAnalyze(target2.hostname, 1 / (1 - ns3.formulas.hacking.hackPercent(target2, ns3.getPlayer()) * nhack2)))])(Math.max(~~ns3.hackAnalyzeThreads(target2.hostname, target2.moneyMax * 0.01), 1)))
    );
    const nhack = Math.max(~~ns3.hackAnalyzeThreads(target2.hostname, target2.moneyMax * 0.01), 1);
    const ngrow = 10 + Math.ceil(ns3.growthAnalyze(target2.hostname, 1 / (1 - ns3.formulas.hacking.hackPercent(target2, ns3.getPlayer()) * nhack)));
    const hweaken = Math.ceil(nhack * 0.04);
    const gweaken = Math.ceil(nhack * 0.08);
    const job_ents = Object.entries({ nhack, hweaken, ngrow, gweaken });
    const batch_ram_total = job_ents.reduce((r, [k, v]) => r + ns3.getScriptRam(k.slice(1) + ".js") * v, 0);
    host_list2.map((host) => ({
      host,
      batch: job_ents.map(([key, val]) => ({
        scr: key.slice(1) + ".js",
        thr: val * ~~((ns3.getServerMaxRam(host) - ns3.getServerUsedRam(host) - (host == "home" ? 100 : 0)) / batch_ram_total),
        buff: ns3.getWeakenTime(target2.hostname) - ns3["get" + [key.slice(1, 2).toUpperCase(), ...key.slice(2)].join("") + "Time"](target2.hostname)
      }))
    })).filter(({ batch: batch2 }) => batch2.map(({ thr }) => thr).every(Boolean)).forEach(({ host, batch: batch2 }) => batch2.forEach(({ scr, thr, buff }) => ns3.exec(scr, host, thr, target2.hostname, buff)));
  }
  function prep(ns3, target2, host_list2) {
    const reqWeaken = ~~((target2.hackDifficulty - target2.minDifficulty) / ns3.weakenAnalyze(1));
    const reqGrow = Math.ceil(ns3.growthAnalyze(target2.hostname, target2.moneyMax / target2.moneyAvailable));
    const send = (script, req) => host_list2.reduce(
      ([last_pid, n], host) => n >= req ? [last_pid, n] : ((threads) => threads > 0 ? [ns3.exec(script + ".js", host, threads, target2.hostname), n + threads] : [last_pid, n])(
        ~~((ns3.getServerMaxRam(host) - ns3.getServerUsedRam(host) - (host == "home" ? 100 : 0)) / ns3.getScriptRam(script + ".js"))
      ),
      [NaN, 0]
    );
    return Math.max(...[
      send("weaken", reqWeaken)[0],
      send("grow", reqGrow)[0]
    ]);
  }
  const host_list = sGet(ns2).filter((server) => ns2.getServerMaxRam(server) && ns2.hasRootAccess(server) && !server.includes("hacknet"));
  const target = ns2.getServer(sGet(ns2).reduce(
    (a, b, rank) => (rank = (s) => ns2.getServerMaxMoney(s) / ns2.getServerMinSecurityLevel(s), ns2.hasRootAccess(b) && ns2.getServerRequiredHackingLevel(b) <= ns2.getHackingLevel() / 2 && rank(a) < rank(b) ? b : a),
    "n00dles"
  ));
  isPrepped = checkPrepped(ns2.getServer(target.hostname));
  ns2.ramOverride(20), writeWorkers(), isPrepped ? batch(ns2, target, host_list) : prep(ns2, target, host_list), ns2.writePort(ns2.pid, { target: target.hostname, state: isPrepped ? "batch" : "prep" }), await ns2.sleep(ns2.getWeakenTime(target.hostname)), await prsm(ns2, checkPrepped(ns2.getServer(target.hostname)));
}
async function prsm2(ns2) {
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
    const hack_jobs = Math.max(~~ns2.hackAnalyzeThreads(target.hostname, target.moneyMax * 0.01), 1);
    const grow_jobs = Math.ceil(ns2.growthAnalyze(target.hostname, 1 / (1 - ns2.formulas.hacking.hackPercent(target, ns2.getPlayer()) * hack_jobs)));
    const sec_jobs = (target.hackDifficulty - target.minDifficulty) / ns2.weakenAnalyze(1);
    const wekn_jobs = Math.ceil(sec_jobs + hack_jobs * 0.04 + grow_jobs * 0.08);
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
    ns2.clearPort(ns2.pid), ns2.writePort(ns2.pid, target.hostname), await util.slp(batch_delay)(), await runLoop(batch_complete_p_obj);
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
  await ascii.forEachAsync(async (l) => (ns2.tprintf(l), await util.slp(Math.random() * 10 * 7)()));
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
    const ascii = pos.x > x ? CON.DOGGO_ASCII[1] : CON.DOGGO_ASCII[0];
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
    ns.print(barkval === void 0 ? ascii.join("\n") : bark(ns, barkval.bark));
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
  "Find Largest Prime Factor": function(num, div = 2) {
    while (num > 1)
      num % div ? div++ : num /= div;
    return div;
  },
  "Subarray with Maximum Sum": function(arr) {
    return Math.max(...arr.flatMap((_, i) => arr.slice(i).reduce((r, b, i2) => [...r, b + r[i2]], [0])));
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
  "Array Jumping Game": function(a) {
    return +!!a.reduce((r, b, i) => r < i ? 0 : r > b + i ? r : b + i, 0);
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
    return String.fromCharCode(...[...text].map((c) => ((n) => (n < 32 ? i : n < 65 ? 26 : 0) + n)(c.charCodeAt() - i)));
  },
  "Encryption II: Vigen\xE8re Cipher": function(a, [s, k] = a.map((s2) => [...s2].map((c) => c.charCodeAt() - 65)), v = [...Array(26).keys()].map((i, _, a2) => a2.map((j) => (i + j) % 26 + 65))) {
    return String.fromCharCode(...s.map((n, i) => v[n][k[i % k.length]]));
  }
};
function contracts(ns2) {
  sGet(ns2).flatMap((host) => ns2.ls(host, ".cct").map((cct) => [host, cct, ns2.codingcontract.getContractType(cct, host)])).forEach(([host, cct, type]) => ((result) => result ? ns2.tprintf(`${util.ansi.g}Completed ${type} ~ ${cct} on ${host} ~ ${result}`) : (ns2.tprintf(`${util.ansi.r}Failed ${type} ~ ${cct} on ${host}`), ns2.rm(cct, host)))(
    ns2.codingcontract.attempt(solvers[ns2.codingcontract.getContractType(cct, host)](ns2.codingcontract.getData(cct, host)), cct, host)
  ));
}
export {
  CON,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc2VydmVycy9ob21lL2xpYi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgRmFjdGlvbldvcmtUeXBlLCBHYW5nT3RoZXJJbmZvT2JqZWN0LCBOUywgU2xlZXZlUGVyc29uIH0gZnJvbSBcIk5ldHNjcmlwdERlZmluaXRpb25zXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEFycmF5PFQ+IHtcbiAgICBmb3JFYWNoQXN5bmMoZm46ICh2OiBUKSA9PiBQcm9taXNlPHZvaWQ+KTogUHJvbWlzZTx2b2lkPjtcbiAgICBtYXBBc3luYzxFPihmbjogKHY6IFQpID0+IFByb21pc2U8RVtdPik6IFByb21pc2U8RVtdPjtcbiAgICBzb21lQXN5bmMoZm46ICh2OiBUKSA9PiBQcm9taXNlPGJvb2xlYW4+KTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBldmVyeUFzeW5jKGZuOiAodjogVCkgPT4gUHJvbWlzZTxib29sZWFuPik6IFByb21pc2U8Ym9vbGVhbj47XG4gIH1cbn1cblxuQXJyYXkucHJvdG90eXBlLmZvckVhY2hBc3luYyA9IGFzeW5jIGZ1bmN0aW9uIDxUPihmbjogKHY6IFQpID0+IFByb21pc2U8dm9pZD4pOiBQcm9taXNlPHZvaWQ+IHsgYXdhaXQgdGhpcy5yZWR1Y2UoYXN5bmMgKGxhc3Q6IFByb21pc2U8dm9pZD4sIGN1cnIpID0+IChhd2FpdCBsYXN0LCBmbihjdXJyKSksIHZvaWQgbnVsbCkgfVxuXG5BcnJheS5wcm90b3R5cGUubWFwQXN5bmMgPSBhc3luYyBmdW5jdGlvbiA8RT4oZm46ICh2OiBFKSA9PiBQcm9taXNlPEU+KTogUHJvbWlzZTxFW10+IHtcbiAgcmV0dXJuIGF3YWl0IHRoaXMucmVkdWNlKGFzeW5jIChyZXQsIGN1ciwgaSkgPT4gYXdhaXQgKChhc3luYyBuZXdBcnIgPT4gKG5ld0FycltpXSA9IGF3YWl0IGZuKGN1ciksIG5ld0FycikpKGF3YWl0IHJldCkpLCAoYXN5bmMgKCkgPT4gQXJyYXkuZnJvbTxFPih7IGxlbmd0aDogdGhpcy5sZW5ndGggfSkpKCkpXG59XG5cbkFycmF5LnByb3RvdHlwZS5zb21lQXN5bmMgPSBhc3luYyBmdW5jdGlvbiA8VD4oZnVuYzogKHY6IFQpID0+IFByb21pc2U8Ym9vbGVhbj4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIGF3YWl0IHRoaXMucmVkdWNlKGFzeW5jIChyZXQsIGN1cikgPT4gKGF3YWl0IHJldCkgfHwgYXdhaXQgZnVuYyhjdXIpLCAoYXN5bmMgKCkgPT4gZmFsc2UpKCkpXG59XG5cbkFycmF5LnByb3RvdHlwZS5ldmVyeUFzeW5jID0gYXN5bmMgZnVuY3Rpb24gPFQ+KGZ1bmM6ICh2OiBUKSA9PiBQcm9taXNlPGJvb2xlYW4+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBhd2FpdCB0aGlzLnJlZHVjZShhc3luYyAocmV0LCBjdXIpID0+IChhd2FpdCByZXQpICYmIGF3YWl0IGZ1bmMoY3VyKSwgKGFzeW5jICgpID0+IHRydWUpKCkpXG59XG5cbmV4cG9ydCB7XG4gIENPTixcbiAgUnVuLFxuICBhdmFpbGFibGVBdWdzLFxuICBiYWNrZG9vcixcbiAgYmJ1cm5lcixcbiAgYmQsXG4gIGJ1eUF1Z3MsXG4gIGJ1eVRPUixcbiAgY29udHJhY3RzLFxuICBjb3Jlc1VwLFxuICBkNDNtMG5EMzU3cjB5LFxuICBkYXJrd2ViU2hvcHBpbmcsXG4gIGRvbmF0ZSxcbiAgZG93bkRvZyxcbiAgZmFjdFdvcmssXG4gIGZhY3Rpb25Kb2luLFxuICBnb2xmZWRHYW5nLFxuICBncmFmdCxcbiAgZ3ZucixcbiAgaGFja25ldFNoaW5kaWdzLFxuICBpbnN0YWxsQXVncyxcbiAgaXNfQnVzeSxcbiAgbWFpbixcbiAgbXVyZGVyYXRlLFxuICBuZW9mZXRjaCxcbiAgcFNlcnYsXG4gIHBlcnN1YWRlLFxuICBwcnNtLFxuICByYW1VcCxcbiAgcnVuR2FuZyxcbiAgc0dldCxcbiAgc3RhbixcbiAgc3RldmVzLFxuICB1dGlsLFxuICB3cml0ZUxhdW5jaGVycyxcbn07XG50eXBlIENvbnN0YW50cyA9IHtcbiAgQ1lDTEVfUkFURTogbnVtYmVyO1xuICBORkc6IHN0cmluZztcbiAgVFJQOiBzdHJpbmc7XG4gIEdBTkdfTkFNRTogc3RyaW5nO1xuICBBVUdTX1RPX0JVWTogcmVhZG9ubHkgc3RyaW5nW107XG4gIEFMTF9GQUNUSU9OUzogcmVhZG9ubHkgc3RyaW5nW107XG4gIE1FTUJFUl9OQU1FUzogcmVhZG9ubHkgc3RyaW5nW107XG4gIExPT1BfRlVOQ1RJT05TOiByZWFkb25seSBzdHJpbmdbXTtcbiAgT05FU0hPVF9GVU5DVElPTlM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICBVVElMX0ZVTkNUSU9OUzogcmVhZG9ubHkgc3RyaW5nW107XG4gIERPQzogRG9jdW1lbnQ7XG4gIFdJTjogV2luZG93O1xuXG4gIERPR0dPX0FTQ0lJOiByZWFkb25seSBzdHJpbmdbXVtdO1xufVxuY29uc3QgQ09OOiBDb25zdGFudHMgPSB7XG4gIENZQ0xFX1JBVEU6IDQwLFxuICBORkc6IFwiTmV1cm9GbHV4IEdvdmVybm9yXCIsXG4gIFRSUDogXCJUaGUgUmVkIFBpbGxcIixcbiAgR0FOR19OQU1FOiBcIlNsdW0gU25ha2VzXCIsXG4gIEFVR1NfVE9fQlVZOiBbXG4gICAgXCJTb2NpYWwgTmVnb3RpYXRpb24gQXNzaXN0YW50IChTLk4uQSlcIixcbiAgICBcIk51b3B0aW1hbCBOb290cm9waWMgSW5qZWN0b3IgSW1wbGFudFwiLFxuICAgIFwiQURSLVYxIFBoZXJvbW9uZSBHZW5lXCIsXG4gICAgXCJTcGVlY2ggRW5oYW5jZW1lbnRcIixcbiAgICBcIldpcmVkIFJlZmxleGVzXCIsXG4gICAgXCJDcmFuaWFsIFNpZ25hbCBQcm9jZXNzb3JzIC0gR2VuIElcIixcbiAgICBcIkJpdFdpcmVcIixcbiAgICBcIlN5bmFwdGljIEVuaGFuY2VtZW50IEltcGxhbnRcIixcbiAgICBcIk5ldXJvdHJhaW5lciBJXCIsXG4gICAgXCJDcmFuaWFsIFNpZ25hbCBQcm9jZXNzb3JzIC0gR2VuIElJXCIsXG4gICAgXCJDUlRYNDItQUEgR2VuZSBNb2RpZmljYXRpb25cIixcbiAgICBcIkVtYmVkZGVkIE5ldGJ1cm5lciBNb2R1bGVcIixcbiAgICBcIk5ldXJhbC1SZXRlbnRpb24gRW5oYW5jZW1lbnRcIixcbiAgICBcIkFydGlmaWNpYWwgU3luYXB0aWMgUG90ZW50aWF0aW9uXCIsXG4gICAgXCJOZXVyb3RyYWluZXIgSUlcIixcbiAgICBcIlRoZSBCbGFjayBIYW5kXCIsXG4gICAgXCJFbWJlZGRlZCBOZXRidXJuZXIgTW9kdWxlIENvcmUgSW1wbGFudFwiLFxuICAgIFwiQ3JhbmlhbCBTaWduYWwgUHJvY2Vzc29ycyAtIEdlbiBJVlwiLFxuICAgIFwiTmV1cmFsc3RpbXVsYXRvclwiLFxuICAgIFwiRW5oYW5jZWQgTXllbGluIFNoZWF0aGluZ1wiLFxuICAgIFwiTmV1cmFsIEFjY2VsZXJhdG9yXCIsXG4gICAgXCJDcmFuaWFsIFNpZ25hbCBQcm9jZXNzb3JzIC0gR2VuIElJSVwiLFxuICAgIFwiRGF0YUphY2tcIixcbiAgICBcIkVtYmVkZGVkIE5ldGJ1cm5lciBNb2R1bGUgQ29yZSBWMiBVcGdyYWRlXCIsXG4gICAgXCJCaXRSdW5uZXJzIE5ldXJvbGlua1wiLFxuICAgIFwiQ3JhbmlhbCBTaWduYWwgUHJvY2Vzc29ycyAtIEdlbiBWXCIsXG4gICAgXCJBcnRpZmljaWFsIEJpby1uZXVyYWwgTmV0d29yayBJbXBsYW50XCIsXG4gICAgXCJDYXNoUm9vdCBTdGFydGVyIEtpdFwiLFxuICAgIFwiQXVnbWVudGVkIFRhcmdldGluZyBJXCIsXG4gICAgXCJBdWdtZW50ZWQgVGFyZ2V0aW5nIElJXCIsXG4gICAgXCJTcGVlY2ggUHJvY2Vzc29yIEltcGxhbnRcIixcbiAgICBcIk5hbm9maWJlciBXZWF2ZVwiLFxuICAgIFwiSW5mb0xvYWRcIixcbiAgICBcIkFEUi1WMiBQaGVyb21vbmUgR2VuZVwiLFxuICAgIFwiRUNvcnAgSFZNaW5kIEltcGxhbnRcIixcbiAgICBcIlFMaW5rXCIsXG4gICAgXCJUaGUgUmVkIFBpbGxcIlxuICBdLFxuICBBTExfRkFDVElPTlM6IFtcbiAgICBcIklsbHVtaW5hdGlcIixcbiAgICBcIkRhZWRhbHVzXCIsXG4gICAgXCJUaGUgQ292ZW5hbnRcIixcbiAgICBcIkVDb3JwXCIsXG4gICAgXCJNZWdhQ29ycFwiLFxuICAgIFwiQmFjaG1hbiAmIEFzc29jaWF0ZXNcIixcbiAgICBcIkJsYWRlIEluZHVzdHJpZXNcIixcbiAgICBcIk5XT1wiLFxuICAgIFwiQ2xhcmtlIEluY29ycG9yYXRlZFwiLFxuICAgIFwiT21uaVRlayBJbmNvcnBvcmF0ZWRcIixcbiAgICBcIkZvdXIgU2lnbWFcIixcbiAgICBcIkt1YWlHb25nIEludGVybmF0aW9uYWxcIixcbiAgICBcIkZ1bGNydW0gU2VjcmV0IFRlY2hub2xvZ2llc1wiLFxuICAgIFwiQml0UnVubmVyc1wiLFxuICAgIFwiVGhlIEJsYWNrIEhhbmRcIixcbiAgICBcIk5pdGVTZWNcIixcbiAgICBcIkFldnVtXCIsXG4gICAgXCJDaG9uZ3FpbmdcIixcbiAgICBcIklzaGltYVwiLFxuICAgIFwiTmV3IFRva3lvXCIsXG4gICAgXCJTZWN0b3ItMTJcIixcbiAgICBcIlZvbGhhdmVuXCIsXG4gICAgXCJTcGVha2VycyBmb3IgdGhlIERlYWRcIixcbiAgICBcIlRoZSBEYXJrIEFybXlcIixcbiAgICBcIlRoZSBTeW5kaWNhdGVcIixcbiAgICBcIlNpbGhvdWV0dGVcIixcbiAgICBcIlRldHJhZHNcIixcbiAgICBcIlNsdW0gU25ha2VzXCIsXG4gICAgXCJOZXRidXJuZXJzXCIsXG4gICAgXCJUaWFuIERpIEh1aVwiLFxuICAgIFwiQ3liZXJTZWNcIixcbiAgICBcIkJsYWRlYnVybmVyc1wiLFxuICAgIFwiQ2h1cmNoIG9mIHRoZSBNYWNoaW5lIEdvZFwiLFxuICAgIFwiU2hhZG93cyBvZiBBbmFyY2h5XCJcbiAgXSxcbiAgTUVNQkVSX05BTUVTOiBbXG4gICAgXCJUb255IEhhcnJpc29uXCIsXG4gICAgXCJLYXRoeSBSaW5kaG9vcHNcIixcbiAgICBcIkppbW15IExhemVyc1wiLFxuICAgIFwiTmFib28gdGhlIEVuaWdtYVwiLFxuICAgIFwiSGVsZW4gQmFja1wiLFxuICAgIFwiVHVidWxhciBUb255XCIsXG4gICAgXCJTdGFiYnkgQ2xhcmtzb25cIixcbiAgICBcIkNhcmxcIixcbiAgICBcIlBvb3BzIE1jZ2hlZVwiLFxuICAgIFwiSGFpcnkgRGFuXCIsXG4gICAgXCJXaWxsIEJhcnJvd1wiLFxuICAgIFwiQmFycnkgVGhyZWUtTmlwc1wiLFxuICAgIFwiTWFya2t1c1wiLFxuICAgIFwiUGF0cmljaWEgTydWaW9sZW5jZVwiLFxuICAgIFwiUGF0IE8nQ2FrZVwiLFxuICAgIFwiUmF5IEZyaWRnZXJhdG9yXCIsXG4gICAgXCJTYW1teSB0aGUgU3F1aWRcIixcbiAgICBcIlNsYW50eSBCb2IgKG9uZSBsZWcpXCIsXG4gICAgXCJCYXN0YXJkIE1hblwiLFxuICAgIFwiTWFuLVNwaWRlclwiLFxuICAgIFwiTm9uLUJpbyBCcnVjZVwiLFxuICAgIFwiUm9ja2hlYWQgUnVtcGxlXCIsXG4gICAgXCJKb2V5IFRhZ2xpYXRlbGxlXCIsXG4gICAgXCJKb2hubnkgU2VnbWVudFwiXG4gIF0sXG4gIExPT1BfRlVOQ1RJT05TOiBbXCJzdGFuXCIsIFwicnVuR2FuZ1wiLCBcInByc21cIiwgLypcImRvd25Eb2dcIiovXSxcbiAgT05FU0hPVF9GVU5DVElPTlM6IFtcbiAgICBcImRhcmt3ZWJTaG9wcGluZ1wiLFxuICAgIFwiYXZhaWxhYmxlQXVnc1wiLFxuICAgIFwiaGFja25ldFNoaW5kaWdzXCIsXG4gICAgXCJwU2VydlwiLFxuICAgIFwiZmFjdGlvbkpvaW5cIixcbiAgICBcImZhY3RXb3JrXCIsXG4gICAgXCJtdXJkZXJhdGVcIixcbiAgICBcImQ0M20wbkQzNTdyMHlcIixcbiAgICBcInJhbVVwXCIsXG4gICAgXCJjb3Jlc1VwXCIsXG4gICAgXCJidXlUT1JcIixcbiAgICBcImJhY2tkb29yXCIsXG4gICAgXCJncmFmdFwiLFxuICAgIFwiZG9uYXRlXCIsXG4gICAgXCJidXlBdWdzXCIsXG4gICAgXCJpbnN0YWxsQXVnc1wiLFxuICAgIFwicGVyc3VhZGVcIixcbiAgICBcInN0ZXZlc1wiLFxuICAgIFwiYmJ1cm5lclwiLFxuICAgIFwiY29udHJhY3RzXCJcbiAgXSxcbiAgVVRJTF9GVU5DVElPTlM6IFtcImJkXCIsIFwiZ3ZuclwiLCBcIm5lb2ZldGNoXCJdLFxuICBET0dHT19BU0NJSVxuICAgIDogW1xuICAgICAgW2AgICAgX19fYCwgYCBfXy9fLCAgXFxgLiAgLi1cIlwiXCItLmAsIGAgXFxcXF8sICB8IFxcXFwtJyAgLyAgIClcXGAtJylgLCBgICBcIlwiKSBcXGBcIlxcYCAgICBcXCAgKChcXGBcIlxcYGAsIGAgX19fWSAgLCAgICAuJzcgL3xgLCBgKF8sX19fLy4uLi1cXGAgKF8vXy8gICAgICAgICBgXSxcbiAgICAgIFtgICAgICAgICAgICAgICAgICBfX19gLCBgICAgICAgLi1cIlwiXCItLiAgLlxcYCAsX1xcXFxfX2AsIGAgKCctXFxgKCAgIFxcXFwgICctLyB8ICAgLF8vICAgYCwgYCAgIFxcYFwiXFxgKSkgICAgICAgXFxgXCJcXGAgKFwiXCJgLCBgICAgICAgfFxcXFwgNCcuICAgICwgIFlfX19gLCBgICAgICAgXFxcXF9cXFxcXykgXFxgLS4uLlxcXFxfX18sXylgXVxuICAgIF0sXG4gIFdJTjogZXZhbChcIndpbmRvd1wiKSxcbiAgRE9DOiBldmFsKFwiZG9jdW1lbnRcIiksXG59IGFzIGNvbnN0O1xuXG5jb25zdCBIT09LUyA9IFtcbiAgQ09OLkRPQy5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3LWV4dHJhLWhvb2stMFwiKSxcbiAgQ09OLkRPQy5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3LWV4dHJhLWhvb2stMVwiKVxuXTtcblxuY29uc3QgdXRpbCA9IHtcbiAgbG1hb2NhdDogYXN5bmMgZnVuY3Rpb24gKGVsZW1lbnRfaWQ6IHN0cmluZywgZXh0cmFfc3R5bGU6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gMWU0KSB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgMTAwKSk7XG4gICAgY29uc3QgUEkgPSBNYXRoLlBJO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBDT04uRE9DLmdldEVsZW1lbnRCeUlkKGVsZW1lbnRfaWQpO1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcbiAgICBjb25zdCBjb2xfb2Zmc2V0ID0gNTA7XG4gICAgY29uc3QgcmFuZF90aGV0YSA9ICgpID0+IE1hdGgucmFuZG9tKCkgKiBQSTtcbiAgICBjb25zdCBjYWxjX3NpbiA9IChpLCBhbmdsZSwgdGhldGEpID0+IH5+KE1hdGguYWJzKE1hdGguY29zKCh0aGV0YSArIGFuZ2xlKSAqIGkpKSAqICgyNTUgLSBjb2xfb2Zmc2V0KSkgKyBjb2xfb2Zmc2V0O1xuICAgIGNvbnN0IGdlbl9yZ2IgPSAoaSwgbCkgPT5cbiAgICAgIGBjb2xvcjpyZ2IoJHtjYWxjX3NpbihpLCAwLCBsLnRoZXRhcy5yKX0sJHtjYWxjX3NpbihpLCAoMiAqIFBJKSAvIDMsIGwudGhldGFzLmcpfSwke2NhbGNfc2luKGksICg0ICogUEkpIC8gMywgbC50aGV0YXMuYil9YDtcbiAgICBjb25zdCBwcmludF9tYXAgPSBbLi4udGV4dF0ubWFwKChsKSA9PiAoe1xuICAgICAgbGV0dGVyOiBsLFxuICAgICAgdGhldGFzOiB7XG4gICAgICAgIHI6IHJhbmRfdGhldGEoKSxcbiAgICAgICAgZzogcmFuZF90aGV0YSgpLFxuICAgICAgICBiOiByYW5kX3RoZXRhKCksXG4gICAgICB9LFxuICAgIH0pKTtcbiAgICBhd2FpdCBsb29wKHByaW50X21hcCwgdGltZW91dCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb29wKHByaW50X21hcCwgdGltZW91dDogbnVtYmVyLCBpID0gMSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgQ09OLkRPQy5nZXRFbGVtZW50QnlJZChlbGVtZW50X2lkKS5pbm5lckhUTUwgPSBwcmludF9tYXBcbiAgICAgICAgICAubWFwKChsKSA9PiBgPHNwYW4gc3R5bGU9XCIke2V4dHJhX3N0eWxlfSR7Z2VuX3JnYihpLCBsKX1cIj4ke2wubGV0dGVyfTwvc3Bhbj5gKVxuICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgICAgfSBjYXRjaCB7IH1cbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIDUwKSk7XG4gICAgICBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgYXdhaXQgbG9vcChwcmludF9tYXAsIHRpbWVvdXQgLSA1MCwgaSArIDAuMDUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmdiQ29sOiAocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgZmc6IGJvb2xlYW4gPSB0cnVlKSA9PiBgXFx4MUJbJHtmZyA/IFwiM1wiIDogXCI0XCJ9ODsyOyR7cn07JHtnfTske2J9bWAsXG4gIGFuc2k6IHtcbiAgICAvLyByZWRcbiAgICByOiBcIlxceDFCWzMxbVwiLFxuICAgIC8vIGdyZWVuXG4gICAgZzogXCJcXHgxQlszMm1cIixcbiAgICAvLyBibHVlXG4gICAgYjogXCJcXHgxQlszNG1cIixcbiAgICAvLyBjeWFuXG4gICAgYzogXCJcXHgxQlszNm1cIixcbiAgICAvLyBtYWdlbnRhXG4gICAgbTogXCJcXHgxQlszNW1cIixcbiAgICAvLyB5ZWxsb3dcbiAgICB5OiBcIlxceDFCWzMzbVwiLFxuICAgIC8vIGtleShibGFjaylcbiAgICBrOiBcIlxceDFCWzMwbVwiLFxuICAgIC8vIHdoaXRlXG4gICAgdzogXCJcXHgxQlszN21cIixcbiAgICAvLyBkZWZhdWx0XG4gICAgZDogXCJcXHgxQlswbVwiLFxuICAgIC8vIGJvbGRcbiAgICBibDogXCJcXHgxQlsxbVwiLFxuICB9LFxuICBnZXRJbmRleEFycmF5OiAobjogbnVtYmVyKTogbnVtYmVyW10gPT4gWy4uLkFycmF5KG4pLmtleXMoKV0sXG4gIHRpY2tTdHJpbmc6ICh0OiBudW1iZXIsIGwgPSA0MCk6IHN0cmluZyA9PiAodCAlIGwgPyBcIiNcIi5yZXBlYXQoKHQgLyA0KSAlIChsIC8gNCkpICsgYHwvLVxcXFxgW3QgJSA0XSA6IFwiIy0tZXhlYy0tI1wiKSxcbiAgZGlnaUNsb2NrOiAociA9IERhdGUubm93KCksIGMgPSAodDogbnVtYmVyLCBkID0gNjAsIHYgPSAociAvIHQpICUgZCB8IDApID0+ICh2IDw9IDkgPyBcIjBcIiArIHYgOiB2KSk6IHN0cmluZyA9PiAociA8IDg2NGU1ID8gXCJcIiA6IGMoODY0ZTUsIDEgLyAwKSArIFwiLVwiKSArIGMoMzZlNSwgMjQpICsgXCI6XCIgKyBjKDZlNCkgKyBcIjpcIiArIGMoMWUzKSxcbiAgcmFtRm9ybWF0OiAocmFtOiBudW1iZXIpOiBzdHJpbmcgPT4gcmFtIDwgMWUzID8gcmFtLnRvRml4ZWQoMikgKyBcIkdCXCIgOiByYW0gPCAxZTYgPyAocmFtIC8gMWUzKS50b0ZpeGVkKDIpICsgXCJUQlwiIDogKHJhbSAvIDFlNikudG9GaXhlZCgyKSArIFwiUEJcIixcbiAgY2FzaEZvcm1hdDogKG5zOiBOUywgY2FzaDogbnVtYmVyKTogc3RyaW5nID0+IFwiJFwiICsgbnMuZm9ybWF0TnVtYmVyKGNhc2gpLFxuICBzbHA6ICh0OiBudW1iZXIpID0+IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHQpKSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4objogTlMpIHtcbiAgKFxuICAgIG4ucHMoKS5mb3JFYWNoKChzKSA9PiBuLmNsb3NlVGFpbChzLnBpZCkpLFxuICAgIHNHZXQobikuZm9yRWFjaCgocykgPT4gbi5raWxsYWxsKHMsIHRydWUpKSxcbiAgICAhbi5hcmdzLmxlbmd0aCAmJiAod3JpdGVMYXVuY2hlcnMobiksIG4ucnVuKFwidXRpbC9ndm5yLmpzXCIpKVxuICApXG59XG5cbmZ1bmN0aW9uIHdyaXRlTGF1bmNoZXJzKG5zOiBOUyk6IHZvaWQge1xuICAoXG4gICAgW1wib25lc2hvdFwiLCBcImxvb3BcIiwgXCJ1dGlsXCJdLmZvckVhY2goKGRpcikgPT4gbnMubHMoXCJob21lXCIsIGRpcikuZm9yRWFjaCgocykgPT4gbnMucm0ocykpKSxcbiAgICBbXG4gICAgICBbQ09OLlVUSUxfRlVOQ1RJT05TLCBcInV0aWxcIl0sXG4gICAgICBbQ09OLkxPT1BfRlVOQ1RJT05TLCBcImxvb3BcIl0sXG4gICAgICBbQ09OLk9ORVNIT1RfRlVOQ1RJT05TLCBcIm9uZXNob3RcIl1cbiAgICBdXG4gICAgICAuZm9yRWFjaCgoW2ZucywgZGlyXTogW3JlYWRvbmx5IHN0cmluZ1tdLCBzdHJpbmddKSA9PiBmbnMuZm9yRWFjaChmbiA9PlxuICAgICAgICBucy53cml0ZShcbiAgICAgICAgICBgJHtkaXJ9LyR7Zm59LmpzYCxcbiAgICAgICAgICBgaW1wb3J0IHsgJHtmbn0gfSBmcm9tIFwibGliLmpzXCI7IGV4cG9ydCBjb25zdCBtYWluID0gYXN5bmMgbnMgPT4gKG5zLmF0RXhpdCgoKSA9PiAobnMuY2xlYXJQb3J0KG5zLnBpZCksbnMud3JpdGVQb3J0KG5zLnBpZCwgXCJcIikpKSwgYXdhaXQgJHtmbn0obnMsbnMuYXJnc1swXSkpO2AsXG4gICAgICAgICAgXCJ3XCIsXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIClcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBndm5yKG5zOiBOUywgaXNfZmlyc3Rfc3RhcnQgPSB0cnVlLCB0aW1lciA9IDApOiBQcm9taXNlPHZvaWQ+IHtcbiAgKFxuICAgIGlzX2ZpcnN0X3N0YXJ0XG4gICAgJiYgKFxuICAgICAgbnMuYXRFeGl0KCgpID0+IChIT09LU1swXS5pbm5lclRleHQgPSBcIlwiLCBIT09LU1sxXS5pbm5lclRleHQgPSBcIlwiLCBucy5jbG9zZVRhaWwoKSkpLFxuICAgICAgbnMudWkuY2xlYXJUZXJtaW5hbCgpLFxuICAgICAgbnMudGFpbCgpLFxuICAgICAgbnMuZGlzYWJsZUxvZyhcIkFMTFwiKSxcbiAgICAgIG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLm19KiogLi9ndm5yLmpzICoqYClcbiAgICApLFxuICAgIGF3YWl0IFtcbiAgICAgIHByZXR0eUxvZ3MobnMpLFxuICAgICAgcHJldHR5T3ZlcnZpZXcobnMpKHRpbWVyKSxcbiAgICAgIHRpbWVyICUgQ09OLkNZQ0xFX1JBVEVcbiAgICAgICAgPyBhc3luYyBfID0+IHZvaWQgX1xuICAgICAgICA6IHNjcmlwdExvb3AobnMpKGlzX2ZpcnN0X3N0YXJ0KSxcbiAgICAgIHV0aWwuc2xwKDFlMyksXG4gICAgICBndm5yLmJpbmQobnVsbCwgbnMsIGZhbHNlLCB0aW1lciArIDEpLFxuICAgIF0uZm9yRWFjaEFzeW5jKGFzeW5jIGZuID0+IGF3YWl0IGZuKCkpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gUnVuKFxuICBuczogTlMsXG4gIHBhdGg6IHN0cmluZyxcbiAgcGFyYW1zOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gW10sXG4gIHByb3BzOiBzdHJpbmcgfCBudW1iZXIgPSBcIlwiLFxuKTogUHJvbWlzZTxhbnk+IHwgbnVsbCB7XG4gIG5zLndyaXRlKFxuICAgIGBydW4uanNgLFxuICAgIC8qXG4gICAgXCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihucykge1wiLFxuICAgIFwiICBjb25zdCBbcGF0aCwgcHJvcHMsIC4uLnBhcmFtc10gPSBucy5hcmdzO1wiLFxuICAgICcgIGNvbnN0IGZ1bmNfcmV0dXJuID0gcGF0aC5zcGxpdChcIi5cIikucmVkdWNlKChhLCBiKSA9PiBhW2JdLCBucykoLi4ucGFyYW1zKScsXG4gICAgJyAgY29uc3QgcmV0dXJuX3ZhbHVlID0gIXByb3BzID8gZnVuY19yZXR1cm4gOiBwcm9wcy5zcGxpdChcIi5cIikucmVkdWNlKChhLGIpID0+IGE/LltiXSwgZnVuY19yZXR1cm4pJyxcbiAgICBcIiAgbnMuYXRFeGl0KCgpID0+IG5zLndyaXRlUG9ydChucy5waWQsIHJldHVybl92YWx1ZSkpO1wiLFxuICAgIFwifVwiLFxuICAgICovXG4gICAgJ2V4cG9ydCBsZXQgbWFpbj1uPT4ocj0+bi5hdEV4aXQoKCk9Pm4ud3JpdGVQb3J0KG4ucGlkLHIpKSkoKCh6LFtjLGQsLi4uZV0pPT4oZj0+ZD96KGYsZCk6ZikoeihuLGMpKC4uLmUpKSkoKHEscyk9PnMuc3BsaXQoXCIuXCIpLnJlZHVjZSgoYSxiKT0+YT8uW2JdLHEpLG4uYXJncykpJyxcbiAgICBcIndcIixcbiAgKTtcbiAgY29uc3QgcnVuX3BpZCA9IG5zLnJ1bihgcnVuLmpzYCwgeyByYW1PdmVycmlkZTogMS42ICsgbnMuZ2V0RnVuY3Rpb25SYW1Db3N0KHBhdGgpIH0sIHBhdGgsIHByb3BzLCAuLi5wYXJhbXMpO1xuICByZXR1cm4gIXJ1bl9waWRcbiAgICA/IChucy50cHJpbnRmKGAke3V0aWwuYW5zaS5yfSEhICR7cGF0aH0gRElEIE5PVCBSVU4gISFgKSwgbnVsbClcbiAgICA6IChhd2FpdCBucy5uZXh0UG9ydFdyaXRlKHJ1bl9waWQpLCBucy5yZWFkUG9ydChydW5fcGlkKSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyZWVSYW0obnM6IE5TLCBob3N0OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gbnMuZ2V0U2VydmVyTWF4UmFtKGhvc3QpIC0gbnMuZ2V0U2VydmVyVXNlZFJhbShob3N0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaXNfQnVzeShuczogTlMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIChcbiAgICAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldEN1cnJlbnRXb3JrXCIsIFtcIlwiXSwgXCJ0eXBlXCIpKSA9PSBcIkdSQUZUSU5HXCJcbiAgICB8fCAoXG4gICAgICAoYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmluQmxhZGVidXJuZXJcIikpXG4gICAgICAmJiAhIShhd2FpdCBSdW4obnMsIFwiYmxhZGVidXJuZXIuZ2V0Q3VycmVudEFjdGlvblwiLCBbXCJcIl0sIFwibmFtZVwiKSlcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNHZXQobnM6IE5TLCBtID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1wiaG9tZVwiXSkpOiBzdHJpbmdbXSB7XG4gIHJldHVybiBtLmZvckVhY2goKGgpID0+IG5zLnNjYW4oaCkubWFwKChzKSA9PiBtLmFkZChzKSkpLCBbLi4ubV07XG59XG5cbmZ1bmN0aW9uIHJlYWR5RmlsZXkobnM6IE5TLCBmaWxlOiBzdHJpbmcpLyogVE9ETyB0eXBlIGFsbCB0aGlzIHN0dWZmICovIHtcbiAgY29uc3QgZGF0YSA9IG5zLnJlYWQoZmlsZSk7XG4gIHRyeSB7IHJldHVybiBKU09OLnBhcnNlKGRhdGEpOyB9XG4gIGNhdGNoIHsgcmV0dXJuIGRhdGE7IH1cbn1cblxuZnVuY3Rpb24gcGVla3lQb3J0eShuczogTlMsIHNjcmlwdDogc3RyaW5nKSB7XG4gIGNvbnN0IGRhdGEgPSBucy5wZWVrKG5zLmdldFJ1bm5pbmdTY3JpcHQoc2NyaXB0KT8ucGlkID8/IG5zLnBpZCk7XG4gIHJldHVybiBkYXRhID09IFwiTlVMTCBQT1JUIERBVEFcIiA/IFwiXCIgOiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50Tm9kZShuczogTlMpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCByID0gYXdhaXQgUnVuKG5zLCBcImdldFJlc2V0SW5mb1wiKTtcbiAgcmV0dXJuIGAke3IuY3VycmVudE5vZGV9LiR7MSArIHIub3duZWRTRi5nZXQoci5jdXJyZW50Tm9kZSl9YDtcbn1cblxuZnVuY3Rpb24gYnV5VE9SKG5zOiBOUyk6IHZvaWQge1xuICBSdW4obnMsIFwic2luZ3VsYXJpdHkucHVyY2hhc2VUb3JcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJhbVVwKG5zOiBOUyk6IFByb21pc2U8dm9pZD4ge1xuICAoXG4gICAgKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS51cGdyYWRlSG9tZVJhbVwiKSlcbiAgICAmJiAobnMudHByaW50Zih1dGlsLmFuc2kuZyArIFwiVXBncmFkZWQgaG9tZSByYW1cIiksIHRydWUpXG4gICAgJiYgcmFtVXAobnMpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29yZXNVcChuczogTlMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgKFxuICAgIChhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkudXBncmFkZUhvbWVDb3Jlc1wiKSlcbiAgICAmJiAobnMudHByaW50Zih1dGlsLmFuc2kuZyArIFwiVXBncmFkZWQgaG9tZSBjb3Jlc1wiKSwgdHJ1ZSlcbiAgICAmJiBjb3Jlc1VwKG5zKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZhY3Rpb25Kb2luKG46IE5TLCBzID0gbi5zaW5ndWxhcml0eSkge1xuICBhd2FpdCAoYXdhaXQgUnVuKG4sIFwic2luZ3VsYXJpdHkuY2hlY2tGYWN0aW9uSW52aXRhdGlvbnNcIikpLmZvckVhY2hBc3luYyhhc3luYyAoZikgPT4gKGF3YWl0IFJ1bihuLCBcInNpbmd1bGFyaXR5LmpvaW5GYWN0aW9uXCIsIFtmXSksIG4udHByaW50ZihgJHt1dGlsLmFuc2kubX1Kb2luZWQgJHtmfWApKSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGFya3dlYlNob3BwaW5nKG5zOiBOUykge1xuICBhd2FpdCBbXCJCcnV0ZVNTSFwiLCBcIkZUUENyYWNrXCIsIFwicmVsYXlTTVRQXCIsIFwiSFRUUFdvcm1cIiwgXCJTUUxJbmplY3RcIl0uZm9yRWFjaEFzeW5jKGFzeW5jIHAgPT4gYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnB1cmNoYXNlUHJvZ3JhbVwiLCBbYCR7cH0uZXhlYF0pKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbXVyZGVyYXRlKG5zOiBOUykge1xuICAoXG4gICAgIShhd2FpdCBpc19CdXN5KG5zKSlcbiAgICAmJiAoYXdhaXQgUnVuKG5zLCBcImdldFBsYXllclwiLCBbXSwgXCJudW1QZW9wbGVLaWxsZWRcIikpIDwgMzBcbiAgICAmJiAoYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnN0b3BBY3Rpb25cIiksIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5jb21taXRDcmltZVwiLCBbXCJIb21pY2lkZVwiLCAwXSkpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gYmQobiwgdCwgaCA9IFwiaG9tZVwiLCBjID0gKGYgPSBcImNvbm5lY3RcIikgPT4gbi5zaW5ndWxhcml0eVtmXSwgZiA9ICh0LCByID0gW10pID0+IHQgPT0gaCA/IHIgOiBmKG4uc2Nhbih0KVswXSwgW3QsIC4uLnJdKSkge1xuICAoXG4gICAgYygpKGgpLFxuICAgIGYodCkubWFwKGMoKSksXG4gICAgbi50cHJpbnRmKGAke3V0aWwuYW5zaS55fUJhY2tkb29yIHN0YXJ0ZWQgb24gJHt0fWApLFxuICAgIGF3YWl0IGMoXCJpbnN0YWxsQmFja2Rvb3JcIikoKSxcbiAgICBjKCkoaCksXG4gICAgbi50cHJpbnRmKGAke3V0aWwuYW5zaS5nfUJhY2tkb29yIGNvbXBsZXRlIG9uICR7dH1gKVxuICApXG59XG5cbmZ1bmN0aW9uIHBlcnN1YWRlKG46IE5TLCBzID0gXCJob21lXCIsIHA6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICBuLnNjYW4ocykuZm9yRWFjaCgodikgPT5cbiAgICB2ICE9IHBcbiAgICAgID8gcGVyc3VhZGUobiwgdiwgcylcbiAgICAgIDogW24uYnJ1dGVzc2gsIG4uZnRwY3JhY2ssIG4ucmVsYXlzbXRwLCBuLnNxbGluamVjdCwgbi5odHRwd29ybSwgbi5udWtlXS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcChzKTtcbiAgICAgICAgfSBjYXRjaCB7IH1cbiAgICAgIH0pLFxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGQ0M20wbkQzNTdyMHkobnM6IE5TLCBkYXRlID0gLyogQF9fUFVSRV9fICovIG5ldyBEYXRlKCksIHdkID0gXCJ3MHIxZF9kNDNtMG5cIikge1xuICAoXG4gICAgKFxuICAgICAgKFxuICAgICAgICBzR2V0KG5zKS5pbmNsdWRlcyh3ZClcbiAgICAgICAgJiYgKGF3YWl0IFJ1bihucywgXCJnZXRIYWNraW5nTGV2ZWxcIikpID4gKGF3YWl0IFJ1bihucywgXCJnZXRTZXJ2ZXJSZXF1aXJlZEhhY2tpbmdMZXZlbFwiLCBbd2RdKSlcbiAgICAgIClcbiAgICAgIHx8IChcbiAgICAgICAgbnMuYmxhZGVidXJuZXIuaW5CbGFkZWJ1cm5lcigpXG4gICAgICAgICYmICFucy5ibGFkZWJ1cm5lci5nZXROZXh0QmxhY2tPcCgpXG4gICAgICApXG4gICAgKVxuICAgICYmIChcbiAgICAgIFtcImluc3RhbGxDb3VudGVyLnR4dFwiLCBcImluc3RhbGxBdWdzUmVhc29uLnR4dFwiLCBcImluc3RhbGxBdWdzTG9nLnR4dFwiXS5tYXAoKGYpID0+IG5zLnJtKGB0ZW1wLyR7Zn1gKSksXG4gICAgICBucy53cml0ZShcInJlcG9ydC9ub2RlTG9nLnR4dFwiLCBgJHthd2FpdCBnZXRDdXJyZW50Tm9kZShucyl9IGNvbXBsZXRlZCAgLSAke2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9ICR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX1gKSxcbiAgICAgIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5kZXN0cm95VzByMWRENDNtMG5cIiwgWzEyLCBcInJzZXQuanNcIl0pXG4gICAgKVxuICApXG59XG5cbmZ1bmN0aW9uIHBTZXJ2KG5zOiBOUykge1xuICAoXG4gICAgKFxuICAgICAgbnMucHVyY2hhc2VTZXJ2ZXIoXCIjXCIsIDgpXG4gICAgICB8fCBbLi4uQXJyYXkoMjEpLmtleXMoKV0uc29tZShyID0+XG4gICAgICAgIHNHZXQobnMpLnNvbWUocyA9PiBucy51cGdyYWRlUHVyY2hhc2VkU2VydmVyKHMsIDIgPDwgcilcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgICAmJiBwU2VydihucylcbiAgKVxufVxuXG5mdW5jdGlvbiBwcmV0dHlMb2dzKG5zOiBOUykge1xuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBlcmNDb2xvdXIgPSAocGVyYykgPT5cbiAgICAgIGAke3BlcmMgPCAzMyA/IHV0aWwuYW5zaS5yIDogcGVyYyA8IDY2ID8gdXRpbC5hbnNpLnkgOiBwZXJjIDwgODUgPyB1dGlsLmFuc2kuYyA6IHV0aWwuYW5zaS5nfSR7cGVyYy5wYWRTdGFydCg2LCBcIiBcIil9JSR7dXRpbC5hbnNpLmR9YDtcbiAgICBjb25zdCBzZWNDb2xvdXIgPSAoc2VjKSA9PiBgJHtzZWMgPCA1ID8gdXRpbC5hbnNpLmcgOiB1dGlsLmFuc2kueX0keyhcIlwiICsgc2VjKS5wYWRTdGFydCgzLCBcIiBcIil9JHt1dGlsLmFuc2kuZH1gO1xuICAgIGNvbnN0IGdldEluZm8gPSAoc2VydmVyKSA9PiBbXG4gICAgICBNYXRoLmNlaWwobnMuZ2V0U2VydmVyU2VjdXJpdHlMZXZlbChzZXJ2ZXIpKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsIFwiIFwiKSxcbiAgICAgIHNlY0NvbG91cihcbiAgICAgICAgTWF0aC5jZWlsKG5zLmdldFNlcnZlclNlY3VyaXR5TGV2ZWwoc2VydmVyKSAtIG5zLmdldFNlcnZlck1pblNlY3VyaXR5TGV2ZWwoc2VydmVyKSlcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgIC5wYWRTdGFydCgzLCBcIiBcIilcbiAgICAgICksXG4gICAgICBucy5mb3JtYXROdW1iZXIobnMuZ2V0U2VydmVyTW9uZXlBdmFpbGFibGUoc2VydmVyKSkudG9TdHJpbmcoKS5wYWRTdGFydCg4LCBcIiBcIiksXG4gICAgICBucy5mb3JtYXROdW1iZXIobnMuZ2V0U2VydmVyTWF4TW9uZXkoc2VydmVyKSkudG9TdHJpbmcoKS5wYWRTdGFydCg4LCBcIiBcIiksXG4gICAgICBwZXJjQ29sb3VyKCgobnMuZ2V0U2VydmVyTW9uZXlBdmFpbGFibGUoc2VydmVyKSAvIG5zLmdldFNlcnZlck1heE1vbmV5KHNlcnZlcikpICogMTAwKS50b0ZpeGVkKDIpKSxcbiAgICAgIHV0aWwuZGlnaUNsb2NrKG5zLmdldFdlYWtlblRpbWUoc2VydmVyKSksXG4gICAgICBzZXJ2ZXIgPT0gcGVla3lQb3J0eShucywgXCJsb29wL3Byc20uanNcIikudGFyZ2V0ID8gYCR7c2VydmVyfSAke3V0aWwuYW5zaS53fS0tLSR7dXRpbC5hbnNpLnl9XFx1MDM5NDxgIDogc2VydmVyLFxuICAgIF07XG5cbiAgICBjb25zdCBhY2Nlc3NfbGlzdCA9IHNHZXQobnMpLmZpbHRlcihcbiAgICAgIChzKSA9PiBucy5oYXNSb290QWNjZXNzKHMpICYmIG5zLmdldFNlcnZlclJlcXVpcmVkSGFja2luZ0xldmVsKHMpIDw9IG5zLmdldEhhY2tpbmdMZXZlbCgpLFxuICAgICk7XG4gICAgY29uc3QgW2Z1bmRlZF9saXN0LCB0b3RhbF9tYXhfcmFtLCB0b3RhbF9mcmVlX3JhbV0gPSBhY2Nlc3NfbGlzdFxuICAgICAgLnJlZHVjZSgoW2Z1bmRlZCwgbWF4X3JhbSwgZnJlZV9yYW1dLCBiKSA9PiBbXG4gICAgICAgIFsuLi5mdW5kZWQsIG5zLmdldFNlcnZlck1heE1vbmV5KGIpID8gYiA6IG51bGxdLFxuICAgICAgICBtYXhfcmFtICsgbnMuZ2V0U2VydmVyTWF4UmFtKGIpLFxuICAgICAgICBmcmVlX3JhbSArIGdldEZyZWVSYW0obnMsIGIpXSxcbiAgICAgICAgW1tdLCAwLCAwXSk7XG4gICAgY29uc3QgW251bV9uZmcsIG5vdF9uZmcsIGF1Z3Nfc2Fuc19uZmddID0gKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRPd25lZEF1Z21lbnRhdGlvbnNcIiwgWzFdKSkuc2xpY2UoKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRPd25lZEF1Z21lbnRhdGlvbnNcIiwgWzBdKSkubGVuZ3RoKVxuICAgICAgLnJlZHVjZSgoW3lfbmZnLCBuX25mZywgc2Fuc19uZmddLCBhdWcpID0+IGF1ZyA9PSBDT04uTkZHID8gW3lfbmZnICsgMSwgbl9uZmcsIHNhbnNfbmZnXSA6IFt5X25mZywgbl9uZmcgKyAxLCBbLi4uc2Fuc19uZmcsIGF1Z11dLCBbMCwgMCwgW11dKTtcbiAgICBjb25zdCBib3VnaHRfYXVnX2luZm8gPSBhdWdzX3NhbnNfbmZnLm1hcCgoYXVnKSA9PiBcIiBcXHhCN1wiICsgYXVnKS5qb2luKFwiXFxuXCIpICsgKG51bV9uZmcgPyBcIlxcbiBcXHhCNyBOZXVyb0ZsdXggR292ZXJub3IgeFwiICsgbnVtX25mZyA6IFwiXCIpO1xuICAgIGNvbnN0IG51bV9vdGhlcl9hdWdzID0gKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRPd25lZEF1Z21lbnRhdGlvbnNcIiwgWzBdKSkucmVkdWNlKChhY2MsIGF1ZykgPT4gYWNjICsgKGF1ZyAhPSBDT04uTkZHKSwgMCk7XG5cbiAgICAoXG4gICAgICBucy5tb3ZlVGFpbChDT04uV0lOLmlubmVyV2lkdGggLSAxMTUwLCAwKSxcbiAgICAgIG5zLnJlc2l6ZVRhaWwoODAwLCAxZTMpLFxuICAgICAgbnMuY2xlYXJMb2coKSxcbiAgICAgIFtcbiAgICAgICAgLi4uW1xuICAgICAgICAgIC4uLmZ1bmRlZF9saXN0LmZpbHRlcihCb29sZWFuKS5tYXAoZ2V0SW5mbyksXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJzZWNcIixcbiAgICAgICAgICAgIFwiIFxcdTAzOTQgXCIsXG4gICAgICAgICAgICBcIiAgJGN1ciAgXCIsXG4gICAgICAgICAgICBcIiAgJG1heCAgXCIsXG4gICAgICAgICAgICBcIiAgICUgICBcIixcbiAgICAgICAgICAgIFwiICB+ZXRlICBcIixcbiAgICAgICAgICAgIGAgVGFyZ2V0IH4gJHtmdW5kZWRfbGlzdC5maWx0ZXIoQm9vbGVhbikubGVuZ3RofS8ke3NHZXQobnMpLmZpbHRlcihucy5nZXRTZXJ2ZXJNYXhNb25leSkubGVuZ3RofWAsXG4gICAgICAgICAgXSxcbiAgICAgICAgXS5tYXAoKChsaW5lKSA9PiBgICR7bGluZS5qb2luKFwiIHwgXCIpfWApKSxcbiAgICAgICAgXCJcIixcbiAgICAgICAgYCBob21lIC0gJHt1dGlsLnJhbUZvcm1hdChnZXRGcmVlUmFtKG5zLCBcImhvbWVcIikpfS8ke3V0aWwucmFtRm9ybWF0KG5zLmdldFNlcnZlck1heFJhbShcImhvbWVcIikpfWAsXG4gICAgICAgIGAgbmV0d29yayAtICR7dXRpbC5yYW1Gb3JtYXQodG90YWxfZnJlZV9yYW0pfS8ke3V0aWwucmFtRm9ybWF0KHRvdGFsX21heF9yYW0pfWAsXG4gICAgICAgIGAgdGhyZWFkcyAtICR7bnMuZm9ybWF0TnVtYmVyKE1hdGguZmxvb3IodG90YWxfZnJlZV9yYW0gLyBucy5nZXRTY3JpcHRSYW0oXCJ3ZWFrZW4uanNcIikpKX0vJHtucy5mb3JtYXROdW1iZXIoTWF0aC5mbG9vcih0b3RhbF9tYXhfcmFtIC8gbnMuZ2V0U2NyaXB0UmFtKFwid2Vha2VuLmpzXCIpKSl9IHRocmVhZHNgLFxuICAgICAgICBcIlwiLFxuICAgICAgICBgIGJvdWdodCBhdWdzIHggJHtub3RfbmZnfSwgJHtudW1fb3RoZXJfYXVnc30vMTAwIGluc3RhbGxlZCwgTkZHIHggJHsoYXdhaXQgUnVuKG5zLCBcImdldFJlc2V0SW5mb1wiLCBbXSwgXCJvd25lZEF1Z3NcIikpLmdldChDT04uTkZHKX1gLFxuICAgICAgICBgJHtib3VnaHRfYXVnX2luZm99YCxcbiAgICAgICAgYCAke3JlYWR5RmlsZXkobnMsIFwidGVtcC9pbnN0YWxsQXVnc1JlYXNvbi50eHRcIil9YCxcbiAgICAgICAgXCJcIixcbiAgICAgIF0uZm9yRWFjaCgobCkgPT4gbnMucHJpbnQobCkpXG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZXR0eU92ZXJ2aWV3KG5zOiBOUykge1xuICByZXR1cm4gKHRpbWVyKSA9PiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IE51bWJlcihuZXcgRGF0ZSgpKTtcbiAgICBjb25zdCBnYW5nX2luZm8gPSBwZWVreVBvcnR5KG5zLCBcImxvb3AvcnVuR2FuZy5qc1wiKTtcbiAgICBjb25zdCBwcnNtX2luZm8gPSBwZWVreVBvcnR5KG5zLCBcImxvb3AvcHJzbS5qc1wiKTtcbiAgICBjb25zdCBoYWNrbmV0X2luZm8gPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvaGFja25ldF9pbmZvLnR4dFwiKTtcbiAgICBjb25zdCBsYXN0X2F1Z190aW1lID0gK3JlYWR5RmlsZXkobnMsIFwidGVtcC9sYXN0QXVnVGltZS50eHRcIikgfHwgZGF0ZTtcblxuICAgIGNvbnN0IGNvbG91cmlzZSA9ICgoW2xfc3RyLCByX3N0cl06IFtzdHJpbmcsIHN0cmluZ10sIHsgZGF0YSwgY29sIH0pID0+XG4gICAgICAoKFtsX2xpbmVzLCByX2xpbmVzXSkgPT4gW1xuICAgICAgICBbbF9zdHIsIC4uLmxfbGluZXNdLFxuICAgICAgICBbcl9zdHIsIC4uLnJfbGluZXNdXG4gICAgICBdLm1hcChyID0+IHIuam9pbihcIjwvYnI+XCIpKVxuICAgICAgKShkYXRhLnJlZHVjZSgoW2xfYWNjLCByX2FjY10sIFtsLCByXSkgPT4gW1xuICAgICAgICBbLi4ubF9hY2MsIGA8c3BhbiBzdHlsZSA9IFwiY29sb3I6JHtjb2x9XCIgPiAke2x9IDwvc3Bhbj5gXSxcbiAgICAgICAgWy4uLnJfYWNjLCBgPHNwYW4gc3R5bGUgPSBcImNvbG9yOiR7Y29sfVwiID4gJHtyfSA8L3NwYW4+YF1cbiAgICAgIF0sIFtbXSwgW11dKSlcbiAgICApO1xuXG4gICAgKFxuICAgICAgW0hPT0tTWzBdLmlubmVySFRNTCwgSE9PS1NbMV0uaW5uZXJIVE1MXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIFtgYml0bm9kZTpgLCBgJHthd2FpdCBnZXRDdXJyZW50Tm9kZShucyl9YF0sXG4gICAgICAgICAgICBbYHBzZXJ2OmAsIGAke3NHZXQobnMpLmZpbHRlcigocykgPT4gcy5zdGFydHNXaXRoKFwiI1wiKSkubGVuZ3RofS8ke25zLmdldFB1cmNoYXNlZFNlcnZlckxpbWl0KCl9YF0sXG4gICAgICAgICAgICBbYHdfZCBsdmw6YCwgYCR7TWF0aC5yb3VuZCgzZTMgKiAoYXdhaXQgUnVuKG5zLCBcImdldEJpdE5vZGVNdWx0aXBsaWVyc1wiLCBbXSwgXCJXb3JsZERhZW1vbkRpZmZpY3VsdHlcIikpKX1gXSxcbiAgICAgICAgICAgIFtgY2l0eTpgLCBgJHtucy5nZXRQbGF5ZXIoKS5jaXR5fWBdLFxuICAgICAgICAgICAgW2BrYXJtYTpgLCBgJHtucy5mb3JtYXROdW1iZXIobnMuaGVhcnQuYnJlYWsoKSl9YF0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb2w6IFwiY3lhblwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgW2B0YXJnZXQ6YCwgYCR7cHJzbV9pbmZvLnRhcmdldH1gXSxcbiAgICAgICAgICAgIFtgc3RhdGU6YCwgYCR7cHJzbV9pbmZvLnN0YXRlfWBdLFxuICAgICAgICAgICAgW2AkL3M6YCwgYCR7dXRpbC5jYXNoRm9ybWF0KG5zLCBucy5nZXRTY3JpcHRJbmNvbWUoXCJsb29wL3Byc20uanNcIiwgdW5kZWZpbmVkKSl9YF0sXG4gICAgICAgICAgICBbYCR0b3RhbDpgLCBgJHt1dGlsLmNhc2hGb3JtYXQobnMsIGF3YWl0IFJ1bihucywgXCJnZXRNb25leVNvdXJjZXNcIiwgW10sIFwic2luY2VJbnN0YWxsLmhhY2tpbmdcIikpfWBdLFxuICAgICAgICAgICAgW2B4cC9zOmAsIGAke25zLmZvcm1hdE51bWJlcihucy5nZXRUb3RhbFNjcmlwdEV4cEdhaW4oKSl9YF0sXG4gICAgICAgICAgICBbYHNjcmlwdHM6YCwgYCR7c0dldChucykucmVkdWNlKChhLCBiKSA9PiBhICsgbnMucHMoYikubGVuZ3RoLCAwKX1gXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbDogXCJyZWRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIFtgaE4gU2VydmVyczpgLCBgJHtoYWNrbmV0X2luZm8ubnVtfWBdLFxuICAgICAgICAgICAgW2BoYXNoZXMvTWF4OmAsIGAke2hhY2tuZXRfaW5mby5oYXNoZXN9YF0sXG4gICAgICAgICAgICBbYGhhc2hlcy9zOmAsIGAke25zLmZvcm1hdE51bWJlcihoYWNrbmV0X2luZm8ucHJvZCl9YF0sXG4gICAgICAgICAgICBbYHByb2ZpdDpgLCBgJHt1dGlsLmNhc2hGb3JtYXQobnMsIGhhY2tuZXRfaW5mby5wcm9maXQpfWBdLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29sOiBcImdyZWVuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICBbYHN0YXR1czpgLCBgJHtnYW5nX2luZm8/LmN5Y2xlID8/IFwiflwifWBdLFxuICAgICAgICAgICAgW2BtZW1iZXJzOmAsIGAke2dhbmdfaW5mbz8uc2l6ZSA/PyBcIn5cIn1gXSxcbiAgICAgICAgICAgIFtgcG93ZXI6YCwgYCR7bnMuZm9ybWF0TnVtYmVyKGdhbmdfaW5mbz8ucG93ZXIgPz8gMCwgMCl9LyR7bnMuZm9ybWF0TnVtYmVyKGdhbmdfaW5mbz8ubmV4dHBvd2VyID8/IDAsIDApfWBdLFxuICAgICAgICAgICAgW2B0ZXJyaXRvcnk6YCwgYCR7bnMuZm9ybWF0TnVtYmVyKGdhbmdfaW5mbz8udGVycml0b3J5ID8/IDAgKiAxMDApID8/IFwiflwifSVgXSxcbiAgICAgICAgICAgIFtgd2FyZmFyZT86YCwgYCR7Z2FuZ19pbmZvPy50dyA/PyBcIn5cIn1gXSxcbiAgICAgICAgICAgIFtgcHJvZml0OmAsIGAke3V0aWwuY2FzaEZvcm1hdChucywgKGF3YWl0IFJ1bihucywgXCJnZXRNb25leVNvdXJjZXNcIiwgW10sIFwic2luY2VTdGFydC5nYW5nXCIpKSA/PyAwKX1gXSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNvbDogXCJtYWdlbnRhXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICBbYCR7dXRpbC50aWNrU3RyaW5nKHRpbWVyKX1gLCBgY3ljbGUgIyR7TWF0aC5mbG9vcih0aW1lciAvIENPTi5DWUNMRV9SQVRFKX1gXSxcbiAgICAgICAgICAgIFtgZ3ZuciB1cHRpbWU6YCwgYCR7dXRpbC5kaWdpQ2xvY2sodGltZXIgKiAxZTMpfWBdLFxuICAgICAgICAgICAgW2B0KyBBdWdidXk6YCwgYCR7ISEoZGF0ZSAtIGxhc3RfYXVnX3RpbWUpID8gdXRpbC5kaWdpQ2xvY2soZGF0ZSAtIGxhc3RfYXVnX3RpbWUpIDogXCJOL0FcIn1gXSxcbiAgICAgICAgICAgIFtgdCsgSW5zdGFsbDpgLCBgJHt1dGlsLmRpZ2lDbG9jayhkYXRlIC0gYXdhaXQgUnVuKG5zLCBcImdldFJlc2V0SW5mb1wiLCBbXSwgXCJsYXN0QXVnUmVzZXRcIikpfWBdLFxuICAgICAgICAgICAgW2B0KyBCaXRub2RlOmAsIGAke3V0aWwuZGlnaUNsb2NrKGRhdGUgLSBhd2FpdCBSdW4obnMsIFwiZ2V0UmVzZXRJbmZvXCIsIFtdLCBcImxhc3ROb2RlUmVzZXRcIikpfWBdLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgY29sOiBcInllbGxvd1wiLFxuICAgICAgICB9LFxuICAgICAgXS5yZWR1Y2UoY29sb3VyaXNlLCBbXCJcIiwgXCJcIl0pXG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNjcmlwdExvb3AobnM6IE5TKSB7XG4gIHJldHVybiAoaXNfZmlyc3Rfc3RhcnQ6IGJvb2xlYW4pID0+IGFzeW5jICgpID0+IHtcbiAgICAoXG4gICAgICBhd2FpdCBDT04uT05FU0hPVF9GVU5DVElPTlMubWFwKChzKSA9PiBgb25lc2hvdC8ke3N9LmpzYCkuZm9yRWFjaEFzeW5jKFxuICAgICAgICBhc3luYyAoc2NyaXB0OiBzdHJpbmcpID0+IChcbiAgICAgICAgICBpc19maXJzdF9zdGFydCAmJiBucy50cHJpbnRmKGAke3V0aWwuYW5zaS55fXN0YXJ0aW5nICR7c2NyaXB0fSBgKSxcbiAgICAgICAgICBhd2FpdCAoYXN5bmMgKHJ1bnBpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PlxuICAgICAgICAgICAgISFydW5waWRcbiAgICAgICAgICAgICAgPyAoYXdhaXQgbnMubmV4dFBvcnRXcml0ZShydW5waWQpLFxuICAgICAgICAgICAgICAgIGlzX2ZpcnN0X3N0YXJ0ICYmIChhd2FpdCB1dGlsLnNscCg3MCAqIE1hdGgucmFuZG9tKCkpKCksIG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLmd9JHtzY3JpcHR9IHBhc3NlZCBpbml0YCkpKVxuICAgICAgICAgICAgICA6IG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLnJ9ICR7c2NyaXB0fSBkaWQgbm90IHJ1bmApKShucy5ydW4oc2NyaXB0KSlcbiAgICAgICAgKSxcbiAgICAgICksXG4gICAgICBDT04uTE9PUF9GVU5DVElPTlMubWFwKChzKSA9PiBgbG9vcC8ke3N9LmpzYCkuZm9yRWFjaCgoc2NyaXB0KSA9PiAhbnMuaXNSdW5uaW5nKHNjcmlwdCkgJiYgbnMucnVuKHNjcmlwdCkpLFxuICAgICAgaXNfZmlyc3Rfc3RhcnRcbiAgICAgICYmIChcbiAgICAgICAgbnMucHJpbnQoYCR7dXRpbC5hbnNpLm19IFdlbGNvbWUgdG8gZ252ci5qcyFgKSxcbiAgICAgICAgbnMudHByaW50ZihgJHt1dGlsLmFuc2kuZ30qKiogU3RhcnR1cCBDb21wbGV0ZSAqKiogYCksXG4gICAgICAgIGF3YWl0IHV0aWwuc2xwKDFlMykoKSxcbiAgICAgICAgbnMucnVuKFwidXRpbC9uZW9mZXRjaC5qc1wiKVxuICAgICAgKVxuICAgIClcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBncmFmdChuczogTlMsIGcgPSBucy5ncmFmdGluZykge1xuICAoXG4gICAgIShhd2FpdCBpc19CdXN5KG5zKSlcbiAgICAmJiBucy5zaW5ndWxhcml0eS50cmF2ZWxUb0NpdHkoXCJOZXcgVG9reW9cIilcbiAgICAmJiBbXG4gICAgICBcIlFMaW5rXCIsXG4gICAgICBcIkVDb3JwIEhWTWluZCBJbXBsYW50XCIsXG4gICAgICBcIlhhbmlwaGVyXCIsXG4gICAgICBcIk9tbmlUZWsgSW5mb0xvYWRcIixcbiAgICAgIFwidmlvbGV0IENvbmdydWl0eSBJbXBsYW50XCJcbiAgICBdLnNvbWUoYXVnID0+IGcuZ3JhZnRBdWdtZW50YXRpb24oYXVnLCBmYWxzZSkpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmFjdFdvcmsobnM6IE5TLCBzID0gbnMuc2luZ3VsYXJpdHkpIHtcbiAgY29uc3QgYXZhaWxhYmxlX2F1Z3MgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYXZhaWxhYmxlQXVncy50eHRcIik7XG4gIGNvbnN0IHRhcmdldF9mYWN0aW9uID0gYXZhaWxhYmxlX2F1Z3MucmVkdWNlKFxuICAgIChhLCBiKSA9PiAoYi5mYWN0Lm5hbWUgIT0gQ09OLkdBTkdfTkFNRSAmJiBiLnJlcGRlbHRhID4gYS5yZXBkZWx0YSA/IGIgOiBhKSxcbiAgICB7IHJlcGRlbHRhOiAwIH0sXG4gICkuZmFjdD8ubmFtZTtcbiAgKFxuICAgICEoYXdhaXQgaXNfQnVzeShucykpXG4gICAgJiYgISF0YXJnZXRfZmFjdGlvblxuICAgICYmIChzLnN0b3BBY3Rpb24oKSxcbiAgICAgIFtcImZpZWxkXCIsIFwic2VjdXJpdHlcIiwgXCJoYWNraW5nXCJdLnNvbWUoKGpvYjogRmFjdGlvbldvcmtUeXBlKSA9PlxuICAgICAgICBzLndvcmtGb3JGYWN0aW9uKGF2YWlsYWJsZV9hdWdzLmluY2x1ZGVzKENPTi5UUlApID8gXCJEYWVkYWx1c1wiIDogdGFyZ2V0X2ZhY3Rpb24sIGpvYiwgZmFsc2UpLFxuICAgICAgKSlcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBkb25hdGUobnM6IE5TLCBzID0gbnMuc2luZ3VsYXJpdHkpIHtcbiAgbnMucHMoKS5maWx0ZXIocyA9PiBzLmZpbGVuYW1lKVxuICBjb25zdCBhdmFpbGFibGVBdWdzID0gcmVhZHlGaWxleShucywgXCJ0ZW1wL2F2YWlsYWJsZUF1Z3MudHh0XCIpO1xuICBjb25zdCByZXBfbXVsdGkgPSBhd2FpdCBSdW4obnMsIFwiZ2V0Qml0Tm9kZU11bHRpcGxpZXJzXCIsIFtdLCBcIlJlcFRvRG9uYXRlVG9GYWN0aW9uXCIpO1xuICBjb25zdCBuZmdpbmZvID0ge1xuICAgIGNvc3Q6IGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRBdWdtZW50YXRpb25QcmljZVwiLCBbQ09OLk5GR10pLFxuICAgIHJlcDogYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldEF1Z21lbnRhdGlvblJlcFJlcVwiLCBbQ09OLk5GR10pLFxuICB9O1xuICBjb25zdCBkb25hdGVmYWN0aW9uID0gXCJUaGUgQmxhY2sgSGFuZFwiO1xuXG4gIChcbiAgICBzLmdldEZhY3Rpb25GYXZvcihkb25hdGVmYWN0aW9uKSA+PSAxNTAgKiByZXBfbXVsdGlcbiAgICAmJiBzLmdldEZhY3Rpb25SZXAoZG9uYXRlZmFjdGlvbikgPCBuZmdpbmZvLnJlcFxuICAgICYmIHMuZG9uYXRlVG9GYWN0aW9uKGRvbmF0ZWZhY3Rpb24sIE1hdGgubWF4KG5mZ2luZm8uY29zdCwgMWUxMSkpXG4gICAgJiYgbnMudHByaW50ZihcbiAgICAgIGAke3V0aWwuYW5zaS5tfURvbmF0ZWQgJHt1dGlsLmNhc2hGb3JtYXQobnMsIE1hdGgubWF4KG5mZ2luZm8uY29zdCwgMWUxMSkpfSB0byAke2RvbmF0ZWZhY3Rpb259IChncmluZGluZyBORkcpYFxuICAgICksXG4gICAgYXZhaWxhYmxlQXVncy5mb3JFYWNoKChhdWcpID0+IChcbiAgICAgIGF1Zy5mYWN0Lm5hbWUgIT0gQ09OLkdBTkdfTkFNRVxuICAgICAgJiYgcy5nZXRGYWN0aW9uRmF2b3IoYXVnLmZhY3QubmFtZSkgPiAxNTAgKiByZXBfbXVsdGlcbiAgICAgICYmIGF1Zy5yZXBkZWx0YSA+IDBcbiAgICAgICYmIHMuZG9uYXRlVG9GYWN0aW9uKGF1Zy5mYWN0Lm5hbWUsIDFlMTEpXG4gICAgICAmJiBucy50cHJpbnRmKGAke3V0aWwuYW5zaS5tfURvbmF0ZWQgJDEwMEIgdG8gJHthdWcuZmFjdC5uYW1lfSBgKVxuICAgICkpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zdGFsbEF1Z3MobnM6IE5TKSB7XG4gIGNvbnN0IGRhdGUgPSBOdW1iZXIobmV3IERhdGUoKSk7XG4gIGNvbnN0IGF1Z3NfYXJyYXkgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYXZhaWxhYmxlQXVncy50eHRcIikuZmlsdGVyKChhdWcpID0+IGF1Zy5mYWN0Lm5hbWUgIT0gQ09OLkdBTkdfTkFNRSk7XG4gIGNvbnN0IGJvdWdodF9hdWdzID0gKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRPd25lZEF1Z21lbnRhdGlvbnNcIiwgWzFdKSkuc2xpY2UoKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRPd25lZEF1Z21lbnRhdGlvbnNcIiwgWzBdKSkubGVuZ3RoKTtcbiAgY29uc3QgdGltZV9zaW5jZV9sYXN0X2F1ZyA9IGRhdGUgLSArKHJlYWR5RmlsZXkobnMsIFwidGVtcC9sYXN0QXVnVGltZS50eHRcIikgPz8gZGF0ZSk7XG4gIGNvbnN0IGxvd2VzdF9wcmljZSA9IGF1Z3NfYXJyYXkucmVkdWNlKChhLCBiKSA9PiAoYS5hdWcgIT0gQ09OLlRSUCAmJiBhIDwgYi5wcmljZSA/IGEgOiBiLnByaWNlKSwgSW5maW5pdHkpPy5wcmljZSA/PyAwO1xuICBjb25zdCBmYXZfdG9fZG9uYXRlID0gMTUwICogKGF3YWl0IFJ1bihucywgXCJnZXRCaXROb2RlTXVsdGlwbGllcnNcIiwgW10sIFwiUmVwVG9Eb25hdGVUb0ZhY3Rpb25cIikpO1xuICBjb25zdCBwcmljZV9yYXRpbyA9IE1hdGguZmxvb3IoKGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5nZXRBdWdtZW50YXRpb25QcmljZVwiLCBbXCJDb21iYXQgUmliIElcIl0pKSAvIChhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuZ2V0QXVnbWVudGF0aW9uQmFzZVByaWNlXCIsIFtcIkNvbWJhdCBSaWIgSVwiXSkpKTtcblxuICBjb25zdCB0aW1lb3V0X2xvZyA9IGB0aW1lb3V0IC0gJHtbbnMuZ2V0U2VydmVyTW9uZXlBdmFpbGFibGUoXCJob21lXCIpLCBsb3dlc3RfcHJpY2VdLm1hcCh1dGlsLmNhc2hGb3JtYXQuYmluZChudWxsLCBucykpLmpvaW4oXCIvXCIpfSwgbXVsdGkgeCR7cHJpY2VfcmF0aW99YDtcbiAgY29uc3QgZmF2b3VyX2xvZyA9IGZhY3QgPT4gYGluY3JlYXNlZCAke2ZhY3QubmFtZX0gZmF2b3VyIGJ5ICR7TWF0aC5mbG9vcihmYWN0LmZhdmRlbHRhKX0gdG8gJHtNYXRoLmZsb29yKGZhY3QuZmF2ZGVsdGEgKyBmYWN0LmZhdil9YDtcblxuICBjb25zdCBjaGVja0Zhdm91ciA9ICgpID0+XG4gICAgYXVnc19hcnJheS5zb21lKGF1ZyA9PlxuICAgICAgYXVnLmZhY3QuZmF2IDwgZmF2X3RvX2RvbmF0ZVxuICAgICAgJiYgKGF1Zy5mYWN0LmZhdmRlbHRhID49IDUwIHx8IGZhdl90b19kb25hdGUgPCBhdWcuZmFjdC5mYXZkZWx0YSArIGF1Zy5mYWN0LmZhdilcbiAgICAgICYmICh3cml0ZUxvZyhmYXZvdXJfbG9nKGF1Zy5mYWN0KSksIHRydWUpXG4gICAgKTtcblxuICBjb25zdCBjaGVja1RpbWVvdXQgPSAoKSA9PlxuICAgIHRpbWVfc2luY2VfbGFzdF9hdWcgPiAxOGU1XG4gICAgJiYgbG93ZXN0X3ByaWNlID4gbnMuZ2V0U2VydmVyTW9uZXlBdmFpbGFibGUoXCJob21lXCIpXG4gICAgJiYgKHdyaXRlTG9nKHRpbWVvdXRfbG9nKSwgdHJ1ZSk7XG5cbiAgY29uc3Qgd3JpdGVMb2cgPSAobG9nOiBzdHJpbmcpID0+XG4gICAgbnMud3JpdGUoXCJ0ZW1wL2luc3RhbGxBdWdzUmVhc29uLnR4dFwiLCBgaW5zdGFsbEF1Z3MgIyR7MSArICtyZWFkeUZpbGV5KG5zLCBcInRlbXAvaW5zdGFsbENvdW50ZXIudHh0XCIpfTogJHtsb2d9IC0gJHtEYXRlKCkuc2xpY2UoNCwgMjQpfWAsIFwid1wiKTtcblxuICAoXG4gICAgIShhd2FpdCBSdW4obnMsIFwiZmlsZUV4aXN0c1wiLCBbXCJ0ZW1wL2luc3RhbGxDb3VudGVyLnR4dFwiXSkpICYmIG5zLndyaXRlKFwidGVtcC9pbnN0YWxsQ291bnRlci50eHRcIiwgXCIwXCIsIFwid1wiKSxcbiAgICBib3VnaHRfYXVncy5pbmNsdWRlcyhDT04uVFJQKSAmJiAod3JpdGVMb2coXCJpbnN0YWxsZWQgVGhlIFJlZCBQaWxsXCIpLCBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuc29mdFJlc2V0XCIsIFtcInJzZXQuanNcIl0pKSwgLy8gaWYgaGF2ZSBUUlAgdGhlbiBpbnN0YWxsIGFzYXBcbiAgICAhKGF3YWl0IGlzX0J1c3kobnMpKVxuICAgICYmICEhYm91Z2h0X2F1Z3MubGVuZ3RoXG4gICAgJiYgKGNoZWNrVGltZW91dCgpIHx8IGNoZWNrRmF2b3VyKCkpXG4gICAgJiYgKFxuICAgICAgbnMud3JpdGUoXCJ0ZW1wL2luc3RhbGxDb3VudGVyLnR4dFwiLCAoMSArICtyZWFkeUZpbGV5KG5zLCBcInRlbXAvaW5zdGFsbENvdW50ZXIudHh0XCIpKS50b1N0cmluZygpLCBcIndcIiksXG4gICAgICBucy53cml0ZShcInJlcG9ydC9pbnN0YWxsQXVnc0xvZy50eHRcIiwgcmVhZHlGaWxleShucywgXCJ0ZW1wL2luc3RhbGxBdWdzUmVhc29uLnR4dFwiKSArIFwiXFxuXCIsIFwiYVwiKSxcbiAgICAgIGF3YWl0IFJ1bihucywgXCJzaW5ndWxhcml0eS5pbnN0YWxsQXVnbWVudGF0aW9uc1wiLCBbXCJyc2V0LmpzXCJdKVxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBidXlBdWdzKG5zOiBOUywgcyA9IG5zLnNpbmd1bGFyaXR5KSB7XG4gIGNvbnN0IG9kZF9mYWN0aW9ucyA9IFtcIkJsYWRlYnVybmVyc1wiLCBcIkNodXJjaCBvZiB0aGUgTWFjaGluZSBHb2RcIl07XG4gIGNvbnN0IGF2YWlsYWJsZUF1Z3MgPSByZWFkeUZpbGV5KG5zLCBcInRlbXAvYXZhaWxhYmxlQXVncy50eHRcIik7XG5cbiAgY29uc3QgdGltZVN0YW1wID0gKCkgPT4gbnMud3JpdGUoXCJ0ZW1wL2xhc3RBdWdUaW1lLnR4dFwiLCBcIlwiICsgRGF0ZS5ub3coKSwgXCJ3XCIpO1xuICBjb25zdCB0ZXJtUHJpbnQgPSAoYXVnLCBmYWN0aW9uLCBwcmljZSkgPT5cbiAgICBucy50cHJpbnRmKFxuICAgICAgYCR7dXRpbC5hbnNpLm19UHVyY2hhc2VkICR7dXRpbC5hbnNpLmN9JHthdWd9JHt1dGlsLmFuc2kubX0gZnJvbSAke2ZhY3Rpb259IGZvciAke3V0aWwuY2FzaEZvcm1hdChucywgcHJpY2UpfWAsXG4gICAgKTtcblxuICAoXG4gICAgbnMuZ2V0UGxheWVyKCkuZmFjdGlvbnNcbiAgICAgIC5mb3JFYWNoKGZhY3QgPT5cbiAgICAgICAgZmFjdCAhPSBDT04uR0FOR19OQU1FXG4gICAgICAgICYmIHMucHVyY2hhc2VBdWdtZW50YXRpb24oZmFjdCwgQ09OLk5GRylcbiAgICAgICAgJiYgKHRpbWVTdGFtcCgpLCB0ZXJtUHJpbnQoQ09OLk5GRywgZmFjdCwgbnMuc2luZ3VsYXJpdHkuZ2V0QXVnbWVudGF0aW9uUHJpY2UoQ09OLk5GRykpKSxcbiAgICAgICksXG4gICAgYXZhaWxhYmxlQXVncy5mb3JFYWNoKGF1ZyA9PlxuICAgICAgcy5wdXJjaGFzZUF1Z21lbnRhdGlvbihhdWcuZmFjdC5uYW1lLCBhdWcuYXVnKVxuICAgICAgJiYgKHRpbWVTdGFtcCgpLCB0ZXJtUHJpbnQoYXVnLmF1ZywgYXVnLmZhY3QubmFtZSwgYXVnLnByaWNlKSlcbiAgICApLFxuICAgIG9kZF9mYWN0aW9ucy5mb3JFYWNoKGZhYyA9PlxuICAgICAgcy5nZXRBdWdtZW50YXRpb25zRnJvbUZhY3Rpb24oZmFjKS5mb3JFYWNoKGF1ZyA9PiBzLnB1cmNoYXNlQXVnbWVudGF0aW9uKGZhYywgYXVnKSksXG4gICAgKVxuICApXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gYXZhaWxhYmxlQXVncyhuczogTlMsIHMgPSBucy5zaW5ndWxhcml0eSkge1xuICBjb25zdCBvd25lZF9hdWdzID0gYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LmdldE93bmVkQXVnbWVudGF0aW9uc1wiLCBbMV0pO1xuICBjb25zdCBmb3JiaWRkZW5fZmFjdGlvbnMgPSBbXCJTaGFkb3dzIG9mIEFuYXJjaHlcIiwgXCJCbGFkZWJ1cm5lcnNcIiwgXCJDaHVyY2ggb2YgdGhlIE1hY2hpbmUgR29kXCJdO1xuICBjb25zdCBhdWdfb2JqZWN0ID0gbnMuZ2V0UGxheWVyKCkuZmFjdGlvbnNcbiAgICAuZmlsdGVyKChmYWN0aW9uKSA9PiAhZm9yYmlkZGVuX2ZhY3Rpb25zLmluY2x1ZGVzKGZhY3Rpb24pKVxuICAgIC5mbGF0TWFwKChmYWN0aW9uKSA9PiAoXG4gICAgICBzLmdldEF1Z21lbnRhdGlvbnNGcm9tRmFjdGlvbihmYWN0aW9uKVxuICAgICAgICAuZmlsdGVyKChhdWcpID0+IENPTi5BVUdTX1RPX0JVWS5pbmNsdWRlcyhhdWcpICYmICFvd25lZF9hdWdzLmluY2x1ZGVzKGF1ZykpXG4gICAgICAgIC5tYXAoKGF1Z21lbnQpID0+IChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdWc6IGF1Z21lbnQsXG4gICAgICAgICAgICBwcmljZTogcy5nZXRBdWdtZW50YXRpb25QcmljZShhdWdtZW50KSxcbiAgICAgICAgICAgIHJlcHJlcTogcy5nZXRBdWdtZW50YXRpb25SZXBSZXEoYXVnbWVudCksXG4gICAgICAgICAgICByZXBkZWx0YTogcy5nZXRBdWdtZW50YXRpb25SZXBSZXEoYXVnbWVudCkgLSBzLmdldEZhY3Rpb25SZXAoZmFjdGlvbiksXG4gICAgICAgICAgICBmYWN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IGZhY3Rpb24sXG4gICAgICAgICAgICAgIGZhdjogcy5nZXRGYWN0aW9uRmF2b3IoZmFjdGlvbiksXG4gICAgICAgICAgICAgIGZhdmRlbHRhOiBzLmdldEZhY3Rpb25GYXZvckdhaW4oZmFjdGlvbiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKSlcbiAgICApKTtcblxuICBucy53cml0ZShcInRlbXAvYXZhaWxhYmxlQXVncy50eHRcIiwgSlNPTi5zdHJpbmdpZnkoYXVnX29iamVjdCA/PyBbXSksIFwid1wiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYmFja2Rvb3IobjogTlMpIHtcbiAgKFxuICAgIFtcIkNTRUNcIiwgXCJhdm1uaXRlLTAyaFwiLCBcInJ1bjR0aGVoMTExelwiLCBcIkkuSS5JLklcIl0ubWFwKG4uZ2V0U2VydmVyKS5mb3JFYWNoKFxuICAgICAgKHMpID0+XG4gICAgICAgICFzLmJhY2tkb29ySW5zdGFsbGVkXG4gICAgICAgICYmIHMuaGFzQWRtaW5SaWdodHNcbiAgICAgICAgJiYgbi5nZXRIYWNraW5nTGV2ZWwoKSA+IHMucmVxdWlyZWRIYWNraW5nU2tpbGxcbiAgICAgICAgJiYgIW4uaXNSdW5uaW5nKFwidXRpbC9iZC5qc1wiLCBcImhvbWVcIiwgcy5ob3N0bmFtZSlcbiAgICAgICAgJiYgbi5ydW4oXCJ1dGlsL2JkLmpzXCIsIHsgdGhyZWFkczogMSwgcmFtT3ZlcnJpZGU6IDUuOCB9LCBzLmhvc3RuYW1lKSxcbiAgICApXG4gIClcbn1cblxuZnVuY3Rpb24gaGFja25ldFNoaW5kaWdzKG5zOiBOUywgaCA9IG5zLmhhY2tuZXQpIHtcbiAgY29uc3Qgbm9kZV9hcnJheSA9IHV0aWwuZ2V0SW5kZXhBcnJheShoLm51bU5vZGVzKCkpO1xuICBjb25zdCBwcm9maXRzID0gbnMuZ2V0TW9uZXlTb3VyY2VzKCkuc2luY2VJbnN0YWxsLmhhY2tuZXQgKyBucy5nZXRNb25leVNvdXJjZXMoKS5zaW5jZUluc3RhbGwuaGFja25ldF9leHBlbnNlcztcbiAgY29uc3Qgc2VydmVyX29iaiA9IHNHZXQobnMpLm1hcCgoc2VydmVyKSA9PiAoe1xuICAgIG5hbWU6IHNlcnZlcixcbiAgICBtb25leTogbnMuZ2V0U2VydmVyTWF4TW9uZXkoc2VydmVyKSxcbiAgICBzZWM6IG5zLmdldFNlcnZlck1pblNlY3VyaXR5TGV2ZWwoc2VydmVyKSxcbiAgfSkpO1xuICBjb25zdCBtb25leXRhcmdldHNlcnZlciA9IHNlcnZlcl9vYmoucmVkdWNlKChhLCBiKSA9PiAoYS5tb25leSA8IGIubW9uZXkgPyBhIDogYikpLm5hbWU7XG4gIGNvbnN0IHNlY3RhcmdldHNlcnZlciA9IHNlcnZlcl9vYmoucmVkdWNlKChhLCBiKSA9PiAoYS5zZWMgPiBiLnNlYyA/IGEgOiBiKSkubmFtZTtcbiAgY29uc3QgaW5mbyA9IHtcbiAgICBudW06IGgubnVtTm9kZXMoKSxcbiAgICBoYXNoZXM6IGAke25zLmZvcm1hdE51bWJlcihoLm51bUhhc2hlcygpKX0vJHtucy5mb3JtYXROdW1iZXIoaC5oYXNoQ2FwYWNpdHkoKSwgMCl9YCxcbiAgICBwcm9kOiBub2RlX2FycmF5LnJlZHVjZSgoYSwgbikgPT4gYSArIGguZ2V0Tm9kZVN0YXRzKG4pLnByb2R1Y3Rpb24sIDApLFxuICAgIHByb2ZpdDogcHJvZml0cyxcbiAgfTtcblxuICBjb25zdCB1cE1vbmV5ID0gKCkgPT5cbiAgICBucy5nZXRTZXJ2ZXJNYXhNb25leShtb25leXRhcmdldHNlcnZlcikgPCAxZTEzXG4gICAgJiYgaC5zcGVuZEhhc2hlcyhcIkluY3JlYXNlIE1heGltdW0gTW9uZXlcIiwgbW9uZXl0YXJnZXRzZXJ2ZXIpXG4gICAgJiYgdXBNb25leSgpO1xuICBjb25zdCBkb3duU2VjID0gKCkgPT5cbiAgICBucy5nZXRTZXJ2ZXJNaW5TZWN1cml0eUxldmVsKHNlY3RhcmdldHNlcnZlcikgPiAxXG4gICAgJiYgaC5zcGVuZEhhc2hlcyhcIlJlZHVjZSBNaW5pbXVtIFNlY3VyaXR5XCIsIHNlY3RhcmdldHNlcnZlcilcbiAgICAmJiBkb3duU2VjKCk7XG5cbiAgY29uc3Qgbm9kZUJ1eSA9ICgpID0+IGgucHVyY2hhc2VOb2RlKCkgKyAxICYmIG5vZGVCdXkoKTtcbiAgY29uc3QgdXBQYXJ0cyA9ICgpID0+XG4gICAgW1wiTGV2ZWxcIiwgXCJDb3JlXCIsIFwiUmFtXCIsIFwiQ2FjaGVcIl0uZm9yRWFjaCgocGFydCkgPT4gbm9kZV9hcnJheS5mb3JFYWNoKChuKSA9PiBoW2B1cGdyYWRlJHtwYXJ0fWBdKG4pICYmIHVwUGFydHMoKSkpO1xuXG4gIChcbiAgICAoXG4gICAgICBwcm9maXRzID4gLTFcbiAgICAgICYmIChcbiAgICAgICAgdXBNb25leSgpLFxuICAgICAgICBkb3duU2VjKCksXG4gICAgICAgIG5vZGVCdXkoKSxcbiAgICAgICAgdXBQYXJ0cygpXG4gICAgICApXG4gICAgKSxcbiAgICBucy53cml0ZShcInRlbXAvaGFja25ldF9pbmZvLnR4dFwiLCBKU09OLnN0cmluZ2lmeShpbmZvKSwgXCJ3XCIpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RldmVzKG5zOiBOUykge1xuICBjb25zdCBzdGV2ZXMgPSAoYXdhaXQgdXRpbC5nZXRJbmRleEFycmF5KDgpLm1hcEFzeW5jKGFzeW5jIHMgPT4gW3MsIGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0U2xlZXZlXCIsIFtzXSwgXCJzdG9yZWRDeWNsZXNcIildKSkuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pLm1hcChyID0+IHJbMF0pO1xuXG4gIGNvbnN0IGdldF9sb3dfc2tpbGwgPSAoc3RldmU6IFNsZWV2ZVBlcnNvbikgPT4gW1wic3RyZW5ndGhcIiwgXCJkZWZlbnNlXCIsIFwiZGV4dGVyaXR5XCIsIFwiYWdpbGl0eVwiXS5yZWR1Y2UoKGEsIHNraWxsKSA9PlxuICAgIChzdGV2ZS5za2lsbHNbc2tpbGxdIDwgMjUgPyBza2lsbCA6IGEpLFxuICAgIGZhbHNlKTtcblxuICBjb25zdCB0cnlfdHJhaW4gPSBhc3luYyAoc3RldmU6IG51bWJlcikgPT5cbiAgICBhd2FpdCAoYXN5bmMgc2tpbGwgPT5cbiAgICAgIHNraWxsXG4gICAgICAmJiAoXG4gICAgICAgIGF3YWl0IFJ1bihucywgXCJzbGVldmUudHJhdmVsXCIsIFtzdGV2ZSwgXCJTZWN0b3ItMTJcIl0pLFxuICAgICAgICBhd2FpdCBSdW4obnMsIFwic2xlZXZlLnNldFRvR3ltV29ya291dFwiLCBbc3RldmUsIFwiUG93ZXJob3VzZSBHeW1cIiwgc2tpbGwudG9TdHJpbmcoKV0pXG4gICAgICApXG4gICAgKShnZXRfbG93X3NraWxsKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0U2xlZXZlXCIsIFtzdGV2ZV0pKSk7XG5cbiAgY29uc3QgdHJ5X3N0YWJiaW4gPSBhc3luYyAoc3RldmU6IG51bWJlcikgPT4gIShhd2FpdCBSdW4obnMsIFwiZ2FuZy5pbkdhbmdcIikgPyBhd2FpdCBSdW4obnMsIFwic2xlZXZlLnNldFRvQ29tbWl0Q3JpbWVcIiwgW3N0ZXZlLCBcIkhvbWljaWRlXCJdKSA6IGZhbHNlKTtcblxuICBjb25zdCBiYl9pbmZpbCA9IGFzeW5jIChzdGV2ZTogbnVtYmVyKSA9PlxuICAgICEoYXdhaXQgc3RldmVzLnNvbWVBc3luYyhhc3luYyAoc3RldmU6IG51bWJlcikgPT4gKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0VGFza1wiLCBbc3RldmVdLCBcInR5cGVcIikpID09IFwiSU5GSUxUUkFURVwiKSlcbiAgICAmJiBhd2FpdCBSdW4obnMsIFwic2xlZXZlLnNldFRvQmxhZGVidXJuZXJBY3Rpb25cIiwgW3N0ZXZlLCBcIkluZmlsdHJhdGUgc3ludGhvaWRzXCJdKTtcblxuICBjb25zdCBiYl9jb250cmFjdHMgPSBhc3luYyAoc3RldmU6IG51bWJlcikgPT5cbiAgICAoYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmdldENvbnRyYWN0TmFtZXNcIikpXG4gICAgICAuc29tZUFzeW5jKGFzeW5jIChjb250cmFjdDogc3RyaW5nKSA9PlxuICAgICAgICBhd2FpdCBzdGV2ZXMuZXZlcnlBc3luYyhhc3luYyAoc3RldmU6IG51bWJlcikgPT4gKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0VGFza1wiLCBbc3RldmVdLCBcImFjdGlvbk5hbWVcIikgIT09IGNvbnRyYWN0KSlcbiAgICAgICAgJiYgYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmdldEFjdGlvbkNvdW50UmVtYWluaW5nXCIsIFtcIkNvbnRyYWN0XCIsIGNvbnRyYWN0XSlcbiAgICAgICAgJiYgYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS5zZXRUb0JsYWRlYnVybmVyQWN0aW9uXCIsIFtzdGV2ZSwgXCJUYWtlIG9uIGNvbnRyYWN0c1wiLCBjb250cmFjdF0pLFxuICAgICAgKTtcblxuXG4gIGNvbnN0IGJ1eV9hdWdzID0gYXN5bmMgKHN0ZXZlOiBudW1iZXIpID0+XG4gICAgIShhd2FpdCBSdW4obnMsIFwic2xlZXZlLmdldFNsZWV2ZVwiLCBbc3RldmVdKSkuc2hvY2sgP1xuICAgICAgKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0U2xlZXZlUHVyY2hhc2FibGVBdWdzXCIsIFtzdGV2ZV0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5jb3N0IC0gYi5jb3N0KVxuICAgICAgICAuZm9yRWFjaEFzeW5jKGFzeW5jIChhdWcpID0+IGF3YWl0IFJ1bihucywgXCJzbGVldmUucHVyY2hhc2VTbGVldmVBdWdcIiwgW3N0ZXZlLCBhdWcubmFtZV0pKVxuICAgICAgOiBmYWxzZTtcblxuXG4gIChcbiAgICBhd2FpdCBzdGV2ZXMuZm9yRWFjaEFzeW5jKGFzeW5jIChzdGV2ZSkgPT4gYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS5zZXRUb0lkbGVcIiwgW3N0ZXZlXSkpLFxuICAgIGF3YWl0IHN0ZXZlcy5mb3JFYWNoQXN5bmMoYXN5bmMgKHN0ZXZlKSA9PiAoXG4gICAgICBhd2FpdCBidXlfYXVncyhzdGV2ZSlcbiAgICAgIHx8ICgoYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS5nZXRTbGVldmVcIiwgW3N0ZXZlXSkpLnNob2NrID4gOTBcbiAgICAgICAgPyBhd2FpdCBSdW4obnMsIFwic2xlZXZlLnNldFRvU2hvY2tSZWNvdmVyeVwiLCBbc3RldmVdKVxuICAgICAgICA6IGF3YWl0IHRyeV90cmFpbihzdGV2ZSlcbiAgICAgICAgfHwgYXdhaXQgdHJ5X3N0YWJiaW4oc3RldmUpXG4gICAgICAgIHx8IChhd2FpdCBSdW4obnMsIFwiYmxhZGVidXJuZXIuaW5CbGFkZWJ1cm5lclwiKSAmJiAoYXdhaXQgYmJfaW5maWwoc3RldmUpIHx8IGF3YWl0IGJiX2NvbnRyYWN0cyhzdGV2ZSkpKVxuICAgICAgICB8fCAoKGF3YWl0IFJ1bihucywgXCJzbGVldmUuZ2V0U2xlZXZlXCIsIFtzdGV2ZV0pKS5zaG9ja1xuICAgICAgICAgID8gYXdhaXQgUnVuKG5zLCBcInNsZWV2ZS5zZXRUb1Nob2NrUmVjb3ZlcnlcIiwgW3N0ZXZlXSlcbiAgICAgICAgICA6IGF3YWl0IFJ1bihucywgXCJzbGVldmUuc2V0VG9JZGxlXCIsIFtzdGV2ZV0pKVxuICAgICAgKSkpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gYmJ1cm5lcihuczogTlMpIHtcbiAgY29uc3QgW3MsIGJdID0gW25zLnNpbmd1bGFyaXR5LCBucy5ibGFkZWJ1cm5lcl1cbiAgY29uc3QgZ29UcmFpbiA9IGFzeW5jICgpID0+IChcbiAgICBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkuc3RvcEFjdGlvblwiKSxcbiAgICBhd2FpdCBSdW4obnMsIFwic2luZ3VsYXJpdHkudHJhdmVsVG9DaXR5XCIsIFtcIlNlY3Rvci0xMlwiXSksXG4gICAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5Lmd5bVdvcmtvdXRcIiwgW1xuICAgICAgXCJQb3dlcmhvdXNlIEd5bVwiLFxuICAgICAgW1wiRGVmZW5zZVwiLCBcIlN0cmVuZ3RoXCIsIFwiRGV4dGVyaXR5XCIsIFwiQWdpbGl0eVwiXS5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0U2tpbGwgPSAoc3RyKSA9PiBucy5nZXRQbGF5ZXIoKS5za2lsbHNbc3RyLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICByZXR1cm4gZ2V0U2tpbGwoYSkgPCBnZXRTa2lsbChiKSA/IGEgOiBiO1xuICAgICAgfSksXG4gICAgICAwLFxuICAgIF0pXG4gICk7XG4gIGNvbnN0IHVwU2tpbGwgPSBhc3luYyAoKSA9PiAoXG4gICAgYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLnVwZ3JhZGVTa2lsbFwiLCBbYi5nZXRTa2lsbE5hbWVzKCkucmVkdWNlKChhLCBjKSA9PiAoZiA9PiBmKGEpIDwgZihjKSA/IGEgOiBjKShiLmdldFNraWxsVXBncmFkZUNvc3QpKV0pICYmIHVwU2tpbGwoKVxuICApO1xuICBjb25zdCBkb09wID0gYXN5bmMgKG9wKSA9PiAoXG4gICAgIW9wXG4gICAgICA/IGQ0M20wbkQzNTdyMHkobnMpXG4gICAgICA6IGF3YWl0ICgoW2EsIGNdKSA9PiBhICsgYyA+IDEuOCkoYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmdldEFjdGlvbkVzdGltYXRlZFN1Y2Nlc3NDaGFuY2VcIiwgW1wiQmxhY2tPcHNcIiwgKGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5nZXROZXh0QmxhY2tPcFwiKSkubmFtZV0pKVxuICAgICAgJiYgIShhd2FpdCBpc19CdXN5KG5zKSlcbiAgICAgICYmIChcbiAgICAgICAgYXdhaXQgUnVuKG5zLCBcInNpbmd1bGFyaXR5LnN0b3BBY3Rpb25cIiksXG4gICAgICAgIGF3YWl0IFJ1bihucywgXCJibGFkZWJ1cm5lci5zdGFydEFjdGlvblwiLCBbXCJCbGFja09wc1wiLCAoYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmdldE5leHRCbGFja09wXCIpKS5uYW1lXSlcbiAgICAgIClcbiAgKTtcblxuICAoXG4gICAgYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmpvaW5CbGFkZWJ1cm5lckRpdmlzaW9uXCIpLFxuICAgICEoYXdhaXQgUnVuKG5zLCBcImJsYWRlYnVybmVyLmluQmxhZGVidXJuZXJcIikpXG4gICAgICA/IGF3YWl0IGdvVHJhaW4oKVxuICAgICAgOiAoYXdhaXQgdXBTa2lsbCgpLCBhd2FpdCBkb09wKGIuZ2V0TmV4dEJsYWNrT3AoKT8ubmFtZSkpXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gc3RhbihuczogTlMsIHMgPSBucy5zdGFuZWspIHtcbiAgbnMuZGlzYWJsZUxvZyhcIkFMTFwiKSwgbnMuZW5hYmxlTG9nKFwiZXhlY1wiKSwgbnMucnVuKFwibHNnLmpzXCIpO1xuICBzLmFjY2VwdEdpZnQoKSB8fCAoYXdhaXQgbnMuc2xlZXAoMWUzKSwgYXdhaXQgc3RhbihucykpO1xuICBjb25zdCBzcGFyZV90aHJlYWRzID0gTWF0aC5mbG9vcigoZ2V0RnJlZVJhbShucywgXCJob21lXCIpIC0gNTApIC8gbnMuZ2V0U2NyaXB0UmFtKFwiY2hyZy5qc1wiKSk7XG4gIGNvbnN0IHRhcmdldCA9IHNcbiAgICAuYWN0aXZlRnJhZ21lbnRzKClcbiAgICAuZmlsdGVyKChmKSA9PiBmLmlkIDwgMTAwKVxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IChhLm51bUNoYXJnZSA8IGIubnVtQ2hhcmdlID8gYSA6IGIpLCB7IG51bUNoYXJnZTogTmFOLCB4OiBOYU4sIHk6IE5hTiB9KTtcblxuICAoXG4gICAgISF0YXJnZXQgJiZcbiAgICAoc3BhcmVfdGhyZWFkcyA+IDAgJiYgIWlzTmFOKHRhcmdldC5udW1DaGFyZ2UpXG4gICAgICA/IG5zLmV4ZWMoXCJjaHJnLmpzXCIsIFwiaG9tZVwiLCBzcGFyZV90aHJlYWRzLCB0YXJnZXQueCwgdGFyZ2V0LnkpXG4gICAgICA6IG5zLnByaW50KFwibm8gdGhyZWFkcyEgc2tpcHBpbmcuLi5cIikpLFxuICAgIG5zLndyaXRlUG9ydChucy5waWQsIFwiXCIpLFxuICAgIGF3YWl0IHV0aWwuc2xwKDFlNCkoKSxcbiAgICBhd2FpdCBzdGFuKG5zKVxuICApXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkdhbmcobiwgZyA9IG4uZ2FuZykge1xuICBjb25zdCB0cnlSZWNydWl0ID0gKG5hbWUgPSBDT04uTUVNQkVSX05BTUVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENPTi5NRU1CRVJfTkFNRVMubGVuZ3RoKV0pID0+IChcbiAgICBnLmdldE1lbWJlck5hbWVzKCkuaW5jbHVkZXMobmFtZSlcbiAgICAgID8gdHJ5UmVjcnVpdCgpXG4gICAgICA6IGcucmVjcnVpdE1lbWJlcihuYW1lKSAmJiBuLnRwcmludGYoYCR7dXRpbC5hbnNpLnJ9UmVjcnVpdGVkICR7dXRpbC5hbnNpLmd9JHtuYW1lfWApXG4gICk7XG4gIGNvbnN0IHNldFRXID0gKCkgPT5cbiAgICBnLnNldFRlcnJpdG9yeVdhcmZhcmUoT2JqZWN0LmtleXMob3RoZXJfZ2FuZ19pbmZvKCkpLmV2ZXJ5KChoKSA9PiBnLmdldENoYW5jZVRvV2luQ2xhc2goaCkgPj0gMC41KSk7XG4gIGNvbnN0IHNscCA9IGFzeW5jICh0KSA9PiBhd2FpdCBuLnNsZWVwKHQgLyAoZy5nZXRCb251c1RpbWUoKSA+IDVlMyA/IDI1IDogMSkpO1xuICBjb25zdCBvdGhlcl9nYW5nX2luZm8gPSBnLmdldE90aGVyR2FuZ0luZm9ybWF0aW9uO1xuICBjb25zdCB0aWNrID0gYXN5bmMgKGwgPSBudWxsKSA9PiAoXG4gICAgYXdhaXQgKGFzeW5jIHEgPT4gKGwgPSBxKCksIGF3YWl0IG4uc2xlZXAoNTApLCBsID09IHEoKSAmJiAoYXdhaXQgdGljaygpKSkpKCgpID0+IE9iamVjdC52YWx1ZXMob3RoZXJfZ2FuZ19pbmZvKCkpLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBHYW5nT3RoZXJJbmZvT2JqZWN0KSA9PiBhICsgYi5wb3dlciwgMCkpXG4gICk7XG4gIGNvbnN0IGZvY3VzID0gKCkgPT4gKGcuZ2V0TWVtYmVyTmFtZXMoKS5sZW5ndGggPiA5ID8gXCJtb25leUdhaW5cIiA6IFwicmVzcGVjdEdhaW5cIik7XG4gIGNvbnN0IGFzc2lnbkpvYiA9ICh0YXNrKSA9PiAoXG4gICAgZy5nZXRNZW1iZXJOYW1lcygpLmZvckVhY2goXG4gICAgICAobWVtYmVyKSA9PiAoXG4gICAgICAgIGcuZ2V0RXF1aXBtZW50TmFtZXMoKS5mb3JFYWNoKChpdGVtKSA9PiBnLnB1cmNoYXNlRXF1aXBtZW50KG1lbWJlciwgaXRlbSkpLFxuICAgICAgICBnLnNldE1lbWJlclRhc2soXG4gICAgICAgICAgbWVtYmVyLFxuICAgICAgICAgIHRhc2sgPz8gZy5nZXRUYXNrTmFtZXMoKS5yZWR1Y2UoXG4gICAgICAgICAgICAoYSwgYikgPT4gKFxuICAgICAgICAgICAgICBnLnNldE1lbWJlclRhc2sobWVtYmVyLCBiKSxcbiAgICAgICAgICAgICAgKChnYWluKSA9PiAoZ2FpbiA8IGEuZ2FpbiA/IGEgOiB7IGIsIGdhaW4gfSkpKGcuZ2V0TWVtYmVySW5mb3JtYXRpb24obWVtYmVyKVtmb2N1cygpXSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKS5iLFxuICAgICAgICApXG4gICAgICApLFxuICAgICksXG4gICAgcHJpbnRUb1BvcnQoXG4gICAgICB0YXNrPy5zcGxpdChcIiBcIilcbiAgICAgICAgLm1hcCgoYSkgPT4gYVswXSlcbiAgICAgICAgLmpvaW4oXCJcIikgPz8gXCJKb2JzXCIsXG4gICAgKVxuICApO1xuICBjb25zdCBwcmludFRvUG9ydCA9IChqb2IpID0+IChcbiAgICBuLmNsZWFyUG9ydChuLnBpZCksXG4gICAgbi53cml0ZVBvcnQobi5waWQsIHtcbiAgICAgIGN5Y2xlOiBqb2IsXG4gICAgICBzaXplOiBnLmdldE1lbWJlck5hbWVzKCkubGVuZ3RoLFxuICAgICAgcG93ZXI6IGcuZ2V0R2FuZ0luZm9ybWF0aW9uKCkucG93ZXIsXG4gICAgICBuZXh0cG93ZXI6IE9iamVjdC52YWx1ZXMob3RoZXJfZ2FuZ19pbmZvKCkpLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBHYW5nT3RoZXJJbmZvT2JqZWN0KSA9PiAoYSA+IGIucG93ZXIgPyBhIDogYi5wb3dlciksIDApLFxuICAgICAgdGVycml0b3J5OiBnLmdldEdhbmdJbmZvcm1hdGlvbigpLnRlcnJpdG9yeSAqIDEwMCxcbiAgICAgIHR3OiBnLmdldEdhbmdJbmZvcm1hdGlvbigpLnRlcnJpdG9yeVdhcmZhcmVFbmdhZ2VkLFxuICAgIH0pXG4gICk7XG5cbiAgKFxuICAgIChnLmluR2FuZygpIHx8IGcuY3JlYXRlR2FuZyhDT04uR0FOR19OQU1FKSlcbiAgICAmJiAoXG4gICAgICB0cnlSZWNydWl0KCksXG4gICAgICBzZXRUVygpLFxuICAgICAgYXNzaWduSm9iKHVuZGVmaW5lZCksXG4gICAgICBhd2FpdCBzbHAoMTVlMyksXG4gICAgICBhc3NpZ25Kb2IoXCJUcmFpbiBDb21iYXRcIiksXG4gICAgICBhd2FpdCBzbHAoNDUwMCksXG4gICAgICBhc3NpZ25Kb2IoXCJUZXJyaXRvcnkgV2FyZmFyZVwiKSxcbiAgICAgIGF3YWl0IHRpY2soKSxcbiAgICAgIGF3YWl0IHJ1bkdhbmcobilcbiAgICApXG4gIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ29sZmVkR2FuZyhcbiAgbixcbiAgZyA9IG4uZ2FuZyxcbiAgcyA9IGFzeW5jICh0KSA9PiBhd2FpdCBuLnNsZWVwKHQgLyAoZy5nZXRCb251c1RpbWUoKSA+IDVlMyA/IDI1IDogMSkpLFxuICB0ID0gYXN5bmMgKGwpID0+IChsID0gcSgpWzFdLCBhd2FpdCBuLnNsZWVwKDkpLCBsID09IHEoKVsxXSAmJiBhd2FpdCB0KGwpKSxcbiAgcSA9ICgpID0+IE9iamVjdC5lbnRyaWVzKGcuZ2V0T3RoZXJHYW5nSW5mb3JtYXRpb24oKSkucmVkdWNlKChhOiBbYm9vbGVhbiwgbnVtYmVyXSwgW2IsIGNdOiBbc3RyaW5nLCBHYW5nT3RoZXJJbmZvT2JqZWN0XSk6IFtib29sZWFuLCBudW1iZXJdID0+IFtnLmdldENoYW5jZVRvV2luQ2xhc2goYikgPiAwLjUgJiYgYVswXSwgYVsxXSArIGMucG93ZXJdLCBbZmFsc2UsIDBdKSxcbiAgYSA9IChqKSA9PlxuICAgIGcuZ2V0TWVtYmVyTmFtZXMoKVxuICAgICAgLm1hcChcbiAgICAgICAgKG0pID0+IChcbiAgICAgICAgICBnLmdldEVxdWlwbWVudE5hbWVzKCkubWFwKChpKSA9PiBnLnB1cmNoYXNlRXF1aXBtZW50KG0sIGkpKSxcbiAgICAgICAgICBbXCJhZ2lcIiwgXCJzdHJcIiwgXCJkZWZcIiwgXCJkZXhcIl0ucmVkdWNlKChhLCBiKSA9PiBhICsgZy5nZXRBc2NlbnNpb25SZXN1bHQobSk/LltiXSwgMCkgPiA2ICYmIGcuYXNjZW5kTWVtYmVyKG0pLFxuICAgICAgICAgIGcuc2V0TWVtYmVyVGFzayhcbiAgICAgICAgICAgIG0sXG4gICAgICAgICAgICBqID8/IGcuZ2V0VGFza05hbWVzKCkucmVkdWNlKChhLCBiKSA9PlxuICAgICAgICAgICAgICAoZy5zZXRNZW1iZXJUYXNrKG0sIGIpLCAoaSkgPT4gKGkgPCBhLmkgPyBhIDogeyBiLCBpIH0pKShcbiAgICAgICAgICAgICAgICBnLmdldE1lbWJlckluZm9ybWF0aW9uKG0pW2cuZ2V0TWVtYmVyTmFtZXMoKS5sZW5ndGggPiA5ID8gXCJtb25leUdhaW5cIiA6IFwicmVzcGVjdEdhaW5cIl0sXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApLm4sXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgKSxcbikge1xuICAoXG4gICAgKGcuaW5HYW5nKCkgfHwgZy5jcmVhdGVHYW5nKFwiU2x1bSBTbmFrZXNcIikpXG4gICAgJiYgKFxuICAgICAgZy5yZWNydWl0TWVtYmVyKE1hdGgucmFuZG9tKCkpLFxuICAgICAgZy5zZXRUZXJyaXRvcnlXYXJmYXJlKHEoKVswXSksXG4gICAgICBhKHVuZGVmaW5lZCksXG4gICAgICBhd2FpdCBzKDE1ZTMpLFxuICAgICAgYShcIlRyYWluIENvbWJhdFwiKSxcbiAgICAgIGF3YWl0IHMoNDUwMCksXG4gICAgICBhKFwiVGVycml0b3J5IFdhcmZhcmVcIiksXG4gICAgICBhd2FpdCB0KDEpLFxuICAgICAgYXdhaXQgZ29sZmVkR2FuZyhuKVxuICAgIClcbiAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcnNtKG5zOiBOUywgaXNQcmVwcGVkID0gZmFsc2UpIHtcbiAgZnVuY3Rpb24gY2hlY2tQcmVwcGVkKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0Lm1vbmV5TWF4ICogMC45IDwgdGFyZ2V0Lm1vbmV5QXZhaWxhYmxlICYmIHRhcmdldC5taW5EaWZmaWN1bHR5ICsgMyA+IHRhcmdldC5oYWNrRGlmZmljdWx0eTsgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlV29ya2VycygpIHtcbiAgICBbXCJoYWNrXCIsIFwiZ3Jvd1wiLCBcIndlYWtlblwiXS5mb3JFYWNoKFxuICAgICAgKHNjcmlwdCkgPT4gKFxuICAgICAgICAhbnMuZmlsZUV4aXN0cyhzY3JpcHQpICYmXG4gICAgICAgIG5zLndyaXRlKFxuICAgICAgICAgIGAke3NjcmlwdH0uanNgLFxuICAgICAgICAgIGBleHBvcnQgY29uc3QgbWFpbiA9IGFzeW5jIG5zID0+IChucy5hdEV4aXQoKCkgPT4gbnMud3JpdGVQb3J0KG5zLnBpZCwgXCJcIikpLCBhd2FpdCBucy4ke3NjcmlwdH0obnMuYXJnc1swXSwgeyBhZGRpdGlvbmFsTXNlYzogbnMuYXJnc1sxXSB9KSlgLFxuICAgICAgICAgIFwid1wiLFxuICAgICAgICApLFxuICAgICAgICBzR2V0KG5zKS5mb3JFYWNoKChzZXJ2ZXIpID0+IG5zLnNjcChgJHtzY3JpcHR9LmpzYCwgc2VydmVyKSlcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJhdGNoKG5zOiBOUywgdGFyZ2V0LCBob3N0X2xpc3QpIHtcblxuICAgIGNvbnN0IHF1ZXN0aW9uYWJsZSA9IE9iamVjdC5lbnRyaWVzKFxuICAgICAgKChbbmhhY2ssIG5ncm93XSkgPT4gW25oYWNrLCBuZ3JvdywgTWF0aC5jZWlsKG5oYWNrICogMC4wNCksIE1hdGguY2VpbChuaGFjayAqIDAuMDgpXSkoKG5oYWNrID0+IFtuaGFjaywgTWF0aC5jZWlsKG5zLmdyb3d0aEFuYWx5emUodGFyZ2V0Lmhvc3RuYW1lLCAxIC8gKDEgLSAobnMuZm9ybXVsYXMuaGFja2luZy5oYWNrUGVyY2VudCh0YXJnZXQsIG5zLmdldFBsYXllcigpKSAqIG5oYWNrKSkpKV0pKE1hdGgubWF4KH5+bnMuaGFja0FuYWx5emVUaHJlYWRzKHRhcmdldC5ob3N0bmFtZSwgdGFyZ2V0Lm1vbmV5TWF4ICogMC4wMSksIDEpKSlcbiAgICApO1xuXG4gICAgY29uc3QgbmhhY2sgPSBNYXRoLm1heCh+fm5zLmhhY2tBbmFseXplVGhyZWFkcyh0YXJnZXQuaG9zdG5hbWUsIHRhcmdldC5tb25leU1heCAqIDAuMDEpLCAxKTtcbiAgICBjb25zdCBuZ3JvdyA9IDEwICsgTWF0aC5jZWlsKG5zLmdyb3d0aEFuYWx5emUodGFyZ2V0Lmhvc3RuYW1lLCAxIC8gKDEgLSAobnMuZm9ybXVsYXMuaGFja2luZy5oYWNrUGVyY2VudCh0YXJnZXQsIG5zLmdldFBsYXllcigpKSAqIG5oYWNrKSkpKTtcbiAgICBjb25zdCBod2Vha2VuID0gTWF0aC5jZWlsKG5oYWNrICogMC4wNCk7XG4gICAgY29uc3QgZ3dlYWtlbiA9IE1hdGguY2VpbChuaGFjayAqIDAuMDgpO1xuICAgIGNvbnN0IGpvYl9lbnRzID0gT2JqZWN0LmVudHJpZXMoeyBuaGFjaywgaHdlYWtlbiwgbmdyb3csIGd3ZWFrZW4gfSk7XG4gICAgY29uc3QgYmF0Y2hfcmFtX3RvdGFsID0gam9iX2VudHMucmVkdWNlKChyLCBbaywgdl0pID0+IHIgKyBucy5nZXRTY3JpcHRSYW0oay5zbGljZSgxKSArIFwiLmpzXCIpICogdiwgMCk7XG5cbiAgICAoXG4gICAgICBob3N0X2xpc3QubWFwKGhvc3QgPT4gKHtcbiAgICAgICAgaG9zdDogaG9zdCxcbiAgICAgICAgYmF0Y2g6IGpvYl9lbnRzLm1hcCgoW2tleSwgdmFsXSkgPT4gKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjcjoga2V5LnNsaWNlKDEpICsgXCIuanNcIixcbiAgICAgICAgICAgIHRocjogdmFsICogfn4oKG5zLmdldFNlcnZlck1heFJhbShob3N0KSAtIG5zLmdldFNlcnZlclVzZWRSYW0oaG9zdCkgLSAoaG9zdCA9PSBcImhvbWVcIiA/IDEwMCA6IDApKSAvIGJhdGNoX3JhbV90b3RhbCksXG4gICAgICAgICAgICBidWZmOiBucy5nZXRXZWFrZW5UaW1lKHRhcmdldC5ob3N0bmFtZSkgLSBuc1tcImdldFwiICsgW2tleS5zbGljZSgxLCAyKS50b1VwcGVyQ2FzZSgpLCAuLi5rZXkuc2xpY2UoMildLmpvaW4oXCJcIikgKyBcIlRpbWVcIl0odGFyZ2V0Lmhvc3RuYW1lKVxuICAgICAgICAgIH1cbiAgICAgICAgKSlcbiAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKCh7IGJhdGNoIH0pID0+IGJhdGNoLm1hcCgoeyB0aHIgfSkgPT4gdGhyKS5ldmVyeShCb29sZWFuKSlcbiAgICAgICAgLmZvckVhY2goKHsgaG9zdCwgYmF0Y2ggfSkgPT4gYmF0Y2guZm9yRWFjaCgoeyBzY3IsIHRociwgYnVmZiB9KSA9PiBucy5leGVjKHNjciwgaG9zdCwgdGhyLCB0YXJnZXQuaG9zdG5hbWUsIGJ1ZmYpKSlcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBwcmVwKG5zOiBOUywgdGFyZ2V0LCBob3N0X2xpc3QpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlcVdlYWtlbiA9IH5+KCh0YXJnZXQuaGFja0RpZmZpY3VsdHkgLSB0YXJnZXQubWluRGlmZmljdWx0eSkgLyBucy53ZWFrZW5BbmFseXplKDEpKTtcbiAgICBjb25zdCByZXFHcm93ID0gTWF0aC5jZWlsKG5zLmdyb3d0aEFuYWx5emUodGFyZ2V0Lmhvc3RuYW1lLCB0YXJnZXQubW9uZXlNYXggLyB0YXJnZXQubW9uZXlBdmFpbGFibGUpKTtcblxuICAgIGNvbnN0IHNlbmQgPSAoc2NyaXB0LCByZXEpOiBudW1iZXJbXSA9PlxuICAgICAgaG9zdF9saXN0LnJlZHVjZSgoW2xhc3RfcGlkLCBuXSwgaG9zdCkgPT5cbiAgICAgICAgbiA+PSByZXFcbiAgICAgICAgICA/IFtsYXN0X3BpZCwgbl1cbiAgICAgICAgICA6IChcbiAgICAgICAgICAgIHRocmVhZHMgPT4gdGhyZWFkcyA+IDBcbiAgICAgICAgICAgICAgPyBbbnMuZXhlYyhzY3JpcHQgKyBcIi5qc1wiLCBob3N0LCB0aHJlYWRzLCB0YXJnZXQuaG9zdG5hbWUpLCBuICsgdGhyZWFkc11cbiAgICAgICAgICAgICAgOiBbbGFzdF9waWQsIG5dXG4gICAgICAgICAgKSh+figobnMuZ2V0U2VydmVyTWF4UmFtKGhvc3QpIC0gbnMuZ2V0U2VydmVyVXNlZFJhbShob3N0KSAtIChob3N0ID09IFwiaG9tZVwiID8gMTAwIDogMCkpIC8gbnMuZ2V0U2NyaXB0UmFtKHNjcmlwdCArIFwiLmpzXCIpKVxuICAgICAgICAgICksXG4gICAgICAgIFtOYU4sIDBdXG4gICAgICApO1xuICAgIHJldHVybiBNYXRoLm1heCguLi5bXG4gICAgICBzZW5kKFwid2Vha2VuXCIsIHJlcVdlYWtlbilbMF0sXG4gICAgICBzZW5kKFwiZ3Jvd1wiLCByZXFHcm93KVswXVxuICAgIF0pXG4gIH1cblxuICBjb25zdCBob3N0X2xpc3QgPSBzR2V0KG5zKS5maWx0ZXIoKHNlcnZlcikgPT4gbnMuZ2V0U2VydmVyTWF4UmFtKHNlcnZlcikgJiYgbnMuaGFzUm9vdEFjY2VzcyhzZXJ2ZXIpICYmICFzZXJ2ZXIuaW5jbHVkZXMoXCJoYWNrbmV0XCIpKTtcbiAgY29uc3QgdGFyZ2V0ID0gbnMuZ2V0U2VydmVyKHNHZXQobnMpLnJlZHVjZSgoYSwgYiwgcmFuazogYW55KSA9PlxuICAocmFuayA9IHMgPT4gbnMuZ2V0U2VydmVyTWF4TW9uZXkocykgLyBucy5nZXRTZXJ2ZXJNaW5TZWN1cml0eUxldmVsKHMpLFxuICAgIG5zLmhhc1Jvb3RBY2Nlc3MoYikgJiYgbnMuZ2V0U2VydmVyUmVxdWlyZWRIYWNraW5nTGV2ZWwoYikgPD0gbnMuZ2V0SGFja2luZ0xldmVsKCkgLyAyICYmIHJhbmsoYSkgPCByYW5rKGIpID8gYiA6IGEpLFxuICAgIFwibjAwZGxlc1wiXG4gICkpO1xuICBpc1ByZXBwZWQgPSBjaGVja1ByZXBwZWQobnMuZ2V0U2VydmVyKHRhcmdldC5ob3N0bmFtZSkpO1xuICAoXG4gICAgbnMucmFtT3ZlcnJpZGUoMjApLFxuICAgIHdyaXRlV29ya2VycygpLFxuICAgIGlzUHJlcHBlZFxuICAgICAgPyBiYXRjaChucywgdGFyZ2V0LCBob3N0X2xpc3QpXG4gICAgICA6IHByZXAobnMsIHRhcmdldCwgaG9zdF9saXN0KSxcbiAgICBucy53cml0ZVBvcnQobnMucGlkLCB7IHRhcmdldDogdGFyZ2V0Lmhvc3RuYW1lLCBzdGF0ZTogaXNQcmVwcGVkID8gXCJiYXRjaFwiIDogXCJwcmVwXCIgfSksXG4gICAgYXdhaXQgbnMuc2xlZXAobnMuZ2V0V2Vha2VuVGltZSh0YXJnZXQuaG9zdG5hbWUpKSxcbiAgICBhd2FpdCBwcnNtKG5zLCBjaGVja1ByZXBwZWQobnMuZ2V0U2VydmVyKHRhcmdldC5ob3N0bmFtZSkpKVxuICApXG59XG5cbnR5cGUgUGxheWVyRXhwID0ge1xuICBoYWNraW5nOiBudW1iZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByc20yKG5zOiBOUykge1xuICBucy5kaXNhYmxlTG9nKFwiQUxMXCIpO1xuICBucy5lbmFibGVMb2coXCJleGVjXCIpO1xuICBjb25zdCBoYWNrX3BlcmNlbnRhZ2UgPSAwLjAxO1xuICBjb25zdCBiYXRjaF9kZWxheSA9IDIwO1xuICBjb25zdCB3cml0ZV93b3JrZXJzID0gKCkgPT5cbiAgICBbXCJoYWNrXCIsIFwiZ3Jvd1wiLCBcIndlYWtlblwiXS5mb3JFYWNoKFxuICAgICAgKHNjcmlwdCkgPT4gKFxuICAgICAgICAhbnMuZmlsZUV4aXN0cyhzY3JpcHQpICYmXG4gICAgICAgIG5zLndyaXRlKFxuICAgICAgICAgIGAke3NjcmlwdH0uanNgLFxuICAgICAgICAgIGBleHBvcnQgY29uc3QgbWFpbiA9IGFzeW5jIG5zID0+IGF3YWl0IG5zLiR7c2NyaXB0fShucy5hcmdzWzBdLCB7IGFkZGl0aW9uYWxNc2VjOiBucy5hcmdzWzFdIH0pYCxcbiAgICAgICAgICBcIndcIixcbiAgICAgICAgKSxcbiAgICAgICAgc0dldChucykuZm9yRWFjaCgoc2VydmVyKSA9PiBucy5zY3AoYCR7c2NyaXB0fS5qc2AsIHNlcnZlcikpXG4gICAgICApLFxuICAgICk7XG4gIGNvbnN0IGdldEhvc3RSYW0gPSAoc2VydmVyKSA9PiBNYXRoLmZsb29yKGdldEZyZWVSYW0obnMsIHNlcnZlcikgLSAoc2VydmVyID09IFwiaG9tZVwiID8gMTAwIDogMCkpO1xuICBjb25zdCBtb2RQbGF5ZXIgPSAocGxheWVyLCB0aHJlYWRzLCB0YXJnZXQpID0+XG4gICAgT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgT2JqZWN0LmVudHJpZXMocGxheWVyKS5tYXAoXG4gICAgICAgIChba2V5LCBlbnRyeV06IFtzdHJpbmcsIFBsYXllckV4cF0pID0+IChcbiAgICAgICAgICBrZXkgPT0gXCJleHBcIiAmJiAoZW50cnkuaGFja2luZyArPSBucy5mb3JtdWxhcy5oYWNraW5nLmhhY2tFeHAodGFyZ2V0LCBwbGF5ZXIpICogdGhyZWFkcyksXG4gICAgICAgICAga2V5ID09IFwic2tpbGxzXCIgJiZcbiAgICAgICAgICAoZW50cnkuaGFja2luZyA9IG5zLmZvcm11bGFzLnNraWxscy5jYWxjdWxhdGVTa2lsbChwbGF5ZXIuZXhwLmhhY2tpbmcsIHBsYXllci5tdWx0cy5oYWNraW5nKSksXG4gICAgICAgICAgW2tleSwgZW50cnldXG4gICAgICAgICksXG4gICAgICApLFxuICAgICk7XG4gIGNvbnN0IHNlbmRKb2JzID0gKGJfb2JqLCBwX29iaikgPT4gKFxuICAgIChiX29iai50aHJlYWRzID0gTWF0aC5taW4oYl9vYmouYXZhaWxhYmxlLCBiX29iai5zY3JpcHQuam9icykpLFxuICAgIChiX29iai5hdmFpbGFibGUgLT0gYl9vYmoudGhyZWFkcyksXG4gICAgKGJfb2JqLnNjcmlwdC5qb2JzIC09IGJfb2JqLnRocmVhZHMpLFxuICAgIGJfb2JqLnRocmVhZHMgPiAwICYmXG4gICAgICAhIW5zLmV4ZWMoYCR7Yl9vYmouc2NyaXB0Lm5hbWV9LmpzYCwgYl9vYmouaG9zdCwgYl9vYmoudGhyZWFkcywgYl9vYmoudGFyZ2V0Lmhvc3RuYW1lLCBiX29iai5zY3JpcHQudGltZSlcbiAgICAgID8gYl9vYmouYXZhaWxhYmxlID4gMCAmJiBiX29iai5zY3JpcHQuam9icyA+IDFcbiAgICAgICAgPyBzZW5kSm9icyhiX29iaiwgbW9kUGxheWVyKHBfb2JqLCBiX29iai50aHJlYWRzLCBiX29iai50YXJnZXQpKVxuICAgICAgICA6IG1vZFBsYXllcihwX29iaiwgYl9vYmoudGhyZWFkcywgYl9vYmoudGFyZ2V0KVxuICAgICAgOiBwX29ialxuICApO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHJ1bkxvb3AocnVuX3Bfb2JqKSB7XG5cbiAgICAhbnMuaXNSdW5uaW5nKFwic2hhcmUuanNcIikgJiZcbiAgICAgIG5zLnJ1bihcInNoYXJlLmpzXCIsIE1hdGguZmxvb3IoMC4yNSAqIChnZXRGcmVlUmFtKG5zLCBcImhvbWVcIikgLyBucy5nZXRTY3JpcHRSYW0oXCJzaGFyZS5qc1wiKSkpIHx8IDEpO1xuICAgIHdyaXRlX3dvcmtlcnMoKTtcbiAgICBjb25zdCBob3N0X2xpc3QgPSBzR2V0KG5zKS5maWx0ZXIoKHNlcnZlcikgPT4gbnMuaGFzUm9vdEFjY2VzcyhzZXJ2ZXIpICYmIHNlcnZlci5zdWJzdHJpbmcoMCwgNykgIT0gXCJoYWNrbmV0XCIpO1xuICAgIGNvbnN0IGdldEF2YWlsYWJsZVRocmVhZHMgPSAoc2NyaXB0KSA9PlxuICAgICAgaG9zdF9saXN0LnJlZHVjZSgoYSwgc2VydmVyKSA9PiBhICsgTWF0aC5mbG9vcihnZXRIb3N0UmFtKHNlcnZlcikgLyBucy5nZXRTY3JpcHRSYW0oYCR7c2NyaXB0Lm5hbWV9LmpzYCkpLCAwKTtcbiAgICBjb25zdCB0YXJnZXQgPSBucy5nZXRTZXJ2ZXIoXG4gICAgICBob3N0X2xpc3QucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmsgPSAocykgPT4gbnMuZ2V0U2VydmVyTWF4TW9uZXkocykgLyBucy5nZXRTZXJ2ZXJNaW5TZWN1cml0eUxldmVsKHMpO1xuICAgICAgICByZXR1cm4gbnMuZ2V0U2VydmVyUmVxdWlyZWRIYWNraW5nTGV2ZWwoYikgPD0gbnMuZ2V0SGFja2luZ0xldmVsKCkgLyAyICYmIHJhbmsoYSkgPCByYW5rKGIpID8gYiA6IGE7XG4gICAgICB9KSxcbiAgICApITtcbiAgICBjb25zdCBjbGFtcCA9IChuKSA9PiAobiA8IDEgfHwgbiA9PSBJbmZpbml0eSA/IDEgOiBuKTtcbiAgICBjb25zdCBoYWNrX2pvYnMgPSBNYXRoLm1heCh+fm5zLmhhY2tBbmFseXplVGhyZWFkcyh0YXJnZXQuaG9zdG5hbWUsIHRhcmdldC5tb25leU1heCAqIDAuMDEpLCAxKTtcbiAgICBjb25zdCBncm93X2pvYnMgPSBNYXRoLmNlaWwobnMuZ3Jvd3RoQW5hbHl6ZSh0YXJnZXQuaG9zdG5hbWUsIDEgLyAoMSAtIChucy5mb3JtdWxhcy5oYWNraW5nLmhhY2tQZXJjZW50KHRhcmdldCwgbnMuZ2V0UGxheWVyKCkpICogaGFja19qb2JzKSkpKTtcbiAgICBjb25zdCBzZWNfam9icyA9ICh0YXJnZXQuaGFja0RpZmZpY3VsdHkgLSB0YXJnZXQubWluRGlmZmljdWx0eSkgLyBucy53ZWFrZW5BbmFseXplKDEpO1xuICAgIGNvbnN0IHdla25fam9icyA9IE1hdGguY2VpbChzZWNfam9icyArIGhhY2tfam9icyAqIDAuMDQgKyBncm93X2pvYnMgKiAwLjA4KTtcbiAgICBjb25zdCBiYXRjaF90b3RhbCA9IGhhY2tfam9icyArIGdyb3dfam9icyArIHdla25fam9icztcbiAgICBjb25zdCBzcXVpc2ggPSAoc2NyaXB0LCBqb2JzKSA9PlxuICAgICAgTWF0aC5mbG9vcihiYXRjaF90b3RhbCA+IGdldEF2YWlsYWJsZVRocmVhZHMoc2NyaXB0KSA/IGpvYnMgKiAoZ2V0QXZhaWxhYmxlVGhyZWFkcyhzY3JpcHQpIC8gYmF0Y2hfdG90YWwpIDogam9icyk7XG4gICAgY29uc3Qgam9ic19hcnJheSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJoYWNrXCIsXG4gICAgICAgIGpvYnM6IHNxdWlzaChcImhhY2tcIiwgaGFja19qb2JzKSxcbiAgICAgICAgdGltZTogbnMuZ2V0SGFja1RpbWUodGFyZ2V0Lmhvc3RuYW1lKSAqIDMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImdyb3dcIixcbiAgICAgICAgam9iczogc3F1aXNoKFwiZ3Jvd1wiLCBncm93X2pvYnMpLFxuICAgICAgICB0aW1lOiBucy5nZXRIYWNrVGltZSh0YXJnZXQuaG9zdG5hbWUpICogMC44LFxuICAgICAgfSxcbiAgICAgIHsgbmFtZTogXCJ3ZWFrZW5cIiwgam9iczogc3F1aXNoKFwid2Vha2VuXCIsIHdla25fam9icyksIHRpbWU6IDAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGJhdGNoX2NvbXBsZXRlX3Bfb2JqID0gam9ic19hcnJheS5yZWR1Y2UoXG4gICAgICAoXywgc2NyaXB0KSA9PlxuICAgICAgICBob3N0X2xpc3QucmVkdWNlKFxuICAgICAgICAgIChfMiwgaG9zdCkgPT5cbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBob3N0cyBhbmQgZmlsbCBlYWNoIG9uZSB3aXRoIGpvYnMgdW50aWwgZG9uZVxuICAgICAgICAgICAgc2VuZEpvYnMoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGU6IE1hdGguZmxvb3IoZ2V0SG9zdFJhbShob3N0KSAvIG5zLmdldFNjcmlwdFJhbShgJHtzY3JpcHQubmFtZX0uanNgKSksXG4gICAgICAgICAgICAgICAgc2NyaXB0LFxuICAgICAgICAgICAgICAgIGhvc3QsXG4gICAgICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBydW5fcF9vYmosXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHt9LFxuICAgICAgICApLFxuICAgICAge30sXG4gICAgKTtcbiAgICBucy5jbGVhclBvcnQobnMucGlkKSxcbiAgICAgIG5zLndyaXRlUG9ydChucy5waWQsIHRhcmdldC5ob3N0bmFtZSksXG4gICAgICBhd2FpdCB1dGlsLnNscChiYXRjaF9kZWxheSkoKSxcbiAgICAgIGF3YWl0IHJ1bkxvb3AoYmF0Y2hfY29tcGxldGVfcF9vYmopO1xuICB9XG4gIGF3YWl0IHJ1bkxvb3AoYXdhaXQgUnVuKG5zLCBcImdldFBsYXllclwiKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5lb2ZldGNoKG5zOiBOUykge1xuICBjb25zdCBibGsgPSBcIlxcdTI1ODhcIjtcbiAgY29uc3QgY29sX2FyciA9IFt1dGlsLmFuc2kuaywgdXRpbC5hbnNpLnIsIHV0aWwuYW5zaS5nLCB1dGlsLmFuc2kueSwgdXRpbC5hbnNpLmIsIHV0aWwuYW5zaS5tLCB1dGlsLmFuc2kuY107XG4gIGNvbnN0IGRhdGVGb3JtYXQgPSAoZGF0ZSkgPT5cbiAgICBgJHtNYXRoLmZsb29yKGRhdGUgLyAoNjAgKiAyNCkpfSBkYXlzLCAke01hdGguZmxvb3IoKGRhdGUgLyA2MCkgJSAyNCl9IGhvdXJzLCAke01hdGguZmxvb3IoZGF0ZSAlIDYwKX0gbWluc2A7XG4gIGNvbnN0IHBhZCA9IGAgYC5yZXBlYXQoMzUpO1xuICBjb25zdCB0aXRsZSA9IGBtdWVzbGlAaG9tZWA7XG4gIGNvbnN0IGRhc2hlcyA9IHV0aWwuYW5zaS53ICsgXCItXCIucmVwZWF0KDExKTtcbiAgY29uc3Qgb3MgPSBgJHt1dGlsLmFuc2kuZ31PUzogJHt1dGlsLmFuc2kud31GdWxjcnVtIFRlY2hub2xvZ2llcyBDaGFwZWF1IExpbnV4IHg4Nl82NGA7XG4gIGNvbnN0IGhvc3QgPSBgJHt1dGlsLmFuc2kuZ31Ib3N0OiAke3V0aWwuYW5zaS53fSR7bnMuZ2V0SG9zdG5hbWUoKX1gO1xuICBjb25zdCBrZXJuZWwgPSBgJHt1dGlsLmFuc2kuZ31LZXJuZWw6ICR7dXRpbC5hbnNpLnd9JHtDT04uRE9DLnRpdGxlfWA7XG4gIGNvbnN0IHVwdGltZSA9IGAke3V0aWwuYW5zaS5nfVVwdGltZTogJHt1dGlsLmFuc2kud30ke2RhdGVGb3JtYXQobnMuZ2V0UGxheWVyKCkudG90YWxQbGF5dGltZSAvICgxZTMgKiA2MCkpfWA7XG4gIGNvbnN0IHBhY2thZ2VzID0gYCR7dXRpbC5hbnNpLmd9UGFja2FnZXM6ICR7dXRpbC5hbnNpLnd9JHtucy5scyhcImhvbWVcIikubGVuZ3RofSAoYml0cGtnKWA7XG4gIGNvbnN0IHNoZWxsID0gYCR7dXRpbC5hbnNpLmd9U2hlbGw6ICR7dXRpbC5hbnNpLnd9Yml0LXNoIDYuOWA7XG4gIGNvbnN0IHJlc29sdXRpb24gPSBgJHt1dGlsLmFuc2kuZ31SZXNvbHV0aW9uOiAke3V0aWwuYW5zaS53fSR7Q09OLldJTi5pbm5lcldpZHRofSB4ICR7Q09OLldJTi5pbm5lckhlaWdodH1gO1xuICBjb25zdCB3bSA9IGAke3V0aWwuYW5zaS5nfVdNOiAke3V0aWwuYW5zaS53fUJpdEJ1cm5lciBXTWA7XG4gIGNvbnN0IHRlcm1pbmFsID0gYCR7dXRpbC5hbnNpLmd9VGVybWluYWw6ICR7dXRpbC5hbnNpLnd9QmlUVFlgO1xuICBjb25zdCBjcHUgPSBgJHt1dGlsLmFuc2kuZ31DUFU6ICR7dXRpbC5hbnNpLnd9R2VuIEZULTY5MDB4ICR7bnMuZ2V0U2VydmVyKFwiaG9tZVwiKS5jcHVDb3Jlc30gY29yZWA7XG4gIGNvbnN0IG1lbW9yeSA9IGAke3V0aWwuYW5zaS5nfU1lbW9yeTogJHt1dGlsLmFuc2kud30ke25zLmdldFNlcnZlcihcImhvbWVcIikucmFtVXNlZCAqIDFlM30gTWlCIC8gJHtucy5nZXRTZXJ2ZXIoXCJob21lXCIpLm1heFJhbSAqIDFlM30gTWlCYDtcbiAgY29uc3QgYXNjaWkgPSBbXG4gICAgYCR7cGFkfSR7dXRpbC5hbnNpLmd9bmVvZmV0Y2ggfmAsXG4gICAgYCAgICAke3V0aWwuYW5zaS5nfUZGRkZGRkZGXFxcXCR7dXRpbC5hbnNpLnJ9Li4uLi4uLiR7dXRpbC5hbnNpLmd9VFRUVFRUVFRcXFxcICAgICAgJHt0aXRsZX1gLFxuICAgIGAgICAgJHt1dGlsLmFuc2kuZ31GRiBcXFxcX19fX198JHt1dGlsLmFuc2kucn06fjp+On4ke3V0aWwuYW5zaS5nfVxcXFxfX1RUIFxcXFxfX3wgICAgICR7ZGFzaGVzfWAsXG4gICAgYCAgICAke3V0aWwuYW5zaS5nfUZGIHwke3V0aWwuYW5zaS5yfTo9Oj06PTo9Oj06PTo9OiR7dXRpbC5hbnNpLmd9VFQgfCR7dXRpbC5hbnNpLnJ9PVxcXFwgICAgICAke29zfWAsXG4gICAgYCAgICR7dXRpbC5hbnNpLnJ9LyR7dXRpbC5hbnNpLmd9RkZGRkZcXFxcJHt1dGlsLmFuc2kucn0tKi0qLSotKi0qLSotJHt1dGlsLmFuc2kuZ31UVCB8JHt1dGlsLmFuc2kucn0qLVxcXFwgICAgICR7aG9zdH1gLFxuICAgIGAgICR7dXRpbC5hbnNpLnJ9Lyoke3V0aWwuYW5zaS5nfUZGIFxcXFxfX3wke3V0aWwuYW5zaS5yfSoqKioqKioqKioqKiR7dXRpbC5hbnNpLmd9VFQgfCR7dXRpbC5hbnNpLnJ9KioqXFxcXCAgICAke2tlcm5lbH1gLFxuICAgIGAgICR7dXRpbC5hbnNpLnJ9PT0ke3V0aWwuYW5zaS5nfUZGIHwke3V0aWwuYW5zaS5yfT09PT0ke3V0aWwuYW5zaS5nfUNDQ0NDQ1xcXFwke3V0aWwuYW5zaS5yfT09PT0ke3V0aWwuYW5zaS5nfVRUIHwke3V0aWwuYW5zaS5yfT09PT1cXFxcICAgJHt1cHRpbWV9YCxcbiAgICBgICAke3V0aWwuYW5zaS5yfSMjJHt1dGlsLmFuc2kuZ31GRiB8JHt1dGlsLmFuc2kucn0jIyMke3V0aWwuYW5zaS5nfUNDQyBfX0NDXFxcXCR7dXRpbC5hbnNpLnJ9IyMjJHt1dGlsLmFuc2kuZ31UVCB8JHt1dGlsLmFuc2kucn0jIyMjfHwgICR7cGFja2FnZXN9YCxcbiAgICBgICAke3V0aWwuYW5zaS5yfT09JHt1dGlsLmFuc2kuZ31cXFxcX1xcXFx8JHt1dGlsLmFuc2kucn09PT0ke3V0aWwuYW5zaS5nfUNDIC8ke3V0aWwuYW5zaS5yfT09JHt1dGlsLmFuc2kuZ31cXFxcX198JHt1dGlsLmFuc2kucn09PSR7dXRpbC5hbnNpLmd9XFxcXF9cXFxcfCR7dXRpbC5hbnNpLnJ9PT09PXx8ICAke3NoZWxsfWAsXG4gICAgYCAgJHt1dGlsLmFuc2kucn1cXFxcKioqKioqKioke3V0aWwuYW5zaS5nfUNDIHwke3V0aWwuYW5zaS5yfSoqKioqKioqKioqKioqKi9cXFxcfCAgJHtyZXNvbHV0aW9ufWAsXG4gICAgYCAgICR7dXRpbC5hbnNpLnJ9XFxcXCotKi0qLSoke3V0aWwuYW5zaS5nfUNDIHwke3V0aWwuYW5zaS5yfS0qLSotKi0qLSotKi0qLyAvICAgJHt3bX1gLFxuICAgIGAgICAgJHt1dGlsLmFuc2kucn1cXFxcOj06PTo9JHt1dGlsLmFuc2kuZ31DQyB8JHt1dGlsLmFuc2kucn06PSR7dXRpbC5hbnNpLmd9Q0NcXFxcJHt1dGlsLmFuc2kucn09Oj06PTo9Oi8gLyAgICAke3Rlcm1pbmFsfWAsXG4gICAgYCAgICAgJHt1dGlsLmFuc2kucn1cXFxcfjp+On4ke3V0aWwuYW5zaS5nfVxcXFxDQ0NDQ0MgIHwke3V0aWwuYW5zaS5yfX46fjp+Oi8gLyAgICAgJHtjcHV9YCxcbiAgICBgICAgICAgJHt1dGlsLmFuc2kucn1cXFxcX19fX18ke3V0aWwuYW5zaS5nfVxcXFxfX19fX1xcXFwvJHt1dGlsLmFuc2kucn1fX19fX18vIC8gICAgICAke21lbW9yeX1gLFxuICAgIGAgICAgICAgJHt1dGlsLmFuc2kucn1cXFxcX19fX19fX19fX19fX19fX19fXFxcXC9gLFxuICAgIHBhZCArIFsuLi5jb2xfYXJyLCB1dGlsLmFuc2kuZCwgXCJcIl0uam9pbihibGsucmVwZWF0KDQpKSxcbiAgICBwYWQgKyBbLi4uY29sX2FyciwgdXRpbC5hbnNpLncsIFwiXCJdLmpvaW4oYmxrLnJlcGVhdCg0KSksXG4gIF07XG5cbiAgKFxuICAgIGF3YWl0IGFzY2lpLmZvckVhY2hBc3luYyhhc3luYyBsID0+IChucy50cHJpbnRmKGwpLCBhd2FpdCB1dGlsLnNscChNYXRoLnJhbmRvbSgpICogMTAgKiA3KSgpKSlcbiAgKVxufVxuXG5cblxuLyoqIEBwYXJhbSB7TlN9IG5zICovXG5mdW5jdGlvbiBjaGVja0JvdW5kcyhuczogTlMsIHQpIHtcbiAgbGV0IHJldHVybnZhbCA9IHsgeDogMCwgeTogMCB9LFxuICAgIHggPSB0LngsXG4gICAgeSA9IHQueSxcbiAgICB3ID0gdC53aWR0aCxcbiAgICBoID0gdC5oZWlnaHQsXG4gICAgb3RoZXJwcm9ncyA9IG5zLnBzKCkubWFwKHAgPT4gbnMuZ2V0UnVubmluZ1NjcmlwdChwLnBpZCk/LnRhaWxQcm9wZXJ0aWVzKS5maWx0ZXIocCA9PiBwKTtcbiAgb3RoZXJwcm9ncy5mb3JFYWNoKHByb2cgPT4ge1xuICAgIGlmIChwcm9nLnggPiB4ICsgdykgcmV0dXJudmFsLnggLSA1MDtcbiAgICBpZiAocHJvZy54ICsgcHJvZy53aWR0aCA8IHgpIHJldHVybnZhbC54ICsgNTA7XG4gIH1cbiAgKTtcbiAgcmV0dXJuIHJldHVybnZhbDtcbn1cblxuZnVuY3Rpb24gem9vbWllQ2FsYyhkOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gZCA+IDUwMFxuICAgID8gMS4yXG4gICAgOiBkID4gNzAwMFxuICAgICAgPyAwLjVcbiAgICAgIDogZCA+IDE1MDAwXG4gICAgICAgID8gMC4yXG4gICAgICAgIDogZCA+IDE1MDAwXG4gICAgICAgICAgPyAwIC8vIEdvIHRvIHNsZWVwXG4gICAgICAgICAgOiAyOyAvLyBFeGNpdGVkIG1vZGUhXG59XG5cbmZ1bmN0aW9uIHBvb3BDaGVjayhuczogTlMsIHRpbWVzdGFtcCwgaGFwcGluZXNzKSB7XG4gIGlmICh0aW1lc3RhbXAgKyA2MDAwMCA8ICsobmV3IERhdGUoKSkpIHJldHVybiBoYXBwaW5lc3M7XG4gIHJldHVybiBoYXBwaW5lc3MgLSBucy5wcygpLmZpbHRlcihwID0+IHAuZmlsZW5hbWUgPT09IFwicG9vcC5qc1wiKS5sZW5ndGhcbn1cblxuYXN5bmMgZnVuY3Rpb24gZG93bkRvZyhuczogTlMsIHByZXZwb3N4OiBudW1iZXIsIHByZXZwb3N5OiBudW1iZXIpIHtcbiAgZnVuY3Rpb24gcG9vcChuczogTlMsIHg6IG51bWJlciwgeTogbnVtYmVyLCBwb29wcGlkOiBudW1iZXIpIHtcbiAgICAoXG4gICAgICBucy53cml0ZShcInBvb3AuanNcIiwgcG9vcFNjcmlwdCwgXCJ3XCIpLFxuICAgICAgcG9vcHBpZCA9IG5zLnJ1bihcInBvb3AuanNcIiksXG4gICAgICBucy50YWlsKHBvb3BwaWQpLFxuICAgICAgbnMucmVzaXplVGFpbCgxNTAsIDEwMCwgcG9vcHBpZCksXG4gICAgICBucy5tb3ZlVGFpbCh4LCB5LCBwb29wcGlkKVxuICAgIClcbiAgfVxuICBmdW5jdGlvbiBzdGVwKG5zOiBOUywgem9vbWlldmFsdWUsIHRhcmdldCwgYm9vbCA9IDEsIHJhbmRib29sID0gdHJ1ZSkge1xuICAgIGxldCBzY3JlZW5yYXRpbyA9IHdpbi5pbm5lckhlaWdodCAvIHdpbi5pbm5lcldpZHRoLFxuICAgICAgeCA9IHRnZXQobnMpLngsXG4gICAgICB5ID0gdGdldChucykueTtcbiAgICBpZiAodGFyZ2V0LnggPiB4KSB7IHggKz0gKHJuKCkgKiB6b29taWV2YWx1ZSkgKiAyICogKDEwICogem9vbWlldmFsdWUpOyB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LnggPCB4KSB7IHggLT0gKHJuKCkgKiB6b29taWV2YWx1ZSkgKiAyICogKDEwICogem9vbWlldmFsdWUpIH1cbiAgICBpZiAocm4oKSAtIDAuNSA+IDApIGJvb2wgPSAtMVxuICAgIGlmICh6b29taWV2YWx1ZSAmJiByYW5kYm9vbCkge1xuICAgICAgeCArPSAzICogcm4oKSAqIGJvb2w7XG4gICAgICB5ICs9IDMgKiBybigpICogYm9vbCAqIHNjcmVlbnJhdGlvO1xuICAgIH1cbiAgICBsZXQgYm91bmRzYWRqdXN0ID0gY2hlY2tCb3VuZHMobnMsIHRnZXQobnMpKVxuICAgIHggKz0gYm91bmRzYWRqdXN0Lng7XG4gICAgcmV0dXJuIHsgZHg6IHgsIGR5OiB3aW4uaW5uZXJIZWlnaHQgLSAyMDAgfTtcbiAgfVxuXG4gIGNvbnN0IHdpbiA9IGV2YWwoXCJ3aW5kb3dcIilcbiAgY29uc3QgZG9jID0gZXZhbChcImRvY3VtZW50XCIpXG4gIGNvbnN0IHJuID0gTWF0aC5yYW5kb21cbiAgY29uc3QgdGdldCA9IChucykgPT4gbnMuZ2V0UnVubmluZ1NjcmlwdCgpLnRhaWxQcm9wZXJ0aWVzID8/IG5zLmV4aXQoKVxuICBjb25zdCBuYW1lcyA9IFtcIldpY2tlc1wiLCBcIlVwZG9nXCIsIFwiTWlrYXNhXCIsIFwiU251ZmZsZXNcIiwgXCJCb3Jpc1wiLCBcIkduYXNoZXJcIiwgXCJEb3VnXCIsIFwiQ2hlc3RlclwiXVxuICBjb25zdCBiYXJrID0gKG5zLCBiYXJrKSA9PiBucy5wcmludChiYXJrKTtcbiAgYXN5bmMgZnVuY3Rpb24gcG9ydEhhbmRsZShuczogTlMsIGJhcmt2YWwsIGhhcHBpbmVzcykge1xuICAgIGlmIChucy5wZWVrKG5zLnBpZCkgPT09IFwiTlVMTCBQT1JUIERBVEFcIikgcmV0dXJuIHsgYmFyazogdW5kZWZpbmVkLCBoYXBwaW5lc3M6IGhhcHBpbmVzcyB9O1xuICAgIG5zLmNsZWFyUG9ydChucy5waWQpXG4gICAgYmFya3ZhbCA9IHsgYmFyazogXCIqV0FHU1xcblRBSUwqXCIsIHRpbWU6IDE1MDAgfVxuICAgIGhhcHBpbmVzcyArPSAxMDAwO1xuICAgIHJldHVybiB7IGJhcms6IGJhcmt2YWwsIGhhcHBpbmVzczogaGFwcGluZXNzIH07XG4gIH1cbiAgbnMud3JpdGUoXCJwZXR0ZXIuanNcIiwgZG9nUGV0dGVyLCBcIndcIik7XG4gIGNvbnN0IHJlbW5hbSA9IG5hbWVzLmZpbHRlcihuYW1lID0+ICFucy5wcygpLm1hcChwcm9nID0+IG5zLmdldFJ1bm5pbmdTY3JpcHQocHJvZy5waWQpLnRpdGxlKS5pbmNsdWRlcyhuYW1lKSlcbiAgbnMuc2V0VGl0bGUobnMuYXJnc1swXSA/PyByZW1uYW1bTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogcmVtbmFtLmxlbmd0aCAtIDEpXSlcbiAgbnMuZ2V0UnVubmluZ1NjcmlwdChcInBldHRlci5qc1wiKSA/PyBucy5ydW4oXCJwZXR0ZXIuanNcIilcbiAgbnMuZGlzYWJsZUxvZygnQUxMJylcbiAgbGV0IHBvcyA9IHsgeDogdW5kZWZpbmVkLCB5OiB1bmRlZmluZWQgfVxuICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgcG9zID0geyB4OiBldmVudC5jbGllbnRYIC0gMTAwLCB5OiBldmVudC5jbGllbnRZIC0gNTAgfTtcbiAgfSk7XG4gIG5zLnRhaWwoKVxuXG4gIGxldCBoYXBwaW5lc3MgPSAxMDAwMDtcbiAgbGV0IHRpbWVzdGFtcCA9ICsobmV3IERhdGUoKSk7XG4gIGxldCB6enpjb3VudCA9IDA7XG4gIGxldCB0aWNrZXIgPSAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIG5zLmNsZWFyTG9nKCk7XG4gICAgY29uc3QgW3gsIHldID0gW3RnZXQobnMpLngsIHRnZXQobnMpLnkgLSA1MF0gLy8gY2VudHJlIG9uIHRoZSBib3hcbiAgICBsZXQgZGVsYXkgPSAxMDBcbiAgICBsZXQgem9vbWlldmFsdWUgPSB6b29taWVDYWxjKHRpY2tlcik7XG4gICAgY29uc3QgYXNjaWkgPSBwb3MueCA+IHggPyBDT04uRE9HR09fQVNDSUlbMV0gOiBDT04uRE9HR09fQVNDSUlbMF07XG4gICAgbGV0IGR2YXIgPSBzdGVwKG5zLCB6b29taWV2YWx1ZSwgcG9zKTtcbiAgICBsZXQgcG9ydGhhbmRsZXJldHVybiA9IGF3YWl0IHBvcnRIYW5kbGUobnMsIGRlbGF5LCBoYXBwaW5lc3MpXG4gICAgbGV0IGJhcmt2YWwgPSBwb3J0aGFuZGxlcmV0dXJuPy5iYXJrO1xuICAgIGhhcHBpbmVzcyA9IHBvcnRoYW5kbGVyZXR1cm4/LmhhcHBpbmVzcztcbiAgICBpZiAocm4oKSAqIDEwMCA+ICgxMDAgLSAoMiAqIHpvb21pZXZhbHVlKSkgJiYgISF6b29taWV2YWx1ZSkge1xuICAgICAgYmFya3ZhbCA9IHsgYmFyazogJ1wiQkFSS1wiJywgdGltZTogNTAwIH07XG4gICAgICBpZiAocG9zLnggPCB4ICsgMTAwICYmIHBvcy55IDwgeSArIDEwMCAmJiBwb3MueCA+IHggLSAxMDAgJiYgcG9zLnkgPiB5IC0gMTAwKSBiYXJrdmFsID0geyBiYXJrOiBcIipMSUNLU1xcbkNVUlNPUipcIiwgdGltZTogNzAwIH07XG4gICAgICBkZWxheSArPSA2MDBcbiAgICB9XG4gICAgaGFwcGluZXNzID0gcG9vcENoZWNrKG5zLCB0aW1lc3RhbXAsIGhhcHBpbmVzcylcbiAgICBpZiAoIXpvb21pZXZhbHVlKSB7XG4gICAgICBkZWxheSArPSAxMDAwXG4gICAgICB6enpjb3VudCA+IDMgPyB6enpjb3VudCA9IDEgOiB6enpjb3VudCsrO1xuICAgICAgbnMucHJpbnQoXCJ6XCIucmVwZWF0KHp6emNvdW50KSlcbiAgICB9IGVsc2Uge1xuICAgICAgbnMucHJpbnQoYGhhcHBpbmVzczogJHtNYXRoLnJvdW5kKGhhcHBpbmVzcyAvIDEwMDApfWApXG4gICAgfVxuICAgIGlmICh6b29taWV2YWx1ZSAmJiBybigpICogMTAwMCA8IDEpIHBvb3AobnMsIHgsIHkgKyAxNTAsIHVuZGVmaW5lZCk7XG4gICAgbnMucHJpbnQoYmFya3ZhbCA9PT0gdW5kZWZpbmVkID8gYXNjaWkuam9pbihcIlxcblwiKSA6IGJhcmsobnMsIGJhcmt2YWwuYmFyaykpO1xuICAgIG5zLnJlc2l6ZVRhaWwoMjUwLCAyMDApXG4gICAgbnMubW92ZVRhaWwoZHZhci5keCwgZHZhci5keSk7XG4gICAgYmFya3ZhbCA9PSB1bmRlZmluZWQgPyBhd2FpdCBucy5zbGVlcChkZWxheSkgOiBhd2FpdCBucy5zbGVlcChiYXJrdmFsLnRpbWUpXG4gICAgYmFya3ZhbCA9PSB1bmRlZmluZWQgPyB0aWNrZXIgKz0gMTAwIDogdGlja2VyICs9IGJhcmt2YWwudGltZVxuICAgIGlmIChwb3MueCAhPT0gcHJldnBvc3ggJiYgcG9zLnkgIT09IHByZXZwb3N5KSB0aWNrZXIgPSAwO1xuICAgIHByZXZwb3N4ID0gcG9zLngsIHByZXZwb3N5ID0gcG9zLnk7XG4gICAgaWYgKHRpbWVzdGFtcCArIDYwMDAwIDwgKyhuZXcgRGF0ZSgpKSkgdGltZXN0YW1wID0gKyhuZXcgRGF0ZSgpKVxuICAgIG5zLmF0RXhpdCgocGlkID0gbnMucGlkKSA9PiAobnMua2lsbChcInBldHRlci5qc1wiKSwgbnMuY2xvc2VUYWlsKHBpZCkpKTtcbiAgfVxufVxuXG5jb25zdCBwb29wU2NyaXB0ID0gJ2V4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zKSB7bnMuZGlzYWJsZUxvZyhcIkFMTFwiKTtucy5hdEV4aXQoKCkgPT4gbnMuY2xvc2VUYWlsKG5zLnBpZCkpO25zLnByaW50UmF3KFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7fSwgXCJcdUQ4M0RcdURDQTlcIikpO3doaWxlKDEpIHtucy5nZXRSdW5uaW5nU2NyaXB0KCkudGFpbFByb3BlcnRpZXMgPz8gbnMuZXhpdCgpOyBhd2FpdCBucy5zbGVlcCgxMDAwMCl9fSc7XG5cbi8vIGNyZWRpdCB5aWNoaXpobmdcbmNvbnN0IGRvZ1BldHRlciA9IGAvKiogQHBhcmFtIHtOU30gbnMgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zKSB7XG4gICAgY29uc3Qgd2luID0gZXZhbChcIndpbmRvd1wiKVxuICAgIG5zLmRpc2FibGVMb2coJ0FMTCcpXG4gICAgbGV0IHBlbmRpbmdFdmVudCA9IG51bGw7XG4gICAgY29uc3Qgc2NoZWR1bGVQZXQgPSBldmVudCA9PiB7XG4gICAgICBwZW5kaW5nRXZlbnQgPSBldmVudDtcbiAgICB9XG4gICAgbGV0IHBldCA9ICgpID0+IHtcbiAgICAgIGxldCB4ID0gcGVuZGluZ0V2ZW50LmNsaWVudFg7XG4gICAgICBsZXQgeSA9IHBlbmRpbmdFdmVudC5jbGllbnRZIDtcbiAgICAgIC8vIFRPRE86IGNoZWNrIG90aGVyIHNlcnZlcnMgdG9vXG4gICAgICBjb25zdCBwcm9jZXNzZXMgPSBucy5wcygpO1xuICAgICAgZm9yIChjb25zdCBwcm9jZXNzIG9mIHByb2Nlc3Nlcykge1xuICAgICAgICBjb25zdCBzdHVmZiA9IG5zLmdldFJ1bm5pbmdTY3JpcHQocHJvY2Vzcy5waWQpPy50YWlsUHJvcGVydGllcztcbiAgICAgICAgaWYgKCFzdHVmZikgY29udGludWU7XG4gICAgICAgIGlmIChwcm9jZXNzLmZpbGVuYW1lID09ICdwZXR0ZXIuanMnKSBjb250aW51ZTsgIC8vIG5vIHNlbGYtcGV0c1xuICAgICAgICBpZiAoeCA8IHN0dWZmLnggfHwgeCA+IHN0dWZmLnggKyBzdHVmZi53aWR0aCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh5IDwgc3R1ZmYueSB8fCB5ID4gc3R1ZmYueSArIHN0dWZmLmhlaWdodCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG5zLnByaW50KFwicGV0dGluZyBcIiArIHByb2Nlc3MuZmlsZW5hbWUpO1xuICAgICAgICBucy53cml0ZVBvcnQocHJvY2Vzcy5waWQsXCJcIik7XG4gICAgICAgIGJyZWFrOyAgLy8gb25seSBwZXQgb25lIHByb2Nlc3MgYXQgYSB0aW1lXG4gICAgICB9XG4gICAgICBwZW5kaW5nRXZlbnQgPSBudWxsO1xuICAgIH07XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNjaGVkdWxlUGV0KTtcbiAgICBucy5hdEV4aXQoKCkgPT4gd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNjaGVkdWxlUGV0KSk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGF3YWl0IG5zLnNsZWVwKDEwKTtcbiAgICAgIGlmIChwZW5kaW5nRXZlbnQpIHtcbiAgICAgICAgcGV0KCk7XG4gICAgICB9XG4gICAgfVxufVx0YFxuXG5cbi8vIENvZGluZyBDb250cmFjdHNcblxuLy8gRm9yIG1vc3Qgb2YgdGhlc2UsIGNyZWRpdCBCcmFuZG9uIC0gaHR0cHM6Ly9kaXNjb3JkLmNvbS9jaGFubmVscy80MTUyMDc1MDgzMDM1NDQzMjEvOTI0ODU0NTgxNDcxNjMzNDE5LzExMzQ0NTQ1NDg1NzcxNDQ5MDNcblxuY29uc3Qgc29sdmVycyA9IHtcbiAgXCJGaW5kIExhcmdlc3QgUHJpbWUgRmFjdG9yXCI6IGZ1bmN0aW9uIChudW0sIGRpdiA9IDIpIHtcbiAgICB3aGlsZSAobnVtID4gMSkgbnVtICUgZGl2ID8gZGl2KysgOiBudW0gLz0gZGl2O1xuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgXCJTdWJhcnJheSB3aXRoIE1heGltdW0gU3VtXCI6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4uYXJyLmZsYXRNYXAoKF8sIGkpID0+IGFyci5zbGljZShpKS5yZWR1Y2UoKHIsIGIsIGkpID0+IFsuLi5yLCBiICsgcltpXV0sIFswXSkpKVxuICB9LFxuXG4gIFwiVG90YWwgV2F5cyB0byBTdW1cIjogZnVuY3Rpb24gKG51bWJlcikge1xuICAgIGxldCB3YXlzVG9Gb3JtTnVtYmVyID0gbmV3IEFycmF5KG51bWJlciArIDEpLmZpbGwoMCk7XG4gICAgd2F5c1RvRm9ybU51bWJlclswXSA9IDE7XG4gICAgZm9yIChsZXQgY3VycmVudEludGVnZXIgPSAxOyBjdXJyZW50SW50ZWdlciA8PSBudW1iZXI7IGN1cnJlbnRJbnRlZ2VyKyspIHtcbiAgICAgIGZvciAobGV0IHNlbGVjdGVkSW50ZWdlciA9IGN1cnJlbnRJbnRlZ2VyOyBzZWxlY3RlZEludGVnZXIgPD0gbnVtYmVyOyBzZWxlY3RlZEludGVnZXIrKykge1xuICAgICAgICB3YXlzVG9Gb3JtTnVtYmVyW3NlbGVjdGVkSW50ZWdlcl0gKz0gd2F5c1RvRm9ybU51bWJlcltzZWxlY3RlZEludGVnZXIgLSBjdXJyZW50SW50ZWdlcl07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB3YXlzVG9Gb3JtTnVtYmVyW251bWJlcl0gLSAxO1xuICB9LFxuXG4gIFwiVG90YWwgV2F5cyB0byBTdW0gSUlcIjogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gYXJyYXlbMF07XG4gICAgY29uc3Qgc2V0X29mX251bXMgPSBhcnJheVsxXTtcbiAgICBsZXQgdGFyZ19hcnJheSA9IG5ldyBBcnJheSh0YXJnZXQgKyAxKS5maWxsKDApO1xuICAgIHRhcmdfYXJyYXlbMF0gPSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0X29mX251bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBzZXRfb2ZfbnVtc1tpXTsgaiA8PSB0YXJnZXQ7IGorKykge1xuICAgICAgICB0YXJnX2FycmF5W2pdICs9IHRhcmdfYXJyYXlbaiAtIHNldF9vZl9udW1zW2ldXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdfYXJyYXlbdGFyZ2V0XTtcbiAgfSxcblxuICBcIlNwaXJhbGl6ZSBNYXRyaXhcIjogZnVuY3Rpb24gKG1hdHJpeCkge1xuXG5cbiAgICBsZXQgc3RhcnRSb3cgPSAwO1xuICAgIGxldCBlbmRSb3cgPSBtYXRyaXgubGVuZ3RoIC0gMTtcbiAgICBsZXQgc3RhcnRDb2x1bW4gPSAwO1xuICAgIGxldCBlbmRDb2x1bW4gPSBtYXRyaXhbMF0ubGVuZ3RoIC0gMTtcbiAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICB3aGlsZSAoc3RhcnRSb3cgPD0gZW5kUm93ICYmIHN0YXJ0Q29sdW1uIDw9IGVuZENvbHVtbikge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29sdW1uOyBpIDw9IGVuZENvbHVtbjsgaSsrKSB7XG4gICAgICAgIG5ld0FycmF5LnB1c2gobWF0cml4W3N0YXJ0Q29sdW1uXVtpXSk7XG4gICAgICAgIGlmIChtYXRyaXgubGVuZ3RoICogbWF0cml4WzBdLmxlbmd0aCA9PSBuZXdBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXJ0Um93Kys7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgbmV3QXJyYXkucHVzaChtYXRyaXhbaV1bZW5kQ29sdW1uXSk7XG4gICAgICAgIGlmIChtYXRyaXgubGVuZ3RoICogbWF0cml4WzBdLmxlbmd0aCA9PSBuZXdBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVuZENvbHVtbi0tO1xuICAgICAgZm9yIChsZXQgaSA9IGVuZENvbHVtbjsgaSA+PSBzdGFydENvbHVtbjsgaS0tKSB7XG4gICAgICAgIG5ld0FycmF5LnB1c2gobWF0cml4W2VuZFJvd11baV0pO1xuICAgICAgICBpZiAobWF0cml4Lmxlbmd0aCAqIG1hdHJpeFswXS5sZW5ndGggPT0gbmV3QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbmRSb3ctLTtcbiAgICAgIGZvciAobGV0IGkgPSBlbmRSb3c7IGkgPj0gc3RhcnRSb3c7IGktLSkge1xuICAgICAgICBuZXdBcnJheS5wdXNoKG1hdHJpeFtpXVtzdGFydENvbHVtbl0pO1xuICAgICAgICBpZiAobWF0cml4Lmxlbmd0aCAqIG1hdHJpeFswXS5sZW5ndGggPT0gbmV3QXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdGFydENvbHVtbisrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH0sXG5cbiAgXCJBcnJheSBKdW1waW5nIEdhbWVcIjogZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gKyEhYS5yZWR1Y2UoKHIsIGIsIGkpID0+IHIgPCBpID8gMCA6IHIgPiBiICsgaSA/IHIgOiBiICsgaSwgMClcbiAgfSxcblxuICBcIkFycmF5IEp1bXBpbmcgR2FtZSBJSVwiOiBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICBjb25zdCBuID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChuIDw9IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBsZXQgY3VycmVudExldmVsRW5kID0gMDtcbiAgICBsZXQgZmFydGhlc3RKdW1wID0gMDtcbiAgICBsZXQganVtcHMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgZmFydGhlc3RKdW1wID0gTWF0aC5tYXgoZmFydGhlc3RKdW1wLCBpICsgYXJyYXlbaV0pO1xuICAgICAgaWYgKGkgPT09IGN1cnJlbnRMZXZlbEVuZCkge1xuICAgICAgICBqdW1wcysrO1xuICAgICAgICBjdXJyZW50TGV2ZWxFbmQgPSBmYXJ0aGVzdEp1bXA7XG4gICAgICAgIGlmIChjdXJyZW50TGV2ZWxFbmQgPj0gbiAtIDEpIHtcbiAgICAgICAgICByZXR1cm4ganVtcHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0sXG5cbiAgXCJNZXJnZSBPdmVybGFwcGluZyBJbnRlcnZhbHNcIjogZnVuY3Rpb24gKGludGVydmFscykge1xuICAgIGlmIChpbnRlcnZhbHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiBpbnRlcnZhbHM7XG4gICAgfVxuICAgIGludGVydmFscy5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG4gICAgbGV0IG1lcmdlZEludGVydmFscyA9IFtpbnRlcnZhbHNbMF1dO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW50ZXJ2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudEludGVydmFsID0gaW50ZXJ2YWxzW2ldO1xuICAgICAgbGV0IGxhc3RNZXJnZWRJbnRlcnZhbCA9IG1lcmdlZEludGVydmFsc1ttZXJnZWRJbnRlcnZhbHMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoY3VycmVudEludGVydmFsWzBdIDw9IGxhc3RNZXJnZWRJbnRlcnZhbFsxXSkge1xuICAgICAgICBsYXN0TWVyZ2VkSW50ZXJ2YWxbMV0gPSBNYXRoLm1heChsYXN0TWVyZ2VkSW50ZXJ2YWxbMV0sIGN1cnJlbnRJbnRlcnZhbFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRJbnRlcnZhbHMucHVzaChjdXJyZW50SW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VkSW50ZXJ2YWxzO1xuICB9LFxuXG4gIFwiR2VuZXJhdGUgSVAgQWRkcmVzc2VzXCI6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gWzEsIDIsIDNdLm1hcCgoaSwgXywgYSkgPT4gYS5tYXAoaiA9PiBhLm1hcChrID0+IGEubWFwKGwgPT4gWzAsIGksIGkgKyBqLCBpICsgaiArIGssIGkgKyBqICsgayArIGxdKSkpKS5mbGF0KDMpLm1hcChxID0+IHFbNF0gIT0gc3RyLmxlbmd0aCA/IFtdIDogcS5yZWR1Y2UoKGEsIGIsIGkpID0+ICh6ID0+IHogPT0gXCIwXCIgfHwgK3pbMF0gJiYgeiA8IDI1NiA/IFsuLi5hLCB6XSA6IGEpKHN0ci5zbGljZShiLCBxW2kgKyAxXSkpLCBbXSkpLnJlZHVjZSgoYSwgYikgPT4gYi5sZW5ndGggPiAzID8gWy4uLmEsIGIuam9pbihcIi5cIildIDogYSwgW10pO1xuICB9LFxuXG4gIFwiQWxnb3JpdGhtaWMgU3RvY2sgVHJhZGVyIElcIjogZnVuY3Rpb24gKHN0b2NrUHJpY2VzKSB7XG4gICAgaWYgKCFzdG9ja1ByaWNlcyB8fCBzdG9ja1ByaWNlcy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IG1pblByaWNlID0gc3RvY2tQcmljZXNbMF07XG4gICAgbGV0IG1heFByb2ZpdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdG9ja1ByaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBvdGVudGlhbFByb2ZpdCA9IHN0b2NrUHJpY2VzW2ldIC0gbWluUHJpY2U7XG4gICAgICBtYXhQcm9maXQgPSBNYXRoLm1heChtYXhQcm9maXQsIHBvdGVudGlhbFByb2ZpdCk7XG4gICAgICBtaW5QcmljZSA9IE1hdGgubWluKG1pblByaWNlLCBzdG9ja1ByaWNlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBtYXhQcm9maXQ7XG4gIH0sXG5cblxuICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJSVwiOiBmdW5jdGlvbiAoc3RvY2tQcmljZXMpIHtcbiAgICBsZXQgbWF4UHJvZml0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b2NrUHJpY2VzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKHN0b2NrUHJpY2VzW2ldIDwgc3RvY2tQcmljZXNbaSArIDFdKSB7XG4gICAgICAgIG1heFByb2ZpdCArPSBzdG9ja1ByaWNlc1tpICsgMV0gLSBzdG9ja1ByaWNlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1heFByb2ZpdDtcbiAgfSxcblxuICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJSUlcIjogZnVuY3Rpb24gKHN0b2NrUHJpY2VzKSB7XG4gICAgbGV0IG4gPSBzdG9ja1ByaWNlcy5sZW5ndGg7XG4gICAgaWYgKG4gPCAyKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgbGV0IHByb2ZpdE9uZVRyYW5zYWN0aW9uID0gbmV3IEFycmF5KG4pLmZpbGwoMCk7XG4gICAgbGV0IHByb2ZpdFR3b1RyYW5zYWN0aW9ucyA9IG5ldyBBcnJheShuKS5maWxsKDApO1xuICAgIGxldCBtaW5QcmljZSA9IHN0b2NrUHJpY2VzWzBdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICBtaW5QcmljZSA9IE1hdGgubWluKG1pblByaWNlLCBzdG9ja1ByaWNlc1tpXSk7XG4gICAgICBwcm9maXRPbmVUcmFuc2FjdGlvbltpXSA9IE1hdGgubWF4KHByb2ZpdE9uZVRyYW5zYWN0aW9uW2kgLSAxXSwgc3RvY2tQcmljZXNbaV0gLSBtaW5QcmljZSk7XG4gICAgfVxuICAgIGxldCBtYXhQcmljZSA9IHN0b2NrUHJpY2VzW24gLSAxXTtcbiAgICBmb3IgKGxldCBpID0gbiAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBtYXhQcmljZSA9IE1hdGgubWF4KG1heFByaWNlLCBzdG9ja1ByaWNlc1tpXSk7XG4gICAgICBwcm9maXRUd29UcmFuc2FjdGlvbnNbaV0gPSBNYXRoLm1heChwcm9maXRUd29UcmFuc2FjdGlvbnNbaSArIDFdLCBtYXhQcmljZSAtIHN0b2NrUHJpY2VzW2ldKTtcbiAgICB9XG4gICAgbGV0IG1heFByb2ZpdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIG1heFByb2ZpdCA9IE1hdGgubWF4KG1heFByb2ZpdCwgcHJvZml0T25lVHJhbnNhY3Rpb25baV0gKyBwcm9maXRUd29UcmFuc2FjdGlvbnNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gW21heFByb2ZpdCwgcHJvZml0T25lVHJhbnNhY3Rpb24sIHByb2ZpdFR3b1RyYW5zYWN0aW9uc107XG4gIH0sXG5cbiAgXCJBbGdvcml0aG1pYyBTdG9jayBUcmFkZXIgSVZcIjogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgbGV0IGsgPSBhcnJheVswXTtcbiAgICBsZXQgcHJpY2VzID0gYXJyYXlbMV07XG4gICAgbGV0IG4gPSBwcmljZXMubGVuZ3RoO1xuICAgIGlmIChuID09PSAwIHx8IGsgPT09IDApXG4gICAgICByZXR1cm4gMDtcbiAgICBpZiAoayA+PSBNYXRoLmZsb29yKG4gLyAyKSkge1xuICAgICAgbGV0IG1heFByb2ZpdCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAocHJpY2VzW2ldID4gcHJpY2VzW2kgLSAxXSkge1xuICAgICAgICAgIG1heFByb2ZpdCArPSBwcmljZXNbaV0gLSBwcmljZXNbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF4UHJvZml0O1xuICAgIH1cbiAgICBsZXQgZHAgPSBuZXcgQXJyYXkoayArIDEpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShuKS5maWxsKDApKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBrOyBpKyspIHtcbiAgICAgIGxldCBtYXhEaWZmID0gLXByaWNlc1swXTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIGRwW2ldW2pdID0gTWF0aC5tYXgoZHBbaV1baiAtIDFdLCBwcmljZXNbal0gKyBtYXhEaWZmKTtcbiAgICAgICAgbWF4RGlmZiA9IE1hdGgubWF4KG1heERpZmYsIGRwW2kgLSAxXVtqXSAtIHByaWNlc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkcFtrXVtuIC0gMV07XG4gIH0sXG5cbiAgXCJNaW5pbXVtIFBhdGggU3VtIGluIGEgVHJpYW5nbGVcIjogZnVuY3Rpb24gKHRyaWFuZ2xlKSB7XG4gICAgbGV0IG4gPSB0cmlhbmdsZS5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93ID0gbiAtIDI7IHJvdyA+PSAwOyByb3ctLSkge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDw9IHJvdzsgY29sKyspIHtcbiAgICAgICAgdHJpYW5nbGVbcm93XVtjb2xdICs9IE1hdGgubWluKHRyaWFuZ2xlW3JvdyArIDFdW2NvbF0sIHRyaWFuZ2xlW3JvdyArIDFdW2NvbCArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyaWFuZ2xlWzBdWzBdO1xuICB9LFxuXG4gIFwiVW5pcXVlIFBhdGhzIGluIGEgR3JpZCBJXCI6IGZ1bmN0aW9uIChhcnJheSkge1xuICAgIGxldCByb3dzID0gYXJyYXlbMF07XG4gICAgbGV0IGNvbHVtbnMgPSBhcnJheVsxXTtcbiAgICBsZXQgZHAgPSBuZXcgQXJyYXkocm93cykuZmlsbCgwKS5tYXAoKCkgPT4gbmV3IEFycmF5KGNvbHVtbnMpLmZpbGwoMCkpO1xuICAgIGRwWzBdWzBdID0gMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgZHBbaV1bal0gKz0gZHBbaSAtIDFdW2pdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqID4gMCkge1xuICAgICAgICAgIGRwW2ldW2pdICs9IGRwW2ldW2ogLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHBbcm93cyAtIDFdW2NvbHVtbnMgLSAxXTtcbiAgfSxcblxuICBcIlVuaXF1ZSBQYXRocyBpbiBhIEdyaWQgSUlcIjogZnVuY3Rpb24gKGdyaWQpIHtcbiAgICBsZXQgcm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGxldCBjb2x1bW5zID0gZ3JpZFswXS5sZW5ndGg7XG4gICAgbGV0IGRwID0gbmV3IEFycmF5KHJvd3MpLmZpbGwoMCkubWFwKCgpID0+IG5ldyBBcnJheShjb2x1bW5zKS5maWxsKDApKTtcbiAgICBkcFswXVswXSA9IGdyaWRbMF1bMF0gPT09IDAgPyAxIDogMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKGdyaWRbaV1bal0gPT09IDApIHtcbiAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIGRwW2ldW2pdICs9IGRwW2kgLSAxXVtqXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICBkcFtpXVtqXSArPSBkcFtpXVtqIC0gMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkcFtyb3dzIC0gMV1bY29sdW1ucyAtIDFdO1xuICB9LFxuXG4gIFwiU2hvcnRlc3QgUGF0aCBpbiBhIEdyaWRcIjogZnVuY3Rpb24gKGdyaWQpIHtcbiAgICBsZXQgbnVtUm93cyA9IGdyaWQubGVuZ3RoO1xuICAgIGxldCBudW1Db2xzID0gZ3JpZFswXS5sZW5ndGg7XG4gICAgbGV0IHZpc2l0ZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Sb3dzIH0sICgpID0+IEFycmF5KG51bUNvbHMpLmZpbGwoZmFsc2UpKTtcbiAgICBsZXQgZGlyZWN0aW9ucyA9IFtcIlVcIiwgXCJEXCIsIFwiTFwiLCBcIlJcIl07XG4gICAgbGV0IGR4ID0gWy0xLCAxLCAwLCAwXTtcbiAgICBsZXQgZHkgPSBbMCwgMCwgLTEsIDFdO1xuICAgIGxldCBxdWV1ZSA9IFt7IHg6IDAsIHk6IDAsIHBhdGg6IFwiXCIgfV07XG4gICAgdmlzaXRlZFswXVswXSA9IHRydWU7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB7IHgsIHksIHBhdGggfSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICBpZiAoeCA9PT0gbnVtUm93cyAtIDEgJiYgeSA9PT0gbnVtQ29scyAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICBsZXQgbmV3WCA9IHggKyBkeFtpXTtcbiAgICAgICAgbGV0IG5ld1kgPSB5ICsgZHlbaV07XG4gICAgICAgIGlmIChuZXdYID49IDAgJiYgbmV3WCA8IG51bVJvd3MgJiYgbmV3WSA+PSAwICYmIG5ld1kgPCBudW1Db2xzICYmIGdyaWRbbmV3WF1bbmV3WV0gPT09IDAgJiYgIXZpc2l0ZWRbbmV3WF1bbmV3WV0pIHtcbiAgICAgICAgICB2aXNpdGVkW25ld1hdW25ld1ldID0gdHJ1ZTtcbiAgICAgICAgICBxdWV1ZS5wdXNoKHsgeDogbmV3WCwgeTogbmV3WSwgcGF0aDogcGF0aCArIGRpcmVjdGlvbnNbaV0gfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH0sXG5cbiAgXCJTYW5pdGl6ZSBQYXJlbnRoZXNlcyBpbiBFeHByZXNzaW9uXCI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBmdW5jdGlvbiBpc1ZhbGlkKHN0cikge1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGZvciAobGV0IGNoYXIgb2Ygc3RyKSB7XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PT0gXCIpXCIpIHtcbiAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgIGlmIChjb3VudCA8IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3VudCA9PT0gMDtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGxldCBxdWV1ZSA9IFtzdHJpbmddO1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbGV2ZWxTaXplID0gcXVldWUubGVuZ3RoO1xuICAgICAgbGV0IHZpc2l0ZWQgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbFNpemU7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudFN0ciA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGlmIChpc1ZhbGlkKGN1cnJlbnRTdHIpKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudFN0cik7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGN1cnJlbnRTdHIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RyW2pdID09PSBcIihcIiB8fCBjdXJyZW50U3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICBsZXQgbmV3U3RyID0gY3VycmVudFN0ci5zbGljZSgwLCBqKSArIGN1cnJlbnRTdHIuc2xpY2UoaiArIDEpO1xuICAgICAgICAgICAgICBpZiAoIXZpc2l0ZWQuaGFzKG5ld1N0cikpIHtcbiAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChuZXdTdHIpO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobmV3U3RyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBcIkZpbmQgQWxsIFZhbGlkIE1hdGggRXhwcmVzc2lvbnNcIjogZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgZnVuY3Rpb24gZXZhbHVhdGVFeHByZXNzaW9uKGV4cHIpIHtcbiAgICAgIGxldCBzdGFjayA9IFtdO1xuICAgICAgbGV0IG51bSA9IDA7XG4gICAgICBsZXQgb3BlcmF0b3IgPSBcIitcIjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hhciA9IGV4cHJbaV07XG4gICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2hhcikpKSB7XG4gICAgICAgICAgbnVtID0gbnVtICogMTAgKyBwYXJzZUludChjaGFyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQoY2hhcikpIHx8IGkgPT09IGV4cHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobnVtKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSBcIi1cIikge1xuICAgICAgICAgICAgc3RhY2sucHVzaCgtbnVtKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09PSBcIipcIikge1xuICAgICAgICAgICAgbGV0IHByZXZOdW0gPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocHJldk51bSAqIG51bSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG51bSA9IDA7XG4gICAgICAgICAgb3BlcmF0b3IgPSBjaGFyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhY2sucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLCAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVFeHByZXNzaW9ucyhjdXJyRXhwciwgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gZGlnaXRzLmxlbmd0aCkge1xuICAgICAgICBpZiAoZXZhbHVhdGVFeHByZXNzaW9uKGN1cnJFeHByKSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goY3VyckV4cHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBkaWdpdCA9IGRpZ2l0c1tpbmRleF07XG4gICAgICBnZW5lcmF0ZUV4cHJlc3Npb25zKGN1cnJFeHByICsgXCIrXCIgKyBkaWdpdCwgaW5kZXggKyAxKTtcbiAgICAgIGdlbmVyYXRlRXhwcmVzc2lvbnMoY3VyckV4cHIgKyBcIi1cIiArIGRpZ2l0LCBpbmRleCArIDEpO1xuICAgICAgZ2VuZXJhdGVFeHByZXNzaW9ucyhjdXJyRXhwciArIFwiKlwiICsgZGlnaXQsIGluZGV4ICsgMSk7XG4gICAgICBpZiAoY3VyckV4cHIubGVuZ3RoID4gMCAmJiBjdXJyRXhwcltjdXJyRXhwci5sZW5ndGggLSAxXSAhPT0gXCIwXCIpIHtcbiAgICAgICAgZ2VuZXJhdGVFeHByZXNzaW9ucyhjdXJyRXhwciArIGRpZ2l0LCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgZGlnaXRzID0gYXJyYXlbMF07XG4gICAgbGV0IHRhcmdldCA9IGFycmF5WzFdO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBnZW5lcmF0ZUV4cHJlc3Npb25zKGRpZ2l0c1swXSwgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBcIkhhbW1pbmdDb2RlczogSW50ZWdlciB0byBFbmNvZGVkIEJpbmFyeVwiOiBmdW5jdGlvbiAoaW50ZWdlcikge1xuICAgIGxldCBiaWdpbnQgPSBCaWdJbnQoaW50ZWdlcik7XG4gICAgbGV0IHJldmVyc2UgPSAwbjtcbiAgICBsZXQgaWJjID0gMG47XG4gICAgZm9yICg7IGJpZ2ludCAhPT0gMG47ICsraWJjKSB7XG4gICAgICByZXZlcnNlIDw8PSAxbjtcbiAgICAgIHJldmVyc2UgfD0gYmlnaW50ICYgMW47XG4gICAgICBiaWdpbnQgPj49IDFuO1xuICAgIH1cbiAgICBsZXQgcGFyaXR5ID0gMG47XG4gICAgbGV0IG9wID0gMG47XG4gICAgbGV0IHRiYyA9IDNuO1xuICAgIGZvciAobGV0IGkgPSAwbjsgaSAhPT0gaWJjOyArK3RiYykge1xuICAgICAgaWYgKHRiYyAmIHRiYyAtIDFuKSB7XG4gICAgICAgIGxldCBiaXQgPSByZXZlcnNlID4+IGkgJiAxbjtcbiAgICAgICAgKytpO1xuICAgICAgICBvcCBePSBiaXQ7XG4gICAgICAgIGlmIChiaXQpIHtcbiAgICAgICAgICBwYXJpdHkgXj0gdGJjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBlbmMgPSAwbjtcbiAgICBmb3IgKGxldCBpID0gMW47IGkgIT09IHRiYzsgKytpKSB7XG4gICAgICBlbmMgPDw9IDFuO1xuICAgICAgaWYgKGkgJiBpIC0gMW4pIHtcbiAgICAgICAgZW5jIHw9IHJldmVyc2UgJiAxbjtcbiAgICAgICAgcmV2ZXJzZSA+Pj0gMW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcGJpdCA9IHBhcml0eSAmIDFuO1xuICAgICAgICBvcCBePSBwYml0O1xuICAgICAgICBlbmMgfD0gcGJpdDtcbiAgICAgICAgcGFyaXR5ID4+PSAxbjtcbiAgICAgIH1cbiAgICB9XG4gICAgZW5jIHw9IG9wIDw8IHRiYyAtIDFuO1xuICAgIGVuYyB8PSAxbiA8PCB0YmM7XG4gICAgcmV0dXJuIGVuYy50b1N0cmluZygyKS5zbGljZSgxKTtcbiAgfSxcblxuICBcIkhhbW1pbmdDb2RlczogRW5jb2RlZCBCaW5hcnkgdG8gSW50ZWdlclwiOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBwb3dlcnNvZnR3byA9IG5ldyBBcnJheShNYXRoLmNlaWwoTWF0aC5sb2cyKGRhdGEpKSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IDIgKiogaSk7XG4gICAgbGV0IGJhZGJpdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpIG9mIHBvd2Vyc29mdHdvLmZpbHRlcigoeCkgPT4geCA8IGRhdGEubGVuZ3RoKSkge1xuICAgICAgbGV0IGNoZWNrc3VtID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKS5maWxsKDApLm1hcCgoXywgaTIpID0+IGkyKS5maWx0ZXIoKHgpID0+IHggPiBpICYmIGkgJiB4KS5tYXAoKHgpID0+IHBhcnNlSW50KGRhdGEuc3Vic3RyaW5nKHgsIHggKyAxKSkpLnJlZHVjZSgoYSwgYikgPT4gYSBeIGIpO1xuICAgICAgaWYgKHBhcnNlSW50KGRhdGEuc3Vic3RyaW5nKGksIGkgKyAxKSkgIT0gY2hlY2tzdW0pIHtcbiAgICAgICAgYmFkYml0cy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYmFkYml0cy5sZW5ndGggPT0gMCkge1xuICAgICAgbGV0IGNoZWNrc3VtID0gZGF0YS5zdWJzdHJpbmcoMSkuc3BsaXQoXCJcIikubWFwKCh4KSA9PiBwYXJzZUludCh4KSkucmVkdWNlKChhLCBiKSA9PiBhIF4gYik7XG4gICAgICBpZiAoY2hlY2tzdW0gPT0gcGFyc2VJbnQoZGF0YS5zdWJzdHJpbmcoMCwgMSkpKSB7XG4gICAgICAgIGxldCBudW1iZXIgPSBkYXRhLnNwbGl0KFwiXCIpLm1hcCgoeCkgPT4gcGFyc2VJbnQoeCkpO1xuICAgICAgICBmb3IgKGxldCBpIG9mIHBvd2Vyc29mdHdvLmZpbHRlcigoeCkgPT4geCA8IGRhdGEubGVuZ3RoKS5yZXZlcnNlKCkpIHtcbiAgICAgICAgICBudW1iZXIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlci5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiBudW1iZXIucmVkdWNlKChhLCBiKSA9PiBhICogMiArIGIpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgYmFkaW5kZXggPSBiYWRiaXRzLnJlZHVjZSgoYSwgYikgPT4gYSB8IGIsIDApO1xuICAgIHJldHVybiBzb2x2ZXJzW1wiSGFtbWluZ0NvZGVzOiBFbmNvZGVkIEJpbmFyeSB0byBJbnRlZ2VyXCJdKGRhdGEuc3Vic3RyaW5nKDAsIGJhZGluZGV4KS5jb25jYXQoZGF0YS5zdWJzdHJpbmcoYmFkaW5kZXgsIGJhZGluZGV4ICsgMSkgPT0gXCIwXCIgPyBcIjFcIiA6IFwiMFwiKS5jb25jYXQoZGF0YS5zdWJzdHJpbmcoYmFkaW5kZXggKyAxKSkpO1xuICB9LFxuXG4gIFwiUHJvcGVyIDItQ29sb3Jpbmcgb2YgYSBHcmFwaFwiOiBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICBsZXQgbnVtVmVydGljZXMgPSBhcnJheVswXTtcbiAgICBsZXQgZWRnZXMgPSBhcnJheVsxXTtcbiAgICBsZXQgZ3JhcGggPSBuZXcgQXJyYXkobnVtVmVydGljZXMpLmZpbGwobnVsbCkubWFwKCgpID0+IFtdKTtcbiAgICBmb3IgKGxldCBbdSwgdl0gb2YgZWRnZXMpIHtcbiAgICAgIGdyYXBoW3VdLnB1c2godik7XG4gICAgICBncmFwaFt2XS5wdXNoKHUpO1xuICAgIH1cbiAgICBsZXQgY29sb3JzID0gbmV3IEFycmF5KG51bVZlcnRpY2VzKS5maWxsKC0xKTtcbiAgICBmdW5jdGlvbiBpc1ZhbGlkQ29sb3IodmVydGV4LCBjb2xvcikge1xuICAgICAgZm9yIChsZXQgbmVpZ2hib3Igb2YgZ3JhcGhbdmVydGV4XSkge1xuICAgICAgICBpZiAoY29sb3JzW25laWdoYm9yXSA9PT0gY29sb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb2xvckdyYXBoVXRpbCh2ZXJ0ZXgpIHtcbiAgICAgIGZvciAobGV0IGNvbG9yID0gMDsgY29sb3IgPD0gMTsgY29sb3IrKykge1xuICAgICAgICBpZiAoaXNWYWxpZENvbG9yKHZlcnRleCwgY29sb3IpKSB7XG4gICAgICAgICAgY29sb3JzW3ZlcnRleF0gPSBjb2xvcjtcbiAgICAgICAgICBmb3IgKGxldCBuZWlnaGJvciBvZiBncmFwaFt2ZXJ0ZXhdKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JzW25laWdoYm9yXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgY29sb3JHcmFwaFV0aWwobmVpZ2hib3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCB2ZXJ0ZXggPSAwOyB2ZXJ0ZXggPCBudW1WZXJ0aWNlczsgdmVydGV4KyspIHtcbiAgICAgIGlmIChjb2xvcnNbdmVydGV4XSA9PT0gLTEgJiYgIWNvbG9yR3JhcGhVdGlsKHZlcnRleCkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sb3JzO1xuICB9LFxuXG4gIFwiQ29tcHJlc3Npb24gSTogUkxFIENvbXByZXNzaW9uXCI6IGZ1bmN0aW9uIChpbnB1dFN0cmluZykge1xuICAgIGZ1bmN0aW9uIGdldENvdW50U3RyaW5nKGNvdW50Mikge1xuICAgICAgaWYgKGNvdW50MiA8PSA5KSB7XG4gICAgICAgIHJldHVybiBjb3VudDIudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIjlcIiArIGN1cnJlbnRDaGFyICsgZ2V0Q291bnRTdHJpbmcoY291bnQyIC0gOSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaW5wdXRTdHJpbmcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBsZXQgZW5jb2RlZFN0cmluZyA9IFwiXCI7XG4gICAgbGV0IGN1cnJlbnRDaGFyID0gaW5wdXRTdHJpbmdbMF07XG4gICAgbGV0IGNvdW50ID0gMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGlucHV0U3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRTdHJpbmdbaV0gPT09IGN1cnJlbnRDaGFyKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmNvZGVkU3RyaW5nICs9IGdldENvdW50U3RyaW5nKGNvdW50KSArIGN1cnJlbnRDaGFyO1xuICAgICAgICBjdXJyZW50Q2hhciA9IGlucHV0U3RyaW5nW2ldO1xuICAgICAgICBjb3VudCA9IDE7XG4gICAgICB9XG4gICAgICBpZiAoaSA9PT0gaW5wdXRTdHJpbmcubGVuZ3RoIC0gMSkge1xuICAgICAgICBlbmNvZGVkU3RyaW5nICs9IGdldENvdW50U3RyaW5nKGNvdW50KSArIGN1cnJlbnRDaGFyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlZFN0cmluZztcbiAgfSxcblxuICBcIkNvbXByZXNzaW9uIElJOiBMWiBEZWNvbXByZXNzaW9uXCI6IGZ1bmN0aW9uIChjb21wcmVzc2VkU3RyaW5nKSB7XG4gICAgbGV0IHBsYWluID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXByZXNzZWRTdHJpbmcubGVuZ3RoOykge1xuICAgICAgbGV0IGxpdGVyYWxfbGVuZ3RoID0gY29tcHJlc3NlZFN0cmluZy5jaGFyQ29kZUF0KGkpIC0gNDg7XG4gICAgICBpZiAobGl0ZXJhbF9sZW5ndGggPCAwIHx8IGxpdGVyYWxfbGVuZ3RoID4gOSB8fCBpICsgMSArIGxpdGVyYWxfbGVuZ3RoID4gY29tcHJlc3NlZFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBwbGFpbiArPSBjb21wcmVzc2VkU3RyaW5nLnN1YnN0cmluZyhpICsgMSwgaSArIDEgKyBsaXRlcmFsX2xlbmd0aCk7XG4gICAgICBpICs9IDEgKyBsaXRlcmFsX2xlbmd0aDtcbiAgICAgIGlmIChpID49IGNvbXByZXNzZWRTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGV0IGJhY2tyZWZfbGVuZ3RoID0gY29tcHJlc3NlZFN0cmluZy5jaGFyQ29kZUF0KGkpIC0gNDg7XG4gICAgICBpZiAoYmFja3JlZl9sZW5ndGggPCAwIHx8IGJhY2tyZWZfbGVuZ3RoID4gOSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoYmFja3JlZl9sZW5ndGggPT09IDApIHtcbiAgICAgICAgKytpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGkgKyAxID49IGNvbXByZXNzZWRTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJhY2tyZWZfb2Zmc2V0ID0gY29tcHJlc3NlZFN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSAtIDQ4O1xuICAgICAgICBpZiAoYmFja3JlZl9sZW5ndGggPiAwICYmIChiYWNrcmVmX29mZnNldCA8IDEgfHwgYmFja3JlZl9vZmZzZXQgPiA5KSB8fCBiYWNrcmVmX29mZnNldCA+IHBsYWluLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmFja3JlZl9sZW5ndGg7ICsraikge1xuICAgICAgICAgIHBsYWluICs9IHBsYWluW3BsYWluLmxlbmd0aCAtIGJhY2tyZWZfb2Zmc2V0XTtcbiAgICAgICAgfVxuICAgICAgICBpICs9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwbGFpbjtcbiAgfSxcblxuICBcIkNvbXByZXNzaW9uIElJSTogTFogQ29tcHJlc3Npb25cIjogZnVuY3Rpb24gKHBsYWluKSB7XG4gICAgbGV0IGN1cl9zdGF0ZSA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgbGV0IG5ld19zdGF0ZSA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBBcnJheSgxMCkpO1xuICAgIGZ1bmN0aW9uIHNldChzdGF0ZSwgaSwgaiwgc3RyKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gc3RhdGVbaV1bal07XG4gICAgICBpZiAoY3VycmVudCA9PSBudWxsIHx8IHN0ci5sZW5ndGggPCBjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICBzdGF0ZVtpXVtqXSA9IHN0cjtcbiAgICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA9PT0gY3VycmVudC5sZW5ndGggJiYgTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICBzdGF0ZVtpXVtqXSA9IHN0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VyX3N0YXRlWzBdWzFdID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBsYWluLmxlbmd0aDsgKytpKSB7XG4gICAgICBmb3IgKGNvbnN0IHJvdyBvZiBuZXdfc3RhdGUpIHtcbiAgICAgICAgcm93LmZpbGwobnVsbCk7XG4gICAgICB9XG4gICAgICBjb25zdCBjID0gcGxhaW5baV07XG4gICAgICBmb3IgKGxldCBsZW5ndGggPSAxOyBsZW5ndGggPD0gOTsgKytsZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0gY3VyX3N0YXRlWzBdW2xlbmd0aF07XG4gICAgICAgIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW5ndGggPCA5KSB7XG4gICAgICAgICAgc2V0KG5ld19zdGF0ZSwgMCwgbGVuZ3RoICsgMSwgc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXQobmV3X3N0YXRlLCAwLCAxLCBzdHJpbmcgKyBcIjlcIiArIHBsYWluLnN1YnN0cmluZyhpIC0gOSwgaSkgKyBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMTsgb2Zmc2V0IDw9IE1hdGgubWluKDksIGkpOyArK29mZnNldCkge1xuICAgICAgICAgIGlmIChwbGFpbltpIC0gb2Zmc2V0XSA9PT0gYykge1xuICAgICAgICAgICAgc2V0KG5ld19zdGF0ZSwgb2Zmc2V0LCAxLCBzdHJpbmcgKyBTdHJpbmcobGVuZ3RoKSArIHBsYWluLnN1YnN0cmluZyhpIC0gbGVuZ3RoLCBpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBvZmZzZXQgPSAxOyBvZmZzZXQgPD0gOTsgKytvZmZzZXQpIHtcbiAgICAgICAgZm9yIChsZXQgbGVuZ3RoID0gMTsgbGVuZ3RoIDw9IDk7ICsrbGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nID0gY3VyX3N0YXRlW29mZnNldF1bbGVuZ3RoXTtcbiAgICAgICAgICBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocGxhaW5baSAtIG9mZnNldF0gPT09IGMpIHtcbiAgICAgICAgICAgIGlmIChsZW5ndGggPCA5KSB7XG4gICAgICAgICAgICAgIHNldChuZXdfc3RhdGUsIG9mZnNldCwgbGVuZ3RoICsgMSwgc3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldChuZXdfc3RhdGUsIG9mZnNldCwgMSwgc3RyaW5nICsgXCI5XCIgKyBTdHJpbmcob2Zmc2V0KSArIFwiMFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0KG5ld19zdGF0ZSwgMCwgMSwgc3RyaW5nICsgU3RyaW5nKGxlbmd0aCkgKyBTdHJpbmcob2Zmc2V0KSk7XG4gICAgICAgICAgZm9yIChsZXQgbmV3X29mZnNldCA9IDE7IG5ld19vZmZzZXQgPD0gTWF0aC5taW4oOSwgaSk7ICsrbmV3X29mZnNldCkge1xuICAgICAgICAgICAgaWYgKHBsYWluW2kgLSBuZXdfb2Zmc2V0XSA9PT0gYykge1xuICAgICAgICAgICAgICBzZXQobmV3X3N0YXRlLCBuZXdfb2Zmc2V0LCAxLCBzdHJpbmcgKyBTdHJpbmcobGVuZ3RoKSArIFN0cmluZyhvZmZzZXQpICsgXCIwXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgdG1wX3N0YXRlID0gbmV3X3N0YXRlO1xuICAgICAgbmV3X3N0YXRlID0gY3VyX3N0YXRlO1xuICAgICAgY3VyX3N0YXRlID0gdG1wX3N0YXRlO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbiAgICBmb3IgKGxldCBsZW4gPSAxOyBsZW4gPD0gOTsgKytsZW4pIHtcbiAgICAgIGxldCBzdHJpbmcgPSBjdXJfc3RhdGVbMF1bbGVuXTtcbiAgICAgIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHN0cmluZyArPSBTdHJpbmcobGVuKSArIHBsYWluLnN1YnN0cmluZyhwbGFpbi5sZW5ndGggLSBsZW4sIHBsYWluLmxlbmd0aCk7XG4gICAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgc3RyaW5nLmxlbmd0aCA8IHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gc3RyaW5nO1xuICAgICAgfSBlbHNlIGlmIChzdHJpbmcubGVuZ3RoID09IHJlc3VsdC5sZW5ndGggJiYgTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICByZXN1bHQgPSBzdHJpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IG9mZnNldCA9IDE7IG9mZnNldCA8PSA5OyArK29mZnNldCkge1xuICAgICAgZm9yIChsZXQgbGVuID0gMTsgbGVuIDw9IDk7ICsrbGVuKSB7XG4gICAgICAgIGxldCBzdHJpbmcgPSBjdXJfc3RhdGVbb2Zmc2V0XVtsZW5dO1xuICAgICAgICBpZiAoc3RyaW5nID09IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nKGxlbikgKyBcIlwiICsgU3RyaW5nKG9mZnNldCk7XG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCBzdHJpbmcubGVuZ3RoIDwgcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgIHJlc3VsdCA9IHN0cmluZztcbiAgICAgICAgfSBlbHNlIGlmIChzdHJpbmcubGVuZ3RoID09IHJlc3VsdC5sZW5ndGggJiYgTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICAgIHJlc3VsdCA9IHN0cmluZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0ID8/IFwiXCI7XG4gIH0sXG5cbiAgXCJFbmNyeXB0aW9uIEk6IENhZXNhciBDaXBoZXJcIjogZnVuY3Rpb24gKFt0ZXh0LCBpXSkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLlsuLi50ZXh0XS5tYXAoYyA9PiAobiA9PiAobiA8IDMyID8gaSA6IG4gPCA2NSA/IDI2IDogMCkgKyBuKShjLmNoYXJDb2RlQXQoKSAtIGkpKSk7XG4gIH0sXG5cbiAgXCJFbmNyeXB0aW9uIElJOiBWaWdlblxceEU4cmUgQ2lwaGVyXCI6IGZ1bmN0aW9uIChcbiAgICBhLFxuICAgIFtzLCBrXSA9IGEubWFwKHMgPT4gWy4uLnNdLm1hcChjID0+IGMuY2hhckNvZGVBdCgpIC0gNjUpKSxcbiAgICB2ID0gWy4uLkFycmF5KDI2KS5rZXlzKCldLm1hcCgoaSwgXywgYSkgPT4gYS5tYXAoaiA9PiAoaSArIGopICUgMjYgKyA2NSkpXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnMubWFwKChuLCBpKSA9PiB2W25dW2tbaSAlIGsubGVuZ3RoXV0pKTtcbiAgfVxufVxuXG4vLyBzZXJ2ZXJzL2hvbWUvY29udHJhY3RzLmpzXG5mdW5jdGlvbiBjb250cmFjdHMobnM6IE5TKSB7XG4gIHNHZXQobnMpLmZsYXRNYXAoaG9zdCA9PiBucy5scyhob3N0LCBcIi5jY3RcIikubWFwKGNjdCA9PiAoW2hvc3QsIGNjdCwgbnMuY29kaW5nY29udHJhY3QuZ2V0Q29udHJhY3RUeXBlKGNjdCwgaG9zdCldKSkpLmZvckVhY2goKFtob3N0LCBjY3QsIHR5cGVdKSA9PiAoXG4gICAgKHJlc3VsdCA9PiByZXN1bHRcbiAgICAgID8gbnMudHByaW50ZihgJHt1dGlsLmFuc2kuZ31Db21wbGV0ZWQgJHt0eXBlfSB+ICR7Y2N0fSBvbiAke2hvc3R9IH4gJHtyZXN1bHR9YClcbiAgICAgIDogKG5zLnRwcmludGYoYCR7dXRpbC5hbnNpLnJ9RmFpbGVkICR7dHlwZX0gfiAke2NjdH0gb24gJHtob3N0fWApLCBucy5ybShjY3QsIGhvc3QpKVxuICAgICkobnMuY29kaW5nY29udHJhY3QuYXR0ZW1wdChzb2x2ZXJzW25zLmNvZGluZ2NvbnRyYWN0LmdldENvbnRyYWN0VHlwZShjY3QsIGhvc3QpXShucy5jb2Rpbmdjb250cmFjdC5nZXREYXRhKGNjdCwgaG9zdCkpLCBjY3QsIGhvc3QpXG4gICAgKSkpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBV0EsTUFBTSxVQUFVLGVBQWUsZUFBbUIsSUFBNEM7QUFBRSxRQUFNLEtBQUssT0FBTyxPQUFPLE1BQXFCLFVBQVUsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLE1BQVM7QUFBRTtBQUUxTCxNQUFNLFVBQVUsV0FBVyxlQUFtQixJQUF3QztBQUNwRixTQUFPLE1BQU0sS0FBSyxPQUFPLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBUSxPQUFNLFlBQVcsT0FBTyxDQUFDLElBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxTQUFTLE1BQU0sR0FBRyxJQUFLLFlBQVksTUFBTSxLQUFRLEVBQUUsUUFBUSxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDbEw7QUFFQSxNQUFNLFVBQVUsWUFBWSxlQUFtQixNQUFvRDtBQUNqRyxTQUFPLE1BQU0sS0FBSyxP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QUdLLE9BQU1BLEdBQUUsSUFBSSxRQUFNLElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUN4RTtBQUNBLFdBQU8sT0FBTyxhQUFhLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUN0RTtBQUNGO0FBR0EsU0FBUyxVQUFVVCxLQUFRO0FBQ3pCLE9BQUtBLEdBQUUsRUFBRSxRQUFRLFVBQVFBLElBQUcsR0FBRyxNQUFNLE1BQU0sRUFBRSxJQUFJLFNBQVEsQ0FBQyxNQUFNLEtBQUtBLElBQUcsZUFBZSxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsQ0FBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksT0FDNUksWUFBVSxTQUNQQSxJQUFHLFFBQVEsR0FBRyxLQUFLLEtBQUssQ0FBQyxhQUFhLElBQUksTUFBTSxHQUFHLE9BQU8sSUFBSSxNQUFNLE1BQU0sRUFBRSxLQUMzRUEsSUFBRyxRQUFRLEdBQUcsS0FBSyxLQUFLLENBQUMsVUFBVSxJQUFJLE1BQU0sR0FBRyxPQUFPLElBQUksRUFBRSxHQUFHQSxJQUFHLEdBQUcsS0FBSyxJQUFJO0FBQUEsSUFDbEZBLElBQUcsZUFBZSxRQUFRLFFBQVFBLElBQUcsZUFBZSxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsRUFBRUEsSUFBRyxlQUFlLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUk7QUFBQSxFQUNsSSxDQUFFO0FBQ047IiwKICAibmFtZXMiOiBbInByaW50X21hcCIsICJ0aW1lb3V0IiwgIm5zIiwgImYiLCAidCIsICJwIiwgInMiLCAiYXZhaWxhYmxlQXVncyIsICJzdGV2ZXMiLCAic3RldmUiLCAiYiIsICJhIiwgInRhcmdldCIsICJob3N0X2xpc3QiLCAibmhhY2siLCAibmdyb3ciLCAiYmF0Y2giLCAidGltZXN0YW1wIiwgImhhcHBpbmVzcyIsICJiYXJrIiwgImkiXQp9Cg==
