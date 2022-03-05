import React, {useState} from 'react'
import profile from "../Images/loginimage/a.png";

const options = [
    {
      label: "Student",
      value: "student",
    },
    {
      label: "Department",
      value: "department",
    },
    {
      label: "Institute",
      value: "institute",
    },
  ];

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");


    return (
        <div className="main">
      <div className="sub-main-signup">
       <div>
         <div className="imgs">
            <div className="container-img">
              <img src={profile} alt="profile" className="profile"/>
            </div>
         </div>
           <h2>Sign Up</h2>
           <div>
              <input 
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              type="text" placeholder="fullname" className="name"/>
           </div>
           <div>
           <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="username"
              className="name"
            />
           </div>
           <div>
           <input onChange={(e) => {
                setEmail(e.target.value);
              }} type="text" placeholder="email" className="name"/>
           </div>
           <div>
           <input 
           onChange={(e) => {
            setPassword(e.target.value);
          }}type="password" placeholder="password" className="name"/>
           </div>
           <div>
            <select placeholder="role" className="options">
                {options.map((e) => (
                <option value={e.value} onChange={() => {setRole(e.value)}}>{e.label}</option>
                ))}
            </select>
             
           </div>
           <div className="signup">
           <button >Sign-up</button>
           </div>
          
       </div>
      </div>
    </div>
    )
}

export default Signup