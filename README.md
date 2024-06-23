# butbirner-scripts
Script~~s~~ for playing BitBurner

**Templated from <https://github.com/shyguy1412/bb-external-editor>**

****\*\*\*SPOILERS\*\*\****** - NOT SUITABLE FOR EARLY GAME
## Run notes
* This is Typescript, which BitBurner does not run natively. I recommend using <https://github.com/shyguy1412/bb-external-editor> as a transpiler.
* Run lib.js with a ramOverride of 4.7 to start. Pass any argument to lib.js to kill all scripts.
* Requires singularity. All other node mechanics should be guarded and not throw errors
* Requires ~50gb of spare ram on home to run. (WIP - static RAM dodging not fully implemented)

## Other notes
* (almost) entirely self-contained (WIP)
* Yep, just one file. It writes out worker scripts to run its functions. An upshot of this is that functions can be edited, and they will be "recompiled" when the worker script is run and pulls its import again.
* Run is the ram dodging function, prsm is the batcher, downDog is the doggo 🐕‍🦺. Other functions should be pretty self explanatory.
* Written as expressively and as close to Functional Programming style as I could manage. I wish you the best of luck interpreting my machinations. If you don't understand anything, just recurse and read it over again. ;)
