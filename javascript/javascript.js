function hasclass(elem, c) {
	return (' ' + elem.className + ' ').indexOf(' ' + c + ' ') > -1;
}

function dropdown() {
	var dropdownlist = document.getElementById("opportunitiesdropdown")
	if (hasclass(dropdownlist, 'opportunitiesoff')) {
		dropdownlist.classList.remove('opportunitiesoff');
		dropdownlist.classList.add('opportunitieson');
	}
	else {
		dropdownlist.classList.remove('opportunitieson');
		dropdownlist.classList.add('opportunitiesoff');
	}
}

function closedropdown() {
	var dropdownlist = document.getElementById("opportunitiesdropdown")
	if (hasclass(dropdownlist, 'opportunitieson')) {
		dropdownlist.classList.remove('opportunitieson');
		dropdownlist.classList.add('opportunitiesoff');
	}
}

function closeannouncement() {
	var announcementdiv = document.getElementById("announcement")
	if (hasclass(announcementdiv, 'announcementon')) {
		announcementdiv.classList.remove('announcementon');
		announcementdiv.classList.add('announcementoff');
	}
}