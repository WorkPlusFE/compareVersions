# compare-versions

> A simple version comparison tool.

The comparison principle is very simple, the version string is converted into a string of the same length, the default is 10, and then directly determine the size. But if the version of the type is inconsistent, such as `3.13.1` and `3.14`, may get unexpected results, So, please make sure the version type you entered is the same.

`'3.13.1'` => `'0000000003.0000000013.0000000001'`

Judgment rules and return results are as follows:

* if a > b, return 1
* if a === b, return 0
* if a < b, return -1
* if (versions type is inconsistent) return null

## Install

```bash
npm install -S @workplus/compare-versions
```

## Usage

#### Import

```js
// ES6
import compareVersions from '@workplus/compare-versions';

// Node
const compareVersions = require('@workplus/compare-versions');
```

#### Compare

```js
/**
 * compareVersions(a, b, c)
 * 
 * @param {string} a version
 * @param {string} b another version
 * @param {number} c string length, default 10
 */

compareVersions('3.13.1', '3.13.0', 10); //  1
compareVersions('3.14.1', '3.14.1', 2); //  0
compareVersions('3.14.1', '4.14.1'); // -1
compareVersions('3.14.1', '4.14'); // null
```

#### License

MIT [Hejx](https://github.com/hejianxian)
