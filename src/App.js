import './App.css';
import {Route,Routes,NavLink} from 'react-router-dom';
import Register from './Register';
import Register2 from './Register2';
import Registration from './Registration';
function App() {
  

  return (
    <div className="App">
    
    
     <Routes>
        <Route path='./Register' element={Register}></Route>
        <Route path='./Register2' element={Register2}></Route>
     </Routes>
     

    
    </div>
  );
}

export default App;
//const[name,setName]=useState(` `);
  //const[number,setNumber]=useState(0);
  //const[names,setNames]=useState(` `);
// const[numbers,setNumbers]=useState(0);