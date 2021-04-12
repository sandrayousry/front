import React from 'react';

import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddEpisodes from './AddEpisodes';
import EditEpisodes from './EditEpisodes';


class ListEpisodes extends React.Component{
    constructor(props){
        super(props);
        this.state= {episodes:[], addEpisodeShow:false,editEpisodeShow : false, key:0}
    }
    // when all comps render
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){  
         fetch(`http://hazemmansour.pythonanywhere.com/api/episodelist`,
         {method:"GET",
         ContentType:"application/json"})
         .then(response => response.json())
         .then(data => {
             this.setState({episodes:data});
             
             }
             )
    }
    
     componentDidUpdate(){
         this.refreshList();
     }

       Delete(pk)
     {
         if(window.confirm('Are you Sure?')){
             fetch(`http://hazemmansour.pythonanywhere.com/api/deleteepisode/${pk}`,{
                
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
        const {episodes, number, thumbnail_url, video_url, seasons} =this.state;
        let addEpisodeClose=() =>this.setState({addEpisodeShow:false});
        let editEpisodeClose=() =>this.setState({editEpisodeShow:false});
        return(
            <div>
          <Table className="mt-4" striped bordered  hover  size="sm" responsive="md" variant="dark">
              <thead>
                  <tr>
                  <th>MovieId</th>
                  <th>Number</th>
                  <th>Thumbnail url</th>
                  <th>Video url</th>
                  <th>Seasons</th>
                  <th>Option</th>
                  </tr>
              </thead>
              <tbody>
                  {episodes.map(episode =>
                  <tr key ={episode.id}>  
                  <td>{episode.id}</td>
                  <td>{episode.number}</td>
                  <td>{episode.thumbnail_url}</td>
                  <td>{episode.video_url}</td>
                  <td>{episode.seasons}</td>
                  <ButtonToolbar>
                  <td>
                     
                          <Button className="mr-1" variant="info"
                          onClick={()=> this.setState({editEpisodeShow:true, key:episode.id})}
                           style = {{width :"75px",borderRadius:"30px"}}>
                             Edit
                          </Button>
                          </td>
                  </ButtonToolbar>
                  <ButtonToolbar>
                  <td>

                          <Button className="mr-1"
                              onClick={()=>this.Delete(episode.id)} variant="danger" 
                               style = {{width :"75px" ,borderRadius:"30px"}}>
                                  Delete
                          </Button>

                          <EditEpisodes show = {this.state.editEpisodeShow} mykey = {this.state.key}
                          onHide={editEpisodeClose}/>
                     
                  </td>
                  </ButtonToolbar>
                  </tr>
                    )}
              </tbody>
          </Table>

<ButtonToolbar>
    <Button
        variant="primary"
        onClick={() => this.setState({addEpisodeShow:true})}
       >Add Episode</Button>
       <AddEpisodes show={this.state.addEpisodeShow}
                  onHide={addEpisodeClose}
                  key = {this.state.key}
                  number = {number}
                  thumbnail_url = {thumbnail_url}
                  video_url = {video_url}
                  seasons = {seasons}
                  />
</ButtonToolbar>              
</div>
        )
    }
}

export default ListEpisodes;