import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
	setEditMode: (editMode: boolean) => void;
	activity: IActivity;
	createActivity: (activity: IActivity) => void;
	editActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
	setEditMode,
	activity: initialFormState,
	createActivity,
	editActivity,
}) => {
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
				<Button floated="right" positive type="submit" content="Submit" />
				<Button
					onClick={() => setEditMode(false)}
					floated="right"
					type="button"
					content="Cancel"
				/>
			</Form>
		</Segment>
	);
};

export default ActivityForm;
