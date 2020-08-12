import React, {useState, useEffect} from "react" ; //import usestate hook
import "./App.css";
import Hello from './sayhello';

function App(){

  const[counter,setCounter]=useState(0);

  useEffect(()=>{
    alert("number of clicks :" +counter);

  });

  function increment(){
    setCounter(counter+1);
  }


return(
  <div>
    <p> {counter}</p>
<button onClick = {increment}> increment</button>
  </div>
)
}



// function App(){

// //  const [users,setUser] = useState([
// //    {name:'Ed', msg:"hello there"},
// //    {name:'Ed2', msg:"Hi"},
// //    {name:'Ed3', msg:"hello"}

//  ]);

 

//   return( //inside part is actualy javascript(JSX) but this converts into html when exporting.
//     <div className="app">
//       {users.map(user =>(
//         <Hello name={users.name} msg={users.msg}/>
//       ))}
//     </div>
//   );
// }

export default App; //export the file