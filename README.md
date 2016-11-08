# handlebars-react

A React wrapper for importing legacy handlebars components. This module is meant to be used by projects that have decided to convert to React. It allows you to slowly convert your site without needing to do everything at once. At npm, we use it to import our head, header, footer, and scripts sections.

## Installation

In your project directory:

```bash
npm install --save handlebars-react-component
```

## Usage

First, import the npm module. In the React file where you want to import handlebars, choose one of the following:

```js
// import syntax
import Handlebars from 'handlebars-react-component;

// require syntax
var Handlebars = require('handlebars-react-component');
```

Then, use the module in your jsx. The template attribute indicates the handlebars template name.

```jsx
<Handlebars template="header" />
```
If you'd like to **change the element** the template renders into, change the element attribute on the handlebars component.

```jsx
<Handlebars template="header" element="ul" />
```

For an in-context example, here is the render function of our main React layout, simplified for clarity.

```js
render: function() {
    return (
      <html>
      <Handlebars template="head-content" element="head" />
      <body>
         <Handlebars template="header" />
         <div id="AppMount"></div>
         <Handlebars template="footer" />
         <Handlebars template="scripts" />
      </body>
      </html>
    );
  }
``` 

We intend to import the header and footer this way until we have new designs to implement. No sense in making React components for something that is in flux.

## Feedback

If you run into any problems, please open an issue on our github repo.
