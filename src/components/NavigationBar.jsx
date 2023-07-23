import {Container, Nav, Navbar} from "react-bootstrap";
import "./NavigationBar.scss"

export function NavigationBar() {


    return (
        <div className="navigation-bar">
            <Navbar expand="lg" className={"bg-pearlWhite"}>
                <Container>
                    <Navbar.Brand href="/"><img src="/assets/images/logos/save-hearts-logo.png"
                                                alt="save-hearts-logo" width={175}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/reserve-time" className={"mx-2"}>Reserve a Time</Nav.Link>
                            <Nav.Link href='/contact-us' className={"mx-2"}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}