function setMargins() {
	const element = document.getElementById("anchor");
	let position = element.offsetLeft;
	console.log(position)
	let root = document.documentElement;
	root.style.setProperty('--WINDOW-X-SPACE', position + "px");

}