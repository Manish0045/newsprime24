import React from 'react'
import loading from './Skateboarding.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img className='my-4' src={loading} alt="Loading" />
      </div>
    )
}

export default Spinner;