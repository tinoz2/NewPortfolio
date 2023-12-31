import NavBar from "./components/NavBar"
import Main from "./components/Main"
import Skills from "./components/Skills"
import MoreProjects2 from "./components/MoreProjects2"
import Projects2 from "./components/Projects2"
import FooterContact from "./components/FooterContact"
import Certificates from "./components/Certificates"
import './css/navbar.css'
import './css/style.css'
import './css/main.css'
import './css/skills.css'
import './css/projects.css'
import './css/moreprojects.css'
import './css/footercontact.css'
import './css/certificates.css'

const Container = () => {
    return (
        <>
            <NavBar />
            <Main />
            <Skills />
            <Projects2 />
            <MoreProjects2 />
            <Certificates />
            <FooterContact />
        </>
    )
}

export default Container