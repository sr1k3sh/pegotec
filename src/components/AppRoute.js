import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../context/Context';

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
	const userDetails = useAuthState();
	return (
		<Route
			path={path}
			exact
			render={(props) =>
				isPrivate && !userDetails.token && !Boolean(userDetails.token) ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
					<Component {...props} />
				)
			}
			{...rest}
		/>
	);
};

export default AppRoutes;
