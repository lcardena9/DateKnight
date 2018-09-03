import React, { Component } from 'react';
import { func } from 'prop-types';
import UserPage from './userPage';
import data from './constants';
import SignUpPage from './signUpPage';
import LogInPage from './logInPage';



class Favorites extends Component {




   render() {
       return (

           <div>
               <h4>Your favorites:</h4>
               <ul>
                   <img src='https://s3fs.paintnite.com/img/uploaded/2017/11/thumb/venues5a03539748b33.jpeg' height='100' width='100' />

                   <li> El torito Distance: 1.9 miles,
           Hours: OPEN: 11 AM - CLOSES: 11 PM,
       Address: 18512 MacArthur Blvd, Irvine, CA 92612  </li>
                   <img
                       src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/InNOut.svg/1200px-InNOut.svg.png'
                       height='100' width='100' />
                   <li>
                       Restaurant: In-N-Out Burger,
           Distance: 1.3 miles,
           Hours: OPEN: 10:30 AM - CLOSES: 1 PM,
           Address: 2895 Park Ave, Tustin, CA 9278 <br></br>
                   <img src='https://mallmaverick.cdn.speedyrails.net/system/stores/store_fronts/000/028/707/original/kings_fish-house_500px.jpg?1464969880' heigth='100' width='100' />
                       <li>
                           Restaurant: King’s Fish House,
                           Distance: 7.4 miles,
                           Hours: OPEN: 11 AM - CLOSES: 11 PM,
                           Address: 1521 W. Katella Ave, Orange, CA 92867<br></br>
       </li><li>
                           <img src='https://getbento.imgix.net/accounts/6ee3aaa6a365ba8da9a520b9da02b32d/media/accounts/media/MUFiwDlQTfWBLqwTjj9E_LOGO.png?w=1200&fit=fill&auto=compress,format&h=600&bg=EDEDF1&pad=100' heigth='100' width='100' />
                           Restaurant: Flame Broiler,
                           Distance: 0.8 miles,
                           Hours: OPEN: 10:30 AM - CLOSES: 5 PM,
                           Address: 1538 Brookhollow Dr. Santa Ana, CA 92705
       </li>

                   </li>
               </ul>
           </div>

       );
   }
}
export default Favorites;
