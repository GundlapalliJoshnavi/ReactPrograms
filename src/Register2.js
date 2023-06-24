import {useState,useRef} from 'react';
const Register2=()=>{
     const name=useRef('');
     const num=useRef('');
     const[names,setNames]=useState(` `);
     const[numbers,setNumbers]=useState(0);
     const  my_func=function()
     {
          setNumbers(num.current.value);
          setNames(name.current.value);
     }
    return(
     <>
          <div>
               email:<input type={'text'} ref={name}></input><br></br><br></br>    
               password:<input type={"password"} ref={num}></input><br></br><br></br>
               <button onClick={my_func}>Register</button>
          </div>

          {/* <div>email:{names}<br></br>
               password:{numbers}
          </div> */}
        
     </>)
}
export default Register2;