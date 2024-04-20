import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export const Contactlist = (props) => {
    // const handleChange = (e) => {
    //     const { name, checked } = e.target;
    //     props.checkboxHandler(name, checked)
    // }


  return (
    <>
        
        <h1
            onClick={() => {
                props.showDetail(props.id)
                props.setShowModal(!props.showModal)
            }}
            className='overflow-hidden w-[300%] cursor-pointer flex flex-col'
        ><span>{props.firstName}</span>
            <span>{props.lastName}</span>
        </h1>
        <h1
            onClick={() => {
                props.showDetail(props.id)
                props.setShowModal(!props.showModal)
            }}
            className='overflow-hidden w-[300%] cursor-pointer flex flex-col'
        >{props.email}</h1>
        <h1
            onClick={() => {
                props.showDetail(props.id)
                props.setShowModal(!props.showModal)
            }}
            className='overflow-hidden w-[300%] cursor-pointer flex flex-col'
        >{props.phoneNumber}</h1>
        <FontAwesomeIcon
        className='cursor-pointer'
            onClick={() => props.deleteContact(props.id)}
            icon={faTrash} 
        />

        <div 
            className={`${props.showModal ? 'visible' : 'hidden'} rounded shadow-lg absolute w-4/5 px-8 py-9 bg-slate-50 top-1/2 -translate-y-1/2 left-0 right-0 mx-auto`}
        >
            <h1 className='border-b border-gray-300 my-7'>{props?.details?.firstName}</h1>
            <h1 className='border-b border-gray-300 my-7'>{props?.details?.lastName}</h1>
            <h1 className='border-b border-gray-300 my-7'>{props?.details?.email}</h1>
            <h1 className='border-b border-gray-300 my-7'>{props?.details?.phoneNumber}</h1>

            <div className='flex items-center justify-center my-4'>
                <button
                    className='rounded shadow-lg bg-slate-400 mx-5 px-3 py-2 w-[30%]'
                    onClick={() => props.setShowModal(!props.showModal)}
                >CANCEL</button>
                {props.editContact}
            </div>
        </div>
    </>
  )
}
