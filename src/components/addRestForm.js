import React, { Component } from 'react';
import { func } from 'prop-types';
import Restaurants from './restaurantList';
import RandomPick from './randomPicked'

class AddRestForm extends Component {


 state = {
   faveList: ["Two Birds ", "PokePalace ", "Chipotle ", "McCormick & Schmick's " , "Cheesecake Factory "],
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
          <div className="display-restaurant-list">
            <h2>Your Favorite Restaurants</h2>
            <h5>You have {this.state.faveList.length} favorite restaurants</h5>
          </div>

          {/* <div className="date-display-list2">
            <div className="display-restaurant-list2">
              <h2>User 2 List</h2>
              <h5>{this.state.faveList2.length} Favorite Restaurants</h5>
            </div> */}

            <form onSubmit={this.formSubmit}>
                <div className="form-group">
                    <label>Restaurant Name</label>
                     <input type="text" value={this.state.name} onChange={this.onfaveListChange} className='form-control' placeholder='Enter Restaraunt' />
                    <button type='submit' className='btn btn-primary'>Save a Fave</button>
                </div>
            </form>

                <div>
                <h1>Enjoy your Knight Out at {this.state.randomPick}</h1>
                </div>
                <div>
                <button type='submit' className='btn btn-primary' onClick={this.randomPick}>Random Pick</button> 
                </div>
            

                <div className="date-display-list">
          
          </div>
          </div>

 









   );
 }
}

AddRestForm.propTypes = {
addToRest: func,
}
export default AddRestForm;