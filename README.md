# butbirner-scripts
Scripts for playing BitBurner


Features of this setup so far

    // Main Game
    * Runs entire nodes automatically (gvnr.js)
    * Logs, with useful information! (rset.js, gvnr.js)
    * Proto-batch hacking - (prsm.js)
    * P-server management - (maintenance.js)
    * Join faction/company - (factionJoin.js)
    * Work for faction/company (factWork.js, corpWork.js)
    * Backdoor (bd.js)
    * Buy augments and NFG (augBuy.js)
    * Install augments - (augInstall.js) - Aims to increase favour in 50 chunks to be able to donate, or 30 minute timeout.
    * Travel and join factions for unique augments - (goToAirport.js)
    * Donates to factions for rep - (donate.js)
    * Grinds donations for NFG - (donate.js)
    * Destroy d43m0n - (ddtrigger.js, d43m0nD357r0y.js)

    // Other mechanics
    * Gangs - (gang.js)
    * Corporations - (corp.js) - Still WIP. Just sets up agri division and tobacco end-game grind at the moment, need to implement midgame strategy.
    * Sleeves - (cuff.js) - WIP. They just murder at the moment. 
    * Grafting - graft.js - Works, but needs editing to tell it what augs to graft.

## Interesting or notable Scripts - That you may want to run manually, or not
(most others are set off automagically)

# tp.js
    Connect to any server

    Very handy!

    arguments - tp.js "server name"
        "server name" : Server to connect to


# func.js - Functions
    A big bag-o-functions

# rset.js - Reset/start
    Pretty much the only script I run on a regular basis. Worth setting an alias.

    Just launches gvnr.js basically

    arguments - rset.js [none],-w,-k
        none : Kill all scripts and restart gvnr.js, open its tail window, move and resize it
        -w : Reset gvnr tail window only. You may need to zoom out, or edit the values inside rset.js to reset the tail log window to your liking.
        -k : Kill all scripts only.

# gvnr.js - Governor
    Governs everything. Runs other scripts every 30 seconds, and prints pretty info to its tail.

    MOST sub-scripts are contained in s-scripts.

    Runs an init test on first start - all the sub-scripts are run and interrogated for a response on their port. 
        If a sub-script fails to respond, gvnr will halt on init. If a sub-script fails to respond after first-start, the gvnr tail window will freeze.

    gvnr.js is the only script, besides corp.js, to run on an infinite loop.

    Many scripts in s-scripts (such as maintenance.js) are just one-function launchers.

    The scripts are separated out and run in sequence to reduce average ram use.

    This structure is useful for scripting and debugging. Functions can be edited on-the-fly and changes will be picked up when the script is run anew.

    If a subscript craps out, it stops gvnr, so problems are obvious.

# prsm.js - Prism proto batcher
    Proto-batcher

    Fires off stacked HGW batches in sequence

    Aims to hack / grow 10%

    Will limit thread use if ram is limited

    Soft-errors "wekn/grow/hack choked on [server]" if no threads available for job

    arguments - prsm.js "server name" "any string"
        "servername" : The server to target. Only for manual use, maintenance.js will set these automatically
        "any string" : Activate the really janky and broken batcher mode (aka tilt mode). Don't use this!

# gang.js - Runs the gang
    Sub-scripts are stored in g-scripts

    Similarly to gvnr.js, gang.js runs sub-scripts to reduce average ram use.

    biggang.js has all the functions in one script if preferred.

# manualAugInstall.js - Manual aug install
    Manually install augments

    There are some logs that are important to clobber before installing augs.

    This script removes those before manually installing augs

    The augInstall() function in func.js will automatically install augments regularly

# manualFlume.js - 
    Manually bitflume

    Just like manualAugInstall.js. Does some cleanup before fluming.

    arguments - 
        integer [1-13] : Bitnode to go to next