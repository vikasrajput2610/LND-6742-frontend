import React, { useContext } from 'react'
import { Context } from '.././index'

const Sucess = () => {
    const {flag}=useContext(Context)
  return (
    <div>
        <h1 className='text-center mt-96 text-5xl font-bold'>
           {
            flag?"Registration Success":"Login Success"
           }
        </h1>
    </div>
  )
}

export default Sucess