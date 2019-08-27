import React from 'react';
import MaterialTable from 'material-table';
import { useFetch } from "../services/hooks";

export default function ViaturaList() {
    const [data, loading] = useFetch(
      "http://jsonplaceholder.typicode.com/users"
    );

    const [state, setState] = React.useState({
      columns: [
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'opcaoA', 63: 'opcaoB' },
        },
      ],
  });

  return (
    <>    
    <MaterialTable
      title="Veículos"
      columns={state.columns}
      data={data}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
    </>  
  );
}
