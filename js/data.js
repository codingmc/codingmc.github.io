"use strict";

var xhr = null;
var xmlDoc = null;
function olh(e)
{
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			console.log(xmlDoc = xhr.responseXML);
		} else {
			console.error(xhr.statusText);
		}
	}
}
function getItems(filename, element)
{
	xhr = new XMLHttpRequest();
	xhr.open("GET", "./data/" + filename, true);
	xhr.onload = olh;
	xhr.send();
}