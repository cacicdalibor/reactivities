import React, { useContext } from 'react';
import { Menu, Container, Button, Dropdown, Image } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import { RootStoreContext } from '../../app/stores/rootStore';

const NavBar: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const { user, logout } = rootStore.userStore;

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
				{user && (
					<Menu.Item position='right'>
						<Image avatar spaced='right' src={user.image || '/assets/user.png'} />
						<Dropdown pointing='top left' text='user'>
							<Dropdown.Menu>
								<Dropdown.Item as={Link} to={`/profile/username`} text='My profile' icon='user' />
								<Dropdown.Item onClick={logout} text='Logout' icon='power' />
							</Dropdown.Menu>
						</Dropdown>
					</Menu.Item>
				)}
			</Container>
		</Menu>
	);
};

export default NavBar;
