// Dependencies
var GetDependents = require('npm-get-dependents')
  , SameTime = require("same-time")
  , PackageJson = require("package-json")
  ;

/**
 * PackageDependents
 * Get the dependents of a given packages. The callback function is called with
 * an error and an array of objects.
 *
 * @name PackageDependents
 * @function
 * @param {String} name The package name.
 * @param {String} version The package version (default: `"latest"`).
 * @param {Function} callback The callback function.
 */
function PackageDependents(name, version, callback) {
    if (typeof version === "function") {
        callback = version;
        version = "latest";
    }
    GetDependents(name, function(err, packages) {
        if (err) { return callback(err); }
        SameTime(packages.map(function (c) {
            return function (fn) {
                PackageJson(c, version).then(function (json) {
                    fn(null, json);
                }).catch(function (err) {
                    fn(err);
                });
            };
        }), function (err, packages) {
            callback(err, packages || []);
        });
    });
}

module.exports = PackageDependents;
