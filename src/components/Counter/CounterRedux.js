export function counter(state = [],action){
	switch( action.type ){
        //加法
	case 'ADDITION':
		return parseFloat( action.x ) + parseFloat( action.y );
        //减法
	case 'SUBTRACTION':
		return action.x - action.y;
        //乘法
	case 'MULTIPLICATION':
		return action.x*action.y;
        //除法
	case 'DIVISION':
		return action.x/action.y;
	default:
		break;

	}
}

