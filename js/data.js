var xmlDoc;
function olh(e)
{
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			console.log(xmlDoc = xhr.responseText);
		} else {
			console.error(xhr.statusText);
		}
	}
}
function getItems(filename, element)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "./data/" + filename, true);
	xhr.onload = olh;
	xhr.send();
}