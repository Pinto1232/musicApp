const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	app.use(
		proxy('albums', {
			target: 'https://api.deezer.com/',
			changeOrigin: true
		})
	);

	app.use(
		proxy('top', {
			target: 'https://api.deezer.com/',
			changeOrigin: true
		})
	);

	app.use(
		proxy('related', {
			target: 'https://api.deezer.com/',
			changeOrigin: true
		})
	);

	app.use(
		proxy('radio', {
			target: 'https://api.deezer.com/',
			changeOrigin: true
		})
	);
};
