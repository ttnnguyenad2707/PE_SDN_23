import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
// import Tutorial from './components/Tutorial';
// import TutorialComment from './components/TutorialComment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>

          <Row>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              {/* body */}
              <Routes>
              <Route path="/" element={<Home/>}></Route>

              </Routes>
            </Col>
            <Col>
            </Col>

          </Row>
          <Row>
            <Col>


            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
