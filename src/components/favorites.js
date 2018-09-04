import React, { Component } from 'react';
import { func } from 'prop-types';
import UserPage from './userPage';
import data from './constants';
import SignUpPage from './signUpPage';
import LogInPage from './logInPage';



class Favorites extends Component {

    constructor() {
        super();

        this.state = {
            dropdown: false
        };

        this.dropdown = this.dropdown.bind(this);
        this.dropdownClose = this.dropdownClose.bind(this);
    }


    dropdown(e) {
        e.preventDefault();

        this.setState({ dropdown: true }, () => {
            document.addEventListener('click', this.dropdownClose);
        });
    }



    unfoldRestaurantInfo = event => {
        var selectionSubmit = (".material-card-action a");

        selectionSubmit = event => {
            event.preventDefault();

            (this).closest("material-card").toggleClass("triggered");
            (this).closest("material-card-action").toggleClass("triggered");
        }



    }
    dropdownClose(event) {

        if (!this.showlist.contains(event.target)) {

            this.setState({ dropdown: false }, () => {
                document.removeEventListener('click', this.dropdownClose);
            });

        }
    }


    render() {
        const { list } = this.props;
        const { listOpen, headerTitle } = this.state;
        return (

<div className="list-body">
            <div className="wrap">
                <article className="material-card">

                    <header>

                        <figure className='material-card-icon el-torito'>
                        </figure>
                        <h5 className="material-card-title">El Torito<button class="btn btn-outline-danger float-right" onClick={this.dropdown}>Info</button></h5>
                        <div>

                            {
                                this.state.dropdown
                                    ? (
                                        <div className="info-display-button" ref={(element) => {
                                            this.showlist = element;
                                        }}
                                        >
                                            <div className="restaurant-info">
                                                <li>Name: "El Torito"</li>
                                                <li>Distance: "1.9 miles"</li>
                                                <li>Hours: "OPEN: 11 AM - CLOSES: 11 PM"</li>
                                                <li>Address: "18512 MacArthur Blvd, Irvine, CA 92612"</li>
                                            
                                            </div>
                                        </div>
                                    )
                                    : (
                                        null
                                    )
                            }

                        </div>
                    </header>
                </article>
            </div>


            <article className="material-card">

                <header>

                    <figure className='material-card-icon el-torito'>
                    </figure>
                    <h5 className="material-card-title">In-N-Out<button class="btn btn-outline-danger float-right" onClick={this.dropdown}>Info</button></h5>
                    <div>

                        {
                            this.state.dropdown
                                ? (
                                    <div className="info-display-button" ref={(element) => {
                                        this.showlist = element;
                                    }}
                                    >
                                        <div className="restaurant-info">
                                            <p>
                                                <li>Name: "In-N-Out Burger"</li>
                                               <li>Distance: "1.3 miles"</li>
                                                <li>Hours: "OPEN: 10:30 AM - CLOSES: 1 PM"</li>
                                                <li>Address: "2895 Park Ave, Tustin, CA 92782"</li>
                                            </p>
                                        </div>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }

                    </div>
                </header>
            </article>

            <article className="material-card">

                <header>

                    <figure className='material-card-icon el-torito'>
                    </figure>
                    <h5 className="material-card-title">Five Guys<button class="btn btn-outline-danger float-right" onClick={this.dropdown}>Info</button></h5>
                    <div>

                        {
                            this.state.dropdown
                                ? (
                                    <div className="info-display-button" ref={(element) => {
                                        this.showlist = element;
                                    }}
                                    >
                                        <div className="restaurant-info">
                                            <p>
                                                <li>Name: "Five Guys"</li>
                                                <li>Distance: "1.2 miles"</li>
                                                <li>Hours: "OPEN: 11 AM - CLOSES: 10 PM"</li>
                                                <li>Address: "12427 Park Ave, Tustin, CA 92782"</li>
                                                </p>
                                        </div>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }

                    </div>
                </header>
            </article>

            <article className="material-card">

                <header>

                    <figure className='material-card-icon el-torito'>
                    </figure>
                    <h5 className="material-card-title">King's Fish House<button class="btn btn-outline-danger float-right" onClick={this.dropdown}>Info</button></h5>
                    <div>

                        {
                            this.state.dropdown
                                ? (
                                    <div className="info-display-button" ref={(element) => {
                                        this.showlist = element;
                                    }}
                                    >
                                        <div className="restaurant-info">
                                            
                                            <li>Name: "King's Fish House"</li>
                                            <li>Distance: "7.4 miles"</li>
                                            <li>Hours: "OPEN: 11 AM - CLOSES: 11 PM"</li>
                                            <li>Address: "1521 W. Katella Ave, Orange, CA 92867"</li>
                                            
                                        </div>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }

                    </div>
                </header>
            </article>



            <article className="material-card">

                <header>

                    <figure className='material-card-icon el-torito'>
                    </figure>
                    <h5 className="material-card-title">Flame Broiler<button class="btn btn-outline-danger float-right" onClick={this.dropdown}>Info</button></h5>
                    <div>

                        {
                            this.state.dropdown
                                ? (
                                    <div className="info-display-button" ref={(element) => {
                                        this.showlist = element;
                                    }}
                                    >
                                        <div className="restaurant-info">
                                            <p>
                                            <li> Name: "Flame Broiler"</li>
                                            <li>  Distance: "0.8 miles"</li>
                                            <li>   Hours: "OPEN: 10:30 AM - CLOSES: 5 PM"</li>
                                            <li>    Address: "1538 Brookhollow Dr. Santa Ana, CA 92705"</li>
                                                        </p>
                                        </div>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }

                    </div>
                </header>
            </article>




            <article className="material-card">

                <header>

                    <figure className='material-card-icon el-torito'>
                    </figure>
                    <h5 className="material-card-title">Chick-fil-A<button class="btn btn-outline-danger float-right" onClick={this.dropdown}>Info</button></h5>
                    <div>

                        {
                            this.state.dropdown
                                ? (
                                    <div className="info-display-button" ref={(element) => {
                                        this.showlist = element;
                                    }}
                                    >
                                        <div className="restaurant-info">
                                            <p>
                                            <li>Name: "Chick-fil-A"</li>
                                            <li> Distance: "2.2 miles"</li>
                                            <li>  Hours: "OPEN: 6:30 AM - CLOSES: 10 PM"</li>
                                            <li> Address: "3601 S. Bristol St. Santa Ana, CA 92704"</li>
                            </p>
                                        </div>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }

                    </div>
                </header>
            </article>




</div>








            );
    }

}




export default Favorites;