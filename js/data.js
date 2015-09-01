function getItems(filename, element)
{
	var request = new XMLHttpRequest();
	request.open("GET", "./data/" + filename, false);
	request.send();
	return request.responseXML;
}