import imgGh from '../img/ghh.svg'
import imgLink from '../img/link.svg'

const MoreProjects = ({title, img, imgTec1, imgTec2, imgTec3, linkGit, linkPage}) => {
    return (
        <>
                <div>
                    <div className='container-projects container-projects-2'>
                        <div className='container-img-icons'>
                            <img className='img-projects-2' src={img} alt="POKEDEX IMAGEN" />
                            <hr />
                        </div>
                        <div className='info-projects info-projects-2'>
                            <h3 className='title-project title-project-2'>{title}</h3>
                            <img className='img-skills-projects img-skills-projects-2' src={imgTec1} alt="HTML" />
                            <img className='img-skills-projects img-skills-projects-2' src={imgTec2} alt="CSS" />
                            <img className='img-skills-projects img-skills-projects-2' src={imgTec3} alt="JAVASCRIPT" />
                        </div>
                        <div className='container-icon-moreprojects'>
                            <a target='blank' href={linkGit}><img className='icon-moreprojects' src={imgGh} alt="LINK GITHUB" /></a>
                            <a target='blank' href={linkPage}><img className='icon-moreprojects' src={imgLink} alt="LINK PAGINA" /></a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MoreProjects