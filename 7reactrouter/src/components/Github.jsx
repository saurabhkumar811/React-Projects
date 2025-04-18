import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

// with loader method 
const data = useLoaderData()

//without loader method 
    //   const [data, setData] = useState(null);

//   useEffect(() => {
//    fetch("https://api.github.com/users/saurabh-kumar8")
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   }, []);

  return (
    <div>
      <h1>Github Followers: {data?.followers}</h1>
      <img src={data?.avatar_url} alt="avatar" />
    </div>
  );
}

export default Github

export const LoadGithub = async()=>{
 const res = await fetch("https://api.github.com/users/saurabh-kumar8")
  return res.json()
}

