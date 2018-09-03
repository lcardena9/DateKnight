import React, { Component } from 'react';
import { func } from 'prop-types';
import AddRestForm from './addRestForm';
import UserPickLists from './randomPicked';
import Favorites from './favorites';

class UserPage extends Component {

    render() {
        return (
            <div className="user-page-background container-fluid">
                
                <div class="row">
                <div className="navbar header-container">
                    <img className="menuBarLogo" src="http://i6.photobucket.com/albums/y238/Lucas9/dateknighttemplogo.png" />
                    <button className="btn btn-primary sign-out" onClick={() => { this.props.changePage("logInPage") }}>Sign Out</button>
                </div>
                </div>

                <div class="row">
                    <div className='container main'>
                        <div className="row user-title-row">
                            <h1 className="Title">Let's Feast {this.props.firstName}</h1>
                        </div>
                    </div>
                </div>

                {/* <div class="container-fluid"> */}

                       <div class="row" className="white-background">
                            {/* <div class="col-lg-6 white bevelBox2"> */}
                                <AddRestForm/>
                            {/* </div> */}
                            </div>
                                <div class="row">
                            {/* <div class="col-lg-3 see-thru bevelBox1"> */}
                                <h3 className = "column-title">Your Lists</h3>
                                <Favorites/>
                                </div>
                            {/* </div> */}
                    
                            
                            <div class="row">
                            {/* <div class="col-lg-3 see-thru bevelBox1"> */}
                                <h3 className="column-title">Knight's Out</h3>
                            {/* </div> */}
                            </div>

                    </div>

             
        



        );
    }

}



export default UserPage;