import React, { Component } from 'react';
import { func } from 'prop-types';
import AddRestForm from './addRestForm';
import UserPickLists from './randomPicked';

class UserPage extends Component {

    render() {
        return (
            <div className="user-page-background container-fluid">
                
                <div class="row">
                <div className="navbar header-container">
                    <img className="menuBarLogo" src="http://i6.photobucket.com/albums/y238/Lucas9/dateknighttemplogo.png" />
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
                    <div className="row userMapsRow">
                            <div class="col-lg-3 see-thru bevelBox1">
                            <h3>Your Lists</h3>
                            <UserPickLists/>
                            </div>
                            <div class="col-lg-6 white bevelBox2">
                                <h3> Knight's Out</h3>
                                <AddRestForm/>
                            </div>
                            <div class="col-lg-3 see-thru bevelBox1">
                                <h3>User Suggestions</h3>
                            </div>
                    </div>
                </div>

            // </div>
        



        );
    }

}



export default UserPage;