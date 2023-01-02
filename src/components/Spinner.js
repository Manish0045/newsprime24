import React, { Component } from 'react'
import loading from './Skateboarding.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-4' src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
