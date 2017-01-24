import React from 'react';
import DataRow from './DataRow.jsx'
var Comp = (props) => {
  //entries
  return (
  <table><th>{props.econData.map((item) =>
       <DataRow dataPoint={item} />


)}
</th></table>)
}


export default Comp;
