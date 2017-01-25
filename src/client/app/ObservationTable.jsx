import React from 'react';
import ReactDOM from 'react-dom';
import ObservationRow from './ObservationRow.jsx'

var ObservationTable = (props) => {


  return (
    <table>
      <tr>
      <th>Date</th>
      <th>Value</th>
      </tr>
      {props.observations.map((item) =>
         <ObservationRow dataPoint={item} />
      )}
    </table>)
  }

export default ObservationTable;