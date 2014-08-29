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

1. `npm install` - installs all our nodejs dependencies, things like [Grunt](https://github.com/gruntjs/grunt), [Browserify](https://github.com/substack/node-browserify), and [Protractor](https://github.com/angular/protractor).
    - postinstall: `$(npm bin)/webdriver-manager update` - downloads the latest [Selenium Webdriver](https://code.google.com/p/selenium/wiki/WebDriverJs) for [Protractor](https://github.com/angular/protractor) (facilitates e2e tests).
3. `bower install` - installs all our browser components, things like [AngularJS](https://github.com/angular/angular), [LESS](https://github.com/less/less.js), and [Twitter Bootstrap](https://github.com/twbs/bootstrap).
4. `grunt build` - copies and browserifies `app/` into `build/`.  `build/` is served on production and your local.
5. `grunt serve:dev` - for convenience, we start the dev server so you can get right to playing with the app!

## Tests

Bootstyle uses [protractor.js](https://github.com/angular/protractor) for functional testing.

**Run Tests**: `npm test`
