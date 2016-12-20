# Zebra - a CSS grid system without the fluff
This is a grid system at it's rawest. Zebra simply provides you with a number of premade CSS classes which you can use to quickly add structure to a website.

## Usage Examples
It's really easy to get started with Zebra, just create an element with the class of `row`, and then add your column elements within.
```css
<div class="row">
	<div class="col--1of6">A column that spans 1/6 of the parent</div>
	<div class="col--3of6">A column that spans 1/2 of the parent</div>
	<div class="col--2of6">A column that spans 1/3 of the parent</div>
</div>
```

```css
<div class="row row--flex">
	<div class="col--1of6">This column will be taller than the rest due to extra content</div>
	<div class="col--3of6">Lorem ipsum dolor sit amet</div>
	<div class="col--2of6">Lorem ipsum dolor sit amet</div>
</div>
```

Blank rows will automatically keep their width, as there are no floats used.
```css
<div class="row">
	<div class="col--1of6"></div>
	<div class="col--3of6">This column starts 1/6 of the way across the row</div>
	<div class="col--2of6">Lorem ipsum dolor sit amet</div>
</div>
```

## What is Zebra?
Based on the BEM methodology.
Column classes follow a slightly modified version of BEM, where you are only required to add the block with modifier class rather than a block AND a block with modifier.
```css
<div class="col col--1of2">Typical BEM usage</div>
<div class="col--1of2">Zebra's efficient columns</div>
```

Whilst websites from the early days of the web were often restricted to using a 960px grid and tables, current technology allows designers and developers infinitely more freedom when it comes to structuring a page.

This results in designs that no longer follow a set grid, with elements often containing their own grid

Just like a Zebra's stripes, every website is unique.


Whilst most modern grid systems are implementing more and more advanced features, Zebra is taking a more stripped back approach. You won't find set column gutters or margins, and there are only a few column sizes that have responsive behaviour built in by default.