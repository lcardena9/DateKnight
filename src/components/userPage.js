import React, { Component } from 'react';
import { func } from 'prop-types';

class UserPage extends Component {

   render() {
       return (
        <div className="user-page-background">
            <div className="header-container">
                {/* <h3 className="header-container-title"> Date Knight </h3> */}
                <img className ="menuBarLogo" src= "http://i6.photobucket.com/albums/y238/Lucas9/dateknighttemplogo.png"/>
            </div>
           
            <div className='container'>
                <div className="row title-row">
                    <h1 className="Title">Welcome Back {this.props.firstName}</h1>
                </div>
            </div> 

            <div className= "user-field-container">    
                <div className="row">
                    <div class="col-small-3"></div>
                    <div class="col-md-6"></div>
                    <div class="col-small-3"></div>
                </div>
            </div>


        </div>
   


               );
               }

           }



   export default UserPage;