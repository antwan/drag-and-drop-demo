# React Drag & drop

A simple drag and drop list of card written in React.
This features consumption of the data file, as well as possibilty to drag/drop cards, zoom in, and lazy loading.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start

In the project directory, you can run either:

### `npm install`

Install dependencies.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## Design notes

- This uses function-based components as well as React hooks to embrace modern React practices.
- Drag and drop is implemented using library React-DND. A significant part of this code is inspired from their tutorials.
- Drag/drop behaviour is using the HTML5 Drag API, which is not compatible with touch events. As a consequence this works only for desktop browsers.
- Images can be showed in full screen when clicked. This is pure CSS for simplicity, but could be improved with animations/keyboard interactions.
- Images are hidden when loading with a throbber. If loading is too quick, you can observe this behaviour with browser tools (e.g speed throttling in inspectors).
- Some tests are provided as example (for the `Image` component). This could be a good topic for further extensions, in particular using React-DND testing framework.
