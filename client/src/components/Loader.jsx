import React from 'react'

function Loader() {
  return (
    <div className='mt-5' style={{size:'100px', height:'100px'}}>
        <div className='spinner-border mt-5' role='status'>
         <span className='sr-only'>Loading...</span>
        </div>
    </div>
  )
}

export default Loader