import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router'
function AddUser() {
    const{register,handleSubmit,formState:{errors}}=useForm()
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    let navigate = useNavigate();


    //form submit to submit the form
    const submitform=async(obj)=>{
      setLoading(true);
      // console.log(obj)
try {
      let res = await fetch("https://user-management-backend-xn7y.onrender.com/user-api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (res.status === 201) {
        //user created it shd navigate to users list
        navigate("/userslist");
      } else {
        console.log(res)
        throw new Error("error occurred");
      }
    } catch (err) {
      console.log(err)
      setError(err);
    } finally {
      setLoading(false);
    }
  };
if (loading) {
    return <p className="text-center text-orange-400 text-3xl"> Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl"> {error.message}</p>;
  }


 

  return (
    <div className='min-h-screen  from-indigo-100 to-blue-200 flex justify-center items-center'>
      <div className='bg-white p-20 shadow-md w-80'>
        <h1  className='font-semibold text-2xl'>Add User</h1>
        <form onSubmit={handleSubmit(submitform)}>
          <div className='mb-3 text-center'>
             <input type="text"{...register("name",{required:true})} placeholder=" enter name" id='' className='border-2 p-2 mt-2 text-center' />
             {
              errors.name?.type==="required" && <p className='text-red-600'>name is required</p>
             }
          </div>
          <div>
             <input type='email' {...register("email",{required:true})} placeholder='enter email' id='' className='border-2 p-2 mt-2 text-center' />
             {
              errors.email?.type==="required" && <p className='text-red-600'>email is required</p>
             }
          </div>
             <div>
              <input type='date' {...register("dateOfBirth",{required:true})} placeholder='dob' id='' className='border-2 p-2 mt-3' />
              {
                errors.dateOfBirth?.type==="required" && <p className='text-red-600'>dob is required</p>
              }
             </div>
             <div className='text-shadow-white'>
              <button type="submit" className="bg-blue-500 rounded-lg p-3 text-white mt-3">
              Add User
              </button>
              </div>
        </form>
     
    </div>
    </div>
  )
}

export default AddUser;