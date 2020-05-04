import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item
					header
					as={NavLink}
					to="/"
					exact
					style={{ borderLeft: '1px solid #ffffff14' }}
				>
					<img
						src="/assets/logo.png"
						alt="logo"
						style={{ marginRight: '10px' }}
					/>
					Reactivities
				</Menu.Item>
				<Menu.Item name="Activities" as={NavLink} to="/activities" />
				<Menu.Item>
					<Button
						as={NavLink}
						to="/createActivity"
						positive
						content="Create Activity"
					/>
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default NavBar;
