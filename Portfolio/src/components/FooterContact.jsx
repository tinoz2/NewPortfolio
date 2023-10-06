import imgLi from '../img/linkedinsocial.svg'
import imgGhs from '../img/githubsocial.svg'
import imgEmail from '../img/Email.svg'

const FooterContact = () => {
    return (
        <>
            <footer id='contact'>
                <div>
                    <div className='container-footer'>
                        <a target='blank' href="https://www.linkedin.com/in/santino-ramos-conti-57a3a6279/"><img className='github-main footer-icon' src={imgLi} alt="Linkedin" /></a>
                        <a target='blank' href="https://github.com/tinoz2"><img className='github-main footer-icon' src={imgGhs} alt="Github" /></a>
                        <a target='blank' href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSBpDthwFPgxQnlklgtcrfJbfCdlSFjjzvTsQMFTtwBXZNpGMXJrWkXhNdqcQqKBvnLncrXq"><img className='github-main footer-icon' src={imgEmail} alt="Email" /></a>
                    </div>
                    <p className='email-footer'>despegar.conti@gmail.com</p>
                    <small className='copy-footer'>Copyright © 2023</small>
                </div>
            </footer>
        </>
    )
}

export default FooterContact