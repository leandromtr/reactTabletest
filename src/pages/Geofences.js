// import React from 'react'

// export default function Geofences() {
//     return (
//         <div className="container">
//             <div className="row">
//                 <br/>
//                     Geofences
//                 <br/>
//             </div>
//         </div>
//     )
// }


import React from "react";
import { useFetch } from "./hooks";
function Photos() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  return (
    <>
      <h1>Photos</h1>
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
                {title} - {url}
              {/* <img alt={title} src={url} /> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos;