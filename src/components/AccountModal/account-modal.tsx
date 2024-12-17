import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Typography,
} from "@mui/material";

interface AccountModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formType: string, username?: string) => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ open, onClose, onSubmit }) => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // To store error messages

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // If it's signup, validate passwords first
    if (isSignup) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // Save user info to local storage
      localStorage.setItem("userInfo", JSON.stringify(formData));
      onSubmit("signup", formData.username);
      setError(""); // Clear any errors
    } else {
      // Handle login form validation
      const storedUser = JSON.parse(localStorage.getItem("userInfo") || "{}");
      if (
        !storedUser.email ||
        storedUser.email !== formData.email ||
        storedUser.password !== formData.password
      ) {
        setError("Incorrect email or password.");
        return;
      }
      onSubmit("login", storedUser.username); // Pass the username from local storage
      setError(""); // Clear any errors
    }
    onClose(); // Close modal after submit
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{isSignup ? "Sign Up" : "Log In"}</DialogTitle>
      <DialogContent>
        <form>
          {isSignup && (
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {isSignup && (
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          )}
        </form>
        {error && (
          <Typography color="error" variant="body2" align="center">
            {error}
          </Typography>
        )}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "center", cursor: "pointer", marginTop: "8px" }}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Already have an account? Log in" : "Don't have an account? Sign up"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {isSignup ? "Sign Up" : "Log In"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountModal;
