export default function About() {
    return (
        <section id="about" className="fade-in">
            <h2 className="gradient-text">About Me</h2>
            <div className="about-card">
                <p>I graduated with a <strong>B.Sc (Maths)</strong> and worked for <strong>6 years</strong> in the banking field.Now I am transitioning into the IT industry, focusing on <strong>Frontend Development</strong>.</p>

                <h3 style={{ marginTop: "45px" }}>Why Frontend?</h3>
                <p>I enjoy creating clean, modern UI designs and solving problems through code.Building websites that look great and work smoothly is what I love doing.</p>

                <h3 style={{ marginTop: "45px" }}>Strengths</h3>
                <ul style={{ listStyle: "none" }}>
                    <li>Problem-solving</li>
                    <li>Accuracy & attention to detail</li>
                    <li>Customer experience awareness</li>
                    <li>Quick learner</li>
                </ul>

                <h3 style={{ marginTop: "45px" }}>Skills</h3>
                <p>HTML, CSS, Bootstrap, Javascript, React, Laravel</p>
            </div>
        </section>
    )
}