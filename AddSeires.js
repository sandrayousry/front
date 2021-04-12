import React from 'react';
import {Modal, Button, Row, Col, Form} from  'react-bootstrap';

class AddSeires extends React.Component{

    handelSubmit(event){
        event.preventDefault();
            fetch(`http://hazemmansour.pythonanywhere.com/api/addseries`,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify({
            
                id:event.target.id.value,
                description:event.target.description.value,
                release_date:event.target.release_date.value,
                title:event.target.title.value,
                rate:event.target.rate.value,
                language:event.target.language.value,
                thumbnail_url:event.target.thumbnail_url.value,
                categories: [
                    1
                ],
                
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
            Add Seires
            </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div className="container">
                     <Row >
                         <Col sm={6}>
                             <Form onSubmit={this.handelSubmit}>

                                 

                             <Form.Group controlId="id">
                                     <Form.Label>MovieId</Form.Label>
                                     <Form.Control type="text" name="id"  placeholder="Id" required />
                                     </Form.Group>

                                     <Form.Group controlId="description">
                                     <Form.Label>Description</Form.Label>
                                     <Form.Control type="text" name="description"  placeholder="Description"
                                      required />
                                     </Form.Group>

                                     <Form.Group controlId="release_date">
                                     <Form.Label>Release date</Form.Label>
                                     <Form.Control type="date" name="release_date"  placeholder="Release_date"
                                      required /> 
                                     </Form.Group>

                                 <Form.Group controlId="title">
                                     <Form.Label>Title</Form.Label>
                                     <Form.Control type="text" name="title"  placeholder="Movietitle" required
                                     />
                                     </Form.Group>

                                     <Form.Group controlId="rate">
                                     <Form.Label>Rate</Form.Label>
                                     <Form.Control type="text" name="rate"  placeholder="Rate" required
                                     />
                                     </Form.Group>

                                    <Form.Group controlId="language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="text" name="language"  placeholder="Language" required
                                    />
                                    </Form.Group>

                                    <Form.Group controlId="thumbnail_url">
                                    <Form.Label>Thumbnail url</Form.Label>
                                    <Form.Control type="text" name="thumbnail_url"  placeholder="thumbnail_url" required
                                     />
                                    </Form.Group>

                                    <Form.Group controlId="categories">
                                    <Form.Label>Catgory</Form.Label>
                                    <Form.Control type="text" name="categories"  placeholder="Catgory" required
                                    />
                                    </Form.Group>
                                    
                                 <Form.Group>
                                     <Button variant="primary" type="submit">
                                         Add Seires

                                     </Button>
                                 </Form.Group>


                                 {/* <Form.Group>
                                     <Button variant="primary" type="submit">
                                         view 

                                     </Button>
                                 </Form.Group> */}

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

export default AddSeires;