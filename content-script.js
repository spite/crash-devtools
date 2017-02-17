var s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
(document.head || document.documentElement).appendChild(s);

window.addEventListener( 'message', function(event) {

	console.log( event );

} );

