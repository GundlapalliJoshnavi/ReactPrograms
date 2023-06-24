const Events=()=>{
   const func_one=()=>{alert("you clicked")};
   const func_two=(param1,param2)=>{(param1=="anu" && param2=="3")?alert("you double clicked"):alert("error")};
   const func_three=()=>{alert("you clicked")};
   const func_four=(param1,param2)=>{(param1=="arya" && param2=="5")?alert("you double clicked"):alert("error")};
    return(<>
    <button onClick={func_one}>button1</button><br></br>
    <button onClick={func_two("anu",3)}>button2</button><br></br>
    <button onClick={func_three}>button3</button><br></br>
    <button onClick={func_four("arya",5)}>button4</button><br></br>
    
    </>)
}
export default Events;