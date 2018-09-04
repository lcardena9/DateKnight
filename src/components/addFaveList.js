import React, { Component } from 'react';
import { func } from 'prop-types';
import Restaurants from './restaurantList';
import RandomPick from './randomPicked'

class AddFaveList extends Component {


  state = {
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
    // let newRest = [...this.state.faveList, this.state.name]
    // Invoke a function that lives in app.js which will update our faves to include the new entry

    this.props.addToFavelist(this.state.name);

    this.setState({
      name: ''
    });

  }


  // randomPick = e => {
  //   let random = this.props.faveList[Math.floor(Math.random() * this.props.faveList.length)];
  //   this.setState({ randomPick: random })
  // }



  // randomPickedRestaurant = e => {
  //   return (this.state.faveList[Math.floor(Math.random() * this.state.faveList.length)])
  // }

  render() {
    return (
      <div>

        <div className="display-restaurant-list">
          <h5>You have {this.props.faveList.length} favorite restaurants</h5>
          <ol className="favelist">
            {this.props.faveList.map(restaurant => <li key={restaurant}>{restaurant}</li>)}
          </ol>
        </div>

        <form onSubmit={this.formSubmit}>
          <div className="form-group save-a-fave center-button">
            <input type="text" value={this.state.name} onChange={this.onfaveListChange} className='form-control' placeholder='Enter New Restaraunt' />
            <button type='submit' className='btn btn-primary'>Save a Fave</button>
          </div>
        </form>

        <div className="date-display-list">

        </div>
      </div>











    );
  }
}

AddFaveList.propTypes = {
  addToRest: func,
}
export default AddFaveList;