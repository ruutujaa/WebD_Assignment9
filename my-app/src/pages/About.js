// import React from "react";

// function About(){
//     return(
//         <div>
//             This is about page
//         </div>
//     )
// }

// export default About;

// import React from "react";

// function Home(){
//     return(
//         <div>
//             This is Home page
//         </div>
//     )
// }

// export default Home;

import React from 'react';
import Card from '../Card/Card';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <Card
        title="Welcome to our website!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis eget mauris tincidunt sollicitudin. Duis rhoncus justo eget sapien interdum, at faucibus mi rhoncus. Sed ac placerat urna."
      />
    </div>
  );
}

export default About;
