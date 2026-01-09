import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar" style={{ padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 }}>
            <h1 className="gradient-text">Nan Ei Phyu Zin</h1>
            <div style={{ display: "flex", gap: 15, textDecoration: "none" }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}