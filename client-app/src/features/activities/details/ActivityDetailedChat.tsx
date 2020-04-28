import React, { Fragment } from 'react';
import { Segment, Header, Comment, Form, Button } from 'semantic-ui-react';

const ActivityDetailedChat = () => {
	return (
		<Fragment>
			<Segment
				textAlign="center"
				attached="top"
				inverted
				color="teal"
				style={{ border: 'none' }}
			>
				<Header>Chat about this event</Header>
			</Segment>
			<Segment attached>
				<Comment.Group>
					<Comment>
						<Comment.Author src="/assets/user.png" />
						<Comment.Content>
							<Comment.Author as="a">Matt</Comment.Author>
							<Comment.Metadata>
								<div>{'Today at 5:42PM'}</div>
							</Comment.Metadata>
							<Comment.Text>How artistic!</Comment.Text>
							<Comment.Actions>
								<Comment.Action>Replay</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>

					<Comment>
						<Comment.Author src="/assets/user.png" />
						<Comment.Content>
							<Comment.Author as="a">Joe Handerson</Comment.Author>
							<Comment.Metadata>
								<div>{'5 days ago'}</div>
							</Comment.Metadata>
							<Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
							<Comment.Actions>
								<Comment.Action>Replay</Comment.Action>
							</Comment.Actions>
						</Comment.Content>
					</Comment>

					<Form replay='true'>
						<Form.TextArea />
						<Button
							content="Add Replay"
							labelPosition="left"
							icon="edit"
							primary
						/>
					</Form>
				</Comment.Group>
			</Segment>
		</Fragment>
	);
};

export default ActivityDetailedChat;
