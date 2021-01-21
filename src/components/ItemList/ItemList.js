import React from 'react';
import Item from '../Item/Item.js'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import styles from '../ItemList/ItemList.module.css';

class ItemList extends React.Component {

	render(){
		const {items, onClickDone,onClickDelete} = this.props;

		return (<ul>
            {items.map(item => (<div className = {styles.item_list} key={item.id}>
    	        <Checkbox
    	            checked = {item.isDone}
    	            tabIndex = {-1}
    	            onClick = {() => onClickDone(item.id)}
    	        />
    	        <Item
    	            value = {item.value}
    	            isDone = {item.isDone} 
    	            id = {item.id}
    	            onClick = { () => onClickDone(item.id)}
                />
    	        <div className = {styles.item_wrap}>
    	        </div>
                <DeleteIcon 
                    onClick={() => onClickDelete(item.id)}
                />    
            </div>))}
        </ul>);
    }
}

export default ItemList;

