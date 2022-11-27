import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loader() {
  return (
    <div>
      <div className="profile-container">
        {
          Array.from({ length: 6 }).map((i,index) => (
            <div className='loader-list' key={index}>
              <span className='loader-img'><Skeleton circle={true} width={120} height={120} /></span>
              <h2 className='loader-title'><Skeleton /></h2>
              <p><Skeleton count={3} /></p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Loader;