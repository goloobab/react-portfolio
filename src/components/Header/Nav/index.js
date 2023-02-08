import NavItem from "./NavItem";
import "./style.css"


function Nav() {
    const routes = [
        {
            path: "/react-portfolio",
            icon: "bx-home",
            text: "Home"
        },
        {
            path: "/react-portfolio/about",
            icon: "bx-user",
            text: "About"
        },
        {
            path: "/react-portfolio/skills",
            icon: "bi-mortarboard",
            text: "Skills"
        },
        {
            path: "/react-portfolio/projects",
            icon: "bx-book-content",
            text: "Projects"
        },
        {
            path: "/react-portfolio/contact",
            icon: "bx-envelope",
            text: "Contact"
        }
    ]

    return (
        <nav id="navbar" className="navbar nav-menu">
            <ul>
                {
                    routes.map((route, index) => (
                        <NavItem route={route} key={index} />
                    ))
                }
            </ul>
        </nav>
    );


}

export default Nav;