import { useLoaderData } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Github() {
  // const [followers, setFollowers] = useState(0);
  let followers = useLoaderData()
  console.log(followers)
  followers = followers.followers
  // useEffect(() => {
  //   fetch("https://api.github.com/users/samarpro")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setFollowers(data.followers);
  //     });
  // }, []);
  return (
    <>
      <h1>Github Followers: {followers}</h1>
    </>
  );
}

export default Github;

export async function LoaderFunction(){
  const resp = await fetch('https://api.github.com/users/samarpro')
  return resp.json()
}