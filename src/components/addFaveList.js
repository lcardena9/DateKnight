import React, { Component } from 'react';
import { func } from 'prop-types';

class AddFaveList extends Component {


  state = {
    name: '',
    randomPick: ''
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


  render() {
    return (
      <div>

        <div className="display-restaurant-list">
          <h5>You have {this.props.faveList.length} favorite restaurants</h5> {/*function to show length of the array*/}
          <ol className="favelist">
            {this.props.faveList.map(restaurant => <li key={restaurant}>{restaurant}</li>)} {/*grabs index and displays value in the list*/}
          </ol>
        </div>

        <form onSubmit={this.formSubmit}> 
          <div className="form-group save-a-fave center-button">
            <input type="text" value={this.state.name} onChange={this.onfaveListChange} className='form-control' placeholder='Enter New Restaraunt' /> {/*takes input from the user submit, onfave adds to our favelist*/}
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