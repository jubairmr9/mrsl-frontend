import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { generatePointsTable } from './PointsTable.utils';
import { StyledTableCell, StyledTableRow } from '../../utils';

const PointsTable = ({ results }) => {
  const pointsTable = generatePointsTable(results);

  return (
    <TableContainer sx={{ padding: "10px", maxWidth: 800 }} component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Team</StyledTableCell>
            <StyledTableCell align="center">Played</StyledTableCell>
            <StyledTableCell align="center">Win</StyledTableCell>
            <StyledTableCell align="center">Loss</StyledTableCell>
            <StyledTableCell align="center">Tie</StyledTableCell>
            <StyledTableCell align="center">GF</StyledTableCell>
            <StyledTableCell align="center">GA</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(pointsTable.table).map((teamData, index) => (
            <StyledTableRow key={index + 1}>
              <StyledTableCell align="center">{teamData.team}</StyledTableCell>
              <StyledTableCell align="center">{teamData.played}</StyledTableCell>
              <StyledTableCell align="center">{teamData.win}</StyledTableCell>
              <StyledTableCell align="center">{teamData.loss}</StyledTableCell>
              <StyledTableCell align="center">{teamData.tie}</StyledTableCell>
              <StyledTableCell align="center">{teamData.goalFor}</StyledTableCell>
              <StyledTableCell align="center">{teamData.goalAgainst}</StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 'bold' }}>{teamData.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PointsTable;
