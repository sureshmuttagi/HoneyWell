# angularjs-starter-i18n

>More details about the styles and patterns used in this app can be found in [Angular Style Guide](https://github.com/johnpapa/angularjs-styleguide).
## Prerequisites

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install gulp
   npm install gulp -g

3. Install bower
   npm install bower -g    

4. Install yarn
   npm install yarn -g

5. Install babel-cli ( npm install -g babel-cli@6.26.0)

6. Clone this repo and navigate to folder and run these commands
   ### Installing Packages
   - `yarn install` (npm install)
   - `bower install`

## Running Revamp

### Linting
 - Run code analysis using `gulp vet`. This runs jshint, jscs, and plato.

### Tests
 - Run the unit tests using `gulp test` (via karma, mocha, sinon).

### Running in dev mode
 - Run the project with `gulp serve-dev`

 - opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the build folder

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`

## Exploring angularjs-starter-i18n
angularjs-starter-i18n

### Structure
The structure also contains a gulpfile.js and a server folder. The server is there just so we can serve the app using node. Feel free to use any server you wish.

	/src
		/client
			/app
			/images
            /mockdata
            /resource
            /styles
            /test-helpers


### The Modules

app --> [
		app.core --> [
			ngAnimate,
            ngSanitize,
            ui.router,
            ngplus,
            ngMaterial
		],
        app.layout --> [
            app.core
        ]
    ]
```

#### core Module
Core modules are ones that are shared throughout the entire application and may be customized for the specific application. Example might be common data services.

This is an aggregator of modules that the application will need. The `core` module takes the blocks, common, and Angular sub-modules as dependencies.

## Gulp Tasks

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

- `gulp plato`

    Performs code analysis using plato on all javascript files. Plato generates a report in the reports folder.

### Testing

- `gulp serve-specs`

    Serves and browses to the spec runner html page and runs the unit tests in it. Injects any changes on the fly and re runs the tests. Quick and easy view of tests as an alternative to terminal via `gulp test`.

- `gulp test`

    Runs all unit tests using karma runner, mocha, chai and sinon with phantomjs. Depends on vet task, for code analysis.

- `gulp test --startServers`

    Runs all unit tests and midway tests. Cranks up a second node process to run a server for the midway tests to hit a web api.

- `gulp autotest`

    Runs a watch to run all unit tests.

- `gulp autotest --startServers`

    Runs a watch to run all unit tests and midway tests. Cranks up a second node process to run a server for the midway tests to hit a web api.

- `gulp e2e`

    Runs a application using Selenium and executes protractor integration test cases.


### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders

- `gulp clean-images`

    Remove all images from the build folder

- `gulp clean-code`

    Remove all javascript and html from the build folder

- `gulp clean-fonts`

    Remove all fonts from the build folder

- `gulp clean-styles`

    Remove all styles from the build folder

### Fonts and Images

- `gulp fonts`

    Copy all fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS, add vendor prefixes, and copy to the build folder

### Bower Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.

    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.

- `gulp serve-dev --nosync`

    Serves the development code without launching the browser.

- `gulp serve-dev --debug`

    Launch debugger with node-inspector.

- `gulp serve-dev --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp optimize` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.

- `gulp serve-build --nosync`

    Serve the optimized code from the build folder and manually launch the browser.

- `gulp serve-build --debug`

    Launch debugger with node-inspector.

- `gulp serve-build --debug-brk`

    Launch debugger and break on 1st line with node-inspector.

### Bumping Versions

- `gulp bump`

    Bump the minor version using semver.
    --type=patch // default
    --type=minor
    --type=major
    --type=pre
    --ver=1.2.3 // specific version

## License

MIT