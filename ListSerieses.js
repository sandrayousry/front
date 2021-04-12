import React from 'react';

import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddSeires from './AddSeires';
import EditSeries from './EditSeries';


class ListSerieses extends React.Component{
    constructor(props){
        super(props);
        this.state= {sireses:[], addSireseShow:false,editSireseShow : false ,key:0}
    }
    // when all comps render
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){

    fetch(`http://hazemmansour.pythonanywhere.com/api/listseries`,
    {method:"GET",
    ContentType:"application/json"})
    .then(response => response.json())
    .then(data => {
        this.setState({sireses:data});
       // console.log(data)
       // console.log(this.state.sireses)
           
        }
        )
}

   
    // refresh table on changes
    componentDidUpdate(){
        this.refreshList();
    }


      Delete(pk)
    {
        if(window.confirm('Are you Sure?')){
            fetch(`http://hazemmansour.pythonanywhere.com/api/deleteseries/${pk}`,{
               
               method:'DELETE',
            headers:{
               'Accept':'application/json',
               'content-Type':'application/json'
                  
               },
               
       }).then(res => res.json())
           .then(res =>{
               this.setState({data:res.data})
           })
        }   
    }

    render(){
        const {sireses, description, release_date, title, rate,
               language, thumbnail_url, categories} =this.state;
        let addSireseClose=() =>this.setState({addSireseShow:false});
        let editSireseClose=() =>this.setState({editSireseShow:false});
        return(
            <div>
          <Table className="mt-4" striped="true" bordered="true" hover="true" size="sm" responsive="md" variant="dark">
              <thead>
                  <tr>
                  <th>Sirese Id</th>
                  <th>Description</th>
                  <th>Release date</th>
                  <th>Title</th>
                  <th>Rate</th>
                  <th>Language</th>
                  <th>Thumbil url</th>
                  <th>Catgories</th>
                  <th>Option</th>
                  </tr>
              </thead>
              <tbody>
                  {sireses.map(sirese =>
                  <tr Key ={sirese.id}>  
                  <td>{sirese.id}</td>
                  <td>{sirese.description}</td>
                  <td>{sirese.release_date}</td>
                  <td>{sirese.title}</td>
                  <td>{sirese.rate}</td>
                  <td>{sirese.language}</td>
                  <td>{sirese.thumbnail_url}</td>
                  <td>{sirese.categories}</td>
                  
                      <ButtonToolbar>
                      <td>
                          <Button className="mr-2" variant="info"
                          onClick={()=> this.setState({editSireseShow:true, key:sirese.id})}
                          style = {{width :"75px",borderRadius:"30px"}}>
                             Edit
                          </Button>
                          </td>
                          </ButtonToolbar>
                          <ButtonToolbar>
                      <td>
                          <Button className="mr-2"
                              onClick={()=>this.Delete(sirese.id)} variant="danger" 
                              style = {{width :"75px",borderRadius:"30px"}}>
                                  Delete
                          </Button>

                          <EditSeries show = {this.state.editSireseShow}  mykey = {this.state.key}
                          onHide={editSireseClose}/>
                           </td>
                      </ButtonToolbar>
                 
                  </tr>
                    )}
              </tbody>
          </Table>

<ButtonToolbar>
    <Button
        variant="primary"
        onClick={() => this.setState({addSireseShow:true})}
       >Add Sirese</Button>
       <AddSeires show={this.state.addSireseShow}
                  onHide={addSireseClose}
                  key = {this.state.key}
                  description = {description}
                  release_date = {release_date}
                  title = {title}
                  rate = {rate}
                  language = {language}
                  thumbnail_url = {thumbnail_url}
                  categories = {categories}                 
                  />
    

</ButtonToolbar>          

    
</div>



    
        )
    }
}

export default ListSerieses;