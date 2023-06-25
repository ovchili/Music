import { RouterProvider } from 'react-router-dom';

import Global from './App.styled';
import { router } from '@/routers/router';

const App = () => {
	return (
		<>
			<Global />

			<RouterProvider router={router} />
		</>
	);
};

export default App;
