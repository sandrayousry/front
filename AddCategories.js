import React from 'react';
import {Modal, Button, Row, Col, Form} from  'react-bootstrap';

class AddCategories extends React.Component{

    handelSubmit(event){
        event.preventDefault();
            fetch(`http://hazemmansour.pythonanywhere.com/api/addcategory`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify({
            
                id:event.target.id.value,
                name:event.target.name.value,
                code:event.target.code.value,
                
            })
            })
            .then(res=> res.json())
            .then((result)=>
            {
                alert('added successfully');
            },
            (error)=>{
                alert('Failed')
            }
            
            )
        
    }

    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-model-title-vcenter" centered
            >
            <Modal.Header closeButton>
            <Modal.Title id="contained-model-title-vcenter">
            Add AddCategory
            </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div className="container">
                     <Row >
                         <Col sm={6}>
                             <Form onSubmit={this.handelSubmit}>

                                 
                             <Form.Group controlId="id">
                                     <Form.Label>Category Id</Form.Label>
                                     <Form.Control type="text" name="id"  placeholder="Category Id" required />
                                     </Form.Group>

                                     <Form.Group controlId="name">
                                     <Form.Label>Category name</Form.Label>
                                     <Form.Control type="text" name="name"  placeholder="Category name"
                                      required />
                                     </Form.Group>

                                     <Form.Group controlId="code">
                                     <Form.Label>Category code</Form.Label>
                                     <Form.Control type="text" name="codee"  placeholder="Category codee"
                                      required />
                                     </Form.Group>

                                     

                                 <Form.Group>
                                     <Button variant="primary" type="submit">
                                      Add Category 

                                     </Button>
                                 </Form.Group>

                             </Form>
                         </Col>

                     </Row>

                 </div>
             </Modal.Body>
             <Modal.Footer>
             <Button variant="danger" onClick={this.props.onHide}>Close</Button>
             
             </Modal.Footer>
            </Modal>
        )
    }
}

export default AddCategories;