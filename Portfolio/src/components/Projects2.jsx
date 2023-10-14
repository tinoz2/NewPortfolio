import Projects from './Projects'
import imgEcommerce from '../img/Screenshot_1.png'
import imgHTML from '../img/html.svg'
import imgCSS from '../img/css.svg'
import imgJS from '../img/js.svg'
import imgWheaterAPP from '../img/Screenshot_3.png'
import imgREACTJS from '../img/reactjs.svg'
import imgUSDAPI from '../img/Screenshot_4.png'

const Projects2 = () => {
    return (
        <>
            <div className="container-info-projects">
                <h4 className="h4-projects">Some of</h4>
                <h3 className='h3-skills'><span className='span-skills'>My </span>Projects:</h3>
            </div>
            <div>
                <Projects imgProject={imgEcommerce} gitLink={"https://github.com/tinoz2/EcommerceJS"} pageLink={"https://zenaccesorios.netlify.app/"} titleP="Clothing E-commerce" descriptionP={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus. Corporis quia architecto accusamus eaque nam labore quis exercitationem provident unde, inventore accusantium reprehenderit praesentium doloremque temporibus voluptatum id sequi!"} language1={imgHTML} language2={imgCSS} language3={imgJS}/>
                <Projects imgProject={imgWheaterAPP} gitLink={"https://github.com/tinoz2/weatherApp.git"} pageLink={"https://weatherappbytino.netlify.app/"} titleP="Wheater APP" descriptionP={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus. Corporis quia architecto accusamus eaque nam labore quis exercitationem provident unde, inventore accusantium reprehenderit praesentium doloremque temporibus voluptatum id sequi!"} language1={imgHTML} language2={imgCSS} language3={imgJS}/>
                <Projects imgProject={imgUSDAPI} gitLink={"https://github.com/tinoz2/usdApiREACTJS.git"} pageLink={"https://usdapi.netlify.app/"} titleP="USD API" descriptionP={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, delectus. Corporis quia architecto accusamus eaque nam labore quis exercitationem provident unde, inventore accusantium reprehenderit praesentium doloremque temporibus voluptatum id sequi!"} language1={imgHTML} language2={imgCSS} language3={imgREACTJS}/>
            </div>
        </>
    )
}

export default Projects2