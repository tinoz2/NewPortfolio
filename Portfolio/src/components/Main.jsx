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
                    <p className='p-main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum ab odit maxime beatae ullam dicta, cum quia quod pariatur aliquam rerum corporis rem non dolorum. Dolorem nam dolor itaque eos, totam porro fuga possimus adipisci, magnam distinctio sequi facilis non expedita nesciunt. Quis vitae quia reiciendis placeat temporibus quisquam?</p>
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