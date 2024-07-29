import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom'; 
import Logo from '../assests/logo.png';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function Register() {
    const[values,setValues]=useState({
        username:"",
        password:"",
        confirmPassword:"",

    })

    const toastOptions={
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        theme:"dark",
    }
    const handleSubmit = (event) => {
        event.preventDefault();
       handleValidation();
    };

    const handleChange = (event) => {
        setValues({
            ...setValues,[event.target.name]:event.target.value
        });
    };

    const handleValidation=()=>{
            const{password,confirmPassword,username,email}=values;
            if(password!==confirmPassword){
                toast.error("password and confirm password are different !",toastOptions);

            }
    };

    return (
        <>
            <FromContainer>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="brand">
                        <img src={Logo} alt="Logo" />
                        <h1>Formel</h1>
                    </div>
                    <input type='text' 
                        placeholder='Username' 
                        name='username' 
                        onChange={e => handleChange(e)} />
                    
                    <input type='email' 
                        placeholder='Email' 
                        name='email' 
                        onChange={e => handleChange(e)} />
                    
                    <input type='password' 
                        placeholder='Password' 
                        name='password' 
                        onChange={e => handleChange(e)} />
                    
                    <input type='password' 
                        placeholder='Confirm Password' 
                        name='confirmPassword' 
                        onChange={e => handleChange(e)} />
                    
                    <button type="submit">Create User</button>
                    <span>
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                </form>
            </FromContainer>
            <ToastContainer/>

           
        </>
    );
}

const FromContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    
    img {
      height: 5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 1); 
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 3rem;
  }

  input {
    background-color: transparent; 
    padding: 1rem;
    border: 0.1rem solid #ECCEA0; 
    border-radius: 0.5rem; 
    color: white;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      border-color: #E68369; 
      outline: none;
    }
  }

  button {
    padding: 1rem;
    border: none;
    background-color: #1f3c88; 
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #162a6a; 
    }
  }

  span {
    color: white;
    a {
      color: #E68369;
      text-decoration: none;
      transition: color 0.3s ease;


      &:hover {
        color: #ff9e80; 
      }
    }
  }
`;




export default Register;
