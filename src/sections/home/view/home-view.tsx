"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ProductCarousel } from "src/components/ProductCarousel";
import { TestCarousel } from "src/components/TestCarousel";
import { EmailSignUp } from "src/components/EmailSignUp";
import CartModal from "src/components/CartModal/cart-modal";
import productData from "src/usage/product.json";
import CustomChart from 'src/components/Chart-1/chart_first';
import CohortChart from 'src/components/Chart-2/chart_second';

const data = [
  { name: 'Nov 2023', current: 2000000, previous: 1500000 },
  { name: 'Dec 2023', current: 2200000, previous: 1600000 },
  { name: 'Jan 2024', current: 2100000, previous: 1550000 },
  { name: 'Feb 2024', current: 2300000, previous: 1700000 },
  { name: 'Mar 2024', current: 2400000, previous: 1800000 },
  { name: 'Apr 2024', current: 2500000, previous: 1850000 },
  { name: 'May 2024', current: 2600000, previous: 1900000 },
];

const sampleData = [
  { x: 0, y: 0, value: 10 },
  { x: 1, y: 0, value: 20 },
  { x: 2, y: 0, value: 30 },
  { x: 0, y: 1, value: 15 },
  { x: 1, y: 1, value: 25 },
  { x: 2, y: 1, value: 35 },
  { x: 0, y: 2, value: 5 },
  { x: 1, y: 2, value: 10 },
  { x: 2, y: 2, value: 20 },
];

const GIFTS = [
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "771 Crew Neck Jumper Fleece",
    price: 10,
  },
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "772 Crew Neck Jumper Fleece",
    price: 12,
  },
  {
    imageUrl: "/images/crew_jumper.webp",
    title: "773 Crew Neck Jumper Fleece",
    price: 15,
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

  const [cart, setCart] = useState<any[]>([]); // State to hold the items in the cart
  const [cartModalOpen, setCartModalOpen] = useState(false);
  // Load cart from localStorage if available
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product: any) => {
    const existingProduct = cart.find((item) => item.title === product.title);

    if (existingProduct) {
      // If product exists in cart, increase quantity
      existingProduct.quantity += 1;
      const updatedCart = [...cart];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If product doesn't exist, add it to cart with quantity 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Open the cart modal
    setCartModalOpen(true);
  };

  const calculateTotal = (updatedCart: any[]) => {
    const total = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem("cartTotal", JSON.stringify(total)); // Save the total amount to localStorage
  };

  const handleRemoveProduct = (product: any) => {
    const updatedCart = cart.filter((item) => item.title !== product.title);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Increase product quantity
  const handleIncreaseQuantity = (product: any) => {
    const updatedCart = cart.map((item) =>
      item.title === product.title
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Decrease product quantity
  const handleDecreaseQuantity = (product: any) => {
    const updatedCart = cart.map((item) =>
      item.title === product.title && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };


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
          <Typography variant="h4" textAlign="center" mb={2} color="textPrimary">
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
                        {/* Add to Cart Button */}
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ mt: 2 }}
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <CartModal
        open={cartModalOpen}
        onClose={() => setCartModalOpen(false)}
        cart={cart}
        handleRemoveProduct={handleRemoveProduct}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        calculateTotal={calculateTotal}
      />
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

      {/* OUR STORIES */}
      <Box pb={40}>
        <Container>
          {/* Section Header */}
          <Typography variant="h4" textAlign="center" mb={2} color="textPrimary">
            OUR STORIES
          </Typography>
          <Typography variant="body1" textAlign="center" mb={4} color="textSecondary">
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
                    <Typography variant="h6" fontWeight="bold" gutterBottom mb={2}>
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
          <CustomChart
            header="Total Sales"
            totalAmount="$14,358,452.78"
            increasePercentage={50}
            data={[
              { name: "Week 1", current: 5000, previous: 4500 },
              { name: "Week 2", current: 7000, previous: 6500 },
            ]}
            dataKeyCurrent="current"
            dataKeyPrevious="previous"
            chartType="line" // Change to 'area' or 'bar' for different shapes
          />
           <CohortChart
          />
        </Container>
      </Box>
    </Box>

  );
}
