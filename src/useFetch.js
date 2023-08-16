//error in console, can't perform a react update on an unmounted component
//unmounted component refers to Home.js, when we go on /Create.js by clicking new bLog from navbar, Create.js is mounted component and Home.js is unmounted
//Even though Home is unmounted UseFetch is running in background and updating states of Home.js {data,isPending,Error}
//we need to abort useFetch in background when we come to Create.js
import { useState,useEffect } from "react";
// import {AbortController} from "node-abort-controller";
const useFetch = (url)=> {
    const [data,setData] = useState(null); 
    const[isPending,setIsPending] = useState(true); 
    const[error,setError] = useState(null);                            
    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=>{
            //we need to associate each fetch with a variable
            fetch(url,{signal: abortCont.signal})           //it can help to stop fetching data , what about isPending, Error                                                               
                .then(res => { 
                if(!res.ok)         
                {
                    throw Error('could not fetch the data for that resource (eg :8000/blogss)');
                }    
                 console.log(res);                                                
                return res.json();
                })
                .then(data =>{
                setData(data);  
                setIsPending(false);
                setError(null);                                    
                })
                .catch(err => {  
                    //when we abort a fetch request, it throws an error, if it's an abort error we need to stop updating setError and setIsPending in home.js
                    if(err.name ==='AbortError')
                    {
                        console.log('fetch aborted');
                    } else {            //network error or any type of error we need to inform user
                        setError(err.message);
                        setIsPending(false); 
                    }                                   
                                           
                })        
        },1000)   
        //abort the fetch
        return ()=>abortCont.abort();
     },[url]);                  
     return {data, isPending,error};
}

export default useFetch;