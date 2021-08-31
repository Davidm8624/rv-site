import React from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
  <main>
    <div>
      <Navbar/>
      <main className="frosted">
        
      </main>
    </div>
    <container className='container'>
      <h2 className='title'>About Me</h2>
      <p>Nisi ullamco sit ex exercitation incididunt nulla laborum est excepteur. Lorem labore ad consequat eu est aliqua do elit et tempor dolore nulla voluptate et. Consequat mollit cupidatat voluptate esse qui ex esse est deserunt fugiat ut occaecat officia est.</p>
    </container>
    <container className='container'>
      <h2 className='title'>Services</h2>
      <p>Irure do sit aliquip culpa sit. Duis laboris ipsum incididunt officia consequat dolor. Nisi Lorem ad amet aliqua labore sint sunt sunt ad nisi magna.</p>
    </container>
    <container className='container'>
      <h2 className='title'>Contact</h2>
      <p>Quis laborum et non non sint aliqua deserunt mollit duis ex eiusmod.Irure do sit aliquip culpa sit.</p>
    </container>
  </main>
  
  );
}

export default App;
