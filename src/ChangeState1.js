import {useState} from 'react';
const ChangeState1=()=>{
    const [count,setCount]=useState(0);
    const my_func=()=>{
            setCount(count=>count+1);
        };
    return(<>
    {count}<br></br>
    <button onClick={my_func}>change</button>
    </>)
}
export default ChangeState1;