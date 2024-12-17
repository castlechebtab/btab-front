// src/components/InfoSection.tsx

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

// Styled container for the whole section
const InfoSectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FCECEC", // Light pink background
  padding: "40px 20px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  textAlign: "center",
}));

// Styled box for each card
const InfoCard = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  padding: "20px",
}));

export function InfoSection() {
  return (
    <InfoSectionContainer>
      {/* Free Shipping Card */}
      <InfoCard>
        <LocalShippingIcon fontSize="large" />
        <Typography variant="h6" fontWeight="bold" mt={2}>
          FREE SHIPPING
        </Typography>
        <Typography variant="body2" mt={1}>
          Immerse yourself in the delight of complimentary shipping on every
          order. At Fashion Wonderland, we believe in enhancing your style
          without additional costs.
        </Typography>
      </InfoCard>

      {/* Customer Service Card */}
      <InfoCard>
        <HeadsetMicIcon fontSize="large" />
        <Typography variant="h6" fontWeight="bold" mt={2}>
          CUSTOMER SERVICE
        </Typography>
        <Typography variant="body2" mt={1}>
          Our customer service team is dedicated to your satisfaction, available
          24/7 to address your inquiries and ensure a seamless shopping
          experience.
        </Typography>
      </InfoCard>

      {/* Refer a Friend Card */}
      <InfoCard>
        <LoyaltyIcon fontSize="large" />
        <Typography variant="h6" fontWeight="bold" mt={2}>
          REFER A FRIEND
        </Typography>
        <Typography variant="body2" mt={1}>
          Join the style revolution together! Refer a friend to Fashion
          Wonderland and unlock exclusive rewards for both of you.
        </Typography>
      </InfoCard>
    </InfoSectionContainer>
  );
}
