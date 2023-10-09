import certificateWEB from '../img/diploma.png'
import certificateJS from '../img/certificado2.png'
import imgLink from '../img/link.svg'

const Certificates = () => {
    return (
        <>
            <div>
                <h3 className='h3-skills h3-certificates'><span className='span-skills'>My </span>Certificates:</h3>
                <div className='container-img-certificate'>
                    <img className='img-certificate' src={certificateWEB} alt="CODERHOUSE CERTIFICATE" />
                    <img className='img-certificate' src={certificateJS} alt="CODERHOUSE CERTIFICATE" />
                </div>
                <div className='container-button-certificate'>
                    <a target='blank' href="https://www.coderhouse.com/"><img className='icon-moreprojects icon-certificate' src={imgLink} alt="CODERHOUSE CERTIFICATE LINK" /></a>
                </div>
            </div>
        </>
    )
}

export default Certificates