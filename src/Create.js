import {useState} from "react";
import { useHistory } from "react-router-dom";              //hook for Programmatic Redirects
const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('yoshi');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();                     
        const blog = {title, body, author}; 
        setIsPending(true);
        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},              
            body: JSON.stringify(blog)              
        }).then(()=> {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);             //works like browser back button, just going back one step back like instead of facebook.com I type localhost:3000/create and I submit a blog, i'll be redirected to facebook
            history.push('/');              //mentioning the route to go upon submission, home in this case
        })    
    }
    return (  
       <div className="create">
        <h2>Add a new blog!</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
                type ="text"
                required
                value= {title}
                onChange = {(e)=>setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
                required
                value ={body}
                onChange = {(e)=>setBody(e.target.value)}
            >
            </textarea>
            <label>Blog author:</label>
            <select
                value ={author}
                onChange={(e)=>setAuthor(e.target.value)}
            >
                <option value ="mario">mario</option>
                <option value ="yoshi">yoshi</option>
            </select>
            {!isPending && <button>Add blog</button>}
            {isPending && <button disabled>Adding blog...hold your horses</button>}         {/*changing the button state upon sending a POST request*/}
        </form>
       </div> 
    );
}
 
export default Create;