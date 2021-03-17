import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row,Col } from 'react-bootstrap';
import { AddForm } from './component/AddForm';
import { ToDoList } from './component/ToDoList';
import { NotToDoList } from './component/NotToDoList';
import React,{useState} from 'react'


function App() {
    const [inputTaskList, setInputTaskList] = useState([])
     
    const handleTasklist=formData=>{
      console.log("formData>>>",formData)
      setInputTaskList(...inputTaskList, formData)
    }

      console.log("inputTaskList>>>",inputTaskList)

    
  return (
    <div className="App">
     <h1 className="text-center py-4">TaskList</h1>
     
   <Container>
       <AddForm  handleTasklist={handleTasklist}/>
       <Row>
           <Col>To DO List<ToDoList  inputTaskList={inputTaskList}/></Col>
           <Col>Not To DO List<NotToDoList/></Col>
       </Row>
   </Container>
     
    </div>
  );
}

export default App;

