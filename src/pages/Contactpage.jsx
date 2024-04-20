import { faContactBook } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Contactform } from '../components/Contactform'
import { Contactlist } from '../components/Contactlist'
import { Editcontact } from '../components/Editcontact'

export const Contactpage = (props) => {
    const [contacts, setContacts] = useState([])
    const [newContacts, setNewContacts] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [clicked, setClicked] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [details, setDetails] = useState()
    const [showModal, setShowModal] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [ deleteA, setDeleteA ] = useState(false)
    console.log(showDelete)


    const showModa = () => {
        if(clicked){
            setClicked(!clicked)
        }else{
            setClicked(!clicked)
        }
    }

    const addContact = ({firstName, lastName, email, phoneNumber}) => {
        setContacts([...contacts, {id: Math.trunc(Math.random() * 1000), firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber}])
    }

    const deleteContact = (id) => {
        const deletedCont = contacts.filter(contact => contact.id !== id)
        setContacts(deletedCont)
    }

    const showDetail = (id) => {
        const detail = contacts.find(contact => contact.id === id)
        setDetails(detail)
    }

    const EditContact = (firstName, lastName, email, phoneNo, id) => {
        const newEdit = contacts.map(contact => contact.id === id ? {...contact, firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNo} : contact)
        setContacts(newEdit)
    }

    const search = contacts.filter(contact => {
        return contact.firstName.toLowerCase().includes(searchValue.toLowerCase())
    })

    const deleteAll = () => {
        setContacts(newContacts)
        setDeleteA(!deleteA)
    }

    const checkboxHandler = (e) => {
        const {name, checked } = e.target
        if (name === 'allselect'){
            let tempUser = contacts.map(contact => {return {...contact, isChecked: checked}})
            setContacts(tempUser)
        }else if(deleteA === true){
            let tempUser = contacts.map(contact => {return {...contact, isChecked: !checked}})
            setContacts(tempUser)
        }
    }

  return (
    <div className='my-7 w-full'>
        <div className='flex w-4/5 mx-auto'>
            <FontAwesomeIcon className='text-5xl text-blue-800' icon={faContactBook}/>
            <div className='mx-2'> 
                <h1 className='font-bold'>CONTACTS</h1>
                <p>Welcome To Lorem Phonebook</p>
            </div>
        </div>
        <div className='w-4/5 mx-auto flex flex-col mt-4 md:flex-row'>
            <input 
                type='text' 
                className='bg-gray-200 w-full outline-none rounded-md px-3 py-2 md:w-[40%] md:px-3'
                value={searchValue} 
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className='flex my-3 justify-between'>
                <button
                    className='bg-blue-800 px-3 py-2 rounded-md w-[45%] md:w-full md:py-2 md:px-2 md:mx-2'
                    onClick={showModa}
                >Add Contact</button>
                <button
                    onClick={deleteAll}
                    className={`${showDelete ? 'visible' : 'hidden'} bg-blue-800 px-3 py-2 rounded-md w-[45%] md:w-full md:py-2 md:px-2 md:mx-2`}
                >Delete All</button>
            </div>
        </div>
        
        <Contactform clicked={clicked} setClicked={setClicked} addContact={addContact} />

        <div className='w-full mt-4'>
            <div className='grid grid-cols-5 w-[90%] gap-16 text-left mx-auto text-2xl'>
                <input 
                    type='checkbox'
                    className='w-[100%] md:w-4'
                    name='allselect'
                    onClick={() => setShowDelete(!showDelete)}
                    onChange={checkboxHandler}
                />
                <h1 className='text-sm'>FULLNAME</h1>
                <h1 className='text-sm'>EMAIL</h1>
                <h1 className='text-sm'>PHONE</h1>
            </div>
            {
                search.map(contact => {
                    const editContact = <Editcontact showEdit={showEdit} setShowEdit={setShowEdit} showModal={showModal} setShowModal={setShowModal} EditContact={EditContact} id={contact.id} firstName={contact.firstName} lastName={contact.lastName} email={contact.email} phoneNumber={contact.phoneNumber}/>
                    return(
                        <div key={contact.id} className='grid grid-cols-5 w-[90%] gap-16 text-left mx-auto items-center'>
                            <input 
                                type='checkbox'
                                className='w-[100%] md:w-4'
                                name={contact.id}
                                checked={contact.isChecked || false}
                                onChange={checkboxHandler}
                            />
                            <Contactlist 
                                id={contact.id} 
                                firstName={contact.firstName} 
                                lastName={contact.lastName}
                                email={contact.email}
                                phoneNumber={contact.phoneNumber}
                                deleteContact={deleteContact}
                                showDetail={showDetail}
                                details={details}
                                editContact={editContact}
                                showModal={showModal}
                                setShowModal={setShowModal}
                                showEdit={showEdit}
                                checkboxHandler={checkboxHandler}
                            />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
