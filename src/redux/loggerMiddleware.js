const loggerMiddleware = store => next => action => {
	const { getState, dispatch } = store;
	console.group(action.type);
	console.log(action);
	console.log('previous value:', getState());
	let res = next(action);
	console.log('next state:', getState());
	console.groupEnd(action.type);
	return res;
};
export default loggerMiddleware;