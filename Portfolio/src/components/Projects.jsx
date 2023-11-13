import imgGh from '../img/ghh.svg'
import imgLink from '../img/link.svg'

const Projects = ({imgProject, gitLink, pageLink, titleP, descriptionP, language1, language2, language3, language4 }) => {
    return (
        <>
            <section id='projects'>
                <div className='container-projects'>
                    <div className='container-img-icons'>
                        <img className='img-projects' src={imgProject} alt="IMAGE PROJECT" />
                        <div className='icons-projects'>
                            <a target='blank' href={gitLink}><img className='github-main style-icon' src={imgGh} alt="LINK GITHUB" /></a>
                            <a target='blank' href={pageLink}><img className='github-main style-icon' src={imgLink} alt="LINK PAGE" /></a>
                        </div>
                        <hr />
                    </div>
                    <div className='info-projects'>
                        <h3 className='title-project'>{titleP}</h3>
                        <p className='p-project'>{descriptionP}</p>
                        <img className='img-skills-projects' src={language1} alt="HTML" />
                        <img className='img-skills-projects' src={language2} alt="CSS" />
                        <img className='img-skills-projects' src={language3} alt="JAVASCRIPT" />
                        {language4 && <img className='img-skills-projects' src={language4} alt="JAVASCRIPT" />}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects