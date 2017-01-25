import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ObservationTable from './ObservationTable.jsx';

class Offerings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {observations: []}
  }

  componentDidMount() {
    var app = this;
    $.ajax({
      url: 'http://localhost:3000/datapoint',
      method: 'POST',
      data: {data_id: this.props.id, date: this.props.date},
      success: function(results) {
        var data = JSON.parse(results);
        console.log(data.observations);
        app.setState({observations: data.observations});
      }
    });
  }

  render() {

    return (
    <div>
    <button onClick={this.props.unRender}>Back</button>
    <ObservationTable observations={this.state.observations} />
    </div>)
  }

}

export default Offerings;
