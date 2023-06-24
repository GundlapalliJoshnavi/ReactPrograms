import{useRef,useState} from 'react';
const Login2=()=>{
const name=useRef("");
const pwd=useRef('');
const[res,setRes]=useState('');
const my_func=()=>{
    if(name.current.value=="josh" && pwd.current.value==123){
        setRes("Login success");
    }
    else{
        setRes("Login fail");
    }
}
return(<><div>
name:<input type={"text"} ref={name}></input><br></br><br></br>
password:<input type={"text"} ref={pwd}></input><br></br><br></br>
<button onClick={my_func}>Login</button></div>
<div>
{res}
</div>
</>)
}
export default Login2;