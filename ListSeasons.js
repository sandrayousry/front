import React from 'react';

import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddSeason from './AddSeason';
import EditSeasone from './EditSeasone';


class ListSeasons extends React.Component{
    constructor(props){
        super(props);
        this.state= {seasons:[], addSeasonShow:false,editSeasonShow : false, key:0}
    }
    // when all comps render
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){
        // this.setState({
        //     // movies:[{"MovieId":1,"Description":"dessss","Releasedate":"7-7-2007","Title":"aaa","Rate":4.5,
        //     // "Language":"Arabic","Thumbilurl":"ddfdt","Catgory":"dddd","Videourl":"kyuyystrsf"},
        //     // ]
        // })
    
         fetch(`http://hazemmansour.pythonanywhere.com/api/seasonlist`,
         {method:"GET",
         ContentType:"application/json"})
         .then(response => response.json())
         .then(data => {
             this.setState({seasons:data});
            // console.log(data)
            // console.log(this.state.movies)
                
             }
             )
    }
    
     componentDidUpdate(){
         this.refreshList();
     }

       Delete(pk)
     {
         if(window.confirm('Are you Sure?')){
             fetch(`http://hazemmansour.pythonanywhere.com/api/deleteseason/${pk}`,{
                
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
        const {seasons, number, thumbnail_url, series} =this.state;
        let addSeasonClose=() =>this.setState({addSeasonShow:false});
        let editSeasonClose=() =>this.setState({editSeasonShow:false});
        return(
            <div>
          <Table className="mt-4" striped="true" bordered="true" hover="true" size="sm" responsive="md" variant="dark">
              <thead>
                  <tr>
                  <th>Season Id</th>
                  <th>Number</th>
                  <th>Thumbil url</th>
                  <th>Series</th>
                  <th>Option</th>
                  </tr>
              </thead>
              <tbody>
                  {seasons.map(season =>
                  <tr key ={season.id}>  
                  <td>{season.id}</td>
                  <td>{season.number}</td>
                  <td>{season.thumbnail_url}</td>
                  <td>{season.series}</td>
                  <ButtonToolbar>
                  <td>
                     
                          <Button className="mr-1" variant="info"
                          onClick={()=> this.setState({editSeasonShow:true, key:season.id})}
                           style = {{width :"75px",borderRadius:"30px"}}>
                             Edit
                          </Button>
                          </td>
                  </ButtonToolbar>
                  <ButtonToolbar>
                  <td>
                          <Button className="mr-1"
                              onClick={()=>this.Delete(season.id)} variant="danger" 
                               style = {{width :"75px" ,borderRadius:"30px"}}>
                                  Delete
                          </Button>

                          <EditSeasone show = {this.state.editSeasonShow} mykey = {this.state.key}
                          onHide={editSeasonClose}/>
                     
                  </td>
                  </ButtonToolbar>
                  </tr>
                    )}
              </tbody>
          </Table>

<ButtonToolbar>
    <Button
        variant="primary"
        onClick={() => this.setState({addSeasonShow:true})}
       >Add season</Button>
       <AddSeason show={this.state.addSeasonShow}
                  onHide={addSeasonClose}
                  key = {this.state.key}
                 number = {number}
                 thumbnail_url = {thumbnail_url}
                 series = {series}
                  />
    

</ButtonToolbar>          

    
</div>



    
        )
    }
}

export default ListSeasons;