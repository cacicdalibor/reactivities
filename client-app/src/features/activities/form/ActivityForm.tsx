import React, { useState, FormEvent, useContext } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';

interface IProps {
	activity: IActivity;
}

export const ActivityForm: React.FC<IProps> = ({
	activity: initialFormState,
}) => {
	const activityStore = useContext(ActivityStore);
	const {
		createActivity,
		editActivity,
		submitting,
		cancelFormOpen,
	} = activityStore;

	const initializeForm = () => {
		if (initialFormState) {
			return initialFormState;
		} else {
			return {
				id: '',
				title: '',
				description: '',
				category: '',
				date: '',
				city: '',
				venue: '',
			};
		}
	};

	const [activity, setActivity] = useState<IActivity>(initializeForm);

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
			createActivity(newActivity);
		} else {
			editActivity(activity);
		}
	};

	return (
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
					onClick={cancelFormOpen}
					floated="right"
					type="button"
					content="Cancel"
				/>
			</Form>
		</Segment>
	);
};

export default observer(ActivityForm);
