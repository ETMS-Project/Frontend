import sharp from '../assets/sharp.png';
import log from '../assets/log1.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Login = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(""); 
    const loadingBarRef = useRef(null); 

    const onLogin = () => {
        

        try {
            if (email === "" || password === "") {
                toast.error('Please fill all the fields', { position: 'top-left' });
            } else {
                if (loadingBarRef.current) loadingBarRef.current.continuousStart(); 
                console.log("Email:", email);
                console.log("Password:", password);
                console.log("Login Successful");

                toast.success('Logged in', { position: 'top-left' });

                setTimeout(() => {
                    if (loadingBarRef.current) loadingBarRef.current.complete();
                }, 1000); 
            }
        } catch (error) {
            toast.error('Error in login', { position: 'top-left' });
        }
    };

    return (
        <>
           <LoadingBar color="#f11946" height={3} shadow="true" ref={loadingBarRef}  />
            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#d4d6ea" }}>
                <div style={{ display: "flex", width: "70%", maxWidth: "1000px", height: "500px" }}>
                    <div style={{ width: "50%", background: "white" ,display:"grid",alignItems:"center",justifyContent:"center"}}>
                        <div style={{  }}>
                            <img src={sharp} alt="" style={{ width: '50px', height: "50px" }} />
                            <h2 style={{marginBottom:"30px"}}>Welcome Back!</h2>

                            <p style={{marginBlock:"6px"}}>Email*</p>
                            <input type="email" placeholder="Enter the email" onChange={(e)=>setEmail(e.target.value)} style={{width:"100%",border:"1px solid violet",borderRadius:"4px",padding:"8px",marginBottom:"12px"}} />

                            <p style={{marginBlock:"6px"}}>Password*</p>
                            <input type="password" placeholder="Enter the password" onChange={(e)=>setPassword(e.target.value)} style={{width:"100%",border:"1px solid violet",borderRadius:"4px",padding:"8px"}} /><br/>
                        

                            <button  onClick={onLogin} style={{width:"100%" ,background:"violet",padding:"8px",border:"none",borderRadius:"3px",marginTop:"24px", color:"white" ,marginBottom:"4px"}}>Login</button>

                            <h6>Don't have an account? <span style={{color:"violet"}}><Link to={`/register`}>Register here</Link> </span></h6>
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <img src={log} alt="" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
