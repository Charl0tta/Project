import { FC } from "react"
import { useState } from "react"
import { Input } from "../../ui/Input/Input"

const url = "http://127.0.0.1:5000"
interface ISubject {
    num: number
    subjects: string[]
    setSubjects: (values: string[]) => void
}

interface IGrade {
    num: number
    grades: string[]
    setGrades: (values: string[]) => void
}

const Subject : FC<ISubject> = ({num, subjects, setSubjects}) => {
    return(
    <div>
        <Input title={"Предмет"} value={subjects[num]} setValue={value => {
            const copy = [...subjects]
            copy[num] = value
            setSubjects(copy)
        }}/>
    </div>
    )
}

const Grade : FC<IGrade> = ({num, grades, setGrades}) => {
    return(
    <div>
        <Input title={"Класс"} value={grades[num]} setValue={value => {
            const copy = [...grades]
            copy[num] = value
            setGrades(copy)
        }}/>
    </div>
    )
}
    <div className="create-page">
        {grades.map(i) => <Grade
        num={i} 
        grades={grades} 
        setGrades={setGrades}
        />)}

        <button onClick={() => {
           setGrades([...grades, ""])
         }}>+</button>

    <div className="create-page">
        {subjects.map(i) => <Subject
        num={i} 
        subjects={subjects} 
        setSubjects={setSubjects}
        />)}

        <button onClick={() => {
            setSubjects([...subjects, ""])
        }}>+</button>

        <button onClick={() => {
            setGrades.slice(0, -1)
            setSubjects.slice(0, -1)
        }}>-</button>

        <button onClick={() => {
                alert(`${grades}: ${subjects}`)
                fetch(url, {
                    headers: {
                      'Content-Type': 'application/json'
                  },
                    method: 'POST',
                    body: grades
                  })
            }}>Отправить</button>
    </div>
