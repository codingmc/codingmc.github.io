"use strict";

/*

This code is the drag and drop system from the project.

*/

/*     DRAGGED     */
function dragStart(e)
{
	var item = e.target;
	item.id = "dragged";

	document.getElementById("editor").className = "dragging";
	e.stopPropagation();
}
function dragEnd(e)
{
	var item = document.getElementById("dragged");
	if (item) item.id = "";

	document.getElementById("editor").className = "";
	e.stopPropagation();
}



/*     DROPPED     */
function allowDrop(e)
{
	e.preventDefault();
}
function dragOver(e)
{
	e.preventDefault();
	if (e.target.getAttribute("data-dragEnabled") == "true")
	{
		e.target.setAttribute("data-hover", "true");
	}
	e.stopPropagation();
}
function dragLeave(e)
{
	e.preventDefault();
	
	var h = document.querySelector('#editor .hopper[data-adding="true"]');
	if (h) h.removeAttribute("data-adding");

	e.target.setAttribute("data-hover", "false");


	e.stopPropagation();
}

/* most important functions (all the drop handelling) */
function addItem(source, target)
{
	//<div id="lel" class="item" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)">Testing</div>
		//make element
	var item = source.cloneNode(true);
	//item.id = idGenerator.getId().toString();

	//<div class="hopper" ondrop="drop(event)" ondragover="dragOver(event)" ondragleave="dragLeave(event)"></div>
		//make element
	var hopper = document.createElement("div");
	hopper.className = "hopper";
	hopper.setAttribute("data-dragEnabled", "true");

		//set events
	hopper.setAttribute("ondrop", "drop(event)");
	hopper.setAttribute("ondragover", "dragOver(event)");
	hopper.setAttribute("ondragleave", "dragLeave(event)");

	if (source.getAttribute("data-output") == "true")
	{
		item.appendChild(hopper.cloneNode(false));
	}

	//add items
	target.parentNode.insertBefore(item, target);
	target.parentNode.insertBefore(hopper, item);
}

function drop(e)
{
	e.preventDefault();
	dragLeave(e);

	var item = document.getElementById("dragged");
	if (item) item.id = "";
	
	var target = e.target;
	target.setAttribute("data-adding", "true");

	if (document.getElementById("editor").contains(item))
	{
		if (target.previousSibling !== item && target.nextSibling !== item)
		{
			if (target.id == "trash")
			{
				//remove item and hopper
				item.parentNode.removeChild(item.previousSibling);
				item.parentNode.removeChild(item);
			}
			else if (!item.contains(target))
			{

				//move the item and the hopper on top of him
				var s = item.previousSibling;
				target.parentNode.insertBefore(item, target);
				target.parentNode.insertBefore(s, item);
			}
		}
	}
	else if (target.id != "trash")
	{
		addItem(item, target);
	}

	e.stopPropagation();
}