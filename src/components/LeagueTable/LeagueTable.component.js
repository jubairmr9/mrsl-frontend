import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

// Styled components for the table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  color: "rgb(253, 253, 253)",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2f2f2f",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const fetchStandings = async () => {
  const apiUrl = "https://sports-api.fly.dev/v2/global/standings/retrieve";
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      league_id: "fARwSinLZ1GQffbxqEfo",
      season_id: "season-nOZwfjseJIMkHLNyaay7GNeOhZoPVTg6",
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  const mondayD4Standing = data.standings.find(
    (standing) => standing.val.division.val.name === "Monday D4"
  );

  return mondayD4Standing ? mondayD4Standing.val.teams : [];
};

const LeagueTable = () => {
  const [tableData, setTableData] = useState([]);

  const { data } = useQuery({
    queryKey: ["standings"],
    queryFn: fetchStandings,
    select: (data) => data,
  });

  useEffect(() => {
    data && setTableData(data);
  }, [data]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        padding: { xs: "60px 10px 10px", md: "70px 10px 10px" },
        maxWidth: { xs: "100%", md: 800 },
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        background: "#181818",
      }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Team</StyledTableCell>
            <StyledTableCell>Points</StyledTableCell>
            <StyledTableCell>Wins</StyledTableCell>
            <StyledTableCell>Losses</StyledTableCell>
            <StyledTableCell>Ties</StyledTableCell>
            <StyledTableCell>GF</StyledTableCell>
            <StyledTableCell>GA</StyledTableCell>
            <StyledTableCell>Played</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData &&
            tableData.map((team, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{team.val.name}</StyledTableCell>
                <StyledTableCell>{team.val.points}</StyledTableCell>
                <StyledTableCell>{team.val.wins}</StyledTableCell>
                <StyledTableCell>{team.val.losses}</StyledTableCell>
                <StyledTableCell>{team.val.ties}</StyledTableCell>
                <StyledTableCell>{team.val.gf}</StyledTableCell>
                <StyledTableCell>{team.val.ga}</StyledTableCell>
                <StyledTableCell>
                  {Number(team.val.wins) +
                    Number(team.val.losses) +
                    Number(team.val.ties)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeagueTable;
