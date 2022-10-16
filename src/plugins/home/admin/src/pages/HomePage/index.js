/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
import { Box } from '@strapi/design-system/Box';
import { BaseHeaderLayout, HeaderLayout } from '@strapi/design-system/Layout';
import { Accordion, AccordionToggle, AccordionContent } from '@strapi/design-system/Accordion';
import { Typography } from '@strapi/design-system/Typography';
import { Button } from '@strapi/design-system/Button';
import { Link } from '@strapi/design-system/Link';
import HiTLogo from './images/HiTSeattle.png';
// style={{ }}
const HomePage = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedA, setExpandedA] = useState(false);
  const [expandedB, setExpandedB] = useState(false);
  const [expandedC, setExpandedC] = useState(false);
  const [expandedD, setExpandedD] = useState(false);


  return (

    <>
      <Box padding={8} background="neutral100" >
        <img src={HiTLogo} />
        <BaseHeaderLayout title="Welcome to the Harvard in Tech Content Management System!" />
      </Box>

      <Box padding={8} background="neutral100">
        <Accordion expanded={expanded} onToggle={() => setExpanded(s => !s)} id="acc-3">
          <AccordionToggle togglePosition="left" title="FAQ's" />
          <AccordionContent>
            <Box padding={3}>
              <Typography>CMS Rules</Typography>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3} background="primary100">
              <Typography>Tech Support</Typography>
            </Box>
          </AccordionContent>
        </Accordion>
      </Box>

      <Box padding={8} background="neutral100">
        <Accordion expanded={expandedA} onToggle={() => setExpandedA(a => !a)} id="acc-3">
          <AccordionToggle togglePosition="left" title="How to publish content" />
          <AccordionContent>
            <Box padding={3}>
              <Typography>How do I publish my changes or content I just added?</Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>
        </Accordion>
      </Box>

      <Box padding={8} background="neutral100">
        <Accordion expanded={expandedB} onToggle={() => setExpandedB(b => !b)} id="acc-3">
          <AccordionToggle togglePosition="left" title="How to Upload Images" />
          <AccordionContent>
            <Box padding={3}>
              <Typography>Adding a new Image</Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>
        </Accordion>
      </Box>

      <Box padding={8} background="neutral100">
        <Accordion expanded={expandedC} onToggle={() => setExpandedC(c => !c)} id="acc-3">
          <AccordionToggle togglePosition="left" title="How to add new Content" />
          <AccordionContent>
            <Box padding={3} >
              <Typography>How to add a new Volunteer & Volunteer Role </Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3} background="primary100">
              <Typography>How to add a new Team </Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3}>
              <Typography>How to add a new Podcast </Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3} background="primary100">
              <Typography>How to add a new Upcoming/Future Webinar </Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3}>
              <Typography>How to add new a Article & a new Author </Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3} background="primary100">
              <Typography>How to add new Buzz Content </Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

        </Accordion>
      </Box>

      <Box padding={8} background="neutral100">
        <Accordion expanded={expandedD} onToggle={() => setExpandedD(d => !d)} id="acc-3">
          <AccordionToggle togglePosition="left" title="How to edit existing HiT- Seattle website pages" />
          <AccordionContent>
            <Box padding={3}>
              <Typography>How to edit Home Page</Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3} background="primary100">
              <Typography>How to edit Call for Action Page </Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3}>
              <Typography>How to edit Tech for Young Professionals Page</Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

          <AccordionContent>
            <Box padding={3} background="primary100">
              <Typography>How to edit Contact Page</Typography>
              <Link href="https://strapi.io/" isExternal>&nbsp;View</Link>
            </Box>
          </AccordionContent>

        </Accordion>
      </Box>

    </>
  );
};

export default memo(HomePage);
