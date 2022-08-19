
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"




const NavBar = () => {
  return (<>

    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link to='/'>
            <Button className="btn-light active" >Home</Button>
          </Link>
          <Link to='/category/Deutsch'>
            <Button className="btn-light active">
              Deutsch beer
            </Button>
          </Link>
          <Link to='/category/British'>
            <Button className="btn-light active">British beers</Button>
          </Link>
          <Link to='/category/Lager'>
            <Button className="btn-light active"> Lager beers</Button>
          </Link>
          <Link to='/category/Wheat'>
            <Button className="btn-light active">wheat beers</Button>
          </Link>
          <Nav.Link href="#pricing">Log in</Nav.Link>
        </Nav>
        <Link to='/'>
          <img src="./img/cerveza-logo.jpg" width="80" height="80" alt="cerveza" />
        </Link>
      </Container>
    </Navbar>

  </>
  )
}

export default NavBar