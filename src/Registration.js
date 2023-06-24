import { useState } from 'react';
import Register from './Register';
import Register2 from './Register2';
const Registration=()=>{
    const[name,setName]=useState(` `);
    const[number,setNumber]=useState(0);
    const[names,setNames]=useState(` `);
   const[numbers,setNumbers]=useState(0);

    return(<>
    
    <Register setName={setName} setNumber={setNumber}/><br></br>
    <Register2 setNames={setNames} setNumbers={setNumbers}/>

   <br></br><br></br>
   <button style={{padding:5 ,marginLeft:1000}} >Redirect</button>
   
    </>)
}
export default Registration;