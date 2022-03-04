import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ContactService from '../ApiCall/ContactService';
import validator from 'validator';

export default function Form() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [contacts,setContacts]=useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetContacts()
    }, [])
    const GetContacts = () => {
        ContactService.getAllContacts().then((response) => {
            setContacts(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const onSave = (e) => {
        e.preventDefault();
        const user = { name, number, email }
        ContactService.createContact(user).then((response) => {
            console.log(response.data)
            window.location.reload(false);
        }).catch(error => {
            console.log(error);
        })
    }

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email :)')
          setEmail(email)
        } else {
          setEmailError('Enter valid Email!')
        }
      }

    return (
        <div>
            <div style={{ marginLeft: 1300, marginTop: 10 }}>
                    <Link to="/" className="btn btn-success mb-2" style={{ marginRight: 10 }}  > Sign Out </Link>
                </div>
            <div>
                <br /><br />
                <div className="container ">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 hit " style={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
                            <h1>ADD CONTACT DETAILS</h1>
                            <div className="my-custom-scrollbar">
                                <form>

                                    <div className="form-group mb-2">
                                        <label className="form-label"> Name :</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Name"
                                            name="userName"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label"> Phone Number :</label>
                                        <input
                                            type="text"
                                            placeholder="Enter Phone Number"
                                            name="number"
                                            className="form-control"
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className="form-group mb-2">
                                        <label className="form-label"> Email :</label>
                                        <input
                                            type="email"
                                            placeholder="Enter Your Email"
                                            name="email"
                                            className="form-control"
                                            onChange={(e) => validateEmail(e)}
                                        >
                                        </input>
                                        <span style={{color: 'red'}}>{emailError}</span>
                                    </div>

                                    <button className="btn btn-success m-2" onClick={(e) => onSave(e)} >Submit </button>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <div>
                    <br /><br />
                    <div className="container h-100">
                        <div className="row">
                            <div className="card col-md-10" style={{ backgroundColor: "rgba(255,255,255,0.5)", marginLeft: 130, borderRadius: 20,marginBottom:30 }} >
                                <h2 className="text-center">Contact Details</h2>
                                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                    <table className="taskList">
                                        <thead>
                                            <th> Id </th>
                                            <th> Name</th>
                                            <th>  Phone Number</th>
                                            <th>  Email</th>
                                            <th style={{ paddingLeft: 35 }}></th>
                                        </thead>
                                        <tbody>
                                            {
                                                contacts.map(
                                                    conta =>
                                                        <tr key={conta.id}>
                                                            <td className='td'> {conta.id} </td>
                                                            <td className='td' style={{ width: 200 }}> {conta.name} </td>
                                                            <td className='td' style={{ width: 500 }}>{conta.number}</td>
                                                            <td className='td' style={{ width: 100 }}>{conta.email}</td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
