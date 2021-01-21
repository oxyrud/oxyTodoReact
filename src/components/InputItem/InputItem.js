import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
	state = {
		inputValue:'',
		inputLabel:'Добавить дело'
	};

    onButtonClick=() => {
    	if(this.state.inputValue !== ''){
    	    this.setState({
    		    inputValue: '',
    		    inputLabel:'Добавить дело'
    	    });

    	    this.props.onClickAdd(this.state.inputValue);
    	}   else{this.setState({
                inputLabel:"Поле не должно быть пустым"
    	    });
    		
    	};


    }
	render(){
		const {onClickAdd} = this.props;
		return  (<div>
	        <TextField
	            id = "Dense"
	            label = {this.state.inputLabel}
	            margin = "dense"
                fullWidth
                value = {this.state.inputValue}
                onChange = {event => this.setState({inputValue:event.target.value})}
	        />
	        <Button
	            variant = "contained"
	            color = "default"
	            onClick = {this.onButtonClick}
	            fullWidth
	        >
	            Добавить
	        </Button>
        </div>);
	}
}

export default InputItem;

