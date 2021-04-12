
import React from 'react';

import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

class ListUsers extends React.Component{
    constructor(props){
        super(props);
        this.state= {users:[]}
    }
    // when all comps render
    componentDidMount(){
        this.refreshList()
    }
    refreshList(){

        fetch('http://hazemmansour.pythonanywhere.com/api/users',
        {method:"GET",
        ContentType:"application/json"})
        .then(response => response.json())
        .then(data => {
            this.setState({users:data});
    
               
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
             fetch(`http://hazemmansour.pythonanywhere.com/api/deleteuser/${pk}`,{
                
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
        const {users} =this.state;
        return(
            <div>
          <Table className="mt-4" striped="true" bordered="true" hover="true" size="sm" responsive="md" variant="dark">
              <thead>
                  <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>User type</th>
                  <th>CCV</th>
                  <th>Card num</th>
                  <th>Exp date</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>User</th>
                  <th>Option</th>
                  </tr>
              </thead>
              <tbody>
                  {users.map(user =>
                  <tr Key ={user.id}>  
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.user_type}</td>
                  <td>{user.ccv}</td>
                  <td>{user.card_num}</td>
                  <td>{user.exp_date}</td>
                  <td>{user.start_date}</td>
                  <td>{user.end_date}</td>
                  <td>{user.user}</td>
                  
                  <td>
                      <ButtonToolbar>
                          <Button className="mr-2"
                              onClick={()=>this.Delete(user.id)} variant="danger"
                              style = {{width :"110px",borderRadius:"30px"}} >
                                  Delete User
                          </Button>

                      </ButtonToolbar>
                  </td>
                  </tr>
                    )}
              </tbody>
          </Table>    
</div>    
        )
    }
}

export default ListUsers;