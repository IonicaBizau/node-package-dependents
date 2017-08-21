## Documentation

You can see below the API reference of this module.

### `PackageDependents(name, version, callback)`
Get the dependents of a given packages. The callback function is called with
an error and an array of objects.

#### Params

- **String** `name`: The package name.
- **String** `version`: The package version (default: `"latest"`).
- **Function** `callback`: The callback function.

