for (var i = 0; i < _satellite.pageLoadRules.length; i++) {
	console.log('================================================================================================');
	console.log((i + 1) + '.) ' + _satellite.pageLoadRules[i].name);
	var includeRules = true;
	if ( typeof _satellite.pageLoadRules[i].scope != 'undefined' && typeof _satellite.pageLoadRules[i].scope.URI != 'undefined' && typeof _satellite.pageLoadRules[i].scope.URI.include != 'undefined') {
		console.log('%c INCLUDE', 'color: #bada55');
		for (var h = 0; h < _satellite.pageLoadRules[i].scope.URI.include.length; h++) {
			if ( typeof _satellite.pageLoadRules[i].scope.URI.include[h] == 'string') {
				if (window.location.pathname.match(_satellite.pageLoadRules[i].scope.URI.include[h])) {
					console.log('%c        +-- URI:    ' + _satellite.pageLoadRules[i].scope.URI.include[h] + ': MATCH', 'background: #222; color: #bada55');
				} else {
					console.log('       +-- URI:    ' + _satellite.pageLoadRules[i].scope.URI.include[h] + ': NO MATCH');
					includeRules = false;
				}
			} else if (_satellite.pageLoadRules[i].scope.URI.include[h] instanceof RegExp) {
				//console.log('       +-- RegExp: ' + _satellite.pageLoadRules[i].scope.URI.include[h]);
				if (_satellite.pageLoadRules[i].scope.URI.include[h].test(window.location.pathname) == true) {
					console.log('%c        +-- URI RegExp: ' + _satellite.pageLoadRules[i].scope.URI.include[h] + ': MATCH', 'background: #222; color: #bada55');
				} else {
					console.log('       +-- URI RegExp: ' + _satellite.pageLoadRules[i].scope.URI.include[h] + ': NO MATCH');
					includeRules = false;
				}
			}
		}
	}
	if ( typeof _satellite.pageLoadRules[i].scope != 'undefined' && typeof _satellite.pageLoadRules[i].scope.domains != 'undefined' && typeof _satellite.pageLoadRules[i].scope.domains != 'undefined') {
		console.log('%c INCLUDE', 'color: #bada55');
		for (var h = 0; h < _satellite.pageLoadRules[i].scope.domains.length; h++) {
			if ( typeof _satellite.pageLoadRules[i].scope.domains[h] == 'string') {
				if (window.location.host.match(_satellite.pageLoadRules[i].scope.domains[h])) {
					console.log('%c        +-- DOMAIN:    ' + _satellite.pageLoadRules[i].scope.domains[h] + ': MATCH', 'background: #222; color: #bada55');
				} else {
					console.log('       +-- DOMAIN:    ' + _satellite.pageLoadRules[i].scope.domains[h] + ': NO MATCH');
					includeRules = false;
				}
			} else if (_satellite.pageLoadRules[i].scope.domains[h] instanceof RegExp) {
				//console.log('       +-- DOMAIN RegExp: ' + _satellite.pageLoadRules[i].scope.domains[h]);
				if (_satellite.pageLoadRules[i].scope.domains[h].test(window.location.host) == true) {
					console.log('%c        +-- DOMAIN RegExp: ' + _satellite.pageLoadRules[i].scope.domains[h] + ': MATCH', 'background: #222; color: #bada55');
				} else {
					console.log('       +-- DOMAIN RegExp: ' + _satellite.pageLoadRules[i].scope.domains[h] + ': NO MATCH');
					includeRules = false;
				}
			}
		}
	}
	if ( typeof _satellite.pageLoadRules[i].scope != 'undefined' && typeof _satellite.pageLoadRules[i].scope.subdomains != 'undefined' && typeof _satellite.pageLoadRules[i].scope.subdomains.include != 'undefined') {
		console.log('%c INCLUDE', 'color: #bada55');
		for (var h = 0; h < _satellite.pageLoadRules[i].scope.subdomains.include.length; h++) {
			if ( typeof _satellite.pageLoadRules[i].scope.subdomains.include[h] == 'string') {
				if (window.location.href.match(_satellite.pageLoadRules[i].scope.subdomains.include[h])) {
					console.log('%c        +-- SUBDOMAIN:    ' + _satellite.pageLoadRules[i].scope.subdomains.include[h] + ': MATCH', 'background: #222; color: #bada55');
				} else {
					console.log('       +-- SUBDOMAIN:    ' + _satellite.pageLoadRules[i].scope.subdomains.include[h] + ': NO MATCH');
					includeRules = false;
				}
			} else if (_satellite.pageLoadRules[i].scope.subdomains.include[h] instanceof RegExp) {
				//console.log('       +-- SUBDOMAIN RegExp: ' + _satellite.pageLoadRules[i].scope.subdomains.include[h]);
				if (_satellite.pageLoadRules[i].scope.subdomains.include[h].test(window.location.href) == true) {
					console.log('%c        +-- SUBDOMAIN RegExp: ' + _satellite.pageLoadRules[i].scope.subdomains.include[h] + ': MATCH', 'background: #222; color: #bada55');
				} else {
					console.log('       +-- SUBDOMAIN RegExp: ' + _satellite.pageLoadRules[i].scope.subdomains.include[h] + ': NO MATCH');
					includeRules = false;
				}
			}
		}
	}
	var excludeRules = true;
	if ( typeof _satellite.pageLoadRules[i].scope != 'undefined' && typeof _satellite.pageLoadRules[i].scope.URI != 'undefined' && typeof _satellite.pageLoadRules[i].scope.URI.exclude != 'undefined') {
		console.log('%c EXCLUDE', 'color: red');
		for (var h = 0; h < _satellite.pageLoadRules[i].scope.URI.exclude.length; h++) {
			if ( typeof _satellite.pageLoadRules[i].scope.URI.exclude[h] == 'string') {
				if (window.location.pathname.match(_satellite.pageLoadRules[i].scope.URI.exclude[h])) {
					console.log('%c       +-- URI:    ' + _satellite.pageLoadRules[i].scope.URI.exclude[h] + ': MATCH', 'background: #222; color: #bada55');
					excludeRules = false;
				} else {
					console.log('        +-- URI:    ' + _satellite.pageLoadRules[i].scope.URI.exclude[h] + ': NO MATCH');
				}
			} else if (_satellite.pageLoadRules[i].scope.URI.exclude[h] instanceof RegExp) {
				//console.log('       +-- RegExp: ' + _satellite.pageLoadRules[i].scope.URI.exclude[h]);
				if (_satellite.pageLoadRules[i].scope.URI.exclude[h].test(window.location.pathname) == true) {
					console.log('%c       +-- URI RegExp: ' + _satellite.pageLoadRules[i].scope.URI.exclude[h] + ': MATCH', 'background: #222; color: #bada55');
					excludeRules = false;
				} else {
					console.log('        +-- URI RegExp: ' + _satellite.pageLoadRules[i].scope.URI.exclude[h] + ': NO MATCH');
				}
			}
		}
	}
	var conditions = true;
	if (includeRules && excludeRules) {
		if ( typeof _satellite.pageLoadRules[i].conditions != 'undefined') {
			console.log('%c CONDITIONS', 'color: blue');
			for (var h = 0; h < _satellite.pageLoadRules[i].conditions.length; h++) {
				//console.log( _satellite.pageLoadRules[7].trigger[0].arguments[0].toString());
				try {
					if (_satellite.pageLoadRules[i].conditions[h]() === true) {
						console.log('%c +-- function returned TRUE', 'color: blue');
					} else {
						console.log('%c +-- function returned FALSE', 'color: red');
						conditions = false;
					}
				} catch (e) {
					console.log('%c +-- function returned EXCEPTION', 'color: red');
					conditions = false;
					;
				}
			}
		}
	}
	if (includeRules && excludeRules && conditions) {
		console.log('%c ALL RULES AND CONDITIONS APPEAR TO MATCH', 'background: #222; color: #fff');
		console.log(_satellite.pageLoadRules[i]);
    for (var h = 0; typeof _satellite.pageLoadRules[i].trigger != 'undefined' && h < _satellite.pageLoadRules[i].trigger.length; h++) {
			if (_satellite.pageLoadRules[i].trigger[h].engine == 'sc' && _satellite.pageLoadRules[i].trigger[h].command == 'setVars') {
				console.log(JSON.stringify(_satellite.pageLoadRules[i].trigger[h].arguments[0]));
			}
			if (_satellite.pageLoadRules[i].trigger[h].engine == 'sc' && _satellite.pageLoadRules[i].trigger[h].command == 'setEvents') {
				console.log(JSON.stringify(_satellite.pageLoadRules[i].trigger[h].arguments[0]));
			}
			if (_satellite.pageLoadRules[i].trigger[h].engine == 'sc' && _satellite.pageLoadRules[i].trigger[h].arguments[0] instanceof Function) {
				console.log(_satellite.pageLoadRules[i].trigger[h].arguments[0].toString());
			}
		}
	}
};
console.log('================================================================================================');
console.log('%c Data Elements: (if present on page load)','color:blue');
// dataElements
for (j in _satellite.dataElements) {
	
	if (_satellite.dataElements[j].hasOwnProperty('selector') == true) {
		var selected = jQuery(_satellite.dataElements[j].selector);
		if (_satellite.dataElements[j].hasOwnProperty('property') == true) {
			if (_satellite.dataElements[j].property == 'text') {
				console.log(j + ': ' + jQuery(selected).text());
			} else if (_satellite.dataElements[j].property == 'value') {
				console.log(j + ': ' + jQuery(selected).val());
			} else {
				console.log(j + ': ' + jQuery(selected).attr(_satellite.dataElements[j].property));
			}
		}
	} else if (_satellite.dataElements[j].hasOwnProperty('queryParam') == true) {
		var parseQueryString = function() {
			var str = window.location.search;
			var objURL = {
			};
			str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function($0, $1, $2, $3) {
				objURL[$1] = $3;
			});
			return objURL;
		};
		console.log(j + ': ' + parseQueryString()[_satellite.dataElements[j].queryParam]);
	} else if (_satellite.dataElements[j].hasOwnProperty('jsVariable') == true) {
		console.log(j + ': ' + (eval('try{' + _satellite.dataElements[j].jsVariable + '}catch(e){;}')));
	} else if (_satellite.dataElements[j].hasOwnProperty('customJS') == true) {
		try {
			var result = _satellite.dataElements[j].customJS();
			console.log(j + ': ' + result);
		} catch (e) {
			console.log(j + ': undefined');
		}
	}
}
console.log('================================================================================================');
if (typeof s != 'undefined') {
  for (j in s) {
    switch (j) {
      case 'channel':
        console.log(j + ': ' + s[j]);
        break;
      case 'un':
        console.log(j + ': ' + s[j]);
        break;
      case 'trackingServer':
        console.log(j + ': ' + s[j]);
        break;
      case 'trackingServerSecure':
        console.log(j + ': ' + s[j]);
        break;
      case 'version':
        console.log(j + ': ' + s[j]);
        break;
      case 'linkInternalFilters':
        console.log(j + ': ' + s[j]);
        break;
      case 'currencyCode':
        console.log(j + ': ' + s[j]);
        break;
      case 'events':
        console.log(j + ': ' + s[j]);
        break;
      case 'products':
        console.log(j + ': ' + s[j]);
        break;
      default:
        ;
    }
  };
}

