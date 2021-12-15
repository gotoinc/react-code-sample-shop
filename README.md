# **React code sample shop**

**React code sample shop** is a site where you can order food (pizza), select the quantity and pay in the basket.
The project is made using technologies such as *ReactJs*, *Typescript*, *Redux*, *SCSS/SASS-preprocessor*, also the application is covered with tests(*React testing library*).

![website](./src/assets/img/website.jpg)

# **Project set up description**

#### You will need to have npm and node installed and setup on your machine to run the application.

1. `git clone https://github.com/gotoinc/react-code-sample-shop.git`

2. `cd react-code-sample-shop`

3. `yarn install`

4. `yarn server`

5. `yarn start`

6. also your package.json should have a line `"proxy": "http://localhost:3001"`
   if not, add it to the root configuration object
   **this is only needed for local deployment of the project. You should only have this line locally. Please don't push it to git.**

## `Runs the app in the development mode.`

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## `Run the JSON Server.`
### JSON Server is a Node Module that you can use to create demo REST JSON services within a short span of minutes

```
yarn server
```

## `Launches the test runner in the interactive watch mode.`

```
yarn test
```

## `Builds the app for production`
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

```
yarn build
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies *(webpack, Babel, ESLint, etc)* right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

```
yarn eject
```


# **Technologies**

 - ReactJs + hook
 - React Router
 - Redux
 - Redux thunk
 - json-server
 - Axios

# **Project structure**

* react-code-sample-shop/
   * yarn.lock
   * server.ts
   * README.md
   * Procfile
   * package.json
   * .prettierignore
   * .gitignore
   * .history/
   * node_modules/
   * src/
      * main files and folders of the application
   * public/
      * db.json
      * favicon.ico
      * index.html

### `src/`

This is the root folder of the application. It contains many files and folders
Basic files inside a folder:

1. **index.ts** - application root file

2. **App.tsx** - file with routings. All pages of the application are connected to it


Folders inside the src:

### `scss/`

 Contains all styles of the application. Contains a separate file for fonts, colors, root style file. And folders with styles for individual parts of the application

### `redux/`

Сontains store.ts - storage configuration file and three folders:

**actions** - folder with all action files.

**selectors** - folder with all selector files.

**reducers** - folder with all reducers files. The main file in the folder is index.ts. All reducers are combined in index.ts file

### `__tests__/`
contains files of all tests of the applications

#### coverage of components with tests using *React Testing Library*

![tests](./src/assets/img/test.jpg)

### `pages/`

contains files of all pages of the application

### `components/`

contains files of all components of the application

### `assets/`

contains two folders:

**fonts** - contains font files

**img** - contains all images that are used in the project
