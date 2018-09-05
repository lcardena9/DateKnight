import React, { Component } from 'react';
import { func } from 'prop-types';
import RandomGen from './RandomGen';
import Favorites from './favorites';
import AddFaveList from './addFaveList'

class UserPage extends Component {

    render() {
        return (
            <div className="user-page-background container-fluid">
                <div>
                <div class="row">
                <div className="navbar header-container">
                    <img className="menuBarLogo" src="http://i6.photobucket.com/albums/y238/Lucas9/dateknighttemplogo.png" />
                    <button className="btn btn-primary sign-out" onClick={() => { this.props.changePage("logInPage") }}>Sign Out</button> {/*uses the change page function from app.js to return to login page*/}
                </div>
                </div>

                <div class="row">
                    <div className='container main'>
                        <div className="row user-title-row">
                            <h1 className="Title">Let's Feast</h1>
                        </div>
                    </div>
                </div>
                
                   
                   {/* <div class="container-fluid"> */}
                       <div class="row">
                       
                           
                            <div class="col-sm-3 white bevelBox2">
                            <h3 className = "column-title">Your Faves</h3>
                                <AddFaveList faveList={this.props.faveList}
                                addToFavelist={this.props.addToFavelist}/>
                            </div>
                            
                            <div class="col-sm-6 see-thru bevelBox2">
                                <h3 className = "column-title">Let's Pick</h3>
                                <RandomGen 
                                    chooseRandomRest={this.props.chooseRandomRest}
                                    randomPick={this.props.randomPick}
                                />  
                            </div>
                    
                            <div class="col-sm-3 see-thru bevelBox2">
                                <h3 className="column-title">Knight's Out</h3>
                                <Favorites/>
                            </div>
                            </div>
                        </div>
                    </div>
                    // </div>
             
        



        );
    }

}



export default UserPage;