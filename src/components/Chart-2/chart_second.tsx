import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mobile", value: 1986672, percentage: 40, color: "#4caf50" },
  { name: "Desktop", value: 635721, percentage: 31, color: "#2196f3" },
  { name: "Other", value: 33916, percentage: 45, color: "#9c27b0" },
  { name: "Tablet", value: 16275, percentage: 10, color: "#ff9800" },
  { name: "Smart TV", value: 1, percentage: 0, color: "#f44336" },
];

export default function SessionsByDeviceType() {
  const totalSessions = data.reduce((sum, item) => sum + item.value, 0);
  const totalIncreasePercentage = 37; // Example value

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
        Sessions by device type
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Donut Chart */}
        <Box sx={{ width: "50%", height: "200px" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* <Box
            sx={{
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {Intl.NumberFormat().format(totalSessions)}
            </Typography>
            <Typography variant="body2" sx={{ color: "#4caf50" }}>
              ↑ {totalIncreasePercentage}%
            </Typography>
          </Box> */}
        </Box>

        {/* Legend */}
        <List sx={{ width: "50%" }}>
          {data.map((item) => (
            <ListItem
              key={item.name}
              sx={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    backgroundColor: item.color,
                    borderRadius: "50%",
                  }}
                />
                <ListItemText primary={item.name} />
              </Box>
              <Typography variant="body2">
                {Intl.NumberFormat().format(item.value)}{" "}
                <Typography
                  component="span"
                  sx={{
                    color: item.percentage > 0 ? "#4caf50" : "#f44336",
                    fontWeight: "bold",
                  }}
                >
                  ↑ {item.percentage}%
                </Typography>
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
