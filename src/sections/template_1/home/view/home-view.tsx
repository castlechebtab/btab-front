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
} from "@mui/material";
import { Iconify } from "src/components/iconify";
import { StyledButton } from "src/components/StyledButton";

const CATEGORIES = [
  {
    imageUrl: "/images/191213.webp",
    title: "Health",
  },
  {
    imageUrl: "/images/213540.webp",
    title: "Beauty",
  },
  {
    imageUrl: "/images/Ben_boys_shorts_blue_mnnt-l1.jpg",
    title: "Kids & Baby",
  },
  {
    imageUrl: "/images/Bluey's_Bluebait.jpg",
    title: "Pets",
  },
];

const GIFTS = [
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
  },
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
  },
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
  },
];

const BRANDS = [
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
];

const SERVICES = [
  {
    title: "Free shipping",
    content: "on orders over 100 euros",
  },
  {
    title: "Secure Payment",
    content: "pay later with klarna",
  },
  {
    title: "Fast Delivery",
    content: "all products are shipped within 2 working days",
  },
];

export function HomeView() {
  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          backgroundImage: 'url("/images/landing.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {/* <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          YOUR BEAUTY TICKET
        </Typography> */}
        {/* <Typography variant="h5">Create Your Style</Typography> */}
        {/* <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
          Shop Now
        </Button> */}
      </Box>

      {/* Category Section */}
      <Box sx={{ backgroundColor: "#FAE8EB" }}>
        <Container sx={{ py: 5 }}>
          <Grid container spacing={4} justifyContent="center">
            {CATEGORIES.map((category, index) => (
              <Grid item key={index} xs={6} sm={3}>
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    // component="img"
                    src={category.imageUrl}
                    // variant="rounded"
                    alt={category.title}
                    sx={{
                      borderRadius: "50%",
                      height: "100px",
                      width: "100px",
                      margin: "auto",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ mt: 2, color: "#AD7081" }}
                  >
                    {category.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Gift Guide Section */}
      <Box>
        <Container sx={{ textAlign: "center", py: 5 }}>
          <Typography variant="h4" sx={{ mb: 3, color: "#AD7081" }}>
            Friends of the brand
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {GIFTS.map((item, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt="Product Image"
                    sx={{
                      height: "250px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1">{item.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Special Offer Section */}
      <Box
        sx={{
          // backgroundColor: "#f5f5f5",
          py: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box sx={{ backgroundColor: "#EF471A", borderRadius: 8, p: 2 }}>
                <Box
                  sx={{
                    backgroundImage: 'url("/images/fashion.jfif")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    borderRadius: "8px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#EF471A",
                      fontWeight: "bold",
                      p: 3,
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    MASSIVE DISCOUNTS
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ color: "white" }}>
                  FASHION
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" sx={{ mb: 2, color: "#AD7081" }}>
                Get ready for cozy days with our autumn collection!
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, textAlign: "left" }}>
                Featuring soft bamboo, long kimonos, and luxuriously comfortable
                pajamas, we have new arrivals for the cooler months. Prepare for
                yourself or as a special gift.
              </Typography>
              <StyledButton>
                <Typography variant="body2" fontWeight={600} mr={2}>
                  Get Inspired!
                </Typography>
                <Iconify icon="material-symbols:navigate-next" />
              </StyledButton>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Banner */}
      <Box
        sx={{
          backgroundImage: 'url("/images/landing1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {/* <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          YOUR BEAUTY TICKET
        </Typography> */}
        {/* <Typography variant="h5">Create Your Style</Typography> */}
        {/* <Button variant="contained" color="secondary" sx={{ mt: 3 }}>
          Shop Now
        </Button> */}
      </Box>

      {/* Brand Section */}
      <Box pb={10}>
        <Container sx={{ textAlign: "center", py: 5 }}>
          <Typography variant="h4" sx={{ mb: 3, color: "#AD7081" }}>
            Friends of the brand
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {BRANDS.map((item, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt="Product Image"
                    sx={{
                      height: "250px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Box>
                      <Typography variant="body1">{item.title}</Typography>
                      <Typography variant="body2" mt={2}>
                        $ {item.price.toFixed(2).toLocaleString()}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section */}
      <Box pb={40} sx={{ borderTop: "1px solid #AD7081" }}>
        <Container sx={{ textAlign: "center", py: 5 }}>
          <Grid container spacing={4} justifyContent="center">
            {SERVICES.map((item, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Box>
                  <Typography variant="h5" color="#AD7081">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.content}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
