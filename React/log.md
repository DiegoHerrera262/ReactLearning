# Front-End Web Development with React

**date:** 12/05/21
**topic:** Introduction to development tools

## What is React

React is a JavaScript library built at Facebook for agile development of compelling UIs. Any React application is based upon **components**, which integrate and interact to build complex user interfaces.

> Components are independent from one another, and can be mapped to a tree structure, with the highest level component being the web app itself (the *root* component).

Each component is an instance of a class that posses a **state** and a **render method**. React allows detection of the change of state of a DOM Element in a web app, and changes its state and rendering accordingly. So, React reacts.

**date:** 14/05/21
**topic:** Stack with ```create-react-app```

## Installation of Necessary Tools

Most of the development can be carried out using a web browser and a terminal interface. I will use Chrome. In Chrome, the important panes that I will use are:

1. **Elements:** Which allows identification of the HTML code for each element in a website.
2. **Console:** Which allos execution of JS pretty much like in a Python console.
3. **Network:** Which allows simulation of different connection speeds and/or types, and download times for all *app resources*.

I followed a fairly different approach than the Udemy course I took. I installed Node using ```nvm```.


### Creating demo app with ```create-react-app```

Then I made sure that all traces of ```create-react-app``` were erased, and initialized a *hello world app* by running the command

```bash
npm init react-app react-fundamentals
```

**Important:** At the time I took the course, my computer crashed. I don't know why, but perhaps had to do with the fact that the command was run in an external file directory.

It is advised that ```create-react-app``` not be installed globally, so that alternative command

```bash
npx create-react-app myapp
```

Always uses the latest version available. For more details, see the [official documentation](https://github.com/facebook/create-react-app).

#### Important development tools and commands

Before considering the commands, I is important to review two great tools that are used to produce a web app using ReactJS: *Babel* and *Webpack*. The first one is concerd with compatibility between a browser's JS engine and the JS version used to program the app. The former is concerned with bundling a web app for serving.

> Both **Babel** and **Webpack** are used for transpiling a web app written with React, so that it can be served independetly of user resources.

The most commonly used commands for rendering a web app are:

1. ```npm start```: Starts the development server.
1. ```npm run build```: Bundles the app into static files for production.
1. ```npm test```: Start test runner.
1. ```npm run eject```: It extracts tools like *webpack* or *babel*, and may be used for exhaustive customization of the app.

Remember that the DOM is a *representation* of a webpage, kind of like a tree structure, that enables programming languages to connect to the page. In principle, React was supposed to create components and mount them to the DOM. However, there are *three* main componets that help doing these tasks:

1. ```react``` itself, which creates components.
1. ```react-dom```, which interfaces with the DOM.
1. ```prop-type```, which allows checking the data that enters each component while interacting with user.

#### File structure of the app

Since we are working with JS and Node, I already see some familiar files that appeared on my course for Bootstrap4. Those are:

1. ```package*.json```
1. ```node_modules```
1. ```.gitignore```

Remember that the point of this files is to list both production and development dependencies to be installed by ```npm install```. There are, however, a couple of new directories:

1. ```public/```, which contains HTML templates, as well as resources, to be employed in the interactive webpage rendering, carried out by JS.
1. ```src/```, which contains the source code for the app and the components. The main component of the app is in the file ```App.js```. The file ```index.js``` is used for rendering the app.