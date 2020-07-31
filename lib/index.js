"use strict"

const GetDependents = require("npm-pack-dependents")
    , PackageJson = require("package-json")

/**
 * PackageDependents
 * Get the dependents of a given packages. The callback function is called with
 * an error and an array of objects.
 *
 * @name PackageDependents
 * @function
 * @param {String} name The package name.
 * @param {String} version The package version (default: `"latest"`).
 */
module.exports = function PackageDependents(name, version) {

    if (typeof version === "function") {
        callback = version
        version = "latest"
    }

    return GetDependents(name).then(packages => {
        return Promise.all(packages.map(function (c) {
            return PackageJson(c, version)
        }))
    })
}
