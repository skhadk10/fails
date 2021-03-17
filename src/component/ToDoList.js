import React from 'react'
import { Table } from 'react-bootstrap';
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
            <td>{item?.task}</td>
            <td>{item?.hr}</td>
            </tr> ) 
      })}
    
    
  </tbody>
</Table>
        </div>
    )
}
