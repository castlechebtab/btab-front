'use client';
import {
Chip,
Divider,
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
} from "@mui/material";
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import Image from 'next/image';
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
  export default function ClassicLayout() {
    return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Left Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: 500,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Image
                src="/images/polo_t.png"
                alt="Product"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Box>
          </Grid>
  
          {/* Right Info Section */}
          <Grid item xs={12} md={6}>
            <Chip 
              label="New" 
              color="primary" 
              sx={{ mb: 2 }} 
            />
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Product Name
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={4.5} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                (245 reviews)
              </Typography>
            </Box>
  
            <Typography 
              variant="h4" 
              color="primary" 
              sx={{ my: 2 }}
            >
              $129.00
            </Typography>
  
            <Typography 
              variant="body1" 
              sx={{ mb: 3 }}
            >
              Detailed product description with multiple lines of content. This premium product offers exceptional quality and unique features...
            </Typography>
  
            <Divider sx={{ my: 3 }} />
  
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                size="large"
                startIcon={<ShoppingCartIcon />}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                startIcon={<FavoriteIcon />}
              >
                Wishlist
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
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