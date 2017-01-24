import React from 'react';

var DataRow = (props) => {

  return (
      <tr>
      <td>{props.dataPoint.date}</td>
      <td>{props.dataPoint.name}</td>
      <td>{props.dataPoint.number}</td>
      </tr>

  )

}

export default DataRow;