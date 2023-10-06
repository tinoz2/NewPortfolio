import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import MoreProjects from "./components/MoreProjects"
import FooterContact from "./components/FooterContact"
import './css/navbar.css'
import './css/style.css'
import './css/main.css'
import './css/skills.css'
import './css/projects.css'
import './css/moreprojects.css'
import './css/footercontact.css'

const Container = () => {
    return (
        <>
            <NavBar />
            <Main />
            <Skills />
            <Projects />
            <MoreProjects />
            <FooterContact />
        </>
    )
}

export default Container