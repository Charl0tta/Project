import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"

export const Cabinet = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Timetable Generation Service
            </Typography>
            <Button color="inherit" key=" " component={Link} to={"/"}>Выход</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <Card variant="outlined">
          <CardContent>
            <Stack justifyContent="center" alignItems="center">
              <Avatar src={require('./image1.jpg')} sx={{ width: 156, height: 156, flexGrow: 1 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {localStorage.getItem("username")}
              </Typography>
              <Button size="small">Подробнее</Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Button key=" " component={Link} to={"/input-data"}>Создать новое расписание</Button>
        <Button key=" " component={Link} to={"/"}>Скачать существующее расписание</Button>
      </Box>
    </Box>
  );
}