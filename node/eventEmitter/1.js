var ee = require('events').EventEmitter;
ee.on('miEvento', function() {
	console.log("siii");	
});
ee.emit('miEvento');
