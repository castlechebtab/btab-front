import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Card,
  CardMedia,
  FormControl,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Iconify } from "src/components/iconify";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

type ProductImage = {
  imageUrl: string;
};

type Props = {
  product: {
    title: string;
    price: number;
    colors: string[];
    sizes: string[];
    images: ProductImage[];
  };
};

export function ProductSection({ product }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const carouselRef = useRef<any>(null); // Reference for the Carousel component

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
  };

  // Callback to update selected image index
  const handleCarouselChange = (nextSlide: number) => {
    setSelectedIndex(nextSlide);
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="body2" sx={{ cursor: "pointer", mb: 3 }}>
        &lt; Back To CR25 Collection
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={3}>
                <Box>
                  {product.images.map((image, index) => (
                    <Box
                      key={index}
                      onClick={() => handleSelect(index)}
                      sx={{
                        border: "1px solid",
                        borderColor: index === selectedIndex ? "#333" : "#ccc",
                        cursor: "pointer",
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        mt: index === 0 ? 0 : 1,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={image.imageUrl}
                        alt={`Product Image ${index}`}
                        sx={{ height: "50px", objectFit: "contain" }}
                      />
                    </Box>
                  ))}
                </Box>
              </Grid>
              {/* Left Section: Image Carousel */}
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "centerD",
                  }}
                >
                  <Box>
                    <Carousel
                      responsive={responsive}
                      showDots={true}
                      autoPlay={false}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={500}
                      ref={carouselRef} // Attach ref to the Carousel
                      beforeChange={handleCarouselChange}
                    >
                      {product.images.map((image, index) => (
                        <Card key={index} sx={{ boxShadow: "none" }}>
                          <CardMedia
                            component="img"
                            image={image.imageUrl}
                            alt={`Product Image ${index}`}
                            sx={{ height: "400px", objectFit: "contain" }}
                          />
                        </Card>
                      ))}
                    </Carousel>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* Video Section */}
            <Box mt={5} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  backgroundColor: "#F9F1EE",
                  color: "#000",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                VIDEO ▶
              </Button>
            </Box>
          </Box>
        </Grid>
        {/* Right Section: Product Details */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" mb={1}>
                {product.title}
              </Typography>
              <Typography variant="h6" color="textSecondary" mb={3}>
                ${product.price.toFixed(2)}
              </Typography>
            </Box>
            <CardMedia
              component="img"
              image="/images/certified.png"
              alt="badge"
              sx={{ width: "120px", height: "100px", objectFit: "contain" }}
            />
          </Box>

          {/* Colors */}
          <Typography variant="body1" fontWeight="bold" mb={1}>
            Colour: {selectedColor}
          </Typography>
          <Box>
            <Box display="flex" gap={2} mb={3}>
              {product.colors.map((color, index) => (
                <Chip
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    backgroundColor: color,
                    border: color === selectedColor ? "1px solid #333" : "0px",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Size Selector */}
          <Typography variant="body1" fontWeight="bold" mb={1}>
            Size
          </Typography>
          <FormControl fullWidth>
            <Select defaultValue="" displayEmpty sx={{ height: 40 }}>
              <MenuItem value="" disabled>
                PLEASE SELECT
              </MenuItem>
              {product.sizes.map((size, index) => (
                <MenuItem key={index} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, backgroundColor: "#000", color: "#fff" }}
          >
            ADD TO BAG
          </Button>

          {/* Icons for Additional Information */}
          <Box
            display="flex"
            justifyContent="center"
            gap={2}
            mt={3}
            sx={{ flexDirection: "column" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              mb={1}
            >
              <Iconify icon="carbon:delivery" mr={2} />
              <Typography variant="body2">Worldwide delivery</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              mb={4}
            >
              <Iconify icon="oui:package" mr={2} />
              <Typography variant="body2">
                Fixed Rate Returns within 14 days
              </Typography>
            </Box>
          </Box>

          {/* Accordion for Details */}
          {[
            "Description & Details",
            "Responsibly Sourced",
            "Fit",
            "Care Advice",
            "Delivery And Returns",
            "Need Help With This Item?",
            "Reviews ★★★★★",
          ].map((label, index) => (
            <Accordion key={index} variant="outlined">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">{label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  {label} content goes here...
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
