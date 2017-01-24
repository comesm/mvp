import React from 'react';
import ReactDOM from 'react-dom';
class Search extends React.Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state.dataSelection = 'today';
    this.changeCat = this.changeCat.bind(this);
  }

  changeCat(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({dataSelection: e.target.value});
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.populateResults(this.state.value,
    this.state.dataSelection);
  }
  //pass up the input


  render() {

  return (<div id="first" className='well'>
  <form className ='searchForm'>
  <label>
    Search:
    <input type="text" onChange={(e) => this.handleChange(e)} />
    </label>
    </form>
    <select value={this.state.dataSelection} onChange={this.changeCat}>
      <option value="today">Today</option>
      <option value="week">This Week</option>
      <option value="historical">Historical</option>
    </select>
  </div> )
}

}

export default Search;
