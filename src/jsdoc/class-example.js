// @ts-check
/** Class represent a point */
class Point {
  /**
   *
   * @param {number} x The x value
   * @param {number} y The y value
   */
  constructor(x, y) {
    //
  }

  /**
   * Gettting the x value
   * @return {number} x value
   */
  getX() {
    return 1;
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
    return 2;
  }

  /**
   * Convert a string containing two comma-separated numbers into a point.
   * @param {string} str - The string containing two comma-separated numbers.
   * @return {Point} A Point Object
   */
  static fromString(str) {
    return new Point(1, 2);
  }
}

// 如果继承的话要标识出来
/**
 * @extends Point
 */
class Dot extends Point {
  #width = 0;
  /**
   * Create a dot.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @param {number} width - The width of the dot, in pixels.
   */
  constructor(x, y, width) {
    super(x, y);
    this.#width = width;
    // ...
  }

  /**
   * Get the dot's width.
   * @return {number} The dot's width, in pixels.
   */
  getWidth() {
    // ...
    return this.#width;
  }
}
