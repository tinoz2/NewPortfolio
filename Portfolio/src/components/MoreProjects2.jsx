import MoreProjects from "./MoreProjects"
import imgMR1 from '../img/MR1.png'
import imgHTML from '../img/html.svg'
import imgCSS from '../img/css.svg'
import imgJS from '../img/js.svg'
import imgSASS from '../img/sass.svg'
import imgTS from '../img/ts.svg'
import imgMR2 from '../img/Screenshot_5.png'
import imgMR3 from '../img/Screenshot_6.png'
import imgMR4 from '../img/Screenshot_7.png'
import imgMR5 from '../img/Screenshot_8.png'
import imgMR6 from '../img/Screenshot_9.png'
import imgMR7 from '../img/Screenshot_10.png'
import imgMR8 from '../img/Screenshot_11.png'
import imgMR9 from '../img/Screenshot_12.png'

const MoreProjects2 = () => {
    return (
        <>
            <div className="container-info-projects">
                <h4 className="h4-projects">More of</h4>
                <h3 className='h3-skills'><span className='span-skills'>My </span>Projects:</h3>
            </div>
            <div className="container-moreprojects">
                <MoreProjects title='Pokedex' img={imgMR1} linkGit={"https://github.com/tinoz2/Pokedex.git"}
                    linkPage={"https://pokedextino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgJS} />
                <MoreProjects title='Calculator' img={imgMR2} linkGit={"https://github.com/tinoz2/Calculadora.git"}
                    linkPage={"https://calculadoratino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgTS} />
                <MoreProjects title='Memory game' img={imgMR3} linkGit={"https://github.com/tinoz2/Memorama.git"}
                    linkPage={"https://memoramabytino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgJS} />
                <MoreProjects title='Rick and Morty API' img={imgMR6} linkGit={"https://github.com/tinoz2/RickandMortyAPI.git"}
                    linkPage={"https://rickandmortyapibytino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgJS} />
                <MoreProjects title='Rock Paper Scissor' img={imgMR5} linkGit={"https://github.com/tinoz2/rock-paper-scissors.git"}
                    linkPage={"https://rockpaperscissorstino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgJS} />
                <MoreProjects title='Task list' img={imgMR9} linkGit={"https://github.com/tinoz2/TaskList.git"}
                    linkPage={"https://tasklistbytino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgJS} />
                <MoreProjects title='Whiskey page' img={imgMR4} linkGit={"https://github.com/tinoz2/zyzzbrah.git"}
                    linkPage={"https://whiskeytino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgSASS} />
                <MoreProjects title='Pomodoro timer' img={imgMR8} linkGit={"https://github.com/tinoz2/pomodoro.git"}
                    linkPage={"https://pomowork.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgJS} />
                <MoreProjects title='App interface' img={imgMR7} linkGit={"https://github.com/tinoz2/InterfazMobileApp.git"}
                    linkPage={"https://interfaztino.netlify.app/"} imgTec1={imgHTML} imgTec2={imgCSS} imgTec3={imgJS} />
            </div>
        </>
    )
}

export default MoreProjects2