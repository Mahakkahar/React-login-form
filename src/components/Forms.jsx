import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import './Form.style.css';

function Forms() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    year: "",
    branch: "",
    password: "",
    confirmPassword: "",
    agreeToTC: false,
  });


  const [error, setError] = useState({
    formError: false,
    passwordError: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(userData).every(
      (field) => field !== "" && field !== false
    );

    if (!allFieldsFilled) {
      alert("Please fill out all fields and agree to the terms and conditions.");
      setError({ ...error, formError: true });
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match.");
      setError({ ...error, passwordError: true });
      return;
    }

    alert(`Hello ${userData.firstName}, you are logged in successfully`);
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      year: "",
      branch: "",
      password: "",
      confirmPassword: "",
      agreeToTC: false,
    });
    // navigate("/home");
  };

  useEffect(() => {
    setError({ ...error, passwordError: userData.confirmPassword !== userData.password });
  }, [userData.confirmPassword, userData.password]);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <main>
      <h1 className="text-info text-center">Hello User, Welcome</h1>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            required
          />

          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
            required
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />

          <TextField
            label="DOB"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            name="dob"
            value={userData.dob}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />

          <FormGroup>
            <InputLabel>Select your Year</InputLabel>
            <Select
              fullWidth
              name="year"
              value={userData.year}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="">Select your Year</MenuItem>
              <MenuItem value="1">First Year</MenuItem>
              <MenuItem value="2">Second Year</MenuItem>
              <MenuItem value="3">Third Year</MenuItem>
              <MenuItem value="4">Final Year</MenuItem>
            </Select>
          </FormGroup>

          <FormGroup>
            <InputLabel>Select your Branch</InputLabel>
            <Select
              fullWidth
              name="branch"
              value={userData.branch}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="">Select Your Branch</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="CS">CS</MenuItem>
              <MenuItem value="CSIT">CSIT</MenuItem>
              <MenuItem value="AD">AD</MenuItem>
              <MenuItem value="EC">EC</MenuItem>
              <MenuItem value="CE">CE</MenuItem>
              <MenuItem value="ME">ME</MenuItem>
            </Select>
          </FormGroup>

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            required
          />

          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleInputChange}
            error={error.passwordError}
            helperText={error.passwordError ? "Passwords do not match" : ""}
            required
          />

          <FormControlLabel
            control={
              <Checkbox
                name="agreeToTC"
                checked={userData.agreeToTC}
                onChange={handleInputChange}
              />
            }
            label="Agree to terms and conditions"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="submit-btn"
          >
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}

export default Forms;
