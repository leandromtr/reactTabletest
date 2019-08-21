import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import { useFetch } from "../pages/hooks";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return {loading,data};
};

function App() {

  const {data,loading} = useFetch("https://jsonplaceholder.typicode.com/todos/1");
  //const {data,loading} = useFetch("http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetDGroup")
  //const {data,loading} = useFetch("http://lis-sgiv-smsiap/IPT_FLeet_RestApi/api/GetVehicle?Fields=CADVehicleId;CADUnitId;CADUnitId;ViaMATRICULA;SBOXID")
  //const aaa = JSON.parse(data).lstDGroupData;

  //{console.log(JSON.parse(data))}
  // {console.log(JSON.parse(JSON.stringify(questionGlobal)))}

  return (
     <div>
       {loading ? <div>Loading...</div> :

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="col p-4 d-flex flex-column position-static">
              <p className="mb-1"><b>Name: </b>{data.id}</p>
              <p className="mb-1"><b>sUserName: </b>{data.id}</p>
              <p className="mb-1"><b>sDomain: </b>{data.id}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col p-4 d-flex flex-column position-static">
              <p className="mb-1"><b>iEmployeeId: </b>{data.id}</p>
              <p className="mb-1"><b>iCaddbmCommandAccess: </b>{data.id}</p>
              <p className="mb-1"><b>iCadCommandAccess: </b>{data.id}</p>
            </div>
          </div>
        </div> 
       }       
      {console.log({data})}
    </div>
  )
}

export default App;




