import ProjectsList from "./ProjectsList";
import "./style.css"

function Projects(props) {
    return (
        <section id="projects" className="project section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Projects</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                        in iste officiis commodi quidem hic quas.</p>
                </div>

                <ProjectsList projects={props.projects} />

            </div>
        </section>
    );
}

export default Projects;