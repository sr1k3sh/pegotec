import jwt_decode from "jwt-decode";
let user = localStorage.getItem('currentUser')
	? localStorage.getItem('currentUser')
	: '';
let token = localStorage.getItem('jwtToken')
	? localStorage.getItem('jwtToken')
	: '';
let id = localStorage.getItem('jwtToken')
	? jwt_decode(localStorage.getItem('jwtToken')).id
	: '';


export const initialState = {
	user: '' || user,
	token: '' || token,
	userId:'' || id,
	loading: false,
	errorMessage: null
};

export const AuthReducer = (initialState, action) => {
	switch (action.type) {
		case 'REQUEST_LOGIN':
			return {
				...initialState,
				loading: true,
			};
		case 'LOGIN_SUCCESS':
            {   
                return {
                    ...initialState,
                    user: jwt_decode(action.payload).name,
					userId:jwt_decode(action.payload).id,
                    token: action.payload,
                    loading: false,
                };
            }
		case 'LOGOUT':
			return {
				...initialState,
				user: '',
				token: '',
			};

		case 'LOGIN_ERROR':
			return {
				...initialState,
				loading: false,
				errorMessage: action.error,
			};

		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
