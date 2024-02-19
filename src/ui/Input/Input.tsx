import { FC } from "react"
import "./Input.css"

interface IInput {
    title: string,
    value: string,
    setValue: (value: string) => void
}

export const Input: FC<IInput> = ({title, value, setValue}) => {
    return (
        <div className="input-wrap">
            <p id="email"> {title} </p>
            <input value={value} onChange={(e) => {setValue(e.target.value)}}/>
        </div>
    )
}