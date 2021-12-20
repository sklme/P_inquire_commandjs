// @ts-check
/** @module module-expample */
/** the name of module */
export const name = 'module-expample';

/**
 * The most recent blended color.
 * @type {string | null}
 * */
export var lastColor = null;

/**
 * Blend two colors together.
 * @param {string} color1 - The first color, in hexadecimal format.
 * @param {string} color2 - The second color, in hexadecimal format.
 * @return {string} The blended color.
 */
export function blend(color1, color2) {
  return '';
}

// convert color to array of RGB values (0-255)
/**
 * Get the red, green, and blue values of a color.
 * @function
 * @param {string} color - A color, in hexadecimal format.
 * @returns {Array.<number>} An array of the red, green, and blue values,
 * each ranging from 0 to 255.
 */
function rgbify(color) {
  return [];
}

export {
  /**
   * Get the red, green, and blue values of a color.
   * @function
   * @param {string} color - A color, in hexadecimal format.
   * @returns {Array.<number>} An array of the red, green, and blue values,
   * each ranging from 0 to 255.
   */
  rgbify as toRgb,
};
