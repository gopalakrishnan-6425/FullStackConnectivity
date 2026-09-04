import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Spinner from 'react-bootstrap/Spinner';

const About = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8086/auvth/get");
        setStudents(response.data);
        console.log(response)
      } catch (error) {
        console.log(error)
        if(error.code=="ERR_NETWORK"){
            setError("Backend is not running..!")
        }
        else{
            setError("Something Went Wrong..!");
        }
        
      } finally {
        setLoading(false)
      }
      
    };
    getStudents();
  }, []);
  if (loading) {
    return  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>;
  }
  if(error){
    return <h1>{error}</h1>
  }
  
  if (students.length == 0) {
    return (
      <>
        <h1>Students Data</h1>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <p>Student Not Found..!</p>
          </tbody>
        </Table>
      </>
    );
  }
  return (
    <>
      <h1>Students Data</h1>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((v, i) => {
            return (
              <tr key={v.userid}>
                <td>{v.userid}</td>
                <td>{v.username}</td>
                <td>{v.age}</td>
                <td>{v.email}</td>
                <td>{v.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default About;
