// src/layouts/main/MainLayout.tsx

"use client";

import React from "react";
import type { Theme, SxProps } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  InputBase,
} from "@mui/material";
import "@fontsource/ballet"; // Import the Ballet font
import { styled } from "@mui/system";

// import { StyledButton } from "src/components/StyledButton";
import { Iconify } from "src/components/iconify";
import { Header } from "./header";
import { Footer } from "./footer";
// import { ScrollToTopButton } from "src/components/ScrollToTopButton";

// ----------------------------------------------------------------------

export type MainLayout3Props = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

export function MainLayout3({ sx, children }: MainLayout3Props) {
  const theme = useTheme();

  const SearchInput = styled(InputBase)(({ theme }) => ({
    backgroundColor: "#f4ede5",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "14px",
  }));

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, ...sx }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
