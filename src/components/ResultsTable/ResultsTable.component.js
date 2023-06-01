import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

import { StyledTableCell, StyledTableRow } from '../../utils';

const ResultTable = ({ results }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer sx={{ padding: "10px" }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Home</StyledTableCell>
            <StyledTableCell align="center">Score</StyledTableCell>
            <StyledTableCell align="center">Away</StyledTableCell>
            <StyledTableCell align="center">Matchweek</StyledTableCell>
            <StyledTableCell align="center">Location</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(results).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((result, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{result.date}</StyledTableCell>
              <StyledTableCell align="center">{result.time}</StyledTableCell>
              <StyledTableCell align="center">{result.homeTeam}</StyledTableCell>
              <StyledTableCell align="center">{`${result.homeScore}-${result.awayScore}`}</StyledTableCell>
              <StyledTableCell align="center">{result.awayTeam}</StyledTableCell>
              <StyledTableCell align="center">{result.matchweek}</StyledTableCell>
              <StyledTableCell align="center">{result.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 15, 25, 50]}
              colSpan={7}
              count={Object.values(results).length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default ResultTable;
