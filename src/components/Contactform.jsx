import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export const Contactform = (props) => {

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        phoneNumber: yup.number().positive().required()
    })

    const { register, handleSubmit, formState :{errors, isValid, isSubmitting, isSubmitSuccessful,}, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
        props.addContact(data)
        // props.showModal()
    }

    useEffect(() => {
        if(isSubmitSuccessful){
            reset()
        }
    }, [isSubmitSuccessful, reset])
  return (
    <div className={props.clicked ? 'visible' : 'hidden'}>
        <div 
            className={`${props.clicked ? 'visible' : 'hidden'} bg-black bg-opacity-20 absolute left-0 top-0 w-full h-screen`}
            onClick={() => props.setShowModal(!props.showModal)}
        ></div>
        <div className={`${props.clicked ? 'visible' : 'hidden'} z-10 bg-slate-50 rounded-md py-4 px-3 w-4/5 mx-auto absolute left-0 right-0 top-1/2 -translate-y-1/2`}>
            <h1 className='text-center border-b border-blue-400 py-3'>ADD CONTACT</h1>
            <form className='my-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col my-5'>
                    <label>First Name</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text' 
                        placeholder='Enter Your First Name Here' 
                        {...register('firstName')}
                    />
                </div>
                <div className='flex flex-col my-5'>
                    <label>Last Name</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text' 
                        placeholder='Enter Your Last Name Here' 
                        {...register('lastName')}
                    />
                </div>
                <div className='flex flex-col my-5'>
                    <label>Email Address</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text' 
                        placeholder='Enter Your Email Address Here' 
                        {...register('email')}
                    />
                </div>
                <div className='flex flex-col my-5'>
                    <label>Phone Number</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text' 
                        placeholder='Enter Your Phone Number Here' 
                        {...register('phoneNumber')}
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <button
                        onClick={() => props.setClicked(!props.clicked)}
                        className='mx-auto bg-slate-300 rounded-md p-3 w-2/5'
                    >Cancel</button>
                    <button 
                        onClick={() => props.setClicked(!props.clicked)}
                        disabled={!isValid || isSubmitting} 
                        className='mx-auto bg-blue-800 rounded-md p-3 w-2/5'
                    >Add Contact</button>
                </div>
            </form>
        </div>
    </div>
  )
}
