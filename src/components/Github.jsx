import React, { useEffect, useState } from 'react'

function Github() {
  const [followers,setFollowers] = useState(0)

  useEffect(()=>{
    fetch('https://api.github.com/users/samarpro')
    .then((data)=>data.json())
    .then((data)=>{
      setFollowers(data.followers)})
      
    console.log("Followers: ",followers)
    },[followers])


  return(
    <>
    <h1>Github Followers: {followers}</h1>
    </>)
  
}

export default Github