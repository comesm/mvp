import React from 'react';
import ReactDOM from 'react-dom';
class Search extends React.Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getDbData(this.state.value);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.populateResults(this.state.value);
  }
  //pass up the input


  render() {

  return (<div className='well'>
  <form className ='searchForm' value="My Text" onSubmit={(e) => this.handleSubmit(e)}>
  <label>
    Search:
    <input type="text" onChange={(e) => this.handleChange(e)} />
    </label>

     <input type="submit" value="Search Historical Data" />
    </form>
  </div> )
}

}

export default Search;
