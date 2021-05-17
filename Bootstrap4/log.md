# Front-End Web UI Frameworks and Tools: Bootstrap 4

**date:** 12/05/21
**topic:** Week 1 of the course

The course is very well structured. The idea is that each lecture has a set of objectives. After completing all lectures (watching videos and assignments) one or more hands-on exercises are proposed. At this stage, most of the course is concerned with front-end development. Today I start the first week of the course.

## Full Stack Web Development: The Big Picture

The objectives of the lesson are:

>1. To understand what is meant by full stack in the context of web development.
>1. To distinguish between front-end back-end and full stack web development.
>1. To understand the position of this course in the context of the whole specialization.

### What is full stack web development?

In traditional web development, there are two dimensions. These are **front-end** and **back-end**. Front-end it to a car's external appearance and design, like back-end is to its thermal, mechanical and electrical infrastructure. That is to say

> *Front-end* refers to the actual delivery of a content's site via a web browser in a supported device. Whereas *back-end* refers to the technologies and approaches used to process most of the necessary information from the server side, which is to be delivered.

There are different technologies used in front-end development and back-end development. Front-end uses mostly HTML, CSS and Javascript to render content in browsers. On the other hand, back-end uses technologies such as PHP, Java, Ruby or Python.

**NOTE:** Consider the perspectives of the languages. Since HTML is mostly a markup language, it is used to generate text, images and other media content in an appealing fashion. CSS allows definition of a particular style, layout and colors. Javascript allows interactivity. Hence, front-end is mostly concerned with presenting interactive content in an appealing fashion.

On the other hand, Python, Ruby or Java are more hardcore languages. They are used from Data science and Machine Learning, to scientific programming and pure computer science. They are well suited for real heavy duty. Thus, it might be seen that back-end is concerned with hardcore information processing that may be delivered to the end user, and which is undesirable to carry out locally on his or her device.

**Three tier architecture**

Traditional web development conceives the inner workings of a web application in three layers

1. **Presentation Layer:** This is mostly User Interface (UI) issues.
1. **Business Logic layer:** This deals with content generation and data validation.
1. **Data Access Layer:** Data access and storage, via an API, from a database.

Interaction between Business Logic and Presentation layers is in the form of **server-side rendering**. HTML, CSS and JavaScript snippets are sent to the server side from the server. The Data Access Layer interacts with the Business Logic Layer by means of **relational databases**.

> There is an increasing trend to use **JavaScript** for implementing all the stack.

There are single page apps that are implemented using **React** or **Angular**, which are based upon JavaScript. Business Logic can be implemented using **NodeJS** and its modules. Databases can be managed using frameworks like **MongoDB**. Most information exchange is usually done in **JSON** format.

## JavaScript on Desktop

In the beginning, JavaScript was designed to enhance interaction with users of a web application, and thus was constrained to a web browser. However, **NodeJS** changed this fundamentally. This tool is built upon Chrome V8 Engine for JavaScript, and allows execution of JS programs in a desktop environment.

> NodeJS allows development of UI logic, and even design, as well as Bussines logic and more back-end development, with JavaScript.

JavaScript is an **event-driven programming language**. This means that the logic of a program execution depends on the occurence of a given event, for examp`le, some user interaction. I have already encountered this fact when considering input from stdin. 

> In event-driven programming, a main loop listens for events, and then triggers a *callback function* that performs some action.

It is quite interesting! I have already worked with Arduino, and it is very nice to find out that JavaScript has a somewhat reminiscent philosophy. 

Something nice about JS is the possiblity of **asynchronous execution**. Usually, elementary programs are executed from top to bottom, sequantially. If a computationally extensive task is executed before an important task, the program gets stuck, and delay might become intolerable for an app user.

> Asynchronous execution means *pulling* a concurrent/parallel thread for a desired task, so that the main program and the task are executed at the same time.

At this stage, I kinda get the feeling of this two ideas, but only practice will lead to real interiorization.

### Setting up NodeJS And NPM

> NodeJS is a tool for running JavaScript progrmas on desktops/servers. ON the other hand, NPM is a package manager for NodeJS.

I have experimented installing NodeJS with brew, graphical installer, and so on. However, I found that it is better to use ```nvm```. So, I installed this NodeJS version manager. It is not as direct as installing Node with Homebrew, yet it's not rocket science. I went to the [official website](https://github.com/nvm-sh/nvm#about), and followed installation instructions.

> It usually doesn't work at once. However, I made it work by restarting the terminal, and running the command
>```bash
> source ~/.mvm/nvm.sh
>```
> This command I had to include on my terminal profile file.

Installation of ```nvm``` can be checked by running the command
```bash
command -v nvm
```

Then, installing NodeJS only requires executing the command

```bash
nvm install node
```

It will install the latest stable version of NodeJS. The installation can be checked by running the command

```bash
node -v
```

**Note:** Current environment version of NodeJS can be accessed using ```nvm list```.

### Setting Up a Web App Project

The first step is to specify all packages and dependencies on a ```package.json``` file. This has at least three advantages:

1. It documents dependencies.
1. It specifies packages versions.
1. It allows reproducibility.

Among other things, it contains a set of metadata about the project itself, included scripts and associated git repos. To initialize ```package.json```, use command

```bash
npm init
```

And follow the instructions by providing the required information. If a field is irrelevant or unknown, just leave it empty. Now, I installed the package ```lite-server```, that allows visualization of changes in the web app in real time. I did this by running the command

```bash
npm install lite-server --save-dev
```

**Important:** The ```--save-ved``` saves the changes to the project manifest in ```package.json```. It is a development dependency, not a direct dependency of the project. For *direct dependencies* use ```--save```.

The importance of this procedure is that, when creating a more complex project, I will be able to recreate it on any server by just installing the dependencies. I would not like to commit all the files to the project repo, only the ones created by me.

To actually visualize a web app in my browser, I had to set up the manifest to include some usefull commands. So, I went to ```package.json```, and modified the *scripts* section as follows:

```json
"scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server"
  },
```

That way, I can serve my website locally using the command

```bash
npm start
```

