import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function NavBar() {
    return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Messi vs Ronaldo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/auth">Auth</Nav.Link>
                        <Nav.Link as={Link} to="/voting">Vote</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    )
}