import { FC } from "react"
import { useState } from "react"
import { Input } from "../../ui/Input/Input"
import { setConstantValue } from "typescript"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { TimetableCreateBar } from "../../pages/TimetableCreateBar/TimetableCreateBar"
import axios from 'axios';



const drawerWidth = 240;
const url = "http://127.0.0.1:5000/send";

function FileUploadSingle() {
    const [file, setFile] = useState()
    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const username = "lyceum1524"
        const url = 'http://127.0.0.1:5000/read-file';
        const formData = new FormData();
        
        formData.append('file', file);
        formData.append('fileName', file.name);
        formData.append('username', username);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    onChange={handleChange}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" accept='.xls,.xlsx'/>
                </Button>
                <Button variant="contained" endIcon={<SendIcon />} type="submit">
                    Send
                </Button>
            </form>
        </div>
    );
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const ExcelInput = () => {
    const login = 'lyceum1524'
    const url_to_file = '123'
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }
    return (
        <div className="grade-page">
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                    Timetable Create Service
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <TimetableCreateBar />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />

                <div className="grade-page">
                    <Stack sx={{ width: '50%', margin: "auto" }} spacing={2}>
                        <Alert severity="info">Скачайте и заполните excel-таблицу</Alert>
                    </Stack>
                    <Button endIcon={<DownloadIcon />} onClick={() => {
                        fetch('http://127.0.0.1:5000/get_excel', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                username: login
                            })
                        })
                            .then((response) => response.blob())
                            .then((blob) => {
                                //Create blob link to download
                                const url = window.URL.createObjectURL(
                                    new Blob([blob]),
                                );
                                const link = document.createElement('a');
                                link.href = url;
                                link.setAttribute(
                                    'download',
                                    `FileName.xlsx`,
                                );
                                // Append to html link element page
                                document.body.appendChild(link);
                                // Start download
                                link.click();
                                // Clean up and remove the link
                                //link.parentNode.removeChild(link);
                            });
                    }}>Скачать файл</Button>
                </div>
                <div className="grade-page">
                    {/* <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        onClick={handleUploadClick}>
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={handleFileChange}
                    />
                </Button> */}
                    <FileUploadSingle />
                </div>
            </Box >
        </div >

    )
}