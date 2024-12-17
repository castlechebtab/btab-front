import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from 'recharts';
import { Box, Typography } from '@mui/material';

// Define the structure of the data points
interface ChartData {
  name: string;
  [key: string]: number | string; // Allow dynamic keys for dataset
}

// Props for the CustomChart component
interface CustomChartProps {
  header: string;
  totalAmount: string;
  increasePercentage: number;
  data: { name: string; current: number; previous: number }[];
  dataKeyCurrent: string;
  dataKeyPrevious: string;
  chartType: 'line' | 'bar' | 'area'; // Example for supported chart types
}


// Component
const CustomChart: React.FC<CustomChartProps> = ({
  header,
  totalAmount,
  increasePercentage,
  data,
  dataKeyCurrent,
  dataKeyPrevious,
  chartType,
}) => {
  // Function to render the chart based on the chartType
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value: number) => `$${value / 1000000}M`} />
            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey={dataKeyCurrent} stroke="#007bff" strokeWidth={2} />
            <Line
              type="monotone"
              dataKey={dataKeyPrevious}
              stroke="#aaa"
              strokeWidth={1}
              strokeDasharray="5 5"
            />
          </LineChart>
        );

      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value: number) => `$${value / 1000000}M`} />
            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            <Legend />
            <Area
              type="monotone"
              dataKey={dataKeyCurrent}
              stroke="#007bff"
              fill="rgba(0, 123, 255, 0.2)"
            />
            <Area
              type="monotone"
              dataKey={dataKeyPrevious}
              stroke="#aaa"
              fill="rgba(0, 0, 0, 0.1)"
            />
          </AreaChart>
        );

      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value: number) => `$${value / 1000000}M`} />
            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            <Legend />
            <Bar dataKey={dataKeyCurrent} fill="#007bff" />
            <Bar dataKey={dataKeyPrevious} fill="#aaa" />
          </BarChart>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        padding: 2,
        backgroundColor: '#fff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      {/* Header Section */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {header}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 0.5 }}>
          {totalAmount}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'green', fontWeight: 600 }}>
          ↑ {increasePercentage}%
        </Typography>
      </Box>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={400}>
        {renderChart() as React.ReactElement}
      </ResponsiveContainer>
    </Box>
  );
};

export default CustomChart;
