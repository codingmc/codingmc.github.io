"use strict";

var xhr = null;
var xmlDoc = null;
function setItems(xmlDoc, element)
{
	var item = xmlDoc.getElementById("Command").firstElementChild;

	while (item)
	{
		var div = document.createElement("div");
		div.className = "item";
		div.setAttribute("style", "background-color: red;");
		div.innerHTML = "<p>" + item.getAttribute("ref") + "</p>";

		var v = item.getAttribute("output");
		if (v == "-1")
		{
			div.setAttribute("data-friendly", "");
		}
		else if (parseInt(v) >= 3)
		{
			div.setAttribute("data-output", "");
		}

		element.appendChild(div);

		item = item.nextElementSibling;
	}
}
function getItems(filename, element)
{
	xhr = new XMLHttpRequest();
	xhr.open("GET", "./data/" + filename, true);
	xhr.onload = function (e)
	{
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(xmlDoc = xhr.responseXML);
				setItems(xmlDoc, element);
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xhr.send();
}