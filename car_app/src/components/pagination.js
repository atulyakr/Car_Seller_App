import React, { useState } from "react";

const Pagination=({totalposts,postsperpage,setcurrentpage})=>
{
    console.log("hello ji");
    let pagenum=[];

    for(let i=1;Math.ceil(totalposts/postsperpage);i++)
    {
        pagenum.push(i);
    }
    
    return(
        <div className="pagination">
            {pagenum.map((page,index)=>{
                    return <button key={index}
                    onClick={()=>setcurrentpage(page)}>{page}</button>
                })
            }   
        </div>
    )
}
export default Pagination
