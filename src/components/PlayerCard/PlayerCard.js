import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const PlayerCard = ({ player }) => {
  const imageURL = `https://mrsl-backend-bj1xwflgf-jubairmr9.vercel.app/images/${player.number}.jpg`;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 340 }}
        image={imageURL}
        title={player.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "'Inknut Antiqua', serif", fontWeight: 'bold' }}>
          {player.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number: {player.number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Position: {player.position}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PlayerCard;
