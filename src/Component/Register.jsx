import sharp from '../assets/sharp.png';
import log from '../assets/log1.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [department, setDepartment] = useState("");
    const[role,setRole]=useState("");
    const loadingBarRef = useRef(null);

    const onRegister = () => {
        if (firstName === "" || lastName === "" || email === "" || password === "" || gender === "" || department === "") {
            toast.error('Please fill all the fields',{position:'top-left'})
        } else {
            if(loadingBarRef.current) loadingBarRef.current.continuousStart();
            console.log("First Name: ", firstName);
            console.log("Last Name: ", lastName);
            console.log("Email: ", email);
            console.log("Password: ", password);
            console.log("gender:", gender);
            console.log("department:", department);
            console.log("role:", role);
            toast.success('Registered Successfully',{position:'top-left'})
            setTimeout(() => {
                if (loadingBarRef.current) loadingBarRef.current.complete();
            }, 1000); 
        }
    }
    return (
        <>
        <LoadingBar color="#f11946" height={3} shadow="true" ref={loadingBarRef}  />
            <div style={{ width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#d4d6ea" }}>
                <div style={{ display: "flex", width: "70%", maxWidth: "1000px", minHeight: "600px", paddingBlock: "73px" }}>
                    <div style={{ width: "50%" }}>
                        <img src={log} alt="" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div style={{ width: "50%", background: "white", display: "grid", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "80%", margin: "auto", padding: "30px" }}>
                            <img src={sharp} alt="" style={{ width: '50px', height: "50px" }} />
                            <h2 style={{ marginBottom: "35px" }}>Register Here!</h2>

                            <p style={{ marginBlock: "6px" }}>First Name*</p>
                            <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter the first name" style={{ width: "100%", border: "1px solid violet", borderRadius: "4px", padding: "8px" }} />

                            <p style={{ marginBlock: "6px" }}>Last Name*</p>
                            <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter the last name" style={{ width: "100%", border: "1px solid violet", borderRadius: "4px", padding: "8px" }} />

                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
                                <div>
                                    <label htmlFor="gender">Select Gender</label>
                                    <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} style={{ marginTop: "2px", width: "100%", border: "1px solid violet", borderRadius: "4px", padding: "8px" }}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: "14px" }}>
                                    <label htmlFor="department">Select Department</label>
                                    <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} style={{ marginTop: "2px", width: "100%", border: "1px solid violet", borderRadius: "4px", padding: "8px" }}>
                                        <option value="">Select Department</option>
                                        <option value="ADMIN">ADMIN </option>
                                        <option value="MANAGMENT">MANAGMENT </option>
                                        <option value="DEVELOPEMENT">DEVELOPEMENT </option>
                                        <option value="TESTER">TESTER </option>
                                        <option value="SECURITY">SECURITY </option>
                                    </select>
                                </div>
                              
                            </div>
                            <div style={{marginTop:"4px"}} >
                                    <label htmlFor="role">Select role</label>
                                    <select name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)} style={{ marginTop: "2px", width: "100%", border: "1px solid violet", borderRadius: "4px", padding: "8px" }}>
                                        <option value="">Select role</option>
                                        <option value="ADMIN">ADMIN </option>
                                        <option value="MANAGER">MANAGER </option>
                                        <option value="EMPLOYEE">EMPLOYEE </option>
                                       
                                    </select>
                                </div>

                            <p style={{ marginBlock: "6px" }}>Email*</p>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter the email" style={{ width: "100%", border: "1px solid violet", borderRadius: "4px", padding: "8px" }} />

                            <p style={{ marginBlock: "6px" }}>Password*</p>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter the password" style={{ width: "100%", border: "1px solid violet", borderRadius: "4px", padding: "8px" }} />

                            <button onClick={onRegister} style={{ width: "100%", background: "violet", padding: "8px", border: "none", borderRadius: "3px", marginTop: "24px", color: "white" }}>Register</button>

                            <h6 style={{ marginBlock: "4px" ,}}>Have a account ? <span style={{ color: "violet" }}><Link to={`/login`}> login here</Link></span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
