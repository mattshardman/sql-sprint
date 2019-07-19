module.exports = {
  logger: function(req, res, next) {
		const loggedData = {
			method: req.method,
			url: req.url,
			body: req.body || '',
			timestamp: new Date()
		};
		console.log(loggedData);
		next();
	},
}