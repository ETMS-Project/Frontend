import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Bar from "../Bar";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";
import axios from "axios";

const drawerWidth = 240;

const AddManager = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  // const onAddManager = () => {
  //     if (firstName === "" || lastName === "" || email === "" || department === "" || gender === ""||dob === "") {
  //         alert("Please fill all the fields");
  //     }
  //     else {
  //         console.log("First Name: ", firstName);
  //         console.log("Last Name: ", lastName);
  //         console.log("Email: ", email);
  //         console.log("Department: ", department);
  //         console.log("gender : ", gender);
  //         console.log("DOB : ", dob);
  //     }
  // }

  const onAddManager = async () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      department === "" ||
      gender === "" ||
      dob === ""||
      password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const managerData = { firstName, lastName, email, department, gender, dob,password };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/managers/create",
        managerData
      );
      alert("Manager added successfully!");
    } catch (error) {
      console.error("Error adding manager:", error);
      alert("Failed to add manager.");
    }
  };

  return (
    <>
      <Bar />
      <AdminSidebar />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <CssBaseline />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#D3C5E5",
            height: "100%",
            marginLeft: `${drawerWidth}px`,
            width: `calc(100% - ${drawerWidth}px)`,
          }}
        >
          <Toolbar />
          <div
            style={{
              textDecoration: "underline",
              display: "flex",
              justifyContent: "center",
              marginBlock: "30px",
            }}
          >
            <h1>Add Manager</h1>
          </div>

          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="fname"
                label="First Name"
                type="text"
                onChange={(e) => setfirstName(e.target.value)}
              />

              <TextField
                required
                id="lname"
                label="Last Name"
                type="text"
                onChange={(e) => setlastName(e.target.value)}
              />
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                id="DOB"
                label="DOB"
                type="date"
                onChange={(e) => setDob(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ m: 1, width: "25ch" }}
              />

              <TextField
                required
                id="password"
                label="temp password"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />

              <FormControl sx={{ m: 1, minWidth: "250px" }}>
                <InputLabel id="department">Select Department</InputLabel>
                <Select
                  labelId="department"
                  id="department"
                  label="Select Department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)} // Set selected value
                >
                  ,,,,
                  <MenuItem value="ADMIN">ADMIN</MenuItem>
                  <MenuItem value="MANAGMENT">MANAGMENT</MenuItem>
                  <MenuItem value="DEVELOPEMENT">DEVELOPEMENT</MenuItem>
                  <MenuItem value="TESTER">TESTER</MenuItem>
                  <MenuItem value="SECURITY">SECURITY</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ m: 1 }}>
                <p>Please select Gender</p>
                <RadioGroup
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Others"
                    control={<Radio />}
                    label="Others"
                  />
                </RadioGroup>
              </Box>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={onAddManager}
              >
                Add New Manager
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddManager;
