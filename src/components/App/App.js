import React from 'react';
import Card from '@material-ui/core/Card';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Todo from'../Todo/Todo';

import About from '../About/About';
import Contacts from'../Contacts/Contacts';

import styles from'./App.module.css';
import logo from '../App/WHS_black.svg';

const App = () =>
    (<Router>
        <div className = {styles.app_wrap}>
    	    <Card className = {styles.sidebar}>
    	        <div className = {styles.sidebar_items}>
    	            <Link to ='/' className = {styles.link}><div className = {styles.sidebar_item}>Обо мне</div></Link>
    	            <Link to ='/todo' className = {styles.link}><div className = {styles.sidebar_item}>Дела</div></Link>
    	            <Link to ='/contacts' className = {styles.link}><div className = {styles.sidebar_item}>Контакты</div></Link>
    	        </div>
                <img className={styles.logo_img} src={logo}  alt="" />
    	    </Card>
    	    <Card className = {styles.content}>
    	        <Route path='/' exact component = {About} />
                <Route path='/todo' component = {Todo} />
                <Route path='/contacts' component = {Contacts} />
    	    </Card>
        </div>
    </Router>);
export default App;

