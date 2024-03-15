import { useState } from "react"
import { Input } from "../../ui/Input/Input"
import "./Auth.css"

export const Auth = () => {
    const [postId, setPostId] = useState(null);
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const url = "http://127.0.0.1:5000/registration"

    return (
        <div className="auth-page">

            <div className="auth-form">
                <Input title="Почта" value={login} setValue={setLogin} />
                <Input title="Пароль" value={password} setValue={setPassword} />

                <button onClick={() => {
                    // POST request using fetch with async/await
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: login,
                            password: password
                        })
                    })
                }}>Отправить</button>
            </div>

        </div >
    )
}