import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button/Button.styled';
import Password from '@/components/Input/Password/PasswordField';
import TextField from '@/components/Input/TextField/TextField';

import logo from '@/assets/images/logo.svg';

import {
	ButtonContainer,
	LoginContainer,
	LoginForm,
	LoginImg,
} from './Login,styled';

const Login = () => {
	const nav = useNavigate();
	return (
		<LoginForm>
			<LoginImg draggable={false} src={logo} />
			<LoginContainer>
				<TextField placeholder='Логин' />
				<Password placeholder='Пароль' />
			</LoginContainer>
			<ButtonContainer>
				<Button primary>Войти</Button>
				<Button
					onClick={() => {
						nav('/register');
					}}
				>
					Зарегистрироваться
				</Button>
			</ButtonContainer>
		</LoginForm>
	);
};
export default Login;
