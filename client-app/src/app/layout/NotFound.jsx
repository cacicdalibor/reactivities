import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Segment placeholder>
			<Header icon>
				<h1> 404 </h1>
				<Icon name="search" />
				Oops - we've looked everywhere but couldn't find this.
			</Header>
			<Segment.Inline>
				<Button as={Link} to="/activities" primary>
					Return to activities page
				</Button>
			</Segment.Inline>
		</Segment>
	);
};

export default NotFound;
