// import React from "react";

// function Jobs(){
//     return(
//         <div>
//             This is Jobs page
//         </div>
//     )
// }

// export default Jobs;

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
import './Jobs.css';

function Jobs() {
  return (
    <div className="jobs">
      <h1>Jobs</h1>
      <Card
        title="Welcome to our website!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis eget mauris tincidunt sollicitudin. Duis rhoncus justo eget sapien interdum, at faucibus mi rhoncus. Sed ac placerat urna."
      />
    </div>
  );
}

export default Jobs;
