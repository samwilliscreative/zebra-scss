# Zebra - a CSS grid system without the fluff
Zebra aims to provide developers of all skill levels with an easily accessible yet powerful set of grid classes that can be quickly implemented into new or existing projects.

## Getting started
It's really easy to get started with Zebra, firstly include the `zebra.css` file in your `<head>`, or rename the 'zebra.scss' to `_zebra.scss` and include the `it with your SASS partials.
```html
<-- Add this to your HTML -->
<link rel="stylesheet" type="text/css" href="/css/zebra.css">
<!-- OR add this to your site.scss -->
@import '_zebra'
```
Remember to update the file paths to match your project structure.
Now you just need to create an element with the class of `row`, and then add your columns within.
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

## Usage examples
### Rows
There are currently 3 row classes that you can use;

| Class             | Type     |
|-------------------|----------|
| `.row`            | block    |
| `.row--contained` | modifier |
| `.row--flex`      | modifier |

#### `.row`
All row elements must include this class, as it contains the base styles that allow the child columns to work correctly.
```css
<div class="row">
</div>
```

#### `.row--contained`
This modifier can be added to any row elements to prevent them from stretching the full width of the page. The max width is dictated by the `$site-width` setting.
```css
<div class="row row--contained">
	<!-- This now has a max-width -->
</div>
```

#### `.row--flex`
To make your column heights match, you can add the `row--flex` class to your `.row` element.
```css
<div class="row row--flex">
	<div class="col--1of3">This column will be taller than the rest due to extra content within it</div>
	<div class="col--1of3">Lorem ipsum dolor sit amet</div>
	<div class="col--1of3">Lorem ipsum dolor sit amet</div>
</div>
```

### Columns
There are a number of column classes that you can use;

| Class               | Type                |
|---------------------|---------------------|
| `.col--XofX`        | block + modifier    |
| `.col--offset-XofX` | modifier            |
| `.col--push-XofX`   | modifier            |
| `.col--pull-XofX`   | modifier            |
| `.col--flex-col`    | modifier            |
| `.col--flex-row`    | modifier            |

#### `.col--XofX`
All column elements must include this class, as it contains required base styles, as well as the size modifier. The class name defines the size of your column, so `.col--3of12` would create a column that spans 1/4 of the page.
*By default, Zebra includes classes for 1, 2, 3, 4 and 12 columns, but different amounts can be added by modifying the `$columns` setting.*
```css
<div class="col--XofX">
</div>
```

#### Offset/blank columns
To create a space before a column, you can either use an empty column element, or a column offset class (`col--offset-XofX`).

```css
<div class="row">
	<div class="col--1of3"></div>
	<div class="col--1of3">This column starts 1/3 of the way across the row</div>
	<div class="col--1of3">Lorem ipsum dolor sit amet</div>
</div>

<div class="row">
	<div class="col--1of3 col--offset-1of3">This column starts 1/3 of the way across the row</div>
	<div class="col--1of3">Lorem ipsum dolor sit amet</div>
</div>
```

## Settings
These settings variables are all stored at the top of the zebra.scss and can be modified for your project.

| Setting         | Type    | Default     | Description |
|-----------------|---------|-------------|-------------|
| $site-width     | string  | 1400px      | The max width of your site, used in the `row--contained` class. |
| $columns        | list    | 1, 2, 3, 4, 12 | Each number represents the number of columns that a row will be split into. |
| $enable-offset  | boolean | true        | Enable the generation of column offset classes. |
| $enable-push    | boolean | false       | Enable the generation of column push classes. |
| $enable-pull    | boolean | false       | Enable the generation of column pull classes. |

Whilst websites from the early days of the web were often restricted to using a 960px grid and tables, current technology allows designers and developers infinitely more freedom when it comes to structuring a page.

This results in designs that no longer follow a set grid, with elements often containing their own grid

Just like a Zebra's stripes, every website is unique.


Whilst most modern grid systems are implementing more and more advanced features, Zebra is taking a more stripped back approach. You won't find set column gutters or margins, and there are only a few column sizes that have responsive behaviour built in by default.

