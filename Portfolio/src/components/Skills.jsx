import imgHTML from '../img/html.svg'
import imgCSS from '../img/css.svg'
import imgJS from '../img/js.svg'
import imgREACTJS from '../img/reactjs.svg'
import imgSASS from '../img/sass.svg'
import imgBS from '../img/bs.svg'
import imgGIT from '../img/git.svg'
import imgFirebase from '../img/firebase.svg'
import imgTS from '../img/typescript.svg'
import imgTailwind from '../img/tailwind.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Skills = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <>
            <div className="technologies-skills">
                <h3 className='h3-skills'><span className='span-skills'>My </span>Technologies:</h3>
                <div>
                    <img data-aos-duration="1000" data-aos="fade-up" className='img-skills' src={imgHTML} alt="html icon" />
                    <img data-aos-duration="1000" data-aos="fade-down" className='img-skills' src={imgCSS} alt="css icon" />
                    <img data-aos-duration="1000" data-aos="fade-right" className='img-skills' src={imgJS} alt="javascript icon" />
                    <img data-aos-duration="1000" data-aos="fade-left" className='img-skills' src={imgREACTJS} alt="reactjavascript icon" />
                    <img data-aos-duration="1000" data-aos="flip-left" className='img-skills' src={imgSASS} alt="sass icon" />
                    <img data-aos-duration="1000" data-aos="flip-right" className='img-skills' src={imgBS} alt="bootstrap icon" />
                    <img data-aos-duration="1000" data-aos="flip-up" className='img-skills git-icon' src={imgGIT} alt="github icon" />
                    <img data-aos-duration="1000" data-aos="fade-down" className='img-skills' src={imgFirebase} alt="css icon" />
                    <img data-aos-duration="1000" data-aos="flip-left" className='img-skills' src={imgTS} alt="sass icon" />
                    <img data-aos-duration="1000" data-aos="fade-left" className='img-skills' src={imgTailwind} alt="reactjavascript icon" />
                </div>
            </div>
        </>
    )
}

export default Skills