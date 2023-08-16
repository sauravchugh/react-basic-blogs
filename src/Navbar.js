//with anchor (a) tags, each time user visits the link, it sends a fresh request to the server, which takes time
//to handle this at browser side only to save time we need to use Link tags
//upon inspecting the webpage it would still show anchor tags
//Link tag has in-built functionality to check the link and match it with corresponding Route path
import {Link} from "react-router-dom";
const  Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The First Blog</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;