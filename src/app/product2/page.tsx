'use client';
import {
    Box,
    Typography,
    Button,
    Paper,
    Rating,
    Card,
    CardMedia,
    CardContent,
    Container,
    Grid,
    Breadcrumbs,
    Link,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    ButtonGroup,
    TextField,
  } from "@mui/material";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const images = [
    '/images/tshirt_b.png',
    '/images/tshirt_b.png',
    '/images/tshirt_b.png',
    '/images/tshirt_b.png',
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
import { useState } from 'react';

export default function Product2Page() {
  const [size, setSize] = useState('M');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box style={{ padding: '2%' }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/product">
          Products
        </Link>
        <Typography color="text.primary">Product Details</Typography>
      </Breadcrumbs>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Product Details
          </Typography>
          <Box sx={{ 
            '.slick-slide img': {
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            },
            '.slick-dots': {
              bottom: 16
            },
            '.slick-dots li button:before': {
              color: 'white'
            }
          }}>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img 
                    src={image} 
                    alt={`Product image ${index + 1}`}
                    style={{ width: '100%', height: '400px' }}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Product Information
          </Typography>
          <Typography variant="h4" color="black" sx={{ my: 2 }}>
            $ 999.00
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Size</InputLabel>
            <Select
              label="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <MenuItem value="XS">XS</MenuItem>
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Color</Typography>
            <ButtonGroup>
              <Button sx={{ backgroundColor: '#000000', '&:hover': { backgroundColor: '#333333' } }}></Button>
              <Button sx={{ backgroundColor: '#ffffff', border: '1px solid #ccc', '&:hover': { backgroundColor: '#f5f5f5' } }}></Button>
              <Button sx={{ backgroundColor: '#ff0000', '&:hover': { backgroundColor: '#cc0000' } }}></Button>
              <Button sx={{ backgroundColor: '#0000ff', '&:hover': { backgroundColor: '#0000cc' } }}></Button>
            </ButtonGroup>
          </Box>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Detailed product description goes here...
          </Typography>
          <TextField
            label="Quantity"
            type="number"
            defaultValue={1}
            inputProps={{ min: 1, max: 10 }}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button 
            variant="contained" 
            startIcon={<ShoppingCartIcon />}
            size="large"
            sx={{ backgroundColor: 'black' }}
            onClick={() => {
              // Add to cart logic here
              alert('Added to cart!');
            }}
          >
            Add to Cart
          </Button>
        </Paper>
      </Grid>
    </Grid>
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
