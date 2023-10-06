import imgHTML from '../img/html.svg'
import imgCSS from '../img/css.svg'
import imgJS from '../img/js.svg'
import imgREACTJS from '../img/reactjs.svg'
import imgSASS from '../img/sass.svg'
import imgBS from '../img/bs.svg'
import imgGIT from '../img/git.svg'

const Skills = () => {
    return (
        <>
            <div className="technologies-skills">
                <h3 className='h3-skills'><span className='span-skills'>My </span>Technologies:</h3>
                <div>
                    <img className='img-skills' src={imgHTML} alt="html icon" />
                    <img className='img-skills' src={imgCSS} alt="css icon" />
                    <img className='img-skills' src={imgJS} alt="javascript icon" />
                    <img className='img-skills' src={imgREACTJS} alt="reactjavascript icon" />
                    <img className='img-skills' src={imgSASS} alt="sass icon" />
                    <img className='img-skills' src={imgBS} alt="bootstrap icon" />
                    <img className='img-skills git-icon' src={imgGIT} alt="github icon" />
                </div>
            </div>
        </>
    )
}

export default Skills