import { useState } from "react";
const State1=()=>{
const[arr,serArr]=useState([1,2,3,4,5]);
const[obj,setObj]=useState({key1:`gjh`,key2:`ghjh`,key3:`jhgf`})
return(<>
   {arr}<br></br>
   {obj.key1}...{obj.key2}
</>)
}
export default State1;