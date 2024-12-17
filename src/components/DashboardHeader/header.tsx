import React from "react";
import { Box, Button, Typography, Switch, FormControlLabel, IconButton } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left Side */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Analytics
        </Typography>
        <Button
          variant="outlined"
          startIcon={<span role="img" aria-label="calendar">📅</span>}
          sx={{ textTransform: "none" }}
        >
          Last 365 days
        </Button>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Compare to: Nov 22, 2022 - Nov 20, 2023
        </Button>
      </Box>

      {/* Right Side */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <IconButton>
          <FullscreenIcon />
        </IconButton>
        <FormControlLabel
          control={<Switch />}
          label="Auto-refresh"
          labelPlacement="start"
        />
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Customize
        </Button>
      </Box>
    </Box>
  );
}
