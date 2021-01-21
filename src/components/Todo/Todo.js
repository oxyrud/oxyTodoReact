import React, {useState,useEffect} from 'react';
import InputItem from '../InputItem/InputItem.js';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer.js';
import styles from './Todo.module.css';

const Todo = () => {
    const state = {
        items: JSON.parse(localStorage.getItem("items")) || [],
        filter:"all",   
    };

    const [items,setItems] = useState(state.items);
    const [count,setCount] = useState(items.length);
    const [filter,setFilter] = useState("all");
    const [filteredItems,setFilteredItems]= useState(state.items);

    useEffect(() => {
    localStorage.setItem("items",JSON.stringify(items));
});

    const onClickDone = id => {
        const newItemList = items.map(item => {
            const newItem = { ...item};

            if(item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        setItems(newItemList);
        setFilteredItems(filterState(newItemList,filter));
    };

    const onClickDelete = id => {
        const newItemList = items.filter(item => item.id !==id)
        setItems(newItemList);
        setFilteredItems(filterState(newItemList,filter));
    };

    const onClickAdd = value => {
        const newItemList =[
            ...items,
            {
                value ,
                isDone: false,
                id: count + 1
            }
        ]
        setItems(newItemList);
        setFilteredItems(filterState(newItemList,filter));
        setCount(count + 1);
    };

    const onClickFilter = string => {
        const newItemList = items;
        setFilter(string);
        setFilteredItems(filterState(newItemList,string));
    }

    function filterState (arr,string) {
        return (string === 'active' ?
            arr.filter(item => !item.isDone) :
                string === 'done' ?
                arr.filter(item => item.isDone) : arr)
    }

    return(
            <div className = {styles.wrap}>
                <h1 className = {styles.title}>Важные дела</h1>
                <InputItem  onClickAdd = {onClickAdd} />
                <ItemList 
                    items = {filteredItems}
                    onClickDone = {onClickDone} 
                    onClickDelete = {onClickDelete} />
                <Footer
                    onClickFilter = {onClickFilter} 
                    count = {items.length}
                    countdone = {items.filter(item => item.isDone).length}  />
            </div>
    );
};

export default Todo;

