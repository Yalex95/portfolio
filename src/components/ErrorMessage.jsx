import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='row justify-content-center'>
        <div className="col-4">
            <img className="fill" src="./src/assets/images/face-sad-tear-regular.svg" alt="sad" />
            <p className='text-white mb-4 fs-4 text-center'>
                {message}
            </p>
            <input type='button' className='w-25 btn rounded btn-light text-uppercase w-25 m-auto text-center' value='OK'/>
        </div>
    
    </div>
  )
}

export default ErrorMessage