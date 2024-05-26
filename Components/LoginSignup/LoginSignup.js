import React, { useContext, useState } from "react";
import './LoginSignup.css';
import { images } from "../Assets/Assets";
import axios from "axios"
import { StoreContext } from "../../context/storeContext";


const LoginSignup =({setShowLogin})=>{

    const {url,setToken} =useContext(StoreContext)

    const [action, setAction]= useState ("Sign Up");
    const [data,setData] = useState ({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) =>{
        event.preventDefault();

        let newUrl =url;

        if(action==="Login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }
    return(
        <div className="loginSignup">
            <form onSubmit={onLogin} className="loginSignup-container"> 
                <div className="loginSignup-title">
                    <h2>{action}</h2>
                    <img onClick={()=>setShowLogin(false)} src={images.cross_icon} alt=""/>
                </div>
                <div className="loginSignup-inputs">
                    {action==="Login"?<></>:<input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Name" required/>}
                    <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email Id" required/>
                    <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required/>
                </div>
                <button type="submit">{action==="Sign Up"?"Create account":"Login"}</button>
                <div className="loginSignup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {action==="Login"
                ?<p>Create a new account? <span onClick={()=>setAction("Sign Up")}>Click here!</span></p>
                :<p>Already have an account? <span onClick={()=>setAction("Login")}>Login here</span></p>
                }
            </form>
        </div>
        )
}

export default LoginSignup;