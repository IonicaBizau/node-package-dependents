
[![package-dependents](http://i.imgur.com/nehBMvB.png)](#)

# package-dependents

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/package-dependents.svg)](https://www.npmjs.com/package/package-dependents) [![Downloads](https://img.shields.io/npm/dt/package-dependents.svg)](https://www.npmjs.com/package/package-dependents)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
