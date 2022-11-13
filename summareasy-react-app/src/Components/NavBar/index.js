import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/Logo.png';
import bye from '../../images/bye.png'
import "../../App.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
      <Container>
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="300"             
              className="d-inline-block align-top"
              alt="Summareasy logo"
            />
            <h4>Hello {localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</h4>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href={`/Dashboard`} className="nav-link">Dashboard</Nav.Link>
            <Nav.Link href={`/ApiBookData`} className="nav-link">Book Search</Nav.Link>
            <NavDropdown title="What do you want to do?" id="collasible-nav-dropdown">
              <NavDropdown.Item href={`/Dashboard`} className="nav-drop-item">Go to Dashboard</NavDropdown.Item>
              <NavDropdown.Item href={`/ApiBookData`} className="nav-drop-item">Search for Book</NavDropdown.Item>
              <NavDropdown.Item href={`/all-book-reports`} className="nav-drop-item">View all Book Reports</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`/loggedout`} className="nav-drop-item">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            <Nav.Link href={`/loggedout`} className="nav-link"><img src={bye} width="125px"></img></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;