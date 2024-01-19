import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App home-bg">
      <Container fluid className="m-0 p-0">
        <Row className="g-0">
          <Col md={3} xxl={2} className="d-none d-md-block">
            <SideBar></SideBar>
          </Col>
          <Col xs={12} md={9} xxl={10}>
            <Home></Home>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
