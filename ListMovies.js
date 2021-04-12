import React from 'react';

import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddMovie from './AddMovie';
import EditMovies from './EditMovies';


class ListMovies extends React.Component{
    constructor(props){
        super(props);
        this.state= {movies:[], addMovieShow:false,editMovieShow : false, key:0}
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
    
         fetch('http://hazemmansour.pythonanywhere.com/api/listmovie',
         {method:"GET",
         ContentType:"application/json"})
         .then(response => response.json())
         .then(data => {
             this.setState({movies:data});
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
             fetch(`http://hazemmansour.pythonanywhere.com/api/deletemovie/${pk}`,{
                
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
        const {movies, description, release_date, title, rate,
            language, thumbnail_url, categories,video_url, duration} =this.state;
        let addMovieClose=() =>this.setState({addMovieShow:false});
        let editMovieClose=() =>this.setState({editMovieShow:false});
        return(
            <div>
          <Table className="mt-4" striped  bordered  hover  size="sm" responsive="md" variant="dark">
              <thead>
                  <tr>
                  <th>MovieId</th>
                  <th>Description</th>
                  <th>Release date</th>
                  <th>Title</th>
                  <th>Rate</th>
                  <th>Language</th>
                  <th>Thumbil url</th>
                  <th>Catgory</th>
                  <th>Video url</th>
                  <th>Duration</th>
                  <th>Option</th>
                  </tr>
              </thead>
              <tbody>
                  {movies.map(movie =>
                  <tr key ={movie.id}>  
                  <td>{movie.id}</td>
                  <td>{movie.description}</td>
                  <td>{movie.release_date}</td>
                  <td>{movie.title}</td>
                  <td>{movie.rate}</td>
                  <td>{movie.language}</td>
                  <td>{movie.thumbnail_url}</td>
                  <td>{movie.categories}</td>
                  <td>{movie.video_url}</td>
                  <td>{movie.duration}</td>
                  <ButtonToolbar>
                  <td>
                     
                          <Button className="mr-1" variant="info"
                          onClick={()=> this.setState({editMovieShow:true, key:movie.id})}
                           style = {{width :"75px",borderRadius:"30px"}}>
                             Edit
                          </Button>
                          </td>
                  </ButtonToolbar>
                  <ButtonToolbar>
                  <td>
                          <Button className="mr-1"
                              onClick={()=>this.Delete(movie.id)} variant="danger" 
                               style = {{width :"75px" ,borderRadius:"30px"}}>
                                  Delete
                          </Button>

                          <EditMovies show = {this.state.editMovieShow} mykey = {this.state.key}
                          onHide={editMovieClose}/>
                     
                  </td>
                  </ButtonToolbar>
                  </tr>
                    )}
              </tbody>
          </Table>

<ButtonToolbar>
    <Button
        variant="primary"
        onClick={() => this.setState({addMovieShow:true})}
       >Add Movie</Button>
       <AddMovie show={this.state.addMovieShow}
                  onHide={addMovieClose}
                  key = {this.state.key}
                 description = {description}
                  release_date = {release_date}
                  title = {title}
                  rate = {rate}
                  language = {language}
                  thumbnail_url = {thumbnail_url}
                  categories = { categories}
                  video_url = {video_url}
                  duration = {duration}
                  />
    

</ButtonToolbar>          

    
</div>



    
        )
    }
}

export default ListMovies;