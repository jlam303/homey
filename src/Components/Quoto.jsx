import {useState,useEffect} from 'react'
const url = 'https://type.fit/api/quotes';
function Quoto() {
  const [quote,setQuote]=useState("Quoto")
  const [auth,setAuth]=useState("?")
  useEffect(()=>{
    funky()
  },[])
  const funky = () =>{
    fetch(url).then((response)=>{
            if(response.status>=200&&response.status<=299){
                return response.json()
            }else{
                throw new Error(response.statusText)
            }
        }).then(e=>{
          let y = Math.floor(Math.random()*16)
          setQuote(e[y])
          
          setAuth(e[y].author.split(",")[0])
          if(y===15){
            setAuth("idk")  
          }
          console.log(y)
        }).catch(err=>console.log(err));
  }
  return (
    <div>
        <h1>"{quote.text}" - {auth}</h1>
        <button className="bean" onClick={()=>{funky()} }>Quote</button>
    </div>
  );
}

export default Quoto;
