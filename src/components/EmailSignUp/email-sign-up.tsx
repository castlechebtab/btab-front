import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Iconify } from "../iconify";

export function EmailSignUp() {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F1EE",
        paddingY: 6,
        textAlign: "center",
      }}
    >
      <Container>
        {/* Header */}
        <Typography variant="h5" fontWeight="bold" mb={1} color="textPrimary">
          JOIN BTAB CORP
        </Typography>
        <Typography variant="body1" mb={4} color="textSecondary">
          Sign up for 10% off your first order and hear about the latest
          launches, special events, inspiration & more
        </Typography>

        {/* Email Input and Sign-Up Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              width: "360px",
            }}
          >
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              size="small"
              sx={{ height: 40, pr: 10 }}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "black",
                height: 40,
                position: "absolute",
                right: "0",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>

        {/* Checkbox */}
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={
            <Typography variant="body2" color="textSecondary">
              By signing up you agree to receive marketing material from Btab
              Corp Ltd.
            </Typography>
          }
          sx={{ justifyContent: "center", marginBottom: 3 }}
        />

        {/* Social Media Icons */}
        <Box display="flex" justifyContent="center" gap={3}>
          <FacebookIcon sx={{ color: "#000" }} />
          <InstagramIcon sx={{ color: "#000" }} />
          <TwitterIcon sx={{ color: "#000" }} />
          <PinterestIcon sx={{ color: "#000" }} />
          {/* Add or create this icon as needed */}
        </Box>
      </Container>
    </Box>
  );
}
