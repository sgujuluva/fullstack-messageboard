import React, {useEffect, useState} from 'react';
import axios from "axios"

function Users() {

  const [data,setData] = useState("");

  const getUsers = async() => {
    const response = await axios.get("http://localhost:3001/user/getAllUsers", {
      withCredentials:true
    })
    if(response.data){
      setData(response.data)
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {data && data.map(user => (
        <ul key = {user._id}>
          <p>{user.firstname}</p>
          <img src={user.avatar} alt ="avatar"/>
        </ul>
      ))}
    </div>
  )
}

export default Users