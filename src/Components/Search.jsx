import React from 'react'
import { useState } from 'react'
const Search = () => {
    const [search,setSearch] = useState('')
    const handleClick = ()=>{
        window.open("https://www.google.com/search?q=" +search,"_blank")
        setSearch("")
    }
    const handleEnter=(e)=>{
        if(e.key ==="Enter"){
            handleClick()
        }
    }
  return (
    <div>
        <label htmlFor="search">Search Bar:</label>
        <input type="text" name='search' id='search' value={search} onChange={(e)=>{setSearch(e.target.value)}} onKeyUp={(e)=>handleEnter(e)}></input>
        <button onClick={()=>{handleClick()}}>Search</button>
    </div>
  )
}

export default Search