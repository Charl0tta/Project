import { FC } from "react"
import { useState } from "react"
import { Input } from "../../ui/Input/Input"
import { setConstantValue } from "typescript"

const url = "http://127.0.0.1:5000/send"


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
            <Input title={"Класс"} value={grades[num]} setValue={value => {
                const copy = [...grades]
                copy[num] = value
                setGrades(copy)
            }} />
        </div>
    )
}

const Cabinet: FC<ICabinet> = ({ num2, cabinets, setCabinets }) => {
    return (
        <div>
            <Input title={"Кабинет"} value={cabinets[num2]} setValue={value => {
                const copy = [...cabinets]
                copy[num2] = value
                setCabinets(copy)
            }} />
        </div>
    )
}

const Teacher: FC<ITeacher> = ({ num3, teachers, setTeachers }) => {
    return (
        <div>
            <Input title={"Учитель"} value={teachers[num3]} setValue={value => {
                const copy = [...teachers]
                copy[num3] = value
                setTeachers(copy)
            }} />
        </div>
    )
}

const Subject: FC<ISubject> = ({ num1, subjects, setSubjects }) => {
    return (
        <div>
            <Input title={"Предмет"} value={subjects[num1]} setValue={value => {
                const copy = [...subjects]
                copy[num1] = value
                setSubjects(copy)
            }} />
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
    return (
        <div className="grade-page">
            <div className="grade-page">
                {grades.map((f, i) => <Grade
                    num={i}
                    grades={grades}
                    setGrades={setGrades}
                />)}

                <button onClick={() => {
                    setGrades([...grades, ""])
                }}>+</button>

                <button onClick={() => {
                    setGrades(grades.slice(0, -1))
                }}>-</button>
            </div>

            <div className="grade-page">
                {cabinets.map((f, i) => <Cabinet
                    num2={i}
                    cabinets={cabinets}
                    setCabinets={setCabinets}
                />)}

                <button onClick={() => {
                    setCabinets([...cabinets, ""])
                }}>+</button>

                <button onClick={() => {
                    setCabinets(cabinets.slice(0, -1))
                }}>-</button>
            </div>

            <div className="grade-page">
                {teachers.map((f, i) => <Teacher
                    num3={i}
                    teachers={teachers}
                    setTeachers={setTeachers}
                />)}

                <button onClick={() => {
                    setTeachers([...teachers, ""])
                }}>+</button>

                <button onClick={() => {
                    setTeachers(teachers.slice(0, -1))
                }}>-</button>
            </div>

            <div className="grade-page">
                {subjects.map((f, i) => <Subject
                    num1={i}
                    subjects={subjects}
                    setSubjects={setSubjects}
                />)}

                <button onClick={() => {
                    setSubjects([...subjects, ""])
                }}>+</button>

                <button onClick={() => {
                    setSubjects(subjects.slice(0, -1))
                }}>-</button>
            </div>
            <div className="grade-page">
            <button onClick={() => {
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
            }}>Отправить</button>
        </div>
        <div className="grade-page">
            <button onClick={() => {        
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
            }}>Создать файл</button>
            <button onClick={() => {

            }}>Скачать файл</button>
            </div>
            <div className="grade-page">
            <input type="file" id="Submit"></input>
            </div>
            <div className="grade-page">
            <button>Отправить файл</button>
            </div>
            <div className="grade-page">
                <p>Тут будут какие-то параметры по генерации расписания</p>
            <button>Создать расписание</button>
            </div>
            <div className="grade-page">
                <p>Тут будет какая-то предварительная информация</p>
            <button>Скачать расписание</button>
            </div>
        </div>

    )
}