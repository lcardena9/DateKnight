import React, { Component } from 'react';
import { func } from 'prop-types';
import Restaurants from './restaurantList';
//import {CSSTransitions} from 'react-transitioning-group'


class UserPickLists extends Component {


  state = {
    faveList: ["Two Birds", "PokePalace", "Chipotle", "McCormick & Schmidt's", "Cheesecake Factory"],
    faveList2: [],
    name: '',
    name2: '',
    randomPick: ''
  }

  addToRest = () => {
    let newRest = [...this.state.faveList, this.state.name]
    let newRest2 = [...this.state.faveList2, this.state.name2]
    this.setState({
      faveList: newRest,
      faveList2: newRest2
    })
  }

  onfaveListChange = e => {
    this.setState({ name: e.target.value })
  }

  onfaveList2Change = e => {
    this.setState({ name2: e.target.value })
  }

  formSubmit = e => {
    e.preventDefault();
    let newRest = [...this.state.faveList, this.state.name]
    let newRest2 = [...this.state.faveList2, this.state.name2]

    this.setState({
      faveList: newRest,
      faveList2: newRest2,
      name: '',
      name2: ''
    });

  }


  randomPick = e => {
    let random = this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)];
    this.setState({randomPick: random})
    var randomRestaurantResult = document.getElementById(" ");
  }

  render() {
    const { faveList, faveList2, name, name2, disabled } = this.state;
    return (

        <div className="date-display-list">
          <div className="display-restaurant-list">
            <h2>Your Restaurant List</h2>
            <h5>{faveList.length} favorite restaurants</h5>
          </div>

          <div className="date-display-list2">
            <div className="display-restaurant-list2">
              <h2>User 2 List</h2>
              <h5>{faveList2.length} Favorite Restaurants</h5>
            </div>
          </div>
          </div>


    );
  }
}

UserPickLists.propTypes = {
  addToRest: func,
  removePeople: func
}
export default UserPickLists