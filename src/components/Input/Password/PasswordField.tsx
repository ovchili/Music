import { FC, useState } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

import { Input, InputContainer } from '../Input.styled';

import { IconContainer } from './Password.styled';

type PasswordProps = {
	placeholder: string;
};

const Password: FC<PasswordProps> = ({ placeholder }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	return (
		<InputContainer>
			<Input type={isVisible ? 'text' : 'password'} placeholder={placeholder} />
			<IconContainer
				onClick={() => {
					setIsVisible((prev) => !prev);
				}}
			>
				{isVisible ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
			</IconContainer>
		</InputContainer>
	);
};
export default Password;
