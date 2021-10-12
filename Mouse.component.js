class Mouse {
  constructor(className) {
    this.mouse = document.createElement("div");

    this.className = className;

    // Coordiantes
    this.coords = {
      x: 0,
      y: 0,
    };

    // Initialize
    this.init();
  }

  init() {
    this.mouseCreate(); // Create if true (if not continute)
    this.mouseEnter(); // Display mouse upon entering the documen
    this.mouseLeave(); // Remove mouse upon leaving the document
    this.mouseMove(); // Update mouse movement

    window.onload = (e) => {
      this.mouse.style.display = "block";
      this.repeat(0);
    };
  }

  // Mouse Enter Document
  mouseEnter() {
    document.onmouseenter = () => {
      this.mouse.style.display = "block";
      this.repeat(1);
    };
  }

  // Mouse Leave Document
  mouseLeave() {
    document.onmouseleave = () => {
      this.mouse.style.display = "none";
    };
  }

  // Mouse movement
  mouseMove() {
    // Check for moouse movement
    document.onmousemove = (e) => {
      this.coords.y = e.clientY;
      this.coords.x = e.clientX;

      this.mouse.style.top = window.pageYOffset + this.coords.y - 5 + "px";
      this.mouse.style.left = this.coords.x - 5 + "px";
      this.repeat(1);
    };

    // Check for scroll
    document.onscroll = () => {
      this.mouse.style.top = window.pageYOffset + this.coords.y - 5 + "px";
      this.repeat(1);
    };

    window.onmousemove = (e) => {
      if (e.target.className === this.className) {
        let bounding = e.target.getBoundingClientRect();
        this.mouse.style.transform = `scale(${
          (bounding.right - bounding.left) / 6
        })`;
        this.mouse.style.backgroundColor = "#00000010"; // Color
      } else {
        this.mouse.style.transform = "scale(1)";
        this.mouse.style.backgroundColor = "#000";
      }
    };
  }

  // Repeats (opacity in this case)
  repeat(val) {
    this.mouse.style.opacity = `${val}`;
  }

  // Mouse creation and stylization
  mouseCreate() {
    this.mouse.className = "mouse";

    // Style - Customize
    this.mouse.style.display = "none";
    this.mouse.style.width = "10px"; // Width
    this.mouse.style.height = "10px"; // Height
    this.mouse.style.backgroundColor = "#000"; // Color
    this.mouse.style.clipPath = "circle(50% at 50% 50%)";
    this.mouse.style.transition = "transform .2s ease-out";

    // Prevent interactions
    this.mouse.style.pointerEvents = "none";
    this.mouse.style.userSelect = "none";

    // Style - Position
    this.mouse.style.position = "absolute";
    this.mouse.style.top = "0";
    this.mouse.style.left = "0";
    this.mouse.style.zIndex = "9999";

    // Create mouse (append is for single elements, while appendChild is for multiple)
    document.body.append(this.mouse);
  }
}

module.exports = Mouse;
