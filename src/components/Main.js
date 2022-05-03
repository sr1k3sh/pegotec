import React from 'react';
import { useHistory} from 'react-router-dom';
export default function Main(props){
    const history = useHistory();
    const onLogin = (e) =>{
        e.preventDefault();
        history.push("/login");
        window.location.reload();
    }
    const onRegisterCompany = (e) =>{
        e.preventDefault();
        history.push('/registercompany');
        window.location.reload();
    }

    return(
        <React.Fragment>
           <div className="container">
                <div className="row">
                    <button onClick={onLogin} className="btn btn-primary">Login</button>
                    <button onClick={onRegisterCompany} className="btn btn-outline-secondary mt-3">Register Company</button>
                </div>
           </div>
        </React.Fragment>
    )
}