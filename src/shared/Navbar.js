import React from "react"
import {
    Route,
    NavLink,
    BrowserRouter,
    Switch
  } from "react-router-dom"
import App from "../App"
import Relatorios from "../pages/Relatorios"
import Viaturas from "../pages/Viaturas"
import Eventos from "../pages/Eventos"
import Geofences from "../pages/Geofences"
import MaterialUI from "../pages/MaterialUI"
import DataGrid from "../pages/DataGrid"
import ReactTable from "../pages/ReactTable"
import Notfound from "../pages/Notfound"


function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" exact activeClassName="active" to="/">Gestão de Frota</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" exact to="/relatorios">Relatórios</NavLink>                
                        <NavLink className="nav-item nav-link" exact to="/viaturas">Viaturas</NavLink>   
                        <NavLink className="nav-item nav-link" exact to="/eventos">Eventos</NavLink>   
                        <NavLink className="nav-item nav-link" exact to="/geofences">Geofences</NavLink>   
                        <NavLink className="nav-item nav-link" exact to="/materialui">MaterialUI</NavLink> 
                        <NavLink className="nav-item nav-link" exact to="/datagrid">DataGrid</NavLink> 
                        <NavLink className="nav-item nav-link" exact to="/reacttable">ReactTable</NavLink> 
                    </div>
                </div>
            </nav>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/relatorios" component={Relatorios} />
                    <Route path="/viaturas" component={Viaturas} />            
                    <Route path="/eventos" component={Eventos} />
                    <Route path="/geofences" component={Geofences} />
                    <Route path="/materialui" component={MaterialUI} />
                    <Route path="/datagrid" component={DataGrid} />
                    <Route path="/reacttable" component={ReactTable} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Navbar;