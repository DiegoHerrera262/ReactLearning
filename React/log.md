# Front-End Web Development with React

**date:** 12/05/21
**topic:** Introduction to development tools

## What is React

React is a JavaScript library built at Facebook for agile development of compelling UIs. Any React application is based upon **components**, which integrate and interact to build complex user interfaces.

> Components are independent from one another, and can be mapped to a tree structure, with the highest level component being the web app itself (the _root_ component).

Each component is an instance of a class that posses a **state** and a **render method**. React allows detection of the change of state of a DOM Element in a web app, and changes its state and rendering accordingly. So, React reacts.

**date:** 14/05/21
**topic:** Stack with `create-react-app`

## Installation of Necessary Tools

Most of the development can be carried out using a web browser and a terminal interface. I will use Chrome. In Chrome, the important panes that I will use are:

1. **Elements:** Which allows identification of the HTML code for each element in a website.
2. **Console:** Which allos execution of JS pretty much like in a Python console.
3. **Network:** Which allows simulation of different connection speeds and/or types, and download times for all _app resources_.

I followed a fairly different approach than the Udemy course I took. I installed Node using `nvm`.

### Creating demo app with `create-react-app`

Then I made sure that all traces of `create-react-app` were erased, and initialized a _hello world app_ by running the command

```bash
npm init react-app react-fundamentals
```

**Important:** At the time I took the course, my computer crashed. I don't know why, but perhaps had to do with the fact that the command was run in an external file directory.

It is advised that `create-react-app` not be installed globally, so that alternative command

```bash
npx create-react-app myapp
```

Always uses the latest version available. For more details, see the [official documentation](https://github.com/facebook/create-react-app).

#### Important development tools and commands

Before considering the commands, I is important to review two great tools that are used to produce a web app using ReactJS: _Babel_ and _Webpack_. The first one is concerd with compatibility between a browser's JS engine and the JS version used to program the app. The former is concerned with bundling a web app for serving.

> Both **Babel** and **Webpack** are used for transpiling a web app written with React, so that it can be served independetly of user resources.

The most commonly used commands for rendering a web app are:

1. `npm start`: Starts the development server.
1. `npm run build`: Bundles the app into static files for production.
1. `npm test`: Start test runner.
1. `npm run eject`: It extracts tools like _webpack_ or _babel_, and may be used for exhaustive customization of the app.

Remember that the DOM is a _representation_ of a webpage, kind of like a tree structure, that enables programming languages to connect to the page. In principle, React was supposed to create components and mount them to the DOM. However, there are _three_ main componets that help doing these tasks:

1. `react` itself, which creates components.
1. `react-dom`, which interfaces with the DOM.
1. `prop-type`, which allows checking the data that enters each component while interacting with user.

#### File structure of the app

Since we are working with JS and Node, I already see some familiar files that appeared on my course for Bootstrap4. Those are:

1. `package*.json`
1. `node_modules`
1. `.gitignore`

Remember that the point of this files is to list both production and development dependencies to be installed by `npm install`. There are, however, a couple of new directories:

1. `public/`, which contains HTML templates, as well as resources, to be employed in the interactive webpage rendering, carried out by JS.
1. `src/`, which contains the source code for the app and the components. The main component of the app is in the file `App.js`. The file `index.js` is used for rendering the app.

**Pro tip:** To list `npm` commands, use on terminal

```bash
npm run
```

**date:** 18/05/21
**topic:** React core

## Introduction to React Core

The core of the web app is the App file. This has a particular syntaxis that is called **JavaScript XML (JSX)**. Now, this allows us to interact with the DOM of a webpage using JavaScript. What is happening, is that starting the app includes a JS script inside the body of `index.htm`. This is resposible for the behavior of the page.

> By means of JSX, it is possible to declare components whose state may change according to some program logic, and dynamically change the looks of the page.

Behind scenes, JSX expressions are transpiled using Babel, to React elements by means of the funtion `React.createElement(type,props,content)`. For instance, consider a simple JSX expression declaring a header

```jsx
let MyHeader = <h1> Hello World! </h1>;
```

This is transpiled to

```js
let MyHeader = React.createElement("h1", null, "Hello World!");
```

Now, elements can be nested. For example

```jsx
let MySection = (
  <section>
    <myHeader />
  </section>
);
```

would be transpiled to

```js
let MySection = React.createElement(
  "section",
  null,
  React.createElement("myHeader", null)
);
```

Although JSX is not needed for creating elements, it is quite useful to make the code cleaner, and develop in a more declarative way.

### Creating an app from scratch

At the fisrt stage, after generating an app with `create-react-app`, all the files but `index.js` should be removed. This is used for mounting the main app to the DOM of the webpage. Following my Udemy course, I create a simple app inside the _empty_ index JS file with the following lines

```jsx
// Import react for Babel transpilation
import React from "react";

// create a demo App const
const App = <h1>Hello React</h1>;
```

Now, starting the development server only produces a warning that _App_ is not used. It is necessary to mount it to the DOM with React. The app is to be inserted at the template `public/index.html`, at the element `div` with id `root`. This element can be accessed using the code

```js
const root = document.getElementById("root");
```

Then, to effectively load the App to the DOM, `react-dom` is used as follows:

```js
import ReactDOM from "react-dom";
ReactDOM.render(App, root);
```

With this, a simple app is displayed upon serving with `npm start`.

It may also be noted that JS expresions can be displayed on the webpage by using curly brackets. For instance, I can create an object

```js
let user = {
  name: "Sara",
  age: 25,
  country: "Argentina",
};
```

And then retrieve its properties to the UI in my site

```js
const App = <h1>Hello {user.name}!</h1>;
```

I can even define a function

```js
function retrieveUser(someUser) {
  return `Hello ${someUser.name}, from ${user.country}, you are ${user.age} years old.`;
}
```

And show its output on my app. This is quite awesome!

**Super Important:** All React elements must have names that start with capital letters.

### React Components v React Elements

Elements are JSX expressions that are _static_, that is to say, they cannot be changed. In contrast, **components** can be adapted depending on the situation, by controlling their props (_properties_) object. **Functional React components** are defined as functions that return a particula JSX construction. For instance:

```jsx
function SomeComponent(props) {
  return (
    <div>
      <div>
        <h1>Hey! Hello, {props.name}</h1>
      </div>
      <div>This is simple</div>
    </div>
  );
}
```

This component can be reused later, and customized by changing its properties (if at some point they are defined). As an example, consider the following App element to be rendered

```jsx
function App() {
  return (
    <div>
      <SomeComponent name="Carlos" />
      <SomeComponent name="David" />
    </div>
  );
}
```

In this example, I control the props, pretty much like on standard HTML. This seems really cool. The actual render of the App element is set by

```jsx
ReactDOM.render(<App />, document.getElementById("root"));
```

**Super Important:** A component props property must be included _inside curly brackets_, except if they are strings. On ECMAScript 6, it is possible to declare _arrow functions_ for instantiating React components:

```jsx
const MyComponent = (props) => {
    return(
        // A JSX expresion
    );
}
```

### React components with classes

When declaring components using classes, I am extending a React class called `React.Components`. Inside this extension, I define a _render_ method that contains the sturcture of the component. Props are not accessed from this render method, but rather from `this` object. For instance:

```jsx
class SomeClassComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hey! Hello, {this.props.name}</h1>
        </div>
        <div>This is simple</div>
      </div>
    );
  }
}
```

Has almost identical properties as the functional component declared above.

> However, class components have internal properties that can be modified through interaction in the app. **They can modify and update their own state**.

To define a state for a class component, a _construtor method_ should be used as follows

```jsx
class SomeClassComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            // Include properties mapkey
        }
    }
    render() {
        return (
      // Some JSX Expression
        );
    }
}
```

Properties of an instance state can be modified inside the _render_ method of the class.

**Super Important:** It is not advisable to modify the state of a class component instance using arrow functions! However, in one of my commits, I did this following my Udemy course.
