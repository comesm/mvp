import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp.jsx'
import Search from './Search.jsx'
import $ from 'jquery';
import Offerings from './Offerings.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.getDbData = this.getDbData.bind(this);
    this.populateData = this.populateData.bind(this);
    this.state.econData = [];
  }

  //search populateResultsviously queried data

  getDbData () {

  }

  populateData(textSearch, dataSelection) {
    var app = this;
    this.setState({text: textSearch});

    // if(dataSelection === 'today') {
    //   // $.ajax({
    //   //   url: 'https://api.stlouisfed.org/fred/releases/dates',

    //   //   data: {api_key: 'a6ad301408e6f755651595dfdc02c247',
    //   //     dataType:'jsonp'},
    //   //   // dataType:'json',
    //   //   method:'GET',
    //   //   success: function(results) {
    //   //       console.log(results.release_dates);
    //   //   }
    //   // })
    // }
    // else {
      $.ajax({
          url: 'http://localhost:3000/data',
          dataType:'json',
          data: {text: textSearch,
                 dataSelection:dataSelection},
          method: 'POST',
          success: function(results) {
            console.log('37', results.data);
            app.setState({econData: results.data});
          }
        })
  }

  render() {
    return (<div id="wrapper"><h1> Search for Data Releases!</h1>
    <Search populateResults={this.populateData} getDbData={this.getDbData} />
    <Comp textSearch={this.state.text} econData={this.state.econData} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
