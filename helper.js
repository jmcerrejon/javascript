function getUrlParameters() {
	return window.location.search.substr(1).split('&').reduce(function (q, query) {
		var chunks = query.split('=');
		var key = chunks[0];
		var value = chunks[1];
		return (q[key] = value, q);
	}, {});
}

function isIEorEdge() {
	var userAgent = navigator.userAgent;
	var match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(userAgent);
	return Boolean(match)
}

/* Return true if IE Version is between 6-11 */
function isOlderIE() {
	return (navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1);
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
	var d = new Date(date);
	if (typeof date === 'undefined' || !isValidDate(d)) {
		return '-';
	}
	var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    day = (day.length < 2) ? '0' + day : day;
    month = (month.length < 2) ? '0' + month : month;

    return [day, month, year].join('/');
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

function copy2Clipboard() {
    var copyText = document.getElementById('myInput');

    if (copyText.value !== '') {
        copyText.select();
        document.execCommand('copy');
        alert('Text copied to clipboard: ' + copyText.value);
    }
}

function lastDayOfMonth(year, month) {
    var newDate = new Date(year, month++, 1);

	return (new Date(newDate.getTime()-1000*60*60*24)).getDate();
}
