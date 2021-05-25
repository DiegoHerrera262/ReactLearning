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
2. **Console:** Which allows execution of JS pretty much like in a Python console.
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

Before considering the commands, I is important to review two great tools that are used to produce a web app using ReactJS: _Babel_ and _Webpack_. The first one is concerned with compatibility between a browser's JS engine and the JS version used to program the app. The former is concerned with bundling a web app for serving.

> Both **Babel** and **Webpack** are used for transpiling a web app written with React, so that it can be served independently of user resources.

The most commonly used commands for rendering a web app are:

1. `npm start`: Starts the development server.
1. `npm run build`: Bundles the app into static files for production.
1. `npm test`: Start test runner.
1. `npm run eject`: It extracts tools like _webpack_ or _babel_, and may be used for exhaustive customization of the app.

Remember that the DOM is a _representation_ of a webpage, kind of like a tree structure, that enables programming languages to connect to the page. In principle, React was supposed to create components and mount them to the DOM. However, there are _three_ main components that help doing these tasks:

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

The core of the web app is the App file. This has a particular syntax that is called **JavaScript XML (JSX)**. Now, this allows us to interact with the DOM of a webpage using JavaScript. What is happening, is that starting the app includes a JS script inside the body of `index.htm`. This is responsible for the behavior of the page.

> By means of JSX, it is possible to declare components whose state may change according to some program logic, and dynamically change the looks of the page.

Behind scenes, JSX expressions are transpiled using Babel, to React elements by means of the function `React.createElement(type,props,content)`. For instance, consider a simple JSX expression declaring a header

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

At the first stage, after generating an app with `create-react-app`, all the files but `index.js` should be removed. This is used for mounting the main app to the DOM of the webpage. Following my Udemy course, I create a simple app inside the _empty_ index JS file with the following lines

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

It may also be noted that JS expressions can be displayed on the webpage by using curly brackets. For instance, I can create an object

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

Elements are JSX expressions that are _static_, that is to say, they cannot be changed. In contrast, **components** can be adapted depending on the situation, by controlling their props (_properties_) object. **Functional React components** are defined as functions that return a particular JSX construction. For instance:

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
        // A JSX expression
    );
}
```

### React components with classes

When declaring components using classes, I am extending a React class called `React.Components`. Inside this extension, I define a _render_ method that contains the structure of the component. Props are not accessed from this render method, but rather from `this` object. For instance:

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

To define a state for a class component, a _constructor method_ should be used as follows

```jsx
class SomeClassComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            // Include properties map-key
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

It is not advisable to use arrow functions since this can cause some overhead in the page rendering, every time the state of a component changes, it will be rendered again. The best practice is to manage events using class functions, since then they will only be rendered once in the constructor, and only modified properties will be updated. Consider as an example trying to change some property of a React component by clicking a button. The good practice for doing this would be using _class methods_ as follows

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

Now I think it's good to process the snippet above.

1. First, inside the constructor, the object `this` is bound from the class method `myMethod` to the component itself. It seems like inside some class methods, the `this` points to the function rather than to the component (looks like `render` is not one of them).

1. Then, the property to be changed is added to the `state`, as an object.

1. After, a class method `MyMethod`, that changes the state of an instance is defined. Notice that any change to the state is carried out using the method `setState`. If the state is changed directly, a warning message pops out.

1. The triggering event in this example is clicking on a button. What the JSX instruction above says, is that upon clicking, the app should execute `MyMethod`, and change the state of the component.

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

These are called _property initializers_, and work because React has already incorporated Babel for JS compatibility. However, to this date, this is not the official standard, although it is a community standard.

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

JSX is _sugar syntax_ that helps writing clearer code for developing React apps. The translation to plain JS is carried out by **Babel**. The traduction is carried out by the React function

```js
React.createElement("HTMLmark", props, otherPropsObject);
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

It is possible to **group** related React components in an object, and defining them as arrow functions as follows

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

The thing in the parenthesis is called _ternary conditional_. Although this is quite standard, in large projects, there is a high risk that programmers repeat the name of a CSS class styling. To solve this, it is possible to use **CSS Modules**. This are CSS syntax files named as `mystyle.module.css`. They can be imported on a JS file as objects:

```jsx
import mystyle from "./path/to/mystyle.module.css";
```

To access a styling class from a module, use the syntax `mystyle['mycssclass']`.

> The point of this definition is simply to avoid the problem of redefining a CSS style class twice on a large project. Setting style on program logic works the same as before

**Pro Tip:** To combine classes from a module, use _template strings_. For instance:

```jsx
const myCssClass = `${mystyle["class1"]} ${mystyle["class2"]}`;
```

What is going to happen is that a name for the class with a unique suffix will be created and used in the actual rendering of the page.

#### Modularization of React Projects

Once a project gros, the current file structure is unmaintainable. The best practice is to group an individual component's files inside their own folder with the component name. To ease the import process to the main app, an `index.html` containing the _single_ line of code

```js
export { default } from "./ComponentName";
```

Would do the trick, due to the way package imports work on ECMAScript 6. Remember to always put the JS and the styles file inside the component's folder

**date:** 24/05/21
**topic:** Spread operator

## Combining objects in JS

Under certain circumstances, it would be desirable to combine two objects into one, like a merge of different properties. This can be done with the function

```jsx
let mergedObject = Object.assign({}, object1, object2);
```

The first argument is the _target object_, and the rest f the arguments are the properties to include. The merge, however, is not the best, since

1. If two or more objects have a property **with the same name**, the merged object will have the value of the **last object merged**
1. Merge only happens at the **highest level**. That is to say, if merged objects have properties with the same name, and are initialized to different objects, the _inner properties_ are not merged.

As an illustration, consider the example of merging the following objects.

```jsx
let object1 = {
  fooProp: "foo1",
  varprop: "var1",
  objprop: { prop1: "foobar", prop2: "mikbar" },
};

let object2 = {
  fooProp: "foo1Recharged",
  lokiprop: "myprop",
  objprop: { something: "in the way she whoes me" },
};
```

After merging with assign, the result is

```jsx
> mergeObject = Object.assign({},object1,object2)
{
  fooProp: 'foo1Recharged',
  varprop: 'var1',
  objprop: { something: 'in the way she whoes me' },
  lokiprop: 'myprop'
}
```

This is not the best merge. However, `Object.assign` can be used to clone some JS object, without any trouble. A better practice for combining objects is to use the **Spread operator**, which works kind of like `Object.assign`, but with much shorter distance. Consider, for example, a _person object_, composed of the properties contained in separate objects:

```jsx
let basicInfo = {
  name: "Diego",
  lastName: "Herrera",
  birthYear: "1998",
};

let paymentInfo = {
  bankName: "MyBank.com",
  info: {
    creditCard: "MS",
    verificationCode: "111",
  },
};

let additionalInfo = {
  isPremium: true,
  info: {
    likesCats: true,
    likesDogs: false,
  },
};
```

It is possible to merge the three separate property categories using spread operator as follows:

```jsx
let person = {
  ...basicInfo,
  ...paymentInfo,
  ...additionalInfo,
  info : {
    ...paymentInfo.info
    ...additionalInfo.info
  }
}
```

Like `Object.assign`, spread operator does not merge second level properties, and thus an explicit declaration of the `info` property is needed. However, _unpacking_ the properties for explicit merge is far easier than using `Object.assign`.

> At this stage, it looks like the spread operator of JS is like the _unpacking_ operator in python (it seems to work with any iterable).

## Setting a Component's State using Arrow Functions

Although using `this.setState` as before might be correct in some instances, it is not the best option. If I pass an object that modifies the desired property, the fact that execution of this function is **asynchronous** may cause unexpected results

> The method `this.setState` waits until checking with state props have changed, which not, and update them all at once. this can cause unexpected conflicts.

As a result, the best practice is to modify a component's state using **arrow functions**. this can be done as follows

```jsx
myCompMethod = () => {
  this.setState((prevState, props) => ({
    someStateProperty: newValue,
  }));
};
```

**Pro Tip:** In the case that `someStateProperty` has an object or (iterable) as its value, the _spread operator_ may be used to update the state without overwriting another important second-level property values. For instance:

```jsx
myCompMethod = () => {
  this.setState((prevState, props) => ({
    someStateProperty: {
      ...prevState.someStateProperty,
      someSecondProp: newValue,
    },
  }));
};
```

**Super Pro Tip:** The props of an object can also be assigned using an object and the spread operator as follows

```jsx
<MyReactObject {...propObject} />
```

This is quite useful for code maintenance, and is far more clear, in my opinion.

## Events in React

It is possible to mutate states of a React component using events. This can be done as before, by defining a control method, but event properties can be passed to the function as arguments. Consider, for instance, the following example of using an input HTML object for changing the state of an app component:

```jsx
<input onChange={this.markFavorite} />
```

With a method `this.markFavorite`, that is defined as

```jsx
markFavorite = (event) => {
  this.setState((prevState) => {
    if (event.target.value === "Yes") {
      return {
        shopDetails: {
          ...prevState.shopDetails,
          isFavorite: true,
        },
      };
    }
    return {
      shopDetails: {
        ...prevState.shopDetails,
        isFavorite: false,
      },
    };
  });
};
```

Notice that the argument for the control function is the **event**. One of the properties for the `onChange` event is `onChange.target.value`, which allows to capture the text on the input box. In this way, the control function allows changing the nested property `isFavorite`.

**Important:** React provides an interface between _native events_, which have different properties depending on the browser used to render the app, using _synthetic events_ that standardize those properties.

**Pro Tip:** React rewrites an event once is happens, and the asynchronous nature of `this.setState` implies that storing data from event properties is best done by **caching first** the desired data, and then using `this.setState`.

**date:** 25/05/21
**topic:** More on props

## Introduction to `props.children`

Sometimes, there are situations when some content needs to be passed from a parent component to a child component. This is the case, for instance, of a _container component_, that sets some styling and inside which some actual content will be read or displayed. Consider, for instance, the following _person card_ component:

```jsx
class TestComponent extends React.Component {
  state = {
    color: "blue",
  };

  render() {
    return (
      <div style={this.state}>
        <div> This is {this.props.name} </div>
        <div> My color is {this.state.color}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
```

In this class, the idea is to include some description of the person that an instantiated component doesn't know before hand. In our app, the description will be passed as follows:

```jsx
App = (props) => {
  return (
    <div>
      <TestComponent name="Carlitos">
        <p> I'm Colombian and love football! </p>
      </TestComponent>
    </div>
  );
};
```

The children props, which in this case is a simple paragraph with text, are passed to the parent `TestComponent` object. Notice that the property `this.children.props` allows **composition**, and substitutes inheritance in React.

## Extract properties from objects ES6

Consider the task of extracting some property values inside som JS object. This can be done using _dot notation_. However, in some instances, it is better to de-structure the object. For instance:

```jsx
myObject = {
  name: "Diego",
  social: {
    instagram: "diegoherrera262",
    facebook: "diegoherrera262",
    github: "diegoherrera262",
  },
};
```

If I want to get the name of `myObject`, I would only need to use the following syntax:

```jsx
let { name } = myObject;
```

In that case, a variable named `name` would store the value `'Diego'`. It is possible to _nest_ de-structures using the following syntax:

```jsx
let {
  name,
  social: { instagram, github },
} = myObject;
```

In that example, three variables are created, that store the corresponding properties of `myObject`.

**Pro Tip:** The names of the variables can be changed using _colon_ as follows:

```jsx
let { name: nombre } = myObject;
```

In this case, a variable named `nombre`, with value `'Diego'` is created.

> This tool may be useful to make code clearer. For instance, `this.props` can be _de-structured_ so as to avoid long lines of code.

### `React.Fragments`

In some instances, it happens that a React component must consist of different HTML nodes. However, by default, a React component only has one node.

> It is possible to use fragments for returning a component with what is effectively a multiplicity of nodes.

The usage of this component is as follows:

```jsx
const App = () => {
  return (
    <React.Fragment>
      <AnotherComp {...someProps} />
      <AnotherComp {...someProps} />
      <AnotherComp {...someProps} />
    </React.Fragment>
  );
};
```

When transpiling to HTML, the node associated to fragment is effectively gone, as in it doesn't appear in the built files.

**Pro Tip:** Another way to create a fragment component is to use empty marks `<>Some content</>`. But this requires the last version of Babel.
