import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import { Row } from './GringosSchedule.utils';
import { StyledTableRow, StyledTableCell } from '../../utils';

const GringosSchedule = ({ results }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell />
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Home</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
            <StyledTableCell align="center">Away</StyledTableCell>
            <StyledTableCell align="center">Matchweek</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {results
              .filter(match => 
                  match.homeTeam === "Los Gringos" || match.awayTeam === "Los Gringos"
              )
              .map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

  
export default GringosSchedule;