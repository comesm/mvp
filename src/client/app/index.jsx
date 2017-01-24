import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp.jsx'
import Search from './Search.jsx'
import $ from 'jquery';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.getDbData = this.getDbData.bind(this);
    this.populateData = this.populateData.bind(this);
    this.state.econData = [];
  }


  //get current data
  getDbData(textSearch) {

  }

  componentWillUpdate() {
    console.log('24', this.state);
  }
  //search previously queried data

  populateData(textSearch) {
    var app = this;
    this.setState({text: textSearch});
  $.ajax({
      url: 'http://localhost:3000/data',
      dataType:'json',
      //add 'data' attribute to add query string
      method: 'GET',
      success: function(results) {
        console.log('37', results.data);
        app.setState({econData: results.data});
      }
    })
  }

  render() {
    return (<div><h1> Search for Data Releases!</h1>
    <Search populateResults={this.populateData} getDbData={this.getDbData} />
    <Comp textSearch={this.state.text} econData={this.state.econData} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
