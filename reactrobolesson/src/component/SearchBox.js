import React from "react";
const SearchBox =(props)=> {
    return(
        <div className="pa2">
        <input 
        onChange={props.searchChange}
        className="pa3 ba b--green bg-lightet-blue tc"
        type='search'
         placeholder="search robots"/>
        </div>
    )
}
export default SearchBox;