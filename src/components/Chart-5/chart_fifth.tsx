import React from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";

interface ProductChartData {
  name: string;
  current: number; // Current value
  previous?: number; // Optional previous value
  percentage?: number; // Optional percentage
  isIncrease?: boolean; // Whether it's an increase or decrease
}

interface TopSellingProductsChartProps {
  header: string;
  products: ProductChartData[];
}

const TopSellingProductsChart: React.FC<TopSellingProductsChartProps> = ({
  header,
  products,
}) => {
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
        {header}
      </Typography>

      {/* Product List */}
      <Stack spacing={2}>
        {products.map((product, index) => (
          <Box key={index}>
            {/* Product Name */}
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "8px" }}
            >
              {product.name}
            </Typography>

            {/* Progress Bars */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Box sx={{ flex: 1 }}>
                {/* Current Value */}
                <LinearProgress
                  variant="determinate"
                  value={(product.current / Math.max(product.current, product.previous || 1)) * 100}
                  sx={{
                    height: 8,
                    borderRadius: "4px",
                    backgroundColor: "#e3f2fd",
                    "& .MuiLinearProgress-bar": { backgroundColor: "#42a5f5" },
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {product.current}
              </Typography>
            </Box>

            {/* Optional Previous Value */}
            {product.previous !== undefined && (
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box sx={{ flex: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(product.previous / Math.max(product.current, product.previous)) * 100}
                    sx={{
                      height: 8,
                      borderRadius: "4px",
                      backgroundColor: "#e0e0e0",
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#9e9e9e" }}>
                  {product.previous}
                </Typography>
              </Box>
            )}

            {/* Optional Percentage Change */}
            {product.percentage !== undefined && (
              <Typography
                variant="body2"
                sx={{
                  color: product.isIncrease ? "#4caf50" : "#f44336",
                  fontWeight: "bold",
                  marginTop: "4px",
                }}
              >
                {product.isIncrease
                  ? `↑ ${product.percentage}%`
                  : `↓ ${product.percentage}%`}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default TopSellingProductsChart;
