const PackageDependents = require("../lib");

// Get is-there's dependents
PackageDependents("is-there").then(packages => {
    packages.forEach(c => {
        console.log(c.name + (c.author && c.author.name ? " by " + c.author.name : ""));
    })
})
// =>
// typed-css-modules
// node-sass-json-importer
// ajs
// be-goods
// ...
