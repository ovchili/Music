import { FC } from 'react';

import { Input, InputContainer } from '../Input.styled';

type TextProps = {
	placeholder: string;
};

const TextField: FC<TextProps> = ({ placeholder }) => {
	return (
		<InputContainer>
			<Input placeholder={placeholder} />
		</InputContainer>
	);
};
export default TextField;
