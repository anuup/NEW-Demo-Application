import React from 'react'
import Table from 'react-bootstrap/Table';

import Container from "react-bootstrap/Container"


function Screen4() {
  return (
    <div>

<h2>Screen 4</h2>

<Container>
     
           
            
           
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

export default Screen4