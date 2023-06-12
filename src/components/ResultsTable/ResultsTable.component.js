import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { namesForSelectMenu, MenuProps } from './ResultsTable.constants';
import { getStyles, CustomSelect } from './ResultsTable.styled';
import { StyledTableCell, StyledTableRow } from '../../utils';


const ResultTable = ({ results }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [teamName, setTeamName] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState(results);
  const theme = useTheme();
  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // On autofill we get a stringified value.
    const selectedTeams = typeof value === 'string' ? value.split(',') : value;
    setTeamName(selectedTeams);

    const filtered = results.filter(
      (result) =>
        selectedTeams.includes(result.homeTeam) ||
        selectedTeams.includes(result.awayTeam)
    );

    setFilteredTeams(filtered);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer sx={{ padding: "10px" }} component={Paper}>  
    <div>
      <FormControl sx={{ m: 1, width: 300, borderColor: '#1795A8' }}>
        <InputLabel id="demo-multiple-chip-label">{`Team(s)`}</InputLabel>
        <CustomSelect
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={teamName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Team(s)" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {namesForSelectMenu.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, teamName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
      <Button
        variant="contained"
        sx={{ m: 1, width: 300, height: 56, backgroundColor: '#1795A8' }} 
        onClick={() => {
          setTeamName([]);
          setFilteredTeams(results)
        }}>
          Clear All
      </Button>
    </div>
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
          {Object.values(filteredTeams).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((result, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{result.date}</StyledTableCell>
              <StyledTableCell align="center">{result.time}</StyledTableCell>
              <StyledTableCell align="center">{result.homeTeam}</StyledTableCell>
              <StyledTableCell align="center">{`${result.homeScore}-${result.awayScore}`}</StyledTableCell>
              <StyledTableCell align="center">{result.awayTeam}</StyledTableCell>
              <StyledTableCell align="center">{result.matchweek}</StyledTableCell>
              <StyledTableCell align="center">
                {
                  result.googleMapLocation
                  ? <a href={result.googleMapLocation} target="_blank" rel="noopener noreferrer">{result.location}</a>
                  : result.location
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 15, 25, 50]}
              colSpan={7}
              count={Object.values(filteredTeams).length}
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
