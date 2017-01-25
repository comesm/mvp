import React from 'react';

var DataRow = (props) => {

  return (
      <tr>
      <td>{props.dataPoint.date}</td>
      <td onClick={(event) => props.linkClicked(props.dataPoint.release_id,
        props.dataPoint.date
        )}> {props.dataPoint.release_name}</td>
      <td>{props.dataPoint.release_id}</td>
      </tr>

  )

}

export default DataRow;