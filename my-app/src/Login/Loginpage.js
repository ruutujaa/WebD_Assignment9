//First code

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../Login/Loginpage.css"

// export default function LoginPage({...props}){
//     const navigate = useNavigate();

//     const handleSignIn = () => {
//         props.handle();
//         navigate('/main')
//     }
//     return(
//         <div className="login-page">
//             <h1> Login Page</h1>
//             <form>
//                 <label>
//                     Email:
//                     <input type="text" className="login-input" />
//                 </label>
//                 <br/>
//                 <label>
//                     Password:
//                     <input type="password" className="login-input" />
//                 </label>
//                 <label>
//                     FullName::
//                     <input type="password" className="login-input" />
//                 </label>
//                 <br/>
//                 <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
//             </form>
//         </div>
//     )
// }


//repairedcode(cgpt)

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Login/Loginpage.css"

// export default function LoginPage({...props}){
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [fullname, setFullName] = useState("");
//     const navigate = useNavigate();

//     const handleSignIn = (event) => {
//         event.preventDefault();
//         console.log(email, password, fullname);

//         props.handle();
//         navigate('/main')
//     }

//     return(
//         <div className="login-page">
//             <h1> Login Page</h1>
//             <form onSubmit={handleSignIn}>
//                 <label>
//                     Email:
//                     <input type="text" className="login-input" value={email} onChange={(event) => setEmail(event.target.value)} />
//                 </label>
//                 <br/>
//                 <label>
//                     Password:
//                     <input type="password" className="login-input" value={password} onChange={(event) => setPassword(event.target.value)} />
//                 </label>
//                 <label>
//                     FullName::
//                     <input type="text" className="login-input" value={fullname} onChange={(event) => setFullName(event.target.value)} />
//                 </label>
//                 <br/>
//                 <button type="submit" className="login-button">Sign In</button>
//             </form>
//         </div>
//     )
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Loginpage.css"
// import "../Main/MainPage"


export default function LoginPage({...props}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const navigate = useNavigate();

    // const handleSignIn = (event) => {
    //     event.preventDefault();
    //     console.log(email, password, fullName);

    //     props.handle();
    //     navigate('/main')
    // }
    
    const handleSignIn = async (event) => {
    
        event.preventDefault();
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:9090/user/login", requestOptions)
  .then(response => {response.text()
if (response.status === 200){
    console.log("navigating to")
    props.handle();
    navigate('/home')
}
})
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



        // const res = await fetch('/user/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
                
        //     })
        // })
        // const data = await res.json();
        // console.log(data);
        // if(data.status === 200){
        //     props.handle();
        //     navigate('/main')
        // }
        // else{
        //     alert("Invalid Credentials");
        // }
    }
    return(
        <div className="login-page">
            <h1> Login Page</h1>
            <form onSubmit={handleSignIn}>
                <label>
                    Email:
                    <input type="text" className="login-input" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" className="login-input" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br/>
                <label>
                    Full Name:
                    <input type="text" className="login-input" value={fullName} onChange={(event) => setFullName(event.target.value)} />
                </label>
                <br/>
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </div>
    )
}
