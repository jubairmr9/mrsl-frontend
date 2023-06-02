import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ResultsTable from "../ResultsTable/ResultsTable.component";
import PointsTable from '../PointsTable/PointsTable.component';
import ScorersTable from '../ScorersTable/ScorersTable.component';
import GringosSchedule from '../GringosSchedule/GringosSchedule.component';
import TeamCard from '../TeamCard/TeamCard.comonent';

import { fetchData } from './HomeTabs.utils';
import { Container, TabPanel, a11yProps } from './HomeTabs.styled';


const HomeTabs = () => {
  const [value, setValue] = useState(0);
  const { data, isLoading, isError } = useQuery('fetchData', fetchData, {
    refetchOnMount: true, // Trigger a refetch of the data when the component mounts
  });

  if (isLoading || isError) {
    return <div>{isLoading ? 'Loading...' : 'Error while fetching data'}</div>;
  }

  const { results, players, scorers } = data;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example" 
          sx={{ fontWeight: 'solid' }}
          scrollButtons="auto"
          variant="scrollable"
        >
          <Tab label={<Typography variant="h6" fontWeight="bold">Gringos Schedule</Typography>} {...a11yProps(0)} />
          <Tab label={<Typography variant="h6" fontWeight="bold">Table</Typography>} {...a11yProps(1)} />
          <Tab label={<Typography variant="h6" fontWeight="bold">Los Gringos</Typography>} {...a11yProps(2)} />
          <Tab label={<Typography variant="h6" fontWeight="bold">Schedule Full</Typography>} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          {results && <GringosSchedule results={results} />}
        </div>
        <div style={{ paddingTop: '10px' }}>
          <Typography variant="body1" style={{ fontStyle: "italic", fontWeight: "solid" }}>
            ** Game is on a Wednesday - July 5th
          </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container container spacing={2}>
          <Grid item xs={12} md={6}>
            {results && <PointsTable results={results} />}
          </Grid>
          <Grid item xs={12} md={6}>
            {scorers && <ScorersTable scorers={scorers} />}
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {players &&<TeamCard players={players} />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {results && <ResultsTable results={results} />}
      </TabPanel>
    </Box>
  );
};

export default HomeTabs;