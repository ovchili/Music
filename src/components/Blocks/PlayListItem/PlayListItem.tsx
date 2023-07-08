import { timer } from 'helpers/helper';
import { FC } from 'react';
import { TbMusic } from 'react-icons/tb';

import { Track } from '@/types/tracks.types';

import {
	Column,
	ColumnSecondary,
	IconContainer,
	IconHeart,
	IconPlay,
	Item,
} from './PlayListItem.styled';

type Props = {
	data: Track;
};

const PlayListItem: FC<Props> = ({ data }) => {
	return (
		<Item>
			<Column>
				<IconContainer>
					<TbMusic />
					<IconPlay />
				</IconContainer>
				{data.name}
			</Column>
			<Column>{data.author}</Column>
			<ColumnSecondary>{data.album}</ColumnSecondary>
			<ColumnSecondary>
				<IconHeart />
				{timer(data.time)}
			</ColumnSecondary>
		</Item>
	);
};
export default PlayListItem;
