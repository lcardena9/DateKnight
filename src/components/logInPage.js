import React, { Component } from 'react';
import { func } from 'prop-types';
import SignUpPage from './signUpPage';
import UserPage from './userPage';
import data from './constants';

class LogInPage extends Component {

    state = {
        email: '',
        password: '',
    }



    onEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    formLogin = event => {
        event.preventDefault();

        this.props.login(this.state);

        this.setState({
            email: '',
            password: ''
        })
    }





    render() {
        return (
            <div className="login-page-background">
                <div className='container'>

                    <div className="row title-row">
                        <img className="DK-Logo" src="http://i6.photobucket.com/albums/y238/Lucas9/51946.png" />
                    </div>

                    <div className="row">

                        <div className="col-md-4 div-height"></div>
                        <div className="col-md-4 div-height">


                            {/* FORM CODE */}
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" value={this.state.email} onChange={this.onEmailChange} className="form-control" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="Password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" placeholder="" />

                                <input className="btn btn-primary" type="submit" value="Log In" id="submit" onClick={this.formLogin}></input>
                                <button className="btn btn-primary swap" onClick={() => { this.props.changePage("signUpPage") }}> Sign Up </button>
                            </div>
                        </div>
                        <div className="col-md-4 div-height"></div>
                        {/* END FORM CODE */}


                    </div>
                </div >
            </div>


        );
    }

}



export default LogInPage;