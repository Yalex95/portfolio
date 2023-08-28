import React from 'react'

const ErrorMessage = ({message}) => {
  
  return (
    <div className='row justify-content-center'>
        <div className="col-4">
            <img className="fill" src="./src/assets/images/face-sad-tear-regular.svg" alt="sad" />
            <p className='text-white mb-4 fs-4 text-center'>
                {message}
            </p>
        </div>
    
    </div>
  )
}

export default ErrorMessage