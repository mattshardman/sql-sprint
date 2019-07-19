
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {name: 'Project 1', description: 'Description for Project 1'},
        {name: 'Project 2', description: 'Description for Project 2'},
        {name: 'Project 3', description: 'Description for Project 3'}
      ]);
    });
};
