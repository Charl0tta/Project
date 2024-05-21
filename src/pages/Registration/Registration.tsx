import { useState } from "react"
import { Input } from "../../ui/Input/Input"
import { Navbar } from "../../components/Navbar/Navbar";
import "./Registration.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

export const Registration = () => {
    const [postId, setPostId] = useState(null);
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const url = "http://127.0.0.1:5000/registration"

    return (
        
        <Box component="form" 
        sx = {{position: "absolute",
        top: "50%",
        left: "50%",
        width: "250px",
        height: "250px",
        margin: "-125px 0 0 -125px"}}
        display="flex"
        alignItems="center">
            <Stack direction="column" spacing={2}>
            <TextField id="standard-basic" label="Логин" variant="standard" value={login} onChange={(e) => {
                setLogin(e.target.value)
            }} />
            <TextField id="standard-basic" label="Пароль" type="password" variant="standard" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <TextField id="standard-basic" label="Пароль" type="password" variant="standard" value={password2} onChange={(e) => {
                setPassword2(e.target.value)
            }}/>
            <Button variant="contained" onClick={async () => {
                    // POST request using fetch with async/await
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: login,
                            password: password
                        })
                    })
                    const json = await response.json()
                    localStorage.setItem("username", login)
                    localStorage.setItem("access_token", json["access_token"])
                    localStorage.setItem("refresh_token", json["refresh_token"])
                }}>Регистрация</Button>
                </Stack>
        </Box>
    );
}