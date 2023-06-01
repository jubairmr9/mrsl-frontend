import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { StyledTableRow, StyledTableCell } from '../../utils';

export const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell align="center">{row.date}</StyledTableCell>
        <StyledTableCell align="center">{row.time}</StyledTableCell>
        <StyledTableCell align="center">{row.homeTeam}</StyledTableCell>
        <StyledTableCell align="center">{`${row.homeScore}-${row.awayScore}`}</StyledTableCell>
        <StyledTableCell align="center">{row.awayTeam}</StyledTableCell>
        <StyledTableCell align="center">{row.matchweek}</StyledTableCell>
        <StyledTableCell align="center">{row.location}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            {row.gringosScorers && (
              <Typography variant="body2" style={{ fontStyle: "italic" }}>
                {"Gringos Scorers - " + row.gringosScorers.join(', ')}
              </Typography>
            )}              
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}