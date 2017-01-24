import React from 'react';

var DataRow = (props) => {

  return (
      <tr>
      <td>{props.dataPoint.date}</td>
      <td><a href="" onClick={()=>props.linkClicked}> {props.dataPoint.release_name}</a></td>
      <td>{props.dataPoint.release_id}</td>
      </tr>

  )

}

export default DataRow;