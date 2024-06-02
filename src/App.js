import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";

import Navigation from "./components/Navigation/Navigation.component";
import Schedule from "./components/Schedule/Schedule.component";
import LeagueTable from "./components/LeagueTable/LeagueTable.component";
import AppFooter from "./components/AppFooter/AppFooter.component";
import TeamStats from "./components/TeamStats/TeamStats.component";

const App = () => {
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        sx={{
          background: "#181818",
        }}
      >
        <Navigation />
        <Box component="main" flexGrow={1}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/schedule" />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/table" element={<LeagueTable />} />
            <Route path="/stats" element={<TeamStats />} />
          </Routes>
        </Box>
        <AppFooter />
      </Box>
    </Router>
  );
};

export default App;
