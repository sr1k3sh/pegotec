import React from 'react';
import {Link} from 'react-router-dom';
export default function Main(props){
    return(
        <React.Fragment>
           <div>
               <Link to="/login">Login</Link>
           </div>
        </React.Fragment>
    )
}