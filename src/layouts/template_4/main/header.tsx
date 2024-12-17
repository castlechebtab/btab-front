// File: Header.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/system";
import CurrencyDropdown from "src/components/CurrencyDropdown/currency-dropdown";
import { Iconify } from "src/components/iconify";

const CCY = ["Australia AUD$", "United States USD$", "Great Britain GBP"];
const LANGUAGES = ["English", "Spanish", "Chinese"];

// Styled component for the TopBar
const TopBarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#8B1D3B", // Burgundy background color
  color: "#FFFFFF", // White text color
  padding: "8px 0",
  fontSize: "12px",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  textTransform: "uppercase",
  "& > *:not(:last-child)": {
    marginRight: "24px", // Space between items
  },
  display: "-webkit-box",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedCCY, setSelectedCCY] = useState(CCY[0]);
  const [selectedLangauge, setSelectedLanguage] = useState(LANGUAGES[0]);

  // Handle the opening and closing of the dropdown menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  // Custom styling for the search input
  const SearchInput = styled(InputBase)(({ theme }) => ({
    backgroundColor: "#f4ede5",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "14px",
  }));

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <TopBarContainer>
        <Typography variant="body2">Come to Endless Elegance</Typography>
        <span>•</span>
        <Typography variant="body2">Worldwide Shipping</Typography>
        <span>•</span>
        <Typography variant="body2">Get 20% Off Your First Purchase</Typography>
        <span>•</span>
        <Typography variant="body2">Welcome to Endless Elegance</Typography>
        <span>•</span>
        <Typography variant="body2">Get 20% Off Your First Purchase</Typography>
      </TopBarContainer>

      {/* Main Navigation Bar */}
      <Toolbar
        sx={{
          justifyContent: "flex-start",
          alignItems: 'center',
          flexFlow: 'column',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          padding: "16px 32px",
          backgroundImage: "url('/images/design3.webp')",
          height: '400px',
          "@media (min-width:768px)": {
            justifyContent: "space-between",
            alignItems: 'flex-start',
            flexFlow: 'row',
          },
        }}
      >
        {/* Middle Section: Logo */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Ballet",
            fontSize: "32px",
            textAlign: "center",
            color: "white",
          }}
        >
          Btab Corp
        </Typography>

        {/* Right Section: Icons */}
        <Box display="flex" alignItems="center" gap={1}>
          <CurrencyDropdown />
          <IconButton sx={{ color: "white" }}>
            <Iconify icon={"mynaui:search"} />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <AccountCircleIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <ShoppingBagIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
