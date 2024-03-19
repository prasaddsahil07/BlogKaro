import React, {useId} from 'react'

 // input field is an individual component but we need   its reference in the form so that is when forward refernce is used.

const Input = React.forwardRef(function Input({                   // callback
    label,
    type = "text",
    className = "",
    ...props
}, ref){                                    // it'll forward reference to other components
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}                           // it gives reference to it's parent
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input