function isIEorEdge() {
	var userAgent = navigator.userAgent;
	var match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(userAgent);
	return Boolean(match)
}

/* Add ... in a long string */
function strLimit(txt, long) {
    return (txt.length <= long) ? txt : txt.substring(0, long) + '...';
}

function isEmpty(obj) {
    for (var key in obj) {
        if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
}

/* yyyy/mm/dd -> dd/mm/yyyy */
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    day = (day.length < 2) ? '0' + day : day;
    month = (month.length < 2) ? '0' + month : month;

    return [day, month, year].join('/');
}

function copy2Clipboard() {
    var copyText = document.getElementById('myInput');

    if (copyText.value !== '') {
        copyText.select();
        document.execCommand('copy');
        alert('Text copied to clipboard: ' + copyText.value);
    }
}
