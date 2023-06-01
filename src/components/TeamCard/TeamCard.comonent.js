import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PlayerCard from '../PlayerCard/PlayerCard';

const TeamCard = ({ players }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {Object.values(players).map((player, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <PlayerCard player={player} /> 
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TeamCard;