module.exports = [
  {
    method: 'GET',
    path: '/workflows',
    handler: 'github.getWorkflows',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/workflows/:id/trigger',
    handler: 'github.triggerWorkflow',
    config: {
      policies: [],
    },
  },
];
