import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import { Empty } from '../layouts';

import Private from '@/layouts/Private/Private';
import Favorites from '@/pages/Favorites/Favorites';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';

const isAuth = true;

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			<Route
				index
				element={isAuth ? <Navigate to='/home' /> : <Navigate to='/login' />}
			/>
			<Route element={<Private />}>
				<Route path='/home' element={<Home />} />
				<Route path='/favorites' element={<Favorites />} />
			</Route>
			<Route element={<Empty />}>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>
		</Route>,
	),
);
