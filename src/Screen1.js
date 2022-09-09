import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { NavLink } from 'react-router-dom';

function Screen1() {
  return (
    <div>

     <h1>Screen 1</h1>
     
     <Container>
     <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Categories (200)</Card.Title>
        <Card.Text>
          
           <nav>
           <NavLink to={"Screen2"}> Mobiles, Computers (30)</NavLink>
           <br></br>
           TV,Applications,Electronics(30)
           <br></br>
           Mens Fashion(30)
           </nav>
          
          
        </Card.Text>
        
      </Card.Body>
    </Card>
  <br></br>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>s No</th>
          <th>Product Name</th>
          <th>Price</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Product 1</td>
          <td>$10</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Product 2</td>
          <td>$20</td>
          
        </tr>
        
      </tbody>
    </Table>
    
    </Container>

    </div>
  )
}

export default Screen1