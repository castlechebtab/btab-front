'use client'

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import {
    Box,
    Typography,
    Button,
    Rating,
    Card,
    CardMedia,
    CardContent,
    Container,
    Grid,
  } from "@mui/material";
import { useSearchParams } from 'next/navigation';

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  useEffect(() => {
    if (productId) {
      console.log('Product ID:', productId);
    }
  }, [productId]);

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // 示例商品数据
  const product = {
    name: "Classic Baseball T-Shirt",
    price: 49.99,
    rating: 4.5,
    reviews: 128,
    description: "A comfortable and stylish baseball t-shirt featuring a classic design with contrasting raglan sleeves. Made from high-quality cotton blend material.",
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/tshirt_g.png',
      '/images/tshirt_g.png',
      '/images/tshirt_g.png',
      '/images/tshirt_g.png',
      '/images/tshirt_g.png',
    ]
  };
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Box sx={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px',
    }} className={inter.className}>
      <Box sx={{ 
        display: 'flex', 
        gap: '40px',
        flexWrap: { xs: 'wrap', md: 'nowrap' }
      }}>
        {/* 左侧图片区域 */}
        <Box sx={{ 
          flex: '1',
          minWidth: { xs: '100%', md: '600px' }
        }}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={600}
            height={600}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '8px',
              fontFamily:''
            }}
          />
          <Box sx={{ 
            display: 'flex', 
            gap: '10px', 
            marginTop: '20px'
          }}>
            {product.images.slice(1).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${product.name} detail ${index + 1}`}
                width={100}
                height={100}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              />
            ))}
          </Box>
        </Box>

        {/* 右侧商品信息 */}
        <Box sx={{ flex: '1' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 500,
              marginBottom: '16px'
            }}
          >
            {product.name}
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              color: '#2196F3',
              marginBottom: '16px'
            }}
          >
            ${product.price}
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography 
              sx={{ 
                marginLeft: '8px',
                color: '#666',
              }}
            >
              ({product.reviews} reviews)
            </Typography>
          </Box>

          <Typography 
            sx={{ 
              marginBottom: '24px',
              color: '#333',
            }}
          >
            {product.description}
          </Typography>

          {/* 尺码选择 */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography 
              sx={{ 
                marginBottom: '8px',
                fontWeight: 500
              }}
            >
              Size
            </Typography>
            <Box sx={{ display: 'flex', gap: '8px' }}>
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'contained' : 'outlined'}
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    minWidth: '48px',
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>

          {/* 数量选择 */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography 
              sx={{ 
                marginBottom: '8px',
                fontWeight: 500
              }}
            >
              Quantity
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Button 
                variant="outlined" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                sx={{ minWidth: '40px' }}
              >
                -
              </Button>
              <Typography >
                {quantity}
              </Typography>
              <Button 
                variant="outlined" 
                onClick={() => setQuantity(quantity + 1)}
                sx={{ minWidth: '40px' }}
              >
                +
              </Button>
            </Box>
          </Box>

          {/* 添加到购物车按钮 */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: '48px',
              backgroundColor: '#2196F3',
              '&:hover': {
                backgroundColor: '#1976D2'
              }
            }}
          >
            Add to Cart
          </Button>
          
        </Box>
        
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
  </Suspense>
  );
};

export default ProductDetail;