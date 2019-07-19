const db = require('../data/db');

module.exports = {
	get: function() {
		return db('actions');
	},

	getById: function(id) {
		return db('actions'.where({ id }));
	},

	insert: function(action) {
		return db('actions')
			.insert(action)
			.then(([id]) => this.getById(id));
	},

	update: function(id, changes) {
		return db('actions')
			.where('id', id)
			.update(changes)
			.then(status => (status > 0 ? this.get(id) : null));
	},

	remove: function(id) {
		return db('actions')
			.where({ id })
			.del();
	}
};
