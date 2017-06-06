[![GitHub version](https://badge.fury.io/gh/swillis93%2Fzebra.svg)](https://github.com/swillis93/zebra-scss/releases)
[![npm version](https://badge.fury.io/js/zebra-scss.svg)](https://www.npmjs.com/package/zebra-scss)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-blue.svg)](https://badge.fury.io/gh/swillis93%2Fzebra)

# Zebra - a customizable CSS grid system
Just like a Zebra's stripes, every website is unique, and so we've created a grid system that can be tailored to your own individual project requirements.



## What is Zebra?
Zebra is a customizable CSS grid system that aims to make it extremely easy for developers to create custom layouts. By default, Zebra comes precompiled so that you can get up and running with our base grid in a matter of minutes. Or for developers with more specific needs, there are currently over [30 Scss variables][settings] that can be modified to tailor the output CSS to your exact requirements.

Zebra's class naming structure draws largely from the [BEM][bem] methodology, but with a few differences:

Firstly columns rely on a `block` and `modifier` pair, combining the properties of both into a single class. The reasoning behind this is that there should never be an instance where a size isn't declared on a column, so having to add multiple column classes to an element is unnecessary.

```css
<div class="col--3-12">Zebra's simplified column classes</div>
<div class="col col--9-12">Typical BEM usage</div>
```



# The following information is now deprecated. An updated readme will be provided shortly




## Getting started
It's really easy to get started, either include the `/dist/css/zebra.css` file in your `<head>`, or copy the `/src/sass/_zebra.scss` and `/src/sass/_zebra-settings.scss` files into your SASS project to take advantage of Zebra's customization options.
```html
<!-- Add this to your head -->
<link rel="stylesheet" type="text/css" href="/css/zebra.css">

<!-- OR copy the _zebra files into your SASS project and add this to your site.scss -->
@import '/src/sass/_zebra'
```
*Remember to update the file paths to match your project structure.*

Now you just need to create an element with the class of `row` and add your columns within.
```css
<div class="row">
	<div class="col--2of12">A column that spans 2/12 of the parent</div>
	<div class="col--6of12">A column that spans 6/12 of the parent</div>
	<div class="col--4of12">A column that spans 4/12 of the parent</div>
</div>
```

For a more detailed usage guide, see the [wiki][wiki].



## Authors and Contributing
Contributions, either in code or constructive feedback, are welcome.

### Authors
[Sam Willis][swillis]



[bem]: http://getbem.com/introduction
[settings]: https://github.com/swillis93/zebra-scss/wiki/Settings
[swillis]: http://swillis.co.uk
[wiki]: https://github.com/swillis93/zebra-scss/wiki
