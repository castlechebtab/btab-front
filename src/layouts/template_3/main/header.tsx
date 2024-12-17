// File: Header.tsx
import React, { useState, useEffect } from "react";
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
import  AccountModal  from "src/components/AccountModal/account-modal";

const CCY = ["Australia AUD$", "United States USD$", "Great Britain GBP"];
const LANGUAGES = ["English", "Spanish", "Chinese"];

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedCCY, setSelectedCCY] = useState(CCY[0]);
  const [selectedLangauge, setSelectedLanguage] = useState(LANGUAGES[0]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleCartClick = () => {
    window.location.href = "/cart"; // Redirect to the cart page
  };

  const [openModal, setOpenModal] = useState(false);

  // Handle the opening and closing of the dropdown menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget); 
  };

  const handleProfileMenuClose = () => {
    setMenuAnchorEl(null); 
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo"); 
    setUsername("Account");
    handleProfileMenuClose(); 
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo") || "{}");
    if (storedUser.username) {
      setUsername(storedUser.username);
      setIsLoggedIn(true); 
    }
  }, []);

  const handleMenuClose = () => {
    setAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  }

  const handleModalClose = () => {
    setOpenModal(false);
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string>("Account");


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo") || "{}");
    if (storedUser.username) {
      setUsername(storedUser.username);
    }
  }, []);

  const handleFormSubmit = (formType: string, username?: string) => {
    if (formType === "signup" && username) {
      setUsername(username); // Update the username after signup
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    // Load the initial cart total from localStorage
    const storedCartTotal = JSON.parse(localStorage.getItem("cartTotal") || "0");
    setCartTotal(storedCartTotal);

    // Listener for `storage` event to detect changes in localStorage
    const handleStorageChange = () => {
      const updatedCartTotal = JSON.parse(
        localStorage.getItem("cartTotal") || "0"
      );
      setCartTotal(updatedCartTotal); // Update cartTotal state
    };

    // Add storage event listener
    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Custom styling for the search input
  const SearchInput = styled(InputBase)(({ theme }) => ({
    backgroundColor: "#f4ede5",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "14px",
  }));

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: "#f4ede5",
          textAlign: "center",
          padding: "8px 0",
          fontSize: "12px",
          color: "#333",
        }}
      >
        FREE SHIPPING TO AUSTRALIA ON ALL ORDERS ABOVE AU$500. TAXES & DUTIES
        INCLUDED.
      </Box>

      {/* Main Navigation Bar */}
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          padding: "16px 32px",
        }}
      >
        {/* Left Section: Country and Currency Dropdown */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" }, // Hidden on extra-small screens, visible on small and up
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            width: 280,
          }}
        >
          {/* Currency Dropdown */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleMenuOpen}
          >
            <Typography variant="body1">{selectedCCY}</Typography>
            <ArrowDropDownIcon />
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {CCY.map((item) => (
              <MenuItem
                key={item}
                onClick={() => {
                  setSelectedCCY(item);
                  handleMenuClose();
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
          {/* Language Dropdown */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleLanguageMenuOpen}
          >
            <Typography variant="body1">{selectedLangauge}</Typography>
            <ArrowDropDownIcon />
          </Box>
          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            {LANGUAGES.map((item) => (
              <MenuItem
                key={item}
                onClick={() => {
                  setSelectedLanguage(item);
                  handleMenuClose();
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Middle Section: Logo */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Ballet",
            fontSize: "32px",
            textAlign: "center",
            color: "black",
          }}
        >
          Btab Corp
        </Typography>

        {/* Right Section: Icons */}
        <Box display="flex" alignItems="center" gap={1}>
        {isLoggedIn ? ( 
            <>
              <IconButton sx={{ color: "black" }} onClick={handleProfileMenuOpen}>
                <AccountCircleIcon />
              </IconButton>
              <Typography sx={{ fontSize: "14px" }}>{username}</Typography>
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleProfileMenuClose}
              >
                <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </>
          ) : (
            <IconButton sx={{ color: "black" }} onClick={handleModalOpen}>
              <AccountCircleIcon />
            </IconButton>
          )}
          <IconButton sx={{ color: "black" }} onClick={handleCartClick}>
            <ShoppingBagIcon />
          </IconButton>
          <Typography sx={{ fontSize: "14px" }}>Bag ({cartTotal})</Typography>
        </Box>
      </Toolbar>

      {/* Bottom Navigation Links */}
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          padding: "8px 0",
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          position: "relative",
        }}
      >
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          NEW ARRIVALS
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          WOMENSWEAR
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          KIDS
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          WEDDING
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          LOOKBOOK
        </Typography>
        <Typography
          component="a"
          href="#"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold", flex: "none" }}
        >
          THE WORLD OF N&T
        </Typography>
        {/* Search Input */}
        <Box sx={{ position: "absolute", right: 80, display: { xs: "none", md: "flex" } }}>
          <SearchInput placeholder="Search..." />
        </Box>
      </Box>

      <AccountModal open={openModal} onClose={handleModalClose} onSubmit={handleFormSubmit} />
    </AppBar>
  );
}
