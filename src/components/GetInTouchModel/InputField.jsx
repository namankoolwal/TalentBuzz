/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const InputField = (props) => {
    // console.log(props)
    const { value, handleChange,type ,name , placeholder  } = props;
    return (
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className='bg-gray-100 outline-none border md:border-2 border-gray-300 focus:border-gray-400  rounded-md py-1.5 px-3 placeholder-gray-500 text-sm'
                // required
                autoComplete='on'
            />
    )
}

export default InputField
