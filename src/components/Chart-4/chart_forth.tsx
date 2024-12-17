import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CustomerRateChartProps {
  header: string;
  percentage: string; // Percentage change
  isIncrease: boolean; // Whether percentage is an increase or decrease
  data: Array<{ name: string; firstTime: number; returning: number }>;
  colors: {
    firstTime: string; // Color for "First time"
    returning: string; // Color for "Returning"
  };
}

const CustomerRateChart: React.FC<CustomerRateChartProps> = ({
  header,
  percentage,
  isIncrease,
  data,
  colors,
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
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        {header}
      </Typography>

      {/* Percentage Change */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
        27.88%
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isIncrease ? "#4caf50" : "#f44336", // Green for increase, red for decrease
          fontWeight: "bold",
          marginBottom: "16px",
        }}
      >
        {isIncrease ? `↑ ${percentage}` : `↓ ${percentage}`}
      </Typography>

      {/* Area Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="firstTime"
            stroke={colors.firstTime}
            fill={colors.firstTime}
            fillOpacity={0.3}
          />
          <Area
            type="monotone"
            dataKey="returning"
            stroke={colors.returning}
            fill={colors.returning}
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomerRateChart;
