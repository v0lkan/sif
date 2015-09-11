#!/usr/bin/env node


'use strict';

/*    _,                            ,--.   ,---.
 *   /(_                     ,---.  `--'  /  .-'
 *  |   '-._        . ' .   (  .-'  ,--.  |  `-,
 *  \    ,-.)      -= * =- .-'  `)  |  |  |  .-'
 *   \((` .(        '/. '  `----'   `--'  `--'
 *    )\  _/        /         just like magic
 * .-'   '--.      /
 * \,         \   /|
 *  ';,_) _)'\ \,//    This program is distributed
 *   `\   (   '._/   under the terms of the MIT license.
 *    |  . '.
 *    |      \   Please see the `LICENSE.md` file for details.
 *    |  \|   |
 *     \  |  /    Send your comments and suggestions to…
 *      '.| /      <https://github.com/v0lkan/sif/issues>.
 */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _libTerminalOut = require('../lib/terminal/out');

(0, _libTerminalOut.printBanner)();

// TODO: get version from config.
_commander2['default'].version('0.1.0').command('aliases', 'Lists all aliases.').command('alias <shorthand> <query>', 'Adds a new alias <shorthand> for <query>. An alias is a single-word token with no spaces in it.').command('rmalias <alias>', 'Removes the alias named <alias>.').command('tag <index> <tag>', 'Adds a a tag <tag> for the data at <index>. Tags are single-word tokens with no spaces in them.').command('purge', 'Removes ALL the indexed data, and ALL the aliases. This process is IRREVERSIBLE.').command('update', 'Updates and re-sorts the index by fetching metadata for the newly-added items.').command('find <what>', 'Performs a search. See README.md for details.').parse(process.argv);

// TODO: make this a command-line npm module.
// TODO: use https://github.com/tj/node-progress to indicate progress when fetching metadata
// TODO: notify if no internet connection when fetching metadata.
// TODO: report if unable to fetch some data.
// TODO: when

//# sourceMappingURL=sif.js.map