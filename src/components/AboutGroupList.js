import React from "react";
import { useFetch } from "../services/hooks";


export default function AboutGroupList() {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="my-3 p-3 bg-white rounded box-shadow">
          <h6 className="border-bottom border-gray pb-2 mb-0">Groups</h6>        
          {data.map(({ id, title, url }) => (
            <div key={id} className="media text-muted pt-2">
            <p className="media-body pb-2 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">{id}</strong>
            {title}
          </p>
          </div>

          ))}
        </div>
      )}
    </>
  );
}