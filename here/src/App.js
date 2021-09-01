import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
  <main>
    <div>
      <Navbar/>
    </div>
      <main className="frosted">
        
    
    <article className='container'>
      <h2 className='title' id='about'>About Me</h2>
      <p>Nisi ullamco sit ex exercitation incididunt nulla laborum est excepteur. Lorem labore ad consequat eu est aliqua do elit et tempor dolore nulla voluptate et. Consequat mollit cupidatat voluptate esse qui ex esse est deserunt fugiat ut occaecat officia est.</p>
    </article>
    <article className='container'>
      <h2 className='title'id='services'>Services</h2>
      <ul type="">
  <li>• Mollit dolor sunt et ad adipisicing nisi et ad.</li>
  <li>• Minim adipisicing laboris ut ad consectetur.</li>
  <li>• Ad reprehenderit aute incididunt mollit ea qui.</li>
      </ul>
    </article>
    <article className='container'>
      <h2 className='title'id='contact'>Contact</h2>
      <p>Quis laborum et non non sint aliqua deserunt mollit duis ex eiusmod.Irure do sit aliquip culpa sit.</p>
    </article>
  </main>
  <Footer/>
  </main>
  
  
  );
}

export default App;
