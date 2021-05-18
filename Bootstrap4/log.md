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

> NodeJS allows development of UI logic, and even design, as well as business logic and more back-end development, with JavaScript.

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

**data:** 17/05/21
**topic:** NodeJS and Bootstrap4

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

**Super Important:** Avoid committing all changes in your repo. In particualr, the directory ```node_modules``` should be excluded by putting it's name on a ```.gitignore```.

## Introduction to Bootstrap4

Bootstrap is a Front-End Web UI Framework, that integrates with a web app set up with NodeJS.

> In general, a **Front-End Web UI Framework** is a collection of templates for UI elements, such as buttons, tables, menus, typography, etc.

Some of the best reasons for using a framework of this type are:

1. They allow **responsive design**. That is, the website will look good even on movile devices.
1. They solve **cross-compatibility** between browsers (for most cases).
1. They increase **productivity** since provide HTLM and CSS templates for DOMs.
1. They tend to have a **large community support**.

The most popular front-end UI framework is Bootstrap. It is bases on HTML, CSS and JS. The course I'm taking provided a starter page that corresponds to some restaurant. I downladed it to get started with Bootstrap.

The first step is to install the required packages from the project manifest. This is done by running

```bash
npm install
```

**Super important:** This course I am taking is on Bootstrapp4. It is not the latest release, but it'll have to do for now. Eventually, the concepts are the same and it will be a matter of learning the updated API.

To install Bootstrap and its dependencies, run the following command

```bash
npm install jquery@3.3.1 popper.js@1.12.9 bootstrap@4.0.0 --save
```

After this, to enable bootstrap on the website, it is necessary to provide the following instructions in ```index.html```, inside the head

```html
<!-- Required metatags always comes first -->
<meta charset="utf-8">
<!-- For responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<!-- Link stylesheet Bootstrap CSS -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

Always keep in mind that the path of the Bootstrap style file is ```node_modules/bootstrap/dist/css/bootstrap.min.css``` for this particular version.

Bootstrap has also JS templates and classes that can be use if needed. This also have to be included on ```index.html```. However, the good practice is to do that at the bottom of the file. This yields more effcient redering and creates a better user experience. This has to be done right before the end of the body:

```html
<!-- jQuery first, then Popper.js, then Bootstrap JS. -->
<script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
<script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

It is very important that the scripts be included in the above order, since Bootstrap depends on JQuery and pooper.js.

After saving the changes, it can be seen that Bootstrap styling is loaded. The font changes from Times New Roman to Helvetica Neue. And the fontsize is adjusted depending on the type of text (heading, paragraph, etc.).

### Responsive and Bootstrap Grid

Nowadays, most users view a webpage's content from a wide variety of devices: from smartphones and tablets, to desktops with different screen outputs. As a result, a web designer must take the approach that a web page's content must adapt to the screen limitations of the user device. To do this, two paradigms have emerged in web design: **responsive** and **mobile-first** design.

Responsive design means that the styling classes adapt to screen constraints automatically. This can be done by using some UI Frameworks, or by hand. Mobile-first means that the designer considers the smallest available screen for an user, proposes a content layout, and then extends the design to emcompass larger screens.

> Bootstrap is a responsive design mobile-first front-end UI framework.

Responsive design has three elements (at least):

1. **Grid Systems**
1. **Fluid images**
1. **Media Queries**

The former is a common CSS tool. They can be performed by the sintax:

```css
@media(min-width: someValInPixels){
    /*
    Define styling of
    different classes.
    */
}
```

Grid system and fluid images are managed by frameworks like Bootstrap. The grid system is based upon **rows and columns**. The class **container** defines the canvas in which everything is to be layed out. Now, inside this class, rows can be stacked, which contain 12 columns by default.

> Bootstrap is responsive and mobile-first. Thus it automatically redistributes content according to media queries that leverage CSS Flexibox.

The main container adapts according to three types of screens:

|Screen Size | Pixels | Class
|:-:|:-:|:-:|
| Extra small | (<576px) | ```.col-*``` |
| Small | (≥576px) | ```.col-sm-*``` |
| Medium | (≥768px) | ```.col-md-*``` |
| Large | (≥992px) | ```.col-lg-*``` |
| Extra large | (≥1200px) | ```.col-xl-*```  |

I understand that the convention is to stack everything on top for extra small screens, and then actually using the columns if the widh allows it. To specify the threshold size for which the layout uses Bootstrap columns, one must specify the class of the columns acording to de convention specified in the list above.

**Important:** The asterisk may be substituted by the number of columns that the division is supposed to take.

There are several classes and subclasses that specify the type of alignment of the columns, both vertical and horizontal, as well as automatic sizing w.r.t. content. A sample layout can be:

```html
<div class="container">
    <div class="row">
        <div class="col-sm">
            <p>Hello world</p>
        </div>
        <div class="col-sm">
            <p>Hello world</p>
        </div>
        <div class="col-sm">
            <p>Hello world</p>
        </div>
    </div>
</div>
```

It is quite important to remember that Bootstrap always makes use of 12 columns by default. If the screen size changes, what is readjusted is the size of the columns. Furthermore, rows have a size that is consistent with the largest content inside its divisions.

**Super important:** Rows can be nested! This is awesome, for then more flexibility can be obtained in the design.

> Most of the documentation can be found readily at the [official website](https://getbootstrap.com/docs/4.0/layout/grid/). Here, CSS classes for styling, as well as the classes for the grid system can be consulted.

### Custom CSS Classes and Bootdstrap

It is possible to extend Bootstrap classes and define new classes on stylesheets by just including it on the ehad of ```index.html```. There is no problem at all.

> A concise guide of CSS class properties can be found [here](https://www.tutorialrepublic.com/css-reference/css3-properties.php).

