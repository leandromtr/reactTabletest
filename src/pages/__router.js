// import * as React from 'react';
// import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import { ModalContainer, ModalRoute   } from 'react-router-modal'
// import { App } from './App';
// import { About, CadUserInfo, MessagePage, blank,Vehicle,Root,Reports,ReportFrame,EditVehicle } from './components';
// import { MemberEntity, UserObject, LstAccess, clsDGroupResponse } from './model';
// import './css/loader.scss';
// import './less/theme.css';
// import 'react-router-modal/css/react-router-modal.css'

// interface State {
//   member: MemberEntity;
//   isMounted: boolean;
// }

// interface Props {

// }

// export class AppRouter extends React.Component<Props, State>  {
//   componentWillMount() {
//     document.title = 'Gestão de frota'
//   }


//   async componentWillUnmount() { this.setState({ isMounted: false }); }
//   constructor(props) {
//     super(props);
//     this.state = { member: new MemberEntity(), isMounted: false };

//   }
//   async  componentDidMount() {
//    const cachedHits = sessionStorage.getItem('member');
//     if (cachedHits == null) 
//     {
//       fetch('http://lis-sgiv-smsiap/IPT_Fleet_Cred/get.aspx', { credentials: 'include' })
//         .then(response => response.json())
//         .then(response => {

//           var memberinfo = new MemberEntity();
//           memberinfo.isLoggedIn = response.isLoggedIn;
//           memberinfo.isLoading = false;
//           memberinfo.exception = response.ex;
//           memberinfo.logindata = response; 
//           if (memberinfo.logindata){
//             memberinfo.isFormUser= memberinfo.logindata.lstCadCommandAccess.includes("InformerSec1");
//             memberinfo.isReportUser= memberinfo.logindata.lstCadCommandAccess.includes("InformerSec2");
//           }
       
//          sessionStorage.setItem('member', JSON.stringify(memberinfo));
//           this.setState({ member: memberinfo, isMounted: true  });     

//         }).catch(
//           err => {
//             console.error(err);
//             var memberinfo = new MemberEntity();
//             memberinfo.isLoggedIn = false;
//             memberinfo.isLoading = false;
//             memberinfo.exception = err.message;  
//             let res:string =    JSON.stringify(memberinfo)
//             sessionStorage.setItem('member', res);  
//                  this.setState({ member: memberinfo , isMounted: true 
//                 });
//           }
//         );

//         fetch('http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetDGroup')
//         .then(response => response.json())
//         .then(response => {
//           sessionStorage.setItem('dgroup',response);
//         }).catch(
//           err => {
//             console.error(err);         
//           }
//         );
//     } 
  
//     else {
//       this.setState({ member: JSON.parse(cachedHits) });
//       this.setState({ isMounted: true });
//     }

//   }
 
   
//   public render() {

//     if (this.state.member.isLoading || !this.state.isMounted)
//       return (<div className="showbox">

// <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
// <img  src={require('./images/placeholder-logo.png')} style={{backgroundColor: "#fff"}} alt="logo" />
// </div>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//           <div className="loader">
//             <svg className="circular" viewBox="25 25 50 50">
//               <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
//             </svg>
//           </div>
//         </div>
//         <br />
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//           Loading
//         </div>
//       </div>);
//     else {
//       if (this.state.member.isLoggedIn)
//         return (
//           <BrowserRouter >
//             <div className="container-fluid">
//               <Route component={App} />
//               <Switch>
//                 <Route exact path="/" component={Root} />
//                 <Route exact path="/Reports" component={Reports} />   
//                 <Route exact path="/ReportFrame" component={ReportFrame} />   
//                 <Route exact path="/About" component={About} />
//                 <Route exact path="/Vehicle" component={Vehicle} />
//                 <Route exact path="/User" component={CadUserInfo} />
//                 <Route exact path="/EditVehicle/:carid" component={EditVehicle} />
//               </Switch>    
                       
//             </div>
//           </BrowserRouter>

//         );
//       else
//         if (!this.state.member.isLoggedIn)
//           return (<MessagePage message={this.state.member.exception} />);
//     }
//   }
// }