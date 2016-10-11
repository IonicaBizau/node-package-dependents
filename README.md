
[![package-dependents](http://i.imgur.com/nehBMvB.png)](#)

# package-dependents

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/package-dependents.svg)](https://www.npmjs.com/package/package-dependents) [![Downloads](https://img.shields.io/npm/dt/package-dependents.svg)](https://www.npmjs.com/package/package-dependents) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the npm dependents of a given package.

## :cloud: Installation

```sh
$ npm i --save package-dependents
```


## :clipboard: Example



```js
// Dependencies
var PackageDependents = require("package-dependents");

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
```

## :memo: Documentation


### `PackageDependents(name, version, callback)`
Get the dependents of a given packages. The callback function is called with
an error and an array of objects.

#### Params
- **String** `name`: The package name.
- **String** `version`: The package version (default: `"latest"`).
- **Function** `callback`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
