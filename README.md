[![GitHub version](https://badge.fury.io/gh/swillis93%2Fzebra.svg)](https://github.com/swillis93/zebra-scss/releases)
[![npm version](https://badge.fury.io/js/zebra-scss.svg)](https://www.npmjs.com/package/zebra-scss)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-blue.svg)](https://badge.fury.io/gh/swillis93%2Fzebra)

# Zebra - a customizable CSS grid system
Just like a Zebra's stripes, every website is unique, and so we've created a grid system that can be tailored to your own individual project requirements.



## What is Zebra?
Zebra is a customizable CSS grid system that aims to make it easier for developers to create custom layouts. By default, Zebra comes precompiled so that you can get up and running with our base grid in a matter of minutes. Or for developers with more specific needs, there are currently over [30 Scss variables][settings] that can be modified to tailor the output CSS to your exact requirements.

Zebra's class naming structure draws largely from the [BEM][bem] methodology, but with some differences to help suit a grid system rather than individual components. You can check the [wiki][wiki] for full documentation on the classes available, but for now, here is an example of how to create columns using the default output:
 
 ```css
<div class="row">
    <div class="col--3-12">This column spans 3/12ths</div>
    <div class="col--6-12">This column spans 6/12ths</div>
    <div class="col--3-12"This column spans 3/12ths></div>
</div>
```
 
 This is just a very basic example, but it gives an overview of the core parts of the grid system: `rows` and `columns`. As with most grids, columns must always be nested within rows. There are two reasons for this, firstly it helps keep your DOM structured and consistent, and secondly, the `row` class contains some vital properties needed for `columns` to work.
 
 Once you have a `row`, you can easily add columns within. Simply add elements and follow the class naming structure of `col--X-Y`, where `X` is the column span and `Y` is the total number of columns available (by default, Zebra offers 5, 8  and 12 as values for the total columns). Here you can see the influence of BEM, with `.col` being the base styling for a column, and `--X-Y` modifying the width. However, where a typical example of BEM would require both `.col` and `.col--X-Y` to be added to an element, Zebra combines the classes into one. This is because there should always be a width set on a column, meaning that there would never be an isntance of `.col` being used without a width modifier.
 
 This is just a very brief introduction of how to use Zebra, but there are many more features available such as responsive columns, spacer classes, grids and guttering, and more. For full documentation on what Zebra can do, take a look at the [wiki page][wiki].
 
 
 
 ## Get Zebra

Install with npm:

```
npm install zebra-scss
```

Next, either include the `/dist/css/zebra.css` file in your `<head>`, or copy the files from the `/src/sass` folder into your Scss project to take advantage of Zebra's customization options.

```html
<!-- Add a link to Zebra to your head -->
<link rel="stylesheet" type="text/css" href="/css/zebra.css">
 
<!-- OR copy the files within /src/sass into your Scss project and add this to your site.scss -->
@import '/src/sass/_zebra'
```
*Remember to update the file paths to match your project structure.*



## Authors and Contributing
Contributions, either in code or constructive feedback, are welcome.



### Authors
[Sam Willis][swillis]



[bem]: http://getbem.com/introduction
[inline-block-issues]: https://css-tricks.com/fighting-the-space-between-inline-block-elements
[settings]: https://github.com/swillis93/zebra-scss/wiki/02.-Settings
[swillis]: http://swillis.co.uk
[wiki]: https://github.com/swillis93/zebra-scss/wiki
