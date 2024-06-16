import { FactionWorkType, NS, SleeveBladeburnerTask } from "NetscriptDefinitions";
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
  writeLaunchers,
};
interface Constants {
  NFG: string;
  TRP: string;
  GANG_NAME: string;
  AUGS_TO_BUY: readonly string[];
  ALL_FACTIONS: readonly string[];
  MEMBER_NAMES: readonly string[];
  LOOP_FUNCTIONS: readonly string[];
  ONESHOT_FUNCTIONS: readonly string[];
  UTIL_FUNCTIONS: readonly string[];
  DOC: Document;
  WIN: Window;
}
const CON: Constants = {
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
    "The Red Pill",
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
    "Shadows of Anarchy",
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
    "Johnny Segment",
  ],
  LOOP_FUNCTIONS: ["stan", "runGang", "prsm", "downDog"],
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
  ],
  UTIL_FUNCTIONS: ["bd", "gvnr", "neofetch"],
  WIN: eval("window"),
  DOC: eval("document"),
} as const;
const HOOKS = {
  0: CON.DOC.getElementById("overview-extra-hook-0"),
  1: CON.DOC.getElementById("overview-extra-hook-1"),
};

function main(n: NS): void {
  (
    n.ps().forEach((s) => n.closeTail(s.pid)),
    sGet(n).forEach((s) => n.killall(s, true)),
    !n.args.length && (writeLaunchers(n), n.run("util/gvnr.js"))
  )
}

function writeLaunchers(ns: NS): void {
  (
    ["oneshot", "loop", "util"].forEach((dir) => ns.ls("home", dir).forEach((s) => ns.rm(s))),
    ((wrt) => (
      [
        { fn: CON.UTIL_FUNCTIONS, dir: "util" },
        { fn: CON.LOOP_FUNCTIONS, dir: "loop" },
        { fn: CON.ONESHOT_FUNCTIONS, dir: "oneshot" }
      ]
        .forEach((cat) => cat.fn.forEach(fn => wrt(cat.dir, fn)))
    )
    )((type: string, func: string) =>
      ns.write(
        `${type}/${func}.js`,
        `import { ${func} } from "lib.js"; export const main = async ns => (ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))), await ${func}(ns,ns.args[0]));`,
        "w",
      ),
    )
  )
}

async function gvnr(ns: NS): Promise<void> {
  const refresh_delay = 1;
  const runLoop = async (is_first_start, timer) => (
    prettyLogs(ns),
    await prettyOverview(ns, timer),
    timer % 40 == 0 && (await runScripts(ns, is_first_start)),
    await util.slp(refresh_delay * 1e3),
    await runLoop(false, timer + refresh_delay)
  );
  ns.tail(),
    ns.disableLog("ALL"),
    ns.tprintf(`${util.ansi.m}** ./gvnr.js **`),
    ns.atExit(() => ((HOOKS[0].innerText = ""), (HOOKS[1].innerText = ""))), // Clears the overview on exit to prevent stale data)
    await runLoop(true, 0);
}

async function Run(
  ns: NS,
  path: string,
  params: (string | number)[] = [],
  props: string | number = "",
): Promise<any> | null {
  !ns.fileExists("run.js") &&
    ns.write(
      `run.js`,
      [
        "/** @param ns {NS} */",
        "export async function main(ns) {",
        "const [path, props, ...params] = ns.args;",
        'const func_return = path.split(".").reduce((a, b) => a[b], ns)(...params)',
        'const return_value = !props ? func_return : props.split(".").reduce((a,b) => a?.[b], func_return)',
        "ns.atExit(() => ns.writePort(ns.pid, return_value || 0));",
        "}",
      ].join("\n"),
      "w",
    );
  const run_pid = ns.run(`run.js`, { ramOverride: 1.6 + ns.getFunctionRamCost(path) }, path, props, ...params);
  return !run_pid
    ? (ns.tprintf(`${util.ansi.r}!! ${path} DID NOT RUN !!`), null)
    : (await ns.nextPortWrite(run_pid), ns.readPort(run_pid));
}

const util = {
  lmaocat: async function (element_id: string, extra_style: string, timeout: number = 1e4) {
    await new Promise((r) => setTimeout(r, 100));
    const PI = Math.PI;
    const element = CON.DOC.getElementById(element_id);
    console.log(element);
    const text = element.innerText;
    const col_offset = 50;
    const rand_theta = () => Math.random() * PI;
    const calc_sin = (i, angle, theta) => ~~(Math.abs(Math.cos((theta + angle) * i)) * (255 - col_offset)) + col_offset;
    const gen_rgb = (i, l) =>
      `color:rgb(${calc_sin(i, 0, l.thetas.r)},${calc_sin(i, (2 * PI) / 3, l.thetas.g)},${calc_sin(i, (4 * PI) / 3, l.thetas.b)}`;
    const print_map = [...text].map((l) => ({
      letter: l,
      thetas: {
        r: rand_theta(),
        g: rand_theta(),
        b: rand_theta(),
      },
    }));
    await loop(print_map, timeout);

    async function loop(print_map, timeout: number, i = 1) {
      try {
        CON.DOC.getElementById(element_id).innerHTML = print_map
          .map((l) => `<span style="${extra_style}${gen_rgb(i, l)}">${l.letter}</span>`)
          .join("");
      } catch { }
      await new Promise((r) => setTimeout(r, 50));
      if (timeout > 0) {
        await loop(print_map, timeout - 50, i + 0.05);
      }
    }
  },
  rgbCol: (r: number, g: number, b: number, fg: boolean = true) => `\x1B[${fg ? "3" : "4"}8;2;${r};${g};${b}m`,
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
    bl: "\x1B[2m",
  },
  getIndexArray: (n: number): number[] => [...Array(n).keys()],
  tickString: (t: number, l = 40, e = true): string => (t % l ? "#".repeat((t / 4) % (l / 4)) + `|/-\\`[t % 4] : "#--exec--#"),
  digiClock: (r = Date.now(), c = (t: number, d = 60, v = (r / t) % d | 0) => (v <= 9 ? "0" + v : v)): string => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3),
  ramFormat: (ram: number): string => ram < 1e3 ? ram.toFixed(2) + "GB" : ram < 1e6 ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB",
  slp: async (t: number): Promise<void> => await new Promise((r) => setTimeout(r, t)),
};

function getFreeRam(ns: NS, host: string): number {
  return ns.getServerMaxRam(host) - ns.getServerUsedRam(host);
}

async function is_Busy(ns: NS) {
  return (
    (await Run(ns, "singularity.getCurrentWork", [""], "type")) == "GRAFTING" ||
    ((await Run(ns, "bladeburner.inBladeburner")) && !!(await Run(ns, "bladeburner.getCurrentAction", [""], "name")))
  );
}

function sGet(ns: NS, m = /* @__PURE__ */ new Set(["home"])) {
  return m.forEach((h) => ns.scan(h).map((s) => m.add(s))), [...m];
}

function readyFiley(ns: NS, file: string) {
  const data = ns.read(file);
  return JSON.parse(!!data ? data : "[]");
}

function peekyPorty(ns: NS, script: string) {
  const data = ns.peek(ns.getRunningScript(script)?.pid ?? ns.pid);
  return data == "NULL PORT DATA" ? "[]" : data;
}

function getCurrentNode(ns: NS) {
  const r = ns.getResetInfo();
  return `${r.currentNode}.${1 + r.ownedSF.get(r.currentNode)}`;
}

async function buyTOR(ns: NS) {
  await Run(ns, "singularity.purchaseTor");
}

async function ramUp(ns: NS) {
  (await Run(ns, "singularity.upgradeHomeRam")) && (ns.tprintf(util.ansi.g + "Upgraded home ram"), true) && ramUp(ns);
}

async function coresUp(ns: NS) {
  (await Run(ns, "singularity.upgradeHomeCores")) &&
    (ns.tprintf(util.ansi.g + "Upgraded home cores"), true) &&
    coresUp(ns);
}

async function factionJoin(n, s = n.singularity) {
  (await Run(n, "singularity.checkFactionInvitations")).forEach(
    (f) => (s.joinFaction(f), n.tprintf(`${util.ansi.m}Joined ${f}`)),
  );
}

async function darkwebShopping(ns: NS) {
  await ["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].reduce(
    async (a, b) => (await a, await Run(ns, "singularity.purchaseProgram", [`${b}.exe`])),
    Promise.resolve(),
  );
}
/**@param {NS} ns */

async function murderate(ns: NS, s = ns.singularity) {
  !(await is_Busy(ns)) &&
    (await Run(ns, "getPlayer", [], "numPeopleKilled")) < 30 &&
    (await Run(ns, "singularity.stopAction"), await Run(ns, "singularity.commitCrime", ["Homicide", 0]));
}

async function bd(n, target, s = n.singularity) {
  await (async (h, w = (t, r = []) => (t == h ? r : w(n.scan(t)[0], [t, ...r]))) => (
    s.connect(h),
    w(target).map(s.connect),
    n.tprintf(`${util.ansi.y}Backdoor started on ${target}`),
    await s.installBackdoor(),
    s.connect(h),
    n.tprintf(`${util.ansi.g}Backdoor complete on ${target}`)
  ))("home");
}

function persuade(
  n: NS,
  a = (s: string, p: string | undefined): void =>
    n.scan(s).forEach((v) =>
      v != p
        ? a(v, s)
        : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach((p) => {
          try {
            p(s);
          } catch { }
        }),
    ),
) {
  a("home", undefined);
}

async function d43m0nD357r0y(ns: NS, date = /* @__PURE__ */ new Date(), wd = "w0r1d_d43m0n") {
  ((sGet(ns).includes(wd) &&
    (await Run(ns, "getHackingLevel")) > (await Run(ns, "getServerRequiredHackingLevel", [wd]))) ||
    (ns.bladeburner.inBladeburner() && !ns.bladeburner.getNextBlackOp())) &&
    (["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map((f) => ns.rm(`temp/${f}`)),
      ns.write(
        "report/nodeLog.txt",
        `${getCurrentNode(ns)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      ),
      await Run(ns, "singularity.destroyW0r1dD43m0n", [12, "rset.js"]));
}

function pServ(ns: NS) {
  (ns.purchaseServer("#", 8) ||
    sGet(ns).some((s) => [...Array(21).keys()].some((r) => ns.upgradePurchasedServer(s, r << 1)))) &&
    pServ(ns);
}

function prettyLogs(ns: NS) {
  const percColour = (perc) =>
    `${perc < 33 ? util.ansi.r : perc < 66 ? util.ansi.y : perc < 85 ? util.ansi.c : util.ansi.g}${perc.padStart(6, " ")}%${util.ansi.d}`;
  const secColour = (sec) => `${sec < 5 ? util.ansi.g : util.ansi.y}${("" + sec).padStart(3, " ")}${util.ansi.d}`;
  const main_list = sGet(ns);
  const access_list = main_list.filter(
    (s) => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel(),
  );
  const funded_list = access_list.filter(ns.getServerMaxMoney);
  const funded_count = main_list.reduce((a, s) => a + +!!ns.getServerMaxMoney(s), 0);
  const total_max_ram = access_list.reduce((a, s) => a + ns.getServerMaxRam(s), 0);
  const total_free_ram = access_list.reduce((a, s) => a + getFreeRam(ns, s), 0);
  const bought_augs = readyFiley(ns, "temp/boughtAugs.txt");
  const bought_augs_sans_nfg = bought_augs.reduce((acc, aug) => acc + (aug != CON.NFG), 0);
  const num_nfg = bought_augs.reduce((acc, aug) => acc + (aug == CON.NFG), 0);
  const num_other_augs = readyFiley(ns, "temp/installedAugs.txt").reduce((acc, aug) => acc + (aug != CON.NFG), 0);
  const aug_info = bought_augs
    .filter((a) => a != CON.NFG)
    .map((aug) => " \xB7" + aug)
    .concat(num_nfg ? [" \xB7NeuroFlux Governor x" + num_nfg] : null)
    .join("\n");
  const getSecLvl = (server) => Math.ceil(ns.getServerSecurityLevel(server)).toString().padStart(3, " ");
  const getSecDelta = (server) =>
    secColour(
      Math.ceil(ns.getServerSecurityLevel(server) - ns.getServerMinSecurityLevel(server))
        .toString()
        .padStart(3, " "),
    );
  const getCash = (server) => ns.formatNumber(ns.getServerMoneyAvailable(server)).toString().padStart(8, " ");
  const getMaxCash = (server) => ns.formatNumber(ns.getServerMaxMoney(server)).toString().padStart(8, " ");
  const getPerc = (server) =>
    percColour(((ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server)) * 100).toFixed(2));
  const getExecTime = (server) => util.digiClock(ns.getWeakenTime(server));
  const getServerName = (server) =>
    server == peekyPorty(ns, "loop/prsm.js") ? `${server} ${util.ansi.w}---${util.ansi.y}\u0394<` : server;
  const getInfo = (s) => [
    getSecLvl(s),
    getSecDelta(s),
    getCash(s),
    getMaxCash(s),
    getPerc(s),
    getExecTime(s),
    getServerName(s),
  ];
  const format = (line) => ` ${line.join(" | ")}`;
  ns.resizeTail(800, 1e3),
    ns.moveTail(CON.WIN.innerWidth - 1150, 0),
    ns.clearLog(),
    [
      ...[
        ...funded_list.map(getInfo),
        [
          "sec",
          " \u0394 ",
          "  $cur  ",
          "  $max  ",
          "   %   ",
          "  ~ete  ",
          ` Target ~ ${funded_list.length}/${funded_count}`,
        ],
      ].map(format),
      "",
      ` home - ${util.ramFormat(getFreeRam(ns, "home"))}/${util.ramFormat(ns.getServerMaxRam("home"))}`,
      ` network - ${util.ramFormat(total_free_ram)}/${util.ramFormat(total_max_ram)}`,
      ` threads - ${ns.formatNumber(Math.floor(total_free_ram / ns.getScriptRam("weaken.js")))}/${ns.formatNumber(Math.floor(total_max_ram / ns.getScriptRam("weaken.js")))} threads`,
      "",
      ` bought augs x ${bought_augs_sans_nfg}, ${num_other_augs}/100 installed, NFG x ${ns.getResetInfo().ownedAugs.get(CON.NFG)}`,
      `${aug_info}`,
      ` ${ns.read("temp/installAugsReason.txt")}`,
      "",
    ].forEach((l) => ns.print(l));
}

async function prettyOverview(ns: NS, timer) {
  const prsm_target = peekyPorty(ns, "loop/prsm.js");
  const gang_info = peekyPorty(ns, "loop/runGang.js");
  const hacknet_info = readyFiley(ns, "temp/hacknet_info.txt");
  const date = Number(new Date());
  const last_aug_time = +ns.read("temp/lastAugTime.txt") || date;

  [HOOKS[0].innerHTML, HOOKS[1].innerHTML] = [
    {
      lines: [
        [`bitnode:`, `${getCurrentNode(ns)}`],
        [`pserv:`, `${sGet(ns).filter((s) => s.startsWith("#")).length}/${ns.getPurchasedServerLimit()}`],
        [`w_d lvl:`, `${Math.round(3e3 * (await Run(ns, "getBitNodeMultipliers", [], "WorldDaemonDifficulty")))}`],
        [`city:`, `${ns.getPlayer().city}`],
        [`karma:`, `${ns.formatNumber(ns.heart.break())}`],
      ],
      col: "cyan",
    },
    {
      lines: [
        [`target:`, `${prsm_target}`],
        [`$/s:`, `$${ns.formatNumber(ns.getScriptIncome("loop/prsm.js", undefined))}`],
        [`$ total:`, `${ns.formatNumber(ns.getMoneySources().sinceInstall.hacking)}`],
        [`xp/s:`, `${ns.formatNumber(ns.getTotalScriptExpGain())}`],
        [`scripts:`, `${sGet(ns).reduce((a, b) => a + ns.ps(b).length, 0)}`],
      ],
      col: "red",
    },
    {
      lines: [
        [`hN Servers:`, `${hacknet_info.num}`],
        [`hashes/Max:`, `${hacknet_info.hashes}`],
        [`hashes/s:`, `${ns.formatNumber(hacknet_info.prod)}`],
        [`profit:`, `$${ns.formatNumber(hacknet_info.profit)}`],
      ],
      col: "green",
    },
    {
      lines: [
        [`status:`, `${gang_info?.cycle ?? "~"}`],
        [`members:`, `${gang_info?.size ?? "~"}`],
        [`power:`, `${ns.formatNumber(gang_info?.power ?? 0, 0)}/${ns.formatNumber(gang_info?.nextpower ?? 0, 0)}`],
        [`territory:`, `${ns.formatNumber(gang_info?.territory ?? 0 * 100) ?? "~"}%`],
        [`warfare?:`, `${gang_info?.tw ?? "~"}`],
        [`profit:`, `$${ns.formatNumber(ns.getMoneySources().sinceStart.gang ?? 0)}`],
      ],
      col: "magenta",
    },
    {
      lines: [
        [`${util.tickString(timer)}`, `cycle #${Math.floor(timer / 30)}`],
        [`gvnr uptime:`, `${util.digiClock(timer * 1e3)}`],
        [`t+ Augbuy:`, `${!!(date - last_aug_time) ? util.digiClock(date - last_aug_time) : "N/A"}`],
        [`t+ Install:`, `${util.digiClock(date - ns.getResetInfo().lastAugReset)}`],
        [`t+ Bitnode:`, `${util.digiClock(date - ns.getResetInfo().lastNodeReset)}`],
      ],
      col: "yellow",
    },
  ]
    .flatMap((o) => o.lines.map((l) => [`<span style="color:${o.col}">${l[0]}</span>`, `<span style="color:${o.col}">${l[1]}</span>`]))
    .reduce((a, b) => [[a[0], b[0]].join("</br>"), [a[1], b[1]].join("</br>")]);


}

async function runScripts(ns: NS, is_first_start: boolean) {
  await ["contracts.js", ...CON.ONESHOT_FUNCTIONS.map((s) => `oneshot/${s}.js`)].reduce(
    async (last: Promise<void>, script: string) => (
      await last,
      is_first_start && ns.tprintf(`${util.ansi.y}starting ${script}`),
      await (async (runpid: number): Promise<void> =>
        !!runpid
          ? (await ns.nextPortWrite(runpid),
            is_first_start && (await util.slp(70 * Math.random()), ns.tprintf(`${util.ansi.g}${script} passed init`)))
          : ns.tprintf(`${util.ansi.r}!! ${script} DID NOT RUN !!`))(ns.run(script))
    ),
    void null,
  );

  CON.LOOP_FUNCTIONS.map((s) => `loop/${s}.js`).forEach((script) => !ns.isRunning(script) && ns.run(script)),
    is_first_start &&
    (ns.print(`${util.ansi.m} Welcome to gnvr.js!`),
      ns.tprintf(`${util.ansi.g}*** Startup Complete ***`),
      await util.slp(1e3),
      ns.run("util/neofetch.js"));
}

async function graft(ns: NS, g = ns.grafting) {
  !(await is_Busy(ns)) &&
    ns.singularity.travelToCity("New Tokyo") &&
    ["QLink", "ECorp HVMind Implant", "Xanipher", "OmniTek InfoLoad", "violet Congruity Implant"].some(
      (aug) => g.graftAugmentation(aug, false) && ns.write("temp/workReport.txt", `grafting ${aug}`, "w"),
    );
}

async function factWork(ns: NS, s = ns.singularity) {
  const available_augs = JSON.parse(ns.read("temp/availableAugs.txt"));
  const target_faction = available_augs.reduce(
    (a, b) => (b.fact.name != CON.GANG_NAME && b.repdelta > a.repdelta ? b : a),
    { repdelta: 0 },
  ).fact?.name;
  !(await is_Busy(ns)) &&
    !!target_faction &&
    (s.stopAction(),
      ["field", "security", "hacking"].some((job: FactionWorkType) =>
        s.workForFaction(available_augs.includes(CON.TRP) ? "Daedalus" : target_faction, job, false),
      ));
}

async function donate(ns: NS, s = ns.singularity) {
  const availableAugs = JSON.parse(ns.read("temp/availableAugs.txt"));
  const rep_multi = await Run(ns, "getBitNodeMultipliers", [], "RepToDonateToFaction");
  const nfginfo = JSON.parse(ns.read("temp/nfgInfo.txt"));
  const donatefaction = "The Black Hand";
  // Donate to TBH to grind NF Governor
  (
    s.getFactionFavor(donatefaction) >= 150 * rep_multi
    && s.getFactionRep(donatefaction) < nfginfo.rep
    && s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 1e11))
    && ns.tprintf(
      `${util.ansi.m}Donated $${ns.formatNumber(Math.max(nfginfo.cost, 1e11))} to ${donatefaction} (grinding NFG)`,
    ), // print

    // Donate to factions for augs
    availableAugs.forEach(
      (aug) =>
        aug.fact.name != CON.GANG_NAME
        && s.getFactionFavor(aug.fact.name) > 150 * rep_multi
        && aug.repdelta > 0
        && s.donateToFaction(aug.fact.name, 1e11)
        && ns.tprintf(`${util.ansi.m}Donated $100B to ${aug.fact.name}`),
      // print
    )
  )
}

async function installAugs(ns: NS) {
  const date = Number(new Date());
  const timestamp = Date().slice(4, 24);
  const augs_array = JSON.parse(ns.read("temp/availableAugs.txt")).filter((aug) => aug.fact.name != CON.GANG_NAME);
  const bought_augs = JSON.parse(ns.read("temp/boughtAugs.txt"));
  const time_since_last_aug = date - +(ns.read("temp/lastAugTime.txt") ?? date);
  const lowest_price =
    augs_array.reduce((a, b) => (a.aug != CON.TRP && a?.price < b?.price ? a : b), Infinity)?.price ?? 0;
  const favour_log = (aug) =>
    `increased ${aug.fact.name} favour by ${Math.floor(aug.fact.favdelta)} to ${Math.floor(aug.fact.favdelta + aug.fact.fav)} - ${timestamp}}`;
  const timeout_log = `timeout - $${ns.formatNumber(ns.getServerMoneyAvailable("home"))}/$${ns.formatNumber(lowest_price)}, multi x${Math.floor(+ns.read("temp/priceRatio.txt"))} - ${timestamp}`;
  const writeLog = (log) => (
    ns.write("temp/installAugsReason.txt", `installAugs #${1 + +ns.read("temp/installCounter.txt")}: ${log}`, "w"), true
  );
  const fav_to_donate = 150 * (await Run(ns, "getBitNodeMultipliers", [], "RepToDonateToFaction"));
  const checkFavour = () =>
    augs_array.some(
      (aug) =>
        aug.fact.fav < fav_to_donate &&
        (aug.fact.favdelta >= 50 || aug.fact.favdelta + aug.fact.fav > fav_to_donate) &&
        writeLog(favour_log(aug)),
    );
  const checkTimeout = () =>
    time_since_last_aug > 18e5 && lowest_price > ns.getServerMoneyAvailable("home") ? writeLog(timeout_log) : false;
  const hasTRP = () => bought_augs.includes(CON.TRP) && writeLog("installed The Red Pill");
  hasTRP() && (await Run(ns, "singularity.softReset", ["rset.js"])), // if have TRP then install asap
    !(await is_Busy(ns)) &&
    !!bought_augs.length &&
    (checkTimeout() || checkFavour()) && // then install
    (ns.write("temp/installCounter.txt", "" + (1 + +ns.read("temp/installCounter.txt")), "w"),
      ns.write("report/installAugsLog.txt", ns.read("temp/installAugsReason.txt") + "\n", "a"),
      await Run(ns, "singularity.installAugmentations", ["rset.js"]));
}

function buyAugs(ns: NS, s = ns.singularity) {
  const odd_factions = ["Bladeburners", "Church of the Machine God"];
  const timeStamp = () => ns.write("temp/lastAugTime.txt", "" + Date.now(), "w");
  const termPrint = (aug) =>
    ns.tprintf(
      `${util.ansi.m}Purchased ${util.ansi.c}${aug.aug}${util.ansi.m} from ${aug.fact.name} for $${ns.formatNumber(aug.price)}`,
    );
  const termPrintNFG = (faction) =>
    ns.tprintf(
      `${util.ansi.m}Purchased ${util.ansi.c}${CON.NFG}${util.ansi.m} from ${faction} for $${ns.formatNumber(s.getAugmentationPrice(CON.NFG))}`,
    );
  const availableAugs = JSON.parse(ns.read("temp/availableAugs.txt"));
  ns
    .getPlayer()
    .factions.forEach(
      (f) => f != CON.GANG_NAME && s.purchaseAugmentation(f, CON.NFG) && (timeStamp(), termPrintNFG(f)),
    ),
    availableAugs.forEach((aug) => s.purchaseAugmentation(aug.fact.name, aug.aug) && (timeStamp(), termPrint(aug))),
    odd_factions.forEach((fac) =>
      s.getAugmentationsFromFaction(fac).forEach((aug) => s.purchaseAugmentation(fac, aug)),
    );
}

async function ownedAugs(ns: NS) {
  const wrt = async (file, data) => await Run(ns, "write", [file, JSON.stringify(data), "w"]);
  !(await Run(ns, "fileExists", ["temp/installCounter.txt"])) && wrt("temp/installCounter.txt", 0),
    wrt(
      "temp/boughtAugs.txt",
      (await Run(ns, "singularity.getOwnedAugmentations", [1])).slice(
        (await Run(ns, "singularity.getOwnedAugmentations", [0])).length,
      ),
    ),
    wrt(
      "temp/priceRatio.txt",
      (await Run(ns, "singularity.getAugmentationPrice", ["Combat Rib I"]))
      / (await Run(ns, "singularity.getAugmentationBasePrice", ["Combat Rib I"])),
    ),
    wrt("temp/ownedAugs.txt", await Run(ns, "singularity.getOwnedAugmentations", [1])),
    wrt("temp/installedAugs.txt", await Run(ns, "singularity.getOwnedAugmentations", [0])),
    wrt("temp/nfgInfo.txt", {
      cost: await Run(ns, "singularity.getAugmentationPrice", [CON.NFG]),
      rep: await Run(ns, "singularity.getAugmentationRepReq", [CON.NFG]),
    });
}

async function availableAugs(ns: NS, s = ns.singularity) {
  const owned_augs = JSON.parse(ns.read("temp/ownedAugs.txt"));
  const forbidden_factions = ["Shadows of Anarchy", "Bladeburners", "Church of the Machine God"];
  const aug_object = ns
    .getPlayer()
    .factions.filter((faction) => !forbidden_factions.includes(faction))
    .flatMap((faction) =>
      s
        .getAugmentationsFromFaction(faction)
        .filter((aug) => CON.AUGS_TO_BUY.includes(aug) && !owned_augs.includes(aug))
        .map((augment) => ({
          aug: augment,
          price: s.getAugmentationPrice(augment),
          repreq: s.getAugmentationRepReq(augment),
          repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
          fact: {
            name: faction,
            fav: s.getFactionFavor(faction),
            favdelta: s.getFactionFavorGain(faction),
          },
        })),
    );
  ns.write("temp/availableAugs.txt", JSON.stringify(aug_object ?? []), "w");
}

async function backdoor(n: NS, s = n.singularity) {
  ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I"].forEach(
    (server) =>
      !n.getServer(server).backdoorInstalled &&
      n.hasRootAccess(server) &&
      n.getHackingLevel() > n.getServerRequiredHackingLevel(server) &&
      !n.isRunning("util/bd.js", "home", server) &&
      n.run("util/bd.js", 1, server),
  );
}

function hacknetShindigs(ns: NS, h = ns.hacknet) {
  const node_array = util.getIndexArray(h.numNodes());
  const profits = ns.getMoneySources().sinceInstall.hacknet + ns.getMoneySources().sinceInstall.hacknet_expenses;
  const server_obj = sGet(ns).map((server) => ({
    name: server,
    money: ns.getServerMaxMoney(server),
    sec: ns.getServerMinSecurityLevel(server),
  }));
  const moneytargetserver = server_obj.reduce((a, b) => (a.money < b.money ? a : b)).name;
  const sectargetserver = server_obj.reduce((a, b) => (a.sec > b.sec ? a : b)).name;
  const info = {
    num: h.numNodes(),
    hashes: `${ns.formatNumber(h.numHashes())}/${ns.formatNumber(h.hashCapacity(), 0)}`,
    prod: node_array.reduce((a, n) => a + h.getNodeStats(n).production, 0),
    profit: profits,
  };
  const upMoney = () =>
    ns.getServerMaxMoney(moneytargetserver) < 1e13 &&
    h.spendHashes("Increase Maximum Money", moneytargetserver) &&
    upMoney();
  const downSec = () =>
    ns.getServerMinSecurityLevel(sectargetserver) > 1 &&
    h.spendHashes("Reduce Minimum Security", sectargetserver) &&
    downSec();
  const nodeBuy = () => h.purchaseNode() + 1 && nodeBuy();
  const upParts = () =>
    ["Level", "Core", "Ram", "Cache"].forEach((part) => node_array.forEach((n) => h[`upgrade${part}`](n) && upParts()));
  profits > -1 && (upMoney(), downSec(), nodeBuy(), upParts()),
    ns.write("temp/hacknet_info.txt", JSON.stringify(info), "w");
}

async function steves(ns: NS, s = ns.sleeve, b = ns.bladeburner, g = ns.gang) {
  const steves = util.getIndexArray(8).sort((a, b) => s.getSleeve(b).storedCycles - s.getSleeve(a).storedCycles);
  const get_low_skill = (steve) =>
    ["strength", "defense", "dexterity", "agility"].reduce(
      (a, skill) => (s.getSleeve(steve).skills[skill] < 25 ? skill : a),
      false,
    );
  const try_train = (steve) =>
    get_low_skill(steve)
      ? (s.travel(steve, "Sector-12"), s.setToGymWorkout(steve, "Powerhouse Gym", "" + get_low_skill(steve)))
      : false;
  const try_stabbin = (steve) => (!g.inGang() ? s.setToCommitCrime(steve, "Homicide") : false);
  const bb_infil = (steve) =>
    b.inBladeburner() && !steves.map((steve) => s.getTask(steve)).some((task) => task?.type === "INFILTRATE")
      ? s.setToBladeburnerAction(steve, "Infiltrate synthoids")
      : false;
  const bb_contracts = (steve) =>
    b.inBladeburner() &&
    b
      .getContractNames()
      .some(
        (contract) =>
          steves.every((steve) => (s.getTask(steve) as SleeveBladeburnerTask)?.actionName !== contract) &&
          b.getActionCountRemaining("Contract", contract) &&
          s.setToBladeburnerAction(steve, "Take on contracts", contract),
      );
  const recover_or_idle = (steve) => (s.getSleeve(steve).shock ? s.setToShockRecovery(steve) : s.setToIdle(steve));
  const buy_augs = (steve) =>
    s
      .getSleevePurchasableAugs(steve)
      .sort((a, b) => a.cost - b.cost)
      .forEach((aug) => s.purchaseSleeveAug(steve, aug.name));
  steves.forEach((steve) => s.setToIdle(steve)),
    steves.forEach(
      (steve) => (
        !s.getSleeve(steve).shock && buy_augs(steve),
        s.getSleeve(steve).shock > 90
          ? recover_or_idle(steve)
          : try_train(steve) || try_stabbin(steve) || bb_infil(steve) || bb_contracts(steve) || recover_or_idle(steve)
      ),
    );
}

async function bburner(ns: NS, s = ns.singularity, bb = ns.bladeburner) {
  const goTrain = async () => (
    await Run(ns, "singularity.stopAction"),
    await Run(ns, "singularity.travelToCity", ["Sector-12"]),
    await Run(ns, "singularity.gymWorkout", [
      "Powerhouse Gym",
      ["Defense", "Strength", "Dexterity", "Agility"].reduce((a, b) => {
        const getSkill = (str) => ns.getPlayer().skills[str.toLowerCase()];
        return getSkill(a) < getSkill(b) ? a : b;
      }),
      0,
    ])
  );
  const upSkill = () =>
    bb.upgradeSkill(
      bb.getSkillNames().reduce((a, b) => (bb.getSkillUpgradeCost(a) < bb.getSkillUpgradeCost(b) ? a : b)),
    ) && upSkill();
  const doOp = async (op) =>
    op
      ? (([a, b]) => a + b > 1.8)(bb.getActionEstimatedSuccessChance("BlackOps", bb.getNextBlackOp().name)) &&
      !(await is_Busy(ns)) &&
      (s.stopAction(), bb.startAction("BlackOps", bb.getNextBlackOp().name))
      : d43m0nD357r0y(ns);
  bb.joinBladeburnerDivision(),
    !bb.inBladeburner() ? await goTrain() : (upSkill(), await doOp(bb.getNextBlackOp()?.name));
}

async function stan(ns: NS, s = ns.stanek) {
  ns.disableLog("ALL"), ns.enableLog("exec"), ns.run("lsg.js");
  s.acceptGift() || (await ns.sleep(1e3), await stan(ns));
  const spare_threads = Math.floor((getFreeRam(ns, "home") - 50) / ns.getScriptRam("chrg.js"));
  const target = s
    .activeFragments()
    .filter((f) => f.id < 100)
    .reduce((a, b) => (a.numCharge < b.numCharge ? a : b), { numCharge: NaN, x: NaN, y: NaN });
  !!target &&
    (spare_threads > 0 && !isNaN(target.numCharge)
      ? ns.exec("chrg.js", "home", spare_threads, target.x, target.y)
      : ns.print("no threads! skipping...")),
    ns.writePort(ns.pid, ""),
    await util.slp(1e4),
    await stan(ns);
}

interface GangStats {
  power: number;
}

async function runGang(n, g = n.gang) {
  const tryRecruit = (name = CON.MEMBER_NAMES[Math.floor(Math.random() * CON.MEMBER_NAMES.length)]) =>
    g.getMemberNames().includes(name)
      ? tryRecruit()
      : g.recruitMember(name) && n.tprintf(`${util.ansi.r}Recruited ${util.ansi.g}${name}`);
  const setTW = () =>
    g.setTerritoryWarfare(Object.keys(other_gang_info()).every((h) => g.getChanceToWinClash(h) >= 0.5));
  const slp = async (t) => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1));
  const other_gang_info = g.getOtherGangInformation;
  const tick = async (
    q = () => Object.values(other_gang_info()).reduce((a: number, b: GangStats) => a + b.power, 0),
    l = q(),
  ) => (await n.sleep(50), l == q() && (await tick()));
  const focus = () => (g.getMemberNames().length > 9 ? "moneyGain" : "respectGain");
  const assignJob = (task) => (
    g
      .getMemberNames()
      .forEach(
        (member) => (
          g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)),
          ["agi", "str", "def", "dex"].reduce((a, b) => a + g.getAscensionResult(member)?.[b], 0) > 6 && g.ascendMember(member),
          g.setMemberTask(
            member,
            task ??
            g
              .getTaskNames()
              .reduce(
                (a, b) => (
                  g.setMemberTask(member, b),
                  ((gain) => (gain < a.dat ? a : { name: b, dat: gain }))(g.getMemberInformation(member)[focus()])
                ),
              ).name,
          )
        ),
      ),
    printToPort(
      task
        ?.split(" ")
        .map((a) => a[0])
        .join("") ?? "Jobs",
    )
  );
  const printToPort = (job) => (
    n.clearPort(n.pid),
    n.writePort(n.pid, {
      cycle: job,
      size: g.getMemberNames().length,
      power: g.getGangInformation().power,
      nextpower: Object.values(other_gang_info()).reduce((a: number, b: GangStats) => (a > b.power ? a : b.power), 0),
      territory: g.getGangInformation().territory * 100,
      tw: g.getGangInformation().territoryWarfareEngaged,
    })
  );
  (g.inGang() || g.createGang(CON.GANG_NAME)) &&
    (tryRecruit(),
      setTW(),
      assignJob(undefined),
      await slp(15e3),
      assignJob("Train Combat"),
      await slp(4500),
      assignJob("Territory Warfare"),
      await tick(),
      await runGang(n));
}

async function golfedGang(
  n,
  g = n.gang,
  s = async (t) => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1)),
  a = (j) =>
    g
      .getMemberNames()
      .map(
        (m) => (
          g.getEquipmentNames().map((i) => g.purchaseEquipment(m, i)),
          ["agi", "str", "def", "dex"].reduce((a, b) => a + g.getAscensionResult(m)?.[b], 0) > 6 && g.ascendMember(m),
          g.setMemberTask(
            m,
            j ??
            g
              .getTaskNames()
              .reduce((a, b) =>
                (g.setMemberTask(m, b), (i) => (i < a.g ? a : { n: b, g: i }))(
                  g.getMemberInformation(m)[g.getMemberNames().length > 9 ? "moneyGain" : "respectGain"],
                ),
              ).n,
          )
        ),
      ),
) {
  (g.inGang() || g.createGang("Slum Snakes")) &&
    (g.recruitMember(Math.random()),
      g.setTerritoryWarfare(Object.keys(g.getOtherGangInformation()).every((h) => g.getChanceToWinClash(h) > 0.5)),
      a(undefined),
      await s(15e3),
      a("Train Combat"),
      await s(4500),
      a("Territory Warfare"),
      await g.nextUpdate(),
      await runGang(n));
}

interface PlayerExp {
  hacking: number;
}

async function prsm(ns: NS) {
  ns.disableLog("ALL");
  ns.enableLog("exec");
  const hack_percentage = 0.01;
  const batch_delay = 20;
  const write_workers = () =>
    ["hack", "grow", "weaken"].forEach(
      (script) => (
        !ns.fileExists(script) &&
        ns.write(
          `${script}.js`,
          `export const main = async ns => await ns.${script}(ns.args[0], { additionalMsec: ns.args[1] })`,
          "w",
        ),
        sGet(ns).forEach((server) => ns.scp(`${script}.js`, server))
      ),
    );
  const getHostRam = (server) => Math.floor(getFreeRam(ns, server) - (server == "home" ? 100 : 0));
  const modPlayer = (player, threads, target) =>
    Object.fromEntries(
      Object.entries(player).map(
        ([key, entry]: [string, PlayerExp]) => (
          key == "exp" && (entry.hacking += ns.formulas.hacking.hackExp(target, player) * threads),
          key == "skills" &&
          (entry.hacking = ns.formulas.skills.calculateSkill(player.exp.hacking, player.mults.hacking)),
          [key, entry]
        ),
      ),
    );
  const sendJobs = (b_obj, p_obj) => (
    (b_obj.threads = Math.min(b_obj.available, b_obj.script.jobs)),
    (b_obj.available -= b_obj.threads),
    (b_obj.script.jobs -= b_obj.threads),
    b_obj.threads > 0 &&
      !!ns.exec(`${b_obj.script.name}.js`, b_obj.host, b_obj.threads, b_obj.target.hostname, b_obj.script.time)
      ? b_obj.available > 0 && b_obj.script.jobs > 1
        ? sendJobs(b_obj, modPlayer(p_obj, b_obj.threads, b_obj.target))
        : modPlayer(p_obj, b_obj.threads, b_obj.target)
      : p_obj
  );

  async function runLoop(run_p_obj) {
    !ns.isRunning("share.js") &&
      ns.run("share.js", Math.floor(0.25 * (getFreeRam(ns, "home") / ns.getScriptRam("share.js"))) || 1);
    write_workers();
    const host_list = sGet(ns).filter((server) => ns.hasRootAccess(server) && server.substring(0, 7) != "hacknet");
    const getAvailableThreads = (script) =>
      host_list.reduce((a, server) => a + Math.floor(getHostRam(server) / ns.getScriptRam(`${script.name}.js`)), 0);
    const target = ns.getServer(
      host_list.reduce((a, b) => {
        const rank = (s) => ns.getServerMaxMoney(s) / ns.getServerMinSecurityLevel(s);
        return ns.getServerRequiredHackingLevel(b) <= ns.getHackingLevel() / 2 && rank(a) < rank(b) ? b : a;
      }),
    );
    const clamp = (n) => (n < 1 || n == Infinity ? 1 : n);
    const hack_jobs = 1;
    const grow_jobs =
      1 + ns.growthAnalyze(target.hostname, 1 / (1 - ns.formulas.hacking.hackPercent(target, run_p_obj) * hack_jobs));
    const sec_jobs = (target.hackDifficulty - target.minDifficulty) / ns.weakenAnalyze(1);
    const wekn_jobs = sec_jobs + hack_jobs * 0.04 + grow_jobs * 0.08;
    const batch_total = hack_jobs + grow_jobs + wekn_jobs;
    const squish = (script, jobs) =>
      Math.floor(batch_total > getAvailableThreads(script) ? jobs * (getAvailableThreads(script) / batch_total) : jobs);
    const jobs_array = [
      {
        name: "hack",
        jobs: squish("hack", hack_jobs),
        time: ns.getHackTime(target.hostname) * 3,
      },
      {
        name: "grow",
        jobs: squish("grow", grow_jobs),
        time: ns.getHackTime(target.hostname) * 0.8,
      },
      { name: "weaken", jobs: squish("weaken", wekn_jobs), time: 0 },
    ];
    const batch_complete_p_obj = jobs_array.reduce(
      (_, script) =>
        host_list.reduce(
          (_2, host) =>
            // Iterate through hosts and fill each one with jobs until done
            sendJobs(
              {
                available: Math.floor(getHostRam(host) / ns.getScriptRam(`${script.name}.js`)),
                script,
                host,
                target,
              },
              run_p_obj,
            ),
          {},
        ),
      {},
    );
    ns.clearPort(ns.pid),
      ns.writePort(ns.pid, target.hostname),
      await util.slp(batch_delay),
      await runLoop(batch_complete_p_obj);
  }
  await runLoop(await Run(ns, "getPlayer"));
}

async function neofetch(ns: NS) {
  const blk = "\u2588";
  const col_arr = [util.ansi.k, util.ansi.r, util.ansi.g, util.ansi.y, util.ansi.b, util.ansi.m, util.ansi.c];
  const dateFormat = (date) =>
    `${Math.floor(date / (60 * 24))} days, ${Math.floor((date / 60) % 24)} hours, ${Math.floor(date % 60)} mins`;
  const pad = ` `.repeat(35);
  const title = `muesli@home`;
  const dashes = util.ansi.w + "-".repeat(11);
  const os = `${util.ansi.g}OS: ${util.ansi.w}Fulcrum Technologies Chapeau Linux x86_64`;
  const host = `${util.ansi.g}Host: ${util.ansi.w}${ns.getHostname()}`;
  const kernel = `${util.ansi.g}Kernel: ${util.ansi.w}${CON.DOC.title}`;
  const uptime = `${util.ansi.g}Uptime: ${util.ansi.w}${dateFormat(ns.getPlayer().totalPlaytime / (1e3 * 60))}`;
  const packages = `${util.ansi.g}Packages: ${util.ansi.w}${ns.ls("home").length} (bitpkg)`;
  const shell = `${util.ansi.g}Shell: ${util.ansi.w}bit-sh 6.9`;
  const resolution = `${util.ansi.g}Resolution: ${util.ansi.w}${CON.WIN.innerWidth} x ${CON.WIN.innerHeight}`;
  const wm = `${util.ansi.g}WM: ${util.ansi.w}BitBurner WM`;
  const terminal = `${util.ansi.g}Terminal: ${util.ansi.w}BiTTY`;
  const cpu = `${util.ansi.g}CPU: ${util.ansi.w}Gen FT-6900x ${ns.getServer("home").cpuCores} core`;
  const memory = `${util.ansi.g}Memory: ${util.ansi.w}${ns.getServer("home").ramUsed * 1e3} MiB / ${ns.getServer("home").maxRam * 1e3} MiB`;
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
    pad + [...col_arr, util.ansi.w, ""].join(blk.repeat(4)),
  ];
  await ascii.reduce(async (a, b) => (await a, ns.tprintf(b), util.slp(Math.random() * 10 * 7)), Promise.resolve());
}

const win = eval("window")
const doc = eval("document")
const rn = Math.random
const tget = (ns) => ns.getRunningScript().tailProperties ?? ns.exit()
const names = ["Wickes", "Updog", "Mikasa", "Snuffles", "Boris", "Gnasher", "Doug", "Chester"]
const bark = (ns, bark) => ns.print(bark);


/** @param {NS} ns */
function checkBounds(ns, t) {
  let returnval = { x: 0, y: 0 },
    x = t.x,
    y = t.y,
    w = t.width,
    h = t.height,
    otherprogs = ns.ps().map(p => ns.getRunningScript(p.pid)?.tailProperties).filter(p => p);
  otherprogs.forEach(prog => {
    if (prog.x > x + w) returnval.x - 50;
    if (prog.x + prog.width < x) returnval.x + 50;
  }
  );
  return returnval;
}


function zoomieCalc(d: number): number {
  return d > 500
    ? 1.2
    : d > 7000
      ? 0.5
      : d > 15000
        ? 0.2
        : d > 15000
          ? 0 // Go to sleep
          : 2; // Excited mode!
}

function poopCheck(ns, timestamp, happiness) {
  if (timestamp + 60000 < +(new Date())) return happiness;
  return happiness - ns.ps().filter(p => p.filename === "poop.js").length
}


function step(ns, zoomievalue, target, bool = 1, randbool = true) {
  let screenratio = win.innerHeight / win.innerWidth,
    x = tget(ns).x,
    y = tget(ns).y;
  if (target.x > x) { x += (rn() * zoomievalue) * 2 * (10 * zoomievalue); }
  else if (target.x < x) { x -= (rn() * zoomievalue) * 2 * (10 * zoomievalue) }
  if (rn() - 0.5 > 0) bool = -1
  if (zoomievalue && randbool) {
    x += 3 * rn() * bool;
    y += 3 * rn() * bool * screenratio;
  }
  let boundsadjust = checkBounds(ns, tget(ns))
  x += boundsadjust.x;
  return { dx: x, dy: win.innerHeight - 200 };
}

async function portHandle(ns, barkval, happiness) {
  if (ns.peek(ns.pid) === "NULL PORT DATA") return { bark: undefined, happiness: happiness };
  ns.clearPort(ns.pid)
  barkval = { bark: "*WAGS\nTAIL*", time: 1500 }
  happiness += 1000;
  return { bark: barkval, happiness: happiness };
}

const poopScript = 'export async function main(ns) {ns.disableLog("ALL");ns.atExit(() => ns.closeTail(ns.pid));ns.printRaw(React.createElement("h2", {}, "💩"));while(1) {ns.getRunningScript().tailProperties ?? ns.exit(); await ns.sleep(10000)}}';

function poop(ns: NS, x: number, y: number, pooppid: number) {
  (
    ns.write("poop.js", poopScript, "w"),
    pooppid = ns.run("poop.js"),
    ns.tail(pooppid),
    ns.resizeTail(150, 100, pooppid),
    ns.moveTail(x, y, pooppid)
  )
}

async function downDog(ns: NS, prevposx: number, prevposy: number) {
  const asciis = {
    l: [`    ___`, ` __/_,  \`.  .-"""-.`, ` \\_,  | \\-'  /   )\`-')`, `  "") \`"\`    \  ((\`"\``, ` ___Y  ,    .'7 /|`, `(_,___/...-\` (_/_/         `,],
    r: [`                 ___`, `      .-"""-.  .\` ,_\\__`, ` ('-\`(   \\  '-/ |   ,_/   `, `   \`"\`))       \`"\` (""`, `      |\\ 4'.    ,  Y___`, `      \\_\\_) \`-...\\___,_)`,]
  }
  ns.write("petter.js", dogPetter, "w");
  const remnam = names.filter(name => !ns.ps().map(prog => ns.getRunningScript(prog.pid).title).includes(name))
  ns.setTitle(ns.args[0] ?? remnam[Math.round(Math.random() * remnam.length - 1)])
  ns.getRunningScript("petter.js") ?? ns.run("petter.js")
  ns.disableLog('ALL')
  let pos = { x: undefined, y: undefined }
  win.addEventListener('mousemove', (event) => {
    pos = { x: event.clientX - 100, y: event.clientY - 50 };
  });
  ns.tail()

  let happiness = 10000;
  let timestamp = +(new Date());
  let zzzcount = 0;
  let ticker = 0;
  while (true) {
    ns.clearLog();
    const [x, y] = [tget(ns).x, tget(ns).y - 50] // centre on the box
    let delay = 100
    let zoomievalue = zoomieCalc(ticker);
    const ascii = pos.x > x ? asciis.r : asciis.l;
    let dvar = step(ns, zoomievalue, pos);
    let porthandlereturn = await portHandle(ns, delay, happiness)
    let barkval = porthandlereturn?.bark;
    happiness = porthandlereturn?.happiness;
    if (rn() * 100 > (100 - (2 * zoomievalue)) && !!zoomievalue) {
      barkval = { bark: '"BARK"', time: 500 };
      if (pos.x < x + 100 && pos.y < y + 100 && pos.x > x - 100 && pos.y > y - 100) barkval = { bark: "*LICKS\nCURSOR*", time: 700 };
      delay += 600
    }
    happiness = poopCheck(ns, timestamp, happiness)
    if (!zoomievalue) {
      delay += 1000
      zzzcount > 3 ? zzzcount = 1 : zzzcount++;
      ns.print("z".repeat(zzzcount))
    } else {
      ns.print(`happiness: ${Math.round(happiness / 1000)}`)
    }
    if (zoomievalue && rn() * 1000 < 1) poop(ns, x, y + 150, undefined);
    barkval === undefined ? ascii.forEach(line => ns.print(line)) : bark(ns, barkval.bark)
    ns.resizeTail(250, 200)
    ns.moveTail(dvar.dx, dvar.dy);
    barkval == undefined ? await ns.sleep(delay) : await ns.sleep(barkval.time)
    barkval == undefined ? ticker += 100 : ticker += barkval.time
    if (pos.x !== prevposx && pos.y !== prevposy) ticker = 0;
    prevposx = pos.x, prevposy = pos.y;
    if (timestamp + 60000 < +(new Date())) timestamp = +(new Date())
    ns.atExit((pid = ns.pid) => (ns.kill("petter.js"), ns.closeTail(pid)));
  }
}

// credit yichizhng
const dogPetter = `/** @param {NS} ns */
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
}	`