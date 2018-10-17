/*!
 * compare-versions.js v1.0.0
 * (c) 2018 Hejx <531601727@qq.com>
 * Released under the MIT License.
 * undefined
 */

/**
 * transform version to string
 *
 * @param {array} version
 * @param {number} [len=10]
 */

var transformVersion = function transformVersion(version) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return version.map(function (val) {
    return '0'.repeat(len - val.length) + val;
  }).join('.');
};

/**
 * Compare Versions
 * 
 * Please make sure the version type is consistent.
 *
 * @param {*} a version
 * @param {*} b another version
 * @param {*} c string length, default 10
 * 
 * if a > b, return 1
 * if a === b, return 0
 * if a < b, return -1
 * if (Versions type is inconsistent) return null
 */
var compareVersions = function compareVersions(a, b, c) {
  var aArray = a.split('.');
  var bArray = b.split('.');
  if (aArray.length !== bArray.length) {
    console.error('[CompareVersions]: ' + a + '/' + b + ', the Versions type is inconsistent.');
    return null;
  }
  var aStr = transformVersion(aArray, c);
  var bStr = transformVersion(bArray, c);

  if (aStr > bStr) return 1;
  if (aStr === bStr) return 0;
  return -1;
};

export default compareVersions;
//# sourceMappingURL=compare-versions.mjs.map