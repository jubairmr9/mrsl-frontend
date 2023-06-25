import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { StyledTableCell, StyledTableRow } from '../../utils';

const ScorersTable = ({ scorers }) => {
  const sortedScorers = scorers.sort((a, b) => b.goals - a.goals);

  return (
    <TableContainer sx={{ padding: "10px", maxWidth: 550 }} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Goals</StyledTableCell>
            <StyledTableCell align="center">Games</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(sortedScorers)
            .map((scorer) => (
            <StyledTableRow key={scorer.id}>
              <StyledTableCell align="center">{scorer.name}</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold' }}>{scorer.goals}</StyledTableCell>
              <StyledTableCell align="center">{scorer.games}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScorersTable;
