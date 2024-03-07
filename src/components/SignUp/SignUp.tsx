import React from 'react'
import "./SignUp.css"
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div style={{display:"flex" , justifyContent:"center" , margin:"3rem"}}>
                <div className="form1-box">
                    <form className="form1">
                        <span className="title">Sign up</span>
                        <span className="subtitle">Create a free account with your email.</span>
                        <div className="form1-container">
                            <input type="text" className="input" placeholder="Full Name" />
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button onClick={()=>navigate("/home")}>Sign up</button>
                    </form>
                    <div className="form1-section" style={{justifyContent:"center" , display:"flex"}}>
                        <p>Have an account? <span onClick={() => navigate("/signin")} className="spanning">Log in</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp