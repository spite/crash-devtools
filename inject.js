'use strict';

window.view = function() {

	var obj = new Float32Array(); // or any size
	var data = obj.slice().buffer;
	var message = { data: data };
	window.postMessage( message, '*', [ data ] );

}
