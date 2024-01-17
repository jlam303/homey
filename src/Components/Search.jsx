import React from 'react'
import { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
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
    <div className='searchy'>
        <input type="text" name='search' id='search' value={search} onChange={(e)=>{setSearch(e.target.value)}} onKeyUp={(e)=>handleEnter(e)}></input>
        <FaMagnifyingGlass />
    </div>
  )
}

export default Search