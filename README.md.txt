# Magnet Effect

JavaScript and React package, that provides a special magnet effect when closing in on items.

---

### Installation

```terminal
npm install magneteffect
```

### Usage

The package has 3 different exports, **Direction, Mouse, and MagnetEffect**.

**Direction**

```js
import { Direction } from "magneteffect";

// Call for class
const direction = new Direction();

window.addEventListener("mousemove", (e) => {
  // Set Direction
  direction.calculateDirectionX(e.screenX);
  direction.calculateDirectionY(e.screenY);

  // Will log direction
  console.log(direction.directionX, direction.directionY);
});
```

---

<br/>

**Mouse**

The mouse class has a total of 1 parameter, which is the className of the elements you want to apply a mouse hover effect on.
If no className is given the mouse won't make a hover effect.

```js
import { Mouse } from "magneteffect";

// Call for class
const mouse = new Mouse("item"); // Provide className (parameter)

// Element
<div class="item">I'm an element!</div>;
```

---

<br/>

**MagnetEffect**

The magnet effect works on multiple items which you can provide through a loop.
The magnetEffect class takes in two parameters which are (element, boolean).
<br/>

**The element:** This is the element you want to have the magneteffect (provide a single element). <br/>
**The boolean:** The boolean when true makes the element when having been applied the magnetEffect spring back to its original place. If false the element can be used as a draggable item.

**Note:** Do not use the magnetEffect on elements **DIRECTLY** under a section element, this can disrupt the elements.

```js
import { MagnetEffect } from "magneteffect";

// Loop over all the items you want the magnet effect to be applied too.
document.querySelectorAll(".magnetItem").forEach((e) => {
  // Two paramaters - Explained up above.
  new MagnetEffect(e, true);
});
```

Here is the source-code if you're interested:
[**Magnet Effect Github**](https://github.com/SuneQuist/Magnet-Effect);
