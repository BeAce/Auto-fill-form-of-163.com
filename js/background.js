// function httpRequest(url, callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", url, true);

// 	xrh.onreadystatechange = function() {
// 		if(xhr.readyState == 4) {
// 			callback(xhr.responseText);
// 		}
// 	}
// 	xhr.send()
// }

// var data;
// httpRequest(url, function(r) {
// 	data = JSON.parse(r);
// })

// alert(111)

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.create({'url': "https://www.google.com.hk/?gfe_rd=cr&ei=TpL0VumjCsjU8Aey4oG4Cw&gws_rd=ssl"}, function(tab) {
//     // Tab opened. Wait until page loads, from here it is not working
//     jQuery(document).ready(function() {
//         jQuery('#lst-ib').submit();
//         });
//   	});
// });


// chrome.browserAction.onClicked.addEventListener(function(tab) {
// 	chrome.tabs.excuteScript({
// 		code : 'document.body.style.backgroundColor="red"'
// 	})
// })