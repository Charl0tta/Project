import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"


export const Main = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Timetable Create Service
            </Typography>
            <Button color="inherit" key=" " component={Link} to={"/auth"}>Вход</Button>
            <Button color="inherit" key=" " component={Link} to={"/registration"}>Регистрация</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: "flex", margin: "0", backgroundColor: "deepskyblue"}} width = "100%">
          <Box sx={{borderColor: "DeepskyBlue", borderStyle: "solid"}}>
            <img src={require('./image.png')} />
          </Box>
          <Box sx={{display: "flex", margin: "0 auto", justifyContent: "center"}} width = "100%"
            alignItems="center">
            <Typography color="white" variant="h3" gutterBottom>
              Cоздайте удобное расписание
            </Typography>
          </Box>
      </Box>
      <Box sx={{ display: "flex", margin: "0", backgroundColor: "Asure" }} width = "100%">
        <Box sx={{display: "flex", margin: "0 auto", justifyContent: "center"}} width = "100%"
          alignItems="center">
          <Typography color="Deepskyblue" variant="h3" gutterBottom>
            Полностью бесплатно!
          </Typography>
        </Box>
        <Box sx={{marginright: "0%", borderColor: "DeepskyBlue", borderStyle: "solid"}}>
          <img src={require('./image3.png')} />
        </Box>
      </Box>
        <Box sx={{ display: "flex", margin: "0", backgroundColor: "deepskyblue"}} width = "100%">
          <Box sx={{borderColor: "DeepskyBlue", borderStyle: "solid"}}>
            <img src={require('./image5.png')} />
          </Box>
          <Box sx={{display: "flex", margin: "0 auto", justifyContent: "center"}} width = "100%"
            alignItems="center">
            <Typography color="white" variant="h3" gutterBottom>
              Великолепный результат
            </Typography>
          </Box>
      </Box>
      <Box sx={{ display: "flex", margin: "0", backgroundColor: "Asure"}} width = "100%">
        <Box sx={{display: "flex", margin: "0 auto", justifyContent: "center"}} width = "100%"
          alignItems="center">
          <Typography color="Deepskyblue" variant="h3" gutterBottom>
            Попробуйте сами!
          </Typography>
        </Box>
        <Box sx={{marginright: "0%", borderColor: "DeepskyBlue", borderStyle: "solid"}}>
          <img src={require('./image4.png')} />
        </Box>
      </Box>
    </Box>
  );
}
