import Projects from './Projects'
import imgHTML from '../img/html.svg'
import imgCSS from '../img/css.svg'
import imgJS from '../img/js.svg'
import imgWheaterAPP from '../img/Screenshot_3.png'
import imgREACTJS from '../img/reactjs.svg'
import imgBoxing from '../img/Screenshot_14.png'
import imgFirebase from '../img/firebase.svg'
import imgChatApp from '../img/Screenshot_17.png'
import imgTailwind from '../img/tailwind.svg'
import imgTS from '../img/typescript.svg'

const Projects2 = () => {
    return (
        <>
            <div className="container-info-projects">
                <h4 className="h4-projects">Some of</h4>
                <h3 className='h3-skills'><span className='span-skills'>My </span>Projects:</h3>
            </div>
            <div>
                <Projects imgProject={imgBoxing} gitLink={"https://github.com/tinoz2/boxing-shop.git"} pageLink={"https://boxingshop.netlify.app/"} titleP="Boxing Shop" descriptionP={"En este E-commerce desarrollé una tienda de boxeo. El objetivo final en este proyecto era aprender ReactJS. Conseguí avanzar en mi habilidad como desarrollador React. Además, Aprendí a enviar y recibir datos desde Firebase y renderizado condicional."} language1={imgREACTJS} language2={imgFirebase} language3={imgCSS} />
                <Projects imgProject={imgWheaterAPP} gitLink={"https://github.com/tinoz2/weatherApp.git"} pageLink={"https://weatherappbytino.netlify.app/"} titleP="Wheater APP" descriptionP={"En este proyecto desarrollé una APP del clima. El objetivo final en este proyecto era aprender llamadas API. Conseguí aprender llamadas API y configurarlas a mi disposición. Además, aprendí sobre UX-UI y a pedir la ubicación al usuario para mostrar el clima."} language1={imgHTML} language2={imgCSS} language3={imgJS} />
                <Projects imgProject={imgChatApp} gitLink={"https://github.com/tinoz2/ChatApp.git"} pageLink={"https://chatapptino.netlify.app/"} titleP="Chat APP" descriptionP={"En este proyecto desarrollé una APP de chat. El objetivo final de este proyecto era aprender sobre Tailwind y Firebase. Conseguí aprender a como estilar con TailwindCSS. Además, aprendí a usar Firebase Authentication para hacer un inicio de sesión."} language1={imgREACTJS} language2={imgFirebase} language3={imgTailwind} language4={imgTS} />
            </div>
        </>
    )
}

export default Projects2