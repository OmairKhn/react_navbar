import React from 'react'

export default function product(props) {
  return (
    <div className='row'>
        <div className='col-6'>
            <h2>{props.product.name}</h2>

        </div>

    </div>
  )
}
