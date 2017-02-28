import React, { Component, PropTypes } from 'react';

class Counter extends Component{
	constructor(props){
		super(props);
		this.state = {
			act: props.onAdd,
			isZero: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleSubmit(e){
		e.preventDefault();
		let x = this.x.value,
			y = this.y.value,
			actType = this.actType.value;

		console.log('actType:',actType);

        //验证除数不能为0
		if(actType === 'onDivide' &&  y == 0){
			this.setState({
				isZero: true
			});
			return ;
		}else{
			this.setState({
				isZero: false
			});
		}

		switch (this.actType.value){
		case 'onSubtract':
			this.props.onSubtract(x,y);
			break;
		case 'onMultiply':
			this.props.onMultiply(x,y);
			break;
		case 'onDivide':
			this.props.onDivide(x,y);
			break;
		default:
			this.props.onAdd(x,y);
			break;
		}

	}

	render(){
		console.log( this.props );
		return (
			<div className="container">
				<form className="form-horizontal" role="form" onSubmit = { this.handleSubmit }>
					<div className="form-group">
						<h1>计算器结果为： { this.props.value }</h1>
                        <div className="alert alert-danger" style={{'display': this.state.isZero ? 'block' : 'none'}}>除数不能为0！</div>
					</div>
					<div className="form-group">
						<div className="col-sm-3">
                            <input type="text" className="form-control" ref = { ref => this.x = ref} required/>
                        </div>
						<div className="col-sm-2">
                            <select className="form-control"
                                    ref = {ref => this.actType = ref }>
                                <option value="onAdd"> + </option>
                                <option value="onSubtract"> - </option>
                                <option value="onMultiply"> * </option>
                                <option value="onDivide"> / </option>
                            </select>
                        </div>
						<div className="col-sm-3">
                            <input type="text" className="form-control" ref = { ref => this.y = ref}  required />
                        </div>
						<div className="col-sm-2">
							<button type="submit" className = "btn btn-primary">=</button>
						</div>
						<div className="col-sm-2"> { this.props.value }</div>
					</div>
				</form>
			</div>
		);
	}
}

Counter.propTypes = {
	value: PropTypes.number,
	onAdd: PropTypes.func,
	onSubtract: PropTypes.func,
	onMultiply: PropTypes.func,
	onDivide: PropTypes.func,
};

export default Counter;