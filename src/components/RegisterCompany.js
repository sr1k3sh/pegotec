import React, { useState, useEffect} from 'react';
import { logout, useAuthDispatch } from '../context';

export default function RegisterCompany(){

    const [email,setEmail] = useState();
    const [company, setCompany] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [country, setCountry] = useState();
    const [dob, setDob] = useState();
    const [about, setAbout] = useState();
    const [data, setData] = useState([]);

    const dispatch = useAuthDispatch();

    const [gcountry, gsetCountry] = useState();

    useEffect(() => {
        var respon = fetch('https://restcountries.com/v3.1/all').then(res=>res.json());
    
        respon.then(res=>gsetCountry(res))
        return () => {
            
        }
    }, [])

    const onRegister = (e) =>{
        e.preventDefault(); 
        setData(prev=>[...prev,{email:email,company:company,address:address , phone:phone,country:country,dob:dob,about:about}]);
        e.target.reset();
    }

    const onRemove = (e) =>{
        e.preventDefault();
        setData(prev=>{
            return prev.filter((d,i)=>i!==parseInt(e.target.id));
        });
    }

    const onLogout = (e) =>{
        e.preventDefault();
        logout(dispatch);
        window.location.reload()
    }

    const getAge = (dateString) =>{
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const onDateofBirthChange = (e) =>{
        e.preventDefault();
        var born = new Date(e.target.value);
        setDob(getAge(born));
    }
    
    return(
        <React.Fragment>
            <div className='container-xl'>
                <div className='row'>
                    <h2 className='mb-5 text-center'>Register your <strong className='text-primary'>Company</strong></h2>
                    <form className='col-lg-3' onSubmit={onRegister} >
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Company Name</label>
                            <input className='form-control' name="cname" type="text" onChange={e=>setCompany(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Email</label>
                            <input className='form-control' name="email" type="text" onChange={e=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Address</label>
                            <input className='form-control' name="address" type="text" onChange={e=>setAddress(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Phone</label>
                            <input className='form-control' name="phone" type="text" onChange={e=>setPhone(e.target.value)}></input>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Country</label>
                            <select className='form-control' onChange={e=>setCountry(e.target.value)}>
                                <option>Select Country</option>
                                {
                                    gcountry?.length > 0 && gcountry.map((g,i)=><option key={"option_"+i} value={g.name.common}>{g.name.common}</option>)
                                }
                            </select>
                            {/* <input className='form-control' name="address" type="text" onChange={e=>setCountry(e.target.value)}></input> */}
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>Date of Birth</label>
                            <input className='form-control' name="dob" type="date" onChange={onDateofBirthChange}></input>
                        </div>
                        <div className="col-xl-12 mb-4">
                            <label className='form-label'>about yourself</label>
                            <textarea className='form-control' name="yourself" type="text" onChange={e=>setAbout(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                    <div className="col-lg-9">
                        <table>
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>Date of Birth</th>
                                    <th>About</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 && data.map((d,i)=>{
                                        return <tr key={i}>
                                            <td>{d.company}</td>
                                            <td>{d.email}</td>
                                            <td>{d.address}</td>
                                            <td>{d.phone}</td>
                                            <td>{d.country}</td>
                                            <td>{d.dob}</td>
                                            <td>{d.about}</td>
                                            <td><button id={i} className="btn btn-danger" onClick={onRemove}>Remove</button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <div>
                            <h3>Do you want to logout?</h3>
                            <button className="btn btn-outline-primary" onClick={onLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}