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
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import { ProductCarousel } from "src/components/ProductCarousel";
import { TestCarousel } from "src/components/TestCarousel";
import { EmailSignUp } from "src/components/EmailSignUp";

const GIFTS = [
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
    price: 10,
  },
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
    price: 10,
  },
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
    price: 10,
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

const STORIES = [
  {
    imageUrl: "/images/story/1.png", // Replace with the actual image URL
    title: "KIDS Christmas Collection",
    description:
      "Discover the CR25 KIDS Collection. This glittering edit encapsulates holiday season at its best. Expect princess-worthy dresses in layers of fluffy tulle, delicately embroidered florals and sparkling shooting stars.",
  },
  {
    imageUrl: "/images/story/2.png",
    title: "Catch a Falling Star Collection",
    description:
      'Introducing "Catch a Falling Star" — our new glittering Christmas collection encapsulating the mood of the Ziegfeld Follies: a group of decadent showgirls from the early 1900’s through to the 1940’s.',
  },
  {
    imageUrl: "/images/story/3.png",
    title: "The Autumn Leaves Collection",
    description:
      'The new Needle & Thread Autumn-Winter ‘24 collection is an ode to the beauty of autumn. Inspired by Emily Bronte’s poem "Fall leaves fall", this season takes on a truly autumnal feel with a rich, sophisticated colour palette of warm tones — caramel, burnt copper, dusky rose and cinnamon.',
  },
];

export function HomeView() {
  return (
    <Box>
      {/* Hero Banner */}
      <Box>
        <Container sx={{ py: 5 }}>
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
          />
        </Container>
      </Box>

      {/* Feature Collection */}
      <Box py={10} sx={{ backgroundColor: "#fff" }}>
        <Container>
          {/* Section Header */}
          <Typography
            variant="h4"
            textAlign="center"
            mb={2}
            color="textPrimary"
          >
            FEATURED COLLECTIONS
          </Typography>

          {/* Tabs for Categories */}
          <Box display="flex" justifyContent="center" mb={4}>
            {["DRESSES", "NEW ARRIVALS", "FORMAL", "PARTY", "DAY", "KIDS"].map(
              (tab, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  mx={2}
                  sx={{
                    cursor: "pointer",
                    fontWeight: index === 0 ? "bold" : "normal",
                    color: "#666",
                  }}
                >
                  {tab}
                </Typography>
              )
            )}
          </Box>

          {/* Left Text Section */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h5" fontWeight="bold" mb={1}>
                  DRESSES
                </Typography>
                <Divider sx={{ width: "100%", mb: 2 }} />
                <Typography variant="body2" color="textSecondary" mb={2}>
                  Our new season styles feature voluminous tulle, statement
                  ruffles and show-stopping evening gowns. In a variety of
                  lengths from mini, midi, and floor-length, available in sizes
                  AU 4-24.
                </Typography>
                <Button
                  variant="text"
                  color="inherit"
                  sx={{ textTransform: "none", fontWeight: "bold" }}
                >
                  SHOP ALL DRESSES
                </Button>
                <Divider sx={{ width: "180px", mb: 2 }} />
              </Box>
            </Grid>

            {/* Products Grid */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={4}>
                {GIFTS.map((product, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Card sx={{ boxShadow: "none", textAlign: "center" }}>
                      <CardMedia
                        component="img"
                        image={product.imageUrl}
                        alt={product.title}
                        sx={{ height: "300px", objectFit: "cover" }}
                      />
                      <CardContent>
                        <Typography variant="body1" fontWeight="bold">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          ${product.price.toFixed(2)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Test Carousel */}
      <TestCarousel />

      <Box>
        <Container sx={{ py: 5 }}>
          <CardMedia
            component="img"
            image={"/images/image 445.png"}
            alt={"image"}
            sx={{ objectFit: "cover" }}
          />
        </Container>
      </Box>

      <Box>
        <Container sx={{ py: 5 }}>
          <EmailSignUp />
        </Container>
      </Box>

      <Box pb={12}>
        <ProductCarousel products={BRANDS} />
      </Box>

      <Box pb={40}>
        <Container>
          {/* Section Header */}
          <Typography
            variant="h4"
            textAlign="center"
            mb={2}
            color="textPrimary"
          >
            OUR STORIES
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            mb={4}
            color="textSecondary"
          >
            The latest trends, new collections, fashion tips and more.
          </Typography>

          {/* Stories Grid */}
          <Grid container spacing={4}>
            {STORIES.map((story, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ boxShadow: "none", textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    image={story.imageUrl}
                    alt={story.title}
                    sx={{ height: "300px", objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      mb={2}
                    >
                      {story.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" mb={2}>
                      {story.description}
                    </Typography>
                    <Button variant="text" color="inherit">
                      READ MORE
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* See All Blogs Button */}
          <Box textAlign="center" mt={4}>
            <Button variant="outlined" color="inherit">
              SEE ALL MINI BLOGS
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
