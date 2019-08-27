import React, { useState, useContext, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SearchState,
  IntegratedFiltering,
  //PagingState,
  //IntegratedPaging,
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableColumnVisibility,
  Toolbar,
  ColumnChooser,
  SearchPanel,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui'
import { useFetch } from "../services/hooks"
import Context from "../UserContext";

const getHiddenColumnsFilteringExtensions = hiddenColumnNames => hiddenColumnNames
  .map(columnName => ({
    columnName,
    predicate: () => false,
  }));

  const theheader = new Headers();
  theheader.set('Accept-Encoding','gzip');


export default () => {
  const { acesso, setAcesso } = useContext(Context)
  let connectionString = "" 

  if (acesso==="normal-user"){
    connectionString="https://jsonplaceholder.typicode.com/todos?userId=2"
  }
  else
  {
    connectionString="https://jsonplaceholder.typicode.com/todos"  
  }

  const [data, loading] = useFetch(connectionString);

  const [columns] = useState([
    { name: 'userId', title: 'userId' },
    { name: 'id', title: 'id' },
    { name: 'title', title: 'title' },
  ]);

  const [defaultHiddenColumnNames] = useState(['']);
  const [filteringColumnExtensions, setFilteringColumnExtensions] = useState(
    getHiddenColumnsFilteringExtensions(defaultHiddenColumnNames),
  );

  const onHiddenColumnNamesChange = hiddenColumnNames => setFilteringColumnExtensions(
    getHiddenColumnsFilteringExtensions(hiddenColumnNames),
  );

  return (
    <Fragment>    
      {loading ? (
        <p>Loading...</p>      
      ) : (
      <Paper>
      <Grid
        rows={data}
        columns={columns}
      >
        <SearchState defaultValue="" />        
        <IntegratedFiltering
          columnExtensions={filteringColumnExtensions}
        />

        <SortingState
          defaultSorting={[{ columnName: 'userId', direction: 'asc' }]}
        />
        <IntegratedSorting />

        <Table />
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
          onHiddenColumnNamesChange={onHiddenColumnNamesChange}
        />
        <Toolbar/>
        <SearchPanel />
        <ColumnChooser />

        <TableHeaderRow showSortingControls />
      </Grid>
      </Paper>
      )}
    </Fragment>
  );
};
