import React from 'react';
import DataRow from './DataRow.jsx'
var Comp = (props) => {
  //entries
  return (
  <table>
  <tr>
    <th>Date</th>
    <th>Release</th>
    <th>Value</th>
  </tr>
  {props.econData.map((item) =>
       <DataRow linkClicked={props.linkClicked} dataPoint={item} />


)}
</table>)
}


export default Comp;
