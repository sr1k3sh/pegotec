import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { loginUser } from '../context/action';
import { useAuthDispatch, useAuthState } from '../context';
export default function Login(props){

    const dispatch = useAuthDispatch();
    const history = useHistory();
    const userDetails = useAuthState();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {errorMessage} = userDetails;

    useEffect(() => {
        if(userDetails.token){
            history.push('/registercompany');
        }
        return () => {
        
        }
    }, [history,userDetails]);
     
    const onLogin = async(e) =>{
        e.preventDefault();
        try {
			await loginUser(dispatch, {
                email:email,
                password:password
            });

			history.push('/registercompany');
            window.location.reload();

		} catch (error) {
			console.log(error);
		}
    }

    return(
        <React.Fragment>
            <div className='bd-auth container-xl'>
                <div className='row'>
                    <form className='bd-auth__form col-md-5 m-auto' onSubmit={onLogin}>
                        <h2 className='mb-5'>Login to you <strong className='text-primary'>Account</strong></h2>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Email</label>
                            <input className={errorMessage?.email?"form-control is-invalid":"form-control"} name="email" type="text" onChange={e=>setEmail(e.target.value)}></input>
                            {
                                errorMessage?.email && <div className="invalid-feedback">
                                    {errorMessage?.email}
                                </div>
                            }
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Password</label>
                            <input className={errorMessage?.password?"form-control is-invalid":"form-control"} name="password" type='password' onChange={e=>setPassword(e.target.value)}></input>
                            {
                                errorMessage?.password && <div className="invalid-feedback">
                                    {errorMessage?.password}
                                </div>
                            }
                        </div>
                        <div className="col-xl-12 mb-4">
                            <button type='submit' className='btn btn-outline-primary w-100'>login</button>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <span>Don't have a account? </span>
                            <Link to="/register">Register Now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}