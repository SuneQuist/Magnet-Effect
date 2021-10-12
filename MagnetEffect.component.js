class MagnetEffect {
  /**
   *
   * @param {event} target - Target should be a DOM element.
   * @param {boolean} reset - If true makes the element go back to original spot when the element is not hovered.
   * @return {transform} - Magnet effect will be applied to the element.
   */

  constructor(target, reset = false) {
    this.target = target;
    this.reset = reset;

    this.moveTarget();
  }

  moveTarget() {
    this.target.onmousemove = (e) => {
      let bounding = e.target.getBoundingClientRect();

      // Create new surrounding area
      let x = e.clientX - e.target.offsetLeft + window.pageXOffset;
      let y = e.clientY - e.target.offsetTop + window.pageYOffset;

      // New coordinate system for element (when going out in any direction from the element, it will count from 0 - 10, 0 being the element)
      this.coordsX = ((x - 0) * (10 - -10)) / (bounding.width - 0) + -10;
      this.coordsY = ((y - 0) * (10 - -10)) / (bounding.height - 0) + -10;

      e.target.style.transform = `translate(${this.coordsX}px, ${this.coordsY}px)`;
    };

    if (this.reset) {
      this.target.onmouseleave = (e) => {
        e.target.style.transform = "translate(0px, 0px)";
      };
    }
  }
}

module.exports = MagnetEffect;
