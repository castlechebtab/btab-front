"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  MenuItem,
  Select,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Iconify } from "src/components/iconify";
import { ProductCarousel } from "src/components/ProductCarousel";
import { ProductSection } from "../product-section";

const PRODUCTS = [
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
    price: 36.95,
  },
  {
    imageUrl: "/images/singlet.jfif",
    title: "227 Adult Singlet",
    price: 24.95,
  },
  {
    imageUrl: "/images/koala_foil.jfif",
    title: "BGY Koala Foil - Ladies Slim Fit T-shirt",
    price: 21.5,
  },
  {
    imageUrl: "/images/191213.webp",
    title: "227 Adult Singlet",
    price: 24.95,
  },
  {
    imageUrl: "/images/Ben_boys_shorts_blue_mnnt-l1.jpg",
    title: "BGY Koala Foil - Ladies Slim Fit T-shirt",
    price: 21.5,
  },
];

const PRODUCT = {
  title: "Hallie Ambre Ankle Gown",
  price: 1500,
  colors: ["Pink", "Blue"],
  sizes: ["M", "L", "XL", "XXL"],
  images: [
    { imageUrl: "/images/product/1.png" },
    { imageUrl: "/images/product/1.png" },
    { imageUrl: "/images/product/1.png" },
    { imageUrl: "/images/product/1.png" },
  ],
};

const SIZES = ["S", "M", "L", "XL"];

export function ProductView() {
  return (
    <Box>
      {/* Page BreadCrumb Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#333",
          py: 1,
          pl: 10,
          backgroundColor: "#f4ede5",
        }}
      >
        <Typography variant="body2" component={"a"} color="#333" href="/">
          Home
        </Typography>
        <Iconify icon="material-symbols:navigate-next" />
        <Typography variant="body2" component={"a"} color="#333" href="#">
          Hallie Ombre Ankle Gown
        </Typography>
      </Box>

      {/* Product Section */}
      <ProductSection product={PRODUCT} />

      {/* Brand Section */}
      <ProductCarousel products={PRODUCTS} />
    </Box>
  );
}
