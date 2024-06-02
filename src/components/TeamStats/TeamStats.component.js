import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
  TableCell,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { GA_DATA } from "../../data";

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  color: "rgb(253, 253, 253)",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2f2f2f",
  },
  fontSize: 14,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TeamStats = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        padding: "70px 10px 10px",
        maxWidth: { xs: "100%", md: 600 },
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        background: "#181818",
      }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Goals</StyledTableCell>
            <StyledTableCell>Assists</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {GA_DATA.map((player, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {player.name}
              </StyledTableCell>
              <StyledTableCell>{player.goals}</StyledTableCell>
              <StyledTableCell>{player.assists}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamStats;
