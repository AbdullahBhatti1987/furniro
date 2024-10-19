import React from 'react'

function Heading({text}) {
  return (
    <div className='w-full py-6'>
        <h1 className='text-3xl font-bold text-center'>{text}</h1>
    </div>
  )
}

export default Heading