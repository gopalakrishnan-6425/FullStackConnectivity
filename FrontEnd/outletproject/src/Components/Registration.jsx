import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import "./Registration.css";

//http://localhost:8086/auth/register
const Registration = () => {
    let useNavi = useNavigate()
    const [formdata,setFormdata] = useState({
        username:"",
        age:"",
        gender:"",
        coursename:"",
        email:"",
        password:""   
     })
     
     function handleChange(e){
        let{name,value} = e.target 
        console.log(name+":"+value)
        setFormdata({...formdata,[name]:value})
        console.log({...formdata,[name]:value})
     }
     async function handleSubmit(e){
        e.preventDefault();
        try{
            let response = await fetch("http://localhost:8086/auth/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formdata)
            })
            let data=await response.json()
            console.log(data)
            alert("Registered Successfully..!")
            useNavi("/") 
        }
        catch(error){
          console.log(error)
        }
     }

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="username" value={formdata.username} onChange={(e)=>handleChange(e)}/>
        <br />

        <label htmlFor="age">Age: </label>
        <input type="number" id="age" name="age" value={formdata.age} onChange={(e)=>handleChange(e)}/>
        <br />

        <label htmlFor="name">Course Name: </label>
        <input type="text" id="coursename" name="coursename" value={formdata.coursename} onChange={(e)=>handleChange(e)}/>
        <br />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" value={formdata.email} onChange={(e)=>handleChange(e)}/>
        <br />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" value={formdata.password} onChange={(e)=>handleChange(e)}/>
        <br />

        <label>Gender: </label>
        <input type="radio" id="male" name="gender" value="male" checked={formdata.gender==='male'} onChange={(e)=>handleChange(e)}/>
        <label htmlFor="male">Male</label>

        <input type="radio" id="female" name="gender" value="female" checked={formdata.gender==='female'} onChange={(e)=>handleChange(e)} />
        <label htmlFor="female">Female</label>
        <br />

        <button type="submit" >Register</button>
      </form>
    </>
  );
};

export default Registration;
