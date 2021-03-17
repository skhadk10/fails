import React from 'react'
import { Table, Button } from 'react-bootstrap';
export const ToDoList = ({inputTaskList}) => {
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
    
      <th>Task</th>
      <th>Hour</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {inputTaskList.map((item,i)=>{
    
    return(<tr key={i}>
            <td>{item?.title}</td>
            <td>{item?.hr}</td>
            <td><Button>Remove task</Button></td>
            </tr> ) 
      })}
    
    
  </tbody>
</Table>
        </div>
    )
}
