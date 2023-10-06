import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container>
                    <div>
                    <span className='iam'>I'm</span>
                    <h1>Santino <span className='code'>&lt;/&gt;</span></h1>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href='#home' className='nav-link'>Home</Nav.Link>
                            <Nav.Link href='#projects' className='nav-link'>Projects</Nav.Link>
                            <Nav.Link href='#contact' className='nav-link'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar