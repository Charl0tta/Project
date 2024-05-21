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
import  { TimetableCreateBar } from "../../pages/TimetableCreateBar/TimetableCreateBar"


const drawerWidth = 240;
const url = "http://127.0.0.1:5000/send"


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

interface IGrade {
    num: number
    grades: string[]
    setGrades: (values: string[]) => void
}

interface ISubject {
    num1: number
    subjects: string[]
    setSubjects: (values: string[]) => void
}

interface ICabinet {
    num2: number
    cabinets: string[]
    setCabinets: (values: string[]) => void
}

interface ITeacher {
    num3: number
    teachers: string[]
    setTeachers: (values: string[]) => void
}

const Grade: FC<IGrade> = ({ num, grades, setGrades }) => {
    return (
        <div>
            {/* <Input title={"Класс"} value={grades[num]} setValue={value => {
                const copy = [...grades]
                copy[num] = value
                setGrades(copy)
            }} /> */}
            <TextField id="standard-basic" label="Учебная группа" variant="standard" value={grades[num]} onChange={(e) => {
                const copy = [...grades]
                copy[num] = e.target.value
                setGrades(copy)
            }} size="small" />
        </div>
    )
}

const Cabinet: FC<ICabinet> = ({ num2, cabinets, setCabinets }) => {
    return (
        <div>
            {/* <Input title={"Кабинет"} value={cabinets[num2]} setValue={value => {
                const copy = [...cabinets]
                copy[num2] = value
                setCabinets(copy)
            }} /> */}
            <TextField id="standard-basic" label="Аудитория" variant="standard" value={cabinets[num2]} onChange={(e) => {
                const copy = [...cabinets]
                copy[num2] = e.target.value
                setCabinets(copy)
            }} size="small" />
        </div>
    )
}

const Teacher: FC<ITeacher> = ({ num3, teachers, setTeachers }) => {
    return (
        <div>
            {/* <Input title={"Учитель"} value={teachers[num3]} setValue={value => {
                const copy = [...teachers]
                copy[num3] = value
                setTeachers(copy)
            }} /> */}
            <TextField id="standard-basic" label="Учитель" variant="standard" value={teachers[num3]} onChange={(e) => {
                const copy = [...teachers]
                copy[num3] = e.target.value
                setTeachers(copy)
            }} size="small" />
        </div>
    )
}

const Subject: FC<ISubject> = ({ num1, subjects, setSubjects }) => {
    return (
        <div>
            {/* <Input title={"Предмет"} value={subjects[num1]} setValue={value => {
                const copy = [...subjects]
                copy[num1] = value
                setSubjects(copy)
            }} /> */}
            <TextField id="standard-basic" label="Предмет" variant="standard" value={subjects[num1]} onChange={(e) => {
                const copy = [...subjects]
                copy[num1] = e.target.value
                setSubjects(copy)
            }} size="small" />
        </div>
    )
}

export const CreateTimeTable = () => {
    const [grades, setGrades] = useState<string[]>([])
    const [subjects, setSubjects] = useState<string[]>([])
    const [cabinets, setCabinets] = useState<string[]>([])
    const [teachers, setTeachers] = useState<string[]>([])
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
                    {grades.map((f, i) => <Grade
                        num={i}
                        grades={grades}
                        setGrades={setGrades}
                    />)}
                    <ButtonGroup size="small" variant="outlined" aria-label="Basic button group">
                        <Button onClick={() => {
                            setGrades([...grades, ""])
                        }}>+</Button>
                        <Button onClick={() => {
                            setGrades(grades.slice(0, -1))
                        }}>-</Button>
                    </ButtonGroup>
                </div>

                <div className="grade-page">
                    {cabinets.map((f, i) => <Cabinet
                        num2={i}
                        cabinets={cabinets}
                        setCabinets={setCabinets}
                    />)}
                    <ButtonGroup size="small" variant="outlined" aria-label="Basic button group">
                        <Button onClick={() => {
                            setCabinets([...cabinets, ""])
                        }}>+</Button>
                        <Button onClick={() => {
                            setCabinets(cabinets.slice(0, -1))
                        }}>-</Button>
                    </ButtonGroup>
                </div>

                <div className="grade-page">
                    {teachers.map((f, i) => <Teacher
                        num3={i}
                        teachers={teachers}
                        setTeachers={setTeachers}
                    />)}
                    <ButtonGroup size="small" variant="outlined" aria-label="Basic button group">
                        <Button onClick={() => {
                            setTeachers([...teachers, ""])
                        }}>+</Button>
                        <Button onClick={() => {
                            setTeachers(teachers.slice(0, -1))
                        }}>-</Button>
                    </ButtonGroup>
                </div>

                <div className="grade-page">
                    {subjects.map((f, i) => <Subject
                        num1={i}
                        subjects={subjects}
                        setSubjects={setSubjects}
                    />)}
                    <ButtonGroup size="small" variant="outlined" aria-label="Basic button group">
                        <Button onClick={() => {
                            setSubjects([...subjects, ""])
                        }}>+</Button>
                        <Button onClick={() => {
                            setSubjects(subjects.slice(0, -1))
                        }}>-</Button>
                    </ButtonGroup>
                </div>
                <div className="grade-page">
                    <Button endIcon={<SendIcon />} onClick={() => {
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                username: login,
                                groups: grades,
                                subjects: subjects,
                                classrooms: cabinets,
                                teachers: teachers
                            })
                        })
                    }}>Отправить</Button>
                </div>
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
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </div>
                <div className="grade-page">
                    <p>Тут будут какие-то параметры по генерации расписания</p>
                    <button>Создать расписание</button>
                </div>
                <div className="grade-page">
                    <p>Тут будет какая-то предварительная информация</p>
                    <button>Скачать расписание</button>
                </div>
            </Box>
        </div>

    )
}