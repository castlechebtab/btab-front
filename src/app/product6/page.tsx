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
  const [selectedSize, setSelectedSize] = useState(41);
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

      <Grid container spacing={6} sx={{ mb: 4 }}>
        {/* 左侧图片展示区 */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2, maxWidth: '500px', mx: 'auto' }}>
            <img
              src="/images/0301temp2.jpg"
              alt="Product Image"
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>
          <Grid container spacing={1} sx={{ maxWidth: '500px', mx: 'auto' }}>
            {[1,2,3,4].map((_, index) => (
              <Grid item key={index} xs={2.4}>
                <Box sx={{ 
                  width: '100%',
                  paddingTop: '100%', // 保持1:1宽高比
                  position: 'relative'
                }}>
                  <img
                    src={`/images/0301temp2.jpg`}
                    alt={`Thumbnail ${index + 1}`}
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      border: '1px solid #ddd'
                    }}
                  />
                </Box>
              </Grid>
            ))}
            <Grid item xs={2.4}>
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '100px',
                  borderRadius: '4px',
                  borderColor: '#ddd',
                  color: '#666',
                  '&:hover': {
                    borderColor: '#999',
                    backgroundColor: 'rgba(0,0,0,0.04)'
                  }
                }}
              >
                +more
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/* 右侧商品信息 */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
            Product Name
          </Typography>
          <Typography variant="h5" color="text.primary" sx={{ mb: 4 }}>
            $ 99.99
          </Typography>

          {/* Size Selection */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2 }}>
              Select Size
            </Typography>
            <ButtonGroup variant="contained" sx={{ 
              gap: '8px', 
              boxShadow: 'none',
              '& .MuiButton-root': {
                borderRight: 'none',
                border: '1px solid #ddd'
              }
            }}>
              {Array.from({length: 9}, (_, i) => 41 + i).map((size) => (
                <Button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  sx={{ 
                    width: '60px',
                    height: '30px',
                    backgroundColor: size === selectedSize ? 'black' : '#f0eee7',
                    color: size === selectedSize ? 'white' : 'text.primary',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: size === selectedSize ? 'black' : '#f0eee7'
                    }
                  }}
                >
                  {size}
                </Button>
              ))}
            </ButtonGroup>
          </Box>

          {/* Color Selection */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2 }}>
              Select Color
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {['#b5a07d', '#cec1a9', '#ede7dd'].map((color) => (
                <Box
                  key={color}
                  sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    backgroundColor: color,
                    border: '2px solid #ddd',
                    cursor: 'pointer',
                    '&:hover': { borderColor: '#999' }
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* 加入购物车按钮 */}
            <Button 
            variant="contained"
            size="large"
            startIcon={<ShoppingCartIcon />}
            sx={{
              width: '100%',
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: '#333'
              }
            }}
          >
            Add to Cart
          </Button>
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
