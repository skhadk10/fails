import React, {useState} from 'react'
import { Form, Button, Row,Col } from 'react-bootstrap';

const initialtaskList=[
    {title:"",
        hr:0
    }
]
export const AddForm = ({handleTasklist}) => {

    const [taskList, setTaskList] = useState(initialtaskList)
    
    const clickonChange= e =>{
        const {name,value}=e.target;
        setTaskList({...taskList,[name]:value})
    }
   
    const handleonSubmit=e=>{
        e.preventDefault();
        handleTasklist(taskList)
    }

    return (
        <Form onSubmit={handleonSubmit}>
  <Row>
    <Col>
      <Form.Control onChange={clickonChange} placeholder="Task name" name="title" value={taskList.title} type="text" />
    </Col>
    <Col>
      <Form.Control onChange={clickonChange} placeholder="hours"  name="hr" value={taskList.hr} type="number" />
    </Col>
    <Col><Button type="submit" variant="primary">Add</Button></Col>
  </Row>
</Form>
    )
}
