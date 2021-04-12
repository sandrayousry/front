import React from 'react';
import{ BrowserRouter as Router,
Route,
Redirect,
Switch
} from 'react-router-dom';

import Home from './components/Home';
import Adduser from './components/Adduser';
import ListUsers from './components/ListUsers';
import ListMovies from './components/ListMovies';
import ListSerieses from './components/ListSerieses';
import ListSeasons from './components/ListSeasons.js';
import ListCategories from './components/ListCategories';
import ListEpisodes from './components/ListEpisodes';

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'




class App2 extends React.Component{
    render(){
        return(
            <div>
      
          
           <Router>
        <Navbar/>
                <main>
                   <Switch>
                     <Route path="/" exact >
                         <Home />
                   </Route>

                      <Route path="/Adduser" exact>
                          <Adduser/>
                      </Route>

                       <Route path="/ListUsers" exact>
                         <ListUsers/>
                     </Route> 

                     <Route path="/ListMovies" exact>
                         <ListMovies/>
                     </Route>
                     <Route path="/ListSerieses" exact>
                         <ListSerieses/>
                     </Route>
                     <Route path="/ListSeasons" exact>
                         <ListSeasons/>
                     </Route>
                     <Route path="/ListEpisodes" exact>
                         <ListEpisodes/>
                     </Route>
                     <Route path="/ListCategories" exact>
                         <ListCategories/>
                     </Route>

                   <Redirect to="/"/>
                  </Switch>
              </main>

           </Router>
           </div>


        )
    }
}


export default App2;