// File: ScrollToTopButton.tsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 40,
        right: 40,
        display: visible ? "block" : "none",
        zIndex: 1000,
      }}
    >
      <Box
        onClick={scrollToTop}
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          cursor: "pointer",
          width: 30,
          height: 30,
          "&:hover": {
            backgroundColor: "#555",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <KeyboardArrowUpIcon />
      </Box>
    </Box>
  );
}
