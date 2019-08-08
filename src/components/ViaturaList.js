import React from 'react';
import MaterialTable from 'material-table';
import { useFetch } from "../pages/hooks";

export default function ViaturaList() {
    const [data, loading] = useFetch(
      "http://jsonplaceholder.typicode.com/users"
    );

    const [state, setState] = React.useState({
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'CADVehicleId', field: 'CADVehicleId' },
        { title: 'Email', field: 'email' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'opcaoA', 63: 'opcaoB' },
        },
      ],
    // data: [
    //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //   { name: 'Alfast', surname: 'Raisx', birthYear: 2001, birthCity: 18 },
    // ],
  });

  return (
    <>
    { console.log(data) }
      
    {/* <div style={{ maxWidth: '100%' }}>  */}
    <MaterialTable
      title="Veículos"
      columns={state.columns}
      data={data}
      editable={{
        // onRowAdd: newData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       const data = [...state.data];
        //       data.push(newData);
        //       setState({ ...state, data });
        //     }, 600);
        //   }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        // onRowDelete: oldData =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       const data = [...state.data];
        //       data.splice(data.indexOf(oldData), 1);
        //       setState({ ...state, data });
        //     }, 600);
        //   }),
      }}
    />
    {/* </div> */}
    </>  
  );
}
