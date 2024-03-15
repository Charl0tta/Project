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
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';



const drawerWidth = 240;
const url = "http://127.0.0.1:5000/send";

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

export const TimesInput = () => {
    const login = 'lyceum1524'
    const url_to_file = '123'
    return (
        <div className="grade-page">
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Clipped drawer
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
                    <Stack sx={{ width: '50%', margin: "auto" }} spacing={2}>
                        <Alert severity="info">Поставте галочки у учебных дней</Alert>
                    </Stack>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Понедельник" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Вторник" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Среда" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Четверг" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Пятница" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Суббота" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Воскресенье" />
                    </FormGroup>
            </Box >
        </div >

    )
}