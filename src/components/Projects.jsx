import React from "react";
import "../style.css";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {/* First Project Box */}
                <div className="project-item">
                    <h3>FoundIt</h3>
                    <a href="https://www.figma.com/design/x9NPHhEXlcnDj385eG7L6Y/DesktopWireframe?node-id=0-1&t=xvjEsNw70b8gLIC8-1">
                    Visit FoundIt</a>
                </div>
                
                {/* Second Project Box */}
                <div className="project-item">
                    <h3>COMING SOON</h3>
                    <p><strong>Driving Test Practice Quiz:</strong></p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
