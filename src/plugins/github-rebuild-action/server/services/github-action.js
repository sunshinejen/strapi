'use strict';

const { default: axios } = require("axios");

module.exports = ({ strapi }) => ({

  getWorkflows: async () => {
    const workflows = await strapi.entityService.findMany('plugin::github-rebuild-action.workflow', { sort: 'name' });
    // const workflows = await strapi
    //   .query("plugin::workflow.workflow")
    //   .find({ where: "name" });
    console.log(workflows);
    return workflows;
  },

  triggerWorkflow: async (id) => {
    const workflow = await strapi.entityService.findOne('plugin::github-rebuild-action.workflow', id);

    const url = `https://api.${workflow.github_host}/repos/${workflow.repo_owner}/${workflow.repo_name}/dispatches`;
    console.log(workflow);
    console.log(url);
    await axios.post(
      url,
      {
        event_type: workflow.event_type,
        client_payload: workflow.client_payload,
      },
      {
        headers: {
          Accept: "application/vnd.github.everest-preview+json",
          Authorization: `token ${workflow.pat}`,
        },
      }
    );

    // await strapi.entityService.update('plugin::github-rebuild-action.workflow', id, {
    //   data: { started_at: Date.now() },
    // });

    return {};
  },
}
);