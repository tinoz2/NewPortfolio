import MoreProjects from "./MoreProjects"
import imgHTML from '../img/html.svg'
import imgCSS from '../img/css.svg'
import imgREACTJS from '../img/reactjs.svg'
import imgTS from '../img/ts.svg'
import imgUSDAPI from '../img/Screenshot_4.png'
import imgTODO from '../img/Screenshot_16.png'
import imgTailwind from '../img/tailwind.svg'

const MoreProjects2 = () => {
    return (
        <>
            <div className="container-info-projects">
                <h4 className="h4-projects">More of</h4>
                <h3 className='h3-skills'><span className='span-skills'>My </span>Projects:</h3>
            </div>
            <div className="container-moreprojects">
                <MoreProjects title='TodoList' img={imgTODO} linkGit={"https://github.com/tinoz2/todolist-react-ts.git"}
                    linkPage={"https://todolisttino.netlify.app/"} imgTec1={imgREACTJS} imgTec2={imgTS} imgTec3={imgTailwind} />
                <MoreProjects title='USD API' img={imgUSDAPI} linkGit={"https://github.com/tinoz2/usdApiREACTJS.git"}
                    linkPage={"https://usdapi.netlify.app/"} imgTec1={imgREACTJS} imgTec2={imgCSS} imgTec3={imgHTML} />
            </div>
        </>
    )
}

export default MoreProjects2