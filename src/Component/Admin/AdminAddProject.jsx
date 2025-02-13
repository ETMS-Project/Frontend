import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PreviewIcon from '@mui/icons-material/Preview';
import Bar from '../Bar';
import { TextareaAutosize, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import AdminSidebar from './AdminSidebar';
import { useState } from 'react';
import { Button } from '@mui/material';


const drawerWidth = 240;

const AdminAddProject = () => {

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const[selectOption,setSelectOption]=useState("");

    const onAddProject = () => {
        if (name === "" || startDate === "" || endDate === "" || description === ""||selectOption==="") {
            alert("Please fill all the fields");
        } else {
            console.log("Name: ", name);
            console.log("Start Date: ", startDate);
            console.log("End Date: ", endDate);
            console.log("Description: ", description);
        }

    }

    return (
        <>
            <Bar />
            <AdminSidebar />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />


                <Box component="main" sx={{
                    flexGrow: 1, p: 3, backgroundColor: "#D3C5E5", height: "100vh", marginLeft: '240px',
                    width: `calc(100% - 240px)`,
                }}>
                    <Toolbar />
                    <div style={{
                        textDecoration: "underline", display: "flex",

                        justifyContent: "center", marginBlock: "30px"
                    }}>
                        <h1>Add Project</h1>
                    </div>


                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>

                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />

                            


                            <TextField
                                id="start-date"
                                label="Start Date"
                                type="date"
                                onChange={(e) => setStartDate(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ m: 1, width: '25ch' }}
                            />

                            <TextField
                                id="end-date"
                                label="End Date"
                                type="date"
                                onChange={(e) => setEndDate(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ m: 1, width: '25ch' }}
                            />

                            <FormControl sx={{ m: 1, minWidth: "250px" }}>
                                <InputLabel id="select-label">Select Option</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="select"
                                    value={selectOption}
                                    label="Select Option"
                                    onChange={(e) => { setSelectOption(e.target.value) }}
                                >
                                    <MenuItem value="option1">Option 1</MenuItem>
                                    <MenuItem value="option2">Option 2</MenuItem>
                                    <MenuItem value="option3">Option 3</MenuItem>
                                </Select>
                            </FormControl>


                            <div style={{ marginLeft: "8px" }}>
                                <InputLabel id="textArea" style={{ marginBlock: "5px" }}>Description</InputLabel>
                                <TextareaAutosize
                                    id="textArea"
                                    aria-label="Description"
                                    placeholder='Description'
                                    onChange={(e) => setDescription(e.target.value)}
                                    minRows={4}
                                    style={{
                                        padding: "24px", borderRadius: "5px", border: "1px solid #e6dede"
                                    }}
                                />
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 50,
                            }}>
                                <Button variant="contained" color="secondary" onClick={onAddProject}>
                                    Add Project
                                </Button>
                            </div>

                        </div>
                    </Box>
                </Box>
            </Box >
        </>
    );
};

export default AdminAddProject;
