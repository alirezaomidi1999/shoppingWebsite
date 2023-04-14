import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { basketContext } from "./Basketcontext";
import { useContext } from "react";

function Navigation() {
  const { showBasket, setShowBasket } = useContext(basketContext);
  const { productBasket, setProductBasket } = useContext(basketContext);
  const { showEmptyBasket, setShowEmptyBasket } = useContext(basketContext);
  const { counterProduct, setCounterProduct } = useContext(basketContext);
  const showBasketCard = () => {
    if (productBasket.length > 0) {
      setShowBasket(true);
    }

    setShowEmptyBasket(true);

    setTimeout(() => {
      setShowEmptyBasket(false);
    }, 3000);
  };
  return (
    <Navbar bg="light" expand="lg">
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              onClick={showBasketCard}
              style={{
                width: "70px",
                height: "30px",
                backgroundColor: "black",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "20px",
                }}
              >
                {counterProduct}
              </div>
            </div>

            {productBasket.length < 1 && showEmptyBasket && (
              <div className="empty-basket">Your Basket is empty</div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
