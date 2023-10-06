import imgEcommerce from '../img/Screenshot_1.png'
import imgHTML from '../img/html.svg'
import imgCSS from '../img/css.svg'
import imgJS from '../img/js.svg'
import imgGh from '../img/ghh.svg'
import imgLink from '../img/link.svg'
import imgWheaterAPP from '../img/Screenshot_3.png'
import imgREACTJS from '../img/reactjs.svg'
import imgUSDAPI from '../img/Screenshot_4.png'

const Projects = () => {
    return (
        <>
            <section id='projects'>
                <div className="container-info-projects">
                    <h4 className="h4-projects">Some of</h4>
                    <h3 className='h3-skills'><span className='span-skills'>My </span>Projects:</h3>
                </div>
                <div className='container-projects'>
                    <div className='container-img-icons'>
                        <img className='img-projects' src={imgEcommerce} alt="IMAGEN E-COMMERCE" />
                        <div className='icons-projects'>
                            <a target='blank' href="https://github.com/tinoz2/EcommerceJS"><img className='github-main style-icon' src={imgGh} alt="LINK GITHUB E-COMMERCE" /></a>
                            <a target='blank' href="https://zenaccesorios.netlify.app/"><img className='github-main style-icon' src={imgLink} alt="LINK PAGE E-COMMERCE" /></a>
                        </div>
                        <hr />
                    </div>
                    <div className='info-projects'>
                        <h3 className='title-project'>Clothing E-commerce</h3>
                        <p className='p-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus. Corporis quia architecto accusamus eaque nam labore quis exercitationem provident unde, inventore accusantium reprehenderit praesentium doloremque temporibus voluptatum id sequi!</p>
                        <img className='img-skills-projects' src={imgHTML} alt="HTML" />
                        <img className='img-skills-projects' src={imgCSS} alt="CSS" />
                        <img className='img-skills-projects' src={imgJS} alt="JAVASCRIPT" />
                    </div>
                </div>
                <div className='container-projects'>
                    <div className='container-img-icons'>
                        <img className='img-projects' src={imgWheaterAPP} alt="IMAGEN WHEATER APP" />
                        <div className='icons-projects'>
                            <a target='blank' href="https://github.com/tinoz2/weatherApp.git"><img className='github-main style-icon' src={imgGh} alt="LINK GITHUB WHEATER APP" /></a>
                            <a target='blank' href="https://weatherappbytino.netlify.app/"><img className='github-main style-icon' src={imgLink} alt="LINK PAGE WHEATER APP" /></a>
                        </div>
                        <hr />
                    </div>
                    <div className='info-projects'>
                        <h3 className='title-project'>Wheater APP</h3>
                        <p className='p-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus. Corporis quia architecto accusamus eaque nam labore quis exercitationem provident unde, inventore accusantium reprehenderit praesentium doloremque temporibus voluptatum id sequi!</p>
                        <img className='img-skills-projects' src={imgHTML} alt="HTML" />
                        <img className='img-skills-projects' src={imgCSS} alt="CSS" />
                        <img className='img-skills-projects' src={imgJS} alt="JAVASCRIPT" />
                    </div>
                </div>
                <div className='container-projects'>
                    <div className='container-img-icons'>
                        <img className='img-projects' src={imgUSDAPI} alt="IMAGEN USDAPI" />
                        <div className='icons-projects'>
                            <a target='blank' href="https://github.com/tinoz2/usdApiREACTJS.git"><img className='github-main style-icon' src={imgGh} alt="LINK GITHUB USDAPI" /></a>
                            <a target='blank' href="https://usdapi.netlify.app/"><img className='github-main style-icon' src={imgLink} alt="LINK PAGE USDAPI" /></a>
                        </div>
                        <hr />
                    </div>
                    <div className='info-projects'>
                        <h3 className='title-project'>USD API</h3>
                        <p className='p-project'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus. Corporis quia architecto accusamus eaque nam labore quis exercitationem provident unde, inventore accusantium reprehenderit praesentium doloremque temporibus voluptatum id sequi!</p>
                        <img className='img-skills-projects' src={imgHTML} alt="HTML" />
                        <img className='img-skills-projects' src={imgCSS} alt="CSS" />
                        <img className='img-skills-projects' src={imgREACTJS} alt="REACTJAVASCRIPT" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects