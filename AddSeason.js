import React from 'react';
import {Modal, Button, Row, Col, Form} from  'react-bootstrap';

class AddSeason extends React.Component{
 
    handelSubmit(event){
        event.preventDefault();
            fetch(`http://hazemmansour.pythonanywhere.com/api/addseason`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify({
            
                id:event.target.id.value,
                number:event.target.number.value,
                thumbnail_url:event.target.thumbnail_url.value,

            
                
            })
            })
            .then(res=> res.json())
            .then((result)=>
            {if (result)
                alert('Added successfully');
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
            Add Season
            </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div className="container">
                     <Row >
                         <Col sm={6}>
                             <Form onSubmit={this.handelSubmit}>

                                 
                             <Form.Group controlId="id">
                                     <Form.Label>Season Id</Form.Label>
                                     <Form.Control type="text" name="id"  placeholder="Id" required />
                                     </Form.Group>

                                     <Form.Group controlId="number">
                                     <Form.Label>Number</Form.Label>
                                     <Form.Control type="text" name="number"  placeholder="number"
                                      required />
                                     </Form.Group>


                                    <Form.Group controlId="thumbnail_url">
                                    <Form.Label>Thumbnail url</Form.Label>
                                    <Form.Control type="text" name="thumbnail_url"  placeholder="thumbnail_url" required
                                     />
                                    </Form.Group>



                                 <Form.Group>
                                     <Button  variant="primary" type="submit"  >
                                         Add 

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

export default AddSeason;