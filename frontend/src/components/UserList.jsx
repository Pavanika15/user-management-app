import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

function UserList() {
      let [users, setUsers] = useState([]);
  let navigate=useNavigate()

  useEffect(() => {
    async function getUsers() {
      try {
        let res = await fetch("http://localhost:1526/user-api/users", {
          method: "GET",
        });

        if (res.status === 200) {
          //extract json data
          let resObj = await res.json();
          //update the state
          setUsers(resObj.payload);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (err) {
        //set error
      }
    }

    getUsers();
  }, []);


  //go to user
  const gotoUser=(userObj)=>{
    navigate("/user",{state:{user:userObj}})
  }

  return (
    <div>
      <h1 className="text-3xl text-gray-600">List of Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {users?.map((userObj) => (
          <div key={userObj.email} className="p-10 shadow-2xl cursor-pointer" onClick={()=>gotoUser(userObj)}>
            <p className="text-2xl">{userObj.name}</p>
            <p className=" text-sm break-all">{userObj.email}</p>
            <p className='text-2xl'>{new Date(userObj.dateOfBirth).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );


}

export default UserList;