import { tracks } from 'data/tracks';
import { TbClockHour9 } from 'react-icons/tb';

import PlayListItem from '../PlayListItem/PlayListItem';

import {
	PlayListColumn,
	PlayListContainer,
	PlayListHeader,
	PlayListMain,
} from './PlayList.styled';

const PlayList = () => {
	return (
		<PlayListContainer>
			<PlayListHeader>
				<PlayListColumn>Трек</PlayListColumn>
				<PlayListColumn>Исполнитель</PlayListColumn>
				<PlayListColumn>Альбом</PlayListColumn>
				<PlayListColumn>
					<TbClockHour9 />
				</PlayListColumn>
			</PlayListHeader>

			<PlayListMain>
				{tracks.map((item) => (
					<PlayListItem data={item} />
				))}
			</PlayListMain>
		</PlayListContainer>
	);
};
export default PlayList;
