# Notes


## Doelgroepen en a11y

doelgroepen van je website/webapplicatie

- de "gewone" mens met werkende ogen
- zoekmachines (google)
- slechtzienden / blinden   (schermlezer)
  => a11y: accessibility

HTML is voor structuur en voor inhoud.



Native elementen hebben accessibility built-in.

<input>
<header>

Custom componenten niet.

<jouw-component> // Angular Vue React

l3s
c4i
j0p

k8s
i18n
l10n



IE marktaandeel > 90%
Deze site is best bezocht met resolutie 1200x800

### Guidelines

ARIA - Accessible Rich Internet Application

WAI-ARIA - Web Application Initiative
WCAG - Web Content Accessibility Guidelines

<div aria-hidden="true">

### Waar je tijd aan kwijt bent

- designen voor allerlei devices
- vertalen naar html/css
- a11y
- het complete gedrag van je applicatie (JS/TS)


## CSS-frameworks

CSS-frameworks

- Bootstrap
- Materialize
- Paper.css
- Animate.css
- Foundation
- Bulma

zie ook [State of CSS](https://stateofcss.com/)

"framework"

Angular - framework
React/Vue - libraries

library - utilities
framework dwingt jou op een bepaalde manier te werken

Met een CSS-framework moet je ook vaak conformeren aan de class-opzet die zij definiëren


## Trusted tokens??

JSON Web Tokens  "jot" - geld

single-sign on
claims-based authentication/authorization

vaak gebruikt bij single page applications

- local storage - XSS
- globale JS variabele - XSS
- cookies - HttpOnly - XSRF
- TRUST TOKENS???




## BEM

Block-Element-Modifier

al jouw selectors zijn classes.

#id no no no
body {} no no no

```css
.block__element--modifier { }
.dashboard__panel--warning {}
.dashboard__panel {}
.dashboard--warning {}
.btn {}
.btn--success {}

.nav__nav-item {}
.nav__nav-item--active {}
```

```html
<nav class="nav">
	<ol>
		<li class="nav__nav-item"><a ...></a></li>
		<li class="nav__nav-item"><a ...></a></li>
		<li class="nav__nav-item nav__nav-item--current"><a ...></a></li>
		<li class="nav__nav-item"><a ...></a></li>
	</ol>
</nav>
```

waarde wordt minder met component-gebaseerd development waar je CSS gescoped is:

Angular
React
Vue
Web Components (met LitElement bijv.)

## CSS preprocessors

- Sass - SCSS - Syntactically Awesome StyleSheets - SuperCSS
- Less
- Stylus
- PostCSS

Preprocessors zijn ook erg fijn met BEM

Sass komt in 2 smaken


sass-syntax (Ruby-like syntax)

```sass
body
	font-family: sans-serif
	color: white

h1
	font-size: 4rem
```

SCSS
```scss
body {
	font-family: sans-serif;
	color: white;
}

h1 {
	font-size: 4rem;
}
```

Less body { }


SCSS ===> compile ===> CSS

Node.js en npm
- serverside platform
- JavaScript runtime

Node.js     - Java             - .NET
JavaScript    Java                C#
npm           Maven/Ivy/Gradle    NuGet


## Preprocessors en builden

**streaming build systems**

- Grunt
- gulp

**module bundlers**

- webpack
- rollup
- parceljs
- (heul nieuw) (nog niet eens af)

Babel - JavaScript transpiler   (nieuw JS => oud JS)
ESLint - Code quality checker / formatten
webpack - module bundler
Prettier - formatter
Jest - testrunner/testframework

and others.

## JavaScript APIs

### `querySelector`

Vroegah:
```js
let content = document.getElementById('content');
let specials = content.getElementsByClassName('special');
for(let special of specials) {
	special.getElementsByTagName('h1');

}
// jQuery
$('#content .special > h1.dinges').addClass('...');
```

sizzle.js

nu:

```js
document.querySelector('#content .special > h1.dinges')
```

### Geolocation

Manieren om locatie te bepalen:

- IP-adres
- GPS  ~8 meter  1 meter
- Telefoonmasten  600 meter
- WiFi


## "web development"

websites   (jas aantrekken)
- jQuery
- WordPress   (Content Management System)
- zo min mogelijk custom code
- mbo'ers (with all due respect of course)
- PHP
- informatief - interactieve deel is een contactformulier


webapplicaties   (jas maken)
- jQuery is een grote no-no  (oude applicaties best, maar nieuw?)
- 10 jaar lang elke dag/week doorontwikkeld
- Preprocessor
- Methodologie
- Veel custom code
- belastingaangifte
- CMS  EMS  Enterprise Content Management System

## inner

.innerText
.innerHTML
.textContent

## JavaScript for


for...in

for (let prop in obj) {

}

for (let prop of Object.keys(obj)) {

}

for (let item of iterable) { // Symbol.iterator

}

// AngularJS
<tr ng-repeat="item in lijstje">

// Angular
<tr *ngFor="let item of lijstje">


## PRPL



Push critical resources
Render initial page
Pre-cache additional routes
Lazy-load the other stuff

PWA / SPA

## Web Sockets

- chatten
- multiplayer gaming
- IoT  dashboard
- poll
- nieuws / fake nieuwswebsites nu.nl facebook twitter
- thuisbezorgd/domino's
- stackoverflow (2008)
- google docs   - no polling

realtime communicatie

WebSocket-protocol: HTTP => handshake => TCP

## Web Components

<app-autocompleter></app-autocompleter>

vue react angular

AngularJS       Angular

Web Components

webcomponent "self-containing"

"microservices frontend"
