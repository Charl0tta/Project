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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { with_retry } from "../../pages/TimetableCreateBar/TimetableCreateBar"


interface IStart {
    num1: number
    starts: string[]
    setStarts: (values: string[]) => void
    num2: number
    finishes: string[]
    setFinishes: (values: string[]) => void
}

const Start: FC<IStart> = ({ num1, starts, setStarts, num2, finishes, setFinishes }) => {
    return (
        <div>
            {/* <Input title={"Кабинет"} value={cabinets[num2]} setValue={value => {
                const copy = [...cabinets]
                copy[num2] = value
                setCabinets(copy)
            }} /> */}
            <TextField id="standard-basic" label="Начало урока" variant="standard" value={starts[num1]} onChange={(e) => {
                const copy = [...starts]
                copy[num1] = e.target.value
                setStarts(copy)
            }} size="small" />
            <TextField id="standard-basic" label="Конец урока" variant="standard" value={finishes[num1]} onChange={(e) => {
                const copy1 = [...finishes]
                copy1[num2] = e.target.value
                setFinishes(copy1)
            }} size="small" />
        </div>
    )
}

const drawerWidth = 240;
const url = "http://127.0.0.1:5000/send-times";

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
    const [starts, setStarts] = useState<string[]>([])
    const [finishes, setFinishes] = useState<string[]>([])
    const login = 'lyceum1524'
    const [loading, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }
    const [value, setValue] = useState(0)
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
      };
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
                {starts.map((f, i) => <Start
                    num1={i}
                    starts={starts}
                    setStarts={setStarts}
                    num2={i}
                    finishes={finishes}
                    setFinishes={setFinishes}
                />)}
                <ButtonGroup size="small" variant="outlined" aria-label="Basic button group">
                    <Button onClick={() => {
                        setStarts([...starts, ""])
                        setFinishes([...finishes, ""])
                    }}>+</Button>
                    <Button onClick={() => {
                        setStarts(starts.slice(0, -1))
                        setFinishes(finishes.slice(0, -1))
                    }}>-</Button>
                </ButtonGroup>
                <Box>
                <input type="checkbox" value={value} onChange={() => (setValue(1))} />
                <p> Учебная суббота</p>
                </Box>
            </div>
            <div className="grade-page">
                <Button endIcon={<SendIcon />} onClick={async () => 
                    with_retry( async () => {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: login,
                            starts: starts,
                            finishes: finishes,
                            saturday: value
                        })
                    })
                    const json = await response.json()
                    if (json["successfully"] == "true") {
                        setOpen(true)
                    }
                    else throw new Error()
                    }
                )
                }>Отправить</Button>
                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Успех!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Данные сохранены! Переходите к следующему шагу!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button component={Link} to={"/timetable-generation"}>Далее</Button>
        </DialogActions>
      </Dialog>
            </div>
        </Box>
        </div>
        
    )
}