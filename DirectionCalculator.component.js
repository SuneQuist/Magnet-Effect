class Direction {
  constructor() {
    this.directionX = "";
    this.directionY = "";

    this.oldX = 0;
    this.oldY = 0;
  }

  /**
   *
   * @param {nunber} x - Pass e.pageX (e === event)
   */

  calculateDirectionX(x) {
    if (x < this.oldX) {
      this.directionX = "left";
    } else {
      this.directionX = "right";
    }

    this.oldX = x;
  }

  /**
   *
   * @param {nunber} y - Pass e.pageY (e === event)
   */

  calculateDirectionY(y) {
    if (y < Number(this.oldY)) {
      this.directionY = "Up";
    } else {
      this.directionY = "Down";
    }

    this.oldY = y;
  }
}

module.exports = Direction;
