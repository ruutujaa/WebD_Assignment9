// import React from "react";

// function Profile(){
//     return(
//         <div>
//             This is Profile page
//         </div>
//     )
// }

// export default Profile;

import React from 'react';
import Card from '../Card/Card';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <Card
        title="Welcome to our website!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed turpis eget mauris tincidunt sollicitudin. Duis rhoncus justo eget sapien interdum, at faucibus mi rhoncus. Sed ac placerat urna."
      />
    </div>
  );
}

export default Profile;
