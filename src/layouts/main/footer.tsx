import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Iconify } from "src/components/iconify";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f4ede5",
        padding: "32px 64px",
        borderTop: "1px solid #ddd",
      }}
    >
      <Grid container spacing={4}>
        {/* Service & Security Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="black" pb={2}>
            Service & Security
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "underline",
            }}
            mb={1}
          >
            <Iconify icon="carbon:delivery" mr={2} />
            <Box>
              <Typography variant="body2" color="textSecondary">
                <strong>Delivery</strong>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                worldwide delivery
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "underline",
            }}
            mb={1}
          >
            <Iconify icon="oui:package" mr={2} />
            <Box>
              <Typography variant="body2" color="textSecondary">
                <strong>Returns</strong>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Within 14 days
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }} mb={1}>
            <Iconify icon="ri:secure-payment-line" mr={2} />
            <Box>
              <Typography variant="body2" color="textSecondary">
                <strong>Secure payment and data</strong>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                SSL encryption for secure transactions and personal data.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* About Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" color="black" pb={2}>
            About Us
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Corporate Responsibility
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Social Responsibility
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Environmental Management
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Sitemap
          </Typography>
        </Grid>

        {/* Customer Care Section */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" color="black" pb={2}>
            Customer Care
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Call Us
          </Typography>
          <Typography variant="body2" color="textSecondary" pb={1}>
            Email Us
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Customer Care
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Returns
          </Typography>
          <Typography variant="body2" color="textSecondary">
            FAQ
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Size Chart
          </Typography>
        </Grid>

        {/* Newsletter Signup Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="h6" color="black" pb={2}>
              Enjoy 10% Off Your First Order
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
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
            <FormControlLabel
              control={<Checkbox color="default" />}
              label={
                <Typography variant="body2" color="textSecondary">
                  By signing up you agree to receive marketing material from
                  Btab Corp Ltd.
                </Typography>
              }
              sx={{ alignItems: "flex-start", marginTop: 1 }}
            />
          </Box>
          {/* Social Media Section */}
          <Box>
            <Typography variant="h6" color="black" mt={2}>
              Follow Us On
            </Typography>
            <Box display="flex" gap={2} mt={1.5}>
              <InstagramIcon sx={{ color: "black" }} />
              <FacebookIcon sx={{ color: "black" }} />
              <YouTubeIcon sx={{ color: "black" }} />
              <PinterestIcon sx={{ color: "black" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        textAlign="center"
        mt={8}
        color="textSecondary"
        position={"relative"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "column" }}
      >
        <Typography variant="body2">
          ©2024 BTAB CORP DESIGN HOLDINGS LTD
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          mt={1}
          sx={{ }}
        >
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="textSecondary"
          >
            Terms of Use
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="#"
            color="textSecondary"
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
