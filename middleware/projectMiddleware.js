const Project = require('../projects/projectModel');

module.exports = {
	
	validateProjectId: async function(req, res, next) {
		const id = req.params.id;

		const project = await Project.get(id);

		if (project) {
			next();
		} else {
			res.status(400).json({ message: 'Invalid project ID' });
		}
	},

	validateProject: function(req, res, next) {
		if (Object.keys(req.body) == 0) {
			res.status(400).json({ message: 'Missing project data' });
		} else if (!req.body.name || !req.body.description) {
			res.status(400).json({
				message: 'Please provide a name and description for your project.'
			});
		} else {
			next();
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
