import React from "react"

export default function Navbar(){
    return(
        <nav>
            <div><input className="search-box" type="text" placeholder="Search"></input></div>
            <div id='relev'>Relevance</div>
            <div id='allbra'>All brands</div>
        </nav>
    )
}
