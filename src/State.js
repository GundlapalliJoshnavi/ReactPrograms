import {useState} from 'react';
const State=()=>{
    const[num,setNum]=useState(3);
    const[name,setName]=useState("joshna");
    return(<>
    {num}
    {name}
    </>)
}
export default State;