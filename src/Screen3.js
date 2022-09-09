import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom';

function Screen3() {
  return (
    <div>

<h2>Screen 3</h2>

<Container>
     <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Categories (200)</Card.Title>
        <Card.Text>
          
           <nav>
            
           <Link to={"Screen4"}> Smart Phones (20)</Link>
           <br></br>
          Basic Phones(20)
           <br></br>
           Android(20)
          
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

export default Screen3