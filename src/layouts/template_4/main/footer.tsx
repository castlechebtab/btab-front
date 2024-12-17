// src/components/Footer.tsx

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import LanguageIcon from "@mui/icons-material/Language";
import CurrencyDropdown from "src/components/CurrencyDropdown/currency-dropdown";

// Container for the footer section
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#8B1D3B", // Dark red background color
  color: "#FFFFFF", // White text color
  padding: "40px 20px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  [theme.breakpoints.up("md")]: {
    padding: "40px 80px", // Restore larger padding
  },
}));

// Styled section for footer items
const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  [theme.breakpoints.up("md")]: {
    maxWidth: "300px",
  },
}));

// Footer link style
const FooterLink = styled(Link)(({ theme }) => ({
  display: "block",
  color: "#FFFFFF",
  textDecoration: "none",
  margin: "4px 0",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export function Footer() {
  return (
    <FooterContainer>
      {/* Footer Menu Section */}
      <FooterSection>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          FOOTER MENU
        </Typography>
        <FooterLink href="#">Search</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Refund Policy</FooterLink>
        <FooterLink href="#">Shipping Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
      </FooterSection>

      {/* Why Choose Us Section */}
      <FooterSection>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          WHY CHOOSE US
        </Typography>
        <Typography variant="body2" fontWeight={300}>
          Choose us for an unparalleled fusion of style and substance. Elevate
          your wardrobe with fashion-forward designs curated for the modern
          individual, reflecting our commitment to excellence through
          exceptional craftsmanship and top-notch materials. Our diverse range
          offers versatility from casual chic to timeless classics, seamlessly
          adapting to your unique style and various occasions.
        </Typography>
      </FooterSection>

      {/* Customer Satisfaction Section */}
      <FooterSection>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          CUSTOMER SATISFACTION
        </Typography>
        <Typography variant="body2" fontWeight={300}>
          Customer satisfaction is not just a goal; it's our commitment. We
          strive to create an experience that goes beyond the transaction,
          ensuring every customer feels valued and delighted. We meticulously
          curate our collection, focusing on top-notch materials and
          craftsmanship to guarantee that each piece exceeds your expectations.
        </Typography>
      </FooterSection>

      {/* Our Mission Section */}
      <FooterSection>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          OUR MISSION
        </Typography>
        <Typography variant="body2" fontWeight={300}>
          Our mission is to redefine the fashion landscape by inspiring
          confidence and individuality through curated collections that resonate
          with modern lifestyles. We believe that fashion is a powerful form of
          self-expression, and we aim to empower individuals to embrace their
          unique style journeys with authenticity and flair.
        </Typography>
      </FooterSection>

      {/* Footer Bottom */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          paddingTop: "10px",
          display: "flex",
          flexDirection: "column", // Default for mobile
          justifyContent: "center",
          "@media (min-width:768px)": {
            flexDirection: "row", // Switch to row for larger screens
            justifyContent: "space-between", // Space items out for larger screens
            alignItems: "flex-start", // Align items at the start
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: 'flex-start'
          }}
        >
          <Box mb={3}>
            <CurrencyDropdown type="large" />
          </Box>
          <Typography variant="body2" mb={1}>
            © 2024, Fashion Wonderland. Powered by Shopify
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          gap={2}
          alignItems={"flex-end"}
        >
          {/* Payment icons */}
          <img
            src="/images/payment-icons/google-pay.png"
            alt="Payment Icon"
            width={40}
            height={20}
            style={{ objectFit: "cover" }}
          />
          <img
            src="/images/payment-icons/apple-pay.png"
            alt="Payment Icon"
            width={40}
            height={20}
            style={{ objectFit: "cover" }}
          />
          <img
            src="/images/payment-icons/master-card.png"
            alt="Payment Icon"
            width={40}
            height={20}
            style={{ objectFit: "cover" }}
          />
          <img
            src="/images/payment-icons/paypal.png"
            alt="Payment Icon"
            width={40}
            height={20}
            style={{ objectFit: "cover" }}
          />
          <img
            src="/images/payment-icons/visa.png"
            alt="Payment Icon"
            width={40}
            height={20}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
    </FooterContainer>
  );
}
