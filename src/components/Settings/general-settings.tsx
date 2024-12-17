"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useMediaQuery,
  SelectChangeEvent
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import DescriptionIcon from "@mui/icons-material/Description";

interface SettingsPageProps {
  storeDetails: {
    name: string;
    email: string;
    address: string;
  };
  initialValues: {
    unitSystem: string;
    defaultWeight: string;
    timeZone: string;
    prefix: string;
    suffix: string;
    orderProcessing: string;
    autoArchive: boolean;
  };
}

const SettingsPage: React.FC<SettingsPageProps> = ({ storeDetails, initialValues  }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("general");
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [template, setTemplate] = useState<string>("default");

  useEffect(()=> {
    setTemplate(localStorage.getItem("Template") || "main")
  },[template])

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    setTemplate(selectedValue);
    localStorage.setItem("Template", selectedValue); // Update localStorage
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { icon: <PersonIcon />, text: "Users", key: "users" },
    { icon: <SettingsIcon />, text: "General", key: "general" },
    { icon: <PaymentIcon />, text: "Payments", key: "payments" },
    { icon: <ShoppingCartIcon />, text: "Checkout", key: "checkout" },
    { icon: <LocationOnIcon />, text: "Locations", key: "locations" },
    { icon: <NotificationsIcon />, text: "Notifications", key: "notifications" },
    { icon: <PrivacyTipIcon />, text: "Customer Privacy", key: "privacy" },
    { icon: <DescriptionIcon />, text: "Template", key: "template" },
  ];

  const renderContent = () => {
    switch (selectedMenu) {
      case "users":
        return (
          <>
            <Typography variant="h5" fontWeight="bold">
              User Management
            </Typography>
            <Box sx={{ mt: 3 }}>
              <TextField label="Search Users" fullWidth />
              <Typography variant="subtitle1" sx={{ mt: 3 }}>
                Add New User
              </Typography>
              <TextField label="User Name" fullWidth sx={{ mt: 2 }} />
              <TextField label="Email Address" fullWidth sx={{ mt: 2 }} />
              <Select fullWidth sx={{ mt: 2 }} defaultValue="admin">
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="viewer">Viewer</MenuItem>
              </Select>
              <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                Save User
              </Button>
            </Box>
          </>
        );
      case "general":
        return (
          <>
            <Typography variant="h5" fontWeight="bold">
              General Settings
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Store Details</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Name: {storeDetails.name}
              </Typography>
              <Typography variant="body2">Email: {storeDetails.email}</Typography>
              <Typography variant="body2">
                Address: {storeDetails.address}
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Typography variant="subtitle1">Currency</Typography>
            <Select fullWidth sx={{ mt: 2 }} defaultValue="USD">
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
            <Divider sx={{ my: 3 }} />
            <Typography variant="subtitle1">Default Unit System</Typography>
            <Select fullWidth sx={{ mt: 2 }} defaultValue={initialValues.unitSystem}>
              <MenuItem value="imperial">Imperial</MenuItem>
              <MenuItem value="metric">Metric</MenuItem>
            </Select>
            <Divider sx={{ my: 3 }} />
            <Typography variant="subtitle1">Time Zone</Typography>
            <Select fullWidth sx={{ mt: 2 }} defaultValue={initialValues.timeZone}>
              <MenuItem value="GMT+00:00">GMT+00:00 London</MenuItem>
              <MenuItem value="GMT+10:00">GMT+10:00 Sydney</MenuItem>
            </Select>
            <Divider sx={{ my: 3 }} />
            <Typography variant="subtitle1">Language</Typography>
            <Select fullWidth sx={{ mt: 2 }} defaultValue="en">
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
            </Select>
            <Typography variant="h5" fontWeight="bold">
              Template Switcher
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Select Template</Typography>
              <Select fullWidth sx={{ mt: 2 }} defaultValue="default" value={template} onChange={handleChange}>
                <MenuItem value="main">Template 1</MenuItem>
                <MenuItem value="template_1">Template 2</MenuItem>
                <MenuItem value="template_2">Template 3</MenuItem>
                <MenuItem value="template_3">Template 4</MenuItem>
                <MenuItem value="template_4">Template 5</MenuItem>
              </Select>
              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle1">Customize Theme</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Use the options below to fine-tune your selected theme:
              </Typography>
              <Select fullWidth sx={{ mt: 2 }} defaultValue="color-scheme">
                <MenuItem value="color-scheme">Change Color Scheme</MenuItem>
                <MenuItem value="font">Update Font Style</MenuItem>
                <MenuItem value="layout">Adjust LayoutB</MenuItem>
              </Select>
            </Box>
          </>
        );
      case "payments":
        return (
          <>
            <Typography variant="h5" fontWeight="bold">
              Payment Settings
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Default Payment Gateway</Typography>
              <Select fullWidth sx={{ mt: 2 }} defaultValue="Stripe">
                <MenuItem value="Stripe">Stripe</MenuItem>
                <MenuItem value="PayPal">PayPal</MenuItem>
                <MenuItem value="Square">Square</MenuItem>
              </Select>
              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle1">Transaction Currency</Typography>
              <Select fullWidth sx={{ mt: 2 }} defaultValue="USD">
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
              </Select>
              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle1">Enable Manual Payments</Typography>
              <Checkbox defaultChecked sx={{ mt: 1 }} />
              <Typography variant="body2" sx={{ display: "inline" }}>
                Allow manual bank transfers
              </Typography>
            </Box>
          </>
        );
      case "checkout":
        return (
          <>
            <Typography variant="h5" fontWeight="bold">
              Checkout Settings
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Enable Guest Checkout</Typography>
              <RadioGroup defaultValue="enabled" sx={{ mt: 2 }}>
                <FormControlLabel
                  value="enabled"
                  control={<Radio />}
                  label="Enabled"
                />
                <FormControlLabel
                  value="disabled"
                  control={<Radio />}
                  label="Disabled"
                />
              </RadioGroup>
              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle1">Checkout Message</Typography>
              <TextField
                label="Custom Message"
                fullWidth
                placeholder="Thank you for shopping with us!"
                sx={{ mt: 2 }}
              />
            </Box>
          </>
        );
      case "locations":
        return (
          <>
            <Typography variant="h5" fontWeight="bold">
              Locations Management
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Add Location</Typography>
              <TextField label="Location Name" fullWidth sx={{ mt: 2 }} />
              <TextField label="Address" fullWidth sx={{ mt: 2 }} />
              <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                Save Location
              </Button>
            </Box>
          </>
        );
      case "notifications":
        return (
          <>
            <Typography variant="h5" fontWeight="bold">
              Notification Settings
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Email Notifications</Typography>
              <Checkbox defaultChecked />
              <Typography variant="body2" sx={{ display: "inline" }}>
                Enable order confirmations
              </Typography>
              <Checkbox />
              <Typography variant="body2" sx={{ display: "inline" }}>
                Enable shipping updates
              </Typography>
            </Box>
          </>
        );
      case "privacy":
        return (
          <>
            <Typography variant="h5" fontWeight="bold">
              Customer Privacy
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">GDPR Compliance</Typography>
              <Checkbox defaultChecked />
              <Typography variant="body2" sx={{ display: "inline" }}>
                Enable GDPR features
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle1">Customer Data Requests</Typography>
              <Checkbox />
              <Typography variant="body2" sx={{ display: "inline" }}>
                Allow data deletion requests
              </Typography>
            </Box>
          </>
        );
      default:
        return <Typography>Select a menu to view settings.</Typography>;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ position: "fixed", top: 10, left: 10 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
            <Box sx={{ width: 250, p: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                Vendor 1
              </Typography>
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    key={item.key}
                    onClick={() => {
                      setSelectedMenu(item.key); // Update selected menu
                      setDrawerOpen(false); // Close drawer
                    }}
                    sx={{
                      cursor: "pointer",
                      '&:hover': {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={{ width: 250, p: 2, borderRight: "1px solid #ddd" }}>
          <Typography variant="h6" fontWeight="bold">
            Vendor 1
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.key}
                onClick={() => setSelectedMenu(item.key)}
                sx={{
                  cursor: "pointer",
                  '&:hover': {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 3 }}>{renderContent()}</Box>
    </Box>
  );
};

export default SettingsPage;
