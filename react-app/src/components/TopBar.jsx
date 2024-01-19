import { Navbar, Container, Nav } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar className="pt-3 d-none d-sm-block">
      <Container>
        <Nav className="w-100 justify-content-center">
          <Nav.Link href="#" className="fs-7 navLink">
            TRENDING
          </Nav.Link>
          <Nav.Link href="#" className="fs-7 navLink">
            PODCAST
          </Nav.Link>
          <Nav.Link href="#" className="fs-7 navLink">
            MOODS AND GENRES
          </Nav.Link>
          <Nav.Link href="#" className="fs-7 navLink">
            NEW RELEASES
          </Nav.Link>
          <Nav.Link href="#" className="fs-7 navLink">
            DISCOVER
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopBar;
