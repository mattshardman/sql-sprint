const db = require('../data/db');

module.exports = {
	get: function() {
		return db('projects');
	},

	getById: function(id) {
		return db('projects').where({ id });
	},

	getWithActions: async function(id) {
		const project = await this.getById(id);
		project.actions = this.getProjectActions(id);
	},

	insert: function(project) {
		return db('projects')
			.insert(project)
			.then(([id]) => this.getById(id));
	},

	update: function(id, changes) {
		return db('projects')
			.where('id', id)
			.update(changes)
			.then(status => (status > 0 ? this.getWithActions(id) : null));
	},

	remove: function(id) {
		return db('projects')
			.where('id', id)
			.del();
	},

	getProjectActions: function(id) {
		return db('actions')
			.select(['id', 'description', 'notes', 'completed'])
			.where('project_id', id);
	}
};
