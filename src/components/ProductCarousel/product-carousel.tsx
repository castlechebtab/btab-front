import React, { useRef } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IProduct } from "src/types/product";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
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

type Props = {
  products: Array<IProduct>;
};

export function ProductCarousel({ products }: Props) {
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
            {products.map((item, index) => (
              <Card
                key={index}
                sx={{
                  width: "300px",
                  marginRight: 2,
                  flexShrink: 0,
                  boxShadow: "none",
                  border: "1px solid #ddd",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{
                    height: "250px",
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" mt={1} color="textSecondary">
                    $ {item.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
