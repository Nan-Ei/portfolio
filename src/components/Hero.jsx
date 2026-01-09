import {Link} from "react-router-dom"

export default function Hero() {
    return (
        <section id="home" className="fade-in" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 40px", gap: "20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "45px" }}>Hi I'm <span className="gradient-text">Nan Ei Phyu Zin</span></h2>
            <h3 style={{ fontSize: "28px", opacity: 0.8 }}>Frontend Developer(React)</h3>
            <p style={{marginTop: "20px", fontSize: "19px", opacity: 0.7, lineHeight: 1.5 }}>
                I build modern,clean and resposive web application using React.With 6 years of banking experience and a strong mathematics background.
            </p>
            <Link to="/projects">
                <button>View Projects</button>
            </Link>
        </section>
    )
}