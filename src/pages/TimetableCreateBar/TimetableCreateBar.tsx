
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom"


export const TimetableCreateBar = () => {
    return (<Box sx={{ overflow: 'auto' }}>
        <List>
            <ListItemButton key=" " component={Link} to={"/input-data"}>
                <ListItemIcon> <DownloadIcon /></ListItemIcon>
                <ListItemText>Ввод данных 1</ListItemText>
            </ListItemButton>
            <ListItemButton key=" " component={Link} to={"/excel-input"}>
                <ListItemIcon> <DownloadIcon /></ListItemIcon>
                <ListItemText>excel таблица</ListItemText>
            </ListItemButton>
            <ListItemButton key=" " component={Link} to={"/times-input"}>
                <ListItemIcon> <DownloadIcon /></ListItemIcon>
                <ListItemText>Ввод времени учебы</ListItemText>
            </ListItemButton>
            <ListItemButton key=" " component={Link} to={"/timetable-generation"}>
                <ListItemIcon> <DownloadIcon /></ListItemIcon>
                <ListItemText>Генерация расписания</ListItemText>
            </ListItemButton>
            <ListItemButton key=" " component={Link} to={"/timetable-download"}>
                <ListItemIcon> <DownloadIcon /></ListItemIcon>
                <ListItemText>Просмотр и загрузка расписания</ListItemText>
            </ListItemButton>
        </List></Box>)
}
export {}