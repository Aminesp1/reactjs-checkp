import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import "./App.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <React.Fragment>
      <div className='App'>
      
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h1>Contact Us</h1>
    <div className='card-div'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>LeBron James</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Lakers de Los Angeles</Card.Subtitle>
        <Card.Text>
        né le 30 décembre 1984 à Akron (Ohio), est un joueur professionnel américain de basket-ball.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Stephen Curry</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Warriors de Golden State</Card.Subtitle>
        <Card.Text>
        Stephen Curry, né le 14 mars 1988 à Akron, est un joueur américain de basket-ball.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>James Harden</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Clippers de Los Angeles</Card.Subtitle>
        <Card.Text>
        James Harden, né le 26 août 1989 à Los Angeles, est un joueur américain de basket-ball.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='form-div'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
        </div>
    </React.Fragment>
  )
}

export default App; 