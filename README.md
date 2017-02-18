[![GitHub version](https://badge.fury.io/gh/swillis93%2Fzebra.svg)](https://github.com/swillis93/zebra/releases)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-blue.svg)](https://badge.fury.io/gh/swillis93%2Fzebra)

# Zebra - a customizable CSS grid system
Just like a Zebra's stripes, every website is unique, and so we've created a grid system that can be tailored to your individual project requirements.



## What is Zebra?
Zebra is a CSS grid system based on the [BEM][bem] methodology, that can be customized through the modification of built in SASS variables. Zebra provides a varying number of CSS classes (depending on what [settings][settings] you choose) that allow you to quickly add rows and columns to your project.

Base columns follow a slightly simplified version of the BEM methodology, combining the properties of `.col` (a block) with it's size `--XofX` or `--auto` (modifiers). This keeps your DOM cleaner, as classes have been combined when possible.

```css
<div class="col--3of12">Zebra's simplified column classes</div>
<div class="col col--9of12">Typical BEM usage</div>
```



## Getting started
It's really easy to get started, you can either install via NPM, or download and include the files manually.
### NPM
```
npm install zebra-scss
```

### Manually
Include the `/dist/css/zebra.min.css` file in your `<head>`, or copy the `/src/sass/_zebra.scss` and `/src/sass/_zebra-settings.scss` files into your SASS project to take advantage of Zebra's customization options.
```html
# Add this to your head
<link rel="stylesheet" type="text/css" href="/css/zebra.min.css">

# OR copy the _zebra files into your SASS project and add this to your site.scss
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
[settings]: https://github.com/swillis93/zebra/wiki/Settings
[swillis]: http://swillis.co.uk
[wiki]: https://github.com/swillis93/zebra/wiki
