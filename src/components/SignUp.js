import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import DataService from '../ApiCall/DataService';
import validator from 'validator';

export default function SignUp(){

    const [userName,setUser]=useState('');
    const [passWord,setPass]=useState('')
    const [secretCode,setSecret]=useState('')
    const navigate = useNavigate();


    const onSave = (e) => {
        e.preventDefault();

        const user = { userName, passWord,secretCode }
        DataService.createUser(user).then((response) => {
            console.log(response.data)
            navigate('/')
        }).catch(error => {
            console.log(error);
        })
    }

    const onCancel = () => {
        navigate('/')
    }

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email :)')
          setUser(email)
        } else {
          setEmailError('Enter valid Email!')
        }
      }
  
    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 hit" style={{ backgroundColor: "rgba(255,255,255,0.8)" }}>
                        <h1>Create Account</h1>
                        <div className="my-custom-scrollbar">
                            <form>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        name="userName"
                                        className="form-control"
                                        onChange={(e) => validateEmail(e)}
                                    >
                                    </input>
                                    <span style={{color: 'red'}}>{emailError}</span>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Password :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter password"
                                        name="passWord"
                                        className="form-control"
                                        value={passWord}
                                        onChange={(e) => setPass(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Secret Code :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Secret Code"
                                        name="secretCode"
                                        className="form-control"
                                        value={secretCode}
                                        onChange={(e) => setSecret(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success m-2" onClick={(e) => onSave(e)} >Submit </button>
                                <button className="btn btn-danger" onClick={onCancel}> Cancel </button>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
