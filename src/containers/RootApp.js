import { connect } from 'react-redux';
import Counter from '../components/Counter/Counter';

const RootApp = connect(
	( state ) => {
		return {
			value : state
		};
	},
	( dispatch ) => {
		return {
			onAdd: (x,y) =>dispatch({ type: 'ADDITION', x:x, y:y}),
			onSubtract: (x,y) => dispatch({ type: 'SUBTRACTION', x:x, y:y}),
			onMultiply: (x,y) => dispatch({ type: 'MULTIPLICATION', x:x, y:y}),
			onDivide: (x,y) => dispatch({ type: 'DIVISION', x:x, y:y})
		};
	}

)( Counter );

export default RootApp;