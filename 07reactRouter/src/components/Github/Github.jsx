import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/padariya-tech')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData(); // optimized version
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Repositories :- {data.public_repos}
        <img className="" src={data.avatar_url} alt="" width={300} />
         </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/padariya-tech')
   return response.json();
}