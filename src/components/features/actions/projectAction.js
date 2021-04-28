export const createType = 'CREATE_PROJECT';
export const createProject = (title, content) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		dispatch({
			type: createType,
			title: title,
			content: content,
		});
	};
};
