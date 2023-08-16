import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
return (
    <Router>
      <div className="App">
      <Navbar />            
      <div className="content">
       <Switch>
        <Route exact path="/">            
          <Home />
        </Route>
        <Route path ="/create">
          <Create /> 
        </Route>
        <Route path ="/blogs/:id">          {/*variable path, id would be different for each blog therefore using colon, we can name it anything (id for now)*/}
          <BlogDetails /> 
        </Route>
        <Route path = "*">                  {/*all other paths, make sure to write this at end like an else to all ifs */}
          <NotFound />
        </Route>
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
