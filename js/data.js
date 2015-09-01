function getItems(filename, element)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "./data/" + filename, true);
	xhr.onload = function (e) {
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			console.log(xhr.responseText);
		} else {
			console.error(xhr.statusText);
		}
	}
};
	xhr.send();
}