export default function Projects() {
    return (
        <section id="projects" className="fade-in" style={{ marginTop: "60px" }}>
            <h2 className="gradient-text" style={{ marginBottom: "40px" }}>Projects</h2>

            <div className="projects-grid" style={{ display: "grid", gap: "40px" }}>
                <div className="project-card">
                    <h3 style={{ marginBottom: "30px" }}>Job Tracker App</h3>
                    <p>A job application tracking app with CRUD functionality, filters and localStorage persistence.</p>
                    <p style={{ fontSize: "14px", opacity: 0.7 }}>
                        Tech: React, Vite, CSS, LocalStorage
                    </p>
                    <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "30px"}}>
                        <a href="https://nan-ei.github.io/job-tracker/">
                            <button>Live Demo</button>
                        </a>
                        <a href="https://github.com/Nan-Ei/job-tracker">
                            <button>GitHub</button>
                        </a>
                    </div>                    
                </div>

                <div className="project-card">
                    <h3 style={{ marginBottom: "30px" }}>Weather App</h3>
                    <p>A responsive weather application that fetches real-time data by city name with error handling.</p>
                    <p style={{ fontSize: "14px", opacity: 0.7 }}>Tech: React, Vite, OpenWeather API</p>
                    <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "30px" }}>
                        <a href="https://nan-ei.github.io/weather-app/">
                            <button>Live Demo</button>
                        </a>
                        <a href="https://github.com/Nan-Ei/weather-app/">
                            <button>GitHub</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}