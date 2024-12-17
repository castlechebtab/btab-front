"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleRemoveProduct = (product: any) => {
    const updatedCart = cart.filter((item) => item.title !== product.title);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (product: any) => {
    const updatedCart = cart.map((item) =>
      item.title === product.title
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (product: any) => {
    const updatedCart = cart.map((item) =>
      item.title === product.title && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h4" mb={4}>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <ListItem
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 2 }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    marginRight: "16px",
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    marginRight: "16px",
                  }}
                >
                  <Button onClick={() => handleDecreaseQuantity(item)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button onClick={() => handleIncreaseQuantity(item)}>+</Button>
                </Box>
                <IconButton onClick={() => handleRemoveProduct(item)}>
                  <CloseIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Total:</Typography>
            <Typography variant="h5">
              ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            fullWidth
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
