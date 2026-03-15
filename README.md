# input-pos

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element for creating a 2D input position control.

## Demo
See the [demo page](https://code4fukui.github.io/input-pos/) for examples.

## Features
- Drag-and-drop 2D position input
- Supports both mouse and touch events
- Customizable appearance using CSS

## Usage
To use the `<input-pos>` element, simply include the `input-pos.js` file in your HTML:

```html
<script type="module" src="./input-pos.js"></script>
```

Then you can add the `<input-pos>` element to your HTML:

```html
<input-pos id="position-input"></input-pos>
```

You can access the current position value using the `value` property:

```javascript
const posInput = document.getElementById('position-input');
console.log(posInput.value); // Outputs the current position value (between 0 and 1)
```

You can also listen for the `oninput` event to be notified when the position is changed:

```javascript
posInput = document.getElementById('position-input');
posInput.oninput = (event) => {
  console.log(`Position: (${event.valuex}, ${event.valuey})`);
};
```

## License
This project is licensed under the [MIT License](LICENSE).