// @ts-check
// @access 给成员标识access level

/** @constructor */
function Thingy() {
  /** @access private */
  var foo = 0;

  /** @access protected */
  this._bar = 1;

  /** @access package */
  this.baz = 2;

  /** @access public */
  this.pez = 3;
}

/** @constructor */
function OtherThingy() {
  /** @private */
  var foo = 0;

  /** @protected */
  this._bar = 1;

  /** @package */
  this.baz = 2;

  /** @public */
  this.pez = 3;
}
