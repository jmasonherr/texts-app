import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Other = () => (
  <Container>
    <Row>
      <Col sm={{ size: 6, order: 2, offset: 1 }}>Hi</Col>
    </Row>
  </Container>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/other" component={Other} />
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and sSAAAAVDreload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Main;
