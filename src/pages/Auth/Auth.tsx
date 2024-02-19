import { useState } from "react"
import { Input } from "../../ui/Input/Input"
import "./Auth.css"

export const Auth = () => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const url = "http://127.0.0.1:5000"

    return (
    <div className="auth-page">

        <div className="auth-form">
            <Input title="Почта" value={login} setValue={setLogin}/>
            <Input title="Пароль" value={password} setValue={setPassword}/>

            <button onClick={() => {
                alert(`${login}: ${password}`)
                fetch(url, {
                    headers: {
                      'Content-Type': 'application/json'
                  },
                    method: 'POST',
                    body: login
                  })
            }}>Отправить</button>
            
        </div>

    </div>
    )
}