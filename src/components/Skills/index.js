import Skill from './Skill';
import './style.css'

function Skills() {
  const skillsDetails = [
    {
      name: "HTML",
      experience: 100
    },
    {
      name: "CSS",
      experience: 90
    },
    {
      name: "Javascript",
      experience: 75
    },
    {
      name: "React",
      experience: 80
    },
    {
      name: "WordPress/CMS",
      experience: 90
    },
    {
      name: "IT support",
      experience: 55
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">
            {
              skillsDetails.slice(0, 3).map((skill, index) => (
                <Skill skill={skill} key={index} />
              ))
            }
          </div>

          <div className="col-lg-6">
            {
              skillsDetails.slice(3).map((skill, index) => (
                <Skill skill={skill} key={index} />
              ))
            }

          </div>
        </div>
      </div>
    </section>
  )

}

export default Skills;