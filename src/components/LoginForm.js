import React, { useState } from 'react';
import SvgGuy from './svgGuy'
import cloud from "./../resources/wave.png"
import "./LoginForm.css"



const LoginForm=()=>  {
        var isMatch = false;

        const [username,setUsername] = useState("")
        const [password,setPassword] = useState("")

        const requestOptions = {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
               'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                membershipType: "FREE"
            })
         };

         function PostUser(){
              if(isMatch = true){
                 
             fetch("http://www.flowspace.tech/users/update_users",requestOptions).then(response => console.log(response.json())).catch(err => {throw new Error(err) })
              }
         }
        // useEffect(()=>{
        //     PostUser()
        // })
        function Validate(){
            var password = document.getElementById('password');
            var confirm_password = document.getElementById('confirm_password');

            if(password.value == confirm_password.value){
                document.getElementById('dontMatch').style.color = "#ffffff";
                isMatch = true;
            }

            if(password.value !== confirm_password.value){
                document.getElementById('dontMatch').style.color = "#ff0000";
                isMatch = false;
                confirm_password.value = "";
            }
        }   


    function Pressed(){
        Validate();
        PostUser();
    }

        return (
            <div id="login_container">
                <div id="svgGuy"><SvgGuy/></div>
                <div id="loginformTextFieldContainer" >
                <p id="Title">Sign Up</p>
                 <input type='email' class='input' name="EmailAddress" placeholder="Email Address"/>
                 <input type="text" class='input' name="Username" placeholder="Username"  onChange={e=>{setUsername(e.target.value)
                    console.log(e.target.value)}} />

                 <input type="password" class='input' name="Password" id="password" placeholder="Password" onChange={e=>{setPassword(e.target.value) 
                    console.log(e.target.value)}}/>
                    
                 <input type='password' class='input' name="ConfirmPassword" id="confirm_password" placeholder="Confirm Password"/>
                 <p id='dontMatch'>Passwords don't match</p>

                    <button id="loginformLoginButton" onClick={()=>{Pressed()}}>SIGN UP</button>

                    <img src={cloud} alt='cloud' width='100%' id='clouding'/>
                 </div>
                 <div>
                
                </div>
            </div>
        );
    }


export default LoginForm;