import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DataService from '../ApiCall/DataService';

export default function Login() {
    const [UserF, setUserF] = useState('');
    const [PassWordF, setPassWordF] = useState('');
    const [Users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetUserData()
    }, [])
    const GetUserData = () => {
        DataService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const onSignIn = () => {
        let x = Users.length-1
        Users.map((Users, index) => {
            console.log(index)
            if (Users.userName==UserF & Users.passWord==PassWordF) {
                navigate('/Form')
            }
            else {if (index==x & (Users.userName!=UserF || Users.passWord!=PassWordF)){
                alert("INCORRECT USERNAME OR PASSWORD!!!")}
            }
        })
    }

    const onSignUp = () => {
        navigate('/SignUp')
    }

    return (
        <div >
            <br /><br />
            <div className="container h-100">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor: "rgba(255,255,255,0.6)" }} >
                        <h1 style={{ fontSize: 40, fontFamily: 'MTimes New Roman', fontWeight: "bolder" }} ><b>LOGIN</b></h1>
                        <div className="card-body">
                            <form className="signup-form">
                                <div className="mb-3">
                                    <label for="exampleDropdownFormEmail2" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail2" onChange={e => setUserF(e.target.value)} placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleDropdownFormPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" onChange={e => setPassWordF(e.target.value)} placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                                        <label className="form-check-label" for="dropdownCheck2">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary m-2" onClick={onSignIn}>Sign in</button>
                                <button type="button" className="btn btn-primary" onClick={onSignUp}>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
