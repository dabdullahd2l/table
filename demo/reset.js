import '@polymer/polymer/polymer-legacy.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="reset">
	<template>
		<style>
		html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend {
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-size: 100%;
background: transparent;
}
body {
line-height: 1;
}
ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
:focus {
outline: 0;
}
table {
border-collapse: collapse;
}
sub {
vertical-align: sub;
}
sup {
vertical-align: super;
}
a, a:hover, a:visited {
color: #000000;
text-decoration: none;
}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
