import { Link } from "react-router-dom"
import "./Navbar.css"


export const Navbar = () => {
    return (
        <div className="menu">
            <Link to="/auth" className="item">Auth</Link>
            <Link to="/create" className="item">create</Link>
            <Link to="/menu3" className="item">menu3</Link>
        </div>
	)
}