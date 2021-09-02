import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
  <main>
    <div>
      <Navbar/>
    </div>
      <main>
        
      <br />
    <article className='container frosted'>
      <h2 className='title' id='about'>About Me</h2>
      <img src="./images/person_icon.png" alt="Person" className="person" />
      <p>Nisi ullamco sit ex exercitation incididunt nulla laborum est excepteur. Lorem labore ad consequat eu est aliqua do elit et tempor dolore nulla voluptate et. Consequat mollit cupidatat voluptate esse qui ex esse est deserunt fugiat ut occaecat officia est. Deez nuces. Esse laborum eiusmod nulla incididunt nisi magna non exercitation magna aute aliquip nisi. Quis quis proident in enim. Nisi voluptate adipisicing commodo excepteur veniam ex irure culpa. Nostrud et adipisicing id consequat ipsum magna laboris culpa exercitation id. Id qui nostrud veniam in sunt enim eiusmod veniam. Culpa laborum incididunt exercitation enim nisi nostrud esse.</p>
    </article>
    <br />
    <article className='container frosted'>
      <h2 className='title'id='services'>Services</h2>
      <ul type="">
      <img src="./images/rv_repair_guy.png" alt="Repair" className="repair" />
  <li>• Mollit dolor sunt et ad adipisicing nisi et ad.</li>
  <li>• Minim adipisicing laboris ut ad consectetur.</li>
  <li>• Ad reprehenderit aute incididunt mollit ea qui.</li>
  <li>• Exercitation consequat in in nostrud deserunt qui sunt aliqua elit.</li>
      </ul>
    </article>
    <br />

    <article className='container frosted'>
      <h2 className='title'id='contact'>Contact</h2>
      <p>If you have any questions or </p>
      <ul className="contacts">
        <li>• Email: <a href="mailto:BriggsACRepair@gmail.com" className="contact-ways">BriggsACRepair@gmail.com</a></li>
        <li>• Company Number: <a href="tel:123-456-7890" className="contact-ways">(623) 474-5069</a></li>
      </ul>
      <img src="./images/phone_website_image.png" alt="Phone" className="phone" />
    </article>
    <br />
  </main>
  <Footer/>
  </main>
  
  
  );
}

export default App;
