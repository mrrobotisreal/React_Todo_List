import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './TasksHeader.css';

const TasksHeader = () => {
  return (
    <div id="TasksHeader">
      <Container>
        <Row>
          <Col>Name</Col>
        </Row>
        <Row>
          <Col>
            <Button>Left</Button>
          </Col>
          <Col>
            <span>0 of 12</span>
          </Col>
          <Col>
            <Button>Right</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>06/25/2022 10:39AM</span>
          </Col>
          <Col>
            <span>Location: Delta, Colorado</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default TasksHeader;