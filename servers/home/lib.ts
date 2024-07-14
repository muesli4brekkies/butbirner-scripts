import { FactionWorkType, GangOtherInfoObject, NS, SleeveBladeburnerTask } from "NetscriptDefinitions";

declare global {
  interface Array<T> {
    forEachAsync(fn: (v: T) => Promise<void>): Promise<void>;
    mapAsync<E>(fn: (v: T) => Promise<E[]>): Promise<E[]>;
    someAsync(fn: (v: T) => Promise<boolean>): Promise<boolean>;
    everyAsync(fn: (v: T) => Promise<boolean>): Promise<boolean>;
  }
}

Array.prototype.forEachAsync = async function <T>(fn: (v: T) => Promise<void>): Promise<void> { await this.reduce(async (last: Promise<void>, curr) => (await last, fn(curr)), void null) }

Array.prototype.mapAsync = async function <E>(fn: (v: E) => Promise<E>): Promise<E[]> {
  return await this.reduce(async (ret, cur, i) => await ((async newArr => (newArr[i] = await fn(cur), newArr))(await ret)), (async () => Array.from<E>({ length: this.length }))())
}

Array.prototype.someAsync = async function <T>(func: (v: T) => Promise<boolean>): Promise<boolean> {
  return await this.reduce(async (ret, cur) => (await ret) || await func(cur), (async () => false)())
}

Array.prototype.everyAsync = async function <T>(func: (v: T) => Promise<boolean>): Promise<boolean> {
  return await this.reduce(async (ret, cur) => (await ret) && await func(cur), (async () => false)())
}

export {
  contracts as solveAllContracts,
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
  stan,
  steves,
  util,
  writeLaunchers,
};
type Constants = {
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

  DOGGO_ASCII: readonly string[];
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
  LOOP_FUNCTIONS: ["stan", "runGang", "prsm", /*"downDog"*/],
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
    "contracts",
  ],
  UTIL_FUNCTIONS: ["bd", "gvnr", "neofetch"],
  DOGGO_ASCII
    : [
      `    ___`, ` __/_,  \`.  .-"""-.`, ` \\_,  | \\-'  /   )\`-')`, `  "") \`"\`    \  ((\`"\``, ` ___Y  ,    .'7 /|`, `(_,___/...-\` (_/_/         `,
      `                 ___`, `      .-"""-.  .\` ,_\\__`, ` ('-\`(   \\  '-/ |   ,_/   `, `   \`"\`))       \`"\` (""`, `      |\\ 4'.    ,  Y___`, `      \\_\\_) \`-...\\___,_)`,
    ],
  WIN: eval("window"),
  DOC: eval("document"),
} as const;

const HOOKS = [
  CON.DOC.getElementById("overview-extra-hook-0"),
  CON.DOC.getElementById("overview-extra-hook-1"),
];

async function main(n: NS) {
  (
    n.ps().forEach((s) => n.closeTail(s.pid)),
    sGet(n).forEach((s) => n.killall(s, true)),
    !n.args.length && (writeLaunchers(n), n.run("util/gvnr.js"))
  )
}

function writeLaunchers(ns: NS): void {
  (
    ["oneshot", "loop", "util"].forEach((dir) => ns.ls("home", dir).forEach((s) => ns.rm(s))),
    [
      [CON.UTIL_FUNCTIONS, "util"],
      [CON.LOOP_FUNCTIONS, "loop"],
      [CON.ONESHOT_FUNCTIONS, "oneshot"]
    ]
      .forEach(([fns, dir]: [string[], string]) => fns.forEach(fn =>
        ns.write(
          `${dir}/${fn}.js`,
          `import { ${fn} } from "lib.js"; export const main = async ns => (ns.atExit(() => (ns.clearPort(ns.pid),ns.writePort(ns.pid, ""))), await ${fn}(ns,ns.args[0]));`,
          "w",
        )
      )
      )
  )
}

async function gvnr(ns: NS, is_first_start = true, timer = 0): Promise<void> {
  (
    is_first_start
    && (
      ns.atExit(() => (HOOKS[0].innerText = "", HOOKS[1].innerText = "", ns.closeTail())),
      ns.tail(),
      ns.disableLog("ALL"),
      ns.tprintf(`${util.ansi.m}** ./gvnr.js **`)
    ),
    await [
      timer % 40 ? async _ => void _ : scriptLoop.bind(null, ns, is_first_start),
      prettyLogs.bind(null, ns),
      prettyOverview.bind(null, ns, timer),
      util.slp.bind(null, 1e3),
      gvnr.bind(null, ns, false, timer + 1),
    ].forEachAsync(async fn => await fn())
  )
}

async function Run(
  ns: NS,
  path: string,
  params: (string | number)[] = [],
  props: string | number = "",
): Promise<any> | null {
  ns.write(
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
  tickString: (t: number, l = 40): string => (t % l ? "#".repeat((t / 4) % (l / 4)) + `|/-\\`[t % 4] : "#--exec--#"),
  digiClock: (r = Date.now(), c = (t: number, d = 60, v = (r / t) % d | 0) => (v <= 9 ? "0" + v : v)): string => (r < 864e5 ? "" : c(864e5, 1 / 0) + "-") + c(36e5, 24) + ":" + c(6e4) + ":" + c(1e3),
  ramFormat: (ram: number): string => ram < 1e3 ? ram.toFixed(2) + "GB" : ram < 1e6 ? (ram / 1e3).toFixed(2) + "TB" : (ram / 1e6).toFixed(2) + "PB",
  slp: async (t: number): Promise<void> => await new Promise((r) => setTimeout(r, t)),
};

function getFreeRam(ns: NS, host: string): number {
  return ns.getServerMaxRam(host) - ns.getServerUsedRam(host);
}

async function is_Busy(ns: NS): Promise<boolean> {
  return (
    (await Run(ns, "singularity.getCurrentWork", [""], "type")) == "GRAFTING" ||
    ((await Run(ns, "bladeburner.inBladeburner")) && !!(await Run(ns, "bladeburner.getCurrentAction", [""], "name")))
  );
}

function sGet(ns: NS, m = /* @__PURE__ */ new Set(["home"])): string[] {
  return m.forEach((h) => ns.scan(h).map((s) => m.add(s))), [...m];
}

function readyFiley(ns: NS, file: string)/* TODO type all this stuff */ {
  const data = ns.read(file);
  try { return JSON.parse(data); }
  catch { return data; }
}

function peekyPorty(ns: NS, script: string) {
  const data = ns.peek(ns.getRunningScript(script)?.pid ?? ns.pid);
  return data == "NULL PORT DATA" ? "" : data;
}

async function getCurrentNode(ns: NS): Promise<string> {
  const r = await Run(ns, "getResetInfo");
  return `${r.currentNode}.${1 + r.ownedSF.get(r.currentNode)}`;
}

function buyTOR(ns: NS): void {
  Run(ns, "singularity.purchaseTor");
}

async function ramUp(ns: NS): Promise<void> {
  (await Run(ns, "singularity.upgradeHomeRam")) && (ns.tprintf(util.ansi.g + "Upgraded home ram"), true) && ramUp(ns);
}

async function coresUp(ns: NS): Promise<void> {
  (await Run(ns, "singularity.upgradeHomeCores")) &&
    (ns.tprintf(util.ansi.g + "Upgraded home cores"), true) &&
    coresUp(ns);
}

async function factionJoin(n: NS, s = n.singularity) {
  await (await Run(n, "singularity.checkFactionInvitations")).forEachAsync(async (f) => (await Run(n, "singularity.joinFaction", [f]), n.tprintf(`${util.ansi.m}Joined ${f}`)))
}

async function darkwebShopping(ns: NS) {
  await ["BruteSSH", "FTPCrack", "relaySMTP", "HTTPWorm", "SQLInject"].reduce(
    async (a, b) => (await a, await Run(ns, "singularity.purchaseProgram", [`${b}.exe`])),
    Promise.resolve(),
  );
}

async function murderate(ns: NS) {
  !(await is_Busy(ns)) &&
    (await Run(ns, "getPlayer", [], "numPeopleKilled")) < 30 &&
    (await Run(ns, "singularity.stopAction"), await Run(ns, "singularity.commitCrime", ["Homicide", 0]));
}

async function bd(n, t, h = "home", c = (f = "connect") => n.singularity[f], f = (t, r = []) => t == h ? r : f(n.scan(t)[0], [t, ...r])) {
  (
    c()(h),
    f(t).map(c()),
    n.tprintf(`${util.ansi.y}Backdoor started on ${t}`),
    await c("installBackdoor")(),
    c()(h),
    n.tprintf(`${util.ansi.g}Backdoor complete on ${t}`)
  )
}

function persuade(n: NS, s = "home", p: string | undefined): void {
  n.scan(s).forEach((v) =>
    v != p
      ? persuade(n, v, s)
      : [n.brutessh, n.ftpcrack, n.relaysmtp, n.sqlinject, n.httpworm, n.nuke].forEach((p) => {
        try {
          p(s);
        } catch { }
      }),
  )
}

async function d43m0nD357r0y(ns: NS, date = /* @__PURE__ */ new Date(), wd = "w0r1d_d43m0n") {
  ((sGet(ns).includes(wd) &&
    (await Run(ns, "getHackingLevel")) > (await Run(ns, "getServerRequiredHackingLevel", [wd]))) ||
    (ns.bladeburner.inBladeburner() && !ns.bladeburner.getNextBlackOp())) &&
    (["installCounter.txt", "installAugsReason.txt", "installAugsLog.txt"].map((f) => ns.rm(`temp/${f}`)),
      ns.write(
        "report/nodeLog.txt",
        `${await getCurrentNode(ns)} completed  - ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      ),
      await Run(ns, "singularity.destroyW0r1dD43m0n", [12, "rset.js"]));
}

function pServ(ns: NS) {
  (ns.purchaseServer("#", 8) || sGet(ns).some((s) => [...Array(21).keys()].some((r) => ns.upgradePurchasedServer(s, r << 1)))) && pServ(ns)
}

async function prettyLogs(ns: NS) {
  const access_list = sGet(ns).filter(
    (s) => ns.hasRootAccess(s) && ns.getServerRequiredHackingLevel(s) <= ns.getHackingLevel(),
  );
  const [funded_list, total_max_ram, total_free_ram] = access_list
    .reduce(([funded, max_ram, free_ram], b) => [
      [...funded, ns.getServerMaxMoney(b) ? b : null],
      max_ram + ns.getServerMaxRam(b),
      free_ram + getFreeRam(ns, b)],
      [[], 0, 0]);
  const [num_nfg, not_nfg, augs_sans_nfg] = readyFiley(ns, "temp/boughtAugs.txt")
    .reduce(([y_nfg, n_nfg, sans_nfg], aug) => aug == CON.NFG ? [y_nfg + 1, n_nfg, sans_nfg] : [y_nfg, n_nfg + 1, [...sans_nfg, aug]], [0, 0, []]);
  const bought_aug_info = augs_sans_nfg.map((aug) => " \xB7" + aug).join("\n") + (num_nfg ? "\n \xB7 NeuroFlux Governor x" + num_nfg : "");
  const num_other_augs = readyFiley(ns, "temp/installedAugs.txt").reduce((acc, aug) => acc + (aug != CON.NFG), 0);

  const percColour = (perc) =>
    `${perc < 33 ? util.ansi.r : perc < 66 ? util.ansi.y : perc < 85 ? util.ansi.c : util.ansi.g}${perc.padStart(6, " ")}%${util.ansi.d}`;
  const secColour = (sec) => `${sec < 5 ? util.ansi.g : util.ansi.y}${("" + sec).padStart(3, " ")}${util.ansi.d}`;
  const getInfo = (server) => [
    Math.ceil(ns.getServerSecurityLevel(server)).toString().padStart(3, " "),
    secColour(
      Math.ceil(ns.getServerSecurityLevel(server) - ns.getServerMinSecurityLevel(server))
        .toString()
        .padStart(3, " ")
    ),
    ns.formatNumber(ns.getServerMoneyAvailable(server)).toString().padStart(8, " "),
    ns.formatNumber(ns.getServerMaxMoney(server)).toString().padStart(8, " "),
    percColour(((ns.getServerMoneyAvailable(server) / ns.getServerMaxMoney(server)) * 100).toFixed(2)),
    util.digiClock(ns.getWeakenTime(server)),
    server == peekyPorty(ns, "loop/prsm.js") ? `${server} ${util.ansi.w}---${util.ansi.y}\u0394<` : server,
  ];

  (
    ns.resizeTail(800, 1e3),
    ns.moveTail(CON.WIN.innerWidth - 1150, 0),
    ns.clearLog(),
    [
      ...[
        ...funded_list.filter(Boolean).map(getInfo),
        [
          "sec",
          " \u0394 ",
          "  $cur  ",
          "  $max  ",
          "   %   ",
          "  ~ete  ",
          ` Target ~ ${funded_list.filter(Boolean).length}/${sGet(ns).filter(ns.getServerMaxMoney).length}`,
        ],
      ].map(((line) => ` ${line.join(" | ")}`)),
      "",
      ` home - ${util.ramFormat(getFreeRam(ns, "home"))}/${util.ramFormat(ns.getServerMaxRam("home"))}`,
      ` network - ${util.ramFormat(total_free_ram)}/${util.ramFormat(total_max_ram)}`,
      ` threads - ${ns.formatNumber(Math.floor(total_free_ram / ns.getScriptRam("weaken.js")))}/${ns.formatNumber(Math.floor(total_max_ram / ns.getScriptRam("weaken.js")))} threads`,
      "",
      ` bought augs x ${not_nfg}, ${num_other_augs}/100 installed, NFG x ${(await Run(ns, "getResetInfo", [], "ownedAugs")).get(CON.NFG)}`,
      `${bought_aug_info}`,
      ` ${readyFiley(ns, "temp/installAugsReason.txt")}`,
      "",
    ].forEach((l) => ns.print(l))
  )
}

async function prettyOverview(ns: NS, timer) {
  const prsm_target = peekyPorty(ns, "loop/prsm.js");
  const gang_info = peekyPorty(ns, "loop/runGang.js");
  const hacknet_info = readyFiley(ns, "temp/hacknet_info.txt");
  const date = Number(new Date());
  const last_aug_time = +readyFiley(ns, "temp/lastAugTime.txt") || date;

  const colourise = (o) => o.lines.map((l) => [`<span style = "color:${o.col}" > ${l[0]} </span>`, `<span style="color:${o.col}">${l[1]}</span>`]);
  const splitNBreak = (a, b) => [[a[0], b[0]].join("</br>"), [a[1], b[1]].join("</br>")];

  (
    [HOOKS[0].innerHTML, HOOKS[1].innerHTML] = [
      {
        lines: [
          [`bitnode:`, `${await getCurrentNode(ns)}`],
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
          [`$total:`, `$${ns.formatNumber(await Run(ns, "getMoneySources", [], "sinceInstall.hacking"))}`],
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
          [`profit:`, `$${ns.formatNumber((await Run(ns, "getMoneySources", [], "sinceStart.gang")) ?? 0)}`],
        ],
        col: "magenta",
      },
      {
        lines: [
          [`${util.tickString(timer)}`, `cycle #${Math.floor(timer / 30)}`],
          [`gvnr uptime:`, `${util.digiClock(timer * 1e3)}`],
          [`t+ Augbuy:`, `${!!(date - last_aug_time) ? util.digiClock(date - last_aug_time) : "N/A"}`],
          [`t+ Install:`, `${util.digiClock(date - await Run(ns, "getResetInfo", [], "lastAugReset"))}`],
          [`t+ Bitnode:`, `${util.digiClock(date - await Run(ns, "getResetInfo", [], "lastNodeReset"))}`],
        ],
        col: "yellow",
      },
    ]
      .flatMap(colourise)
      .reduce(splitNBreak)
  )
}

async function scriptLoop(ns: NS, is_first_start: boolean) {
  (
    await CON.ONESHOT_FUNCTIONS.map((s) => `oneshot/${s}.js`).forEachAsync(
      async (script: string) => (
        is_first_start && ns.tprintf(`${util.ansi.y}starting ${script} `),
        await (async (runpid: number): Promise<void> =>
          !!runpid
            ? (await ns.nextPortWrite(runpid),
              is_first_start && (await util.slp(70 * Math.random()), ns.tprintf(`${util.ansi.g}${script} passed init`)))
            : ns.tprintf(`${util.ansi.r} !!${script} DID NOT RUN!!`))(ns.run(script))
      ),
    ),
    CON.LOOP_FUNCTIONS.map((s) => `loop/${s}.js`).forEach((script) => !ns.isRunning(script) && ns.run(script)),
    is_first_start
    && (
      ns.print(`${util.ansi.m} Welcome to gnvr.js!`),
      ns.tprintf(`${util.ansi.g}*** Startup Complete *** `),
      await util.slp(1e3),
      ns.run("util/neofetch.js")
    )
  )
}

async function graft(ns: NS, g = ns.grafting) {
  !(await is_Busy(ns)) &&
    ns.singularity.travelToCity("New Tokyo")
    && [
      "QLink",
      "ECorp HVMind Implant",
      "Xanipher",
      "OmniTek InfoLoad",
      "violet Congruity Implant"
    ].some(
      (aug) => g.graftAugmentation(aug, false)
    );
}

async function factWork(ns: NS, s = ns.singularity) {
  const available_augs = readyFiley(ns, "temp/availableAugs.txt");
  const target_faction = available_augs.reduce(
    (a, b) => (b.fact.name != CON.GANG_NAME && b.repdelta > a.repdelta ? b : a),
    { repdelta: 0 },
  ).fact?.name;
  (
    !(await is_Busy(ns))
    && !!target_faction
    && (s.stopAction(),
      ["field", "security", "hacking"].some((job: FactionWorkType) =>
        s.workForFaction(available_augs.includes(CON.TRP) ? "Daedalus" : target_faction, job, false),
      ))
  )
}

async function donate(ns: NS, s = ns.singularity) {
  ns.ps().filter(s => s.filename)
  const availableAugs = readyFiley(ns, "temp/availableAugs.txt");
  const rep_multi = await Run(ns, "getBitNodeMultipliers", [], "RepToDonateToFaction");
  const nfginfo = readyFiley(ns, "temp/nfgInfo.txt");
  const donatefaction = "The Black Hand";
  (
    // Donate to TBH to grind NF Governor
    s.getFactionFavor(donatefaction) >= 150 * rep_multi
    && s.getFactionRep(donatefaction) < nfginfo.rep
    && s.donateToFaction(donatefaction, Math.max(nfginfo.cost, 1e11))
    && ns.tprintf(
      `${util.ansi.m}Donated $${ns.formatNumber(Math.max(nfginfo.cost, 1e11))} to ${donatefaction} (grinding NFG)`,
    ),

    // Donate to factions for augs
    availableAugs.forEach((aug) => (
      aug.fact.name != CON.GANG_NAME
      && s.getFactionFavor(aug.fact.name) > 150 * rep_multi
      && aug.repdelta > 0
      && s.donateToFaction(aug.fact.name, 1e11)
      && ns.tprintf(`${util.ansi.m}Donated $100B to ${aug.fact.name} `)
    ))
  )
}

async function installAugs(ns: NS) {
  const date = Number(new Date());
  const timestamp = Date().slice(4, 24);
  const augs_array = readyFiley(ns, "temp/availableAugs.txt").filter((aug) => aug.fact.name != CON.GANG_NAME);
  const bought_augs = readyFiley(ns, "temp/boughtAugs.txt");
  const time_since_last_aug = date - +(readyFiley(ns, "temp/lastAugTime.txt") ?? date);
  const lowest_price = augs_array.reduce((a, b) => (a.aug != CON.TRP && a?.price < b?.price ? a : b), Infinity)?.price ?? 0;
  const fav_to_donate = 150 * (await Run(ns, "getBitNodeMultipliers", [], "RepToDonateToFaction"));

  const timeout_log =
    `timeout - $${ns.formatNumber(ns.getServerMoneyAvailable("home"))} /$${ns.formatNumber(lowest_price)}, multi x${Math.floor(+readyFiley(ns, "temp/priceRatio.txt"))} - ${timestamp}`;
  const favour_log = (aug) =>
    `increased ${aug.fact.name} favour by ${Math.floor(aug.fact.favdelta)} to ${Math.floor(aug.fact.favdelta + aug.fact.fav)} - ${timestamp}`;

  const checkFavour = () =>
    augs_array.some(
      aug =>
        aug.fact.fav < fav_to_donate
        && (aug.fact.favdelta >= 50 || fav_to_donate < aug.fact.favdelta + aug.fact.fav)
        && (writeLog(favour_log(aug)), true)
    );

  const checkTimeout = () =>
    time_since_last_aug > 18e5
    && lowest_price > ns.getServerMoneyAvailable("home")
    && (writeLog(timeout_log), true);

  const writeLog = (log) => (
    ns.write("temp/installAugsReason.txt", `installAugs #${1 + +readyFiley(ns, "temp/installCounter.txt")}: ${log}`, "w")
  );

  (
    bought_augs.includes(CON.TRP) && (writeLog("installed The Red Pill"), await Run(ns, "singularity.softReset", ["rset.js"])), // if have TRP then install asap
    !(await is_Busy(ns))
    && !!bought_augs.length
    && (checkTimeout() || checkFavour())
    && (
      ns.write("temp/installCounter.txt", (1 + +readyFiley(ns, "temp/installCounter.txt")).toString(), "w"),
      ns.write("report/installAugsLog.txt", readyFiley(ns, "temp/installAugsReason.txt") + "\n", "a"),
      await Run(ns, "singularity.installAugmentations", ["rset.js"])
    )
  )
}

function buyAugs(ns: NS, s = ns.singularity) {
  const odd_factions = ["Bladeburners", "Church of the Machine God"];
  const availableAugs = readyFiley(ns, "temp/availableAugs.txt");

  const timeStamp = () => ns.write("temp/lastAugTime.txt", "" + Date.now(), "w");
  const termPrint = (aug) =>
    ns.tprintf(
      `${util.ansi.m}Purchased ${util.ansi.c}${aug.aug}${util.ansi.m} from ${aug.fact.name} for $${ns.formatNumber(aug.price)}`,
    );
  const termPrintNFG = (faction) =>
    ns.tprintf(
      `${util.ansi.m}Purchased ${util.ansi.c}${CON.NFG}${util.ansi.m} from ${faction} for $${ns.formatNumber(s.getAugmentationPrice(CON.NFG))}`,
    );

  (
    ns.getPlayer().factions
      .forEach((f) =>
        f != CON.GANG_NAME
        && s.purchaseAugmentation(f, CON.NFG)
        && (timeStamp(), termPrintNFG(f)),
      ),
    availableAugs.forEach((aug) =>
      s.purchaseAugmentation(aug.fact.name, aug.aug)
      && (timeStamp(), termPrint(aug))
    ),
    odd_factions.forEach((fac) =>
      s.getAugmentationsFromFaction(fac).forEach((aug) => s.purchaseAugmentation(fac, aug)),
    )
  )
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
  const owned_augs = readyFiley(ns, "temp/ownedAugs.txt");
  const forbidden_factions = ["Shadows of Anarchy", "Bladeburners", "Church of the Machine God"];
  const aug_object = ns.getPlayer().factions
    .filter((faction) => !forbidden_factions.includes(faction))
    .flatMap((faction) => (
      s.getAugmentationsFromFaction(faction)
        .filter((aug) => CON.AUGS_TO_BUY.includes(aug) && !owned_augs.includes(aug))
        .map((augment) => (
          {
            aug: augment,
            price: s.getAugmentationPrice(augment),
            repreq: s.getAugmentationRepReq(augment),
            repdelta: s.getAugmentationRepReq(augment) - s.getFactionRep(faction),
            fact: {
              name: faction,
              fav: s.getFactionFavor(faction),
              favdelta: s.getFactionFavorGain(faction),
            },
          }
        ))
    ));
  ns.write("temp/availableAugs.txt", JSON.stringify(aug_object ?? []), "w");
}

async function backdoor(n: NS) {
  ["CSEC", "avmnite-02h", "run4theh111z", "I.I.I.I"].map(n.getServer).forEach(
    (s) =>
      !s.backdoorInstalled
      && s.hasAdminRights
      && n.getHackingLevel() > s.requiredHackingSkill
      && !n.isRunning("util/bd.js", "home", s.hostname)
      && n.run("util/bd.js", { threads: 1, ramOverride: 5.8 }, s.hostname),
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
    ns.getServerMaxMoney(moneytargetserver) < 1e13
    && h.spendHashes("Increase Maximum Money", moneytargetserver)
    && upMoney();
  const downSec = () =>
    ns.getServerMinSecurityLevel(sectargetserver) > 1
    && h.spendHashes("Reduce Minimum Security", sectargetserver)
    && downSec();

  const nodeBuy = () => h.purchaseNode() + 1 && nodeBuy();
  const upParts = () =>
    ["Level", "Core", "Ram", "Cache"].forEach((part) => node_array.forEach((n) => h[`upgrade${part}`](n) && upParts()));

  (
    (
      profits > -1
      && (
        upMoney(),
        downSec(),
        nodeBuy(),
        upParts()
      )
    ),
    ns.write("temp/hacknet_info.txt", JSON.stringify(info), "w")
  )
}

async function steves(ns: NS) {
  const [s, b] = [ns.sleeve, ns.bladeburner];
  const steves = util.getIndexArray(8).sort((a, b) => s.getSleeve(b).storedCycles - s.getSleeve(a).storedCycles);

  const get_low_skill = steve =>
    ["strength", "defense", "dexterity", "agility"].reduce(
      (a, skill) => (steve.skills[skill] < 25 ? skill : a),
      false,
    );

  const try_train = async steve => (
    await (async skill => skill && (await Run(ns, "sleeve.travel", [steve, "Sector-12"]), await Run(ns, "sleeve.setToGymWorkout", [steve, "Powerhouse Gym", skill.toString()])))(get_low_skill(await Run(ns, "sleeve.getSleeve", [steve])))
  );

  const try_stabbin = async (steve) => !(await Run(ns, "gang.inGang") ? await Run(ns, "sleeve.setToCommitCrime", [steve, "Homicide"]) : false);

  const bb_infil = async steve => (
    await !steves.everyAsync(async steve => (await Run(ns, "sleeve.getTask", [steve])).some((task) => task?.type === "INFILTRATE"))
    && await Run(ns, "sleeve.setToBladeburnerAction", [steve, "Infiltrate synthoids"])
  );

  const bb_contracts = async steve => (
    (await Run(ns, "bladeburner.getContractNames"))
      .someAsync(async contract => await steves.everyAsync(async steve => (await Run(ns, "sleeve.getTask", [steve]) as SleeveBladeburnerTask)?.actionName !== contract)
        && await Run(ns, "bladeburner.getActionCountRemaining", ["Contract", contract])
        && await Run(ns, "sleeve.setToBladeburnerAction", [steve, "Take on contracts", contract]),
      )
  );

  const buy_augs = async steve => (
    !(await Run(ns, "sleeve.getSleeve", [steve])).shock ?
      (await Run(ns, "sleeve.getSleevePurchasableAugs", [steve]))
        .sort((a, b) => a.cost - b.cost)
        .forEachAsync(async (aug) => await Run(ns, "sleeve.purchaseSleeveAug", [steve, aug.name]))
      : false
  );

  (
    await steves.forEachAsync(async (steve) => await Run(ns, "sleeve.setToIdle", [steve])),
    await steves.forEachAsync(async (steve) => (
      !(await Run(ns, "sleeve.getSleeve", [steve])).shock && await buy_augs(steve),
      (await Run(ns, "sleeve.getSleeve", [steve])).shock > 90
        ? await Run(ns, "sleeve.setToShockRecovery", [steve])
        : await try_train(steve)
        || await try_stabbin(steve)
        || (await Run(ns, "bladeburner.inBladeburner") && (await bb_infil(steve) || await bb_contracts(steve)))
        || ((await Run(ns, "sleeve.getSleeve", [steve])).shock
          ? await Run(ns, "sleeve.setToShockRecovery", [steve])
          : await Run(ns, "sleeve.setToIdle", [steve]))
    ))
  )
}

async function bburner(ns: NS) {
  const [s, b] = [ns.singularity, ns.bladeburner]
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
  const upSkill = async () => (
    await Run(ns, "bladeburner.upgradeSkill", [b.getSkillNames().reduce((a, c) => (f => f(a) < f(c) ? a : c)(b.getSkillUpgradeCost))]) && upSkill()
  );
  const doOp = async (op) => (
    !op
      ? d43m0nD357r0y(ns)
      : await (([a, c]) => a + c > 1.8)(await Run(ns, "bladeburner.getActionEstimatedSuccessChance", ["BlackOps", (await Run(ns, "bladeburner.getNextBlackOp")).name]))
      && !(await is_Busy(ns))
      && (
        await Run(ns, "singularity.stopAction"),
        await Run(ns, "bladeburner.startAction", ["BlackOps", (await Run(ns, "bladeburner.getNextBlackOp")).name])
      )
  );

  (
    await Run(ns, "bladeburner.joinBladeburnerDivision"),
    !(await Run(ns, "bladeburner.inBladeburner"))
      ? await goTrain()
      : (await upSkill(), await doOp(b.getNextBlackOp()?.name))
  )
}

async function stan(ns: NS, s = ns.stanek) {
  ns.disableLog("ALL"), ns.enableLog("exec"), ns.run("lsg.js");
  s.acceptGift() || (await ns.sleep(1e3), await stan(ns));
  const spare_threads = Math.floor((getFreeRam(ns, "home") - 50) / ns.getScriptRam("chrg.js"));
  const target = s
    .activeFragments()
    .filter((f) => f.id < 100)
    .reduce((a, b) => (a.numCharge < b.numCharge ? a : b), { numCharge: NaN, x: NaN, y: NaN });
  (
    !!target &&
    (spare_threads > 0 && !isNaN(target.numCharge)
      ? ns.exec("chrg.js", "home", spare_threads, target.x, target.y)
      : ns.print("no threads! skipping...")),
    ns.writePort(ns.pid, ""),
    await util.slp(1e4),
    await stan(ns)
  )
}

async function runGang(n, g = n.gang) {
  const tryRecruit = (name = CON.MEMBER_NAMES[Math.floor(Math.random() * CON.MEMBER_NAMES.length)]) => (
    g.getMemberNames().includes(name)
      ? tryRecruit()
      : g.recruitMember(name) && n.tprintf(`${util.ansi.r}Recruited ${util.ansi.g}${name}`)
  );

  const setTW = () =>
    g.setTerritoryWarfare(Object.keys(other_gang_info()).every((h) => g.getChanceToWinClash(h) >= 0.5));

  const slp = async (t) => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1));

  const other_gang_info = g.getOtherGangInformation;

  const tick = async (l = null) => (
    await (async q => (l = q(), await n.sleep(50), l == q() && (await tick())))(() => Object.values(other_gang_info()).reduce((a: number, b: GangOtherInfoObject) => a + b.power, 0))
  );

  const focus = () => (g.getMemberNames().length > 9 ? "moneyGain" : "respectGain");

  const assignJob = (task) => (
    g.getMemberNames().forEach(
      (member) => (
        g.getEquipmentNames().forEach((item) => g.purchaseEquipment(member, item)),
        ["agi", "str", "def", "dex"].reduce((a, b) => a + g.getAscensionResult(member)?.[b], 0) > 6 && g.ascendMember(member),
        g.setMemberTask(
          member,
          task ?? g.getTaskNames().reduce(
            (a, b) => (
              g.setMemberTask(member, b),
              ((gain) => (gain < a.dat ? a : { name: b, dat: gain }))(g.getMemberInformation(member)[focus()])
            ),
          ).name,
        )
      ),
    ),
    printToPort(
      task?.split(" ")
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
      nextpower: Object.values(other_gang_info()).reduce((a: number, b: GangOtherInfoObject) => (a > b.power ? a : b.power), 0),
      territory: g.getGangInformation().territory * 100,
      tw: g.getGangInformation().territoryWarfareEngaged,
    })
  );

  (
    (g.inGang() || g.createGang(CON.GANG_NAME))
    && (
      tryRecruit(),
      setTW(),
      assignJob(undefined),
      await slp(15e3),
      assignJob("Train Combat"),
      await slp(4500),
      assignJob("Territory Warfare"),
      await tick(),
      await runGang(n)
    )
  )
}

async function golfedGang(
  n,
  g = n.gang,
  s = async (t) => await n.sleep(t / (g.getBonusTime() > 5e3 ? 25 : 1)),
  t = async (l) => (l = q()[1], await n.sleep(9), l == q()[1] && await t(l)),
  q = () => Object.entries(g.getOtherGangInformation()).reduce((a: [boolean, number], [b, c]: [string, GangOtherInfoObject]): [boolean, number] => [g.getChanceToWinClash(b) > 0.5 && a[0], a[1] + c.power], [false, 0]),
  a = (j) =>
    g
      .getMemberNames()
      .map(
        (m) => (
          g.getEquipmentNames().map((i) => g.purchaseEquipment(m, i)),
          ["agi", "str", "def", "dex"].reduce((a, b) => a + g.getAscensionResult(m)?.[b], 0) > 6 && g.ascendMember(m),
          g.setMemberTask(
            m,
            j ?? g.getTaskNames().reduce((a, b) =>
              (g.setMemberTask(m, b), (i) => (i < a.g ? a : { n: b, g: i }))(
                g.getMemberInformation(m)[g.getMemberNames().length > 9 ? "moneyGain" : "respectGain"],
              ),
            ).n,
          )
        ),
      ),
) {
  (
    (g.inGang() || g.createGang("Slum Snakes"))
    && (
      g.recruitMember(Math.random()),
      g.setTerritoryWarfare(q()[0]),
      a(undefined),
      await s(15e3),
      a("Train Combat"),
      await s(4500),
      a("Territory Warfare"),
      await t(1),
      await golfedGang(n)
    )
  )
}

type PlayerExp = {
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
    )!;
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

  (
    await ascii.forEachAsync(async l => (ns.tprintf(l), await util.slp(Math.random() * 10 * 7)))
  )
}



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





async function downDog(ns: NS, prevposx: number, prevposy: number) {
  function poop(ns: NS, x: number, y: number, pooppid: number) {
    (
      ns.write("poop.js", poopScript, "w"),
      pooppid = ns.run("poop.js"),
      ns.tail(pooppid),
      ns.resizeTail(150, 100, pooppid),
      ns.moveTail(x, y, pooppid)
    )
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

  const win = eval("window")
  const doc = eval("document")
  const rn = Math.random
  const tget = (ns) => ns.getRunningScript().tailProperties ?? ns.exit()
  const names = ["Wickes", "Updog", "Mikasa", "Snuffles", "Boris", "Gnasher", "Doug", "Chester"]
  const bark = (ns, bark) => ns.print(bark);
  async function portHandle(ns, barkval, happiness) {
    if (ns.peek(ns.pid) === "NULL PORT DATA") return { bark: undefined, happiness: happiness };
    ns.clearPort(ns.pid)
    barkval = { bark: "*WAGS\nTAIL*", time: 1500 }
    happiness += 1000;
    return { bark: barkval, happiness: happiness };
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
    const ascii = pos.x > x ? CON.DOGGO_ASCII[0] : CON.DOGGO_ASCII[1];
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
    ns.print(barkval === undefined ? ascii : bark(ns, barkval.bark));
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

const poopScript = 'export async function main(ns) {ns.disableLog("ALL");ns.atExit(() => ns.closeTail(ns.pid));ns.printRaw(React.createElement("h2", {}, "💩"));while(1) {ns.getRunningScript().tailProperties ?? ns.exit(); await ns.sleep(10000)}}';

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


// Coding Contracts

// For most of these, credit Brandon - https://discord.com/channels/415207508303544321/924854581471633419/1134454548577144903

const solvers = {
  "Find Largest Prime Factor": function (number, divisor = 2) {
    return 0;
  },

  "Subarray with Maximum Sum": function (array) {
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

  "Total Ways to Sum": function (number) {
    let waysToFormNumber = new Array(number + 1).fill(0);
    waysToFormNumber[0] = 1;
    for (let currentInteger = 1; currentInteger <= number; currentInteger++) {
      for (let selectedInteger = currentInteger; selectedInteger <= number; selectedInteger++) {
        waysToFormNumber[selectedInteger] += waysToFormNumber[selectedInteger - currentInteger];
      }
    }
    return waysToFormNumber[number] - 1;
  },

  "Total Ways to Sum II": function (array) {
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

  "Spiralize Matrix": function (matrix) {
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

  "Array Jumping Game": function (array) {
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

  "Array Jumping Game II": function (array) {
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

  "Merge Overlapping Intervals": function (intervals) {
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

  "Generate IP Addresses": function (str) {
    return [1, 2, 3].map((i, _, a) => a.map(j => a.map(k => a.map(l => [0, i, i + j, i + j + k, i + j + k + l])))).flat(3).map(q => q[4] != str.length ? [] : q.reduce((a, b, i) => (z => z == "0" || +z[0] && z < 256 ? [...a, z] : a)(str.slice(b, q[i + 1])), [])).reduce((a, b) => b.length > 3 ? [...a, b.join(".")] : a, []);
  },

  "Algorithmic Stock Trader I": function (stockPrices) {
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


  "Algorithmic Stock Trader II": function (stockPrices) {
    let maxProfit = 0;
    for (let i = 0; i < stockPrices.length - 1; i++) {
      if (stockPrices[i] < stockPrices[i + 1]) {
        maxProfit += stockPrices[i + 1] - stockPrices[i];
      }
    }
    return maxProfit;
  },

  "Algorithmic Stock Trader III": function (stockPrices) {
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

  "Algorithmic Stock Trader IV": function (array) {
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

  "Minimum Path Sum in a Triangle": function (triangle) {
    let n = triangle.length;
    for (let row = n - 2; row >= 0; row--) {
      for (let col = 0; col <= row; col++) {
        triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
      }
    }
    return triangle[0][0];
  },

  "Unique Paths in a Grid I": function (array) {
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

  "Unique Paths in a Grid II": function (grid) {
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

  "Shortest Path in a Grid": function (grid) {
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

  "Sanitize Parentheses in Expression": function (string) {
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

  "Find All Valid Math Expressions": function (array) {
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

  "HammingCodes: Integer to Encoded Binary": function (integer) {
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

  "HammingCodes: Encoded Binary to Integer": function (data) {
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

  "Proper 2-Coloring of a Graph": function (array) {
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

  "Compression I: RLE Compression": function (inputString) {
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

  "Compression II: LZ Decompression": function (compressedString) {
    let plain = "";
    for (let i = 0; i < compressedString.length;) {
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

  "Compression III: LZ Compression": function (plain) {
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

  "Encryption I: Caesar Cipher": function ([text, i]) {
    return String.fromCharCode(...[...text].map(c => c > " " ? (o => o + (o > 65 ? 0 : 26))(c.charCodeAt() - i) : 32))
  },

  "Encryption II: Vigen\xE8re Cipher": function ([plaintext, keyword]) {
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
}

// servers/home/contracts.js
function contracts(ns: NS) {
  sGet(ns).flatMap(host => ns.ls(host, ".cct").map(cct => ([host, cct, ns.codingcontract.getContractType(cct, host)]))).forEach(([host, cct, type]) => (
    (result => result
      ? ns.tprintf(`${util.ansi.g}Completed ${type} ~ ${cct} on ${host} ~ ${result}`)
      : ns.tprintf(`${util.ansi.r}Failed ${type} ~ ${cct} on ${host}`)
    )(ns.codingcontract.attempt(solvers[ns.codingcontract.getContractType(cct, host)](ns.codingcontract.getData(cct, host)), cct, host)
    )))
}
