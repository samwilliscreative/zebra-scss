# Zebra - a customisable CSS grid system
Just like a Zebra's stripes, every website is unique, and so we've created a grid system that can be tailored to your individual projects needs through built in SASS variables.

Zebra provides you with a varying number of CSS classes (depending on what [settings][1] you choose), based on the [BEM][2] methodology, that you can quickly incorporate into any project.

This dynamic approach allows Zebra to output just the CSS that you require, without the extra fluff that most pre-built grid systems come with.

## Getting started
It's really easy to get started with Zebra, either include the `/dist/css/zebra.css` file in your `<head>`, or import `/src/sass/_zebra.scss` into your SASS project to take advantage of Zebras' customisation options.
```html
<!-- Add this to your HTML -->
<link rel="stylesheet" type="text/css" href="/css/zebra.css">

<!-- OR add this to your site.scss -->
@import '/src/sass/_zebra'
```
**Remember to update the file paths to match your project structure.**

Now you just need to create an element with the class of `row` and add your columns within.
```css
<div class="row">
	<div class="col--2of12">A column that spans 2/12 of the parent</div>
	<div class="col--6of12">A column that spans 6/12 of the parent</div>
	<div class="col--4of12">A column that spans 4/12 of the parent</div>
</div>
```

## What is Zebra?
Based on the BEM methodology.

Base columns follow a slightly simplified version of the BEM methodology, combining the properties of `.col` (a block) with it's size `.col--XofX` (a modifier). This is done for a couple of reasons; 

1. Firstly, there should never be an instance where a column element doesn't have a size modifer, as this would result in a column with no width.
2. Secondly, this helps to keep the DOM cleaner, as there are less classes littering each element.

```css
<div class="col--1of2">Zebra's simplified column classes</div>
<div class="col col--1of2">Typical BEM usage</div>
```

## Version History
Current Version: 1.0.0

| Version | Release    |
|---------|------------|
| [1.0.0][v1.0.0]   | 21/01/2017 |

[1]: https://github.com/swillis93/zebra/wiki/Settings
[2]: http://getbem.com/introduction
[v1.0.0]: https://github.com/swillis93/zebra/releases/tag/1.0.0