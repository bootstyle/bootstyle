Bootstyle
=========

Bootstyle is a sexy Bootstrap Customizer.

# The Big Idea

Bootstyle intends to be a user friendly Twitter Bootstrap customizer for developers and designers alike.

## Controls

Tweak your theme with color pickers, sliders and inputs that accept and compile LESS or CSS.

Use intelligent controls like Auto Color, which automatically picks a great overlaying light or dark font color as you change background colors.

Select from the most popular Google Fonts or stick with web safe standards.

## HTML Editor

Bootstyle's main page is totally customizable.  Change the default HTML with the built in HTML editor.  Paste in your template to see what your theme looks like on your actual site.

## Live Preview

Your changes are rendered live in the app, so you can exactly what your theme looks like as you are creating it.

## Download

Download your `bootstyle.less` and add it to your head.  That's it, you've customized Bootstrap.

# Hacking

## Setup

Setup is a breeze:

1. `npm run setup`

### What just happened?

This does a few things.  See `scripts.setup` in `package.json`.

1. `npm i gulp -g` - installs [gulp](https://github.com/gulpjs/gulp) globally
2. `npm install` - installs all Bootstyle's node modules, things like local [gulp](https://github.com/gulpjs/gulp), [Browserify](https://github.com/substack/node-browserify), [Protractor](https://github.com/angular/protractor), see [package.json](https://github.com/levithomason/bootstyle/blob/master/package.json) for all dependencies.
    - `postinstall`: `bower install` - installs all our browser components, things like [AngularJS](https://github.com/angular/angular), [LESS](https://github.com/less/less.js), and [Twitter Bootstrap](https://github.com/twbs/bootstrap).
3. `webdriver_update` - downloads the latest [Selenium Webdriver](https://code.google.com/p/selenium/wiki/WebDriverJs) for [Protractor](https://github.com/angular/protractor) (facilitates e2e tests).
4. `gulp`
    - `copy-bower-components`: copies all bower assets to `/app`
    - `build`: creates a build in `/build'
    - `watch`: watches all files for changes, does incremental builds, and reloads the browser
    - `serve`: starts the dev server at `localhost:8000`
    - `open`: opens a browser for you

## Tests

### E2E

Bootstyle uses [protractor.js](https://github.com/angular/protractor) for e2e tests.

**E2E**: 'gulp e2e'  
    Ensures webdrivers are up to date then runs protractor

**Protractor**: 'gulp protractor'  
    '--debug': runs in [debug mode](http://angular.github.io/protractor/#/debugging)  
    '--suite <name>': run a single suite of tests defined in protractor.conf.js  

**Interactive Protractor**: 'gulp iprotractor'  
    A live [interactive](http://angular.github.io/protractor/#/debugging#testing-out-protractor-interactively) browser with CLI access to `browser`, `element`, and `protractor`
    *Note: requires the dev server and selenium server to be running*
