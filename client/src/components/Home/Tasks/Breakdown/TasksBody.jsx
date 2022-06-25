import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import './TasksBody.css';

const TasksBody = () => {
  const [ tasks, setTasks ] = useState(['Learn Bootstrap', 'Play With React', 'Solve Toy Problems', 'Polish Up On Vanilla Js and Algos', 'Learn Java Spring and Spring Boot', 'Go To Gabe\'s Game', 'Have An Awesome Day', 'Eat Delicious Food', 'Write Amazon Leadership Principle Stories']);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {
              tasks.map(task => {
                return (
                  <Form className="Task">
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label={task} />
                    </Form.Group>
                  </Form>
                );
              })
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default TasksBody;