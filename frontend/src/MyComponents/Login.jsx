import React from 'react'
import profile from "../Images/loginimage/a.png";
import email from "../Images/loginimage/email.jpg";
import pass from "../Images/loginimage/pass.png"

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
       <div>
         <div className="imgs">
            <div className="container-img">
              <img src={profile} alt="profile" className="profile"/>
            </div>
         </div>
           <h2>Student Login</h2>
           <div>
             <img src={email} alt="email" className="email"/>
              <input type="text" placeholder="username" className="name"/>
           </div>
           <div>
             <img src={pass} alt="pass" className="email"/>
              <input type="password" placeholder="password" className="name"/>
           </div>
           <div className="login-button">
           <button >Login</button>
           </div>
          
       </div>
      </div>
    </div>
  )
}

export default Login