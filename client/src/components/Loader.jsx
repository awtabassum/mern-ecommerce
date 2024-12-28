import React from 'react'

function Loader() {
  return (
   <div className='mt-5'>
  <div className="spinner-border" role="status" style={{width: "100px", height: "100px"}}>
  <span className="sr-only" style={{color:"red"}}>Loading...</span>
</div>
</div>

    // <div className='mt-5' style={{width: "100px", height: "100px"}}>
    //     <div className='spinner-border mt-5' role='status'>
    //      <span className='sr-only'>Loading...</span>
    //     </div>
    // </div>

  )
}

export default Loader
/*
<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
*/
/*
<div class="spinner-border m-5" role="status">
  <span class="sr-only">Loading...</span>
</div>
*/