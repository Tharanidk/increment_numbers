import React from 'react' ;
import "./App.css";

function Hello({name,msg}){
  
    return(
      <div className="Hello">
          <h1>This is the hello component</h1>
          <h3>{msg}</h3>
          <h2>
            {name}
          </h2>
      </div>
    );
  }
  
  export default Hello;