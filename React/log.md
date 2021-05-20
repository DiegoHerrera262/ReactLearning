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

#### Using Class Methods for Managing Events

It is not advisable to use arrow functions since this can couse some overhead in the page rendering, every time the state of a component changes, it will be rendered again. The best practice is to manage events using class functions, since then they will only be rendered once in the constructor, and only modified properties will be updated. Consider as an example trying to change some property of a React component by clicking a button. The good practice for doing this would be using _class methods_ as follows

```jsx
class MyComponent extends React.Component {
  constructor() {
    super();
    // bind this to my method
    this.myMethod = this.Mymethod.bind(this);
    // Create class state
    this.state = {
      someProp: "Some Value",
    };
  }
  // Definition of method to
  // modify somProp
  myMethod() {
    this.setState({
      someProm: "Some New Value",
    });
  }
  render() {
    return (
      // Some JSX
      <button onClick={this.myMethod}></button>
      // More JSX
    );
  }
}
```

Now I think it's good to process the snipet above.

1. First, inside the constructor, the object `this` is bound from the class method `myMethod` to the component itself. It seems like inside some class methods, the objetc `this` points to the function rather than to the component (looks like `render` is not one of them).

1. Then, the property to be changed is added to the `state`, as an object.

1. After, a class method `MyMethod`, that changes the state of an instance is defined. Notice that any change to the state is carried out using the method `setState`. If the state is changed directly, a warning message pops out.

1. The triggering event in this example is clicking on a button. What the JSX instruction above says, is that upon clicking, the app should esecute `MyMethod`, and change the state of the component.

**Pro Tip:** If the component has several methods, list them on an array called `METHODS`, and iterate over the array to bind `this` as follows

```js
METHODS.forEach((method) => {
  this[method] = this[method].bind(this);
});
```

Remember to put that snippet inside the `construct` method of the component.

#### Property Initializers for Class Components

If instead of common class functions, arrow functions are used to set the events, _no this binding is needed_. This is a property of arrow functions that is related to the fact that they inherit `this` from the class component. To profit this, the following snippet can be used

```jsx
class MyComponent extends React.Components {
    // Define state outside
    // the render method
    state = {
        someProp = 'someValue'
    }
    // Define arrow func
    // for handling event
    MyMethod = () => {
        this.setState({
            someProp = 'NewValue'
        });
    }
    // Use render as
    // above
    render(){
        return (
            // Some JSX
            <button onClick={this.myMethod}></button>
            // More JSX
        );
    }
}
```

These are called _property initializers_, and work because React has already incorpored Babel for JS compatibility. However, to this date, this is not the offcial standard, although it is a community standard.

## Refactorization of React Components

When working with large apps, the good practice is to separate Rect components from the main one `App`, and from the main page generator `index`, into separate files. To do this, all components that are included on `App`, should be located on JS files inside a directory called `./components`. Since they use JSX, the header should always include

```js
import React from "react";
```

At the end, to be able to use it in the `App`, they must be exported using the command

```js
export default SomeComponent;
```

Finally, in the `App`, located at `./App.js`, all components should be included using the line

```js
import SomeComponent from "./components/SomeComponent";
```

Of course, on the `index.js`, that renders the main page, the line

```js
import App from "./App";
```

## A Bit More on JSX

JSX is _sugar sintax_ that hels writing clearer code for developing React apps. The translation to plain JS is caried out by **Babel**. The traduction is carried out by the React function

```js
React.createElement("HTMLmark", props, otherPropsObjec);
```

And what is used as a component in plain JS is a _wrapper_ function with the same name of the desired component. If an element is created, the direct output of the function above is stored. Consider, for example, the translation of the functional component `SomeComponent`:

```js
"use strict";

function SomeComponent(props) {
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      null,
      /*#__PURE__*/ React.createElement("h1", null, "Hey! Hello, ", props.name)
    ),
    /*#__PURE__*/ React.createElement("div", null, "This is simple")
  );
}
```

Notice that a component has **nested elements**, which are created with the React function presented. Also, unspecified properties are passed as `null`; whenever a property is specified, it is passed as an object `{propname : propval}`.

**Super Important:** Components should always be declared with initial capital letter. Otherwise, Babel will interpret its appearance as a string.

It is possible to **group** related React components in an objetc, and defining them as arrow functions as follows

```jsx
const Components = {
  Comp1: () => {
    // some JSX
  },
  Comp2: () => {
    // some JSX
  },
};
```

And access them in another component using the notation `<Components.Comp1 />` or `<Components.Comp2 />`.

**date:** 20/05/21
**topic:** Styling React components

## Styling React Components

Stiles are best managed using **CSS classes** and styling files. The way this can be done is by importing styling files as follows

```jsx
import "./path/to/mystyle.css";
```

This is valid thanks to **webpack**. In a React class element, styling can be added using an _injector_ (curly brackets):

```jsx
render(){
  return(
    <element className={myclass} />
  );
}
```

Notice that since `class` is a reserved JS word, `className` should be used instead with React. This is pretty useful for **conditional styling**. For example, it could be so that

```jsx
myclass = "BaseClass" + (someCondition ? "ActiveClass" : "");
```

The thing in the parenthesis is called _ternary conditional_. Although this is quite standard, in large projects, there is a high risk that programmers repeat the name of a CSS class styling. To solve this, it is possible to use **CSS Modules**. This are CSS sintax files named as `mystyle.module.css`. They can be imported on a JS file as objects:

```jsx
import mystyle from "./path/to/mystyle.module.css";
```

To access a styling class from a module, use the syntax `mystyle['mycssclass']`.

> The point of this definition is simply to avoid the problem of redifining a CSS style class twice on a large project. Setting style on program logic works the same as before

**Pro Tip:** To combine classes from a module, use _template strings_. For instance:

```jsx
const myCssClass = `${mystyle["class1"]} ${mystyle["class2"]}`;
```

What is going to happen is that a name for the class with a unique suffix will be created and used in the actual rendering of the page.
