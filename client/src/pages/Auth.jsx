import { Container, Tab, Tabs, Form, Button } from "react-bootstrap"
export default function Auth() {
    const handleLogin = () => {
        console.log("You have logged in")
    }
    const handleSignup = () => {
        console.log("You have signed up")
    }
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Tabs>
                <Tab eventKey="login" title="Login">
                    <Form>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleLogin}>Login</Button>
                    </Form>
                </Tab>
                <Tab eventKey="signup" title="Signup">
                    <Form>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSignup}>Signup</Button> 
                    </Form>
                </Tab>
            </Tabs>
        </Container>
    )
}
