import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Offerings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {attributes: null}
  }

  componentDidMount() {
    var app = this;
    $.ajax({
      url: 'http://localhost:3000/datapoint',
      method: 'POST',
      data: {data_id: this.props.id, date: this.props.date},
      success: function(results) {
        var data = JSON.parse(results);
        app.setState({attributes: data.observations});
        console.log('data', data.observations);
      }
    });
  }

  render() {

    return (
    <div>
    <button onClick={this.props.unRender}>Back</button>
    </div> )
  }

}

export default Offerings;
