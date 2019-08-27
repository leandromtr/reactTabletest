import React, { useState, useEffect } from "react";


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
const {data,loading} = useFetch("http://jsonplaceholder.typicode.com/users/1");

  return (
     <div>
       {loading ? <div>Loading...</div> :

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="col p-4 d-flex flex-column position-static">
              <p className="mb-1"><b>Name: </b>{data.name}</p>
              <p className="mb-1"><b>sUserName: </b>{data.username}</p>
              <p className="mb-1"><b>sDomain: </b>{data.email}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col p-4 d-flex flex-column position-static">
              <p className="mb-1"><b>iEmployeeId: </b>{data.id}</p>
              <p className="mb-1"><b>iCaddbmCommandAccess: </b>{data.id}</p>
              <p className="mb-1"><b>iCadCommandAccess: </b>{data.zipcode}</p>
            </div>
          </div>
        </div> 
       }       
      {console.log({data})}
    </div>
  )
}

export default App;




