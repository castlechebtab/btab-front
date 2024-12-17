import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Chip,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle"; // For color options

type Props = {
  products: {
    name: string;
    price: string;
    image: string;
    colors: Array<string>;
  }[];
  title: string;
};

const WristWatchCollection = ({ products, title = "WRIST WATCH" }: Props) => {
  return (
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
          {title}
        </Typography>
        <Typography variant="body2" sx={{ cursor: "pointer" }}>
          View all
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ borderRadius: "8px", overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {product.price}
                </Typography>
                <Box sx={{ display: "flex", gap: "8px" }}>
                  {product.colors.map((color, idx) => (
                    <IconButton
                      key={idx}
                      sx={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: color,
                        border: "1px solid #ccc",
                        borderRadius: "50%",
                        "&:hover": { opacity: 0.7 },
                      }}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <Chip
                      label={`+${product.colors.length - 3}`}
                      size="small"
                      sx={{ backgroundColor: "#f0f0f0" }}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WristWatchCollection;
