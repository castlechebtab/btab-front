import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Link } from "@mui/material";

interface SalesTableProps {
  header: string;
  rows: Array<{
    name: string;
    amount: string;
    percentage?: number; // Optional percentage
  }>;
}

const SalesTable: React.FC<SalesTableProps> = ({ header, rows }) => {
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

      {/* Table */}
      <TableContainer>
        <Table>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {/* Name as clickable link */}
                <TableCell sx={{ borderBottom: "none", padding: "8px 0" }}>
                  <Link href="#" underline="hover" color="primary" sx={{ fontWeight: "bold" }}>
                    {row.name}
                  </Link>
                </TableCell>

                {/* Amount */}
                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "none",
                    padding: "8px 0",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {row.amount}
                </TableCell>

                {/* Optional Percentage */}
                {row.percentage !== undefined ? (
                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: "none",
                      padding: "8px 0",
                      color: row.percentage > 0 ? "#4caf50" : "#f44336", // Green for positive, red for negative
                    }}
                  >
                    {row.percentage > 0 ? `↑ ${row.percentage}%` : `↓ ${Math.abs(row.percentage)}%`}
                  </TableCell>
                ) : (
                  <TableCell sx={{ borderBottom: "none", padding: "8px 0" }} />
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SalesTable;
