import React, { memo, useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Td, Th } from '@strapi/design-system/Table';
import { Typography } from '@strapi/design-system/Typography';
import { Button } from '@strapi/design-system/Button';
import pluginId from '../../pluginId';
import { Box } from '@strapi/design-system/Box';
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import workflowRequests from "../../api/workflowRequests";
import dayjs from "dayjs";
import { request } from "@strapi/helper-plugin";


const POLL_INTERVAL = 10000;

const HomePage = () => {
  const [workflows, setWorkflows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (isLoading === false) {
        setIsLoading(true);
      }
      const workflow = await workflowRequests.getAllWorkflows();
      setWorkflows(workflow.workflows);
      setIsLoading(false);
    } catch {
      console.log('error');
    }

  }

  useEffect(async () => {
    await fetchData();
  }, [])

  if (isLoading) {
    return (
      <LoadingIndicatorPage />
    )
  }

  const disablePublishButton = () => {
    const button = document.querySelector('#button');
    button.disabled = true;
    console.log('Button disabled')
    setTimeout(() => {
      button.disabled = false;
      console.log('timeout expired')
    }, 1800000)
  }

  const triggerWorkflow = async (id) => {
    try {
      await request(`/${pluginId}/workflows/${id}/trigger`, { method: "POST" });
      console.log("Dispatched event!");
      disablePublishButton();
      fetchData();
    } catch {
      console.log('error');
    }
  };

  return (
    <>
      <div>
        <h1>{pluginId}</h1>
        <div>
          {
            workflows.map((workflow) => (
              <Box>
                <Table>
                  <Tbody>
                    <Td>
                      <Typography>{workflow.name}</Typography>
                    </Td>
                    <Td>
                      <Typography>{workflow.description || "No description"}</Typography>
                    </Td>
                    <Td>
                      <Typography>
                        {dayjs(workflow.started_at).format("DD/MM/YYYY HH:mm:ss") || "Never Triggered"}
                      </Typography>
                    </Td>
                    <Td>
                      <Button id="githubBtn" onClick={() => triggerWorkflow(workflow.id)}>
                        Publish
                      </Button>

                    </Td>
                  </Tbody>
                </Table>
              </Box>
            ))
          }
        </div>
      </div>

    </>
  );
};

export default memo(HomePage);
