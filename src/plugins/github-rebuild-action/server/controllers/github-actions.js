'use strict';

module.exports = {

    getWorkflows: async (ctx) => {
        const workflows = await strapi
            .plugin("github-rebuild-action")
            .service("github")
            .getWorkflows();
        ctx.send({ workflows });
    },

    triggerWorkflow: async (ctx) => {
        const id = parseInt(ctx.params.id, 10);
        if (isNaN(id)) {
          throw createError(400, "Invalid id");
        }
        const res = await strapi
        .plugin("github-rebuild-action")
        .service("github")
        .triggerWorkflow(id);
        ctx.send(res);
      },
};