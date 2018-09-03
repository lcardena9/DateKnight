import React, { Component } from 'react';
import { func } from 'prop-types';
import Restaurants from './restaurantList';
import RandomPick from './randomPicked'

class RandomGen extends Component {


  state = {
    faveList: ["Two Birds ", "PokePalace ", "Chipotle ", "McCormick & Schmick's ", "Cheesecake Factory "],
    faveList2: ["Steak", "seafood", "pasta"],
    name: '',
    randomPick: ''
  }

  addToRest = () => {
    let newRest = [...this.state.faveList, this.state.name]
    this.setState({
      faveList: newRest
    })
  }

  onfaveListChange = e => {
    this.setState({ name: e.target.value })
  }

  formSubmit = e => {
    e.preventDefault();
    let newRest = [...this.state.faveList, this.state.name]

    this.setState({
      faveList: newRest,
      name: ''
    });

  }


  randomPick = e => {
    let random = this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)];
    this.setState({ randomPick: random })
  }



  randomPickedRestaurant = e => {
    return (this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)])
  }

  render() {
    return (
      <div>


        <div>
          <h3 className="user-page-titles" >Enjoy your Knight Out at </h3>
          <h1 className="user-page-titles random-picked-restaurant">{this.state.randomPick}</h1>
        </div>
        <div className='center-button'>
          <button type='submit' className='btn btn-primary' onClick={this.randomPick}>Random Pick</button>
        </div>

   
   
      </div>











    );
  }
}

RandomGen.propTypes = {
  addToRest: func,
}
export default RandomGen;