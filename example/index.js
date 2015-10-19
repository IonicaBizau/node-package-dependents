// Dependencies
var PackageDependents = require("../lib");

// Get is-there's dependents
PackageDependents("is-there", function (err, packages) {
    packages.forEach(function (c) {
        console.log(c.name + (c.author && c.author.name ? " by " + c.author.name : ""));
    });
});
// =>
// a-csv by jillix
// artstack-downloader by Ionică Bizău
// bible by Ionică Bizău
// blah by Ionică Bizău
// cdnjs-importer by Ionică Bizău
// cecil by Michael Burkman
// engine-tools by jillix
// f-watcher by Ionică Bizău
// fontify by Youssef Kababe
// fwatcher by Ionică Bizău
// generator-leptir by Damir Kusar
// gif-cli by Ionică Bizău
// git-issues by Gabriel Petrovay
// git-stats by Ionică Bizău
// git-stats-importer by Ionică Bizău
// gpm by Ionică Bizău
// grunt-md5assets by peters
// hal-rc
// heroku-docker by Hunter Loftis
// idea by Ionică Bizău
// jisc_build by Martin Wood-Mitrovski
// low-cli by Jeremy Rylan
// node-sass-json-importer
// panes by Joel Chu
// parent-search by Ionică Bizău
// payname by Florian CHEVALLIER
// ramda-cli by Raine Virta
// reindex-cli by Reindex
// singular_sake by Juan Castro Fernández
// sourcegate by Orlin M Bozhinov
// tithe by Ionică Bizău
// uturi-caching
// valkyrja by srcspider
// web-term by Ionică Bizău
