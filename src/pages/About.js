import React, {Fragment} from 'react'
import AboutInfo from '../components/AboutInfo'
import AboutGroupList from '../components/AboutGroupList'
import Paper from '@material-ui/core/Paper';

export default function Viaturas() {
    return (
      <Fragment>
        <div className="MuiPaper-root MuiPaper-elevation2 MuiPaper-rounded">
          <AboutInfo/>
          <AboutGroupList/>
        </div>  
      </Fragment>
    )
}



// import React, {Fragment} from 'react';
// import { MDBDataTable } from 'mdbreact';
// import { useFetch } from "../pages/hooks";



// // const MyFetchingComponent = () => {
// //   const response = useFetch('http://lis-sgiv-smsiap/IPT_Fleet_Cred/get.aspx', { method: 'GET' });
// //   return 'The server responded with: ' + response;
// // };


// export default () => {
//   const [data, loading] = useFetch(
//     "http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetDGroup"
//     //"http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetVehicle"
//     //"http://lis-sgiv-smsiap/IPT_Fleet_Cred/get.aspx"
//   );

//   const dataTable = {
//     columns: [
//       {
//         label: 'userId',
//         field: 'userId',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'id',
//         field: 'id',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'title',
//         field: 'title',
//         sort: 'asc',
//         width: 150
//       },
//       {
//         label: 'completed',
//         field: 'completed',
//         sort: 'asc',
//         width: 150
//       },
//     ],
//     rows: data
//   };

//   return (
//     <Fragment>    
//       <center><h1>React Table</h1></center> 
//       {console.log(dataTable)}  
//       {loading ? (
//         <p>Loading...</p>      
//       ) : (  
//       // <MyFetchingComponent />    
//       <MDBDataTable
//         //striped
//         //bordered
//         small
//         data={dataTable}
        
//       />
//       )}
//     </Fragment>
//   );
// }