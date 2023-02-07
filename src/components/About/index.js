import "./style.css"

function About() {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Motivated Front-end Web developer one with passion in design. I started off with CMS's like Wordpress now
                        currently work on projects in HTML, CSS, JavaScript with frame works like Boostrap, Jquery and React library.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src="images/profile/billy.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>FrontEnd Developer &amp; IT Support Specialist.</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                            magna aliqua.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et
                            ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                            Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p>
                        <div className="text-center"><a href="files/Resume.pdf" className="btn" download>Download CV</a></div>
                    </div>
                </div>

            </div>
        </section >
    );
}

export default About;