import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp.jsx'
import Search from './Search.jsx'
import $ from 'jquery';
import Offerings from './Offerings.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: '',
      render: false,
      dataPoint: null,
      date: ''
    };
    this.populateData = this.populateData.bind(this);
    this.state.econData = [];
    this.unRenderDataPage = this.unRenderDataPage.bind(this);
  }

  linkClicked(target, date) {
    this.setState({dataPoint: target, render: true, date: date});

  }

  unRenderDataPage() {
    this.setState({render: false});
  }

  //search populateResultsviously queried data

  populateData(textSearch, dataSelection) {
    //this.setState({text: '', dataPoint: target, render: true});
    var app = this;
    this.setState({text: textSearch});
      $.ajax({
          url: 'http://localhost:3000/data',
          dataType:'json',
          data: {text: textSearch,
                 dataSelection:dataSelection},
          method: 'POST',
          success: function(results) {
            app.setState({econData: results.data});
          }
        })
  }

  render() {
    const data = this.state.render;

    return (<div id="wrapper"><h1> Search for Data Releases!</h1>
      <Search populateResults={this.populateData} /> {data ? <Offerings unRender={this.unRenderDataPage} id={this.state.dataPoint} date={this.state.date} /> : <Comp linkClicked={this.linkClicked.bind(this)} textSearch={this.state.text} econData={this.state.econData}/>}

     </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
