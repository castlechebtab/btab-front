import React, { useState } from "react";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Flag } from "@mui/icons-material"; // Placeholder for your flag icon
import { Iconify } from "../iconify";

const CURRENCY_DATA = [
  {
    value: "AUD",
    label: "Australia (AUD $)",
    flag: "emojione:flag-for-australia",
    symbol: "$",
  },
  {
    value: "USD",
    label: "United States (USD $)",
    flag: "emojione:flag-for-united-states",
    symbol: "$",
  },
  {
    value: "GBP",
    label: "United Kingdom (GBP £)",
    flag: "emojione:flag-for-united-kingdom",
    symbol: "£",
  },
];

type Props = {
  type?: string;
};

const CurrencyDropdown = ({ type = "small" }: Props) => {
  const [currency, setCurrency] = useState("AUD");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCurrency(event.target.value);
  };

  return (
    <Select
      value={currency}
      onChange={handleChange}
      label="Currency"
      variant="standard"
      sx={{
        color: "white", // Color of the selected option when closed
        "& .MuiSvgIcon-root": { color: "white" }, // Color of the dropdown arrow icon
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // Outline color
        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
        "& .MuiSelect-iconOpen": { color: "black" }, // Arrow color when opened
        "& .MuiInputBase-root": {
          borderBottom: "none", // Remove underline
        },
        "&:before, &:after": {
          borderBottom: "none", // Remove underline
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: "none", // Remove underline on hover
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            color: "black", // Color of the dropdown menu options
            backgroundColor: "white", // Background color of the dropdown menu
          },
        },
      }}
    >
      {CURRENCY_DATA.map((currencyData, index) => (
        <MenuItem value={currencyData.value} key={index}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Iconify icon={currencyData.flag} mr={1} />
            {`${type === "small" ? currencyData.value : currencyData.label} ${
              type === "small" ? currencyData.symbol : ""
            }`}
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
};

export default CurrencyDropdown;
