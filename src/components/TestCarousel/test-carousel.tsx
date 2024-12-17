import React, { useRef } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Container, Typography } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export function TestCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll the carousel left or right
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box pb={10}>
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#000" }}>
          YOU MAY ALSO LIKE
        </Typography>
        <Box>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            // infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Box
              sx={{
                backgroundColor: "#F9F1EE",
                paddingY: 4,
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              {/* Review Title */}
              <Typography
                variant="h6"
                fontWeight="bold"
                mb={1}
                color="textPrimary"
              >
                BEAUTIFULLY MADE DRESS FOR A SPECIAL OCCASION
              </Typography>

              {/* Star Rating */}
              <Box display="flex" justifyContent="center" mb={2}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} sx={{ color: "#000" }} />
                ))}
              </Box>

              {/* Review Text */}
              <Typography variant="body2" color="textSecondary">
                The customer care team were responsive and very attentive. Great
                service overall! – Diana
              </Typography>
            </Box>
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
