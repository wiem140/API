import React from 'react'
import axios from 'axios';
import {useEffect,useState } from 'react';
import { Row,ListGroup} from 'react-bootstrap';
import './App.css';

const UserList = () => {

    let [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => setListOfUsers(response.data));
    }, []);

    return (
    <div className="userList">
       
        <Row >
        {listOfUsers.map((el) => (
        <div className=" list" key={el.id}>
         <ListGroup.Item> <h4 className="id">ID:{el.id}</h4></ListGroup.Item>   
         <ListGroup.Item> Name:{el.name}</ListGroup.Item> 
         <ListGroup.Item> Username:  {el.username}</ListGroup.Item> 
         <ListGroup.Item> Email: {el.email}</ListGroup.Item> 
         <ListGroup.Item> Adress: {el.address.street }</ListGroup.Item> 
         <ListGroup.Item> Phone: {el.phone}</ListGroup.Item> 
          
</div>
        
      ))}
    </Row>
    </div>
    
  );
};
export default UserList;