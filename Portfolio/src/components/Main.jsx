import img from '../img/imgMain.svg'
import imgLi from '../img/linkedinsocial.svg'
import imgGhs from '../img/githubsocial.svg'
import imgEmail from '../img/Email.svg'

const Main = () => {
    return (
        <>
            <main className='container-main'>
                <div className='container-info-main'>
                    <small className='es-en'>English-Spanish</small>
                    <h2 className='title-main'>Front-End Developer.</h2>
                    <p className='p-main'>¡Hola, soy Santino, desarrollador web especializado en React!
                    <br />
                        Bienvenido a mi rincón digital, donde la magia de React se encuentra con el diseño web. Mi pasión es crear experiencias dinámicas y atractivas. Explora mi portfolio para descubrir cómo fusiono la creatividad con la potencia de React para impulsar proyectos excepcionales.</p>
                        <br />
                        <p>¡Gracias por tu visita!</p>
                    <div className='container-social'>
                        <a target='blank' href="https://www.linkedin.com/in/santino-ramos-conti-57a3a6279/"><img className='github-main' src={imgLi} alt="Linkedin" /></a>
                        <a target='blank' href="https://github.com/tinoz2"><img className='github-main' src={imgGhs} alt="Github" /></a>
                        <a target='blank' href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBpDthwFPgxQnlklgtcrfJbfCdlSFjjzvTsQMFTtwBXZNpGMXJrWkXhNdqcQqKBvnLncrXq"><img className='github-main' src={imgEmail} alt="Email" /></a>
                    </div>
                </div>
                <div>
                    <img className='img-main' src={img} alt="" />
                </div>
            </main>
        </>
    )
}

export default Main