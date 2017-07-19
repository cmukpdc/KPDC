function hasclass(elem, c) {
	return (' ' + elem.className + ' ').indexOf(' ' + c + ' ') > -1;
}

function dropdown() {
	var dropdownlist = document.getElementById("opportunitiesdropdown")
	if (hasclass(dropdownlist, 'visibleOff')) {
		dropdownlist.classList.remove('visibleOff');
		dropdownlist.classList.add('visibleOn');
	}
	else {
		dropdownlist.classList.remove('visibleOn');
		dropdownlist.classList.add('visibleOff');
	}
}

function closedropdown() {
	var dropdownlist = document.getElementById("opportunitiesdropdown")
	if (hasclass(dropdownlist, 'visibleOn')) {
		dropdownlist.classList.remove('visibleOn');
		dropdownlist.classList.add('visibleOff');
	}

}