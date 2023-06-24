import {useState} from 'react';
const State2=()=>{
const[bool,setBool]=useState(true);
const[arr,setArr]=useState([1,34,6,76,87,56]);
const[obj,setObj]=useState({key1:`gjh`,key2:`ghjh`,key3:`jhgf`});
const[product,setProduct]=useState([{pid:1,pname:'one',pcost:10},
                                    {pid:2,pname:'two',pcost:20},
                                    {pid:3,pname:'three',pcost:30},
                                    {pid:4,pname:'four',pcost:40},
                                    {pid:5,pname:'five',pcost:50}]);
 return(<>
 <div className='container mt-5'>
    {//<h1 className='text-success'>string</h1>
    }
    <h1 className='text text-danger'>3</h1>
    <h1 className='text text-primary'>{JSON.stringify(bool)}</h1>
    _{arr.map((element,index)=>{console.log(element)})}
    <h1>{JSON.stringify(obj)}</h1>
    <div className='container mt-5'>
        <table className='table table-bordered'><tr><th>pid</th><th>pname</th><th>pcost</th></tr>
                               {product.map((element,index)=>{
                                return(<tr><td>{element.pid}</td>
                                           <td>{element.pname}</td>
                                           <td>{element.pcost}</td></tr>)
                               })}</table>
    </div>
 </div>
 </>)

}
export default State2;