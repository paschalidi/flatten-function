/**
 * Recursively flattens a given `array`.
 *
 * @param {Array} array The array to flatten.
 * @param {Array} result The accumulated value tha is recursively being flattened.
 * @returns {Array} Returns the new flattened array.
 *
 * @example
 * flatten([1, [2, [3, [4]], 5]])
 * will result into -> [1, 2, 3, 4, 5]
 */
export function flatten(array: Array<any>, result?: Array<any>): Array<any> {
  result || (result = []);

  if (array == null) {
    return result;
  }

  array.forEach(value =>
    Array.isArray(value) ? flatten(value, result) : result.push(value)
  );

  return result;
}
