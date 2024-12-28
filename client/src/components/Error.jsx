import React from "react";

function Error({ error }) {
  return (
    <div className="text-center mt-5">
      <div className="alert alert-danger" role="alert">
        {error || "An unexpected error occurred!"}
      </div>
    </div>
  );
}

export default Error;


// import React from 'react'

// function Error({error}) {
//   return (
//     <div>
//         <div className='alert alert-danger' role='alert'>
//           {error}
//         </div>
//     </div>
//   )
// }

// export default Error