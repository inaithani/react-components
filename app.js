require ('./css/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Navigation from './components/Navbar/Navbar.js';
import Heading from './components/Heading.js';
import Blurb from './components/Blurb.js';
const bg_img = require ('./images/bg.jpg');



// JS Mount Nodes
var headerMountNode = document.getElementById ("header");
var welcomeMountNode = document.getElementById ("welcome");
var statementMountNode = document.getElementById ("personal-statement");
var statementBlurbMountNode = document.getElementById ("blurb-personal");
var welcomeBlurbMountNode = document.getElementById ("blurb-welcome");

const $backgroundNode = $("#bg-holder");

$backgroundNode.css("min-height", $(window).height() );
$backgroundNode.css("background-image", 'url(' + bg_img + ')');
$("#bg-overlay").css("min-height", $(window).height() );



//Mock Data
var items = [
	{
		text: 'LINK1',
		href: "#home"
	},
	{
		text: 'LINK2',
		href: "#work"
	},
	{
		text: 'LINK3',
		href: "#resume"
	}
];

// Render Calls
ReactDOM.render(<Navigation navigationID = "ishan-folio-navigation" items = {items} />, headerMountNode);
ReactDOM.render(<Heading text = "Section Component"/>, welcomeMountNode);
ReactDOM.render(<Heading text = "Section Component"/>, statementMountNode);

ReactDOM.render(<Blurb text = "Test String"/>, statementBlurbMountNode);
