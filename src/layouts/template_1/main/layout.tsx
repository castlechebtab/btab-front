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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "@fontsource/ballet"; // Import the Ballet font

import { StyledButton } from "src/components/StyledButton";
import { Iconify } from "src/components/iconify";

// ----------------------------------------------------------------------

export type MainLayout1Props = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

export function MainLayout1({ sx, children }: MainLayout1Props) {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: "#8B3F4D",
          color: "white",
          py: 1,
          textAlign: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ display: "flex", flexFlow: "column", justifyContent: "space-between", "@media (min-width:768px)": {
                flexFlow: "row"
              }, }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Iconify icon="material-symbols:check" mr={1} color={"#E1C466"} />
            Shipped within 2 business days
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Iconify icon="material-symbols:check" mr={1} color={"#E1C466"} />
            Want to pay afterwards? Pay with Klarna
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Iconify icon="material-symbols:check" mr={1} color={"#E1C466"} />
            Free shipping over $150
          </Typography>
        </Container>
      </Box>

      {/* Header */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          {/* Left Section: Logo */}
          {/* <Box display="flex" alignItems="center">
            <Typography
              variant="h4"
              component="div"
              sx={{ fontFamily: "cursive" }}
            >
              Brand Logo
            </Typography>
          </Box> */}
          <Box></Box>

          {/* Middle Section: Navigation Links */}
          <Box display="flex" alignItems="center" gap={3}>
            {/* <Typography variant="body1" component="a" href="#home">
              Home
            </Typography>
            <Typography variant="body1" component="a" href="#shop">
              Shop
            </Typography>
            <Typography variant="body1" component="a" href="#our-story">
              Our Story
            </Typography>
            <Typography variant="body1" component="a" href="#blog">
              Our Blog
            </Typography> */}
            <Box
              component="ul"
              sx={{ display: "none", listStyle: "none", gap: 3, p: 0, m: 0, "@media (min-width:768px)": {
                display: "flex"
              }, }}
            >
              {/* Home Link */}
              <Box component="li">
                <Typography
                  component="a"
                  href="#home"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Home
                </Typography>
              </Box>

              {/* Shop with Hover Dropdown Menu */}
              <Box
                component="li"
                sx={{
                  position: "relative",
                  "&:hover > ul": { display: "block" }, // Show dropdown on hover
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Shop
                  </Typography>
                  <Iconify icon="mingcute:down-line" />
                </Box>
                <Box
                  component="ul"
                  sx={{
                    display: "none", // Hidden by default
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: 1,
                    listStyle: "none",
                    padding: 1,
                    margin: 0,
                    borderRadius: "4px",
                    zIndex: 10,
                  }}
                >
                  <Box component="li" sx={{ padding: "8px 16px" }}>
                    <Typography
                      component="a"
                      href="#shop1"
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      Shop1
                    </Typography>
                  </Box>
                  <Box component="li" sx={{ padding: "8px 16px" }}>
                    <Typography
                      component="a"
                      href="#shop2"
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      Shop2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Our Story Link */}
              <Box component="li">
                <Typography
                  component="a"
                  href="#our-story"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Our Story
                </Typography>
              </Box>

              {/* Our Blog Link */}
              <Box component="li">
                <Typography
                  component="a"
                  href="#blog"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Our Blog
                </Typography>
              </Box>
            </Box>
            <Typography fontFamily={"Ballet"} color="#B86678" fontSize={32}>
              Btab Corp
            </Typography>
          </Box>

          {/* Right Section: Icons */}
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton sx={{ color: "#AD7081" }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: "#AD7081" }}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton sx={{ color: "#AD7081" }}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, ...sx }}>
        {children}
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#FAE8EB",
          padding: theme.spacing(4),
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3} rowGap={1}>
            <Typography variant="h6" color="#AD7081" pb={2}>
              OVER BTAB
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              ONS VERHAAL
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              ONLINE CADEAUKAART
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              WERKEN BIJ
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              ASSORTIMENT
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              BUSINESS
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              SUSTAINABILITY
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} rowGap={1}>
            <Typography variant="h6" color="#AD7081" pb={2}>
              KLANTENSERVICE
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              CONTACT
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              RUILEN & RETOURNEREN
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              ALGEMENE VOORWAARDEN
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              FAQ
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} rowGap={1}>
            <Typography variant="h6" color="#AD7081" pb={2}>
              Let's stay in touch!
            </Typography>
            <Typography
              textAlign={"left"}
              variant="body2"
              color={theme.palette.grey[800]}
            >
              Sign up for our newsletter and automatically receive the latest
              trends and nes in your mailbox!
            </Typography>
            <TextField
              label="Your email"
              size="small"
              fullWidth
              color="warning"
              sx={{
                marginY: 1,
                borderRadius: 8,
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none", // Remove the border
                  },
                },
              }}
            />
            <StyledButton>
              <Typography variant="body2" fontWeight={600} mr={2}>
                Subscribe
              </Typography>
              <Iconify icon="material-symbols:navigate-next" />
            </StyledButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3} rowGap={1}>
            <Typography variant="h6" color="#AD7081" pb={2}>
              #Blog Corp
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[800]}>
              Blog on Socials
            </Typography>
            <Box display="flex" gap={2} marginTop={2}>
              <InstagramIcon sx={{ color: "#AD7081" }} />
              <FacebookIcon sx={{ color: "#AD7081" }} />
              <YouTubeIcon sx={{ color: "#AD7081" }} />
              <PinterestIcon sx={{ color: "#AD7081" }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ backgroundColor: "white", pb: 1 }}>
        <CardMedia
          component={"img"}
          image="/images/paybar.png"
          alt="paybar"
          sx={{ height: "60px", objectFit: "contain" }}
        />
      </Box> */}
    </Box>
  );
}
