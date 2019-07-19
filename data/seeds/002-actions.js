exports.seed = function(knex) {
  return knex('actions').del()
    .then(function () {
      return knex('actions').insert([
        {description: 'Description of Action 1', notes: 'Notes of Action 1', project_id: 1},
        {description: 'Description of Action 2', notes: 'Notes of Action 2', project_id: 1},
        {description: 'Description of Action 3', notes: 'Notes of Action 3', project_id: 2},
        {description: 'Description of Action 4', notes: 'Notes of Action 4', project_id: 2},
        {description: 'Description of Action 5', notes: 'Notes of Action 5', project_id: 2},
        {description: 'Description of Action 6', notes: 'Notes of Action 6', project_id: 1},
        {description: 'Description of Action 7', notes: 'Notes of Action 7', project_id: 3},
        {description: 'Description of Action 8', notes: 'Notes of Action 8', project_id: 3},
      ]);
    });
};
