import {useState,useRef} from 'react';
const Register=()=>{
     const names=useRef('');
     const num=useRef('');
     const[name,setName]=useState(` `);
     const[number,setNumber]=useState(0);
     const  my_func=function()
     {
          setNumber(num.current.value);
          setName(names.current.value);
     }
    return(
    <>
          <div>
               name:<input type={'text'} ref={names}></input><br></br><br></br>    
               mobile:<input type={"number"} ref={num}></input><br></br><br></br>
               <button onClick={my_func}>Register</button>
          </div>
          
          {/* <div>name:{name}<br></br>
             mobile:{number}
          </div> */}
        
        </>)
}
export default Register;