import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Get=()=>{
const [res,setRes]=useState([]);
useEffect(()=>{axios.get('https://reqres.in/api/users/2').then((posRes)=>{const {data}=posRes;
                                              setRes(data);
                                            },
                                   (errRes)=>{console.log(errRes)}
                                  )},[])

return(<>
    {res.map((item)=>{<ul>
                       <li>{item.data}</li>
                       <li>{item.id}</li>
                       <li>{item.email}</li>
                       <li>{item.first_name}</li>
    </ul>})}
</>)

}
export default Get;
