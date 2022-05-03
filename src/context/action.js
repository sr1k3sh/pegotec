import axios from 'axios';
import { setAuthToken } from '../utils/Utils';

export async function loginUser(dispatch, loginPayload) {

    const datas = {
        email: loginPayload.email,
        password: loginPayload.password
    }

    const headers = {
        "Authorization": `Bearer rikesh`
    }

	try {
		dispatch({ type: 'REQUEST_LOGIN' });

        let response = await axios.post("https://api.framework.pegotec.dev/api/auth/login",datas,headers).then(res=>{
            const {access_token} = res.data;

            localStorage.setItem("jwtToken", access_token);
            // Set token to Auth header

            setAuthToken(access_token);

            if(access_token.token){
                dispatch({ type: 'LOGIN_SUCCESS', payload: access_token });
                localStorage.setItem('currentUser', 'rikesh');
			    return access_token;
            }
        }).catch(err=>{
            dispatch({ type: 'LOGIN_ERROR', error: err.response.data });
        });
		return response;
	} 
    catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error.response.data });
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
    localStorage.removeItem("jwtToken");
}