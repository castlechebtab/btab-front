"use client";

import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Divider,
  IconButton,
  Chip,
} from "@mui/material";

import { Iconify } from "src/components/iconify";
import WristWatchCollection from "src/components/WristWatchCollection/wrist-watch-collection";
import { InfoSection } from "../info-section";

const SHOP_OUR_COLLECTIONS = [
  {
    title: "WOMEN WEARS",
    image: "/images/woman_wears.webp",
    alt: "Women Wears",
  },
  {
    title: "LADIES HANDBAG",
    image: "/images/handbags.webp",
    alt: "Ladies Handbag",
  },
  {
    title: "LADIES FOOTWEAR",
    image: "/images/ladies_footwear.webp",
    alt: "Ladies Footwear",
  },
  {
    title: "MEN WEARS",
    image: "/images/men_wears.webp",
    alt: "Men Wears",
  },
  {
    title: "MEN FOOTWEAR",
    image: "/images/men_footwear.webp",
    alt: "Men Footwear",
  },
  {
    title: "WRIST WATCH",
    image: "/images/wrist_watch.webp",
    alt: "Wrist Watch",
  },
];

const WRIST_WATCH = [
  {
    name: "Waterproof Women's Luminous Dual Calendar Watch",
    price: "$189.00",
    image: "/images/wrist_watch.webp",
    colors: ["#0000FF", "#FFD700", "#000"],
  },
  {
    name: "Men's Fashion Sports Quartz Watch",
    price: "$268.00",
    image: "/images/wrist_watch.webp",
    colors: ["#000"],
  },
  {
    name: "Women's Square Copper Strips Mid-ancient Watch",
    price: "$218.00",
    image: "/images/wrist_watch.webp",
    colors: ["#000"],
  },
  {
    name: "Fashion Classic Business Watch Luxury Diamond",
    price: "$38.00",
    image: "/images/wrist_watch.webp",
    colors: ["#000"],
  },
  {
    name: "Women Retro Love Watch",
    price: "$20.00",
    image: "/images/wrist_watch.webp",
    colors: ["#FF0000", "#800080", "#000", "#FFC0CB"],
  },
  {
    name: "Round Dial True Waterproof NFC Screen Heart Rate Watch",
    price: "From $174.00",
    image: "/images/wrist_watch.webp",
    colors: ["#000"],
  },
  {
    name: "Digital Men Watch",
    price: "$63.00",
    image: "/images/wrist_watch.webp",
    colors: ["#000", "#FF0000"],
  },
  {
    name: "Polygon Men's Multi-waterproof Luminous Calendar Watch",
    price: "$182.00",
    image: "/images/wrist_watch.webp",
    colors: ["#000"],
  },
];

const LADIES_FOOTWEAR = [
  {
    name: "Women's Retro Buckle Beach Slippers sandals",
    price: "$101.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#000', '#0000FF', '#800080'],
  },
  {
    name: "Women's Butterfly High Heel Sandals",
    price: "$122.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#000'],
  },
  {
    name: "Women's Versatile Fashion Retro Loafers",
    price: "$96.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#000'],
  },
  {
    name: 'Lightweight Breathable Steel Toe Cap Safety Shoes Footwear',
    price: "$135.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#0000FF', '#FFC0CB'],
  },
  {
    name: 'New Lozenge Home Women Solid Color Anti-Slip Floor Bathroom Slippers',
    price: "$59.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#FF0000'],
  },
  {
    name: "Women's Cartoon Fashion bedroom Plush Slippers",
    price: "From $102.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#000'],
  },
  {
    name: 'French British Style Thick Sole Boots',
    price: "$272.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#000'],
  },
  {
    name: "Women's Fashion Denim Knee-high Boots",
    price: "$313.00",
    image: '/images/ladies_footwear.webp',
    colors: ['#000'],
  },
];


export function HomeView() {
  return (
    <Box>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              BEHIND THE BRAND
            </Typography>
            <Typography variant="body1" gutterBottom>
              Welcome to Fashion Wonderland – Where Style Meets Imagination!
            </Typography>
            <Typography variant="body2" gutterBottom>
              At Fashion Wonderland, we believe that fashion is not just about
              clothing; it's a journey of self-expression, creativity, and
              confidence. As the architects of your style narrative, we invite
              you to delve into the enchanting world behind the brand.
            </Typography>
            <Button variant="text" color="primary" sx={{ marginTop: "16px" }}>
              LEARN MORE ABOUT OUR BRAND
            </Button>
          </Grid>

          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src="/images/image 462.png" // Replace with your image URL
              alt="Behind the Brand"
              sx={{
                width: "400px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          backgroundColor: "#5F0022",
          height: "168px",
          display: "flex",
          alignItems: "center",
          px: "60px",
        }}
      >
        <Typography color="white" variant="h3">
          Trendsetting Designs Tailored For You
        </Typography>
      </Box>
      <Container sx={{ py: 5 }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              SHOP OUR COLLECTIONS
            </Typography>
            <Typography variant="body2" sx={{ cursor: "pointer" }}>
              View all
              <IconButton sx={{ ml: 0.5 }}>
                <Iconify icon="grommet-icons:form-next" />
              </IconButton>
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {SHOP_OUR_COLLECTIONS.map((collection, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={collection.image}
                    alt={collection.alt}
                    sx={{ filter: "brightness(0.7)" }}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "1.2rem",
                      width: "100%",
                      padding: "20px",
                    }}
                  >
                    {collection.title}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Container sx={{ py: 5 }}>
        <WristWatchCollection products={WRIST_WATCH} title="WRIST WATCH" />
      </Container>

      <Container sx={{ py: 5 }}>
        <WristWatchCollection products={LADIES_FOOTWEAR} title="LADIES FOOTWEAR" />
      </Container>

      <InfoSection />
    </Box>
  );
}
