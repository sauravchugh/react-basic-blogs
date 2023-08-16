import {Link} from 'react-router-dom';
const BlogList = ({blogs, title}) => {
   //now we need to link each blog preview to it's corresponding BlogDetails page with the help of Link tag and id property
    return ( 
        <div className="blog-list">         
              <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id} >                           {/*key needs to be unique for React Dom to identify them uniquely*/}    
                {/*let's the route is localhost:3000/blogs/xyz where xyz is id associated to each blog and we have access to that*/}
                <Link to = {`/blogs/${blog.id}`}>               {/*link needs to be dynamic since each blog has different id */}
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </Link>            
                
      </div>
      ))

      }
        </div>
     );
}
 
export default BlogList;