function hasclass(elem, c) {
	return (' ' + elem.className + ' ').indexOf(' ' + c + ' ') > -1;
}

function dropdown() {
	var dropdownlist = document.getElementById("dancedropdown")
	if (hasclass(dropdownlist, 'danceoff')) {
		dropdownlist.classList.remove('danceoff');
		dropdownlist.classList.add('danceon');
	}
	else {
		dropdownlist.classList.remove('danceon');
		dropdownlist.classList.add('danceoff');
	}
}

function closedropdown() {
	var dropdownlist = document.getElementById("dancedropdown")
	if (hasclass(dropdownlist, 'danceon')) {
		dropdownlist.classList.remove('danceon');
		dropdownlist.classList.add('danceoff');
	}
}

function closeannouncement() {
	var announcementdiv = document.getElementById("announcement")
	if (hasclass(announcementdiv, 'announcementon')) {
		announcementdiv.classList.remove('announcementon');
		announcementdiv.classList.add('announcementoff');
	}
}