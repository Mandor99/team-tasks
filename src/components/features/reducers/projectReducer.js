import { createType } from '../actions/projectAction';

const initState = {
	projects: [{ id: 1, title: 'title 1', content: 'content 1' }],
};
const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case createType:
			return {
				...state,
				projects: [
					...state.projects,
					{ id: 2, title: action.title, content: action.content },
				],
			};
		// break;

		default:
			return state;
	}
};
export default projectReducer;
