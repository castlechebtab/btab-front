// src/layouts/main/MainLayout.tsx

"use client";

import React from "react";
import type { Theme, SxProps } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Grid,
  TextField,
  CardMedia,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "@fontsource/ballet"; // Import the Ballet font
import { styled } from "@mui/system";

import { StyledButton } from "src/components/StyledButton";
import { Iconify } from "src/components/iconify";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollToTopButton } from "src/components/ScrollToTopButton";

// ----------------------------------------------------------------------

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

export function MainLayout({ sx, children }: MainLayoutProps) {
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
      <ScrollToTopButton />
    </Box>
  );
}
