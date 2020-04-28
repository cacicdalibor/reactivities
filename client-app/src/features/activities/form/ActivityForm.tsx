import React, { useState, FormEvent, useContext, useEffect } from 'react';
import { Segment, Form, Button, Grid } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router-dom';

interface DetailParams {
	id: string;
}

const ActivityForm: React.FC<RouteComponentProps<DetailParams>> = ({
	match,
	history,
}) => {
	const activityStore = useContext(ActivityStore);
	const {
		createActivity,
		editActivity,
		submitting,
		loadActivity,
		activity: initialFormState,
		clearActivity,
	} = activityStore;

	const [activity, setActivity] = useState<IActivity>({
		id: '',
		title: '',
		description: '',
		category: '',
		date: '',
		city: '',
		venue: '',
	});

	useEffect(() => {
		if (match.params.id && activity.id.length === 0) {
			loadActivity(match.params.id).then(
				() => initialFormState && setActivity(initialFormState)
			);
		}
		return () => {
			clearActivity();
		};
	}, [
		loadActivity,
		initialFormState,
		match.params.id,
		clearActivity,
		activity.id.length,
	]);

	const handleImputChange = (
		event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.currentTarget;
		setActivity({ ...activity, [name]: value });
	};

	const handleSubmit = () => {
		if (activity.id.length === 0) {
			let newActivity = {
				...activity,
				id: uuid(),
			};
			createActivity(newActivity).then(() =>
				history.push(`/activities/${newActivity.id}`)
			);
		} else {
			editActivity(activity);
			//.then(() => history.push(`/activities/${activity.id}`));
		}
	};

	return (
		<Grid>
			<Grid.Column width={10}>
				<Segment clearing>
					<Form onSubmit={handleSubmit}>
						<Form.Input
							placeholder="Title"
							name="title"
							onChange={handleImputChange}
							value={activity.title}
						/>
						<Form.TextArea
							rows={2}
							placeholder="Description"
							onChange={handleImputChange}
							name="description"
							value={activity.description}
						/>
						<Form.Input
							placeholder="Category"
							name="category"
							onChange={handleImputChange}
							value={activity.category}
						/>
						<Form.Input
							placeholder="Date"
							type="datetime-local"
							name="date"
							onChange={handleImputChange}
							value={activity.date}
						/>
						<Form.Input
							placeholder="City"
							name="city"
							onChange={handleImputChange}
							value={activity.city}
						/>
						<Form.Input
							placeholder="Venue"
							name="venue"
							onChange={handleImputChange}
							value={activity.venue}
						/>
						<Button
							loading={submitting}
							floated="right"
							positive
							type="submit"
							content="Submit"
						/>
						<Button
							onClick={() => history.push('/activities')}
							floated="right"
							type="button"
							content="Cancel"
						/>
					</Form>
				</Segment>
			</Grid.Column>
		</Grid>
	);
};

export default observer(ActivityForm);
