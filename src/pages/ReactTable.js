import React, {Fragment} from 'react';
import { MDBDataTable } from 'mdbreact';
import { useFetch } from "../services/hooks";


export default () => {
  const [data, loading] = useFetch(
     "https://jsonplaceholder.typicode.com/todos"
  );

  const dataTable = {
    columns: [
      {
        label: 'userId',
        field: 'userId',
        sort: 'asc',
        width: 150
      },
      {
        label: 'id',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'title',
        field: 'title',
        sort: 'asc',
        width: 150
      }
    ],
    rows: data
  };

  return (
    <Fragment>    
      <center><h1>React Table</h1></center> 
      {console.log(dataTable)}  
      {loading ? (
        <p>Loading...</p>      
      ) : (  
      // <MyFetchingComponent />    
      <MDBDataTable
        //striped
        //bordered
        small
        data={dataTable}        
      />
      )}
    </Fragment>
  );
}