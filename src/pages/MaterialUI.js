import React, { useState, Fragment } from 'react';
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
  //PagingPanel
} from '@devexpress/dx-react-grid-material-ui'
import { useFetch } from "../pages/hooks"
//import Loading from '../images/loading_blue.gif'


// function createData(name, sex, city, car) {
//   return { name, sex, city, car};
// }


// const rowss = [
//   createData('Sandra', 'Female', 'Las Vegas', 'Audi A4'),
//   createData('Paul', 'Male', 'Lima', 'Nissan Altima'),
//   createData('Mark', 'Male', 'Paris', 'Honda Accord'),
//   createData('Jair', 'Male', 'Rio de Janeiro', 'Audi A4'),
//   createData('Joao', 'Male', 'Madrid', 'Nissan Altima'),
//   createData('Hanna', 'Female', 'Paris', 'Honda Accord'),
//   createData('Guiuli', 'Female', 'Las Vegas', 'Audi A4'),
//   createData('Rafaela', 'Female', 'Barcelona', 'Nissan Altima'),
//   createData('Selim', 'Female', 'Lyon', 'Honda Accord'),
//   createData('Ana', 'Female', 'Oslo', 'Audi A4'),
//   createData('Arthur', 'Male', 'Jacarta', 'Nissan Altima'),
//   createData('Marcelo', 'Male', 'Paris', 'Honda Accord'),
//   createData('Sandra', 'Female', 'Las Vegas', 'Audi A4'),
//   createData('Paul', 'Male', 'Lima', 'Nissan Altima'),
//   createData('Mark', 'Male', 'Paris', 'Honda Accord'),
//   createData('Jair', 'Male', 'Rio de Janeiro', 'Audi A4'),
//   createData('Joao', 'Male', 'Madrid', 'Nissan Altima'),
//   createData('Hanna', 'Female', 'Paris', 'Honda Accord'),
//   createData('Guiuli', 'Female', 'Las Vegas', 'Audi A4'),
//   createData('Rafaela', 'Female', 'Barcelona', 'Nissan Altima'),
//   createData('Selim', 'Female', 'Lyon', 'Honda Accord'),
//   createData('Ana', 'Female', 'Oslo', 'Audi A4'),
//   createData('Arthur', 'Male', 'Jacarta', 'Nissan Altima'),
//   createData('Marcelo', 'Male', 'Paris', 'Honda Accord'),
//   createData('Sandra', 'Female', 'Las Vegas', 'Audi A4'),
//   createData('Paul', 'Male', 'Lima', 'Nissan Altima'),
//   createData('Mark', 'Male', 'Paris', 'Honda Accord'),
//   createData('Jair', 'Male', 'Rio de Janeiro', 'Audi A4'),
//   createData('Joao', 'Male', 'Madrid', 'Nissan Altima'),
//   createData('Hanna', 'Female', 'Paris', 'Honda Accord'),
//   createData('Guiuli', 'Female', 'Las Vegas', 'Audi A4'),
//   createData('Rafaela', 'Female', 'Barcelona', 'Nissan Altima'),
//   createData('Selim', 'Female', 'Lyon', 'Honda Accord'),
//   createData('Ana', 'Female', 'Oslo', 'Audi A4'),
//   createData('Arthur', 'Male', 'Jacarta', 'Nissan Altima'),
//   createData('Marcelo', 'Male', 'Paris', 'Honda Accord'),
// ];


const getHiddenColumnsFilteringExtensions = hiddenColumnNames => hiddenColumnNames
  .map(columnName => ({
    columnName,
    predicate: () => false,
  }));



export default () => {
  const [data, loading] = useFetch("https://jsonplaceholder.typicode.com/todos");

  const [columns] = useState([
    { name: 'userId', title: 'userId' },
    { name: 'id', title: 'id' },
    { name: 'title', title: 'title' },
    //{ name: 'completed', title: 'completed' },
  ]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [pageSize, setPageSize] = useState(5);
  // const [pageSizes] = useState([5, 10, 15]);

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
        {/* <PagingState
          currentPage={currentPage}
          onCurrentPageChange={setCurrentPage}
          pageSize={pageSize}
          onPageSizeChange={setPageSize}
        />
        <IntegratedPaging /> */}

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

        {/* <PagingPanel
          pageSizes={pageSizes}
        /> */}

        <TableHeaderRow showSortingControls />
      </Grid>
      </Paper>
      )}
    </Fragment>
  );
};
