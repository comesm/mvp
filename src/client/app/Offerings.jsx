import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Offerings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {attributes: null}
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/dataPoint',
      method: 'POST',
      data: {data_id: this.props.id},
      success: function(data) {
        this.setState(attributes: data)
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
