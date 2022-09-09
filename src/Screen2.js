import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container"
import { Link} from 'react-router-dom';

function Screen2() {
  return (
    <>
    <div>
   <h2>Screen 2</h2>

   <Container>
     <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title>Categories (200)</Card.Title>
        <Card.Text>
          
           <nav>
          
           <Link to={"Screen3"}> All Mobile Phones (20)</Link>
           
           <br></br>
          All Mobile Accessories(20)
           <br></br>
           Cases Covers(20)

           
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
    </>
  )
}

export default Screen2