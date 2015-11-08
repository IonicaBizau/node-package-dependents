[![package-dependents](http://i.imgur.com/nehBMvB.png)](#)

# package-dependents [![Support this project][donate-now]][paypal-donations]

Get the npm dependents of a given package.

## Installation

```sh
$ npm i package-dependents
```

## Example

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

## Documentation

### `PackageDependents(name, version, callback)`
Get the dependents of a given packages. The callback function is called with
an error and an array of objects.

#### Params
- **String** `name`: The package name.
- **String** `version`: The package version (default: `"latest"`).
- **Function** `callback`: The callback function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md