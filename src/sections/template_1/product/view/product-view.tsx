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

const PRODUCT = {
  title: "BJ's PJs - Bettina Short Sleeve T-shirt",
  price: 49.95,
  imageUrls: [
    "/images/product/1.avif",
    "/images/product/2.avif",
    "/images/product/3.avif",
    "/images/product/4.avif",
  ],
};

const SIZES = ["S", "M", "L", "XL"];

export function ProductView() {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(
    PRODUCT.imageUrls[0] || ""
  );
  const [giftBox, setGiftBox] = useState<string>("No");

  const handleSizeChange = (newSize: string) => {
    if (newSize !== null) {
      setSelectedSize(newSize);
    }
  };

  const handleGiftBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGiftBox(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#999",
          justifyContent: "center",
          py: 3
        }}
      >
        <Typography variant="body2" component={"a"} color="#999" href="/">
          Home
        </Typography>
        <Iconify icon="material-symbols:navigate-next" />
        <Typography variant="body2" component={"a"} color="#999" href="#">
          Pyjamas
        </Typography>
        <Iconify icon="material-symbols:navigate-next" />
        <Typography variant="body2" component={"a"} color="#999" href="#">
          Pyjama Soft Pink
        </Typography>
      </Box>
      <Box sx={{ display: "flex", padding: 4, gap: 4 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              {/* Product Image Section */}
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src={currentImageUrl}
                  alt="Product Image"
                  sx={{ width: "100%", borderRadius: "8px" }}
                />
                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                  {PRODUCT.imageUrls.map((imageUrl, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={imageUrl}
                      alt={`Thumbnail ${index}`}
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "4px",
                        border: "1px solid",
                        cursor: "pointer",
                        borderColor:
                          currentImageUrl === imageUrl ? "#AD7081" : "#ddd",
                      }}
                      onClick={() => {
                        setCurrentImageUrl(imageUrl);
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              {/* Product Details Section */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#d18b8e" }}
                  component={"a"}
                  href="#"
                >
                  The Pink Gift Guide
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ fontWeightmt: 1, color: "#AD7081" }}
                >
                  BJ's PJs - Bettina Short Sleeve T-shirt
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: "#333", mt: 1 }}
                >
                  ${PRODUCT.price.toFixed(2).toLocaleString()}
                </Typography>

                <Box
                  sx={{
                    backgroundColor: "#fde7e7",
                    padding: 3,
                    borderRadius: 3,
                  }}
                >
                  {/* Size Selection */}

                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }}>Size:</Typography>
                    {SIZES.map((size) => (
                      <Button
                        key={size}
                        variant={"contained"}
                        color="inherit"
                        sx={{
                          borderRadius: 20,
                          minWidth: "48px",
                          height: "40px",
                          border: "1px solid",
                          borderColor:
                            selectedSize === size ? "#d18b8e" : "#fff",
                          backgroundColor: "#ffffff",
                          color: selectedSize === size ? "#d18b8e" : "#000",
                          "&:hover": {
                            borderColor: "#d18b8e",
                          },
                          fontWeight: 700,
                        }}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size}
                      </Button>
                    ))}
                    <Button
                      variant="contained"
                      sx={{
                        color: "#d18b8e",
                        height: "40px",
                        backgroundColor: "white",
                        borderRadius: 20,
                        fontWeight: "bold",
                        textTransform: "none",
                        ml: 2,
                      }}
                    >
                      Go to kids sizes
                    </Button>
                  </Box>

                  {/* Embroidery Options */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      mt: 3,
                    }}
                  >
                    <FormControl
                      sx={{
                        maxWidth: "160px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Embroidery on the chest (+$9.95)</Typography>
                      <TextField
                        placeholder="Enter here"
                        variant="standard"
                        inputProps={{ maxLength: 9 }}
                        sx={{ mt: 1 }}
                        color="warning"
                      />
                    </FormControl>
                    <FormControl
                      sx={{
                        maxWidth: "160px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Embroidery color</Typography>
                      <Select
                        variant="standard"
                        defaultValue=""
                        sx={{ mt: 1 }}
                        color="warning"
                      >
                        <MenuItem value="">Select color</MenuItem>
                        <MenuItem value="red">Red</MenuItem>
                        <MenuItem value="blue">Blue</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  {/* Wish Card Selection */}
                  <Box sx={{ mt: 3 }}>
                    <Typography>Add a wish card</Typography>
                    <Select
                      defaultValue="default"
                      sx={{ mt: 1, width: "300px", height: "32px", backgroundColor: "white" }}
                      color="warning"
                    >
                      <MenuItem value="default">
                        -- Choose Add a wish card --
                      </MenuItem>
                      <MenuItem value="happy-birthday">Happy Birthday</MenuItem>
                      <MenuItem value="congratulations">
                        Congratulations
                      </MenuItem>
                    </Select>
                  </Box>

                  {/* Gift Box Option */}
                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography>Add a gift box</Typography>

                    <Iconify icon="material-symbols:info" color="#d18b8e" />
                  </Box>
                  <RadioGroup
                    row
                    value={giftBox}
                    onChange={handleGiftBoxChange}
                    sx={{ mt: 1 }}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio color="warning" />}
                      label="Yes"
                      // sx={{ color: giftBox === "Yes" ? "#d18b8e" : "#000" }}
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio color="warning" />}
                      label="No"
                    />
                  </RadioGroup>

                  {/* Subtotal and Add to Cart Button */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="body2">Subtotal</Typography>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        ${PRODUCT.price.toFixed(2).toLocaleString()}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<AddShoppingCartIcon />}
                      sx={{
                        backgroundColor: "#d18b8e",
                        textTransform: "none",
                        borderRadius: 20,
                        "&:hover": {
                          backgroundColor: "#974854",
                        },
                      }}
                    >
                      Add to Cart
                      <Iconify icon="material-symbols:navigate-next" />
                    </Button>
                  </Box>
                </Box>

                {/* Discount Message */}
                <Box
                  sx={{
                    backgroundColor: "#fde7e7",
                    color: "#A15b5e",
                    padding: 2,
                    borderRadius: "8px",
                    mt: 3,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    Get 10% OFF when you buy a second pyjama!
                  </Typography>
                  <Typography variant="body2">
                    Discount applied automatically at checkout—no code needed!
                  </Typography>
                </Box>

                {/* Additional Information */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                    fontSize: "0.9rem",
                    color: "#888",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="material-symbols:check"
                      mr={1}
                      color={"#E1C466"}
                    />
                    <Box
                      sx={{
                        backgroundColor: "#D78894",
                        p: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        color="black"
                      >
                        Klarna.
                      </Typography>
                    </Box>
                    <Typography ml={3}>Buy now, pay later.</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Iconify
                      icon="material-symbols:check"
                      mr={1}
                      color={"#E1C466"}
                    />
                    <Typography>Free shipping over $150</Typography>
                  </Box>
                </Box>

                {/* Accordion Sections */}
                <Box sx={{ mt: 3 }}>
                  {[
                    "Specifications",
                    "Product Description",
                    "Product Images Notification",
                    "FREE Scent Card",
                    "Delivery",
                  ].map((section) => (
                    <Accordion key={section}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${section}-content`}
                        id={`${section}-header`}
                      >
                        <Typography>{section}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed eget libero nec dui vestibulum aliquet.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Brand Section */}
      <Box pb={10}>
        <Container sx={{ textAlign: "center", py: 5 }}>
          <Typography variant="h4" sx={{ mb: 3, color: "#AD7081" }}>
            The gift guide
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
    </Box>
  );
}
