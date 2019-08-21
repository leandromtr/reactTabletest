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
  //PagingPanel
} from '@devexpress/dx-react-grid-material-ui'
import { useFetch } from "../pages/hooks"
//import Loading from '../images/loading_blue.gif'
import Context from "../UserContext";

const getHiddenColumnsFilteringExtensions = hiddenColumnNames => hiddenColumnNames
  .map(columnName => ({
    columnName,
    predicate: () => false,
  }));

  const theheader = new Headers();
  theheader.set('Accept-Encoding','gzip');


  // var VehicleResponse = new clsVehicleResponse()
  // VehicleResponse.datetime = JSON.parse(response).datetime;
  // VehicleResponse.lstVehicleData = JSON.parse(response).lstVehicleData;
  // this.setState({ isMounted: true, objVehicleResponse: VehicleResponse });


export default () => {
  const { acesso, setAcesso } = useContext(Context)
  let connectionString = "" 

  if (acesso==="normal-user"){
    connectionString="https://jsonplaceholder.typicode.com/todos?userId=2"
    //connectionString='http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetVehicle?Fields=CADVehicleId;CADUnitId;CADUnitId;ViaMATRICULA;SBOXID'
  }
  else
  {
    connectionString="https://jsonplaceholder.typicode.com/todos"  
    //connectionString='http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetVehicle?Fields=CADVehicleId;CADUnitId;CADUnitId;ViaMATRICULA;SBOXID'
  }



//   'http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetVehicle?Fields=CADVehicleId;CADUnitId;CADUnitId;ViaMATRICULA;SBOXID'
//   , { headers: theheader  }
// )
//   .then(response => response.json())
//   .then(response => {
//       var VehicleResponse = new clsVehicleResponse()
//       VehicleResponse.datetime = JSON.parse(response).datetime;
//       VehicleResponse.lstVehicleData = JSON.parse(response).lstVehicleData;
//       this.setState({ isMounted: true, objVehicleResponse: VehicleResponse });
//   }).catch(
//       err => {
//           console.error(err);
//       }
//   );






  const [data, loading] = useFetch(connectionString);
  //const [data, loading] = useFetch(connectionString, { headers: theheader });

  const [columns] = useState([
    { name: 'userId', title: 'userId' },
    { name: 'id', title: 'id' },
    { name: 'title', title: 'title' },
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
