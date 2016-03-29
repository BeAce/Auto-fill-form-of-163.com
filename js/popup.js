var submit = document.getElementById('submit');
submit.addEventListener('click', function() {
	chrome.tabs.executeScript(null,{code:"document.getElementById('kw').value='hello world!'"});
	// window.close();
})
