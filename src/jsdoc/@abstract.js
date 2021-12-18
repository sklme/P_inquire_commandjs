// @ts-check
/*
@abstract 这个tag标识继承的类必须要实现这个方法
*/
/**
 * Generic dairy product.
 */
class DairyProduct {
  /**
   * Check whether the dairy product is solid at room temperature.
   * @abstract
   * @returns {boolean}
   */
  isSolid() {
    return false;
  }
}

/**
 * Cool, refreshing milk.
 * @constructor
 * @extends DairyProduct
 */
class Milk extends DairyProduct {
  /**
   * Check whether milk is solid at room temperature.
   * @return {boolean} Always returns false.
   */
  isSolid() {
    return false;
  }
}
