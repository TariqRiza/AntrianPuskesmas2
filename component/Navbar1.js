import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navbar1 = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Pendaftaran Online</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Beranda</Nav.Link>
                    <Nav.Link href="/Telusuri">Telusuri</Nav.Link>
                    <Nav.Link href="/Antrian">Antrian</Nav.Link>
                    <Nav.Link href="/Petunjuk">Petunjuk</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbar1;