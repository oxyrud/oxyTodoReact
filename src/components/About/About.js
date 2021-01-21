import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import styles from '../About/About.module.css';
import classnames from 'classnames';
import fork from '../About/Fork.svg';
import star from '../About/star.svg';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		bio: '',
		name: '',
		isError: false,
		errorValue: '',
		avatar: '',
        language: '',
        updated: '',
        firstRepo: 0,
        lastRepo:1
	};

	lastPage = () => {
		this.setState({
			firstRepo: this.state.firstRepo - 1,
			lastRepo: this.state.lastRepo - 1,
		});
	};

	nextPage = () => {
		this.setState({
			firstRepo: this.state.firstRepo + 1,
			lastRepo: this.state.lastRepo + 1,
		});
	};

    componentDidMount(){
    	octokit.repos.listForUser({
    		username: 'oxyrud'
    	}).then(({data}) => {
    		this.setState({
                repoList: data,
                isLoading: false
    		})
    	})

    	.catch(e => 
    		this.setState({
    	        isError: true,
    	        isLoading: false,
                errorValue: e.name
    	    })
    	)
    	
        octokit.users.getByUsername({
            username:'oxyrud'
        }).then(({data}) => {
        	this.setState({
        		bio: data.bio,
        		name: data.name,
        		avatar: data.avatar_url,
        		profile: data.html_url
        	})
        })
        .catch(e => 
    		this.setState({
    	        isError: true,
    	        isLoading: false,
    	        errorValue: e.name
    	    }),   
    	)
    }

	render() {
		const {isLoading, repoList,name,bio,isError,errorValue,avatar,profile,firstRepo,lastRepo} = this.state;
        const repoListPage = repoList.slice(firstRepo,lastRepo);
		
		return (
			<div> {!isError ?
            <CardContent>
            <div className={styles.about_wrap}>
                <div className={styles.about_avatar}> {isLoading ? <CircularProgress /> : <img className={styles.avatar_img} src= {avatar}  alt=""></img>} </div>
                <div className={styles.about_me}>
                    <h1> {isLoading ? <CircularProgress /> : name} </h1>
                    <h2> {isLoading ? <CircularProgress /> : bio} </h2>
                    <a href={profile}>{'Profile at Githab'}</a>
                </div>
            </div>
	            <h2> { isLoading ? <CircularProgress /> : 'My  repos'}</h2>
                {!isLoading &&<ol className={styles.repo}>{repoListPage.map(repo => (<li key = {repo.id}>
                		<a href={repo.html_url}>{repo.name}</a>
                		<div className={styles.repo_info}>
                		    <span className={classnames({
                		   	    [styles.language]: true,
                		   	    [styles.html]: repo.language === 'HTML',
                		   	    [styles.css]: repo.language === 'CSS',
                		   	    [styles.js]: repo.language === 'JavaScript'
                		    })}>
                		       {repo.language}
                		    </span>
                		    <span className={styles.stargazers}>
                		        <img className={styles.star_img} src={star}  alt="" />
                		        {repo.stargazers_count}
                		    </span>
                		    <span className={styles.fork}>
                		        <img className={styles.fork_img} src={fork}  alt="" />
                		        {repo.forks_count}    
                		    </span>
                		    <span className={styles.updated}>
                		        {'updated '}
                		        {new Date(repo.updated_at).toLocaleString('en-US',{
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',})}
                            </span>
                        </div>
                	</li>))}
                </ol>}
                <div className={styles.pagination}>
                    <button className={styles.pagination_button}
                        onClick={this.lastPage}
                        disabled={firstRepo < 1}
                    >
                    Back
                    </button>
                    <button className={styles.pagination_button}
                        onClick={this.nextPage}
                        disabled={repoList.length < lastRepo}
                    >
                    Forward
                    </button>
                </div>
	        </CardContent> 
	        : errorValue} </div>       
	    );
	}    
}

export default About;
