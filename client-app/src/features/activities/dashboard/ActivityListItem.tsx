import React from 'react';
import { Item, Button, Segment, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { IActivity } from '../../../app/models/activity';
import { format } from 'date-fns';
import ActivityListItemAttendee from './ActivityListItemAttendee';

interface IProps {
	activity: IActivity;
}

const ActivityListItem: React.FC<IProps> = ({ activity }) => {
	const host = activity.attendees.filter(x => x.isHost)[0];
	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item key={activity.id}>
						<Item.Image size="tiny" circular src={host.image || '/assets/user.png'} />
						<Item.Content>
							<Item.Header as={Link} to={`/activities/${activity.id}`}>{activity.title}</Item.Header>
							<Item.Description>Hosted by {host.displayName}</Item.Description>
							{activity.isHost && (
								<Item.Description>
									<Label basic color='orange' content='You are hosting this activity!'></Label>
								</Item.Description>
							)}
							{activity.isGoing && !activity.isHost && (
								<Item.Description>
									<Label basic color='green' content='You are going to this activity!'></Label>
								</Item.Description>
							)}


						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<Icon name="clock" /> {format(activity.date, 'h:mm a')}
				<Icon name="marker" /> {activity.venue}, {activity.city}
			</Segment>
			<Segment secondary>
				{activity.attendees && (
					<ActivityListItemAttendee attendees={activity.attendees} />
				)}
			</Segment>
			<Segment clearing>
				<span>{activity.description}</span>
				<Button
					as={Link}
					to={`/activities/${activity.id}`}
					floated="right"
					content="View"
					color="blue"
				/>
			</Segment>
		</Segment.Group>
	);
};

export default observer(ActivityListItem);
