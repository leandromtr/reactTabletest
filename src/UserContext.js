import React, { useState, useFetch } from "react";

const UserContext = React.createContext({});

export default UserContext

//  const [data, loading] = useFetch(
//      "http://jsonplaceholder.typicode.com/users"
//     );


// export default () => {
//     return '0'
// };



// export default () => {
//     const data = useFetch("https://jsonplaceholder.typicode.com/todos");
//     return data
// }
