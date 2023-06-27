import { Button } from '@/components/Button/Button.styled';
import Password from '@/components/Input/Password/PasswordField';
import TextField from '@/components/Input/TextField/TextField';

import logo from '@/assets/images/logo.png';

import {
	ButtonContainer,
	RegisterContainer,
	RegisterForm,
	RegisterImg,
} from './Register.styled';

const Register = () => {
	return (
		<RegisterForm>
			<RegisterImg draggable={false} src={logo} />
			<RegisterContainer>
				<TextField placeholder='Логин' />
				<Password placeholder='Пароль' />
				<Password placeholder='Повторите пароль' />
			</RegisterContainer>
			<ButtonContainer>
				<Button $primary>Зарегистрироваться</Button>
			</ButtonContainer>
		</RegisterForm>
	);
};
export default Register;
