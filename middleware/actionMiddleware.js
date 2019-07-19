const Action = require('../actions/actionModel');

module.exports = {
	validateActionId: async function(req, res, next) {
		const id = req.params.id;

		const action = await Action.get(id);

		if (action) {
			next();
		} else {
			res.status(400).json({ message: 'Invalid action ID' });
		}
	},

	validateAction: function(req, res, next) {
		if (Object.keys(req.body) == 0) {
			res.status(400).json({ message: 'Missing action data' });
		} else if (!req.body.description || !req.body.notes) {
			res.status(400).json({
				message: 'Please provide a description and note for your action.'
			});
		} else {
			next();
		}
	}
};
