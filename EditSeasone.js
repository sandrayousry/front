import React from 'react';
import {Modal, Button, Row, Col, Form} from  'react-bootstrap';

class EditSeasone extends React.Component{
    constructor(props){
        super(props);
        this.handelSudmit =this.handelSubmit.bind(this)
    }
    // componentDidUpdate(){
    //     this.refreshList();
    // }
   handelSubmit(event){
        event.preventDefault();
        var body = {    
                number: event.target.number.value,
                thumbnail_url:event.target.thumbnail_url.value,     
        }
        var myid = event.target.id.value
        console.log("myid",myid)
            fetch(`http://hazemmansour.pythonanywhere.com/api/updateseason/${myid}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify(body)
            })
            .then(res=> res.json())
            .then((result)=>
            {if (result)
                alert('Updated successfully');
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
            // var prop =  {...this.props}
            // {console.log(prop)}
             size="lg"
            aria-labelledby="contained-model-title-vcenter" centered
            >
            <Modal.Header closeButton>
            <Modal.Title id="contained-model-title-vcenter">
            Edit Seasone
            </Modal.Title>
             </Modal.Header>
             <Modal.Body>
                 <div className="container">
                     <Row >
                         <Col sm={6}>
                             <Form onSubmit={this.handelSubmit}>

                                     <Form.Group controlId="id">
                                     <Form.Label>Seasone Id</Form.Label>
                                     <Form.Control type="text" name="id"  placeholder="id" required
                                     disabled
                                     value={this.props.mykey}/>
                                   
                                     </Form.Group>

                                     <Form.Group controlId="number">
                                     <Form.Label>Number</Form.Label>
                                     <Form.Control type="text" name="number" placeholder="number"
                                     required value={this.props.number}/>
                                     </Form.Group>


                                    <Form.Group controlId="thumbnail_url">
                                    <Form.Label>Thumbil url</Form.Label>
                                    <Form.Control type="text" name="thumbnail_url"  placeholder="thumbnail_url" 
                                    required value={this.props.thumbnail_url}/>
                                    </Form.Group>


                                 <Form.Group>
                                     <Button variant="primary" type="submit">
                                         Update Season

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


export default EditSeasone;