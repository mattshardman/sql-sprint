const router = require('express').Router();
const Project = require('../projects/projectModel');
const Action = require('../actions/actionModel');
const {
	validateProject,
	validateProjectId,
	validateAction
} = require('../middleware/projectMiddleware');

router.post('/', validateProject, async (req, res) => {
	const { name, description } = req.body;
	try {
		const newProject = await Project.insert({ name, description });
		res.status(201).json(newProject);
	} catch (error) {
		res.status(500).json({ message: 'Unable to add project to the database.' });
	}
});

router.get('/', async (req, res) => {
	try {
		const projects = await Project.get();
		res.status(200).json(projects);
	} catch (error) {
		res.status(500).json({ message: 'Unable to retrieve projects.' });
	}
});

router.get('/:id', validateProjectId, async (req, res) => {
	const id = req.params.id;
	try {
		const project = await Project.getWithActions(id);
		res.status(200).json(project);
	} catch (error) {
		res
			.status(500)
			.json({ message: `Unable to retrieve project with id ${id}` });
	}
});

router.get('/:id/actions', validateProjectId, async (req, res) => {
	const id = req.params.id;
	try {
		const actions = await Project.getProjectActions(id);
		res.status(200).json(actions);
	} catch (error) {
		res
			.status(500)
			.json({ message: `Unable to retrieve actions for project ${id}` });
	}
});

router.delete('/:id', validateProjectId, async (req, res) => {
	const id = req.params.id;
	try {
		const deleteProject = await Project.remove(id); 
		res.status(200).json({
			message: `Project ${id} has been deleted successfully!`
		});
	} catch (error) {
		res.status(500).json({ message: `Unable to delete project ${id}` });
	}
});


router.post(
	'/:id/actions',
	validateProjectId,
	validateAction,
	async (req, res) => {
		const id = req.params.id;
		const { description, notes } = req.body;
try {
  const newAction = await Action.insert({ description: description, notes: notes, project_id: id })
  res.status(201).json(newAction);
}
catch(error) {
  res
  .status(500)
  .json({ message: `Unable to add action to project ${id}.` });
}
	}
);
