import React,{useState} from "react"
import {Navbar,Nav,Card,Container,Button} from "react-bootstrap"

function Navb() {
  const [show, setShow] = useState(false);
    return (
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Sappling</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link  href="#home">Home</Nav.Link>
    {!show && <Nav.Link onClick={()=> setShow(true)}>Sign up</Nav.Link>}
    {!show && <Nav.Link onClick={()=> setShow(true)}>Log in</Nav.Link>}
    {show && <Nav.Link onClick={()=> setShow(false)}>Sign Out</Nav.Link>}
    {show && <Nav.Link>Cart</Nav.Link>}
    {show && <Nav.Link>Tacking Items</Nav.Link>}
    </Nav>
      <Nav>
       {show && <Nav.Link >UserName</Nav.Link>}
       {show && <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.chzbgr.com%2Foriginal%2F1755909%2Fh7D85EAD8%2F&f=1&nofb=1"
            className="rounded-circle z-depth-0"
            alt="avatar image"
            height="35"
       /> }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
    )
}
export default Navb;

