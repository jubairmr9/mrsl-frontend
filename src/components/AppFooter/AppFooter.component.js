import React from "react";
import { Box, Typography } from "@mui/material";

const AppFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: 2,
        bgcolor: "#2f2f2f",
        textAlign: "center",
        fontWeight: 700,
        color: "rgb(253, 253, 253)",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Typography sx={{ fontWeight: 700 }}>Created by Jubair</Typography>
    </Box>
  );
};

export default AppFooter;
