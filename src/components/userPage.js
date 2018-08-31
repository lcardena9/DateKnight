import React, { Component } from 'react';
import { func } from 'prop-types';
import AddRestForm from './addRestForm';

class UserPage extends Component {

    render() {
        return (
            <div className="user-page-background">

                <div className="header-container">
                    {/* <h3 className="header-container-title"> Date Knight </h3> */}
                    <img className="menuBarLogo" src="http://i6.photobucket.com/albums/y238/Lucas9/dateknighttemplogo.png" />
                </div>

                <div className='container'>
                    <div className="row user-title-row">
                        <h1 className="Title">Welcome Back {this.props.firstName}</h1>
                    </div>
                </div>

                <div className="row userMapsRow">
                            <div className="col-md-3"></div>
                            <div className="col-md-6"></div>
                                <AddRestForm />
                            <div className="col-md-3"></div>
                    </div>
                </div>




        );
    }

}



export default UserPage;