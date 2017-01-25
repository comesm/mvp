import React from 'react';
import ReactDOM from 'react-dom';


var ObservationRow = (props) => {

  return (
      <tr>
      <td>{props.dataPoint.date}</td>
      <td>{props.dataPoint.value}</td>
      </tr>

  )

}

export default ObservationRow;