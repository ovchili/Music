import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import Empty from '@/layouts/Empty/Empty';
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Empty />}>
			<Route index element={<Navigate to='/login' />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Route>,
	),
);
