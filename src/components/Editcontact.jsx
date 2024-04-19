import React, { useEffect, useState } from 'react'

export const Editcontact = (props) => {
    const [firstName, setFirstName] = useState(props.firstName)
    const [lastName, setLastName] = useState(props.lastName)
    const [email, setEmail] = useState(props.email)
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
    
    console.log(props.id)
    const handleSubmit = (e) => {
        e.preventDefault() 
        const phoneNo = Number(phoneNumber)       
        // console.log(data)
        console.log(firstName, lastName, email, phoneNo, props.id)
        props.EditContact(firstName, lastName, email, phoneNo, props.id)
    }

    const handleClick = () => {
        props.setShowEdit(!props.showEdit)
    }

    console.log(props.showModal)

  return (
    <div>
        <h1 
            className='bg-blue-600 rounded shadow-lg mx-5 px-12 py-2 w-[100%] text-center cursor-pointer'
            onClick={handleClick}
        >EDIT</h1>
        <div className={`${props.showEdit ? 'visible' : 'hidden'} bg-slate-50 rounded-md py-4 px-3 w-4/5 mx-auto absolute left-0 right-0 top-1/2 -translate-y-1/2`}>
            <h1 className='text-center border-b border-blue-400 py-3'>EDIT CONTACT</h1>
            <form className='my-4' onSubmit={handleSubmit}>
                <div className='flex flex-col my-5'>
                    <label>First Name</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text' 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Enter Your First Name Here' 
                    />
                </div>
                <div className='flex flex-col my-5'>
                    <label>Last Name</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Enter Your Last Name Here' 
                    />
                </div>
                <div className='flex flex-col my-5'>
                    <label>Email Address</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email Address Here' 
                    />
                </div>
                <div className='flex flex-col my-5'>
                    <label>Phone Number</label>
                    <input 
                        className='rounded-md p-2 outline-none' 
                        type='text' 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='Enter Your Phone Number Here' 
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <button
                        onClick={() => props.setShowEdit(!props.showEdit)}
                        className='mx-auto bg-slate-300 rounded-md p-3 w-2/5'
                    >Cancel</button>
                    <button 
                        onClick={() => props.setShowEdit(!props.showEdit)}
                        className='mx-auto bg-blue-800 rounded-md p-3 w-2/5'
                    >Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}
