<script src="http://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.1.0/mustache.min.js"></script>
/ function which excutes on window loads
window.onload = function(){

const header = {
heading: "Bonvoyage.com",
buttonName: "Search"
};

var template = `
<h1>{{heading}}</h1>
<input type="text" placeholder="Search..">
<button>{{buttonName}}</button>
`;

var html = Mustache.to_html(template, header);

document.getElementsByClassName('header')[0].innerHTML = html;


const links = ['Home','Flights', 'cruises', 'Excursions', 'About Us', 'Contact Us'];

template = `
{{#links}}
<a href="#">{{ bonvoyage}}</a>
{{/links}}
`
// simalry add items
html = Mustache.to_html(template, {links});
document.getElementsByClassName('navbar')[0].innerHTML = html;
const items = {
title : 'FEATURED PRODUCTS',
subtitile : 'These are the featured products',
}
template = `
<h2>{{title}}</h2>
<h5>{{subtitile}}</h5>
{{#allItems}}
<div class="fakeimg" style="height:200px;">Image</div>
<p>{{name}}</p>
<p>{{summary}}</p>
<p>{{cost}}</p>
<br>
{{/allItems}}
`
html = Mustache.to_html(template, items);
document.getElementsByClassName('main')[0].innerHTML = html;
template = `
<h2>&copy;{{footer}}</h2>
`
const footer = "Copyright 2001 A & G Auto Sales."
html = Mustache.to_html(template, {footer});
document.getElementsByClassName('footer')[0].innerHTML = html;
// $('#sampleArea').html(html);
}