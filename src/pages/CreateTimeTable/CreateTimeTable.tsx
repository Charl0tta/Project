import { FC } from "react"
import { useState } from "react"
import { Input } from "../../ui/Input/Input"


interface ILesson {
    num: number
    grades: string[]
    setGrades: (values: string[]) => void
    subjects: string[]
    setSubjects: (values: string[]) => void
}

const Lesson: FC<ILesson> = ({num, grades, setGrades, subjects, setSubjects}) => {
    return(
    <div>
        <Input title={"Класс"} value={grades[num]} setValue={value => {
            const copy = [...grades]
            copy[num] = value
            setGrades(copy)
        }}/>
        <Input title={"Предмет"} value={subjects[num]} setValue={value => {
            const copy = [...subjects]
            copy[num] = value
            setSubjects(copy)
        }}/>
    </div>
    )
}

const Classrom = () => {
    
}

const Time = () => {

}

export const CreateTimeTable = () => {
    const [grades, setGrades] = useState<string[]>([])
    const [subjects, setSubjects] = useState<string[]>([])
    

    return (
        <div className="create-page">
            {grades.map((f=grade, i) => <Lesson 
            num={i} 
            grades={grades} 
            setGrades={setGrades}
            subjects={subjects}
            setSubjects={setSubjects}
            />)}

            <button onClick={() => {
                setGrades([...grades, ""])
                setSubjects([...subjects, ""])
            }}>+</button>

            <button onClick={() => {
                setGrades.pop()
                setSubjects.pop()
            }}>-</button>
        </div>
    )
}