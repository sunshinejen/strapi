import { request } from "@strapi/helper-plugin";
import pluginId from '../pluginId';

const workflowRequests = {
    getAllWorkflows: async () => {

        try {
            return await request(`/${pluginId}/workflows`, {
                method: "GET",
            });
        } catch (err) {
            const message = get(
                err,
                ["response", "payload", "message"],
                "An error occured"
            );

            if (message !== "Forbidden") {
                console.log(message);
            }
        }
    },
};

export default workflowRequests; 