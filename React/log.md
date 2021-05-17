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

Also, I need to install React tools. For my algorithms course, I installed Node and NPM. 

>In order to create apps with React from command line, I have to use ```create-react-app```.

The installation is straightforward with ```npm```

```bash
npm install -g create-react-app
```

### Creating demo app with ```create-react-app```

Well, after installing all, I created a demo app using the command

```bash
create-react-app MyAppDir
```

When I ran this on my Big Sur Mac, it crashed. horribly. I worried about the integrity of my computer. However, some directories were created inside the app main, and I set out to test if it works.

#### Important development commands

1. ```npm start```: Starts the development server
1. ```npm run build```: Bundles the app into static files for production
1. ```npm test```: Start test runner
1. ```npm run eject```: It extracts tools like *webpack* or *babel*, and may be used for exhaustive customization of the app
